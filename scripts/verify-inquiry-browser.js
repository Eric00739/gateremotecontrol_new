// Run with playwright-cli run-code --filename after opening the local preview.
// The CLI evaluates this function expression and supplies its active page.
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
async (page) => {
  const baseUrl = new URL(page.url()).origin;
  if (!['localhost', '127.0.0.1', '[::1]'].includes(new URL(baseUrl).hostname)) {
    throw new Error('Run inquiry checks against a local preview.');
  }
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  await page.addInitScript(() => {
    window.__inquiryTest = { opened: [], copied: [], pending: [], defer: false, fail: false, fallbacks: 0 };
    window.open = (url) => {
      window.__inquiryTest.opened.push(String(url));
      return null;
    };
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: (text) => {
          window.__inquiryTest.copied.push(text);
          if (window.__inquiryTest.defer) {
            return new Promise((resolve, reject) => window.__inquiryTest.pending.push({ resolve, reject }));
          }
          return window.__inquiryTest.fail ? Promise.reject(new Error('Clipboard unavailable in test')) : Promise.resolve();
        },
      },
    });
  });
  const close = async () => {
    await page.getByRole('dialog').locator('button').first().click();
    await page.getByRole('dialog').waitFor({ state: 'hidden' });
  };
  const open = async (trigger, type) => {
    await trigger.click();
    await page.getByRole('dialog').waitFor();
    await page.waitForFunction(() => document.activeElement?.id === 'lead-details');
    assert(await page.locator('#lead-request-type').inputValue() === type, `Wrong inquiry type: ${type}`);
    assert(await page.locator('#lead-request-details').getAttribute('open') === null, 'Request details must start closed');
    assert(await page.locator('#lead-contact-details').getAttribute('open') === null, 'Contact details must start closed');
  };
  const layouts = [];
  const inquiryCases = [];
  for (const locale of ['en', 'es', 'pt', 'fr', 'it', 'ru']) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 });
      await page.goto(`${baseUrl}/${locale}`);
      await page.locator('h1').waitFor();
      const automotive = page.locator('#products article').nth(3);
      const custom = automotive.locator('button[data-inquiry-type="oem"]');
      const replacement = automotive.locator('button[data-inquiry-type="compatibility"]');
      assert(await custom.count() === 1 && await replacement.count() === 1, `${locale}: automotive remote needs two intents`);
      const product = await automotive.locator('h3').innerText();
      await open(custom, 'oem');
      assert(await page.locator('#lead-product').inputValue() === product, `${locale}: missing automotive remote context`);
      await page.keyboard.press('Shift+Tab');
      assert(await page.getByRole('dialog').locator('button').first().evaluate((element) => element === document.activeElement), `${locale}: focus did not return to close`);
      await page.keyboard.press('Shift+Tab');
      assert(await page.getByRole('dialog').locator('button').last().evaluate((element) => element === document.activeElement), `${locale}: backward focus escaped dialog`);
      await page.keyboard.press('Tab');
      assert(await page.getByRole('dialog').locator('button').first().evaluate((element) => element === document.activeElement), `${locale}: forward focus escaped dialog`);
      await page.locator('#lead-details').fill(`Custom remote requirement ${locale}-${width}`);
      await page.getByRole('dialog').locator('button').nth(1).click();
      const message = await page.evaluate(() => new URL(window.__inquiryTest.opened.at(-1)).searchParams.get('text'));
      assert(message.includes(product) && message.includes(`Custom remote requirement ${locale}-${width}`), `${locale}: incomplete WhatsApp draft`);
      await page.locator('#lead-request-details summary').click();
      await page.locator('#lead-request-type').selectOption('compatibility');
      await close();
      await open(custom, 'oem');
      assert((await page.locator('#lead-details').inputValue()).includes(`Custom remote requirement ${locale}-${width}`), `${locale}: text draft lost on reopen`);
      await page.getByRole('dialog').locator('button').nth(2).click();
      await page.locator('#lead-email-error').waitFor();
      assert(await page.locator('#lead-contact-details').getAttribute('open') !== null, `${locale}: email group did not expand`);
      assert(await page.evaluate(() => document.activeElement?.id) === 'lead-email', `${locale}: invalid email did not receive focus`);
      await close();
      await open(replacement, 'compatibility');
      assert(await page.locator('#lead-email-error').count() === 0, `${locale}: email error leaked into another request`);
      assert(await page.locator('#lead-details').inputValue() === '', `${locale}: custom text leaked into replacement draft`);
      await close();

      const modelRows = page.locator('#compatibility [data-model-reference="FAAC XT2"]');
      const model = width === 390 ? modelRows.first() : modelRows.last();
      await open(model.locator('button[data-inquiry-type="compatibility"]'), 'compatibility');
      assert(await page.locator('#lead-details').inputValue() === 'FAAC XT2', `${locale}: model inquiry did not prefill original model`);
      await close();
      await page.locator('#compatibility input[type="search"]').fill('UNLISTED-TEST-REMOTE');
      await open(page.locator('#compatibility button[data-inquiry-type="compatibility"]').first(), 'compatibility');
      assert(await page.locator('#lead-details').inputValue() === 'UNLISTED-TEST-REMOTE', `${locale}: unlisted model not preserved`);
      await close();
      inquiryCases.push({ locale, width, automotiveIntents: true, draftIsolation: true, modelPrefill: true, optionalDetails: true });

      for (const route of ['', '/oem-odm', '/compatibility', '/compatibility/faac']) {
        if (route) await page.goto(`${baseUrl}/${locale}${route}`);
        await page.locator('h1').waitFor();
        const layout = await page.evaluate(() => ({
          language: document.documentElement.lang,
          headings: document.querySelectorAll('h1').length,
          overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          title: document.title,
        }));
        assert(layout.language === locale && layout.headings === 1 && !layout.overflow, `Layout failure ${locale}${route}@${width}: ${JSON.stringify(layout)}`);
        layouts.push({ locale, route, width, ...layout });
      }
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${baseUrl}/en`);
  await page.evaluate(() => { window.__inquiryTest.defer = true; });
  const heroCustom = page.locator('#home-intro button[data-inquiry-type="oem"]');
  const heroReplacement = page.locator('#home-intro button[data-inquiry-type="compatibility"]');
  await open(heroCustom, 'oem');
  const idleCopy = await page.getByRole('dialog').locator('button').last().innerText();
  await page.getByRole('dialog').locator('button').last().click();
  await page.waitForFunction(() => window.__inquiryTest.pending.length === 1);
  await close();
  await open(heroReplacement, 'compatibility');
  await page.evaluate(() => window.__inquiryTest.pending.shift().resolve());
  await page.waitForTimeout(50);
  assert(await page.getByRole('dialog').locator('button').last().innerText() === idleCopy, 'Late clipboard result leaked into next inquiry');
  await page.evaluate(() => { window.__inquiryTest.defer = false; });
  await page.getByRole('dialog').locator('button').last().click();
  await page.waitForFunction((idle) => [...document.querySelectorAll('[role="dialog"] button')].at(-1)?.textContent?.trim() !== idle, idleCopy);
  await page.waitForTimeout(2100);
  assert(await page.getByRole('dialog').locator('button').last().innerText() === idleCopy, 'Clipboard success did not expire');
  await close();
  await page.evaluate(() => {
    window.__inquiryTest.defer = true;
    document.execCommand = () => {
      window.__inquiryTest.fallbacks += 1;
      return true;
    };
  });
  await open(heroCustom, 'oem');
  await page.getByRole('dialog').locator('button').last().click();
  await page.waitForFunction(() => window.__inquiryTest.pending.length === 1);
  await close();
  await open(heroReplacement, 'compatibility');
  await page.evaluate(() => window.__inquiryTest.pending.shift().reject(new Error('Deferred clipboard failure')));
  await page.waitForTimeout(50);
  assert(await page.evaluate(() => window.__inquiryTest.fallbacks) === 0, 'Old clipboard failure copied content in the next inquiry');
  assert(await page.getByRole('dialog').locator('button').last().innerText() === idleCopy, 'Old clipboard failure changed the next inquiry');
  await page.evaluate(() => { window.__inquiryTest.defer = false; window.__inquiryTest.fail = true; });
  await page.getByRole('dialog').locator('button').last().click();
  await page.waitForFunction((idle) => [...document.querySelectorAll('[role="dialog"] button')].at(-1)?.textContent?.trim() !== idle, idleCopy);
  assert(await page.evaluate(() => window.__inquiryTest.fallbacks) === 1, 'Current inquiry fallback did not copy');
  assert(await page.getByRole('dialog').locator('button').last().evaluate((element) => element === document.activeElement), 'Fallback copy lost dialog focus');
  await close();
  assert(pageErrors.length === 0, `Page errors: ${pageErrors.join('; ')}`);
  return { layouts: layouts.length, inquiryCases: inquiryCases.length, sessionRegressionChecks: 3, pageErrors, externalActionsIntercepted: true };
}
