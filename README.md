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

`npm run build` 完成 Next.js 构建、旧 URL 重定向生成、HTML 语言标记修正，以及 sitemap、canonical、博客完整目录和重定向目标校验。还会检查六套词典的键与数组结构、OEM 页面本地化、FAQ 正文与结构化数据的一致性，并防止已撤下的无依据宣传陈述恢复。任何校验失败都会令构建失败。

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
- `src/data/visuals.ts`：首页与质量页的视频帧配置、时间点、本地化 alt 键及响应式图片路径；来源记录见 `public/images/video/README.md`。
- `src/data/generated-visuals.ts`：产品、应用、服务页与博客的 AI 示意图配置；提示词、原图校验和与处理方式见 `public/images/generated/`。
- `scripts/generate-static-redirects.mjs`：旧 URL 重定向和导出 HTML 的语言标记修正。
- `scripts/legacy-redirects.mjs`：旧 URL 重定向数据。
- `scripts/verify-export.mjs`：静态导出、媒体、sitemap、canonical、六语内容、FAQ 和重定向目标校验。

## 询盘与内容边界

这是纯静态站点。询盘支持打开 WhatsApp、本机邮件草稿，或复制询盘内容；网站不会接收表单数据或上传附件。产品、品牌和无匹配搜索词会带入需求；同一页面和需求上下文的编辑在当前 Provider 生命周期内保留，刷新后丢失，不写入浏览器存储。WhatsApp 不要求姓名或邮箱；邮件草稿要求有效邮箱。打开外部应用不代表已经发送或收到。

目录申请使用独立的 `catalog` 需求类型，编辑产品后仍能保留目录意图；OEM 和其他产品询盘分别保留自己的需求上下文。浏览器禁用 Clipboard API 时使用备用复制，成功或失败后均恢复弹窗内的原焦点；复制失败不显示成功。

接入真实表单、附件上传、CRM、统计或其他第三方服务前，需要先确认托管、隐私和密钥方案。

不要把未经站点所有者确认的公司身份、工厂关系、SKU、MOQ、认证、交期、客户案例或图片场景写成事实。真实产品和工厂图片到位前，不重新启用“工厂证据”图库。

2026-10-03 的配图来自所有者指定的首页视频，只描述画面中可见的电路、设备、工位和 PCB，不作为公司归属或检测能力证明。源视频为 1280×726，图片保留自然颜色，无生成、补绘或放大。首页视频及质量页保留这组来源；旧素材、博客正文技术解释图与作者头像继续保留。

2026-10-04 按所有者要求新增 25 张摄影风格 AI 示意图，覆盖六类产品、七种应用和十二个技术主题；共 75 个响应式 WebP。产品、应用、OEM、目录、兼容性与博客使用对应图片，六语图片说明使用产品、场景、技术与包装示意描述。它们不代表真实 SKU、客户现场、公司工厂或检测结果。最终提示词与原图 SHA-256 见 `public/images/generated/prompts.json`，转换脚本为 `scripts/prepare-generated-images.mjs`；验证仍需的真实资料以执行计划为准。

2026-10-05 新增售后汽车遥控器近景及灯光、灌溉、安防、窗帘／百叶、遮阳、通风、物料升降和工业马达场景，共 10 张原图、30 个 WebP；当前合计 35 张、105 个响应式文件。其中摄像头图仅作为保留素材，不在首页场景展示。首页应用合并重复门控场景，扩为 12 种用途，各配一句接口或匹配说明，保持手机两列、桌面四列的小图布局。工业与灌溉三类另标工程评估，升降明确核对动作、限位、停止及互锁；不将普通门控接收器称为可直接使用的工业控制器。第五类产品为售后汽车遥控器，询盘及目录说明同步。所有者指定的原视频标题改为六语“工厂实拍”，不增加公司归属或检测结论。

