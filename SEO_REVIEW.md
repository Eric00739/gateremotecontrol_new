# SEO 检查与 sitemap 更新

检查日期：2026-10-06（Asia/Shanghai）。仓库为 `Eric00739/gateremotecontrol_new`，首次检查基线为 `24da47b`。本轮 sitemap 修复随整站更名提交 `32f1801` 已发布，线上复查通过，凭证见末尾。

最终发布状态：全站品牌为 WindChord Remote，公司英文／中文名称已确认；验收见 [BRAND_UPDATE_REVIEW.md](BRAND_UPDATE_REVIEW.md)。同一工作区先后新增 `different-codes-rf-remote-collisions`、`wireless-receiver-controller-factory-testing`，正式根 sitemap 共 93 条 URL（72 个主要页面和 21 篇英文文章）。下方 90／91 条检查结果记录各自历史阶段。

## 首次检查结论（发布前）

根目录 sitemap 已存在，覆盖 72 个六语主要页面和 18 篇英文文章，共 90 个规范 URL。线上全部返回 HTTP 200；canonical、HTML/XML hreflang、页面语言、单一 H1、图片 alt 及标题/摘要去重检查通过。根 robots.txt 允许抓取并声明正确的 sitemap。

本次发现六个语言目录的 sitemap 和已抽查的 `/en/robots.txt` 返回 404。现有 Next.js 16.3.2 将 `[locale]/sitemap.ts` 导出成 `out/-/sitemap.xml`，没有生成预期的六语路径；语言 robots 路由也未生成所需静态文件。根 sitemap 正常，因此现有提交入口可用。

sitemap 修复阶段收尾时，同一工作区的聊天“翻译并发布遥控器故障排查文章”新增 `rf-remote-buttons-not-working`。该阶段本地构建已自动收录该篇，共 91 个 URL（72 个主要页面和 19 篇英文文章）。本轮没有编辑该文章或图片；线上检查的 90 个 URL 与本地数量分别记录，不混作同一版本。

## sitemap 修复实施（发布前阶段）

- 两个 sitemap 路由使用 `src/lib/sitemap.ts`，后续新增页面只维护一份生成逻辑。
- 构建后通过 `scripts/generate-static-metadata.mjs` 生成六种语言的 `sitemap.xml` 和 `robots.txt`。语言 sitemap 与根文件完全一致，保留既有路径设计；根 robots.txt 不变。
- `scripts/verify-export.mjs` 检查语言文件是否存在且一致、URL 是否重复或遗漏、规范页是否被 noindex、HTML/XML hreflang 是否一致、语言映射目标是否收录、HTML 语言是否正确，以及英文正文在其他语言入口的 canonical/noindex 规则。
- 按所有者要求，文章保留最早一批的原发布日期数据；本次不新增文章 `lastmod`、BlogPosting `dateModified` 或 Open Graph 修改日期。原有 72 条主要页面的修改日期保持不变，不用构建时间刷新。
- 保留原有 90 个 URL、六语映射、43 条旧 URL 重定向和询盘行为；同步纳入另一聊天新增的英文文章，本地共 91 条。本轮没有新增产品、公司或认证事实。

## 其他 SEO 待办

| 优先级 | 项目 | 下一步 |
| --- | --- | --- |
| 已完成 | 发布本轮静态文件修复 | `32f1801` 部署成功，根及六语 sitemap/robots 线上复查通过 |
| P1 | Search Console 收录与搜索表现 | 提交或检查根 sitemap 的读取状态；查看未收录原因、Google 选择的 canonical、实际搜索词和目标市场表现 |
| P1 | 真实产品详情 | 按执行计划 D4/B05，先准备 3–5 个真实系列：编号、频率、协议、适用接收器、图片及确认过的商业条件，再建立详情页 |
| P1 | 公司与作者身份 | 公司名称与品牌已发布；按 D1/D5/B04 补可公开核验的工厂关系、联系人、完整地址和审核过的法律文本，再扩充 About/Contact |
| P2 | 标题长度 | 首次检查旧品牌版本有 16 页超过 65 字符线索；更名后需重新测量，不能沿用旧计数。后续保留主题与型号，按实际展示评估冗余词 |
| P2 | 博客目录摘要 | 首次检查的五种非英文目录摘要为 174–203 字符，是历史测量。后续复核当前摘要，压缩重复说明并保持搜索与社交摘要同源 |
| P2 | 尾斜杠旧链接 | 首次检查 `/en/` 返回 404，规范 `/en` 正常。先从 Search Console 或真实外链确认需求，并重新核对正式响应，再补具体重定向；本轮未做迁移 |
| P2 | 多语言文章 | 当前正文只有英文；非英文文章入口保留 `noindex,follow` 并 canonical 到英文。完整翻译及审核前不加入 sitemap 或文章 hreflang |
| P2 | 性能与搜索结果展示 | 发布后测代表页面的移动性能，并用 Rich Results Test 检查文章；本次未运行新的 Lighthouse 或取得 Search Console 数据 |

