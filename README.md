# GateRemoteSource

面向安装商、锁匠、批发商和 OEM 客户的多语言 RF 遥控器与接收器 B2B 静态网站。

## 本地运行

要求：Node.js 20（与 GitHub Pages 工作流一致）。

```bash
npm ci
npm run dev
```

打开 `http://localhost:3000/en`。可用语言：`en`、`es`、`fr`、`it`、`pt`、`ru`。

## 验证与构建

```bash
npm run lint
npm run build
```

`npm run build` 完成 Next.js 构建、旧 URL 重定向生成、HTML 语言标记修正，以及 sitemap、canonical 和重定向目标校验。任何校验失败都会令构建失败。

项目使用 Next.js `output: 'export'`，不要运行 `next start`。完整的本地交互检查使用 `npm run dev`；直接查看构建产物可运行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory out
```

打开 `http://127.0.0.1:4173/en.html`。这个简易服务不模拟 GitHub Pages 的无扩展名路由与重定向；不要据此验收完整导航。直接访问语言目录的 `index.html` 可能触发保留的旧 URL 重定向并跳到线上。

## 发布

GitHub Actions 工作流 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 会在 `main` 分支推送后构建 `out/` 并发布到 [正式网站](https://www.gateremotesource.com/en)。提交、推送和部署需要所有者授权；本地构建成功不代表线上已经更新。发布后核对目标提交的 Actions 结果，再检查正式 URL；当前发布凭证见 [执行计划](WEBSITE_IMPROVEMENT_PLAN.md)。

## 目录说明

- `src/app/`：Next.js App Router 路由与元数据。
- `src/components/`：首页、询盘、导航和内容组件。
- `src/i18n/`：六种语言词典；以 `en.ts` 为键结构基准。
- `src/data/`：兼容性、博客、服务页和站点数据。博客索引使用 `blog.ts` 的元数据，正文独立在 `blog-content.ts`；正文完整性在构建时检查。
- `public/`：静态图片和视频；素材存在不代表公司归属或场景已核验。
- `src/data/visuals.ts`：三个服务页的图片路径、来源类型和本地化 alt 键；现用素材为参考配图，真实来源仍待核验。
- `scripts/generate-static-redirects.mjs`：旧 URL 重定向和导出 HTML 的语言标记修正。
- `scripts/legacy-redirects.mjs`：旧 URL 重定向数据。
- `scripts/verify-export.mjs`：静态导出、sitemap、canonical 和重定向目标校验。

## 询盘与内容边界

这是纯静态站点。询盘支持打开 WhatsApp、本机邮件草稿，或复制询盘内容；网站不会接收表单数据或上传附件。产品、品牌和无匹配搜索词会带入需求；同一页面和需求上下文的编辑在当前 Provider 生命周期内保留，刷新后丢失，不写入浏览器存储。WhatsApp 不要求姓名或邮箱；邮件草稿要求有效邮箱。打开外部应用不代表已经发送或收到。

接入真实表单、附件上传、CRM、统计或其他第三方服务前，需要先确认托管、隐私和密钥方案。

不要把未经站点所有者确认的公司身份、工厂关系、SKU、MOQ、认证、交期、客户案例或图片场景写成事实。真实产品和工厂图片到位前，不重新启用“工厂证据”图库。

当前可执行改造与仍需所有者输入的事项见 [WEBSITE_IMPROVEMENT_PLAN.md](WEBSITE_IMPROVEMENT_PLAN.md)。
