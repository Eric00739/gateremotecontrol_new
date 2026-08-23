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

`npm run build` 生成 `out/` 静态站点，并生成旧 URL 的静态重定向页面。由于项目使用 Next.js `output: 'export'`，不要运行 `next start`；若需预览构建产物，可运行：

```bash
npx serve out -l 4173
```

## 发布

GitHub Actions 工作流 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 会在 `main` 分支推送后构建 `out/` 并发布到 GitHub Pages。当前仓库未在本地自动提交、推送或部署；本地构建成功不代表线上已经更新。

## 目录说明

- `src/app/`：Next.js App Router 路由与元数据。
- `src/components/`：首页、询盘、导航和内容组件。
- `src/i18n/`：六种语言词典；以 `en.ts` 为键结构基准。
- `src/data/`：兼容性、博客、服务页和站点数据。
- `public/`：已批准的静态图片和视频。
- `scripts/generate-static-redirects.mjs`：旧 URL 重定向和导出 HTML 的语言标记修正。

## 询盘与内容边界

这是纯静态站点。询盘按钮只会打开 WhatsApp 或本机邮件草稿；网站不会接收表单数据或上传附件。接入真实表单、附件上传、CRM、统计或其他第三方服务前，需要先确认托管、隐私和密钥方案。

不要把未经站点所有者确认的公司身份、工厂关系、SKU、MOQ、认证、交期、客户案例或图片场景写成事实。真实产品和工厂图片到位前，不重新启用“工厂证据”图库。

当前可执行改造与仍需所有者输入的事项见 [WEBSITE_IMPROVEMENT_PLAN.md](WEBSITE_IMPROVEMENT_PLAN.md)。