标题和摘要的字符数是排查线索，不是 Google 的硬限制。Google 会依据设备宽度截断标题；先保证主题清楚和各页内容独立。[Google 标题说明](https://developers.google.com/search/docs/appearance/title-link)

本轮保留已完成的博客事实修订和六语目录工作，不重复执行历史批次。资料依赖与实施边界仍以 `WEBSITE_IMPROVEMENT_PLAN.md` 为准。

## sitemap 修复阶段验收（历史）

`npm run lint` 和 `npm run build` 均通过。新增文章后的最后一次构建验证包含 223 个静态页面、283 个 HTML、91 条 sitemap URL、六语 sitemap/robots、43 条旧重定向、127 项引用媒体，以及既有词典、FAQ 和文章检查。

临时导出副本分别模拟语言 sitemap 缺失、重复 URL、规范页遗漏、收录页 noindex、错误 hreflang、文章新增修改日期；六项均正确退出 1 并报告对应问题，临时副本已删除。

新增文章前，独立 XML 解析确认 90 个唯一 URL、72 条原有页面修改日期，18 篇文章未新增日期；该阶段根 sitemap 与已发布文件逐字节一致。新增文章后的本地 XML 为 91 条，仅多出新文章，原有 URL 保留；六语文件与根文件一致。本次修复补齐语言路径静态文件并防止后续遗漏，现有根 sitemap 无需换地址或人为刷新。

线上检查针对修改前已发布的版本；本地构建不能证明线上已更新。检查未读取 Search Console、搜索排名、实际抓取日志或询盘转化数据，不据此判断已收录或排名改善。

HTTP 与不带 www 的域名入口均 301 到 `https://www.gateremotesource.com`。未知路径返回真实 404。`/en.html` 也可访问，但 sitemap 只列规范 `/en`，不重复提交 `.html` 地址。

## 发布后提交

1. 确认目标提交的 GitHub Pages build/deploy 成功。
2. 打开根 sitemap、robots.txt，以及六语 sitemap/robots，确认 HTTP 200、XML 可解析、URL 与 canonical 一致。
3. 在 Google Search Console 的 Sitemaps 中提交或检查 `https://www.gateremotesource.com/sitemap.xml`。已提交同一地址时无需换地址或删除旧记录。
4. 语言 sitemap 是兼容入口，无需分别提交。根 sitemap 适用于整个网站，是推荐的提交位置。[Google sitemap 指南](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
5. 用 URL Inspection 抽查首页、品牌页及英文文章的最新页面；随后查看 sitemap 读取状态和页面索引报告。

Google 使用可信的实际修改日期，并忽略 sitemap 的 `priority` 和 `changefreq`；这些已有字段本轮保留，不作为优化重点。[Google sitemap 日期说明](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#additional-notes-about-xml-sitemaps)

## 修改文件

- `src/app/sitemap.ts`
- `src/app/[locale]/sitemap.ts`
- `src/lib/sitemap.ts`
- `scripts/generate-static-metadata.mjs`
- `scripts/verify-export.mjs`
- `package.json`
- `README.md`
- `SEO_REVIEW.md`

## 已发布与线上复测

sitemap 修复已随业务提交 `32f1801` 发布。正式根及六语 sitemap/robots 共 14 个文件一致，93 个规范 URL 和根首页均为 200；元数据、canonical／hreflang、结构化数据和 H1 与本地一致，原文章日期及未翻译文章 noindex/canonical 策略保留，43 条旧 URL 重定向正常。完整发布凭证、线上媒体与交互验收统一见 [BRAND_UPDATE_REVIEW.md](BRAND_UPDATE_REVIEW.md)。

本次没有替所有者登录 Search Console 或提交表单；提交入口仍为 `https://www.gateremotesource.com/sitemap.xml`。正式文件可正常读取，不等于 Google 已完成抓取或收录。
