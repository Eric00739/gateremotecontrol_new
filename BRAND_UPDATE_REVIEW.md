# WindChord Remote 全站更名与验收

日期：2026-10-06（Asia/Shanghai）。本轮已提交、推送并完成 GitHub Pages 部署，业务提交 `32f1801`；发布凭证与线上复测见末尾。连续性评估：CONTINUE；范围和事实来源明确。

## 已完成

整个网站采用 **WindChord Remote** 作为对外品牌，正式公司名称为 **Dongguan Fengxian Electronics Technology Co., Ltd.（东莞市风弦电子科技有限公司）**。两项均已由所有者确认。Logo 去掉底部文字，保留 W、遥控器与无线波图形，使用透明 PNG；页头文字由 HTML 单独显示，手机只显示图形，页脚展示品牌与公司全称。

从买家判断与搜索引擎识别两个需求出发：买家需要知道供应什么、责任主体是谁、怎样联系；搜索引擎需要从可见页面和元数据识别同一主体。因此保留产品／采购主题，集中维护品牌与公司身份，并保持原域名与历史 URL。

| 网站部分 | 本轮处理 |
| --- | --- |
| 首页及产品／应用区域 | 共用新页头、页脚和首页标题；原有产品与应用内容继续保留 |
| 兼容目录与六个品牌指南 | 六语标题、本站品牌名称及独立售后说明统一，原系统品牌参考保留 |
| OEM、质量流程、目录申请 | 六语标题、页头／页脚和公司主体一致 |
| 博客目录与全部正文页面 | 品牌标题后缀、页脚、发布者身份及 Logo 统一，正文主题和原文章日期不因更名改变 |
| WhatsApp、邮件草稿与博客提问 | 从站点数据读取原联系方式，实际地址保持不变 |
| 搜索与分享元数据 | 标题、`og:site_name`、Organization、WebSite、BlogPosting publisher 使用一致的品牌与主体 |
| 浏览器图标 | 使用同一图形生成 16／32／48 像素 ICO |
| sitemap、robots、历史入口 | 保留原规则；六语 sitemap/robots 静态路径修复随本轮待发布代码一起验证 |

`src/data/site.ts` 是品牌、公司名称、Logo 和联系方式的统一来源。Organization 增加公司英文 `legalName`、中文 `alternateName` 与稳定的 `@id`；WebSite 使用域名根地址并关联同一 Organization；博客 publisher 使用同一公司和真实 Logo 文件。

## 保留的内容与事实

- 域名：`https://www.gateremotesource.com`。
- 邮箱：`sales@gateremotesource.com`。
- 电话／WhatsApp：`+86 158 9964 8898`／`8615899648898`。
- 原公开地址：`Dongguan, Guangdong, China`。
- 原 canonical、hreflang、noindex、robots 和 43 条旧 URL 重定向。
- 更名开始时的 19 篇文章日期逐篇与基线提交 `e0c2679` 一致；更名没有新增文章修改日期到 sitemap、BlogPosting 或 Open Graph。

验证期间，同一工作区另外新增了 `different-codes-rf-remote-collisions`，最终构建包含 20 篇文章；本轮没有编辑其正文、发布日期或图片。它自动继承整站品牌并进入 sitemap，不将另一项内容工作记为更名成果。

## 验证结果

`npm run lint`、`npm run build`、`git diff --check` 通过。最终构建：230 个静态生成入口、290 个导出 HTML、92 条 sitemap URL（72 个主要页面和 20 篇英文文章）、43 条重定向、137 项引用媒体。构建守卫检查 223 个含公共页头的页面，品牌、公司、Logo、联系方式与链接目标一致；六套词典同构，126 组 FAQ 和既有文章检查通过。

浏览器检查六语首页各 320／390／768／1024／1280／1440 像素，以及根首页、兼容目录、FAAC 指南、OEM、质量、目录、博客目录和一篇正文各 320／1440 像素，共 52 组：HTTP 200、无横向溢出、页头区域无重叠、Logo 加载正常、公司与联系方式正确、单一 H1、无 JavaScript 运行异常。

初检发现四种语言在 1024 像素下导航撑出屏幕。完整导航门槛改为 1280 像素，较窄屏幕使用原折叠菜单；上述 52 组复测通过。

临时导出副本先确认完整基线退出 0，再分别注入旧品牌标题、错误页脚公司名称、错误 Organization Logo、错误邮件链接和错误 WhatsApp 链接；五项均退出 1，并报告对应问题。副本已删除，正式导出未改。Logo 的透明通道与 544×544 尺寸正常；ICO 三个 PNG 帧均可解码。

手机询盘、Escape 焦点恢复、手机菜单、英语切葡萄牙语和 1024 像素法语折叠菜单通过；WhatsApp 测试草稿目标为原号码，外部打开动作被拦截，没有发送询盘。

## 修改文件