场景取舍按设备动作及接收接口，而不是有无“远程”字样：[Somfy](https://www.somfy.co.uk/help-me-choose/rts-products) 的无线应用包含室内窗饰及室外遮阳；[SONOFF 4CHPRO](https://sonoff.tech/en-uk/products/sonoff-4chr3-4chpror3-4-gang-wi-fi-smart-switch-with-rf-control) 的继电器应用涉及灯光、泵和电动设备；[HBC](https://www.hbc-radiomatic.com/en/products/transmitters/overview.html) 和 [Tele Radio 设备说明](https://www.tele-radio.com/app/uploads/IM-PN-RX107-ENv06-1.pdf) 展示专门的工业／升降无线控制及设备评估要求。这些是应用成立的依据，不证明本站可供产品的适用性。[Axis PTZ 文档](https://developer.axis.com/vapix/network-video/pantiltzoom-api/) 所述网络摄像头控制不能等同于普通 RF 遥控适配，因此撤下主场景的摄像头卡片。

品牌询盘参考由 `src/data/brandReferences.ts` 统一管理，首页、兼容目录和页脚展示 42 个原系统名称；其中 8 个为巴西市场参考。新增参考只预填兼容性询盘，不增加未经验证的兼容型号或品牌详情页。现有六个品牌指南的 URL 保留。列表旁明确独立售后替代、非原装、无关联／授权／背书以及型号、接收器和样品核对要求；名称以文字展示，不用作产品标识或合作标识。

本轮巴西品牌核对来源：[Rossi](https://www.rossiportoes.com.br/produtos/placas-e-acessorios)、[PPA](https://www.ppa.com.br/brasil/segments/industrias)、[Garen](https://garen.com.br/produtos/)、[Peccinin / Nice](https://www.niceforyou.com/pt-br/quem-somos)、[Intelbras](https://apploja.intelbras.com.br/controle-de-acesso/automatizadores-de-portao)、[AGL](https://loja.aglbrasil.com/)、[JFL 官方产品资料](https://jflalarmes.com.br/wp-content/uploads/dlm_uploads/2024/01/portfolio-ed-9-2.pdf)、[RCG](https://rcg.com.br/?id=74&pg=Produto)。请求中的 ECHO 暂按 GENIUS 的 ECHO 系列呈现，待所有者澄清；[GENIUS 原厂说明书副本](https://www.intelligentsecurity.org/resources/access-control/Genius-Echo-TX4-Remote-Control.pdf) 将 ECHO TX4 标为 GENIUS 产品。其他新增重点参考：[CENTURION](https://www.centurionsystems.co.za/smart-ecosystems/)、[Hörmann](https://www.hormann.co.uk/media-centre/)、[SOMMER](https://shop.sommer.eu/en/radio-technology/transmitters)、[Marantec](https://www.marantec.com/en/faq)、[Ditec](https://www.ditecautomations.com/en/products/automatic-pedestrian-doors/accessories/controls/remote-controls)。这些来源确认原系统标识，不证明本站替代产品已兼容。

品牌表述参考[巴西《工业产权法》第 131–132 条](https://planalto.gov.br/ccivil_03/leis/l9279.htm)：广告中的商标也受保护，附件制造商用名称说明用途的例外仍有公平竞争条件。当前采用减少误认的展示方式，不将免责声明或品牌名称的公开可见性当作各市场的法律许可；D5 法律文本审核仍未完成。

同日对抗检查后，兼容性六步流程加入 96×64 像素的小图区域，复用五张生成图与一张原视频帧。手机产品和应用区域采用两列小图，博客正文保留完整 3:2 比例。按所有者后续要求，生成图角标已移除，六语配图说明和 alt 使用产品、场景、技术与包装示意描述，不标注 AI。导出校验防止旧角标和 AI 配图标注重新出现；测量与验收记录见执行计划第 18–20 节。

重新提取图片使用 `node scripts/extract-video-photos.mjs`，需要本机 `ffmpeg` 和项目现有的 `sharp`。`npm run build` 会检查导出 HTML 中全部本地图片、视频、poster 和响应式图片候选是否存在且非空。

当前可执行改造与仍需所有者输入的事项见 [WEBSITE_IMPROVEMENT_PLAN.md](WEBSITE_IMPROVEMENT_PLAN.md)。

## SEO 内容维护

品牌页的正文、摘要、核对清单和 FAQ 由六套词典的 `brandPage` 提供；FAQ 可见内容与结构化数据使用同一份文案。技术型号和频率是核对线索，不能改写成已经验证的兼容承诺。

博客目前只发布英文正文。六语目录链接到英文原文，保留的非英文文章 URL 继续 `noindex,follow` 并 canonical 到英文。全文翻译完成后再调整收录和 hreflang。

2026-10-05 完成 18 篇英文博客的内容与事实修订，保留原布局、字体、发布日期、URL 和旧章节锚点。逐篇主要修正、资料入口及验证记录见 [BLOG_CONTENT_REVIEW.md](BLOG_CONTENT_REVIEW.md)；9 张修订概念图的提示词与校验和见 [reviewed-visuals.json](public/images/blog/reviewed-visuals.json)。导出检查覆盖正文资料链接、稳定锚点和邮件提问入口。

`src/lib/seo.ts` 的 `pageUpdatedAt` 按页面路径记录实质修改日期，构建不会自动刷新日期。修改同一页面的六语内容时一起更新对应记录；各语言更新日不同时应拆开登记。未知日期的页面或文章省略 lastmod，不修改原发布日期制造更新。
