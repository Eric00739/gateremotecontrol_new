# WindChord Remote 全站更名与验收

核对日期：2026-10-06（Asia/Shanghai）。全站更名和六语 sitemap/robots 修复已发布并完成线上验收。本文是本次更名的最终改动、验收与发布凭证；早期中间结果以 Git 历史为准。当前技术事实与未解除的资料依赖见 [执行计划](WEBSITE_IMPROVEMENT_PLAN.md)。

## 已完成

对外品牌为 **WindChord Remote**，正式公司名称为 **Dongguan Fengxian Electronics Technology Co., Ltd.（东莞市风弦电子科技有限公司）**，均由所有者确认。品牌、公司名称、Logo 和联系方式统一维护在 `src/data/site.ts`。

| 网站部分 | 最终行为 |
| --- | --- |
| 首页、产品、应用、OEM、质量与目录 | 公共页头／页脚和六语标题使用新品牌；页脚展示公司全称 |
| 兼容目录与六个品牌指南 | 本站品牌及独立售后说明一致，原系统品牌参考和原 URL 保留 |
| 博客目录与正文 | 标题后缀、发布者和 Logo 统一，正文主题及原发布日期保留 |
| WhatsApp、邮件草稿与博客提问 | 读取统一联系方式，仍只打开草稿或复制内容 |
| 搜索与分享元数据 | Organization、WebSite、BlogPosting publisher 关联同一主体；包含英文 legalName、中文 alternateName 和稳定实体 ID |
| sitemap、robots 与旧入口 | 六语静态文件路径修复，保留 canonical、hreflang、noindex 与 43 条旧 URL 重定向 |

域名仍为 `https://www.gateremotesource.com`，邮箱为 `sales@gateremotesource.com`，电话／WhatsApp 为 `+86 158 9964 8898`／`8615899648898`，原公开地址为 `Dongguan, Guangdong, China`。更名开始时的 19 篇文章日期逐篇与基线 `e0c2679` 一致；没有新增文章 sitemap lastmod、BlogPosting dateModified 或 Open Graph 修改日期。

同一工作区另行发布了 `different-codes-rf-remote-collisions` 和 `wireless-receiver-controller-factory-testing`（后者提交 `b33df15`）。最终共 21 篇英文文章；本轮更名没有编辑这两篇的正文、日期或图片。

## Logo 与响应式修复

内置 `image_gen` 去掉原 Logo 底部文字，保留 W、遥控器与无线波图形及原配色，使用真实透明 PNG。页头文字由 HTML 显示：768 像素起显示品牌文字，1280 像素起显示完整导航，较窄屏幕使用折叠菜单。这修复了部分语言在 640／1024 像素下的溢出。

页头／页脚使用 144×144 PNG（9,464 字节），相较 544×544 大图（87,418 字节）减少 89.2% 传输量；页头设为 eager，Organization 使用大图。favicon 包含 16／32／48 像素帧。编辑要求、处理方式及校验和见 [素材来源记录](public/images/brand/provenance.json)。

## 最终验证

`npm run lint`、`npm run build`、`git diff --check` 通过。最终产物为 237 个静态生成入口、297 个 HTML、93 条 sitemap URL（72 个主要页面和 21 篇英文文章）、43 条重定向、146 项引用媒体、230 个公共品牌页面；六套词典同构，126 组 FAQ 检查通过。

六语首页覆盖 320／390／639／640／767／768／1024／1279／1280／1440 像素，根首页及兼容目录、FAAC、OEM、质量、目录、博客目录和一篇正文覆盖 320／1440 像素，共 76 个页面／视口组合。无横向溢出、页头重叠、Logo 加载失败或 JavaScript 运行异常。六语手机询盘目标、Escape 焦点恢复与折叠菜单通过；外部 WhatsApp 打开被拦截，没有发送测试询盘。

临时导出副本先验证完整基线退出 0，再进行 15 项负例：旧品牌、错误公司、错误邮箱、错误 WhatsApp、缺少 Organization、缺少 WebSite、重复 URL、遗漏 URL、错误 hreflang、规范页 noindex、语言 sitemap 不一致、截断 favicon、新增文章 dateModified、伪透明大图、伪透明显示图。全部准确退出 1，临时副本已删除。

