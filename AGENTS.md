# GateRemoteSource project rules

- 这是基于 Next.js 16 App Router 的多语言 B2B 静态网站。修改 Next.js 代码前，先阅读 `node_modules/next/dist/docs/` 中相关当前版本文档。
- 使用 `npm run lint` 验证代码；涉及路由、元数据、静态导出或构建脚本时还必须运行 `npm run build`。
- `next.config.mjs` 使用 `output: 'export'`：不要新增 API Route、Server Action、运行时上传或依赖服务端状态的功能；询盘目前只能打开 WhatsApp 或邮件草稿。
- 英文词典 `src/i18n/en.ts` 是键结构基准。新增或修改本地化键时，六套词典必须保持同构。
- 保留现有 URL、canonical、hreflang、robots、sitemap 和旧 URL 重定向，除非任务明确包含迁移策略。
- 不编造公司身份、工厂关系、产品参数、MOQ、交期、认证、客户案例或图片场景；真实图片到位前，不恢复工厂证据图库。
- 真实可执行工作与所有者输入阻塞项以 `WEBSITE_IMPROVEMENT_PLAN.md` 为准；不要把其中已完成批次重新实施。
- 使用 `apply_patch` 编辑文件；不自动提交、推送或部署。
