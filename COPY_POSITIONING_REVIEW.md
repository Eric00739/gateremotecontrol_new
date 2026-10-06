# WindChord Remote 双业务文案优化

2026-10-06。本地实现与验证已完成；未提交、推送或部署。

## 从采购决策出发

网站需要让两类 B2B 客户快速判断：能否承接自己的需求、第一步提供什么、询盘后能讨论哪些具体事项。定制客户首先关心产品功能和系统要求；品牌替代客户首先关心原系统的替代选项和批量采购。两类客户都可以先发起沟通，再按需补技术资料。

| 业务 | 客户任务 | 第一条询盘可以提供 | 接下来讨论 |
| --- | --- | --- | --- |
| 定制 RF 与汽车遥控器项目 | 为设备或品牌定义遥控器、接收器／控制器，或提出汽车遥控器项目 | 应用／参考产品、功能、市场、预计数量 | 功能与接口、技术范围、外壳／PCB／品牌要求、样品及成本与时间 |
| 品牌门与车库遥控器替代 | 为销售或安装寻找独立售后替代 | 原品牌／型号或照片、使用市场、预计数量 | 替代选项、接收器与区域版本、配对、样品及批量供货条件 |

## 最终文案与入口

英文首屏标题：

> Custom RF & Automotive Remotes. Gate & Garage Replacements.

副文案说明定制遥控器／控制器和门／车库售后替代，并列明设备品牌、分销商、安装商及汽车行业买家。首屏、业务卡和结尾分别提供定制项目与品牌替代询盘；业务卡另保留 `/oem-odm` 和 `/compatibility` 指南链接。

定制入口先问应用和功能。OEM 页覆盖控制动作、RF／系统匹配、外壳与按钮、PCB／接口、汽车遥控器、品牌包装、说明书及样品规划。定制可行性与具体变更按项目确认。

品牌替代入口先问原遥控器或系统。品牌名称用于识别原系统；42 个品牌入口及原有六个指南保留，列表不代表兼容或现货保证。型号未知时可从照片开始。

产品按定制 RF 遥控器、RF 控制器、接收器、汽车遥控器、门／车库替代遥控器和学习码遥控器展示。汽车遥控器分类说明定制项目和车辆锁／报警系统售后替代，分别提供定制与替代按钮，均带入产品名；适配和编程按系统评估。

六步流程同时接住定制和替代：描述需求、核对系统、商定范围、计划样品、检查样品、确认订单。FAQ 覆盖没有完整规格的定制项目、遥控器与控制器组合、汽车需求、未知型号、商业条件及非原装身份。

询盘标题、详情字段和提示随需求类型切换。定制与替代文字草稿各自保留；同一业务从首屏或业务卡进入时共用其草稿，每次打开恢复入口指定的类型。通用导航、页脚、博客目录、作者联系和质量页入口使用通用需求提示。

英文是结构基准；西语、葡语、法语、意语和俄语已同步。没有改写博客技术正文或发布日期，没有新增规格、MOQ、交期、认证、工厂归属或已验证兼容承诺。

## 对抗性优化与 SEO

三个子 Agent 分别从采购阻力、多语言表达和交互故障交叉审查，主 Agent 整合并实际验证。所有者进一步明确“汽车遥控器”和 SEO；最终六语标题、采购路径及按钮均按遥控器产品表述，修正法语替代按钮遗漏产品名的问题。

| 审查发现 | 最终修正 |
| --- | --- |
| 汽车遥控器两种需求共用通用按钮 | 拆为定制／替代询盘，保留同一汽车遥控器产品预填 |
| 提示允许简单询盘，默认仍展示大量字段 | 先填写需求，产品／市场／数量和联系资料按需展开；WhatsApp 不要求邮箱 |
| 型号示例看见后没有直接下一步；Sample Test 的 Yes 含义不明 | 手机／桌面四个示例均可直接询盘并带入原品牌型号；明确在买方接收器上检查样品 |
| OEM 首屏包装图和编号主题容易被理解为仅做贴牌／八项必填 | 使用现有技术匹配示意图，移除主题编号，说明仅讨论相关项，并补底部定制询盘 |
| 类型切换污染下一次打开，邮箱错误和迟到复制结果串入另一询盘 | 每次打开有独立会话标识；类型只在本次覆盖，错误与复制状态隔离；取消旧复制回调与定时器 |
| 闭合 details 内字段仍可返回布局矩形 | 焦点筛选额外排除闭合祖先内的字段，保留可操作的 summary |

SEO 内容按采购意图区分：首页描述双业务；`/oem-odm` 明确 Custom RF Remotes、Controllers 和 Car Remotes；`/compatibility` 明确批量 Gate & Garage Door Replacement Remotes；六个品牌指南的标题与 H1 使用品牌名和 Aftermarket Replacement Remotes，正文保留型号、原系统核对和独立售后说明。兼容目录新增独立搜索摘要，避免直接复用较长的采购提示。词典是标题、摘要及页面文案的来源，Open Graph 同步。

