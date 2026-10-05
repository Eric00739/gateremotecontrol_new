# 博客内容与事实核查记录

审查及实质更新日期：2026-10-05。范围为现有 18 篇英文文章和六语博客目录；非英文文章旧 URL 仍是保留入口，不新增全文翻译。用户要求完整修改内容，并保留喜欢的排版和字体。

## 诊断与编辑原则

原文中较明显的模板感来自无记录的第一人称经历、虚构价格与测试数字、把条件性技术结果写成普遍规律，以及反复使用“长期思维”“诚实电路”等抽象结论。这里使用文本审读，不使用 AI 检测器或宣称一个“AI 概率”。

按客户实际决定组织内容：识别什么系统、需要什么资料、可以做什么对照检查、什么结论尚不能成立。保留有用解释与操作步骤，删除无证据的作者经验和供应商指控。芯片数据表的测试值不当作本站产品参数；没有产品记录时，不写 MOQ、交期、报价、故障率、距离保证或认证结果。

正文现有 94 处参考链接，指向 64 个不同的一手资料 URL，包括原厂手册、数据表、官方协议资料和法规。下表列每篇的主要改动与一份核对入口；文章中的链接提供其余依据。

## 逐篇修改

| 文章 | 主要事实与表达修正 | 资料入口 |
| --- | --- | --- |
| [Comparing Gate Remotes with the Same Housing](https://www.gateremotesource.com/en/blog/same-shell-hidden-downgrade-remote-manufacturing-quality) | 撤下批次偷料、故障率和成本案例；PCB 颜色不能证明板材或质量，改查 BOM、材料与验收记录。 | [原始资料](https://industrial.panasonic.com/ww/products/pt/paper-phenolic/pphr8700) |
| [Build a Low-Voltage RF Remote with Matched Modules](https://www.gateremotesource.com/en/blog/build-your-own-rf-remote-control-beginner-guide) | 区分原始 RF DATA 与解码输出；补齐匹配模块、逻辑和继电器驱动条件，限定低压实验。 | [原始资料](https://eur-lex.europa.eu/eli/dec_impl/2025/105/oj/eng) |
| [Why a Replacement Remote Will Not Pair](https://www.gateremotesource.com/en/blog/third-party-rf-remote-brand-receiver-pairing) | 按型号、接收器家族和区域核对；同芯片、同频率不保证兼容，删除通用配对步骤。 | [原始资料](https://www.niceforyou.com/sites/default/files/upload/manuals/IST228R02.4851.pdf) |
| [Smart Switch Protocols: What Changes in the Installation?](https://www.gateremotesource.com/en/blog/wifi-switch-protocols-smart-home-guide) | 区分 Wi-Fi、Zigbee、Thread、Matter 与 Bluetooth；Wi-Fi 不等于依赖云，Thread 边界路由器不是应用协议转换器。 | [原始资料](https://docs.silabs.com/zigbee/latest/zigbee-concepts/node-types-pan-ids) |
| [How to Test RF Remote Range with Your Receiver](https://www.gateremotesource.com/en/blog/rf-remote-range-real-world-test-data) | 撤下无原始数据的距离与性能排名；保留旧 URL，改为可复现的测试方法与条件记录。 | [原始资料](https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.525-5-202411-I!!PDF-E.pdf) |
| [Garage Remote Security: Replay and Lost Remotes](https://www.gateremotesource.com/en/blog/garage-door-remote-cloning-security-guide) | 移除虚构攻击场景；说明重放、新鲜度、同步窗口及丢失遥控器撤销，避免绝对安全承诺。 | [原始资料](https://www.holtek.com/webapi/116711/HT12A_Ev130.pdf) |
| [Car Key Short Range: Check the Battery before the Window Tint](https://www.gateremotesource.com/en/blog/car-key-short-range-window-tint) | 删除个人诊断故事；先查电池、备用钥匙和环境，再用对照检查窗膜，不把开窗结果当作单一原因证明。 | [原始资料](https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/CG4012en-202402-20241022112547.pdf) |
| [RF + Wi-Fi Smart Switches: Design the Local Control Path](https://www.gateremotesource.com/en/blog/rf-wifi-dual-mode-smart-switch) | 不将双无线等同于冗余或更安全；补充本地控制、共同失效点、单向链路和 Tuya 规则下发前提。 | [原始资料](https://csa-iot.org/all-solutions/matter/matter-faq/) |
| [What to Compare in an RF Remote Wholesale Quote](https://www.gateremotesource.com/en/blog/rf-remote-wholesale-price-cost-drivers) | 删除无报价凭证的价格倍数、成本比例与采购案例；改比规格、编程、验证及市场文件。 | [原始资料](https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/21143C.pdf) |
| [Diagnose Short Range on a 433 MHz Remote](https://www.gateremotesource.com/en/blog/433mhz-remote-short-range-diagnostics) | 删除虚构客户与实测结果；区分电池、天线、安装、干扰和配对问题，不把频段当作距离保证。 | [原始资料](https://www.ti.com/lit/an/swra161b/swra161b.pdf) |
| [Receiver Sensitivity: Compare the Test Conditions](https://www.gateremotesource.com/en/blog/rf-receiver-sensitivity-range-spec) | 比较调制、数据率、带宽及误码条件；区分灵敏度、阻塞和同频干扰，不推导产品实用距离。 | [原始资料](https://www.ti.com/lit/ds/symlink/cc1101.pdf) |
| [10 RF Remote-Control Applications and Their Controller Requirements](https://www.gateremotesource.com/en/blog/rf-remote-controller-application-scenarios) | 按控制器与动作讨论 10 类用途；升降、马达和水泵需核对接口、互锁、限位与安全停止。 | [原始资料](https://www.cpsc.gov/Regulations-Laws--Standards/Voluntary-Standards/Topics/Garage-Door-OperatorsGate-Operators?language=en) |
| [EU CE Requirements for Wi-Fi Switches: Product, Evidence and Responsibility](https://www.gateremotesource.com/en/blog/exporting-wifi-switches-eu-ce-requirements) | 按产品与责任角色说明 RED、RoHS、WEEE、DoC 和评估路径；核对 2022/30、2026/339 与 CRA 的当前及未来生效日。 | [原始资料](https://single-market-economy.ec.europa.eu/single-market/goods/ce-marking_en) |
| [CR2032 Remote Battery Life: Charge and Pulse Voltage](https://www.gateremotesource.com/en/blog/cr2032-rf-remote-battery-life) | 区分电量预算与脉冲电压；标注容量测试、电流和截止条件；更正 Si4010 的典型休眠条件。 | [原始资料](https://energy.panasonic.com/dam/master/pdf/en/datasheet/lithium/CR2032_Datasheet_EN_240701.pdf) |
| [RF Transmitter Modules: Check Output and Repeatability](https://www.gateremotesource.com/en/blog/circuits-dont-act-good-enough-transmitter-modules) | 以输出和重复性检查替代道德化电路比喻；区分匹配、滤波和完整产品测量，修正谐波图。 | [原始资料](https://www.silabs.com/documents/public/data-sheets/Si4010.pdf) |
| [OEM or ODM for RF Remotes: Define the Scope](https://www.gateremotesource.com/en/blog/oem-odm-hardware-future) | 不由 OEM/ODM 名称推断 IP 所有权、速度或风险；按合同定义范围、交付物、批准与市场责任。 | [原始资料](https://www.wipo.int/en/web/ip-commercialization/w/blog/ip-agreements-with-suppliers-what-ventures-need-to-know) |
| [RF Remote Collisions: Check the Hardware and Protocol](https://www.gateremotesource.com/en/blog/rf-remote-control-concurrency-anti-collision) | 区分信号重叠与接收失败；补充捕获条件、收发能力和协调要求，ACK 不等于物理动作完成。 | [原始资料](https://eur-lex.europa.eu/eli/dec_impl/2025/105/oj/eng) |
| [Why a Copy Remote Reports Success but Does Not Work](https://www.gateremotesource.com/en/blog/why-universal-remote-cannot-copy) | 信号学习与接收器录入分开；不把 learning code 当作独立安全等级；芯片标记和“复制成功”不证明兼容。 | [原始资料](https://ww1.microchip.com/downloads/aemDocuments/documents/WSG/ProductDocuments/DataSheets/MICRF112-Data-Sheet-DS70005554.pdf) |

## 技术图片

9 张既有技术图的文字或关系与修订正文矛盾，因此重新生成对应概念图。它们仍在原来的 31 个正文图片位置中显示，保持原图片尺寸与布局比例。原文件和旧图片 URL 保留，新文件使用 `-reviewed.webp` 后缀。

修正内容包括 OEM/ODM 的合同范围、市场评估条件、固定与滚动码、学习与录入的关系、碰撞接收条件、两向 ACK、频段与认证/交付机制的独立关系，以及谐波的整数倍关系。无法稳定画准的坐标和时序改为明确的概念比较，避免读者推导不存在的测量结果。保留的示意图配上适用范围说明；假设品牌和价格不作为客户案例或市场报价。

生成工具、完整提示词、修订说明、尺寸和 SHA-256 见 [reviewed-visuals.json](public/images/blog/reviewed-visuals.json)。页面使用 Illustration/concept 表述；没有把概念图当作实测、工厂证据或认证证明。

## 保留与修复

- 保留 18 个文章 slug、原发布日期、913 个内容块的类型和顺序、160 个旧章节锚点及 31 个正文图片位置。
- 不改 CSS、字体、字号、行距、颜色、容器宽度和卡片布局；文章长度及具体标题随内容修订变化。
- 标题、摘要、SEO 标题与正文一起修订；阅读时间按正文单词数以每分钟 200 词估算，实质更新日为 2026-10-05。
- 六语目录仍链接英文原文；非英文文章继续 noindex,follow 并 canonical 到英文。原 canonical/hreflang/robots/sitemap 与旧 URL 重定向策略不变。
- 目录的“Popular guides”改为客观的“Selected guides”，移除页面实现说明和占位文章历史，询问具体型号、国家和用途。
- 原阅读导航“Comments”指向不存在的目标；改为“RF question”并链接现有邮件提问区域，旧 `#comments` 绑定同一提问区域的内容容器。仍只打开邮件草稿，不在网站接收或发布评论。

## 审查与验证

3 个子 Agent 分别处理采购与兼容、RF 工程、智能系统与应用。后续完成了采购组的独立事实审查及 18 篇的表达/元数据交叉审查；主 Agent 逐篇核验、整合并检查全部技术图。另两次后续交叉审查因网络中断未完成，未计入通过结果。已完成审查提出的 HCS301 参数存储、学习标题、Tuya 离线前提和图示关系修正均已落地。

- `npm run lint`、`npm run build` 通过。216 个静态页面、276 个 HTML、90 条 sitemap URL、43 条旧 URL 重定向、118 项引用媒体、六套词典和 126 组 FAQ 校验正常。
- 18 篇分别在 320、390、1440 像素检查，六语目录分别在 320、1440 像素检查：共 66 个页面/视口组合、333 次首轮图片实例，无横向溢出、坏图或运行异常。文章字体、字号、行距、颜色与容器宽度逐项对比修改前一致。
- 六语目录的分页覆盖全部 18 篇，CR2032 搜索及无结果状态正常。文章资料链接、旧锚点及提问入口正常。
- 导出守卫新增正文链接可渲染性、稳定锚点、资料链接及提问入口/旧评论锚点检查，覆盖六语的 108 个文章页面。临时副本删除旧锚点或改掉资料 href，均正确退出 1；原产物未改。
- 新图尺寸及校验和与记录一致；旧图校验和保持不变。

页面和文案检查不能确认某批产品的实际参数、兼容性、测试结果或法规符合性。未声称搜索排名、询盘转化、母语审核或真实设备测试已经改善。需要所有者提供的事实资料仍按 [执行计划](WEBSITE_IMPROVEMENT_PLAN.md) D1–D6/C04 处理。本次发布及线上复测凭证见执行计划第 24 节。