构建守卫要求首页 Organization／WebSite 存在，核对统一实体 ID、中文名称、博客发布者地址和真实联系方式；Logo 必须有实际透明像素，ICO 目录、帧边界、解码尺寸及三档尺寸必须有效。

## 发布与线上复测

35 个业务／素材／记录文件提交为 [`32f1801`](https://github.com/Eric00739/gateremotecontrol_new/commit/32f180138cc64999042469e4c006eb0f9408a6d0)。[Pages 运行 37404030929](https://github.com/Eric00739/gateremotecontrol_new/actions/runs/37404030929) build/deploy 成功，2026-10-06 10:26（Asia/Shanghai）完成部署。后续三份记录同步提交为 `303d00d`，[Pages 运行 37404356559](https://github.com/Eric00739/gateremotecontrol_new/actions/runs/37404356559) 于同日 10:30 完成；只修改文档，网站行为不变。

正式站 93 个 sitemap 页面及根首页均为 HTTP 200，标题、元标签、canonical／hreflang、结构化数据和 H1 与验收产物一致，公司名称、邮箱及 WhatsApp 正确。根及六语 sitemap/robots 共 14 个文件逐字节一致，83 项引用媒体（两档 Logo、favicon 与首页视频在内）SHA-256 一致，43 条旧重定向正常，HTTP 失败与重试均为 0。线上同一批 76 个视口与六语手机询盘复测通过；英文桌面及俄语手机截图已审阅。

## 修改文件

- 站点数据与元数据：`src/data/{site,servicePages}.ts`、`src/lib/seo.ts`、六套 `src/i18n/*.ts`，旧英文和本地化博客／兼容路由的品牌标题。
- 公共组件：`src/components/{Header,Footer,LeadModal,BlogCommentBox}.tsx`。
- 素材：`public/images/brand/{windchord-logo.png,windchord-logo-144.png,provenance.json}`、`src/app/favicon.ico`。
- 构建守卫与重定向：`scripts/{verify-export,generate-static-redirects}.mjs`。
- sitemap 相关文件与日期策略见 [SEO_REVIEW.md](SEO_REVIEW.md)；构建与运行方式见 [README.md](README.md)。

## 知识与工作区收尾

2026-10-06 使用 neat-freak 核对：更名代码、已发布版本及当前正式响应一致；本报告统一最终验收，执行计划维护当前事实与阻塞项，SEO 报告维护 SEO 待办。项目 `AGENTS.md` 为规则真身，`CLAUDE.md` 只导入它，未改变执行边界。未写入平台记忆或全局配置。

事实面状态：本轮已发布代码／运行态 verified-current；文档／项目规则 changed-and-verified；平台记忆和其他项目 out-of-scope；共享工作区的新代码验收与清场 pending。已复核 `303d00d` 与远端 main 一致且部署成功，并对英文／俄语首页、根与英文／俄语 sitemap、robots、显示 Logo、favicon 共八个正式路径检查 HTTP 200、品牌、93 条 URL 及对应文件一致性。

盘点期间，聊天“新的文章发布”在同一工作区进行文章发布日期展示改动，涉及 `src/app/[locale]/blog/[slug]/page.tsx`、`scripts/verify-export.mjs` 及本计划的日期说明。本次文档提交不包含该任务的改动，不将它的工作区状态视为已经发布；最终状态以该任务的验收与发布凭证为准。

没有删除本次盘点发现的草稿、截图或快照。清场候选是 `.playwright-cli/` 的三份旧页面快照：`page-2026-10-05T02-15-23-272Z.yml`、`page-2026-10-06T01-46-15-300Z.yml`、`page-2026-10-06T01-47-39-670Z.yml`。它们不是运行依赖或项目合同；汇报后经所有者确认才删除。`output/` 约 14 MB，包含多项文章任务的草稿、审查和发布证据，保留用于复核，本次不批量删除。构建目录已被现有 ignore 规则排除，唯一 worktree 为当前 main。

未闭合事项：Search Console 读取／收录状态、搜索结果名称和转化没有验证；没有新 Lighthouse 数据。公司完整地址、工厂关系、真实产品、法律和真实图片资料仍按执行计划 D1／D4／D5／D6 补充。此前批次的字体预加载提示是历史记录，本次不据此修改字体。清场尚未执行，复核现场仍保留。