保留原 URL、canonical、hreflang、robots、sitemap 和重定向。没有为了覆盖关键词新增空泛页面或编造 Product 库存／价格数据。标题需要准确描述页面、避免堆词；各页摘要对应实际内容，多语言映射仍双向完整。[Google 标题说明](https://developers.google.com/search/docs/appearance/title-link)、[摘要说明](https://developers.google.com/search/docs/appearance/snippet)、[多语言说明](https://developers.google.com/search/docs/specialty/international/localized-versions)。

## 验证结果

- `npm run lint` 和 `git diff --check` 通过。
- `npm run build` 与 TypeScript 通过：272 个静态页面、332 个导出 HTML、98 条 sitemap URL、43 条旧重定向、188 项引用媒体、6 套词典、126 条 FAQ、12 类应用和 42 个品牌参考通过现有导出校验。
- 新增导出检查验证六语首屏的两类直接询盘、产品之前的两条业务路径，以及每张业务卡的按钮类型、标题和服务页链接对应关系。
- 对抗优化后的导出检查还覆盖汽车遥控器两种询盘、四条桌面型号示例的直接询盘／接收器实测提示，以及六语共 54 个销售页面的 title、description、Open Graph 与单一 H1 对应词典。
- 浏览器检查六语首页的 390×844 与 1440×1000，以及六语 OEM、兼容目录、目录申请和质量页的 390×844，共 36 个页面／视口组合。无横向溢出、JavaScript 页面异常；语言和单一 H1 正确。
- 已测六语手机首屏的两个询盘按钮均在 844 像素高度内。两按钮下缘分别为：英文 581／648，西语 581／648，葡语 674／741，法语 641／708，意语 577／644，俄语 641／708 像素。
- 六语询盘验证：正确需求类型、不同标题／提示／占位文字、类型即时切换、草稿隔离与恢复、首屏／业务卡一致性、通用导航入口。WhatsApp 草稿保留需求类型、产品、市场、数量和换行；外部打开被拦截，未发送测试询盘。
- 已人工查看英文手机／桌面及俄语手机截图，保存在 `output/playwright/positioning-home-*.png`。
- 第二轮本地产物浏览器检查：六语首页、OEM、兼容目录、FAAC 品牌页的 390／1440 像素，共 48 组，无页面运行异常或横向溢出。12 组六语／视口询盘流程验证汽车遥控器双入口、WhatsApp 草稿、可选字段折叠、键盘焦点环绕、类型重开、文字保留、邮箱错误隔离、FAAC XT2 和未列型号预填。
- 延迟复制成功与失败分别验证跨会话取消；当前复制成功过期及失败后的备用复制／焦点恢复通过。WhatsApp 与复制均被拦截，未发送测试询盘。可复用脚本为 `scripts/verify-inquiry-browser.js`，用法见 README。
- 已查看第二轮英文手机询盘、汽车遥控器双按钮、英文桌面 OEM 与俄语手机型号卡截图，保存在 `output/playwright/adversarial-*.png`。

这些结果验证页面和交互；没有测量实际询盘转化或搜索排名，也没有完成母语审核。真实产品资料、商业条件、项目案例和可公开证据仍按 `WEBSITE_IMPROVEMENT_PLAN.md` 的资料依赖补充。

## 修改文件

- 词典：`src/i18n/en.ts`、`es.ts`、`pt.ts`、`fr.ts`、`it.ts`、`ru.ts`。
- 页面：`src/app/[locale]/page.tsx`、`factory-quality/page.tsx`、`oem-odm/page.tsx`、`compatibility/page.tsx`、`compatibility/[brand]/page.tsx`、`src/app/compatibility/page.tsx`。
- 组件：`src/components/HeroSection.tsx`、`CapabilityHighlightsSection.tsx`、`ProductCategoriesSection.tsx`、`BrandCompatibilitySection.tsx`、`CompatibilityWorkflowSection.tsx`、`CtaSection.tsx`、`LeadModal.tsx`、`LeadModalProvider.tsx`、`LeadModalTrigger.tsx`、`Header.tsx`、`Footer.tsx`、`AnnouncementBar.tsx`、`BlogIndexClient.tsx`、`AuthorBio.tsx`。
- 数据与检查：`src/data/servicePages.ts`、`src/data/author.ts`、`src/data/homepage.ts`、`src/lib/seo.ts`、`scripts/verify-export.mjs`、`scripts/verify-inquiry-browser.js`。
- 说明：`README.md`、`WEBSITE_IMPROVEMENT_PLAN.md`、`SEO_REVIEW.md`、本文件。

## 上下文检查

`STATUS: CONTINUE`，风险 33/100（低），置信度高。任务偏移 0（两条获客目标未变）；历史噪声 25（执行计划区分本地与已发布批次）；项目复杂度 65（文件较多，集中在文案、入口和现有校验，没有新增后端或对外协议）；决策密度 25（双路径及通用入口已确定）；上下文规模 50（多文件事实需交叉核对，但目标、修改和验证可恢复）。本次没有生成交接材料或切换聊天。