- 数据与元数据：`src/data/{site,servicePages}.ts`、`src/lib/seo.ts`、六套 `src/i18n/*.ts`；旧英文及本地化博客／兼容性路由中的品牌标题。
- 公共组件：`src/components/{Header,Footer,LeadModal,BlogCommentBox}.tsx`。
- 素材：`public/images/brand/{windchord-logo.png,windchord-logo-144.png,provenance.json}`、`src/app/favicon.ico`。Logo 使用内置 `image_gen` 编辑；编辑要求、来源与文件校验和见素材记录。
- 构建守卫与记录：`scripts/{verify-export,generate-static-redirects}.mjs`、README、本执行计划及本文件。
- 同时待发布的 sitemap 修复文件与验证见 [SEO_REVIEW.md](SEO_REVIEW.md)。

## 发布后检查

确认 Pages 部署成功后，检查新 Logo、favicon、六语首页及代表页面元数据，再检查根与六语 sitemap/robots。Search Console 继续使用 `https://www.gateremotesource.com/sitemap.xml`，无需换域名或迁移 URL。

更名实施不证明搜索结果已经改名或收录／排名提升；这些应在部署后通过 Search Console 与实际搜索结果核对。公司完整地址、工厂关系、真实产品和法律资料仍按执行计划 D1／D4／D5／D6 补充；本轮只落实已经确认的名称，不补写其他身份事实。

## 上传前追加对抗审查

所有者授权“对抗性优化所有更新，没有问题就上传”。重新审查全部待发布 diff、元数据、静态文件脚本、词典及素材；GitHub 身份和远端 `main` 已核对。

断点前后检查进一步发现西语、意语、葡语在 640 像素出现溢出；页头品牌文字改为 768 像素起显示，完整导航仍为 1280 像素起显示。页头与页脚使用 144×144 的透明 PNG（9,464 字节），相较 87,418 字节的大图减少 89.2% 传输量，页头设为 eager；Organization 保留 544×544 大图，图形不变。

新增首页 Organization／WebSite 必须存在的检查，以及统一实体 ID、中文名称和博客发布者地址检查。Logo 检查实际透明像素，防止带 alpha 通道但全部不透明；favicon 检查目录长度、帧边界、解码尺寸和 16／32／48 像素帧，防止只有 ICO 文件头的坏文件通过。

最终构建为 237 个静态生成入口、297 个 HTML、93 条 sitemap URL（72 个主要页面与 21 篇英文文章）、43 条重定向、146 项引用媒体，230 个公共品牌页面一致。新增的 `wireless-receiver-controller-factory-testing` 由聊天“新的文章发布”单独完成并提交 `b33df15`，本轮没有编辑其正文、日期或图片。

修改后的六语首页与代表页面共 76 个视口组合（新增 639／640／767／1279 像素边界）通过，无溢出、品牌区重叠、Logo 加载失败或 JavaScript 运行异常。十二项导出副本测试均准确退出 1：旧品牌、错误公司、错误邮箱／WhatsApp、Organization／WebSite 缺失、重复／遗漏 URL、错误 hreflang、收录页 noindex、语言 sitemap 不一致、截断 favicon。临时副本已删除。

新增文章 `dateModified`、带 alpha 通道但无透明像素的大图和显示图三个负例也准确退出 1。六语手机询盘草稿目标、Escape 焦点恢复和折叠菜单复查通过，WhatsApp 外部打开被拦截，没有发送消息。

## 已发布与线上复测

35 个业务／素材／记录文件已提交并推送到 `main`，提交为 [`32f1801`](https://github.com/Eric00739/gateremotecontrol_new/commit/32f180138cc64999042469e4c006eb0f9408a6d0)。[GitHub Pages 运行 37404030929](https://github.com/Eric00739/gateremotecontrol_new/actions/runs/37404030929) 的 build 与 deploy 均成功，2026-10-06 10:26（Asia/Shanghai）完成部署。

正式站的 93 个 sitemap 页面及根首页均为 HTTP 200，标题、元标签、canonical／hreflang、结构化数据、H1 与验证后的导出一致；公司名称、邮箱及 WhatsApp 链接正确，无旧品牌残留。根及六语 sitemap/robots 共 14 个文件逐字节一致，83 项引用媒体（含两档 Logo、favicon 与首页视频）的 SHA-256 一致，43 条旧重定向均保留。全部 HTTP 检查失败与重试均为 0。

正式六语首页和代表页面同一批 76 个视口组合复查通过，无横向溢出、页头重叠、Logo 加载失败或 JavaScript 运行异常。六语手机询盘草稿目标、Escape 焦点恢复和折叠菜单复查通过；外部 WhatsApp 打开被拦截，未发送测试询盘。英文桌面及俄语手机正式截图已审阅。

本节发布记录同步只修改文档，不改变网站行为。搜索结果是否更新名称、Search Console 收录和实际转化仍由对应平台及后续数据确认。
