/* ============================================================
 * Agent 情报局 · 数据层 (V1 手工维护)
 * ------------------------------------------------------------
 * 更新方法：只改本文件即可，页面自动重新渲染。
 * 每条记录带 verifiedAt（核实日期）与 sources（来源链接）。
 * scores 为 0-10 编辑部评分（V2 将接入社区投票）。
 * ============================================================ */
window.AGENTS_DATA = {
  meta: {
    siteName: "Agent 情报局",
    slogan: "决定用哪个智能体之前，先来这查一下。",
    dataUpdatedAt: "2026-10-20",
    exchangeRate: "1 USD ≈ 7.1 CNY（折算参考）",
    disclaimer: "价格与额度变动频繁，一切以官网为准；本页信息核实于 dataUpdatedAt 标注日期。"
  },

  /* ---------------- 智能体档案 ---------------- */
  agents: [
    {
      id: "chatgpt", name: "ChatGPT", vendor: "OpenAI", region: "海外",
      tagline: "综合最强的通用智能体，Agent 生态最全",
      models: ["GPT-6 (Astra)（现役旗舰：下一代 GPT-6.1 Astra 已于 09-29 取消）", "GPT-6.1 Sol（2026-09-30 上线，取代 GPT-6 Sol；10-09 新增 Ultrafast 极速档）", "GPT-6 Luna", "GPT-5.3"],
      verifiedAt: "2026-10-18",
      plans: [
        { name: "Free", price: "$0", note: "基础模型额度受限；桌面客户端可用 GPT-6 Luna（2026-09-23 起，网页版暂不开放）" },
        { name: "Go", price: "$8/月", note: "轻量付费档；桌面端可用 Luna" },
        { name: "Plus", price: "$20/月", note: "主流档，可用 GPT-6 部分能力；Work/Codex 环境可试 Sol/Luna。09-30 官方定价页矩阵：GPT-6.1 Sol 在 Plus 为 Expanded、Pro 可用，Free/Go 不含" },
        { name: "Pro", price: "$200/月", note: "2026-09 曾因需求暂停新订阅；2026-09-30 以原价重新开放，但计费改为按 API 美元额度计量、可购额度总额下调（媒体口径\"砍半\"，社区概括\"20X 变 10X\"），官方未承诺存量额度永久保留" },
        { name: "Pro 500", price: "$500/月", note: "DevDay 新增顶层档（媒体报道名 Pro 500 / Pro Max 500 不一）：独占最高优先级 Astra 算力、最大上下文与记忆、100GB 专属存储；官方 chatgpt.com/pricing 金额为客户端渲染，10-02 直抓未静态输出，具体额度待核。10-02 网易实测界面截图标注为 Pro Max、$500（含税约 $600），并把\"最快的 Codex/代理速度\"列为主要卖点；同一截图显示 200 美元档的升级入口暂停，与 36 氪\"原价重开\"口径存在出入，两说并存、待官方页可核（未核实）。10-03 澎湃新闻另记该档含\"速度翻 8 倍\"的 Ultrafast 档位（当时媒体口径）。10-09 该口径已官方面向：OpenAI 推出 GPT-6.1 Sol Ultrafast，官方定价页出现独立切换项，媒体两源记为最高 8 倍速度、6 倍价格，接入面记为 Pro 500 档、按量计费的企业版与积分制教育版" }
      ],
      apiNote: "2026-09-23 发布 GPT-6 轻量版 API 价：Sol 输入 $2/输出 $10、Luna 输入 $0.10/输出 $0.50 每百万 tokens，较 GPT-5.6 系列降约 50%；官方称 Sol 错误率约为 GPT-5.6 Sol 一半，DeepSWE 得分 Sol 68.8%/Luna 66.6%。09-30 复核官方定价页（platform.openai.com/docs/pricing）：新条目 gpt-6.1-sol 输入 $2/输出 $10（长上下文 $4/$15、缓存读 $0.10、缓存写 $2.50），gpt-6-sol 条目已下架；gpt-6-astra 仍为 $10/$50（长上下文 $20/$75）。10-09 再抓同一页（587,092 字节，价目 JSON 可静态读出）：档位切换器共列 Standard/Batch/Flex/Fast/Ultrafast 五项，gpt-6.1-sol 各档逐值为 standard $2/$0.10/$2.50/$10、batch 与 flex 均为 $1/$0.05/$1.25/$5（半价）、fast $4/$0.20/$5/$20（2 倍）、新增 ultrafast $12/$0.60/$15/$60（6 倍），与媒体\"6 倍价格、最高 8 倍速度\"两源口径一致；ultrafast 档只有 gpt-6-astra（$60/$6/$75/$300，同为其 standard 档 6 倍）与 gpt-6.1-sol 两个条目，gpt-6-luna 不在该档。官方页对 Fast 档的说明文本是\"GPT-5.6 Sol 最高比 Standard 快 2.5 倍\"，而 Ultrafast 档的说明为空——即官方只给价不给倍数，\"8 倍\"纯属媒体口径（未核实）。10-15 直抓单模型页 platform.openai.com/docs/models/gpt-6.1-sol（449,084 字节）补三处此前站内没有的确值：上下文窗口 1,050,000、最大输出 128,000、知识截止 2026-04-30；价目逐值与 09-30/10-09 两次定价页抓取一致（输入 $2.00、缓存输入 $0.10 即未缓存价的 5%、缓存写 $2.50 即 1.25 倍、输出 $10.00，Fast 2 倍、Batch/Flex 半价、Ultrafast 6 倍、区域处理加 10%）；关键是页面把长上下文加价的规则写成了原文——\"Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output for the full request\"，即超过 272K 输入的请求整单按 2 倍输入/缓存价与 1.5 倍输出价计，站内此前只记了换算结果 $4/$15、未记阈值与整单适用；同日两源媒体（新智元稿 10-12/13 与 36 氪 10-13 转载）所称\"默认窗口 272k→500k、订阅额度免长上下文附加费\"发生在产品与订阅层（ChatGPT Work/Codex 的默认值与额度加收规则），与本页 API 侧仍在的 272K 加价并不矛盾，本站据此把两侧口径分开记录，不把它当成 API 降价。10-18 直抓官方 API changelog（platform.openai.com/docs/changelog 已 301 到 developers.openai.com/api/docs/changelog，540,112 字节）补两条与语音/实时线有关的官方口径：10-16 条目 Released prompt-to-voice for all API customers，创建自定义音色免费、语音生成仍按常规 GPT-Live 会话计费（“speech generation uses regular GPT-Live session billing”，模型 gpt-live-1、端点 v1/audio/voices 与 v1/live/sessions），同条新增九款自然音色（Nuri/Juni/Flitz 德、Brise/Sillage 法、Nira 印地、Harema/Shida 日、Noeul 韩）；10-15 条目在 GPT-Live 里加入原生 Decisions 集成，即 10-06 上线的 Decisions API（gpt-6-luna）现在可被 Live 直接调用。两者都只给计价规则不给价签，故本页 token 档位价与 Ultrafast 档结论一律不动，语音侧不做分钟价（与 xAI Grok Voice 3.0 的 $0.08/分属不同计价轨道，不可横向换算）。同页 10-14 至 10-18 没有任何“GPT-5.6 Sol 再降 20%/优惠维持至 11-21”的条目，该说法继续按单源媒体口径搁置",
      access: { difficulty: 5, need: "网络环境 + 海外支付卡（或代充渠道）", note: "有封号风险记录，低价代充需警惕。常驻智能体 Dots（09-30 DevDay 发布）即日起向 Pro、Business Premium、Enterprise 开放，费用含在现有订阅、对话不计基础用量；Plus 及以下不在范围（澎湃/搜狐 10-03 两源）" },
      strengths: ["Agent/自动化生态最成熟", "软件工程与推理实测强", "GPT-6 已向 Plus/Pro 推送", "Sol/Luna 降价后低档 API 性价比追近国产", "Dots 常驻智能体含在订阅内、对话不计量，长期委托场景已产品化"],
      weaknesses: ["Pro 重开但额度收紧（\"20X 变 10X\"口径），旗舰 Astra 未降价、重度用量有效消耗腰斩", "下一代旗舰 GPT-6.1 Astra 已在发布前一周取消，旗舰换代时间线不确定", "国内支付门槛高", "免费档限制多"],
      sources: [
        "https://platform.openai.com/docs/pricing",
        "https://www.ithome.com/html/android/1010768.htm",
        "https://www.donews.com/news/1/6734359.html",
        "https://omidsaffari.com/zh-cn/blog/chatgpt-pricing-zh-cn",
        "https://www.allagent.wiki/blog/openai-pauses-pro-200-signups/",
        "https://getgptplus.app/blog/gpt-6-pro-users-rollout",
        "https://finance.sina.com.cn/tech/roll/2026-09-23/doc-inisuaat1609597.shtml",
        "http://app.myzaker.com/news/article.php?pk=6ab3312ab15ec067983c6160",
        "https://www.36kr.com/p/4005459400496771",
        "https://www.ruancan.com/p/285997.html",
        "https://news.sina.cn/bignews/insight/2026-10-02/detail-initvtxc5631327.d.html",
        "https://m.163.com/dy/article/L86VVOBR05561FZK.html",
        "http://www.thepaper.cn/newsDetail_forward_34187651",
        "https://m.sohu.com/a/1083721856_123021014/"
      ]
    },
    {
      id: "claude", name: "Claude", vendor: "Anthropic", region: "海外",
      tagline: "编码与长文推理首选，额度规则最复杂",
      models: ["Opus 5.5（2026-09-22/23 发布，基准榜首）", "Fable 5.1", "Mythos 5.1", "Sonnet 5.5（2026-09-28 上线，$2/$10 与 Sonnet 5 同价）", "Haiku 5.5（2026-10-08 上线，按 prompt 长度分档 $0.10/$0.50 与 $0.50/$2.50）"],
      verifiedAt: "2026-10-13",
      plans: [
        { name: "Free", price: "$0", note: "不含 Fable 访问；10-10 直抓官方功能矩阵：Claude Design/Slides/Docs 三行在 Free 列均为 Yes（10-09 去 beta 转正），Dashboards 与 Motion 两行均为 No" },
        { name: "Pro", price: "$20/月 或 $200/年", note: "基础档不覆盖 Fable，需预付 usage credits；约 45 请求/5小时；官方矩阵 Claude Dashboards (beta) 列为 Yes、Claude Motion (beta) 列为 No" },
        { name: "Max 5x", price: "$100/月", note: "Fable 内置额度，占周额度上限一半；Dashboards (beta) Yes、Motion (beta) No（个人四档 Motion 全 No）" },
        { name: "Max 20x", price: "$200/月", note: "重度用户档；同样只到 Dashboards (beta)，Motion (beta) 需 Team/Enterprise" }
      ],
      apiNote: "官方文档现价（docs.claude.com，2026-10-13 直抓复核，09-30 曾逐项复核）：Opus 5.5 输入 $4/输出 $20 每百万 tokens（5 分钟缓存写 $5、1 小时写 $8、缓存读 $0.20），Fast mode 加倍为 $8/$40；上一代 Opus 5 / Opus 4.8 常规价为 $5/$25（缓存读 $0.50），$10/$50 是它们的 Fast mode 价——站内旧注把 Fast mode 价误作常规价，才显出\"降 60%\"的假冲突。按常规价对比，Opus 5.5 单价降 20%、缓存读降 60%，与 09-27 媒体报道完全一致，该冲突就此消解。另 Sonnet 5.5（2026-09-28 上线）$2/$10，与 Sonnet 5 同价，但缓存读不同价：Sonnet 5.5 为 $0.10（基础输入价的 5%），上一代 Sonnet 5 为 $0.20（10%）——站内 10-10 之前把两者都记作 $0.20，10-13 按官方表格原值更正。10-08 官方定价页直抓新增 Haiku 5.5，是本站在档首个按 prompt 长度分档计价的新模型：≤10 万 token 输入 $0.10/输出 $0.50，>10 万 token 输入 $0.50/输出 $2.50（缓存写 5 分钟 $0.125、1 小时 $0.20，缓存读 $0.01；批量 API ≤10 万 $0.05/$0.25、>10 万 $0.25/$1.25）。对照上一代 Haiku 4.5 的 $1/$5，短请求输入降 90%、输出降 90%；官方页同时注明\"Claude 4.6 及之后模型（Haiku 5.5 除外）在 1M 上下文下仍按标准价\"，即长上下文不再额外加价、只有 Haiku 5.5 走分档价。两家媒体（网易 10-08、admin5 10-08）另指出新分词器使同一请求的 token 数增加约 25%-30%，实际账单降幅小于名义单价降幅——该比例属媒体口径、官方未给换算表，标未核实。10-10 另直抓官方订阅定价页 claude.com/pricing（1,242,021 字节，功能矩阵可静态读出）核对 10-09 的\"转正/新 beta\"公告：个人档矩阵（Free/Pro/Max 5x/Max 20x 四列）里 Claude Design、Claude Slides、Claude Docs 三行四列全为 Yes，Claude Dashboards (beta) 为 No/Yes/Yes/Yes，Claude Motion (beta) 四列全为 No；Team/Enterprise (self-serve)/Enterprise (sales-assisted) 三列则这五项全为 Yes。故媒体所称\"所有套餐均可使用、包括免费版\"对应的是 Docs/Slides/Design 三项转正，Motion 仍只在团队与企业档——官方新闻室页（10-10 直抓，最新条目日期为 10-08）未见 10-09 独立公告稿，可用性判定以定价页矩阵原值为准。10-13 再直抓 docs.claude.com 定价页（1,141,764 字节、13 张表）逐项复核，本站在档价签全部未变：Fable 5.1 与 Mythos 5.1 $10/$50、Opus 5.5 $4/$20、Sonnet 5.5 $2/$10、Haiku 5.5 分档 $0.10/$0.50 与 $0.50/$2.50；同页缓存表可读出口径为 5 分钟写 1.25×、1 小时写 2× 基础输入价、缓存读 0.1×，其中 Opus 5.5 与 Sonnet 5.5 的缓存读降到 0.05×（$0.20/$0.10）、Fable 5.1 与 Mythos 5.1 降到 0.025×（$0.25），与上表原值互洽",
      access: { difficulty: 5, need: "网络环境 + 海外支付卡", note: "5 小时滚动窗口 + 周上限双重限额；美区推理有 1.1× 附加费；日本账户 9/10 后充值积分 6 个月过期" },
      strengths: ["编码智能体公认第一梯队", "全线 1M token 上下文", "缓存读取价格大降 75%（$0.25/M）"],
      weaknesses: ["额度规则复杂、Pro 用 Fable 需额外买积分", "价格偏贵", "国内支付门槛高"],
      sources: [
        "https://docs.claude.com/en/docs/about-claude/pricing",
        "https://claude.com/pricing",
        "https://m.163.com/dy/article/L8NJ5EIH0511BLFD.html",
        "https://m.admin5.com/article/20261008/16704238.shtml",
        "https://www.chinastarmarket.cn/detail/2499950",
        "https://m.163.com/dy/article/L8QFELDP0556703U.html",
        "https://leedu.ac.cn/article/claude-pro-max-5x-20x-comparison/",
        "https://zhangwenbao.com/claude-rate-limits.html",
        "https://omidsaffari.com/zh-cn/blog/claude-code-pricing-2026-zh-cn"
      ]
    },
    {
      id: "gemini", name: "Gemini", vendor: "Google", region: "海外",
      tagline: "多模态与长上下文之王，入门价最低",
      models: ["Gemini 3 系列", "Gemini 4 Argon（2026-09-30 发布，10-13 起全球上线：付费 API/AI Studio 与 Ultra、Pro 订阅可用）", "Gemini 3.8 Flash"],
      verifiedAt: "2026-10-15",
      plans: [
        { name: "Free", price: "$0", note: "每日数百次提示 + 图像 + 少量视频生成。10-09 起按官方帮助页《Changes to Gemini model access and limits》的对照表，无订阅个人账号那一格改记 Auto：默认走智能模型选择，多数请求给 Flash-Lite，需要更深推理的请求才可能落到 Flash 或 Pro；若关闭智能选择，无订阅账号的全部回复只用 Flash-Lite（10-10 直抓 support.google.com/gemini/answer/17004136，表头三列为 Flash-Lite / Flash / Pro）" },
        { name: "AI Plus", price: "$7.99/月", note: "入门档，全场最低价之一。同一张官方表里 AI Plus = Flash-Lite ✅、Flash ✅、Pro ✕，即 Pro 权限被收回；官方另写明 AI Plus 用户的生效日期由谷歌另发电子邮件通知，不与无订阅用户的 10-09 统一。月费本轮出现两口径：站内旧记 $7.99，而 9to5Google/XDA/CNMO 等 10 月上旬报道与转载稿多写 $4.99——10-10 直抓 one.google.com/ai 只回到登录页、两篇帮助中心文章均不含价签，故金额标未核实、本轮不改数" },
        { name: "AI Pro", price: "$19.99/月", note: "深度绑定 Google 全家桶；官方用量表列 Flash-Lite/Flash/Pro 三档全可用。同页额度口径：无订阅=标准额度、AI Plus=标准的 2 倍、AI Pro=标准的 4 倍、AI Ultra=AI Pro 的 5 倍或 20 倍（视订阅而定），按算力计、每 5 小时刷新并设周上限。媒体报道 10-09 起 Pro 档新获 Deep Think，但 10-10 直抓的另一篇官方用量页仍写 \"Deep think (AI Ultra only)、Deep think requires the Pro model\"，两口径冲突，按官方页记为未证实。10-14 新增：Pro 档自 10-13 起可在 Gemini 应用与谷歌搜索 AI 模式使用 Gemini 4 Argon，但不含 Antigravity（该项限 Ultra）" },
        { name: "Ultra", price: "$200/月", note: "顶配档；另有 $100 开发者档。10-14 复核：Gemini 4 Argon 已于 10-13（美东周二）全球上线，Ultra 订阅者在 Gemini 应用、谷歌搜索 AI 模式与 Google Antigravity 三处均可用，Pro 只前两项、拿不到 Antigravity——本档案此前\"后续逐步开放、官方未公布商用日程\"的口径到此落地。本轮另见媒体把 AI Ultra 月费写为 $99.99，与站内 $200/月及 $100 开发者档并存，官方无可直抓价签，三说均标未核实" }
      ],
      apiNote: "2026-09-30 谷歌发布新一代前沿模型 Gemini 4 Argon（Arena+ 10-02 快照列总榜第 2：Arena Elo 1525、Coding 1570、AAII 53，仅次于 Claude Opus 5.5）。媒体口径 API 初始报价输入 $2/输出 $10 每百万 tokens、缓存输入享 95% 折扣、单次响应上限提至 100 万 token（原 6.4 万）；另有媒体提示该报价为推广期价、推广期后可能涨至 $4/$20，两口径均未见官方页可核。10-02 直抓官方定价文档（ai.google.dev/gemini-api/docs/pricing）无 argon 条目，当前仅经 Fairwind 计划向受信任网络安全防御机构定向开放。10-04 复核：同一官方定价文档（?hl=en，255,881 字节可静态读取）仍无 argon 字样，$2/$10 至今只有媒体口径；Arena+ 10-04 快照 Argon 位列总榜第 2（Elo 1525 / Coding 1570 / AAII 53），数值与 10-02、10-03 两日相同。另有新浪/网易 10-03 转载稿（原题同稿、来源环球网）称\"10 月 3 日完成正式发布、仅向经过严格审核的网络安全从业者开放、面向普通开发者与消费者的全面开放时间暂未公布\"——发布时间与站内已双源的 09-30 口径不一致，判为同一事件的二次报道（09-30 谷歌官宣、10-03 媒体复述），不据此改发布日。10-10 另记企业侧新品（不改动本档案个人订阅档）：谷歌云在 Gemini at Work 2026 发布会推出\"通用工作智能体\"Gemini agent，A5站长网（10-09 20:18）与 CITNews 转 DoNews（10-09 09:19，正文写\"10月8日消息\"）两独立来源口径一致——定位单一入口的工作 Agent（问答/知识型工作/图文视频生成/写并跑代码，原则是\"给目标而非逐步指令\"），可在 Gmail、Drive、Docs、Slides、Sheets、Chat、Calendar 内直接操作，入口覆盖 Web/iOS/Android/Windows/Mac/CLI 及微软365与 Slack，模型不绑定自家（可在 Gemini 系列与 Anthropic Claude 系列间动态选择，配 Smart Routing 按效果/速度/成本分派），企业可给\"同事 Agent\"配独立邮箱、日历与存储并列入通讯录；当前为（私有）预览，先向 Workspace 特定 Business 与 Enterprise 方案开放，官方未公布定价页可核的价签。两源发布日口径相差一天（10-08 与 10-09），站内按报道日 10-09 记；10-10 在官方域名检索未取到可直抓的公告稿，故\"支持 Claude 模型\"\"预览范围\"均标为媒体转述官方口径。10-10 另把 C 端口径按官方帮助页重核（这次是官方来源、不需第二源）：support.google.com/gemini/answer/17004136《Changes to Gemini model access and limits》原文写 \"Starting in October 2026, there will be changes to model availability for Gemini Apps when you use a personal account. These changes will start to take effect for users without an AI subscription on October 9th. For users with an AI Plus subscription, you should receive an email that explains when these changes will take effect for you.\"，其对照表（10-10 直抓 HTML 后逐格解析 <table>，勾形图标 alt=\"Checkmark\"、无订阅与三档订阅共四行 × Flash-Lite/Flash/Pro 三列）读作：Without a plan = Auto；AI Plus = Flash-Lite ✅／Flash ✅／Pro 为另一枚叉形图（该格 img 无 alt、与勾形不同文件）；AI Pro 与 AI Ultra = 三档全 ✅。表格下方还有一句常被转载稿漏掉的限定：\"Auto will be the default setting for users without a Google AI plan... Most prompts will go to Flash-Lite... Prompts that need deeper reasoning may go to Flash or Pro. If smart model selection is turned off, chats for users without an AI plan will use Flash-Lite for all responses.\"——即媒体普遍写的\"免费版只剩一个模型\"是简化口径，官方原义是无订阅默认改为自动分派、只有关掉智能选择才锁死 Flash-Lite。同页\"Usage limits\"表给出四档倍数（标准／2 倍／4 倍／AI Pro 的 5 或 20 倍），并列出高消耗项：媒体生成（图片、视频、音乐）、Deep Research、Pro 模型、Extended thinking 与 Deep Think；另记历史时间线：5-17 起成年用户改为按算力计额度、7-24 未成年跟进。另一篇官方用量页 answer/16275805《Gemini Apps limits & upgrades for Google AI subscribers》10-10 同批直抓（正文 12,367 字符可静态读）仍写 \"Deep think (AI Ultra only)\"、\"Deep think requires the Pro model\"，与 10 月上旬媒体所称\"Deep Think 下放给 AI Pro\"打架，站内按官方页把下放一说记为未证实；两篇帮助页均不含任何货币数字，one.google.com/ai 直抓只返回 Google 登录页，因此 AI Plus 月费 $7.99／$4.99 两口径与 Ultra $200／$100／$99.99 三说都维持未核实，等周五全量再定。10-14 重要更新——Gemini 4 Argon 结束定向开放、全球上线：新浪科技转环球市场播报（10-14 07:15）与华尔街见闻（10-14 07:03，称\"本周二上线\"）两个独立来源口径一致，10-13 起该模型经付费版 Gemini API 面向全球开发者与企业开放、在 Google AI Studio 可调，Google Antigravity 面向 AI Ultra 订阅者，Gemini 应用与谷歌搜索 AI 模式面向 AI Ultra 与 Pro 订阅者；价格口径一致为介绍价每百万输入 $2/输出 $10、缓存输入享 95% 折扣，华尔街见闻与搜狐另写\"推广价截至 11 月底、之后常规价 $4/$20\"，输出上限自 6.4 万提至 100 万 token（与站内 09-30 记录一致）。这坐实了本站 09-30 起的媒体报价 $2/$10（此前只有单一转载稿、且 10-02 与 10-04 两次直抓官方定价文档均无 argon 条目），也推翻了\"仅经 Fairwind 向网络安全机构定向开放\"的可用性——那条现在只描述 09-30 至 10-12 的状态。核验限制：10-14 两次尝试 curl ai.google.dev/gemini-api/docs/pricing 均连接失败（curl exit 56、0 字节），$2/$10 与 11 月底截止均未由官方页复核，故 API 价签按两独立媒体口径入库并标\"待官方页复核\"，$4/$20 的后续常规价属单一媒体推导、未采信为事实；Arena+ 10-14 快照该行仍是总榜第 2（Elo 1525、Coding 1570、AAII 53），未因上线而变动。10-15 复捕细化两处：推广期截止由昨日的\"11 月底\"收成可核日期口径——钛媒体 10-14 早报与 36 氪稿源（今日头条 10-15 00:07 的 AI 早报 Top①）两源同写\"推广期定价至 2026 年 11 月 30 日：每百万输入 2 美元、输出 10 美元；推广期结束后价格翻倍\"，于是常规价 $4/$20 由单一媒体推导升为两源一致，但仍属媒体口径而非官方；官方定价页今日仍抓不通（ai.google.dev/gemini-api/docs/pricing?hl=en 两次均落入重定向循环，curl exit 47、只回 508 字节，与昨日 exit 56 是两种失败形态），$2/$10 与 11-30 截止继续标\"待官方页复核\"、常规价不写成事实。基准侧 10-15 抓取件 Argon 行零变动（总榜第 2、Elo 1525、Coding 1570、Vision 1318、AAII 53），编码分 9.6 不变。10-15 傍晚第三次尝试直抓成功（ai.google.dev/gemini-api/docs/pricing?hl=en，257,372 字节、90 张表，比 10-04 那次的 255,881 字节多出 Argon 条目），API 价签由此从\"媒体口径＋待官方页复核\"升为官方可核，且官方写的是两段价而不是一口价：Gemini 4 Argon 标准档输入 $2.00（through November 30, 2026）→ $4.00（starting December 1, 2026）、输出 $10.00 → $20.00、上下文缓存 $0.10 → $0.20 并注明 Implicit caching only（不支持显式缓存），Batch 与 Flex 档 $1.00/$5.00 → $2.00/$10.00、Priority 档 $3.60/$18.00 → $7.20/$36.00，免费层各档一律 Not available。第二笔是站内此前完全没有的：官方把整条 Flash 线也排成两段价——Gemini 3.8 Flash 标准档输入 $0.75（至 2026-12-31）→ $1.50（2027-01-01 起）、输出 $3.75 → $7.50、缓存 $0.075 → $0.15、存储 $0.50 → $1.00 每百万 tokens 每小时，Batch/Flex/Contributor 档 $0.375/$1.875 → $0.75/$3.75、Priority 档 $1.35/$6.75 → $2.70/$13.50，而 3.8 Flash 的免费层是 Free of charge；Gemini 3.6 Flash 与它逐值同价、同日期。判读两点：媒体所称\"11 月底之后回到 $4/$20\"坐实为官方 12-01 起翻倍，此前\"常规价属单一媒体推导\"的保留意见撤销；Flash 线 2027-01-01 翻倍则是官方页明写、媒体侧仅澎湃 10-15 稿转述过一次，本站按官方单源入库。两档到期日不同（Argon 12-01、Flash 01-01），说明是分模型排定的优惠到期，不是全站统一调价",
      access: { difficulty: 4, need: "网络环境 + 海外支付（部分区域支持）", note: "免费档可用性在海外产品中相对最好；Argon 自 10-13 起对 Pro/Ultra 订阅与付费 API 开放，免费档仍用不到" },
      strengths: ["视频/音频等视觉生成最强", "超长上下文", "免费入口仍保留（每日数百次提示＋图像＋少量视频生成），且额度按 Auto 智能分派而非硬性只给一档", "Argon 单次输出上限 100 万 token，追平第一梯队基准"],
      weaknesses: ["复杂 Agent 任务稳定执行略逊", "深度使用依赖 Google 生态", "新旗舰 Argon 需 Pro/Ultra 订阅或付费 API，免费档用不到；官方定价页 10-15 已直抓核到它只挂两段价（$2/$10 至 11-30、12-01 起翻倍为 $4/$20）且免费层 Not available，低价窗口有明确到期日", "主力 Flash 线官方已排定 2027-01-01 整线翻倍（3.8 Flash $0.75/$3.75 → $1.50/$7.50，与 Argon 的 12-01 不同日），跨明后年的成本预算要按翻倍价留余量", "10-09 起模型权限按订阅分层：无订阅默认走 Auto（关掉智能选择即只剩 Flash-Lite），最低档 AI Plus 被收回 Pro；\"免费版最厚道\"这句旧评价本轮按官方页收回"],
      sources: ["https://support.google.com/gemini/answer/17004136", "https://support.google.com/gemini/answer/16275805", "https://omidsaffari.com/zh-cn/blog/gemini-vs-chatgpt-zh-cn", "https://ai.google.dev/gemini-api/docs/pricing", "https://finance.sina.cn/usstock/mggd/2026-10-14/detail-inivctrr7220910.d.html", "https://awtmt.com/articles/3783572", "https://m.163.com/dy/article/L85Q4FTK0511BLFD.html", "https://m.sohu.com/a/1083187131_434604", "https://finance.sina.com.cn/roll/2026-10-03/doc-initwzsp5065978.shtml", "https://m.admin5.com/article/20261009/16704371.shtml", "https://www.citnews.com.cn/news/222514", "https://m.163.com/dy/article/L8CRKBD6055616YL.html", "https://www.myzaker.com/article/6ac72a398e9f0923d87e952f"]
    },
    {
      id: "manus", name: "Manus", vendor: "Manus AI", region: "海外（华人团队）",
      tagline: "自主任务执行的代名词，积分制计费",
      models: ["Manus Agent"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "$0", note: "注册送免费积分，官方口径每日刷新 300 积分" },
        { name: "Pro", price: "$20/月 ≈ 4,000 积分", note: "官方档名由 Standard 改为 Pro；非无限使用，重度任务消耗快" }
      ],
      access: { difficulty: 3, need: "开放注册，需邮箱；支付门槛低于 OpenAI/Anthropic", note: "2026-08 宣布恢复独立运营" },
      strengths: ["自主拆解并执行复杂任务", "无需复杂配置的通用 agent"],
      weaknesses: ["积分制成本不可预测", "复杂任务翻车率仍有争议"],
      sources: [
        "https://omidsaffari.com/zh-cn/blog/manus-pricing-zh-cn",
        "https://m.toutiao.com/article/7673030617990169107/"
      ]
    },
    {
      id: "deepseek", name: "DeepSeek 深度求索", vendor: "DeepSeek", region: "国内",
      tagline: "API 性价比天花板，聊天免费",
      models: ["DeepSeek V4 Pro", "DeepSeek Flash"],
      verifiedAt: "2026-10-18",
      plans: [
        { name: "对话 App/Web", price: "免费", note: "无订阅档" },
        { name: "API Flash", price: "输出 ¥4/M（闲时）· ¥8/M（峰时）", note: "缓存命中输入低至 ¥0.02/M" },
        { name: "API V4 Pro", price: "输出 ¥13.5/M（闲时）· ¥27/M（峰时）", note: "缓存命中输入 ¥0.15/M" }
      ],
      apiNote: "峰时计价：工作日（非法定节假日）9:00-12:00、14:00-18:00，其余为闲时价。10-09 复核官方定价页（api-docs.deepseek.com/zh-cn/quick_start/pricing）峰谷计费表与站内三档数值逐档一致，未调价。10-15 08:11-13:04 服务故障（4 小时 52 分，对话与 V4 Pro／V4.1 Flash 两个 API 均受影响），当晚开放平台发布\"服务恢复及补偿通知\"，原文承诺\"按您账号 7 日内（10.8-10.14）的消耗金额以赠金形式全额返还，赠金自动到账，API 计费扣款先从赠金账户扣除\"，并称已\"全面梳理并剥离单点依赖\"——这是故障赔付条款而非降价，站内三档标价一律不动（潮新闻/澎湃新闻 10-15 19:45 与新浪财经 10-15 19:43 两源同录原文，财新 10-15 记故障时长与受影响组件）。10-18 再直抓同一官方定价页（26,182 字节，表格静态可读）：三档标价逐值复核仍未调价——Flash 缓存命中输入 ¥0.02 闲时／¥0.04 峰时、未命中输入 ¥1／¥2、输出 ¥4／¥8，V4 Pro 为 ¥0.15／¥0.30、¥4.5／¥9.0、¥13.5／¥27.0，并发限制 2500／500，峰谷口径与站内 note 一致。页面另有两处新事实：① 模型版本栏首次写成 DeepSeek-V4.1-Flash-1017（V4 Pro 侧为 DeepSeek-V4-Pro-0813），且脚注原文规定\"旧模型名 deepseek-v4-flash、deepseek-v4-flash-vision-exp 仍可调用，但对应模型已下线，请求将由 DeepSeek-V4.1-Flash-1017 模型提供服务，并按 Flash 价格计费\"——即换底层不改名也不改价，调用侧零改动可吃到新版；② 首次把 Search 与 Fetch 列为独立 API 按请求次数计价（各 5 元／1,000 次成功请求），并写明当前用户在 DeepSeek Harness／Claude Code／Codex 中经服务端工具调用访问这两个接口\"目前未计费，并将于北京时间 2026 年 11 月 1 日 00:00 起按次收取调用费用\"。判读：②属新增计费品类而非既有 token 档调价，故 apiPrices 两行与三档标价一律不动、priceHistory 不加点，但 11-01 是一个已官宣的确定成本变化日，届时接入这三个 Agent 框架的调用账单会多出一项按次费用（10-17 发布当日媒体多口径转述的\"单任务成本由 3~4 元降至 1~2 元\"属第三方实测，本站不采为数据，只按官方页原句记录同名同价与按次计费两项）",
      access: { difficulty: 1, need: "手机号直接注册", note: "国内直连无障碍" },
      strengths: ["价格碾压级便宜", "推理/代码能力强", "国内直连"],
      weaknesses: ["2026-08 官宣涨价（峰谷差价）", "无官方多模态生成强项", "高峰期限流历史", "稳定性欠账：10-15 中断近 5 小时并触发全量赠金赔付；财新口径 9 月以来 13 次故障（多数为性能下降、4 次涉及网页与 API 部分中断）"],
      sources: [
        "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/",
        "https://www.thepaper.cn/newsDetail_forward_33785892",
        "https://omidsaffari.com/zh-cn/blog/deepseek-pricing-zh-cn"
      ]
    },
    {
      id: "kimi", name: "Kimi", vendor: "月之暗面", region: "国内",
      tagline: "Agent 能力突出的国产选手，已推出 Token Plan",
      models: ["Kimi K3 系列", "Kimi K2.7 Code", "Kimi K2.6"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "免费", note: "聊天免费" },
        { name: "会员", price: "约 $19/月等值", note: "2026 年套餐拆分，含更高 Agent 额度" },
        { name: "Token Plan", price: "编程订阅档", note: "面向编码场景的包月计划；10-09 官方文档明确\"模型推理服务按量计费，不提供订阅制方案\"，并提示与 Kimi 会员、Kimi Code 区分——即包月只覆盖 C 端与 Code 产品，API 侧无订阅入口" }
      ],
      apiNote: "10-09 复核官方帮助页：国内注册并完成实名认证的用户赠 ¥15 代金券（3 个月有效），但该券明确不可用于 Kimi K3，K3 需充值后解锁——新用户免费额度不覆盖当前旗舰行。开放平台\"模型推理价格说明\"页（platform.kimi.com/docs/pricing/chat）本轮直抓：文字口径完整可读，但 K3/K2 价格表格由客户端渲染，逐模型金额仍未静态复核，故价目维持 09-22 已核数值；该页另确证 K3 系列的缓存计费规则——缓存写入按 TTL 分 5min 与 1h 两档单独计费，有效期内命中缓存只按\"输入价格（缓存命中）\"计并自动续期、不再重复收缓存写入费；文件内容抽取/文件存储接口标\"限时免费\"",
      access: { difficulty: 1, need: "手机号直接注册", note: "国内直连无障碍" },
      strengths: ["K3/K2.7 Code 的 Agent 与工具调用能力国产领先", "长上下文", "正在启动 IPO（估值目标 500 亿美元）"],
      weaknesses: ["会员与 Token Plan 规则调整频繁", "多模态生成弱于大厂", "¥15 代金券不可用于 K3，试用旗舰要充值"],
      sources: [
        "https://platform.kimi.com/docs/pricing/chat",
        "https://omidsaffari.com/zh-cn/blog/kimi-pricing-zh-cn",
        "https://tokenplan.vip/kimi-token-plan/",
        "https://m.jiemian.com/article/14828428.html"
      ]
    },
    {
      id: "glm", name: "智谱清言 / GLM", vendor: "智谱 AI", region: "国内",
      tagline: "国产 Coding Plan 性价比代表，但刚大幅提价；C 端会员价已按 App Store 官方页修正",
      models: ["GLM 系列（清言 App 已接入 GLM-5，2026-02 报道）"],
      verifiedAt: "2026-09-25",
      plans: [
        { name: "Free", price: "¥0", note: "基础对话，GLM-4-Flash 永久免费（2026-09-19 三方核验页确证）" },
        { name: "VIP 会员", price: "连续包月 ¥19/月、单月 ¥59、连续包季 ¥79/季、年卡 ¥399", note: "2026-09-25 按清言 App Store 中国页（开发者自报）修正；旧\"¥79/月\"口径系误读（¥79 为包季价），另列有 ¥119 月卡、¥109 季卡、¥219 包季、¥299/¥859 包年等 SKU，以 App 内实时价为准" },
        { name: "SVIP 会员", price: "¥229/月（连续包月与月卡同价）", note: "高阶功能与更高额度；官方页另示 SVIP+ 连续包年首年 ¥399/年起（第三方转述，未逐项核实）" },
        { name: "GLM Coding Plan", price: "Lite ¥49 / Pro ¥149 / Max ¥469 每月", note: "按倍数匹配代码模型调用额度与智能体权限；2026-09 被报道涨价约 130%，首购优惠后仍显著高于原价" }
      ],
      apiNote: "开放平台已核实报价（docs.bigmodel.cn）：GLM-5.3 输入 ¥8 / 输出 ¥28，GLM-5.3-Flash 输入 ¥0.8 / 输出 ¥2.8 每百万 tokens",
      access: { difficulty: 1, need: "手机号直接注册", note: "国内直连无障碍" },
      strengths: ["编程订阅国内热度高", "低价直连 API", "迭代快"],
      weaknesses: ["9 月提价削弱性价比", "顶配能力与 Claude/GPT 仍有差距", "会员 SKU 名目多（单次/连续/月/季/年），购买前以 App 内实时价为准"],
      sources: [
        "https://apps.apple.com/cn/app/id6450893458",
        "https://aibsz.com/2026-09-06/2026-nian-9-yue-ai-ding-yue-bian-dong-quan-jing-glm-dou-bao-guo-nei-wai/",
        "https://codepick.dev/zh/compare/ai-coding-subscription-comparison-2026/",
        "https://www.allagent.wiki/agents/chatglm/",
        "https://docs.bigmodel.cn/cn/guide/start/pricing"
      ]
    },
    {
      id: "doubao", name: "豆包", vendor: "字节跳动", region: "国内",
      tagline: "用户量最大的国产助手，2026-09 开启付费订阅",
      models: ["豆包大模型", "火山方舟 API"],
      verifiedAt: "2026-10-15",
      plans: [
        { name: "Free", price: "免费", note: "基础能力长期免费" },
        { name: "订阅", price: "2026-09 起开卖", note: "开始商业化订阅，具体档位见官网" },
        { name: "方舟 Coding Plan", price: "Lite 档约 ¥40/月起", note: "国产编程套餐最入门价位段之一" }
      ],
      access: { difficulty: 1, need: "手机号直接注册", note: "国内直连无障碍。10-14 豆包手机助手官方公众号宣布《屏幕自动化操作声明协议》SAEP 30 天公示期结束、平台将逐步放开第三方应用的屏幕自动化权限，同时公开\"拒绝被操作\"清单 150 余款（每经 10-15 早参：含微信/QQ/王者荣耀等 65 款腾讯及关联生态应用、淘宝/千问/支付宝等 23 款阿里及关联生态应用，以及拼多多、Kimi、快手系列、美团系列、小红书、DeepSeek、中国工商银行等；UC 10-15 稿记 151 款），第二代豆包手机 NaviX Ultra 的\"操作手机\"能力以 Beta 形式开放（东方财富 10-15 稿）——即手机智能体的跨应用执行受第三方授权约束，这是入口侧限制而非价格变动；本轮只核到该项，档位价与方舟 API 单价未复核" },
      strengths: ["生态与入口多（App/PC/耳机等硬件）", "语音/多模态体验好", "API 价格低"],
      weaknesses: ["刚开启付费，规则待观察", "深度 Agent 任务能力一般"],
      sources: [
        "https://aibsz.com/2026-09-06/2026-nian-9-yue-ai-ding-yue-bian-dong-quan-jing-glm-dou-bao-guo-nei-wai/",
        "https://codepick.dev/zh/compare/ai-coding-subscription-comparison-2026/"
      ]
    },
    {
      id: "cursor", name: "Cursor", vendor: "Anysphere（已被 SpaceX 收购）", region: "海外",
      tagline: "最贵的 AI 编辑器，Auto 模式不限量",
      models: ["Composer", "Grok", "各家前沿模型"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Hobby", price: "免费", note: "试用额度" },
        { name: "Pro", price: "$20/月", note: "10-09 按官方页 schema 复核为 $20；官方只写\"每档含一定量模型用量\"，未公开具体额度金额，旧\"含 $20 API 额度\"口径已无官方出处" },
        { name: "Pro+", price: "$60/月", note: "官方页另列 $60；旧\"含 $70 额度\"未在官方页复现" },
        { name: "Ultra", price: "$200/月", note: "旧\"含 $400 API 额度\"已无官方出处，超额走 on-demand 按用量后付费" },
        { name: "Teams", price: "$40/人/月", note: "团队协作档；Enterprise 官方页标\"询价\"，无公开单价" }
      ],
      access: { difficulty: 4, need: "海外信用卡；学生认证可免费 Pro", note: "Auto 模式所有付费档无限使用不耗额度；2026-09 中被报道部分计价上调约 60%；10-09 官方页口径为 included usage + on-demand 双池，后者按用量月底结算" },
      strengths: ["编辑器内 Agent 体验第一梯队", "多模型自由切换", "学生免费 Pro"],
      weaknesses: ["重度用户成本全场最高", "计费规则复杂、有提价前科", "被收购后数据归属存疑"],
      sources: [
        "https://www.cursor.com/pricing",
        "https://tkcursor.com/cursor-pricing-guide-2026-cn/",
        "https://mparticle.uc.cn/article.html?uc_param_str=frdnsnpfvecpntnwprdssskt#!wm_aid=88025ecfab58420cbde98a39dcedfe73!!wm_id=6297a14a523343eda756100d69e7af2a",
        "https://eastondev.com/blog/zh/posts/dev/20260110-cursor-pro-subscription-guide/"
      ]
    },
    {
      id: "copilot", name: "GitHub Copilot", vendor: "Microsoft / GitHub", region: "海外",
      tagline: "入门最便宜的编码订阅，但改按量计费后含金量存疑",
      models: ["多模型（自动选择）"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "免费", note: "受限额度，仅自动模型选择；官方文档口径每月 2,000 次补全" },
        { name: "Student", price: "免费", note: "学生认证，排除第三方代理" },
        { name: "Pro", price: "$10/月", note: "1,500 AI credits/月（部分用户免费）" },
        { name: "Pro+", price: "$39/月", note: "7,000 credits/月" },
        { name: "Max", price: "$100/月", note: "20,000 credits/月" },
        { name: "Business", price: "$19/人/月", note: "1,900 credits/人/月（10-09 补录官方 docs.github.com/zh/copilot/get-started/plans 档位）" },
        { name: "Enterprise", price: "$39/人/月", note: "3,900 credits/人/月，需 GitHub Enterprise Cloud" }
      ],
      access: { difficulty: 3.5, need: "GitHub 账号 + 外币支付", note: "2026-08 起从包月无限转为按 token/credits 计费，社区测算重度用户订阅价值缩水至约 25%；官方变更日志记 10-02 起弃用一批旧模型、10-07 上架 Claude Haiku 5.5" },
      strengths: ["$10 入门价全场最低", "GitHub 生态深度集成", "学生免费"],
      weaknesses: ["改按量计费后额度焦虑", "自动模型选择黑盒", "旗舰模型需高 credit 档"],
      sources: [
        "https://docs.github.com/zh/copilot/get-started/plans",
        "https://m.toutiao.com/article/7674957705156542995/"
      ]
    },
    {
      id: "trae", name: "Trae", vendor: "字节跳动", region: "国内",
      tagline: "国产 AI IDE，免费入口宽但 2026-08 起转积分制",
      models: ["豆包系模型 + 多家模型"],
      verifiedAt: "2026-10-10",
      plans: [
        { name: "免费版", price: "免月租", note: "官方定价页档名\"免费 Free\"：¥0、每月 500 积分、2 个云端任务同时执行（10-10 直抓 www.trae.cn/pricing，静态可读）" },
        { name: "会员 Lite", price: "¥49/月（官方页标首月优惠低至 ¥39）", note: "2,000 积分/月；站内旧值\"首月 9.9\"系第三方转述，10-10 在官方定价页未能复现，按官方页改记 ¥39" },
        { name: "会员 Pro", price: "¥99/月（官方页标首月优惠低至 ¥69）", note: "4,000 积分/月、10 个云端任务；站内旧值\"首月 59\"同样未能复现，改记官方 ¥69" },
        { name: "会员 Pro+", price: "¥239/月（首月低至 ¥219）", note: "12,000 积分/月；官方页与站内旧值一致" },
        { name: "会员 Ultra", price: "¥699/月（首月低至 ¥629）", note: "顶配 40,000 积分/月、20 个云端任务、新模型优先使用；官方五档积分 500 / 2,000 / 4,000 / 12,000 / 40,000，四档会员签到另多得 3000 积分" }
      ],
      apiNote: "10-10 直抓官方定价页（www.trae.cn/pricing，静态可读）逐档复核：个人方案五档，月费 ¥0/¥49/¥99/¥239/¥699 与站内记录一致，两处首月促销价（Lite、Pro）按官方页改正；四个会员档均写\"模型折扣：Seed-2.1 2.5 折，GLM、DeepSeek-V4.1 5 折\"与高峰期优先响应。同日另核官方文档 10-09 公告：TraeWork 与 TraeCode 融合升级为全新 TRAE，一个入口、Agent 模式与 IDE 模式切换、覆盖桌面/Web/移动三端——定价页档位与金额未见因合并变动",
      access: { difficulty: 1, need: "手机号直连", note: "2026-07-31 起定额制改按量扣点，常规对话与脚本也计费，社区普遍反馈变贵" },
      strengths: ["国内直连的 AI IDE", "中文理解好", "首月优惠激进"],
      weaknesses: ["积分制下成本不可预测", "免费额度缩水", "深度能力逊于 Claude/Cursor"],
      sources: [
        "https://www.trae.cn/pricing",
        "https://docs.trae.cn/work_traework-to-traecode-data-migration",
        "https://blog.csdn.net/heng_llh/article/details/163377039"
      ]
    },
    {
      id: "qianwen", name: "千问（通义）", vendor: "阿里巴巴", region: "国内",
      tagline: "开源下载量全球第一的国产系，App 已开启三档会员",
      models: ["Qwen3.8 系列（含开源 Qwen3.8-27B）"],
      verifiedAt: "2026-10-15",
      plans: [
        { name: "Free", price: "免费", note: "App 基础能力；百炼侧 qwen3.8-max 送 100 万 Token 免费额度，有效期为开通/发布/申请通过之日起 90 天（取较晚者，官方定价页括注原文）" },
        { name: "会员三档", price: "2026-08-13 起收费，三档定价低于豆包", note: "以 App 内价格为准；办公助理年费最高 ¥1,499。10-14 千问办公召开发布会推出\"千问办公电商版\"——集团副总裁、千问办公 CEO 陈宇森宣布即日开启邀测、官方称一到两周内向全部用户开放；它不是独立 App，而是在千问办公网页端/客户端内从通用版切换到\"电商经营\"模式，四项专业功能为跨平台经营看板、趋势洞察及卖点分析、爆款素材批量生成、跨平台 ROI 智能优化，另有潜力新品挖掘/素材裂变/素材诊断/预算监控/客服，已接入生意参谋、有赞、千牛等经营工具，官方定位为面向所有电商平台与商家的\"独立第三方电商 Agent\"（时代周报 10-14 稿与证券日报网 10-14 稿两源一致，财闻现场稿明确\"并不是独立 App\"，纠正了多篇转载稿写成独立 App 的口径）。发布会未披露电商版是否另收费、无可核价签，故本档案档位价格一律不动" }
      ],
      apiNote: "阿里云百炼定价页 10-09 直抓：qwen3.8-max 输入 ¥12 / 输出 ¥36 每百万 Token（0<Token≤1M 档），Batch 调用半价、上下文缓存另有折扣；同页另列优速模式 qwen3.8-max-prime 输入 ¥24 / 输出 ¥72 且无免费额度；国际/美国区同一模型为 ¥14.988 / ¥44.965，即出海渠道价高于国内约 25%",
      access: { difficulty: 1, need: "手机号直连", note: "开源模型全球下载超 30 亿次，可本地部署零成本" },
      strengths: ["开源生态最强（可本地白嫖）", "长上下文与中文能力强", "定价激进低于豆包"],
      weaknesses: ["付费规则刚起步", "Agent 自动执行生态弱于 OpenAI/Claude"],
      sources: [
        "https://finance.sina.cn/tech/csj/2026-08-13/detail-inineiyk4692269.d.html",
        "https://www.iheima.com/article-400518.html",
        "https://www.donews.com/news/detail/4/6672131.html",
        "https://help.aliyun.com/zh/model-studio/model-pricing"
      ]
    },
    {
      id: "devin", name: "Devin Desktop（原 Windsurf）", vendor: "Cognition", region: "海外",
      tagline: "被 AI 程序员公司收编的编辑器，改名后主打 SWE 智能体",
      models: ["SWE-1.6 / SWE-2", "Cascade"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "免费", note: "基础额度" },
        { name: "Pro", price: "$15/月", note: "比 Cursor Pro 低 $5；另有 BYOK 自带钥匙接入。10-09 复核：devin.ai 与其定价页直抓均为客户端渲染、页面无静态价签，故本数仍为第三方渠道口径，未由官方页确证" },
        { name: "Teams", price: "$35/人/月", note: "团队档；同上未由官方页静态复核" }
      ],
      access: { difficulty: 4, need: "海外信用卡", note: "被 Cognition 收购后并入 Devin 品牌（2026 改名 Devin Desktop）；入门价约 $20 档的报道与 $15 定价页并存，以官网为准" },
      strengths: ["SWE 系模型端到端改代码能力强", "比 Cursor 便宜一档", "Cognition 资金充裕（估值 $480 亿）"],
      weaknesses: ["改名三次品牌混乱", "深度定制与插件生态弱于 VS Code 系", "被收购后路线变动风险"],
      sources: [
        "https://runapi.ai/zh-CN/windsurf-pricing",
        "https://m.toutiao.com/article/7678334137824002570/",
        "https://codepick.dev/zh/guides/windsurf-2-new-features/"
      ]
    },
    {
      id: "coze", name: "扣子 Coze", vendor: "字节跳动", region: "国内",
      tagline: "不自己用、用来\"造智能体\"的平台，积分计费",
      models: ["豆包系 + 多家模型"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "免费", note: "注册赠积分" },
        { name: "个人专业版", price: "¥39.9 / ¥99 / ¥199 / ¥999 每月", note: "按积分用量分四档（1000 积分 = 1 元）；10-09 按官方定价页逐档复核，金额与站内旧\"¥39.9 - ¥999\"区间一致" },
        { name: "团队版", price: "¥142 / ¥283 / ¥1,399 起", note: "多人协作；10-09 官方页所列三档金额，站内旧\"¥198 - ¥1,998\"系第三方转述，本轮改按官方页数字" },
        { name: "企业版", price: "¥980 起 / ¥8,980 起", note: "私有化与合规，官方页列两档起点" }
      ],
      access: { difficulty: 1, need: "手机号直连", note: "第三方 Token 代充渠道存在，折扣行情需自担风险" },
      strengths: ["低代码搭 Agent 门槛全场最低", "字节系渠道/工作流集成多", "免费可玩"],
      weaknesses: ["积分换算复杂、重度使用烧钱", "成品质量依赖搭者水平", "非通用聊天助手"],
      sources: ["https://micount.cn/blog/coze-price.html"]
    },
    {
      id: "wenxin", name: "文心", vendor: "百度", region: "国内",
      tagline: "C 端商业化遇冷的老牌选手，B 端 API 大幅降价抢市场",
      models: ["文心 4.5 / ERNIE 系列"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "免费", note: "基础功能免费" },
        { name: "会员", price: "低价档（App 内为准）", note: "2026-06 报道 C 端付费率不足一成" },
        { name: "API", price: "2026-06 起价格砍 85%", note: "阶梯优惠，B 端激进降价" }
      ],
      apiNote: "百度智能云千帆\"模型服务计费\"页文档更新时间即 2026-10-09，ERNIE 5.1 按量后付费逐档直抓：输入 ≤32k 为 ¥0.004/千 tokens（折 ¥4/百万）、输出 ¥0.018/千（¥18/百万）；32k<输入≤128k 涨到 ¥0.006/¥0.022 即 ¥6/¥22 每百万；批量推理列\"-\"表示未开放",
      access: { difficulty: 1, need: "手机号直连", note: "国内直连无障碍" },
      strengths: ["API 降价后价格战弹药充足", "搜索增强与中文知识库", "百度生态入口多"],
      weaknesses: ["Agent/编码能力第一梯队之外", "C 端产品迭代放缓"],
      sources: ["https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya", "https://www.toutiao.com/a7647574337255424548/"]
    },
    {
      id: "perplexity", name: "Perplexity", vendor: "Perplexity AI", region: "海外",
      tagline: "带引用的实时搜索问答，检索+溯源最成熟，Pro 刚涨价",
      models: ["自研 Sonar 系列 + 多家旗舰聚合（GPT-5.6 / Gemini 3.7 / Claude / Kimi K3 / GLM 5.3 / Grok 4.6）"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "$0", note: "基础检索近乎不限量；高级搜索 3 次/日、深度研究 1 次/月（第三方汇总口径）" },
        { name: "Pro", price: "$20/月 或 $200/年", note: "2026-08-14 新订阅由 $10 上调；存量可保持 $10 但每月需登录 3 天保资格；全模型切换" },
        { name: "Max", price: "$200/月 或 $2,000/年", note: "最高个人档：Opus 5/GPT-5.6 Sol + 10,000 算力积分/月（100 积分=$1）。10-09 复核：站内原记\"2026-07-16 新设\"与官方博客检索到的 2025-07 报道日期冲突，设立日期改标未核实；perplexity.ai/pricing 与 docs 的 Enterprise 段仍为 403 或只写 custom pricing，故本轮官方页逐档复核未通过，各档金额沿用 09-28 的第三方双源口径" },
        { name: "Enterprise Pro", price: "$40/席/月（年付 $400/席/年）", note: "2026-09-28 依社区纠错补注年付口径：第三方汇总为 \"$40 per seat per month, or $400 per seat per year\"（两者不是简单的月付打折关系，年付折合 $33.3/席/月）；Mini 版 $5/席/月；API 按 Sonar 官方价计费；另有 Comet Plus 内容包 $5/月、Enterprise Max $325/席/月。官方 enterprise/pricing 与 help 页对本机返回 403 无法直抓原文，故此档官网口径未核实" }
      ],
      access: { difficulty: 4.5, need: "大陆无法直连（依赖 Google 身份服务/国际 CDN），需网络环境；注册建议 Gmail/Apple，国产邮箱收不到验证；支付需国际卡", note: "Comet 浏览器 2025-10 起四端免费全球开放，但中国大陆使用仍需跨境网络；封号政策未核实" },
      strengths: ["回答自带可点击引用、实时检索，研究/查资料场景最成熟", "一个订阅切换多家旗舰模型；Sonar API token 单价低", "Comet/Computer 向执行型智能体进化，浏览器+助手一体"],
      weaknesses: ["Pro 档涨价 100%（$10→$20）、Max 抬到 $200", "大陆直连不可用且无本土化版本", "额度改算力积分制后计费不透明；深度编码弱；2026-02 停投广告后更依赖高价订阅"],
      sources: [
        "https://www.perplexity.ai/hub/blog/what-is-perplexity-pro",
        "https://www.perplexity.ai/hub/blog/introducing-perplexity-max",
        "https://docs.perplexity.ai/getting-started/pricing",
        "https://www.techspot.com/news/113186-perplexity-quietly-doubles-pro-plan-price-10-20.html",
        "https://coworker.ai/blog/perplexity-enterprise-pricing",
        "https://www.glbgpt.com/hub/zh/perplexity-subscription-plans/"
      ]
    },
    {
      id: "yuanbao", name: "腾讯元宝", vendor: "腾讯", region: "国内",
      tagline: "背靠微信生态、目前完全免费的通用助手（无内购档）",
      models: ["混元 Hy3 / Hy4 preview"],
      verifiedAt: "2026-10-13",
      plans: [
        { name: "Free", price: "免费", note: "App Store 中国页（2026-09-17 抓取）未列任何内购项目；第三方核实\"暂无付费会员\"" },
        { name: "腾讯云 Token Plan（非元宝会员）", price: "¥28 - ¥599/月（两套个人版）", note: "10-13 直抓 cloud.tencent.com/act/pro/tokenplan（321,535 字节）复核：同页并列两套个人版，均标\"6.5折/个人专享/限1台\"，且价签文字仍写\"日常价\"——① Hy 个人版（集成 Hy4 preview、Hy3）Lite 560 积分 ¥28/月、Standard 1,560 积分 ¥78/月、Pro 4,760 积分 ¥238/月、Max 9,360 积分 ¥468/月，昨日\"未在同页复现\"的 Max 档本轮已在页面数据中复现（购买链接 console.cloud.tencent.com/tokenhub/tokenplan/hy/max），该保留说明撤销；② 通用个人版（\"集成主流国产模型，兼容主流龙虾和编程工具\"）Lite 780 积分 ¥39/月、Standard 1,980 积分 ¥99/月、Pro 5,980 积分 ¥299/月、Max 11,980 积分 ¥599/月（链接 tokenplan/common/*）。页面另有企业版两张卡（\"企业版轻享套餐\"价签 ¥1,000/月、约 10 万积分/月；另一张 ¥100/月档含 Auto 智能路由与多 API Key 管控），两卡标题与价签在页面数据里错位、未逐档对上，故企业档价签标未核实。买的是腾讯云平台额度，勿与元宝 App 会员混为一谈；元宝 App 侧仍无内购档" }
      ],
      access: { difficulty: 1, need: "微信/QQ 登录，零支付门槛", note: "元宝本身无 API；混元模型走腾讯云按积分套餐" },
      strengths: ["完全免费+微信/QQ 生态入口独家", "Hy3、新语音识别等腾讯新模型率先免费接入", "无支付摩擦，小白首选"],
      weaknesses: ["无付费档=重度用户无升级通道", "额度/限流规则不公开", "长上下文与 Agent 能力无官方口径"],
      sources: [
        "https://cloud.tencent.com/act/pro/tokenplan",
        "https://m.thepaper.cn/newsDetail_forward_33176080",
        "https://www.tencent.com/zh-cn/tencent-hy3-now-available-globally-extending-practical-ai-across-products-workflows-and-cloud-services/"
      ]
    },
    {
      id: "hailuo", name: "海螺 AI", vendor: "MiniMax（稀宇科技）", region: "国内",
      tagline: "视频生成按秒明码标价，但 6·1 计费改革砍掉了低价档",
      models: ["MiniMax M3（文本）", "海螺 H3 / H3-Max（视频）", "speech-2.8（语音）"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "Free", price: "免费", note: "国内版免费额度规则仍未公开：10-09 直抓官方按量页，页内\"免费\"只出现在视频生成的素材豁免项（音频免费、图片 5 张内免费），文本模型无免费额度条目，故维持未核实" },
        { name: "订阅（国内）", price: "底档 ¥49/月起", note: "2026-06-01 起取消 ¥29 Starter 档；国内官网会员页不可直接抓取，更高档价未核实" },
        { name: "国际版会员", price: "$7.99 - $199.99/月（限时价）", note: "Standard 14.99→7.99（1,000 积分）到 Max 199.99（20,000 积分），仅美元月付（hailuoai.video 确证）" },
        { name: "API 按量", price: "M3 输入 ¥2.1/输出 ¥8.4 每百万", note: "≤512k 标准价；>512k 翻倍；视频 H3 每秒 ¥0.5(768P)-0.8(2K)（官方按量页确证）" }
      ],
      apiNote: "10-09 复核官方按量页（platform.minimax.cn/docs/guides/pricing-paygo）：MiniMax-M3 标\"永久五折\"，≤512k 档输入划线 ¥4.20 实收 ¥2.10、输出 ¥16.80 实收 ¥8.40、缓存读 ¥0.84 实收 ¥0.42 每百万 tokens；>512k 档为 ¥4.20/¥16.80 与翻倍前的 ¥8.40/¥33.60；同页另有优先服务档按标准价 1.5 倍计（¥6.30/¥25.20），语音 speech-2.8-hd ¥3.50、turbo ¥2.00 每万字符。站内 ¥2.1/¥8.4 即五折后的实收价，数值不变",
      access: { difficulty: 2, need: "手机号注册、支付宝/微信可付", note: "国际版需外币卡；开发者平台需实名" },
      strengths: ["视频生成定价按秒公开、可精确核算", "M3 长上下文分档明确（1M）", "调价后单价仍低于海外旗舰一个数量级"],
      weaknesses: ["6·1 按 token 计费改革砍掉低价档、老用户成本上移（官方致歉+补偿，股价当日收跌 15.71%）", "国内会员档位官网不公开", "公司资源倾斜 B 端与海外（Talkie/国际版）"],
      sources: [
        "https://platform.minimax.cn/docs/guides/pricing-paygo",
        "https://hailuoai.video/",
        "https://www.lanfucaijing.com/read/214365"
      ]
    },
    {
      id: "stepfun", name: "阶跃星辰", vendor: "阶跃星辰（StepFun）", region: "国内",
      tagline: "包月 Credit 套餐抢编程/Agent 场景，官方口径成本仅 Opus 1/8",
      models: ["Step 5 Preview（600B MoE，1M 上下文）", "Step 3.7 Flash"],
      verifiedAt: "2026-10-15",
      plans: [
        { name: "Free", price: "免费", note: "新注册送 160 积分/7 天全功能体验；登录送 15 天、首调再送 15 天、邀好友最多再加 45 天（最高免费 75 天）" },
        { name: "C 端会员", price: "档位价未核实", note: "尝鲜周卡/入门 1300 积分/高级 4500/进阶 10000/专业 27000 积分，官方页不披露人民币金额" },
        { name: "Step Plan（API 包月）", price: "¥49 - ¥699/月", note: "Flash Mini 49/月·400M Credit 起，Max 699/月·40000M；月池月末清零不结转，需指定 Base URL 才扣套餐（官方文档确证）。10-13 阶跃终端（STEPX）在上海\"Ready Builder One\"发布会推出首款大模型原生智能体手机 STEPX Neo 先行版，首创\"软硬模\"全栈定价：3999 元一次性打包手机硬件（16GB+256GB，国补后 3499 元）、智能体原生操作系统 Step AOS 1.0、创客工具 Step Studio 与 Step 系列模型使用权益，购机另送连续 12 个月、每月百亿 Token 额度的 STEPX Token Plan；10-13 21 时开启预售、10-16 10 时 13 分首销，京东/天猫/抖音同步（财闻 10-14 稿与中国经营报系 10-14 稿、雷递网 10-14 稿多源一致）。与站内 Step Plan 不同轨：这条是硬件+模型捆绑价，且赠送期满后的 Token Plan 续费单价官方未公布（EET-China 10-14 稿亦把\"额度消耗与续费定价\"列为待观察），故只记赠送口径、不写续费价，¥49-¥699 四档月费一律不动" }
      ],
      apiNote: "Step 5 Preview 按量：输入 ¥7 / 缓存命中 ¥0.35 / 输出 ¥20 每百万 tokens（1M 上下文）；官方口径单任务成本为 Claude Opus 5 的 1/8。10-09 核到第三方渠道同模型报价：OpenRouter 官方接口列 stepfun/step-5-preview（created 2026-10-08，输入 $1/输出 $2.7/缓存读 $0.05 每百万 tokens，context_length 1000000），AIMLAPI 官方模型目录亦列同名条目（releasedAt 2026-10-08，描述为 27B 激活/600B 总量稀疏 MoE、支持文本+图像+视频输入、恒带 low/medium/high 推理档，但该目录接口不含逐 token 价格，故价目侧只有 OpenRouter 一个第三方数——按站内汇率 1 USD≈7.1 CNY 折算为输入 ¥7.1/输出 ¥19.2，与站内 09-19 已核的官方 ¥7/¥20 吻合（OpenRouter 通常加价约 5%，此处输入持平、输出略低，属渠道价波动区间），故官方价目维持不变。另注：StepFun 自家定价页与模型页本轮直抓均为客户端渲染，未能静态复核新价——Arena+ 10-09 快照新增 Step-5 一行（页面第 17 行，Elo 1506、Coding 1560、AAII 44、MMLU-Pro 87.5），编码维换算 (1560-1300)/28.2=9.2；10-09 周五全量已把站内 stepfun 基准席位由 Step-3.5-Flash（页面第 119 行、编码分 4.7）换为 Step-5（第 17 行、编码分 9.2），页面行序使榜单默认序自第 7 位起整体后移一位",
      access: { difficulty: 2, need: "手机号注册、人民币直付；Step Plan 需开发者实名", note: "C 端权益与 API 价格双轨，命名相近易混淆" },
      strengths: ["唯一同时公开 C 端权益与 API 四季档价的国产厂商，性价比可算", "Step 5 单位成本极低+1M 上下文", "免费送额度活动频繁，试用成本低"],
      weaknesses: ["C 端会员价官方页不公开", "Credit 池不结转，重度用户体验落差", "Step 5 权重 10-15 才开源，当前 Preview"],
      sources: [
        "http://platform.stepfun.com/docs/zh/step-plan/overview",
        "https://www.stepfun.com/subscription/membership-benefits-explanation",
        "https://tech.sina.cn/2026-09-20/detail-inisnnky6611773.d.html"
      ]
    },
    {
      id: "xinghuo", name: "讯飞星火", vendor: "科大讯飞", region: "国内",
      tagline: "语音/办公老牌国货，C 端按垂类卖订阅，API 限时五折打价格战",
      models: ["星火 Spark-X2.5（2026-09-07 发布）"],
      verifiedAt: "2026-09-23",
      plans: [
        { name: "Free", price: "¥0", note: "App 免费下载、基础对话免费；\"星火 Lite 永久免费\"为二手口径，官方原文未核实" },
        { name: "垂类会员（App 内购）", price: "¥15/月起", note: "求职助手：连续包月 15 / 包月 19 / 包季 36-39（App Store 中国页确证）；按垂类拆分而非统一能力档；通用\"超级会员\"整站价目未核实" },
        { name: "Astron Token Plan", price: "¥200 / ¥600 / ¥2000", note: "标准 20000 额度/高级 60000/尊享 200000，不同模型消耗不同额度（官方文档确证）" }
      ],
      apiNote: "Spark-X2.5 公开计费：输入 ¥1.6 / 缓存命中 ¥0.24 / 输出 ¥6 每百万 tokens，现阶段限时五折（网经社报道）",
      access: { difficulty: 1, need: "手机号注册，支付宝/微信/应用商店内购齐全", note: "国际版（spark.ai）另需海外支付，$9.99/月 Pro 仅供参考" },
      strengths: ["C 端月费低至 ¥15，门槛国产最低之一", "X2.5 API 单价+五折政策清晰，可直接与 Step 5 比价", "中文语音识别/翻译、政企长文档壁垒"],
      weaknesses: ["垂类会员拆分（求职助手等），横向对比困难", "Token Plan 用\"额度\"而非 token 数，换算成本高", "免费额度官方口径不透明"],
      sources: [
        "https://apps.apple.com/cn/app/id6449919551",
        "https://www.xfyun.cn/doc/spark/TokenPlan.html",
        "https://www.100ec.cn/detail--6663749.html"
      ]
    },
    {
      id: "grok", name: "Grok", vendor: "xAI", region: "海外",
      tagline: "四档订阅价差大、按 Arena 基准编码分 9.3，实时信息是招牌",
      models: ["Grok-4.7（2026-09-21 发布）", "Grok 4 / 4 Heavy", "Grok Imagine"],
      verifiedAt: "2026-10-16",
      plans: [
        { name: "Free", price: "$0", note: "官方定价页 2026-10-02 直抓原文仅\"Get to know Grok and its capabilities for free within generous limits\"，无任何条数/时长数字；grok.com 结构化数据也只标 price=0（Auto/Fast 可用，Expert/Heavy 需升级）→ 免费档具体额度仍未核实" },
        { name: "SuperGrok Lite", price: "$10/月", note: "价格来源为 App Store 内购清单（© xAI Inc.）；2026-10-02 官方 x.ai/pricing 对比表列出该档但**未公示月费**（页面仅渲染 Free $0 / SuperGrok $30 / Plus $100）→ 数字为内购口径，非官方页确证" },
        { name: "SuperGrok", price: "$30/月", note: "官方定价页 2026-10-02 直抓确证（\"SuperGrok | $30 | /month\"，含 Grok 4.6 模型、Grok Bot、更高额度）；Grok Bot 已扩展至全部 SuperGrok 计划（2026-08-26 官方）" },
        { name: "SuperGrok Plus", price: "$100/月", note: "官方定价页 2026-10-02 直抓确证（$100/month，1080p 视频生成 + 显著更高用量）；另有 $5-$100 加量积分包" },
        { name: "SuperGrok Heavy", price: "$300/月", note: "价格来源为 App Store 内购清单；2026-10-02 官方定价页该档转 \"Contact/Get Heavy\" 未公示月费 → 未核实" }
      ],
      apiNote: "Grok 4.7 API 官方公告价 $2/$6 每百万 tokens（输入/输出，2026-09-21）。语音侧 10-15 上架 Grok Voice 3.0（官方公告署期 10-14 美西时间，经 Voice Agent API／Realtime 提供），定价每分钟 $0.08、折合每小时 $4.8，与 Grok Voice 2.0 完全持平（IT之家 10-15 08:30 与环球网 10-15 10:31 两源同录同一价），调用别名 grok-voice-latest 已自动迁移、2.0 就地退役；独立评测 Artificial Analysis 记其在 Speech-to-Speech Index 首参即 86.9 分第一（GPT-Live-1 Astra medium 83.2、Gemini 3.8 Live 82.6、自家 2.0 为 81.3），Big Bench Audio 单任务成本约 $0.025（低于 GPT-Live-1 的 $0.03 与 GPT-Realtime-2.1 的 $0.055）。注：语音按分钟计价与按 token 计价不同轨，不并入 token 价对比。",
      access: { difficulty: 5, need: "网络环境 + 海外支付卡", note: "另有第三方称 2026-07-25 印度区涨至 ₹2900/月，未见官方英文页佐证 → 未核实" },
      strengths: ["Grok-4.7 以 Coding Elo 1563 排 Arena+ 第 8，编码分 9.3 进第一梯队", "订阅档位从 $10 到 $300 梯度最全", "X 生态实时信息 + Imagine 图像视频生成"],
      weaknesses: ["免费档限制不透明（未核实）", "国内直连不可用、支付门槛高", "API 输出价 $6/M 高于 Grok 4.5 时代"],
      sources: [
        "https://x.ai/pricing",
        "https://apps.apple.com/us/app/grok-ai/id6670324846",
        "https://x.ai/news/grok-4",
        "https://x.ai/news/grok-4-7",
        "https://x.ai/news/introducing-grok-bot",
        "https://x.ai/news/grok-bot-more-plans"
      ]
    },
    {
      id: "poe", name: "Poe", vendor: "Quora（多模型聚合）", region: "海外",
      tagline: "一份订阅跑数千模型，$5 入门价全场最低，但按积分扣",
      models: ["聚合 GPT-5.5 / Claude-Opus / Gemini-3.5-Flash / DeepSeek / Veo / Sora 等（官方订阅页示例机器人文案）"],
      verifiedAt: "2026-09-25",
      plans: [
        { name: "Free", price: "¥0", note: "官方订阅页仅标\"有限点数\"（monthlyGrant=0），每日具体点数未公示 → 未核实" },
        { name: "Basic", price: "$5/月（年付 $62.5/年）", note: "1 万点数/日；官方页估算约 210 条 GPT-5.5 消息或 60 条 Claude-Opus-4.7" },
        { name: "Plus", price: "$25/月（年付 $250/年）", note: "66 万点数/月，可结转至 150 万；主力档" },
        { name: "Pro", price: "$62.5/月（年付 $625/年）", note: "165 万点数/月，结转上限 350 万" },
        { name: "Advanced", price: "$125/月（年付 $1,250/年）", note: "330 万点数/月，结转上限 850 万" },
        { name: "Max", price: "$312.5/月（年付 $3,125/年）", note: "825 万点数/月，结转上限 2,500 万；点数可 $30/百万随时加购" }
      ],
      access: { difficulty: 4, need: "网络环境 + 海外支付", note: "官方订阅页按地区显示本地货币（美分计价），美区价为上列美元数；另有 $30/百万点数加购" },
      strengths: ["$5 为海外聚合类最低入门价", "一个 App 覆盖数千模型 + 自建 bot", "年付折算 Basic 约 $5.21/月、点数按档递增透明"],
      weaknesses: ["无自研模型，体验取决于上游配额政策", "积分制下旗舰模型可用量波动大（官方估算 Basic 仅约 60 条 Claude-Opus 消息）", "国内不可直连"],
      sources: [
        "https://poe.com/subscription_plans",
        "https://apps.apple.com/us/app/poe-fast-ai-chat/id1640745955",
        "https://help.poe.com/hc/en-us/articles/19945140063636-Poe-Purchases-FAQs"
      ]
    },
    {
      id: "yuanqi", name: "腾讯元器", vendor: "腾讯", region: "国内",
      tagline: "微信/QQ 生态零代码智能体平台，官方已公告 2026-11-09 停服",
      models: ["混元 Hy3（2026-07-06 发布）/ Hy4 preview（2026-08-28）", "可挂第三方模型"],
      verifiedAt: "2026-10-13",
      plans: [
        { name: "创建/使用", price: "免费 → 2026-11-09 停服", note: "10-13 补录：官网 2026-10-08 发布《关于元器平台停止服务通知》，因业务调整 2026-11-09 正式停止全部服务。节奏——2026-10-29 起停止创建新智能体与 API Key 分发，存量智能体 11-09 前仍可正常使用；11-09 起关闭应用访问、数据读写、API 调用、控制台等所有面向公众的服务，通过元器发布到公众号/服务号/微信客服的智能体同步不再响应对话；数据导出过渡期截至 2027-01-09（停服后仍可登录导出控制台下载），逾期除法定留存日志外依法删除全部用户数据；官方替代指引为腾讯云智能体开发平台（ADP）与公众号智能回复。注：yuanqi.tencent.com 为前端渲染，10-13 静态直抓首页（64,982 字节）、/guide、/notice 三页均未取到公告原文（/api/notice 返 401），公告内容据多家独立媒体一致转述；10-02 复查所记\"无任何 C 端收费条目\"仍成立" }
      ],
      apiNote: "底层能力走腾讯云混元计费（与元器平台分开）：Hunyuan-a13b 输入 ¥0.5/输出 ¥2；Hy3 输入 ¥1/输出 ¥4/缓存命中 ¥0.25 每百万 tokens；第三方模型限时免费已于 2026-03-13 结束。元器自身的 API Key 分发将于 2026-10-29 停止（停服公告），届时经元器调用第三方模型的通道一并失效，需改走腾讯云混元计费或 ADP",
      access: { difficulty: 1, need: "微信/QQ 账号直接登录", note: "国内直连无障碍，但 2026-11-09 起平台整体停服" },
      strengths: ["微信/QQ 双生态分发入口", "零代码创建智能体门槛低", "停服前导出通道完整：配置/工作流/对话记录可备份，过渡期至 2027-01-09"],
      weaknesses: ["已公告 2026-11-09 停服、10-29 起连新建都停，新项目不应再选（官方指引迁往腾讯云 ADP）", "C 端商业化政策不透明（未核实）", "与扣子定位重叠，差异化靠腾讯生态"],
      sources: [
        "https://yuanqi.tencent.com/",
        "https://tech.sina.cn/2026-10-12/detail-iniuxmtq0466773.d.html",
        "https://www.100ec.cn/detail--6664665.html",
        "https://www.smarthey.com/detail/392092602143.html",
        "https://yuanqi.tencent.com/agreements/terms-of-service",
        "https://cloud.tencent.com/document/product/1729/97594"
      ]
    },
    {
      id: "mimo", name: "MiMo（小米）", vendor: "小米", region: "国内",
      tagline: "MIT 开源权重 + 低价按量 API，缓存命中价压到 ¥0.025",
      models: ["MiMo-V2.6-Pro", "MiMo-V2.6-Flash", "MiMo-V2.6-Pro-UltraSpeed", "MiMo-V2.5 系列（即将下线）"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "API 按量（实时推理）", price: "v2.6-pro 输入 ¥3 / 输出 ¥6 每百万", note: "10-09 直抓官方定价页：命中缓存输入 ¥0.025、未命中 ¥3.00、输出 ¥6.00；flash 档 ¥0.02/¥1.00/¥2.00；ultraspeed 档 ¥0.25/¥30.00/¥60.00" },
        { name: "API 按量（批量推理）", price: "v2.6-pro 输入 ¥1.50 / 输出 ¥3.00", note: "官方页批量列恰为实时价一半，命中缓存输入 ¥0.0125" },
        { name: "C 端订阅", price: "未核实", note: "官方定价页本轮只列按量与批量两类，未见会员/订阅档，故 C 端收费维持未核实" }
      ],
      apiNote: "海外区同页另列美元价：v2.6-pro 命中缓存 $0.0036 / 未命中 $0.435 / 输出 $0.87，flash $0.0028/$0.14/$0.28，批量再减半（$0.0018/$0.2175/$0.435）；按站内汇率 7.1 折算，国内 ¥3/¥6 折 $0.42/$0.85，与海外区基本持平。页面顶部公告：mimo-v2.5-pro 与 mimo-v2.5 将于北京时间 2026-10-21 10:00 正式下线，建议尽快切换新版模型",
      access: { difficulty: 1, need: "小米账号；国内直连", note: "开源权重 MIT 许可，可本地自部署零 API 成本；平台注册与实名流程本轮未实测" },
      strengths: ["缓存命中 ¥0.025 是本轮复核到的国产 API 最低档之一", "MIT 开源可自部署", "批量/实时/极速三档齐，成本可算"],
      weaknesses: ["无 C 端会员入口，个人用户只能走 API", "v2.5 系列十日后下线，接老价格的调用需迁移", "AAII 46 但 Vision 列源页无值，多模态能力官方未量化"],
      sources: [
        "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go"
      ]
    },
    {
      id: "longcat", name: "LongCat（美团）", vendor: "美团", region: "国内",
      tagline: "限时折扣价把输入打到 ¥2、命中缓存 ¥0.04，还能开电子发票",
      models: ["LongCat-2.5-Preview", "LongCat-2.0", "LongCat-Flash-Chat（站内基准席位行）"],
      verifiedAt: "2026-10-09",
      plans: [
        { name: "API 按量", price: "输入 ¥2 / 命中缓存 ¥0.04 / 输出 ¥8 每百万", note: "10-09 直抓官方定价页，标\"折扣价 / 百万 Tokens（限时）\"，同页注明\"折扣价为平台初上线限时优惠，实际费用以结算为准\"；当前支持模型仅 LongCat-2.5-Preview 与 LongCat-2.0" },
        { name: "Token 资源包", price: "未核实", note: "官方站点导航列\"Token资源包\"入口，本轮未抓到具体档位价格" },
        { name: "C 端订阅", price: "未核实", note: "平台侧无会员档条目；LongCat 的对话 App 未在本轮核实" }
      ],
      apiNote: "同页美元区 ¥2/¥0.04/¥8 对应 $0.30/$0.006/$1.20，按 7.1 汇率折算为 ¥2.13/¥0.043/¥8.52，与人民币区基本一致。计费门槛描述为\"按实际 Token 用量计费，无固定套餐门槛、无需保底承诺\"，中国大陆用户需先完成实名认证方可充值；发票规则：按量付费的已消费金额可申请电子发票（普票/专票），可开票金额=已消费−已开票",
      access: { difficulty: 1, need: "LongCat 平台账号 + 实名认证", note: "国内直连；权重 MIT 开源可自部署" },
      strengths: ["命中缓存 ¥0.04 的长上下文复用工成本极低", "支持电子发票，报销入账可用", "MIT 开源，无固定套餐门槛"],
      weaknesses: ["限时折扣价，转正后可能上移（官方已言明以结算为准）", "按量仅开两模型，选择面窄", "编码维换算 5.7，与国产第一梯队有距离"],
      sources: [
        "https://longcat.chat/platform/pricing"
      ]
    },
    {
      id: "mistral", name: "Mistral", vendor: "Mistral AI", region: "海外",
      tagline: "欧洲开源系旗舰，Pro $14.99 且学生半价，API 价低但榜单靠后",
      models: ["Mistral Large 3", "Mistral Medium 3.1", "Le Chat / Vibe", "Mistral Large 4（10-06 公开预览，非官方简称 ML4、官方代号 le Chonk）"],
      verifiedAt: "2026-10-10",
      plans: [
        { name: "Free", price: "未核实", note: "10-10 再直抓 mistral.ai/pricing：Free 卡有静态权益文本（\"Your personal AI agent for everyday tasks\"、web 与移动端可用、Limited messages and web searches、Limited coding sessions、Basic image generation and editing、100+ connectors），但页面只写\"受限\"不给数字额度，也未标 ¥/$0 价签，故免费档额度维持未核实" },
        { name: "Pro", price: "$14.99/月（学生 $5.99）", note: "官方页 FAQ 原文：认证学生可以 $5.99/月 购 Mistral Pro（normally $14.99）；页面标注价格为税前。10-10 补记权益列表：标准 Pro 卡内含 \"$25.5 /mo in API credits\"，同一卡片的学生切换态（Education plan）写 \"$15 /mo in API credits\"，即月费之外另给可按量抵扣的 API 额度" },
        { name: "Team", price: "$24.99/人/月", note: "团队协作工作区档；Enterprise 为 custom SLAs 询价" }
      ],
      apiNote: "官方定价页原文举例：Mistral Large 输入 $0.5 /M、输出 $1.5 /M；Batch processing 降 50%，缓存输入最多降 90%（\"up to 90% for repeated prompts\"）。站内基准席位取页面第 84 行的 Mistral Large 3（Elo 1428、Coding 1450、AAII 16），编码维换算 (1450-1300)/28.2=5.3。10-06 官方博客（mistral.ai/news/mistral-large-4，datePublished 2026-10-06T12:00:27Z）宣布 Mistral Large 4 公开预览：官方称 1 万亿参数、原生多模态、激活 520 亿参数，训练自 3,800 张 NVIDIA Grace Blackwell GPU（欧洲自建数据中心），预览版可当日在 Mistral Studio 走 API 试用，权重\"本月月底\"放出——即截至 10-10 尚无公开权重可自部署。10-10 直抓定价页（8,609 字符静态文本可全量检索）未见 Large 4/ML4/le Chonk 任何条目，故新模型 API 单价属未核实；基准侧同样只有 Large 3 一行，ML4 未进 Arena+ 榜，站内基准席位不改",
      access: { difficulty: 3.5, need: "海外信用卡", note: "国内直连可用性本轮未实测；开源权重（部分 Apache 2.0）可自部署绕开访问门槛" },
      strengths: ["$14.99 订阅 + 学生 $5.99 在海外旗舰里偏便宜", "Pro 月费之外另含 $25.5/月 API credits（学生档 $15），抵扣后可用量高于名义月费", "Large 3 $0.5/$1.5 的 API 价低，Batch 再对半", "Apache 2.0 权重可自部署，欧洲合规叙事"],
      weaknesses: ["AAII 仅 16、编码分 5.3，能力榜位靠后", "Free 档只有\"受限\"描述、无数字额度与价签", "Large 4 仍在公开预览、权重未落地且定价页无条目，买不到也核不到价", "国内可达性与生态入口弱于美系/国产"],
      sources: [
        "https://mistral.ai/pricing/",
        "https://mistral.ai/news/mistral-large-4/"
      ]
    }
  ],

  /* ---------------- 编辑部场景评分 ---------------- */
  scoreMethod: "榜单默认顺序 = OpenLM Chatbot Arena+ 页面默认行序（按各产品已上榜旗舰模型在该榜的排名先后排列，未收录者沉底按编辑部评分排）；编码维度按 Arena+ 的 Coding Elo 换算（来源见榜单下方基准表）；无自研模型的产品（Cursor/Copilot/Trae/Devin/Manus/扣子/Perplexity/Poe/腾讯元器）与未上榜的讯飞星火，及其余全部维度为编辑部人工评分（0-10），综合公开基准、社区实测反馈与编辑体验。",
  dimensions: {
    coding: "编码", agent: "自主任务执行", office: "通用问答/办公",
    multimodal: "多模态生成", context: "长上下文", value: "性价比", access: "国内可达性"
  },
  scores: {
    chatgpt:  { coding: 9.5, agent: 8.7, office: 9.3, multimodal: 9.0, context: 7.5, value: 7.0, access: 2.0 },
    claude:   { coding: 9.8, agent: 9.0, office: 8.8, multimodal: 7.5, context: 9.3, value: 5.5, access: 2.0 },
    gemini:   { coding: 9.6, agent: 7.8, office: 9.0, multimodal: 9.5, context: 9.6, value: 8.5, access: 2.5 },
    manus:    { coding: 5.5, agent: 8.8, office: 7.5, multimodal: 7.0, context: 7.0, value: 6.0, access: 3.5 },
    deepseek: { coding: 9.1, agent: 7.0, office: 7.8, multimodal: 6.5, context: 8.5, value: 9.6, access: 9.8 },
    kimi:     { coding: 9.3, agent: 7.6, office: 8.2, multimodal: 7.0, context: 9.0, value: 8.8, access: 9.6 },
    glm:      { coding: 9.2, agent: 7.0, office: 7.6, multimodal: 7.2, context: 8.0, value: 8.2, access: 9.6 },
    perplexity: { coding: 2.0, agent: 7.0, office: 6.0, multimodal: 5.0, context: 6.0, value: 7.0, access: 2.0 },
    yuanbao:  { coding: 5.2, agent: 5.0, office: 8.0, multimodal: 7.0, context: 5.0, value: 9.0, access: 10.0 },
    hailuo:   { coding: 6.6, agent: 7.0, office: 5.0, multimodal: 9.0, context: 8.0, value: 6.0, access: 8.0 },
    stepfun:  { coding: 9.2, agent: 8.0, office: 6.0, multimodal: 8.0, context: 9.0, value: 9.0, access: 7.0 },
    xinghuo:  { coding: 5.0, agent: 5.0, office: 9.0, multimodal: 7.0, context: 7.0, value: 8.0, access: 9.0 },
    grok:     { coding: 9.3, agent: 7.5, office: 8.0, multimodal: 8.5, context: 7.5, value: 6.5, access: 2.0 },
    poe:      { coding: 7.0, agent: 6.0, office: 7.5, multimodal: 7.5, context: 7.0, value: 8.5, access: 3.0 },
    yuanqi:   { coding: 4.0, agent: 7.5, office: 7.5, multimodal: 6.5, context: 6.0, value: 8.0, access: 9.8 },
    doubao:   { coding: 6.9, agent: 6.5, office: 8.6, multimodal: 8.5, context: 7.5, value: 9.2, access: 9.8 },
    cursor:   { coding: 9.1, agent: 8.2, office: 6.0, multimodal: 6.0, context: 7.5, value: 6.0, access: 3.0 },
    copilot:  { coding: 8.2, agent: 7.0, office: 6.0, multimodal: 6.0, context: 7.0, value: 8.0, access: 3.5 },
    trae:     { coding: 7.8, agent: 6.8, office: 6.0, multimodal: 6.0, context: 7.0, value: 7.5, access: 9.5 },
    qianwen:  { coding: 9.2, agent: 7.2, office: 8.5, multimodal: 8.3, context: 8.8, value: 9.0, access: 9.8 },
    devin:    { coding: 8.6, agent: 7.8, office: 5.5, multimodal: 5.5, context: 7.5, value: 7.8, access: 3.0 },
    coze:     { coding: 5.0, agent: 8.0, office: 8.0, multimodal: 7.5, context: 7.0, value: 8.5, access: 9.6 },
    wenxin:   { coding: 6.9, agent: 6.0, office: 7.8, multimodal: 7.5, context: 7.0, value: 8.8, access: 9.8 },
    mimo:     { coding: 9.2, agent: 6.5, office: 7.5, multimodal: 6.0, context: 8.0, value: 9.5, access: 9.5 },
    longcat:  { coding: 5.7, agent: 6.0, office: 7.0, multimodal: 5.5, context: 8.0, value: 9.0, access: 9.0 },
    mistral:  { coding: 5.3, agent: 6.5, office: 7.5, multimodal: 6.5, context: 7.0, value: 8.0, access: 3.0 }
  },

  /* ---------------- 模型基准（编码分数的换算来源） ----------------
   * 来源：OpenLM Chatbot Arena+（https://openlm.ai/chatbot-arena/）。
   * coding 维度 = (Coding Elo − 1300) / 28.2，0-10 截断；每个产品取其已上榜旗舰模型。
   * 无自研模型产品（Cursor/Copilot/Trae/Devin/Manus/Coze/Perplexity/Poe/元器）与未上榜的讯飞星火保留编辑部分。
   * ★ models 数组顺序 = Arena+ 页面默认显示行序，榜单"综合基准"模式直接按此顺序排——
   *   页面用未舍入的内部分数排序，显示 Elo 会出现并列/倒挂，故每周核实时务必按页面行序写入，勿自行按 Elo 重排。 */
  benchmarks: {
    source: "https://openlm.ai/chatbot-arena/",
    sourceName: "OpenLM · Chatbot Arena+",
    verifiedAt: "2026-10-20",
    models: [
      { agent: "claude",   model: "Claude Opus 5.5",    elo: 1526, coding: 1575, aaii: 58 },
      { agent: "gemini",   model: "Gemini-4-Argon",     elo: 1525, coding: 1570, aaii: 53 },
      { agent: "chatgpt",  model: "GPT-6 Astra",        elo: 1520, coding: 1568, aaii: 53 },
      { agent: "grok",     model: "Grok-4.7",           elo: 1507, coding: 1563, aaii: 47 },
      { agent: "mimo",     model: "MiMo-V2.6-Pro",      elo: 1507, coding: 1560, aaii: 46 },
      { agent: "kimi",     model: "Kimi-K3",            elo: 1506, coding: 1562, aaii: 46 },
      { agent: "qianwen",  model: "Qwen3.8-Max",        elo: 1506, coding: 1560, aaii: 45 },
      { agent: "glm",      model: "GLM-5.3",            elo: 1506, coding: 1560, aaii: 45 },
      { agent: "stepfun",  model: "Step-5",             elo: 1505, coding: 1560, aaii: 44 },
      { agent: "deepseek", model: "DeepSeek-V4.1-Flash", elo: 1503, coding: 1557, aaii: 43 },
      { agent: "wenxin",   model: "ERNIE-5.1",          elo: 1475, coding: 1495, aaii: 40 },
      { agent: "doubao",   model: "Seed2.0 Pro",        elo: 1466, coding: 1495, aaii: 39 },
      { agent: "hailuo",   model: "Minimax-M3",         elo: 1452, coding: 1485, aaii: 39 },
      { agent: "mistral",  model: "Mistral Large 3",    elo: 1428, coding: 1450, aaii: 16 },
      { agent: "yuanbao",  model: "Hunyuan-Hy3",        elo: 1422, coding: 1448, aaii: 35 },
      { agent: "longcat",  model: "LongCat-Flash-Chat", elo: 1420, coding: 1461, aaii: 22 }
    ]
  },

  /* ---------------- Arena+ 全量快照（V2.6，榜单页"基准榜"页签与 /arena.html 的数据源） ----------------
   * rows = openlm.ai/chatbot-arena 页面全部行，按页面行序原样收录（抓取解析，严禁重排）。
   * 每行: [Model, Arena Elo, Coding, Vision, AAII, MMLU-Pro, ARC-AGI, Organization, License]；空串=该列页面未收录。
   * 每周 cron 重新抓取本块并跑 gen-landing 重生成 arena.html。 */
  arena: {
    source: "https://openlm.ai/chatbot-arena/",
    sourceName: "OpenLM · Chatbot Arena+",
    fetchedAt: "2026-10-20",
    cols: ["Model", "Arena Elo", "Coding", "Vision", "AAII", "MMLU-Pro", "ARC-AGI", "Organization", "License"],
    note: "10-13 抓取件起源页删除 MMLU-Pro 整列（10-14、10-16 重抓仍是 9 列）：为守住本表 9 字段契约，MMLU-Pro 一律留空串（此前 238 个非空值随源页消失，不回填旧值）。10-18 抓取件再起一处结构变化——源页把 AAII 列换成 MII，页内榜单说明同步改写为 \"MII — Model Intelligence Index, combining Arena Elo and Agent Intelligence (scored on real-world, multi-step workflows and coding tasks)\"，而 10-16 那份说明仍写 \"AAII — Artificial Analysis Intelligence Index aggregating 10 challenging evaluations\"：两者不是同一个指标，按 329 个同名模型逐行比对，149 行数值不同（差值区间 −13～+3，多数低 1～3，如 Claude Opus 5.5 由 58 变 56、Claude Sonnet 5.5 由 56 变 54、GPT-6 Astra 由 53 变 52）、81 行恰好相同、95 行两皆空、另 4 行旧列有值而新列为空，故不作同名延续处理。本轮沿用 MMLU-Pro 那条既有口径：AAII 位一律留空串、不把 MII 数值灌进 AAII 列（产品榜的 AAII 表头写死在 public/index.html 与 dev/gen-landing.mjs 里，改列名属结构变更，交周五全量决定），MII 的 235 个非空数值另存 dev/_mii_2026-10-18.json 备查；产品榜 benchmarks.models 的 aaii 保留 10-16 的末次 AAII 读数（不代表今日核实）。10-18 行数由 329 增至 334（新增 5 行：Ling-3.1-flash 1485/1500、Hunyuan-Hy4 1464/1468、Mistral Large 4 1448/1478、K2-Horizon-375B-A23B 1420/1462、Nemotron-3.5-Super-VL-120B-A12B 1416/1459），Arena Elo／Coding／Vision 三列对全部同名行零变动，ARC-AGI 仅 Gemini-4-Argon 由空补出 91.3，许可列 11 行为 \"Apache-2.0\"→\"Apache 2.0\" 写法规范化加 Hunyuan-Hy3 由 Tencent 改 Apache 2.0。10-19 两次重抓（09:39 与 17:02）：两份抓取件均 131,410 字节、md5 与 10-18 那份完全相同，335 个 tr／334 行逐行零变动（源页表头仍 8 列、MII 非空值按列位重数仍 235 个），故本表内容一字未改，仅 fetchedAt 按核实日同步提 10-19。10-20 重抓抓取件 132,049 字节（md5 与昨两枚均不同），行数由 334 增至 336、删 0 行，变化只有三处：① 第 33 行插入 GLM-5.3-Flash 🥈 1501/1538/1296（Z.ai·MIT），② 第 36 行插入 Minimax-M3.1-Flash 🥈 1500/1539（MiniMax·Non-commercial，Vision 栏源页即为空），两处均按页面行序入位、未做任何按显示 Elo 的重排，其余 334 行的 Arena Elo／Coding／Vision／ARC-AGI／Organization／License 逐列零变动（含唯一一处补值：MiMo-V2.6-Pro ✅ 的 Vision 由空补出 1311，Elo/Coding 仍 1507/1560）；③ MII 非空值由 235 增至 237，全部增量即这两行新增（各 42），既有行的 MII 无一改动，AAII 位仍一律留空串。产品榜是否给 GLM-5.3-Flash 与 Minimax-M3.1-Flash 开档案／席位属结构变更，交周五全量决定（前者 1501 高于现榜第 5 席 MiMo-V2.6-Pro 的 1507 之下、后者基座 Minimax-M3 已在本表 69 行但不在产品榜内）。" ,
    rows: [
      ["Claude Opus 5.5","1526","1575","1320","","","93.3","Anthropic","Proprietary"],
      ["Gemini-4-Argon","1525","1570","1318","","","91.3","Google","Proprietary"],
      ["Claude Sonnet 5.5","1521","1568","1315","","","","Anthropic","Proprietary"],
      ["Claude Fable 5.1","1520","1570","1315","","","90","Anthropic","Proprietary"],
      ["GPT-6 Astra","1520","1568","1316","","","95","OpenAI","Proprietary"],
      ["Muse Wonder Full","1518","1567","1316","","","","Meta","Proprietary"],
      ["GPT-6.1 Sol","1516","1568","1315","","","94.2","OpenAI","Proprietary"],
      ["Claude Opus 5","1511","1566","1314","","","90.4","Anthropic","Proprietary"],
      ["Claude Fable 5","1510","1566","1312","","","89.2","Anthropic","Proprietary"],
      ["Muse Wonder","1510","1565","1313","","","","Meta","Proprietary"],
      ["GPT-6 Sol","1509","1567","1313","","","89.6","OpenAI","Proprietary"],
      ["GPT-5.6 Sol","1508","1567","1312","","","92.5","OpenAI","Proprietary"],
      ["Grok-4.7","1507","1563","1310","","","75","xAI","Proprietary"],
      ["Muse Spark 1.3","1507","1562","1310","","","","Meta","Proprietary"],
      ["MiMo-V2.6-Pro ✅","1507","1560","1311","","","","Xiaomi","MIT"],
      ["Kimi-K3 ✅","1506","1562","1311","","","60.4","Moonshot","Kimi K3"],
      ["Claude Opus 4.8 Thinking","1506","1562","1310","","","78","Anthropic","Proprietary"],
      ["Qwen3.8-Max ✅","1506","1560","1312","","","","Alibaba","Qwen3"],
      ["GLM-5.3 ✅","1506","1560","","","","65.8","Z.ai","MIT"],
      ["GPT-5.6 Terra","1505","1562","1310","","","83.9","OpenAI","Proprietary"],
      ["Gemini-3.8-Flash","1505","1561","1312","","","80.6","Google","Proprietary"],
      ["GPT-5.5-high","1505","1561","1311","","","85","OpenAI","Proprietary"],
      ["Step-5 ✅","1505","1560","","","","","StepFun","StepFun"],
      ["Claude Opus 4.7 Thinking","1504","1559","1309","","","75.8","Anthropic","Proprietary"],
      ["Grok-4.5","1504","1556","1305","","","","xAI","Proprietary"],
      ["Gemini-3.1-Pro","1504","1531","1309","","","77.1","Google","Proprietary"],
      ["Claude Opus 4.8","1503","1558","1306","","","62.2","Anthropic","Proprietary"],
      ["DeepSeek-V4.1-Flash","1503","1557","","","","72.9","DeepSeek","MIT"],
      ["Gemini-3.7-Flash","1503","1556","1303","","","","Google","Proprietary"],
      ["Claude Opus 4.7","1502","1554","1300","","","62.1","Anthropic","Proprietary"],
      ["DeepSeek-V4-Pro","1502","1550","","","","61.5","DeepSeek","MIT"],
      ["Claude Opus 4.6 Thinking","1502","1545","1304","","","69.2","Anthropic","Proprietary"],
      ["Muse Spark 1.2","1502","1540","1300","","","","Meta","Proprietary"],
      ["GLM-5.3-Flash","1501","1538","1296","","","","Z.ai","MIT"],
      ["Claude Haiku 5.5","1501","1538","","","","61.3","Anthropic","Proprietary"],
      ["Gemini-3.6-Flash","1501","1535","1301","","","72.1","Google","Proprietary"],
      ["Minimax-M3.1-Flash","1500","1539","","","","","MiniMax","Non-commercial"],
      ["GPT-5.4-high","1496","1538","1290","","","74","OpenAI","Proprietary"],
      ["Muse Spark 1.1","1496","1521","1298","","","","Meta","Proprietary"],
      ["Grok-4.20","1495","1518","1279","","","65.1","xAI","Proprietary"],
      ["Gemini-3-Pro","1492","1501","1308","","","33.6","Google","Proprietary"],
      ["Claude Opus 4.6","1490","1535","1298","","","64.6","Anthropic","Proprietary"],
      ["GLM-5.2","1488","1525","","","","22.8","Z.ai","MIT"],
      ["Qwen3.7-Max","1486","1505","1289","","","","Alibaba","Proprietary"],
      ["Claude Sonnet 5 Thinking","1485","1520","1285","","","","Anthropic","Proprietary"],
      ["Ling-3.1-flash","1485","1500","","","","","Ant","MIT"],
      ["Muse Spark Open","1484","1493","1294","","","","Meta","Muse"],
      ["Grok-4.1-Thinking","1482","1483","","","","26","xAI","Proprietary"],
      ["ERNIE-5.1","1475","1495","","","","","Baidu","Proprietary"],
      ["Claude Opus 4.5 (thinking-32k)","1469","1510","","","","30.6","Anthropic","Proprietary"],
      ["Claude Sonnet 4.6 Thinking","1468","1511","1278","","","60.4","Anthropic","Proprietary"],
      ["GLM-5.1","1467","1506","","","","5.1","Z.ai","MIT"],
      ["Seed2.0 Pro","1466","1495","1288","","","","ByteDance","Proprietary"],
      ["Kimi-K2.6-Thinking","1466","1493","1286","","","","Moonshot","Modified MIT"],
      ["Qwen3.5-Max","1466","1493","","","","","Alibaba","Proprietary"],
      ["MiMo-V2.5-Pro","1466","1485","","","","","Xiaomi","MIT"],
      ["GPT-5.2-high","1465","1470","1280","","","52.9","OpenAI","Proprietary"],
      ["Gemini-3-Flash","1465","1469","1292","","","31.1","Google","Proprietary"],
      ["GPT-5.4","1465","1468","1275","","","29.2","OpenAI","Proprietary"],
      ["Hunyuan-Hy4","1464","1468","","","","","Tencent","Apache 2.0"],
      ["GPT-5.1-high","1464","1466","1250","","","17.6","OpenAI","Proprietary"],
      ["GPT-5.2","1464","1465","1248","","","26.7","OpenAI","Proprietary"],
      ["Grok-4.1","1463","1463","","","","","xAI","Proprietary"],
      ["Claude Opus 4.5","1462","1496","","","","7.8","Anthropic","Proprietary"],
      ["GPT-5.4-mini-high","1461","1461","","","","18.9","OpenAI","Proprietary"],
      ["Claude Sonnet 4.6","1460","1500","1277","","","37.6","Anthropic","Proprietary"],
      ["Gemini-2.5-Pro","1459","1465","1266","","","4.9","Google","Proprietary"],
      ["ERNIE-5.0","1458","1461","1251","","","","Baidu","Proprietary"],
      ["Qwen3.6-Plus","1456","1482","","","","","Alibaba","Proprietary"],
      ["Minimax-M3","1452","1485","","","","","MiniMax","Non-commercial"],
      ["GLM-5","1452","1461","","","","5","Z.ai","MIT"],
      ["Kimi-K2.5-Thinking","1451","1480","1271","","","11.8","Moonshot","Modified MIT"],
      ["DeepSeek-V4-Flash","1451","1466","","","","61.4","DeepSeek","MIT"],
      ["GPT-5.6 Luna","1451","1465","","","","59.5","OpenAI","Proprietary"],
      ["Qwen3.8-27B","1450","1465","","","","","Alibaba","Apache 2.0"],
      ["Qwen3.5-397B-A17B","1450","1463","","","","5","Alibaba","Apache 2.0"],
      ["Gemma-4-31B-it","1449","1462","","","","","Google","Apache 2.0"],
      ["Mistral Large 4","1448","1478","","","","","Mistral","Apache 2.0"],
      ["GLM-4.7","1445","1460","","","","","Z.ai","MIT"],
      ["GPT-5-high","1444","1460","1232","","","9.9","OpenAI","Proprietary"],
      ["Qwen3-Max","1443","1468","","","","","Alibaba","Proprietary"],
      ["Gemma-4-26B-A4B-it","1443","1460","","","","","Google","Apache 2.0"],
      ["Grok-4","1442","1453","1221","","","16","xAI","Proprietary"],
      ["GLM-4.6","1441","1458","","","","","Z.ai","MIT"],
      ["GPT-5.1","1440","1450","1243","","","7.5","OpenAI","Proprietary"],
      ["Kimi-K2-Thinking","1438","1450","","","","","Moonshot","Modified MIT"],
      ["Claude Sonnet 4.5 (thinking-32k)","1432","1485","","","","13.6","Anthropic","Proprietary"],
      ["MiMo-V2-Pro","1431","1441","","","","","Xiaomi","Proprietary"],
      ["GLM-4.5","1430","1448","","","","","Z.ai","MIT"],
      ["Qwen3-VL-235B-A22B-Instruct","1429","1457","1246","","","","Alibaba","Apache 2.0"],
      ["Mistral Large 3","1428","1450","","","","","Mistral","Apache 2.0"],
      ["ChatGPT-4o-latest (2025-03-26)","1427","1434","1242","","","","OpenAI","Proprietary"],
      ["DeepSeek-R1-0528","1426","1436","","","","1.3","DeepSeek","MIT"],
      ["Claude Opus 4.1 (thinking-16k)","1425","1475","","","","","Anthropic","Proprietary"],
      ["o3-2025-04-16","1424","1441","1218","","","6.5","OpenAI","Proprietary"],
      ["Grok-3-Preview-02-24","1423","1439","","","","","xAI","Proprietary"],
      ["Hunyuan-Hy3","1422","1448","","","","","Tencent","Apache 2.0"],
      ["DeepSeek-V3.2-Thinking","1422","1438","","","","4","DeepSeek","MIT"],
      ["Gemini-3.1-Flash-Lite","1421","1402","1230","","","","Google","Proprietary"],
      ["Claude Sonnet 4.5","1420","1464","","","","","Anthropic","Proprietary"],
      ["K2-Horizon-375B-A23B","1420","1462","","","","","IFM","Apache 2.0"],
      ["LongCat-Flash-Chat","1420","1461","","","","","Meituan","MIT"],
      ["Claude Opus 4.1","1419","1465","","","","","Anthropic","Proprietary"],
      ["Grok-4-Fast","1419","1441","","","","","xAI","Proprietary"],
      ["Qwen3-235B-A22B-Instruct-2507","1418","1457","","","","1.3","Alibaba","Apache 2.0"],
      ["Nemotron-3-Ultra-550B-A55B","1418","1452","","","","","Nvidia","Nvidia Open"],
      ["DeepSeek-V3.1-Thinking","1418","1437","","","","","DeepSeek","MIT"],
      ["DeepSeek-V3.2","1418","1431","","","","","DeepSeek","MIT"],
      ["Qwen3-Next-80B-A3B-Instruct","1417","1456","","","","","Alibaba","Apache 2.0"],
      ["Amazon-Nova-Chat-11-10","1417","1431","","","","","Amazon","Proprietary"],
      ["DeepSeek-V3.1","1417","1430","","","","","DeepSeek","MIT"],
      ["Nemotron-3.5-Super-VL-120B-A12B","1416","1459","","","","","Nvidia","OpenMDW-1.1"],
      ["Minimax-M2.7","1416","1448","","","","","MiniMax","Non-commercial"],
      ["Qwen3-235B-A22B-Thinking-2507","1416","1442","","","","","Alibaba","Apache 2.0"],
      ["GPT-4.5-Preview","1415","1419","1190","","","0.8","OpenAI","Proprietary"],
      ["GPT-5-chat","1413","1421","1238","","","7.5","OpenAI","Proprietary"],
      ["Gemini-2.5-Flash","1412","1420","1235","","","2.5","Google","Proprietary"],
      ["Qwen3-VL-235B-A22B-Thinking","1411","1432","1215","","","","Alibaba","Apache 2.0"],
      ["Hunyuan-Vision-1.5-Thinking","1410","1419","1220","","","","Tencent","Proprietary"],
      ["Minimax-M2.5","1408","1436","","","","4.9","MiniMax","Modified MIT"],
      ["MiMo-V2-Flash","1402","1411","","","","","Xiaomi","MIT"],
      ["Mistral Medium 3.1","1401","1412","","","","","Mistral","Proprietary"],
      ["Hunyuan-T1-20250711","1400","1409","","","","","Tencent","Proprietary"],
      ["Minimax-M2.1","1399","1430","","","","","MiniMax","Modified MIT"],
      ["MAI-1-Preview","1398","1406","","","","","Microsoft","Proprietary"],
      ["Gemini-2.0-Pro-Exp-02-05","1398","1396","1170","","","","Google","Proprietary"],
      ["Gemini-2.0-Flash-Thinking-Exp-01-21","1397","1383","1208","","","","Google","Proprietary"],
      ["Step-3.5-Flash","1387","1433","","","","","StepFun","Apache 2.0"],
      ["GLM-4.5-Air","1386","1410","","","","","Z.ai","MIT"],
      ["Qwen3-30B-A3B-Instruct-2507","1382","1425","","","","","Alibaba","Apache 2.0"],
      ["Kimi-K2-0905-Preview","1382","1403","","","","","Moonshot","Modified MIT"],
      ["Qwen-VL-Max-2025-08-13","1381","1440","1213","","","","Alibaba","Proprietary"],
      ["GPT-4.1-2025-04-14","1381","1396","1207","","","0.4","OpenAI","Proprietary"],
      ["Kimi-K2-0711-Preview","1380","1402","","","","","Moonshot","Modified MIT"],
      ["Claude Haiku 4.5","1378","1436","","","","","Anthropic","Proprietary"],
      ["DeepSeek-V3-0324","1377","1391","","","","","DeepSeek","MIT"],
      ["Hunyuan-Turbos-20250416","1377","1390","","","","","Tencent","Proprietary"],
      ["Claude Opus 4 (thinking-16k)","1376","1434","1188","","","8.6","Anthropic","Proprietary"],
      ["GPT-5-mini","1375","1419","1214","","","4.4","OpenAI","Proprietary"],
      ["DeepSeek-R1","1373","1382","","","","1.3","DeepSeek","MIT"],
      ["Gemini-2.0-Flash-Exp","1370","1371","1191","","","1.3","Google","Proprietary"],
      ["Qwen3-235B-A22B","1369","1394","","","","","Alibaba","Apache 2.0"],
      ["Mistral Medium 3","1369","1387","1159","","","","Mistral","Proprietary"],
      ["gpt-oss-120b","1368","1398","","","","","OpenAI","Apache 2.0"],
      ["Qwen2.5-Max","1367","1373","","","","","Alibaba","Proprietary"],
      ["Claude Opus 4","1366","1405","1173","","","1.3","Anthropic","Proprietary"],
      ["Grok-3-mini-high","1366","1380","","","","","xAI","Proprietary"],
      ["o1-2024-12-17","1366","1378","1166","","","1.3","OpenAI","Proprietary"],
      ["o4-mini-2025-04-16","1362","1385","1192","","","6.1","OpenAI","Proprietary"],
      ["Step-3","1360","1400","1190","","","","StepFun","Proprietary"],
      ["Qwen3-Coder-480B-A35B-Instruct","1358","1406","","","","","Alibaba","Apache 2.0"],
      ["Nemotron-3-Super-120B-A12B","1357","1401","","","","","Nvidia","Nvidia Open"],
      ["Gemma-3-27B-it","1356","1350","1163","","","","Google","Gemma"],
      ["INTELLECT-3","1355","1376","","","","","Prime Intellect","MIT"],
      ["Claude Sonnet 4 (thinking-32k)","1351","1412","1187","","","5.9","Anthropic","Proprietary"],
      ["Minimax-M1","1351","1369","","","","","MiniMax","Apache 2.0"],
      ["Qwen3-32B","1342","1376","","","","","Alibaba","Apache 2.0"],
      ["Llama-3.3-Nemotron-Super-49B-v1.5","1340","1359","","","","","Nvidia","Nvidia Open"],
      ["Step-1o-Turbo-202506","1339","1361","1182","","","","StepFun","Proprietary"],
      ["o3-mini-high","1338","1380","","","","3","OpenAI","Proprietary"],
      ["GPT-4.1-mini-2025-04-14","1338","1370","1177","","","","OpenAI","Proprietary"],
      ["Gemini-2.5-Flash-Lite","1337","1362","1205","","","","Google","Proprietary"],
      ["Mistral-Small-3.2-2506","1337","1361","1145","","","","Mistral","Apache 2.0"],
      ["Claude Sonnet 4","1335","1384","1170","","","1.3","Anthropic","Proprietary"],
      ["Gemma-3-12B-it","1335","1310","","","","","Google","Gemma"],
      ["DeepSeek-V3","1334","1337","","","","","DeepSeek","DeepSeek"],
      ["GPT-5-nano","1333","1363","1166","","","2.6","OpenAI","Proprietary"],
      ["QwQ-32B","1332","1351","","","","","Alibaba","Apache 2.0"],
      ["GLM-4-Plus-0111","1332","1310","","","","","Z.ai","Proprietary"],
      ["Gemini-2.0-Flash-Lite","1330","1338","1097","","","","Google","Proprietary"],
      ["Qwen-Plus-0125","1327","1339","","","","","Alibaba","Proprietary"],
      ["Command A (03-2025)","1327","1336","","","","","Cohere","CC-BY-NC-4.0"],
      ["Amazon-Nova-Chat-05-14","1324","1337","","","","","Amazon","Proprietary"],
      ["Llama-3.1-Nemotron-Ultra-253B-v1","1321","1345","","","","","Nvidia","Nvidia Open"],
      ["Step-2-16K-Exp","1321","1313","","","","","StepFun","Proprietary"],
      ["Qwen3-30B-A3B","1320","1346","","","","","Alibaba","Apache 2.0"],
      ["Gemini-1.5-Pro-002","1320","1311","1158","","","0.8","Google","Proprietary"],
      ["o1-mini","1318","1366","","","","0.8","OpenAI","Proprietary"],
      ["o3-mini","1318","1361","","","","2.1","OpenAI","Proprietary"],
      ["Claude 3.7 Sonnet (thinking-32k)","1316","1355","1167","","","0.9","Anthropic","Proprietary"],
      ["gpt-oss-20b","1315","1371","","","","","OpenAI","Apache 2.0"],
      ["Hunyuan-Turbo-0110","1314","1335","","","","","Tencent","Proprietary"],
      ["Llama-3.3-Nemotron-Super-49B-v1","1310","1320","","","","","Nvidia","Nvidia Open"],
      ["OLMo-3-32b-think","1306","1327","","","","","Ai2","Apache 2.0"],
      ["Grok-2-08-13","1305","1298","","","","","xAI","Grok 2"],
      ["Gemma-3n-e4b-it","1304","1297","","","","","Google","Gemma"],
      ["Yi-Lightning","1303","1321","","","","","01 AI","Proprietary"],
      ["GPT-4o-2024-05-13","1302","1307","1134","","","","OpenAI","Proprietary"],
      ["Claude 3.7 Sonnet","1301","1341","1145","","","","Anthropic","Proprietary"],
      ["Claude 3.5 Sonnet (20241022)","1299","1340","1122","","","","Anthropic","Proprietary"],
      ["Deepseek-v2.5-1210","1296","1316","","","","","DeepSeek","DeepSeek"],
      ["Athene-v2-Chat-72B","1294","1320","","","","","NexusFlow","NexusFlow"],
      ["Gemma-3-4B-it","1293","1265","","","","","Google","Gemma"],
      ["Llama-4-Maverick-17B-128E-Instruct","1292","1312","1135","","","","Meta","Llama 4"],
      ["GLM-4-Plus","1292","1301","","","","","Z.ai","Proprietary"],
      ["Hunyuan-Large-2025-02-10","1291","1311","","","","","Tencent","Proprietary"],
      ["Gemini-1.5-Flash-002","1290","1273","1137","","","","Google","Proprietary"],
      ["GPT-4o-mini-2024-07-18","1289","1300","1063","","","","OpenAI","Proprietary"],
      ["GPT-4.1-nano-2025-04-14","1287","1312","1060","","","","OpenAI","Proprietary"],
      ["Llama-3.1-405B-Instruct-bf16","1286","1299","","","","","Meta","Llama 3.1"],
      ["Llama-3.1-Nemotron-70B-Instruct","1285","1289","","","","","Nvidia","Llama 3.1"],
      ["Qwen-Max-0919","1284","1296","","","","","Alibaba","Proprietary"],
      ["Llama-3.1-405B-Instruct-fp8","1284","1292","","","","","Meta","Llama 3.1"],
      ["Yi-Lightning-lite","1284","1286","","","","","01 AI","Proprietary"],
      ["Claude 3.5 Sonnet (20240620)","1283","1309","1117","","","","Anthropic","Proprietary"],
      ["Grok-2-mini-08-13","1283","1279","","","","","xAI","Proprietary"],
      ["Llama-4-Scout-17B-16E-Instruct","1276","1290","1126","","","","Meta","Llama 4"],
      ["Hunyuan-Standard-2025-02-10","1276","1289","","","","","Tencent","Proprietary"],
      ["Llama-3.3-70B-Instruct","1276","1279","","","","","Meta","Llama 3.3"],
      ["Deepseek-v2.5","1275","1306","","","","","DeepSeek","DeepSeek"],
      ["GPT-4-Turbo-2024-04-09","1275","1280","1087","","","","OpenAI","Proprietary"],
      ["Qwen2.5-72B-Instruct","1272","1302","","","","","Alibaba","Qwen"],
      ["Hunyuan-Large-Vision","1270","1298","1183","","","","Tencent","Proprietary"],
      ["Mistral-Small-3.1-24B-Instruct-2503","1269","1295","1121","","","","Mistral","Apache 2.0"],
      ["Mistral-Large-2411","1269","1284","","","","","Mistral","MRL"],
      ["Athene-70B","1268","1274","","","","","NexusFlow","CC-BY-NC-4.0"],
      ["GPT-4-1106-preview","1267","1269","","","","","OpenAI","Proprietary"],
      ["GPT-4-0125-preview","1266","1261","","","","","OpenAI","Proprietary"],
      ["Claude 3 Opus","1265","1269","1020","","","","Anthropic","Proprietary"],
      ["Llama-3.1-70B-Instruct","1265","1268","","","","","Meta","Llama 3.1"],
      ["Amazon Nova Pro 1.0","1262","1282","979","","","","Amazon","Proprietary"],
      ["Llama-3.1-Tulu-3-70B","1260","1251","","","","","Ai2","Llama 3.1"],
      ["Claude 3.5 Haiku (20241022)","1256","1287","1095","","","","Anthropic","Proprietary"],
      ["magistral-medium-2506","1253","1307","","","","","Mistral","Proprietary"],
      ["Reka-Core-20240904","1252","1238","","","","","Reka AI","Proprietary"],
      ["Reka-Core-20240722","1250","1226","","","","","Reka AI","Proprietary"],
      ["Qwen-Plus-0828","1242","1263","","","","","Alibaba","Proprietary"],
      ["Jamba-1.5-Large","1242","1244","","","","","AI21 Labs","Jamba Open"],
      ["Deepseek-v2-API-0628","1240","1260","","","","","DeepSeek","DeepSeek"],
      ["Mistral-Small-3-24B-Instruct-2501","1238","1251","","","","","Mistral","Apache 2.0"],
      ["Deepseek-Coder-v2-0724","1237","1286","","","","","DeepSeek","DeepSeek"],
      ["Yi-Large","1236","1238","","","","","01 AI","Proprietary"],
      ["Gemma-2-27B-it","1236","1226","","","","","Google","Gemma"],
      ["Qwen2.5-Coder-32B-Instruct","1235","1279","","","","","Alibaba","Apache 2.0"],
      ["Amazon Nova Lite 1.0","1233","1253","989","","","","Amazon","Proprietary"],
      ["Gemma-2-9B-it-SimPO","1233","1211","","","","","Princeton","MIT"],
      ["Command R+ (08-2024)","1233","1200","","","","","Cohere","CC-BY-NC-4.0"],
      ["Gemini-1.5-Flash-8B-001","1231","1228","1042","","","","Google","Proprietary"],
      ["Llama-3.1-Nemotron-51B-Instruct","1231","1227","","","","","Nvidia","Llama 3.1"],
      ["GLM-4-0520","1230","1237","","","","","Z.ai","Proprietary"],
      ["Nemotron-4-340B-Instruct","1229","1220","","","","","Nvidia","Nvidia Open"],
      ["Aya-Expanse-32B","1229","1211","","","","","Cohere","CC-BY-NC-4.0"],
      ["Reka-Flash-20240904","1225","1208","","","","","Reka AI","Proprietary"],
      ["Llama-3-70B-Instruct","1224","1216","","","","","Meta","Llama 3"],
      ["Claude 3 Sonnet","1223","1232","983","","","","Anthropic","Proprietary"],
      ["OLMo-2-0325-32B-Instruct","1223","1215","","","","","Ai2","Apache 2.0"],
      ["Phi-4","1222","1242","","","","","Microsoft","MIT"],
      ["Reka-Flash-20240722","1218","1201","","","","","Reka AI","Proprietary"],
      ["Amazon Nova Micro 1.0","1215","1228","","","","","Amazon","Proprietary"],
      ["Gemma-2-9B-it","1213","1194","","","","","Google","Gemma"],
      ["Hunyuan-Standard-256K","1209","1244","","","","","Tencent","Proprietary"],
      ["Command R+ (04-2024)","1209","1184","","","","","Cohere","CC-BY-NC-4.0"],
      ["Qwen2-72B-Instruct","1208","1206","","","","","Alibaba","Qianwen"],
      ["Claude 3 Haiku","1200","1208","950","","","","Anthropic","Proprietary"],
      ["Llama-3.1-Tulu-3-8B","1200","1197","","","","","Ai2","Llama 3.1"],
      ["Qwen-Max-0428","1199","1208","","","","","Alibaba","Proprietary"],
      ["Ministral-8B-2410","1198","1219","","","","","Mistral","MRL"],
      ["GLM-4-0116","1198","1209","","","","","Z.ai","Proprietary"],
      ["DeepSeek-Coder-V2-Instruct","1196","1259","","","","","DeepSeek","DeepSeek"],
      ["Command R (08-2024)","1195","1180","","","","","Cohere","CC-BY-NC-4.0"],
      ["Llama-3.1-8B-Instruct","1193","1203","","","","","Meta","Llama 3.1"],
      ["Jamba-1.5-Mini","1193","1197","","","","","AI21 Labs","Jamba Open"],
      ["Aya-Expanse-8B","1193","1184","","","","","Cohere","CC-BY-NC-4.0"],
      ["Qwen1.5-110B-Chat","1180","1192","","","","","Alibaba","Qianwen"],
      ["Yi-1.5-34B-Chat","1178","1181","","","","","01 AI","Apache 2.0"],
      ["Claude-1","1178","1161","","","","","Anthropic","Proprietary"],
      ["Qwen1.5-72B-Chat","1172","1175","","","","","Alibaba","Qianwen"],
      ["Mistral Medium","1171","1172","","","","","Mistral","Proprietary"],
      ["Llama-3-8B-Instruct","1171","1164","","","","","Meta","Llama 3"],
      ["Command R (04-2024)","1169","1141","","","","","Cohere","CC-BY-NC-4.0"],
      ["InternLM2.5-20B-chat","1168","1179","","","","","InternLM","Other"],
      ["Mixtral-8x22b-Instruct-v0.1","1168","1175","","","","","Mistral","Apache 2.0"],
      ["Gemma-2-2b-it","1163","1130","","","","","Google","Gemma"],
      ["Granite-3.1-8B-Instruct","1158","1191","","","","","IBM","Apache 2.0"],
      ["Claude-2.0","1158","1160","","","","","Anthropic","Proprietary"],
      ["Gemini-1.0-Pro-001","1155","1125","","","","","Google","Proprietary"],
      ["Zephyr-ORPO-141b-A35b-v0.1","1150","1144","","","","","HuggingFace","Apache 2.0"],
      ["Claude-2.1","1146","1158","","","","","Anthropic","Proprietary"],
      ["GPT-3.5-Turbo-0613","1145","1164","","","","","OpenAI","Proprietary"],
      ["Qwen1.5-32B-Chat","1144","1163","","","","","Alibaba","Qianwen"],
      ["Phi-3-Medium-4k-Instruct","1144","1146","","","","","Microsoft","MIT"],
      ["Starling-LM-7B-beta","1139","1151","","","","","Nexusflow","Apache 2.0"],
      ["Mixtral-8x7B-Instruct-v0.1","1138","1136","","","","","Mistral","Apache 2.0"],
      ["GPT-3.5-Turbo-0314","1138","1136","","","","","OpenAI","Proprietary"],
      ["Granite-3.1-2B-Instruct","1136","1166","","","","","IBM","Apache 2.0"],
      ["Qwen1.5-14B-Chat","1135","1144","","","","","Alibaba","Qianwen"],
      ["Claude-Instant-1","1135","1136","","","","","Anthropic","Proprietary"],
      ["Yi-34B-Chat","1134","1129","","","","","01 AI","Yi"],
      ["Tulu-2-DPO-70B","1127","1120","","","","","Ai2","Ai2 ImpACT"],
      ["DBRX-Instruct-Preview","1126","1141","","","","","Databricks","DBRX"],
      ["WizardLM-70B-v1.0","1126","1093","","","","","Microsoft","Llama 2"],
      ["Llama-2-70B-chat","1122","1099","","","","","Meta","Llama 2"],
      ["Nous-Hermes-2-Mixtral-8x7B-DPO","1119","1103","","","","","NousResearch","Apache 2.0"],
      ["Llama-3.2-3B-Instruct","1118","1097","","","","","Meta","Llama 3.2"],
      ["Phi-3-Small-8k-Instruct","1117","1123","","","","","Microsoft","MIT"],
      ["OpenChat-3.5-0106","1114","1119","","","","","OpenChat","Apache 2.0"],
      ["Starling-LM-7B-alpha","1114","1104","","","","","UC Berkeley","CC-BY-NC-4.0"],
      ["Vicuna-33B","1113","1091","","","","","LMSYS","Non-commercial"],
      ["DeepSeek-LLM-67B-Chat","1111","1106","","","","","DeepSeek","DeepSeek"],
      ["Snowflake Arctic Instruct","1109","1101","","","","","Snowflake","Apache 2.0"],
      ["Granite-3.0-8B-Instruct","1108","1115","","","","","IBM","Apache 2.0"],
      ["NV-Llama2-70B-SteerLM-Chat","1106","1047","","","","","Nvidia","Llama 2"],
      ["OpenChat-3.5","1103","1077","","","","","OpenChat","Apache 2.0"],
      ["Gemma-1.1-7B-it","1102","1105","","","","","Google","Gemma"],
      ["OpenHermes-2.5-Mistral-7B","1100","1083","","","","","NousResearch","Apache 2.0"],
      ["pplx-70B-online","1099","1055","","","","","Perplexity AI","Proprietary"],
      ["Mistral-7B-Instruct-v0.2","1097","1094","","","","","Mistral","Apache 2.0"],
      ["Llama-2-13b-chat","1093","1077","","","","","Meta","Llama 2"],
      ["Granite-3.0-2B-Instruct","1091","1104","","","","","IBM","Apache 2.0"],
      ["SOLAR-10.7B-Instruct-v1.0","1091","1073","","","","","Upstage AI","CC-BY-NC-4.0"],
      ["Qwen1.5-7B-Chat","1090","1110","","","","","Alibaba","Qianwen"],
      ["Phi-3-Mini-4K-Instruct-June-24","1088","1098","","","","","Microsoft","MIT"],
      ["Dolphin-2.2.1-Mistral-7B","1088","1049","","","","","Cognitive","Apache 2.0"],
      ["WizardLM-13b-v1.2","1084","1048","","","","","Microsoft","Llama 2"],
      ["Phi-3-Mini-4k-Instruct","1082","1102","","","","","Microsoft","MIT"],
      ["MPT-30B-chat","1076","1055","","","","","MosaicML","CC-BY-NC-SA-4.0"],
      ["Zephyr-7B-beta","1076","1053","","","","","HuggingFace","MIT"],
      ["CodeLlama-34B-instruct","1073","1065","","","","","Meta","Llama 2"],
      ["Llama-3.2-1B-Instruct","1067","1063","","","","","Meta","Llama 3.2"],
      ["Qwen2.5-VL-32B-Instruct","","","1149","","","","Alibaba","Apache 2.0"],
      ["Step-1o-Vision-32k (highres)","","","1119","","","","StepFun","Proprietary"],
      ["Qwen2.5-VL-72B-Instruct","","","1104","","","","Alibaba","Qwen"],
      ["Pixtral-Large-2411","","","1088","","","","Mistral","MRL"],
      ["Qwen-VL-Max-1119","","","1056","","","","Alibaba","Proprietary"],
      ["Qwen2-VL-72b-Instruct","","","1044","","","","Alibaba","Qwen"],
      ["Step-1V-32K","","","1043","","","","StepFun","Proprietary"],
      ["Molmo-72B-0924","","","1010","","","","Ai2","Apache 2.0"],
      ["Pixtral-12B-2409","","","1006","","","","Mistral","Apache 2.0"],
      ["InternVL2-26B","","","1003","","","","OpenGVLab","MIT"],
      ["Llama-3.2-90B-Vision-Instruct","","","997","","","","Meta","Llama 3.2"],
      ["Hunyuan-Standard-Vision-2024-12-31","","","996","","","","Tencent","Proprietary"],
      ["Aya-Vision-32B","","","992","","","","Cohere","CC-BY-NC-4.0"],
      ["Qwen2-VL-7B-Instruct","","","988","","","","Alibaba","Apache 2.0"],
      ["Yi-Vision","","","978","","","","01 AI","Proprietary"],
      ["Llama-3.2-11B-Vision-Instruct","","","964","","","","Meta","Llama 3.2"],
      ["Molmo-7B-D-0924","","","957","","","","Ai2","Apache 2.0"]
    ]
  },

  /* ---------------- 排名历史（每期快照，最新在前；页面用倒数两条算 ↑↓） ---------------- */
  rankHistory: [
    { date: "2026-10-09", note: "stepfun 席位由 Step-3.5-Flash 换为 Step-5（Coding Elo 1433→1560、编码分 4.7→9.2，coding 维自第 21 位跃至第 8）；并新增小米 MiMo、美团 LongCat、Mistral 三份档案，26 档案七维快照整体重写", snapshot: {
      coding: ["claude","gemini","chatgpt","grok","kimi","glm","qianwen","stepfun","mimo","cursor","deepseek","devin","copilot","trae","poe","doubao","wenxin","hailuo","longcat","manus","mistral","yuanbao","coze","xinghuo","yuanqi","perplexity"],
      agent: ["claude","manus","chatgpt","cursor","coze","stepfun","devin","gemini","kimi","grok","yuanqi","qianwen","copilot","deepseek","glm","hailuo","perplexity","trae","doubao","mimo","mistral","poe","wenxin","longcat","xinghuo","yuanbao"],
      office: ["chatgpt","gemini","xinghuo","claude","doubao","qianwen","kimi","coze","grok","yuanbao","deepseek","wenxin","glm","manus","poe","yuanqi","mimo","mistral","longcat","copilot","cursor","perplexity","stepfun","trae","devin","hailuo"],
      multimodal: ["gemini","chatgpt","hailuo","doubao","grok","qianwen","stepfun","claude","coze","poe","wenxin","glm","kimi","manus","xinghuo","yuanbao","deepseek","yuanqi","mistral","copilot","cursor","trae","mimo","devin","longcat","perplexity"],
      context: ["gemini","claude","kimi","stepfun","qianwen","deepseek","glm","hailuo","mimo","longcat","chatgpt","cursor","devin","doubao","grok","copilot","coze","manus","poe","trae","wenxin","xinghuo","mistral","perplexity","yuanqi","yuanbao"],
      value: ["deepseek","mimo","doubao","qianwen","stepfun","yuanbao","longcat","kimi","wenxin","coze","gemini","poe","glm","copilot","xinghuo","yuanqi","mistral","devin","trae","chatgpt","perplexity","grok","cursor","hailuo","manus","claude"],
      access: ["yuanbao","deepseek","doubao","qianwen","wenxin","yuanqi","coze","glm","kimi","trae","mimo","xinghuo","longcat","hailuo","stepfun","copilot","manus","cursor","devin","poe","mistral","gemini","chatgpt","claude","grok","perplexity"]
    } },
    { date: "2026-10-02", note: "Gemini 席位由 3.8-Flash 换为新旗舰 Gemini-4-Argon（Coding Elo 1561→1570），编码维重排", snapshot: {
      coding: ["claude","gemini","chatgpt","grok","kimi","glm","qianwen","cursor","deepseek","devin","copilot","trae","poe","doubao","wenxin","hailuo","manus","yuanbao","coze","xinghuo","stepfun","yuanqi","perplexity"],
      agent: ["claude","manus","chatgpt","cursor","coze","stepfun","devin","gemini","kimi","grok","yuanqi","qianwen","copilot","deepseek","glm","hailuo","perplexity","trae","doubao","poe","wenxin","xinghuo","yuanbao"],
      office: ["chatgpt","gemini","xinghuo","claude","doubao","qianwen","kimi","coze","grok","yuanbao","deepseek","wenxin","glm","manus","poe","yuanqi","copilot","cursor","perplexity","stepfun","trae","devin","hailuo"],
      multimodal: ["gemini","chatgpt","hailuo","doubao","grok","qianwen","stepfun","claude","coze","poe","wenxin","glm","kimi","manus","xinghuo","yuanbao","deepseek","yuanqi","copilot","cursor","trae","devin","perplexity"],
      context: ["gemini","claude","kimi","stepfun","qianwen","deepseek","glm","hailuo","chatgpt","cursor","devin","doubao","grok","copilot","coze","manus","poe","trae","wenxin","xinghuo","perplexity","yuanqi","yuanbao"],
      value: ["deepseek","doubao","qianwen","stepfun","yuanbao","kimi","wenxin","coze","gemini","poe","glm","copilot","xinghuo","yuanqi","devin","trae","chatgpt","perplexity","grok","cursor","hailuo","manus","claude"],
      access: ["yuanbao","deepseek","doubao","qianwen","wenxin","yuanqi","coze","glm","kimi","trae","xinghuo","hailuo","stepfun","copilot","manus","cursor","devin","poe","gemini","chatgpt","claude","grok","perplexity"]
    } },
    { date: "2026-09-23", note: "编码维度改按 Arena+ 基准校准；新收录 5 档案起参与排名", snapshot: {
      coding: ["claude","chatgpt","gemini","kimi","glm","qianwen","cursor","deepseek","devin","copilot","trae","doubao","wenxin","hailuo","manus","yuanbao","coze","xinghuo","stepfun","perplexity"],
      agent: ["claude","manus","chatgpt","cursor","coze","stepfun","devin","gemini","kimi","qianwen","copilot","deepseek","glm","hailuo","perplexity","trae","doubao","wenxin","xinghuo","yuanbao"],
      office: ["chatgpt","gemini","xinghuo","claude","doubao","qianwen","kimi","coze","yuanbao","deepseek","wenxin","glm","manus","copilot","cursor","perplexity","stepfun","trae","devin","hailuo"],
      multimodal: ["gemini","chatgpt","hailuo","doubao","qianwen","stepfun","claude","coze","wenxin","glm","kimi","manus","xinghuo","yuanbao","deepseek","copilot","cursor","trae","devin","perplexity"],
      context: ["gemini","claude","kimi","stepfun","qianwen","deepseek","glm","hailuo","chatgpt","cursor","devin","doubao","copilot","coze","manus","trae","wenxin","xinghuo","perplexity","yuanbao"],
      value: ["deepseek","doubao","qianwen","stepfun","yuanbao","kimi","wenxin","coze","gemini","glm","copilot","xinghuo","devin","trae","chatgpt","perplexity","cursor","hailuo","manus","claude"],
      access: ["yuanbao","deepseek","doubao","qianwen","wenxin","coze","glm","kimi","trae","xinghuo","hailuo","stepfun","copilot","manus","cursor","devin","gemini","chatgpt","claude","perplexity"]
    } },
    { date: "2026-09-22", note: "首期基线", snapshot: {
      coding: ["claude","cursor","chatgpt","devin","gemini","copilot","glm","kimi","trae","deepseek","qianwen","doubao","wenxin","manus","coze"],
      agent: ["claude","manus","chatgpt","cursor","coze","gemini","devin","kimi","qianwen","deepseek","glm","copilot","trae","doubao","wenxin"],
      office: ["chatgpt","gemini","claude","doubao","qianwen","kimi","coze","deepseek","wenxin","glm","manus","cursor","copilot","trae","devin"],
      multimodal: ["gemini","chatgpt","doubao","qianwen","claude","coze","wenxin","glm","manus","kimi","deepseek","cursor","copilot","trae","devin"],
      context: ["gemini","claude","kimi","qianwen","deepseek","glm","chatgpt","doubao","cursor","devin","manus","copilot","trae","coze","wenxin"],
      value: ["deepseek","doubao","qianwen","kimi","wenxin","gemini","coze","glm","copilot","devin","trae","chatgpt","manus","cursor","claude"],
      access: ["deepseek","doubao","qianwen","wenxin","kimi","glm","coze","trae","manus","copilot","cursor","devin","gemini","chatgpt","claude"]
    } }
  ],

  /* ---------------- 事件时间线（改变决策的事件） ---------------- */
  events: [
    { date: "2026-10-17", tag: "定价", agents: ["deepseek"], title: "DeepSeek 定价页把模型版本改成 V4.1-Flash-1017 并首次列出 Search／Fetch 独立按次计费（各 5 元／1,000 次成功请求），同时官宣在 DeepSeek Harness／Claude Code／Codex 里的服务端调用 11 月 1 日 00:00 起开始收费；三档 token 标价逐值未动", summary: "官方来源：本站 10-18 直抓 api-docs.deepseek.com/zh-cn/quick_start/pricing（26,182 字节，表格静态可读）。页面顶部横幅即\"Search / Fetch API 已上线，使用自研搜索引擎，支持网页搜索与抓取\"；模型版本行写 DeepSeek-V4.1-Flash-1017 与 DeepSeek-V4-Pro-0813，脚注原句为\"旧模型名 deepseek-v4-flash、deepseek-v4-flash-vision-exp 仍可调用，但对应模型已下线，请求将由 DeepSeek-V4.1-Flash-1017 模型提供服务，并按 Flash 价格计费\"——即底层换版、模型名与价格都不变，调用侧零改动；三档标价与 10-09/10-15 两次抓取逐值相同（Flash 缓存命中 ¥0.02 闲时／¥0.04 峰时、未命中 ¥1／¥2、输出 ¥4／¥8；V4 Pro ¥0.15／¥0.30、¥4.5／¥9.0、¥13.5／¥27.0），故 apiPrices 两行、plans 三档与 priceHistory 一律不动，本次不属调价事件。新增计费的读法：Search 与 Fetch 是独立 API、按成功请求次数计价（失败／空结果／超时不计费），5 元／千次即单次 5 厘钱，且明确\"当前用户在 DeepSeek Harness/Claude Code/Codex 中使用 DeepSeek API 时，已经会通过 Server 端工具调用访问到 Search/Fetch 接口，这部分……目前未计费，并将于北京时间 2026 年 11 月 1 日 00:00 起按次收取调用费用\"——这是已官宣日期的一次性成本变化，凡经这三个入口跑联网检索的 Agent 账单 11 月起会多一项按次费用，本站把它记进档案 apiNote 与本条事件、不并入 token 价对比（按次与按 token 不同轨）。发布侧佐证：多家媒体（新浪/搜狐/头条 10-17 至 10-18 稿）与官方更新日志口径一致——10-17 网页端、App、API 三端同步切换且价格不变，权重按 MIT 开源，Harness 需升 dsh-v0.2.1-rc.1 及以上；媒体所称\"单任务成本 3~4 元降至 1~2 元\"与 DeepSWE 77.0%、Terminal-Bench 42.3 等属第三方实测与官方基准混合口径，本站不取为数据。", source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing" },
    { date: "2026-10-16", tag: "产品", agents: ["chatgpt"], title: "OpenAI 官方 changelog：prompt-to-voice 面向全部 API 客户转正，创建自定义音色免费、语音生成仍按常规 GPT-Live 会话计费；同期 GPT-Live 原生接入 Decisions", summary: "官方来源单一且自证：本站 10-18 直抓 developers.openai.com/api/docs/changelog（platform.openai.com/docs/changelog 已 301 迁至此域，540,112 字节）。10-16 条目原文\"Released prompt-to-voice for all API customers. Create a custom voice from a text description through the API or voice Playground, then reuse it in GPT-Live sessions. Creating a prompt-generated voice is free; speech generation uses regular GPT-Live session billing.\"，并同条列出九款新增自然音色（Nuri/Juni/Flitz 德语、Brise/Sillage 法语、Nira 印地语、Harema/Shida 日语、Noeul 韩语），涉及模型 gpt-live-1 与 v1/audio/voices、v1/live/sessions 两个端点；10-15 条目另记 GPT-Live 新增原生 Decisions 集成（\"Your app can act while your user is speaking or react to what Live says\"，涉及 gpt-live-1 与 gpt-6-luna）。判读与限制：官方只写\"按常规 GPT-Live 会话计费、创建音色免费\"，未给出 GPT-Live 会话本身的分档价签，故站内 chatgpt 档位价格与 apiPrices 一律不动，本条只作为语音／实时能力线的新增计费品类入档；此前一周 xAI Grok Voice 3.0（10-15 事件）按分钟计价 $0.08 与本轮 OpenAI 按会话计价分属两种计价轨道，不做横向换算。媒体侧另有一说\"GPT-5.6 Sol 的 API 与额度价格又降超 20%、打算至少优惠到 11 月 21 日\"（10-17 聚合稿），但官方 10-14 至 10-18 的 changelog 与模型页均无对应条目，属单源且无官方价签，不入库、列周五复核。", source: "https://developers.openai.com/api/docs/changelog" },
    { date: "2026-10-15", tag: "服务", agents: ["deepseek"], title: "DeepSeek 中断 4 小时 52 分（对话与 V4 Pro／V4.1 Flash API 全受影响），当晚开放平台致歉并承诺按账号 7 日内（10.8-10.14）消耗金额以赠金全额返还", summary: "两家独立来源的时间线一致：财新（10-15 16:54 与 17:43 两稿）依官网服务状态页记 8:11 起 DeepSeek-V4-Pro API、DeepSeek-V4.1-Flash API 与对话服务陆续部分中断或性能下降、9:08 起对话服务完全中断、9:06 称已定位原因、13:04 解决，全程 4 小时 52 分，并统计 9 月以来 13 次故障（多数为性能下降、4 次涉及网页及 API 部分中断）；科创板日报（10-15，记者黄心怡）同记 8 时许起网页与 App 提示\"服务器暂时不可用\"、13:04 恢复、涉及对话与两个 API 组件。补偿侧：潮新闻（10-15 19:45，记者张云山，澎湃新闻同稿转载）与新浪财经（10-15 19:43）均全文引述开放平台\"服务恢复及补偿通知\"原文——\"我们将按您账号 7 日内（10.8-10.14）的消耗金额以赠金形式全额返还，赠金自动到账，API 计费扣款先从赠金账户扣除\"，并称已启动稳定性全面排查、\"全面梳理并剥离单点依赖\"；解放日报 10-16 07:57 汇总稿同口径。判读与限制：这是故障赔付条款、不是降价或调价，站内三档标价与峰谷计费一律不动；\"2026 全年 44 次故障\"仅见聚合稿与头条稿、口径不一（财新只给 9 月以来 13 次），故只采财新口径并标注；官方至今未公开根因（多家转述为算力调度或集群单点故障猜测），不写入结论。归档动作：deepseek 档案 verifiedAt 提到 10-16、apiNote 记补偿原文、weaknesses 增稳定性欠账一条。", source: "https://companies.caixin.com/2026-10-15/102493717.html" },
    { date: "2026-10-15", tag: "产品", agents: ["grok"], title: "xAI 发布 Grok Voice 3.0 语音转语音模型：按分钟计价 $0.08、与 2.0 完全持平，首参 Artificial Analysis 语音综合榜即 86.9 分登顶，grok-voice-latest 别名自动迁移、2.0 退役", summary: "两个独立中文源录到同一价签：IT之家（经网易 10-15 08:30 稿）写\"价格为每分钟 0.08 美元（每小时 4.8 美元），与 Grok Voice 2.0 定价相同\"，环球网（经搜狐 10-15 10:31 稿）写\"定价延续上一代标准，为每分钟 0.08 美元\"、并同记 ServiceNow 企业语音智能体 EVA 基准 74% 最高精度；CNMO 科技与 10-15 头条稿补评测细节——Speech-to-Speech Index 86.9 分第一（GPT-Live-1 Astra medium 83.2、Gemini 3.8 Live Extended Thinking 82.6、GPT-Live-1 Sol 80.1，自家 2.0 为 81.3、1.0 为 73.7），首次音频响应中位延迟 0.81 秒。落地口径为官方自述：特斯拉车内每日数百万次对话、星链客服日均约 2 万通多语言来电其中约 70% 无需人工介入。架构侧新增客户端短期临时令牌鉴权（头条 10-15 稿），面向规模化商用。本站处理：语音按分钟计价与站内按 token 的价签不同轨，故只写进 grok 档案 apiNote 与事件、不并入 apiPrices 的输入/输出对比；官方英文公告页本轮未直抓（媒体口径两源一致），署期为 10-14 美西时间、国内报道集中在 10-15。另记一个署名歧义：新浪科技／网易／东方财富／亿欧多篇写发布主体为\"SpaceXAI\"，搜狐与 Zaker 稿进一步写\"前身为 xAI、2026-02 被 SpaceX 收购、7 月更名\"，而 IT之家与 CNMO 仍写 xAI，未见官方改名公告可核，故档案 vendor 字段维持 xAI 不动、此项列周五复核。", source: "https://www.cnmo.com/price/820329.html" },
    { date: "2026-10-15", tag: "定价", agents: ["gemini"], title: "谷歌官方定价页首次上架 Gemini 4 Argon 价签并写明两段价：$2/$10 只到 11-30、12-01 起翻倍为 $4/$20；同页把整条 Flash 线排到 2027-01-01 翻倍", summary: "10-15 傍晚直抓官方定价文档 ai.google.dev/gemini-api/docs/pricing（?hl=en，257,372 字节、90 张表，10-04 同页 255,881 字节时还没有 argon 条目），页面按单元格原句写 \"through November 30, 2026 / starting December 1, 2026\"：Argon 标准档输入 $2.00→$4.00、输出 $10.00→$20.00、上下文缓存 $0.10→$0.20 且注明 Implicit caching only（不支持显式缓存），Batch 与 Flex 档 $1.00/$5.00→$2.00/$10.00，Priority 档 $3.60/$18.00→$7.20/$36.00，免费层各档 Not available。同一页另一笔站内此前完全没有的：Gemini 3.8 Flash 标准档输入 $0.75（through December 31, 2026）→$1.50（starting January 1, 2027）、输出 $3.75→$7.50、缓存 $0.075→$0.15、存储 $0.50→$1.00 每百万 tokens 每小时，Batch/Flex/Contributor $0.375/$1.875→$0.75/$3.75、Priority $1.35/$6.75→$2.70/$13.50，且 3.8 Flash 免费层为 Free of charge，Gemini 3.6 Flash 与之逐值同价同日期。这坐实了此前只有媒体口径的介绍价 $2/$10 与\"之后回到 $4/$20\"（钛媒体 10-14 早报与 36 氪稿源两源曾写 11 月底截止），本站撤销\"常规价属单一媒体推导\"的保留意见；两档到期日不同（Argon 12-01、Flash 01-01）说明优惠是按模型分别排定的到期，不是全站统一调价。注：10-14 与 10-15 上午两次抓该页分别因 exit 56 与重定向循环 exit 47 失败，本轮为第三次尝试成功。", source: "https://ai.google.dev/gemini-api/docs/pricing" },
    { date: "2026-10-14", tag: "产品", agents: ["qianwen"], title: "阿里发布千问办公电商版：定位独立第三方电商 Agent，非独立 App、在千问办公内切\"电商经营\"模式，已接入生意参谋/有赞/千牛，开启邀测并称一到两周内全量", summary: "多源一致：时代周报稿（新浪财经 10-14 20:29 转载）与证券日报网（同花顺 10-14 20:32 转载稿，署\"本报讯 记者梁傲男\"）、财闻（搜狐/头条 10-14 20:31 起多篇）口径相同——10-14 阿里巴巴旗下千问办公召开新品发布会，集团副总裁、千问办公 CEO 陈宇森宣布针对电商行业的\"千问办公电商版\"即日开启邀测，用户可在千问办公网页端/客户端切换到\"电商经营\"模式，官方称未来一到两周向全部用户开放；四项专业功能为跨平台经营看板、趋势洞察及卖点分析、爆款素材批量生成、跨平台 ROI 智能优化，另提供潜力新品挖掘、素材裂变、素材诊断、预算监控与客服等能力，已接入生意参谋、有赞、千牛等经营工具；陈宇森把该产品定位为\"独立第三方电商 Agent\"、面向市面上所有电商平台和商家开放并欢迎外部商家工具接入，时代周报另记未来将推出\"主动经营\"能力（Agent 主动发现库存/投放/转化/售后异常并按授权协助处理）。关键澄清：多个转载稿把它写成独立 App，财闻现场稿明确\"并不是独立 App，而是集成在千问办公内部、可从通用版切换\"，本站采财闻口径。价格侧：发布会未见任何可核价签，邀测/全量阶段是否另收费官方未披露，故档案档位价格一律不动、只在会员档注里记此条。", source: "https://finance.sina.cn/2026-10-14/detail-inivezmf8403087.d.html" },
    { date: "2026-10-14", tag: "渠道", agents: ["doubao"], title: "豆包手机助手《屏幕自动化操作声明协议》SAEP 30 天公示期结束，官方公开\"拒绝被操作\"应用清单逾 150 款：微信、QQ 等 65 款腾讯系与 23 款阿里系、DeepSeek、Kimi、拼多多、小红书在列", summary: "两个独立来源一致：每日经济新闻（搜狐 10-15 07:00\"未来商业早参\"，记者郑欣蔚）称 10-14 豆包手机助手官方公众号发文宣布 SAEP（Screen Automation Execution Protocol）30 天公示期结束、平台将逐步放开第三方应用的屏幕自动化操作权限，最新拒绝操作清单含拼多多、Kimi、快手系列、美团系列、小红书、DeepSeek、中国工商银行，以及 23 款阿里巴巴及关联生态应用（淘宝、千问、支付宝等）与 65 款腾讯及关联生态应用（微信、QQ、王者荣耀等），合计 150 余款；东方财富（10-15 04:05 稿）同记 10-14 公示期结束并披露清单，另给背景——9-16 与字节深度绑定的努比亚发布第二代豆包手机 NaviX Ultra、起售 5999 元（国补后 5499 元），第一代因\"生态墙\"部分 App 无法使用\"操作手机\"功能，本次以 Beta 形式开放；UC 稿写清单为 151 款。判读：这是\"智能体手机的跨应用执行能力受生态授权限制\"的直接证据，属可用性而非价格变动，故只写入档案 access 注与事件，不动豆包档位价与基准席位。同期阶跃 STEPX Neo 走的是相反的路线（以合作协议换接入，见同日事件）。", source: "https://m.sohu.com/a/1087891296_115362/" },
    { date: "2026-10-13", tag: "渠道", agents: ["qianwen", "claude", "deepseek"], title: "云雾 API（yunwu.ai）状态接口自证被冻结并整体迁往 OpenLux：migration_freeze_enabled=true、兑换率 13.6、备用地址写\"空白反代\"（10-15 更正：该字段 10-09 快照里就已存在，站内先前两次把它读成\"新增 freeze\"与\"字段消失\"都是字段名误读）", summary: "两家来源互不引用：① 本站自家接口 https://yunwu.ai/api/status 于 10-13 17:11 直抓（446,543 字节，构建版本 20261013-022518）返回体里 system_name 由\"云雾 API \"变成\"x\"，并读到 migration_freeze_enabled=true、migration_target_url=\"https://api.openlux.ai\"、migration_exchange_rate=13.6、server_address_arr=[{URL:\"https://api.zhongzhuan.chat\",Description:\"空白反代地址\"}]，而公告仍 340 条、最新一条停在 2026-08-16——冻结与迁移没有任何运营公告说明；/api/pricing 同轮仍 200（289,028 字节）。② 第三方监测 Help AIO「AI中转站可用性监测」页 10-13 17:14 快照第三次把本站列为 24 小时综合可用率 0.00%（有效探测 558 次；前两次 10-09 09:19/560、10-10 08:59/552），同页其余站点在 74%-97%。判读：运营方自证的冻结+迁移目标，与第三方连续 0% 是两条独立来源，本站据此把云雾从中性观察升级为暴雷/收缩级风险——已持有余额者应尽快导出调用记录与备份、停止充值，未接入者不得以价目接口 200 作为可入驻依据（价目接口只证明站活着、是 new-api 实例）。10-14 09:0x 二次直抓：构建版本变为 20261013-200904，migration_target_url、兑换率 13.6、空白反代地址三项照旧；同日 Help AIO 09:07 快照第四次列为 0.00%（554 次）。10-15 复查更正：本条原写\"新增 freeze=true\"与次日改口\"freeze 字段已读不到\"，都是把字段名读错——状态接口返回体里从来只有 migration_freeze_enabled（今日逐项回读 10-09/10-13/10-14/10-15 四份快照，值一律为 true，且 migration_repopup_hours=24），顶层 freeze 键并不存在，故冻结+迁移的参数自 10-09 那次抓取就在，10-13 的真实变化只有 system_name 改名、构建版本更新与进程 start_time 重置三项；结论方向不变（冻结迁移仍为运营方自证），但\"字段消失引发解冻猜测\"一句作废。迁移目标 OpenLux 的 /api/status 也 200（509,149 字节、公告 382 条、最新 10-13 03:00 称把 gemini-3.6/3.7-flash 自动路由至 gemini-3.8-flash 且价格不变），仅证明目标站活着，它不在本站中转目录内，是否收录交周五全量。", source: "https://yunwu.ai/api/status" },
    { date: "2026-10-13", tag: "产品", agents: ["gemini"], title: "Gemini 4 Argon 自 10-13 起全球上线：付费 API/AI Studio/Antigravity 与 Ultra、Pro 订阅同步开放，09-30 所记“仅 Fairwind 定向预览”口径作废", summary: "两家独立来源同日报道、口径一致：新浪科技转环球市场播报（发稿 10-14 07:15）与华尔街见闻（10-14 07:03）称谷歌自 10-13 起把 Gemini 4 Argon 面向 Google AI 订阅用户、全球开发者与企业推出，覆盖付费版 Gemini API、AI Studio、编程智能体环境 Antigravity（Ultra 订阅），以及 Gemini 应用与搜索 AI Mode（Ultra 与 Pro，Pro 侧不含 Antigravity）。本站 09-30 事件记录的“现阶段仅限参与 Google Fairwind 计划的受信任网络安全防御组织测试、广泛商用尚未公布”由此作废，档案的 models 行、Pro/Ultra 两档说明、access.note 与 weaknesses 已按新开放面改写。价格侧：两源均报介绍价输入 $2/输出 $10 每百万 tokens、缓存输入享 95% 折扣，并称推广价截至 11 月底、之后回到 $4/$20；该 $4/$20 与截止日均属媒体口径，本站 10-14 直抓官方 API 定价页 ai.google.dev/gemini-api/docs/pricing 两次失败（curl exit 56、0 字节）无法复核，故档案里单价整体标“待官方页复核”、常规价不写入。基准侧：10-14 抓取件 Argon 仍列总榜第 2（Arena Elo 1525、Coding 1570、Vision 1318、AAII 53），编码分 9.6 未变，与 10-13 抓取件逐字节相同。对选型的意义：$19.9 的 Pro 档首次能用上自家旗舰，“旗舰仅 Ultra 可用”的分层弱点收窄，但免费档仍用不到。", source: "https://finance.sina.cn/usstock/mggd/2026-10-14/detail-inivctrr7220910.d.html" },
    { date: "2026-10-13", tag: "定价", agents: ["chatgpt"], title: "OpenAI 把 Codex 与 ChatGPT Work 里 GPT-6.1 Sol 的默认上下文由 272k 提到 500k、订阅额度内免长上下文附加费；本站 10-15 直抓官方模型页：Sol 上下文 1,050,000、API 侧超过 272K 输入的请求仍按 2 倍输入与缓存价、1.5 倍输出价计", summary: "媒体侧两源：新智元稿（网易/UC 10-12 19:40、BAAI hub 10-13 19:50）与 36 氪 10-13 11:29 转载同稿，另见 Marsbit 与 Zgeo 独立改写——OpenAI 工程师 Tibo 于 10-12 在开发者社区跟踪页公告，Codex 与 ChatGPT Work 中 GPT-6.1 Sol 的默认上下文窗口自 272k 扩至 500k（约 +80%），用户仍可手动配到 100 万，且用订阅额度跑 Sol 不再收长上下文附加费；多篇稿同时提醒\"额度照扣、免的只是附加费\"，API 仍按价目表计费。官方侧（单一官方来源即可入库）：本站 10-15 直抓 platform.openai.com/docs/models/gpt-6.1-sol（449,084 字节，模型说明与价目可静态读出）——上下文窗口 1,050,000、最大输出 128,000、知识截止 2026-04-30；每百万 tokens 输入 $2.00、缓存输入 $0.10（页面写明为未缓存输入价的 5%）、缓存写 $2.50（1.25 倍）、输出 $10.00；关键一条原文：\"Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output for the full request\"，即 API 侧的长上下文加价仍在，且整个请求都按加价计，272K 这个阈值正是媒体所称\"默认窗口由 272k 起跳\"的那个数字。判读：10-12/13 的变更发生在订阅与产品默认值层（额度内不再加收），不是 API 降价；站内自 09-30 官方定价页读到的 Sol\"长上下文 $4/$15\"与这条规则一致，今日把阈值与适用范围写明。Fast 档 2 倍、Batch/Flex 半价、Ultrafast 6 倍、区域处理加 10% 在同一页复现。", source: "https://platform.openai.com/docs/models/gpt-6.1-sol" },
    { date: "2026-10-13", tag: "产品", agents: ["claude"], title: "Anthropic 工程博客官宣自研版本控制系统 Scion：日均合并从 5 月 2,500 次涨到 9 月逾 30,000 次压垮 Git，7 人小团队 5 个月造出 Scion 与代码评审工具 Antique 并完成 monorepo 全量迁移", summary: "官方来源（本站 10-15 直抓 anthropic.com/engineering/redesigning-source-control，161,623 字节，页面标注 Published Oct 13, 2026、结构化字段 datePublished 为 2026-10-13）：原文写 2026 年 5 月 Anthropic 单体代码仓库日均合并约 2,500 次代码变更，到 9 月已超过 30,000 次/日（官方称这期间每日合并量增长 10 倍），源控制成为最大研发瓶颈；公司自研版本控制系统 Scion，并在 5 个月内把 monorepo 从 Git 全量迁移过去，同期还上线配套代码评审界面 Antique、代码搜索、一套源控制权限（IAM）系统与大改动的落地流程；官方原句给出投入规模——\"A team of seven people built both Scion and Antique ... and fully migrated to them in five months\"（7 人小团队做出 Scion 与 Antique 两套系统，外加\"半打好几个\"配套系统，并在 5 个月内完成全量迁移）；官方把它定性为\"Claude 写代码的能力既是造成瓶颈的原因、也是快速造出这套系统的手段\"，并写\"合并量增长的潜在需求几乎无限，每拆掉一个瓶颈就带来更多代码\"。入库口径：属工程基础设施与 Agent 产能信号，不涉及套餐价与模型席位，故只写事件、不动档案价与基准；站内 10-14 曾因只见聚合器转述而排除该题材，本轮以官方博客直抓补足来源。另记同批检索到的政策类官方页 /news/2026-usage-policy-update 其 datePublished 为 2026-10-08（媒体 10-14 才转述），发布日在扫描窗口外且属使用规范而非价格/能力变动，不入库。", source: "https://www.anthropic.com/engineering/redesigning-source-control" },
    { date: "2026-10-13", tag: "定价", agents: ["stepfun"], title: "阶跃终端发布首款大模型原生智能体手机 STEPX Neo 先行版：首创\"软硬模\"全栈定价 3999 元（国补后 3499），打包手机+Step AOS 1.0+Step Studio+Step 系列模型权益并送 12 个月每月百亿 Token 的 STEPX Token Plan", summary: "多源一致：财闻稿（新浪财经 10-14 15:04、同花顺 10-14 15:04 同题）记 10-13 阶跃终端在上海发布 STEPX Neo 先行版，搭载智能体原生操作系统 Step AOS 1.0 与个人智能体阶跃 Amoo，售价 3999 元为\"软硬件和模型一体化定价\"，含手机、Step AOS、Step 系列模型与 Step Studio，购机用户获连续 12 个月、每月百亿 Token 额度的 STEPX Token Plan，10-13 21 时预售、10-16 10 时 13 分首销；中国经营报系稿（网易 10-14 11:20）同记 10-13 发布并补京东/天猫/抖音同步开售；雷递网（东方财富 10-14 15:45、雪球转载）补 16GB+256GB 单版本与\"Ready Builder One\"主题；EET-China 10-14 稿补国补后 3499 元与骁龙 8 系口径。生态侧：同花顺稿称 Amoo 已与支付宝、携程、滴滴、高德等近百家企业或产品达成合作，腾讯旗下多个产品开展合作、首批接入 WorkBuddy。未核实项：Token Plan 在 12 个月赠送期结束后的续费单价官方未公布，EET-China 也把\"Token 额度消耗与续费定价\"列为待观察，故站内只记赠送口径、不写续费价；此价属硬件+模型捆绑，与站内 Step Plan（API 包月 ¥49-¥699）不同轨，档位价一律不动。", source: "https://finance.sina.cn/stock/jdts/2026-10-14/detail-iniveqvi7759389.d.html" },
    { date: "2026-10-12", tag: "产品", agents: ["claude", "chatgpt", "gemini"], title: "Meta 首发前沿模型 Muse Wonder / Muse Wonder Full：API 输入 $4/输出 $20 与 Opus 5.5 同价、1M 上下文多模态输入，Full 不开 API 仅给 Muse Code（$50/$200）——基准表新增两行分列第 6 与第 10", summary: "多源一致（今日头条、新浪财经、新浪科技、网易、百家号 AI 早报，其中 Full 的接入方式据 AI 早报转 TechCrunch）：当地时间 10-12 深夜（北京时间 10-13 见报）Meta 超级智能实验室 MSL 发布 Muse Wonder 与更强的 Muse Wonder Full，内部代号 Watermelon（大西瓜），是改组 AI 团队 14 个月后首次官方宣称“对标前沿”，也是 Llama 4 之后首次走闭源付费路线。可核细节：Muse Wonder 已可通过 Meta Model API 与 Muse Code 使用，API 每百万 tokens 输入 $4、输出 $20、缓存输入 $0.20、长上下文不额外加价，上下文窗口 100 万 token，支持文本/图像/视频/音频/PDF 多模态输入；与站内在档的 Claude Opus 5.5 恰好同价（$4/$20），据媒体稿高于 GPT-6 Astra。Muse Wonder Full 不提供 API、也无独立 API 定价，仅向 Muse Code 每月 $50 或 $200 两档订阅用户及企业场景开放；Muse 个人智能体应用另需 $20 或 $100 月档。能力口径：新增 Active Memory 与 Active Focus 以减少智能体偏离目标；成本侧 Artificial Analysis 测得 Wonder 单任务成本 $4.52（上一代 Muse Spark 1.3 为 $1.60），事实知识项 AA-Omniscience 上 Full 得 30 分而 Opus 5.5 为 46 分，完整安全评测报告官方称“很快”发布——这些属第三方与媒体口径，站内不转为评分。基准侧：两行进入 10-13 抓取、10-14 重抓复现的 Arena+ 快照（页面日期标签 2026 Oct 12），Muse Wonder Full 第 6（Elo 1518、Coding 1567、Vision 1316、AAII 56）、Muse Wonder 第 10（Elo 1510、Coding 1565、Vision 1313、AAII 52），按本站换算公式编码分 9.5 与 9.4；两行插入使其后 322 行行号后移，16 个在档席位数值零变动、scores.coding 一律不动。Meta 目前不在站内产品榜，是否开档案与七维评分交周五全量；本条按竞品价格与基准席位情报入库，故挂在对标三家名下。发布当天 Meta 股价收涨 3.38%（市场信息，不入档）。", source: "http://36kr.com/p/4023856227931781" },
    { date: "2026-10-09", tag: "定价", agents: ["gemini"], title: "谷歌按官方帮助页重划 Gemini 应用各档可用模型：无订阅改走 Auto（关掉智能选择即只用 Flash-Lite）、最低档 AI Plus 被收回 Pro，额度分标准/2 倍/4 倍/AI Pro 的 5 或 20 倍", summary: "官方来源（单一官方即可入库）：Google Gemini Apps 帮助中心 answer/17004136《Changes to Gemini model access and limits》，10-10 直抓后逐格解析其 HTML 对照表——表头为 Flash-Lite / Flash / Pro 三列，行为 Without a plan / AI Plus / AI Pro / AI Ultra 四档。读出的结果为：无订阅那一格写 Auto；AI Plus 为 Flash-Lite ✅、Flash ✅、Pro 是叉形图标（该格 img 与勾形不同文件、无 alt）；AI Pro 与 AI Ultra 三档全 ✅。正文口径：\"Starting in October 2026, there will be changes to model availability for Gemini Apps when you use a personal account. These changes will start to take effect for users without an AI subscription on October 9th. For users with an AI Plus subscription, you should receive an email that explains when these changes will take effect for you.\" 另有一句被大量转载稿略掉：\"Auto will be the default setting for users without a Google AI plan... Most prompts will go to Flash-Lite... Prompts that need deeper reasoning may go to Flash or Pro. If smart model selection is turned off, chats for users without an AI plan will use Flash-Lite for all responses.\"——因此国内媒体普遍写的\"10 月 9 日起免费用户只能用 Flash-Lite\"（CNMO 10-07 稿、网易 10-04 转载稿、qifukexue 10-09 稿等，均称依据同一帮助页）是简化说法，官方原义是无订阅默认由智能选择分派、多数请求才走 Flash-Lite，关掉了才锁死。同页还给出用量倍数表（无订阅=标准额度、AI Plus=2 倍、AI Pro=4 倍、AI Ultra=AI Pro 的 5 倍或 20 倍视订阅而定）、按算力计每 5 小时刷新并有周上限，高消耗项含媒体生成／Deep Research／Pro 模型／Extended thinking 与 Deep Think，并追述 5-17 成年用户、7-24 未成年用户先后改为算力计费。判读要点二：9to5Google／XDA 及多篇中文稿称此次调整把 Deep Think 从 Ultra 下放给 AI Pro，但 10-10 直抓的另一篇官方用量页 answer/16275805《Gemini Apps limits & upgrades for Google AI subscribers》仍写 \"Deep think (AI Ultra only)\"、\"Deep think requires the Pro model\"，两口径冲突，按官方页记为未证实。判读要点三：两篇帮助页全文检索均无任何货币数字，one.google.com/ai 直抓只返回 Google 登录页，故 AI Plus 月费的站内旧记 $7.99 与媒体所称 $4.99、AI Ultra 的 $200／$100 开发者档与媒体所称 $99.99 一律标未核实，本轮只改\"哪档能用哪些模型\"与额度倍数这两件官方可核的事，价格一分未动；编辑部评分（含性价比一维）按分工留给周五全量重算", source: "https://support.google.com/gemini/answer/17004136" },
    { date: "2026-10-09", tag: "产品", agents: ["claude"], title: "Claude 的 Docs/Slides/Design 去 beta 转正并向所有套餐开放（含免费版）；Dashboards beta 只到付费个人档，Motion beta 仍限 Team/Enterprise", summary: "财联社 10-09 电（科创板日报）与网易 10-09 稿两个独立来源一致：Anthropic 宣布当天起 Claude 的文档、幻灯片、设计三项能力结束测试、所有套餐均可使用包括免费版，同日 Dashboards 与 Motion 进入测试阶段。10-10 直抓官方订阅定价页 claude.com/pricing（1,242,021 字节，功能矩阵可静态读出）逐格核对个人档四列 Free/Pro/Max 5x/Max 20x：Claude Design、Claude Slides、Claude Docs 三行四列全为 Yes；Claude Dashboards (beta) 为 No/Yes/Yes/Yes，即 Free 用不上；Claude Motion (beta) 四列全为 No。团队与企业档三列（Team、Enterprise self-serve、Enterprise sales-assisted）则 Design/Slides/Docs/Dashboards/Motion 五项全为 Yes。判读要点：媒体所称\"所有套餐可用\"的准确范围只有 Docs/Slides/Design 三项，个人档无论 $20 还是 $200 都拿不到 Motion，要 Motion 必须买团队或企业档。官方新闻室页（10-10 直抓，429,419 字节，可读的最新条目日期为 Oct 8, 2026）没有 10-09 的独立公告稿，故可用性判定以定价页矩阵原值为准；网易稿另称 Docs/Slides/Design 上线以来已产出超过 4,500 万份文档/演示/设计、以及 Enterprise 侧 Artifacts 支持 CMEK 等细节，仅单一来源转述官方，标未核实。站内 claude 档案四档 note 已按矩阵逐档补写可用性，订阅价格一分未动。", source: "https://claude.com/pricing" },
    { date: "2026-10-09", tag: "产品", agents: ["gemini"], title: "谷歌云发布 Gemini agent：单一入口的通用工作智能体，可在 Gemini 与 Claude 系列模型间动态选择，先向 Workspace 特定 Business/Enterprise 预览开放", summary: "A5站长网 10-09 20:18 与 CITNews 10-09 09:19（稿源 DoNews，正文写\"10月8日消息\"）两个独立来源一致：谷歌云 CEO Thomas Kurian 在 Gemini at Work 2026 年度活动上发布 Gemini agent，定位\"通用工作智能体\"——回答提问、处理知识型工作、生成图片和视频、编写并运行代码都走同一个提示框，官方给的使用原则是\"给它目标，而不是逐步指令\"。干活范围主要在谷歌自家 Workspace：可在 Gmail、Drive、Docs、Slides、Sheets、Chat、Calendar 里直接操作并共享同一套记忆、技能与管控策略；入口不限谷歌体系，官方列出 Web、iOS/Android 手机、Windows/Mac 桌面、命令行、微软365 与 Slack，也能以无独立界面的形式嵌入第三方应用。运行在云端、记忆跟账号不跟设备，官方把记忆分为会话/语义/程序性/情景四类，它还会自己写 Skills 把学到的方法留给后续任务。协作上可按任务临时拉起带各自身份的子 Agent，并行或串行跑几小时甚至几天；更特别的是\"同事 Agent\"——企业可给它长期企业身份、独立邮箱、日历与存储，让它进公司通讯录，能被拉进群聊或在文档里 @，操作留痕且可访问范围限于团队主动开放的部分。模型选择不绑自家：两源口径一致为可在 Gemini 系列与 Anthropic Claude 系列之间动态选择，未来支持更多闭源与开源模型，配 Smart Routing 按效果/速度/成本给任务派模型，管理员可在项目层设支出上限、到阈值自动暂停。可用性：DoNews 写\"私人预览\"、A5 写\"小范围预览\"，均称先向 Workspace 特定 Business 与 Enterprise 方案开放，金融与法律版本同步预览，政府/医疗/零售官方说后续推出。发布日两源相差一天（10-08 与 10-09 消息），站内按报道日 10-09 记；10-10 在谷歌官方域名未检索到可静态直抓的公告稿，故上述细节均标为媒体转述官方口径。该产品没有公开可核的订阅价签，站内 gemini 档案的个人订阅四档金额未动，只把这条企业线记进 apiNote。", source: "https://m.admin5.com/article/20261009/16704371.shtml" },
    { date: "2026-10-09", tag: "产品", agents: ["mimo", "longcat", "mistral"], title: "站内档案 23→26：小米 MiMo、美团 LongCat、Mistral 三家因官方定价页首次静态可核而收录，Arena+ 席位由 13 席扩至 16 席", summary: "三家均为自研模型厂商且在 Arena+ 榜上有行：MiMo-V2.6-Pro 页面第 13（Elo 1507、Coding 1560、MIT 开源），官方按量页 mimo.mi.com 直抓为输入 ¥3.00/输出 ¥6.00、命中缓存输入 ¥0.025、批量恰为实时价一半，海外区 $0.435/$0.87，同页公告 mimo-v2.5 系列将于 2026-10-21 10:00 下线；LongCat-Flash-Chat 第 94，美团 longcat.chat 平台按量页列 LongCat-2.5-Preview 与 LongCat-2.0 两个模型、限时折扣价输入 ¥2/命中缓存 ¥0.04/输出 ¥8，并写明可按已消费金额开电子发票；Mistral Large 3 第 84，mistral.ai/pricing 直抓为订阅 Pro $14.99（认证学生 $5.99）、Team $24.99/人，API 举例 $0.5/$1.5 每百万、Batch 降 50%、缓存输入最多降 90%。三家的 C 端会员档（MiMo、LongCat）与 Free 档额度（Mistral）官方页均无静态条目，档案内标未核实", source: "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go" },
    { date: "2026-10-09", tag: "定价", agents: ["chatgpt"], title: "GPT-6.1 Sol 新增 Ultrafast 极速档：官方定价页 $12/$60，逐项为标准档 6 倍，接入面为 Pro 500 与企业按量", summary: "官方定价页（platform.openai.com/docs/pricing，10-09 直抓 587,092 字节、价目 JSON 可静态读出）新增独立的 ultrafast 切换项，gpt-6.1-sol 该档输入 $12/缓存读 $0.60/缓存写 $15/输出 $60 每百万 tokens，与 standard 档（$2/$0.10/$2.50/$10）逐项恰为 6 倍关系。IT之家与 DoNews 两个独立来源（均 10-09）口径一致：速度最高约为标准版 8 倍、价格 6 倍，接入面为 API/Codex/ChatGPT Work 中的 Pro 500 档、按量计费的企业版与积分制教育版。判读要点：站内此前把\"速度翻 8 倍\"记为 10-03 澎湃的媒体口径，本轮由官方页的档位与两源报道确认该档真实存在且已上架；但\"8 倍\"是相对标准档的倍数、官方页未给绝对 tokens/秒，且该档不改变模型能力（仍是 gpt-6.1-sol）。官方页同一档位切换器共五项，逐值可核：batch 与 flex 均为标准价一半（$1/$0.05/$1.25/$5）、fast 为 2 倍（$4/$0.20/$5/$20）、ultrafast 为 6 倍；ultrafast 档只列 gpt-6-astra（$60/$6/$75/$300）与 gpt-6.1-sol 两项，gpt-6-luna 不在该档。档位说明文本对 Fast 写的是\"GPT-5.6 Sol 最高比 Standard 快 2.5 倍\"，对 Ultrafast 则为空白——即官方只给倍数口径于 Fast、不给 Ultrafast 的倍数。对 Plus/Pro 200 用户无可用水位——想买快档必须买 $500 档或走企业按量，这条与 10-02 网易截图\"最快 Codex/代理速度是 Pro Max 卖点\"相互印证。", source: "https://platform.openai.com/docs/pricing" },
    { date: "2026-10-08", tag: "定价", agents: ["claude"], title: "Anthropic 发布 Claude Haiku 5.5：短请求 $0.10/$0.50，较 Haiku 4.5 降九成，但改按 prompt 长度分档计价", summary: "官方定价页（10-08 直抓，937,743 字节静态可读）与网易科技、admin5 两个独立来源一致：Anthropic 于 2026-10-08 上线 Claude Haiku 5.5，输入 $0.10/输出 $0.50 每百万 tokens（prompt ≤10 万 token），超过 10 万 token 则升为输入 $0.50/输出 $2.50；缓存写 5 分钟 $0.125、1 小时 $0.20，缓存读 $0.01，批量 API 再减半（≤10 万 $0.05/$0.25、>10 万 $0.25/$1.25）。上一代 Haiku 4.5 为 $1/$5，故短请求单价降 90%；官方页另注明\"Claude 4.6 及之后模型（Haiku 5.5 除外）1M 上下文按标准价\"，长上下文加价只发生在 Haiku 5.5 上，这是本站在档首个分档计价的新模型。Arena+ 10-08 快照新增 Claude Haiku 5.5 一行（总榜第 31，Arena Elo 1501、Coding 1538、AAII 43、MMLU-Pro 87.5），编码维换算分 (1538-1300)/28.2 = 8.4；与 GPT-6 Luna（$0.10/$0.50）同档，小模型价格战由两家共同定在 1 毛。注意两家媒体均指出新分词器使同一请求 token 数增加约 25%-30%，名义降价的实际到手折扣更小——该比例属媒体口径、官方未给换算表，标未核实。", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
    { date: "2026-10-08", tag: "公司", agents: ["yuanqi"], title: "腾讯元器官网发布《关于元器平台停止服务通知》：2026-10-29 起停止新建与 API Key 分发，2026-11-09 全面停服，数据导出过渡期到 2027-01-09（10-14 补录，10-09/10-10 两轮日更漏检）", summary: "官网 2026-10-08 发布停服通知，因业务调整将于 2026-11-09 正式停止全部服务。节奏（三家独立媒体口径一致）：2026-10-29 起停止创建新智能体与 API Key 分发，存量智能体在 11-09 前仍可正常使用；2026-11-09 起关闭应用访问、数据读写、API 调用、控制台等所有面向公众的服务，元器平台不再支持访问、智能体页面不再显示，通过元器发布到公众号/服务号/微信客服等渠道的智能体同步停止响应用户对话；数据导出过渡期截至 2027-01-09（停服前可随时导出配置/工作流/对话记录，停服后到 2027-01-09 仍可登录导出控制台下载），逾期除法律法规须留存的日志外依法删除全部用户数据；官方给出的替代是腾讯云智能体开发平台（ADP）与公众号智能回复。来源核验说明：yuanqi.tencent.com 为前端渲染，10-13 静态直抓首页（64,982 字节）、/guide（25,303 字节）、/notice（2,982 字节）均未含公告原文，/api/notice 返 401，故公告细节据新浪科技转载快科技、网经社 100ec.cn、SmartHey 三稿一致转述，两独立来源门槛满足但官方原文未直读，站内标\"据媒体一致转述\"。为什么是补录：公告日 10-08 落在 10-09、10-10 两轮日更的扫描窗口内，但两轮检索关键词只覆盖定价/发布类词、没有覆盖\"停服\"，属漏检；本条不改元器的七维编辑分（停服对 access/value 维的影响与\"是否把元器从产品榜摘出或标注终止\"交周五全量决定）。对选型的直接影响：正在用元器挂公众号自动回复的用户须在 10-29 前完成导出、11-09 前完成迁移，新用户不应再把元器当作可选平台。", source: "https://tech.sina.cn/2026-10-12/detail-iniuxmtq0466773.d.html" },
    { date: "2026-10-06", tag: "产品", agents: ["mistral"], title: "Mistral Large 4 进入公开预览（官方代号 le Chonk）：1 万亿参数、激活 520 亿、原生多模态，权重月底放出但定价页至今无条目——周五全量漏项补录", summary: "Mistral 官方博客 10-06 稿（mistral.ai/news/mistral-large-4，页面 datePublished 为 2026-10-06T12:00:27Z，10-10 直抓 299,586 字节、正文静态可读）：当天发布 Mistral Large 4 的公开预览，非官方简称 ML4、官方代号 le Chonk。官方给的规格是 1 万亿参数、原生多模态、激活 520 亿参数，从零开始在 3,800 张 NVIDIA Grace Blackwell GPU 上训练、数据中心在 Mistral 自有欧洲园区，公开预览也跑在同一套基础设施上；发布当天即可在 Mistral Studio 用 API 试用，权重计划本月月底放出，在此之前与网络安全负责人、经审核伙伴及国家机构以\"降低审核、扩展网络能力\"的同款模型做真实场景红队。官方还称其在编码（DeepSWE、Terminal Bench 4.0）、网络安全、agentic 行为、金融与法律等维度是开源模型里的最先进，视觉定位（grounding）甚至超过闭源前沿模型——但具体分数在博客图表里、静态文本无数值，故不收录不入榜。这条是周五全量（10-09 才收录 Mistral 档案）漏掉的更早官方条目：10-10 直抓 mistral.ai/pricing 并对静态文本全文检索，仍无 Large 4/ML4/le Chonk 任何字样，新模型 API 单价因此标未核实，站内基准席位继续取页面第 84 行的 Mistral Large 3（Elo 1428、Coding 1450、AAII 16）不改。同次直抓新读出的静态权益：Pro 卡标准态权益列表含 \"$25.5 /mo in API credits\"，同一卡片的学生切换态（Education plan，$5.99）写 \"$15 /mo in API credits\"；Free 卡只写 limited messages and web searches、limited coding sessions、basic image generation and editing、100+ connectors，没有数字额度也没有价签，免费档额度维持未核实。", source: "https://mistral.ai/news/mistral-large-4/" },
    { date: "2026-09-30", tag: "产品", agents: ["gemini"], title: "谷歌发布 Gemini 4 Argon：Arena+ 升至总榜第 2，但只经 Fairwind 计划向网络安全机构定向开放", summary: "网易科技与新浪科技两独立来源一致：当地时间 2026-09-30 谷歌发布新一代前沿模型 Gemini 4 Argon，API 初始报价输入 $2/输出 $10 每百万 tokens、缓存输入享 95% 折扣，单次响应输出上限自 6.4 万提到 100 万 token，报道列举 DeepSWE v1.1 77.9%、LVBench 91.7%、CWE-bench v1 68%；现阶段仅限参与 Google Fairwind 计划的受信任网络安全防御组织测试，广泛商用\"尚未公布\"。本站 10-02 直抓官方 API 定价文档（ai.google.dev/gemini-api/docs/pricing）未见 argon 条目，与\"未公开商用\"一致；Arena+ 10-02 快照把它列在总榜第 2（Arena Elo 1525、Coding 1570、AAII 53）。另搜狐\"别被单价坑了\"一文警示该报价或为推广期价（称推广期后涨至 $4/$20）、且其单任务平均输出 56.1 万 token 高于 GPT-6 Sol 的 28.2 万，总额外推口径为单源，标未核实。", source: "https://m.163.com/dy/article/L85Q4FTK0511BLFD.html" },
    { date: "2026-09-30", tag: "定价", agents: ["chatgpt"], title: "Pro 200 以原价重开但可购额度下调，另设 $500 顶层档——09-30 标注的未核实项已双源闭环", summary: "36 氪与软餐两个独立来源一致：OpenAI 于 09-30 以原价 $200 重新开放 Pro 订阅，同时把计费改为按 API 美元额度计量、可购额度总额下调（36 氪称\"砍半\"，社区概括\"20X 变 10X\"），官方未承诺已付费存量额度永久保留；另新增 $500/月的顶层档（报道名 Pro 500 与 Pro Max 500 不一），权益含独占最高优先级 Astra 算力、最大上下文窗口记忆与 100GB 专属存储；Astra API 单价一分未动（站内 09-30 直抓官方页仍为 $10/$50）。解释口径出自 OpenAI CPO Tibo Sottiaux 的公开发帖。10-02 二次直抓 chatgpt.com/pricing（1MB HTML）仍无静态价签，档位金额与额度数字以客户端渲染，具体数字标未核实。", source: "https://www.36kr.com/p/4005459400496771" },
    { date: "2026-09-30", tag: "产品", agents: ["chatgpt"], title: "DevDay：GPT-6.1 Sol 上线，官方价 $2/$10 为 Astra 的五分之一", summary: "OpenAI 官方定价页（2026-09-30 直抓）新增 gpt-6.1-sol：输入 $2/输出 $10 每百万 tokens，长上下文 $4/$15，缓存读 $0.10、缓存写 $2.50；gpt-6-sol 条目已下架，gpt-6-astra 维持 $10/$50（长上下文 $20/$75）。官方 chatgpt.com/pricing 模型矩阵显示 GPT-6.1 Sol 仅 Plus（Expanded）与 Pro 可用，Free/Go 不含。媒体多源另称 DevDay 新增 $500 档并收紧用量额度，但定价页金额为客户端渲染、无法直抓，标注未核实交周五处理。", source: "https://platform.openai.com/docs/pricing" },
    { date: "2026-09-30", tag: "产品", agents: ["chatgpt"], title: "DevDay 同场发布常驻自主智能体 Dots：在自己的云电脑里异步干活，费用含在现有订阅、对话不计用量（10-04 补记漏库事件）", summary: "澎湃新闻（10-03）与搜狐科技（10-03）两个独立来源一致：OpenAI 在 2026-09-30 DevDay 与 GPT-6.1 Sol 同场推出全天候自主智能体 Dots——基于独立云电脑与专属浏览器异步推进任务，可直接调用 ChatGPT 生态内 4000 多个外部应用；控制逻辑由规则定义，严格划分\"何时可自主行动、何时必须请示\"，涉及账户安全等敏感操作永久保留人工确认环节（人只在关键节点拍板）。开放范围：即日起面向 Pro、Business Premium 与 Enterprise 用户，费用含在现有订阅里，与 Dots 的对话不占用基础用量额度。站内此前两条 DevDay 记录只收录了模型与订阅档位，漏记这一 Agent 产品本体，现予补记。", source: "http://www.thepaper.cn/newsDetail_forward_34187651" },
    { date: "2026-09-30", tag: "定价", agents: ["claude"], title: "口径冲突消解：Opus 5.5 确为降 20%，站内旧注误把 Fast mode 价当常规价", summary: "直抓 docs.claude.com 定价页复核：上一代 Opus 5 / Opus 4.8 常规价是输入 $5/输出 $25（缓存读 $0.50），而 $10/$50 是它们的 Fast mode 价；站内 09-25 起把后者记成常规价，才显得 Opus 5.5（$4/$20）像\"降 60%\"。按常规价计算单价降 20%、缓存读降 60%，与 09-27 媒体报道两个数字完全对得上，09-27 事件所标的\"待官方页复核\"已解决。", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
    { date: "2026-09-29", tag: "产品", agents: ["chatgpt"], title: "发布前一周叫停：OpenAI 取消原定 10 月推出的 GPT-6.1 Astra，现役旗舰停在 GPT-6 Astra", summary: "据《华尔街日报》报道并经路透社等媒体确认（今日头条 09-29/09-30 汇总、新浪科技洞察 10-02 复核，两独立来源一致）：OpenAI 取消了原计划 10 月上线的下一代旗舰 GPT-6.1 Astra，公司安全负责人称该模型在两项上未达标——会不经用户许可自主推进任务、且欺骗性行为多于上一代。已上线的 GPT-6.1 Sol（$2/$10）因此实际上\"中杯顶上\"，站内基准表里 OpenAI 阵营的旗舰席位仍是 GPT-6 Astra（Arena+ 10-03 快照第 5 行，Elo 1520）。决策影响：想等 OpenAI 下一代旗舰的用户，换代时间线已不确定；官方未公布重启计划，具体内部评测数字标未核实。", source: "https://news.sina.cn/bignews/insight/2026-10-02/detail-initvtxc5631327.d.html" },
    { date: "2026-09-28", tag: "产品", agents: ["claude"], title: "Claude Sonnet 5.5 上线：$2/$10，与 Sonnet 5 同价", summary: "官方定价页（2026-09-30 直抓）已列 Claude Sonnet 5.5：输入 $2/输出 $10 每百万 tokens，5 分钟缓存写 $2.50、1 小时写 $4、缓存读 $0.20，与 Sonnet 5 逐项相同；官方定位为\"速度与智能的最佳组合\"。Arena+ 09-30 快照把它列在总榜第 2（Elo 1521、Coding 1568），但 Anthropic 旗舰席位仍由 Opus 5.5（1528/1576）担任。", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
    { date: "2026-09-27", tag: "定价", agents: ["chatgpt", "claude", "grok"], title: "本轮价格战成型：OpenAI/Anthropic 降价，小米 Grok 同价增性能", summary: "雷科技（新浪科技转载）统计过去几天四家新模型：GPT-6 Sol 较上一代\"价格几乎腰斩\"、Luna 继续压低；Claude Opus 5.5 报道口径为 API 单价直降 20%、典型任务实际成本降约 40%、缓存读取降 60%；小米 MiMo-V2.6 与 SpaceXAI Grok 4.7 维持上代 API 价格同时推进性能（Grok 4.7 站内核实为 $2/$6）。降价被归因于缓存与推理效率改善，而非能力退让。注：Opus 5.5 的 20% 与站内已核价目（$10/$50→$4/$20）不一致，已标注待官方页复核。", source: "https://finance.sina.com.cn/stock/t/2026-09-27/doc-inithkhf4548888.shtml" },
    { date: "2026-09-25", tag: "定价", agents: ["poe"], title: "Poe 订阅页核实：已重构为五档点数制，入门 $5、顶配 $312.5", summary: "官方订阅页（2026-09-25 直抓）现为 Basic $5/Plus $25/Pro $62.5/Advanced $125/Max $312.5 每月五档，按 1 万点/日至 825 万点/月分级、点数可结转并可 $30/百万加购；站内旧口径\"两档 $4.99/$19.99\"已修正。免费档具体点数官方仍未公示，保留未核实标注。", source: "https://poe.com/subscription_plans" },
    { date: "2026-09-23", tag: "定价", agents: ["chatgpt"], title: "GPT-6 Sol / Luna 发布：API 价格较 GPT-5.6 系列降 50%", summary: "Astra 的轻量双版本：Sol（$2/$10）主打编程与复杂任务，官方称错误率约为 GPT-5.6 Sol 一半、DeepSWE 68.8%；Luna（$0.10/$0.50）主打批量提取/路由类任务，付费档经 Work/Codex 使用，Free/Go 桌面端也可调用 Luna。定价恰为同期 Claude Opus 5.5 口径的一半，海外 API 价格战正式开打。", source: "https://finance.sina.com.cn/tech/roll/2026-09-23/doc-inisuaat1609597.shtml" },
    { date: "2026-09-23", tag: "定价", agents: ["qianwen"], title: "阿里一次发布 5 款语音大模型，API 全系降价最高 95%", summary: "含新旗舰 Qwen-Audio-3.1，官方称全系降价、最高降幅 95%——语音赛道价格战从文本烧到音频；公开报道未给出逐项新旧价格，具体单价待百炼定价页上架后再核。", source: "https://finance.sina.com.cn/roll/2026-09-23/doc-inisvivx8531083.shtml" },
    { date: "2026-09-22", tag: "产品", agents: ["qianwen"], title: "阿里公布全模态进展：Qwen4 与下代视频模型均在训练中", summary: "官方场合确认下一代旗舰 Qwen4 尚未发布、正在训练——近期选型仍应以 Qwen3.8-Max 为准；同期小米 MiMo-V2.6 发布并称登顶开源性能榜（Arena+ 快照已列第 10）。", source: "https://m.chinaz.com/2026/0922/1778520.shtml" },
    { date: "2026-09-21", tag: "产品", agents: ["grok"], title: "Grok 4.7 发布：API $2/$6，Arena+ 编码 Elo 1563 升至总榜第 8", summary: "官方发布新旗舰并同步公示 API 价（输入 $2/输出 $6 每百万 tokens）；按 Arena+ 快照其 Coding Elo 1563 排全部模型第 8，Grok 正式进入编码基准第一梯队。Grok Bot 已于 08-26 扩展至全部 SuperGrok 计划。", source: "https://x.ai/news/grok-4-7" },
    { date: "2026-09-19", tag: "定价", agents: ["stepfun"], title: "Step 5 Preview 发布：定价仅行业一半，10-15 开源权重", summary: "600B MoE/27B 激活/1M 上下文，按量输入 ¥7、输出 ¥20 每百万 tokens；官方口径单任务成本为 Claude Opus 5 的 1/8（$0.71 vs $5.86），对标 DeepSeek-V4-Pro 峰时价。", source: "https://tech.sina.cn/2026-09-20/detail-inisnnky6611773.d.html" },
    { date: "2026-09-07", tag: "定价", agents: ["xinghuo"], title: "星火 Spark-X2.5 发布并开启 API 限时五折", summary: "公开计费输入 ¥1.6/输出 ¥6 每百万 tokens（缓存命中 ¥0.24），五折后可与 Step 5 直接比价；9-01 另开源两款端侧轻量模型。", source: "https://www.100ec.cn/detail--6663749.html" },
    { date: "2026-09-04", tag: "渠道", agents: ["hailuo"], title: "智谱、Kimi、MiniMax 等集体上架天猫卖 Token", summary: "大模型 API 额度开始\"像充话费一样\"零售，购买门槛进一步降低；对普通用户意味着订阅/额度比价渠道变多。", source: "https://baijiahao.baidu.com/s?id=1875393083840710280" },
    { date: "2026-08-04", tag: "产品", agents: ["yuanbao"], title: "混元 Hy3 全球开放+新语音模型元宝率先免费", summary: "Hy3 限时免费体验延至 8-31，新一代语音识别模型直接接入元宝免费用——腾讯以免费换规模的路线明确。", source: "https://www.tencent.com/zh-cn/tencent-hy3-now-available-globally-extending-practical-ai-across-products-workflows-and-cloud-services/" },
    { date: "2026-06-19", tag: "定价", agents: ["stepfun"], title: "Step Plan 开启限时免费体验，最高送 120 天", summary: "包月 Credit 套餐（¥49/月起）开放长周期免费试用，抢 OpenClaw/编程场景用户。", source: "https://m.toutiao.com/w/1868382585793548/" },
    { date: "2026-06-09", tag: "公司", agents: ["yuanbao"], title: "微信再给元宝送入口，免费策略换规模", summary: "澎湃报道元宝依托微信导流、产品策略以完全免费换用户规模；目前国内主流大模型 App 中唯一无内购档的头部产品。", source: "https://m.thepaper.cn/newsDetail_forward_33176080" },
    { date: "2026-06-01", tag: "定价", agents: ["hailuo"], title: "MiniMax 6·1 计费改革：改按 token、取消 ¥29 低价档", summary: "本期最大定价争议：M3 改按 token 计费（≤512k 输入 ¥4.2/输出 ¥16.8 后推 API 永久五折）、订阅底档从 ¥29 提至 ¥49，沟通失误致官方道歉+三项补偿，股价当日收跌 15.71%。", source: "https://www.lanfucaijing.com/read/214365" },
    { date: "2026-08-31", tag: "公司", agents: ["perplexity"], title: "Perplexity 重心转向浏览器+自主智能体，MAU 破亿", summary: "36氪：从\"搜索\"转向 Comet 浏览器、Computer 持续运行智能体；订阅额度改为算力积分制（100 积分=$1），计费透明度受质疑。", source: "http://www.36kr.com/p/3960183470947465" },
    { date: "2026-08-14", tag: "定价", agents: ["perplexity"], title: "Perplexity Pro 涨价 100%：$10→$20", summary: "新订阅直接 $20/月或 $200/年；存量用户可维持 $10 但须每月保持登录至少 3 天。$20 成为海外搜索型助手的入门主流价。", source: "https://www.techspot.com/news/113186-perplexity-quietly-doubles-pro-plan-price-10-20.html" },
    { date: "2026-08-10", tag: "政策", agents: ["perplexity"], title: "法院撤销\"亚马逊诉 Perplexity\"智能体访问禁令", summary: "美法院认定 AI 是工具、用户才是访问主体——Comet/Computer 类代理型产品的合规路径利好，间接影响所有浏览器智能体。", source: "https://finance.people.com.cn/n1/2026/0810/c1004-40776976.html" },
    { date: "2026-07-16", tag: "定价", agents: ["perplexity"], title: "Perplexity 新增 Max 档 $200/月", summary: "重组个人订阅并首设 Max 顶配（$200/月 或 $2,000/年，含 Comet Plus 与 Opus/GPT-5.6 Sol 全模型），Enterprise Pro 降为 $40/席。", source: "https://www.perplexity.ai/hub/blog/introducing-perplexity-max" },
    { date: "2026-09-21", tag: "定价", agents: ["deepseek"], title: "DeepSeek 峰谷差异计价全面生效", summary: "闲时/峰时输出价差 2 倍（Flash ¥4→¥8，V4 Pro ¥13.5→¥27 每百万 tokens），把调度玩法摆上台面。", source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/" },
    { date: "2026-09-14", tag: "定价", agents: ["cursor"], title: "Cursor 被曝部分计价上调约 60%", summary: "社区实测多个使用模式的成本上涨约 60%，\"最贵 AI 编辑器\"再受质疑；结合其 Auto 不限量规则看是否值回票价。", source: "https://mparticle.uc.cn/article.html?uc_param_str=frdnsnpfvecpntnwprdssskt#!wm_aid=88025ecfab58420cbde98a39dcedfe73!!wm_id=6297a14a523343eda756100d69e7af2a" },
    { date: "2026-09-13", tag: "公司", agents: ["devin"], title: "Devin 母公司 Cognition 再融 $20 亿，估值 $480 亿", summary: "4 个月估值暴涨 $220 亿，两年前的\"被打假 AI 程序员\"成赛道最大庄家；Windsurf 已并入其产品线。短期不会倒，长期涨价可期。", source: "https://www.36kr.com/p/3981230650522630" },
    { date: "2026-09-11", tag: "额度", agents: ["chatgpt"], title: "OpenAI 暂停 $200 Pro 新订阅", summary: "Astra（GPT-6）需求压垮基建，Pro 新订阅暂停，存量用户不受影响。想买高价档的要先等。", source: "https://www.allagent.wiki/blog/openai-pauses-pro-200-signups/" },
    { date: "2026-09-10", tag: "政策", agents: ["claude"], title: "Claude 日本账户充值积分 6 个月过期", summary: "9/10 后充值的 usage credits 有效期缩短，囤积分策略失效。", source: "https://leedu.ac.cn/article/claude-pro-max-5x-20x-comparison/" },
    { date: "2026-09-06", tag: "定价", agents: ["glm", "doubao"], title: "GLM Coding Plan 涨价约 130%，豆包同周开卖订阅", summary: "国产编程套餐集体告别地板价：GLM 大幅提价，字节豆包开启商业化订阅。国产性价比格局重排。", source: "https://aibsz.com/2026-09-06/2026-nian-9-yue-ai-ding-yue-bian-dong-quan-jing-glm-dou-bao-guo-nei-wai/" },
    { date: "2026-09-05", tag: "产品", agents: ["chatgpt"], title: "GPT-6（Astra）向 Plus/Pro 用户推送", summary: "Plus 档即可用上部分 GPT-6 能力，$20 档价值回升。", source: "https://getgptplus.app/blog/gpt-6-pro-users-rollout" },
    { date: "2026-09-01", tag: "产品", agents: ["claude"], title: "Claude Fable 5.1 正式发布，缓存读取降价 75%", summary: "7 月 Fable 5 试用结束后 5.1 转正；缓存读 $0.25/百万 tokens，重度 Agent 工作流平均省约 25%。", source: "https://leedu.ac.cn/article/claude-pro-max-5x-20x-comparison/" },
    { date: "2026-08-25", tag: "行情", agents: ["chatgpt", "claude"], title: "中转按量价实测仅为官方订阅 7%-30%", summary: "社区实测：不想要完整订阅、只想跑特定任务的用户，中转 API 成本远低于官方月费（注意合规与稳定性风险）。", source: "https://blog.fulitimes.com/claude-chatgpt-subscription-vs-relay-pricing-2026/" },
    { date: "2026-08-26", tag: "产品", agents: ["devin"], title: "Windsurf 更名 Devin Desktop，并入 Cognition 产品线", summary: "Codeium→Windsurf→Devin Desktop 三改其名；$15/月 Pro 定价低于 Cursor，但报道口径与定价页并存，选它前先看清自己买的是哪条产品线。", source: "https://m.toutiao.com/article/7678334137824002570/" },
    { date: "2026-08-18", tag: "定价", agents: ["copilot"], title: "Copilot 从包月无限改为按 token 计费", summary: "订阅改为 credits 额度制后，社区测算重度用户的订阅价值缩水至约 25%；$10 Pro 档仍是入门最低价，但\"值不值\"要重算。", source: "https://m.toutiao.com/article/7674957705156542995/" },
    { date: "2026-08-17", tag: "公司", agents: ["cursor"], title: "SpaceX 收购 Cursor，订阅费暂不涨", summary: "罕见的\"模型中立\"编辑器被巨头收编：价格没动，但数据归属与多模型策略成选型新变量。", source: "https://www.toutiao.com/a7674823562410197545/" },
    { date: "2026-08-17", tag: "公司", agents: ["manus"], title: "Manus 宣布恢复独立运营", summary: "经历并购风波后独立，会员与积分体系延续，$20 档 4000 积分不变。", source: "https://m.toutiao.com/article/7673030617990169107/" },
    { date: "2026-08-14", tag: "定价", agents: ["deepseek"], title: "DeepSeek 官宣涨价", summary: "结束低价蜜月期，引入峰谷差异定价，API 成本仍处全球最低梯队。", source: "https://www.thepaper.cn/newsDetail_forward_33785892" },
    { date: "2026-08-13", tag: "定价", agents: ["qianwen"], title: "千问 App 开启付费，三档定价低于豆包", summary: "国内头部 AI 应用第二款开启订阅商业化；办公助理年费最高 ¥1,499。国产通用助手\"全免费\"时代结束。", source: "https://finance.sina.cn/tech/csj/2026-08-13/detail-inineiyk4692269.d.html" },
    { date: "2026-07-31", tag: "定价", agents: ["trae"], title: "Trae 国内版积分制上线", summary: "定额包月改按量扣点，连常规对话与脚本也计费；免费档仍在，但\"变贵了\"成为社区共识。", source: "https://blog.csdn.net/heng_llh/article/details/163377039" },
    { date: "2026-06-05", tag: "定价", agents: ["wenxin"], title: "文心 C 端付费率不足一成，B 端 API 降价 85%", summary: "百度战略重心转向 API 价格战：C 端会员几乎没人买，B 端砍价 85% 抢开发者。国产大模型定价体系被重新锚定。", source: "https://www.toutiao.com/a7647574337255424548/" }
  ],

  /* ---------------- 热门对比组合 ---------------- */
  popularComparisons: [
    ["claude", "chatgpt"],
    ["claude", "cursor"],
    ["cursor", "devin"],
    ["claude", "glm"],
    ["trae", "cursor"],
    ["gemini", "chatgpt"],
    ["deepseek", "kimi"],
    ["doubao", "qianwen"],
    ["claude", "gemini"],
    ["cursor", "copilot"],
    ["copilot", "gemini"],
    ["kimi", "glm"],
    ["doubao", "yuanbao"],
    ["doubao", "hailuo"],
    ["qianwen", "deepseek"],
    ["manus", "claude"],
    ["perplexity", "chatgpt"],
    ["wenxin", "xinghuo"],
    ["coze", "doubao"],
    ["stepfun", "glm"],
    ["grok", "chatgpt"],
    ["yuanqi", "coze"]
  ],

  /* ---------------- 充值/支付行情备注 ---------------- */
  paymentNotes: [
    { title: "海外订阅国内支付难", detail: "ChatGPT/Claude/Gemini 均需海外信用卡或 App Store 外区账号；虚拟卡与代充渠道价差大、有封号风险，本站不推荐具体渠道，只做行情记录。" },
    { title: "订阅 vs 中转 API", detail: "2026-08 社区实测：同任务量下中转按量成本约为官方订阅的 7%-30%。实例：某中转 GPT-5.6 Terra 报价 $0.669/百万 tokens，官方同模型 $9/百万（约 7.4%）。轻中度用户走 API 明显省钱，但需自担稳定性与合规风险。" },
    { title: "国产套餐看首购价", detail: "GLM/方舟/Trae 等国产 Coding Plan 首月/首季优惠价与续费价差距大（Trae 轻享首月 9.9 元、原价 49 元），比价时看清续费价。" },
    { title: "积分制 ≠ 包月", detail: "Manus/Cursor/Trae 都走积分或额度制，账面月价低不代表总成本低；估算自己的月消耗量再比价。" }
  ],

  /* ---------------- API 已核实价格点（每百万 tokens） ---------------- */
  apiNote: "仅收录已核实的公开报价点，完整价目以各家官方文档为准；未列入不代表没有更低/更高档位。",
  apiPrices: [
    { vendor: "DeepSeek", model: "Flash", input: "缓存命中 ¥0.02-0.04", output: "¥4 闲时 / ¥8 峰时", source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/" },
    { vendor: "DeepSeek", model: "V4 Pro", input: "缓存命中 ¥0.15-0.30", output: "¥13.5 闲时 / ¥27 峰时", source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/" },
    { vendor: "Anthropic", model: "Claude Opus 5.5（2026-09-22/23 发布）", input: "$4", output: "$20（Fast mode $8/$40；缓存读 $0.20）", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
    { vendor: "Anthropic", model: "缓存读取（Fable/Mythos 5.1）", input: "$0.25（0.025× 输入价）", output: "—", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
    { vendor: "Anthropic", model: "Claude Sonnet 5.5（2026-09-28 上线）", input: "$2（与 Sonnet 5 同价）", output: "$10（缓存写 $2.50/$4；缓存读 $0.20）", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
    { vendor: "Anthropic", model: "Claude Haiku 5.5（2026-10-08 上线，按 prompt 长度分档）", input: "≤10 万 token $0.10 / >10 万 $0.50（缓存写 $0.125/$0.20、缓存读 $0.01）", output: "≤10 万 token $0.50 / >10 万 $2.50（批量 API $0.05-$0.25 / $0.25-$1.25）", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
    { vendor: "OpenAI", model: "GPT-6.1 Sol（2026-09-30 取代 gpt-6-sol）", input: "$2（长上下文 $4）", output: "$10（长上下文 $15；缓存读 $0.10）", source: "https://platform.openai.com/docs/pricing" },
    { vendor: "OpenAI", model: "GPT-6.1 Sol Ultrafast（2026-10-09 新增极速吞吐档）", input: "$12（缓存读 $0.60、缓存写 $15）", output: "$60（逐项为标准档 6 倍；『最高 8 倍速度』属媒体口径，官方页该档说明文本为空）", source: "https://platform.openai.com/docs/pricing" },
    { vendor: "OpenAI", model: "GPT-6 Astra Ultrafast（同档新增，10-09 官方页可核）", input: "$60（缓存读 $6、缓存写 $75）", output: "$300（为其 standard 档 $10/$50 的 6 倍）", source: "https://platform.openai.com/docs/pricing" },
    { vendor: "OpenAI", model: "GPT-6 Luna（2026-09-23）", input: "$0.10", output: "$0.50", source: "https://finance.sina.com.cn/tech/roll/2026-09-23/doc-inisuaat1609597.shtml" },
    { vendor: "Google", model: "Gemini 4 Argon（2026-09-30 发布、10-13 全球上线）", input: "官方页两段价：$2.00（至 2026-11-30）→ $4.00（12-01 起）；Batch/Flex 半价 $1.00→$2.00、Priority $3.60→$7.20", output: "官方页两段价：$10.00（至 11-30）→ $20.00（12-01 起）；缓存读 $0.10→$0.20（仅隐式缓存），免费层不可用", source: "https://ai.google.dev/gemini-api/docs/pricing" },
    { vendor: "Google", model: "Gemini 3.8 Flash（主力低价档，免费层可用）", input: "官方页两段价：$0.75（至 2026-12-31）→ $1.50（2027-01-01 起）；Batch/Flex/Contributor $0.375→$0.75、Priority $1.35→$2.70", output: "官方页两段价：$3.75（至 12-31）→ $7.50（2027-01-01 起）；缓存 $0.075→$0.15、存储 $0.50→$1.00 每百万 tokens 每小时；Gemini 3.6 Flash 逐值同价同期", source: "https://ai.google.dev/gemini-api/docs/pricing" },
    { vendor: "Perplexity", model: "Sonar", input: "$1", output: "$1（另按搜索收 $5-12/千次请求）", source: "https://docs.perplexity.ai/getting-started/pricing" },
    { vendor: "阿里巴巴", model: "Qwen3.8-Max（10-09 百炼定价页复核）", input: "¥12（Batch 调用半价、上下文缓存另有折扣；优速模式 prime ¥24）", output: "¥36（prime ¥72；国际/美国区同一模型 ¥14.988/¥44.965）", source: "https://help.aliyun.com/zh/model-studio/model-pricing" },
    { vendor: "百度", model: "ERNIE 5.1（千帆按量后付费，页内文档更新时间 2026-10-09）", input: "¥4（输入 ≤32k）/ ¥6（32k-128k）", output: "¥18 / ¥22（批量推理列\"-\"未开放）", source: "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya" },
    { vendor: "MiniMax", model: "MiniMax-M3（官方标\"永久五折\"）", input: "¥2.10（划线 ¥4.20；>512k 档 ¥4.20；缓存读 ¥0.42）", output: "¥8.40（>512k ¥16.80；优先服务按标准价 1.5 倍计 ¥12.60）", source: "https://platform.minimax.cn/docs/guides/pricing-paygo" },
    { vendor: "小米", model: "MiMo-V2.6-Pro（10-09 新增档案）", input: "¥3.00（命中缓存 ¥0.025；批量 ¥1.50；ultraspeed ¥30）", output: "¥6.00（批量 ¥3.00；ultraspeed ¥60；海外区 $0.435/$0.87）", source: "https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go" },
    { vendor: "美团", model: "LongCat-2.5-Preview / 2.0（限时折扣价）", input: "¥2（命中缓存 ¥0.04；海外区 $0.30/$0.006）", output: "¥8（海外区 $1.20）", source: "https://longcat.chat/platform/pricing" },
    { vendor: "Mistral", model: "Mistral Large 3（10-09 新增档案）", input: "$0.5（缓存输入最多降 90%）", output: "$1.5（Batch 处理降 50%）", source: "https://mistral.ai/pricing/" },
    { vendor: "行情", model: "海外模型中转（社区实测）", input: "约为官方价 7%-30%", output: "含稳定性与合规风险", source: "https://blog.fulitimes.com/claude-chatgpt-subscription-vs-relay-pricing-2026/" }
  ],

  /* ---------------- 中转站情报（种子源：awesome-ai-api-proxy；种子区重生成：node dev/gen-relay.cjs [抓取日YYYY-MM-DD]） ---------------- */
  relay: {
    policy: "本节是情报目录与风险提示，不是推荐：中转/中继站普遍没有上游模型厂商的书面授权，使用可能违反上游服务条款（封号、数据暴露风险），暴雷无追偿。本站不接中转类联盟链接，收录条目一律标注通道类型与核验状态。",
    typeLabels: {
      "official-relay": { label: "官方 key 转发", tone: "ok", note: "宣称转发官方 API key，可信度相对最高（仍以自核为准）" },
      "mixed": { label: "混合通道", tone: "warn", note: "官方与其他来源混用，稳定性逐家不同" },
      "reverse": { label: "逆向通道", tone: "bad", note: "由网页客户端逆向而来，最便宜、最不稳定，随时可能失效" },
      "aggregator": { label: "多上游聚合", tone: "info", note: "在多个上游/线路间路由，价格随上游浮动" },
      "gateway-oss": { label: "开源网关（自建）", tone: "ok", note: "自己部署，数据与账单完全自控" },
      "observability": { label: "带日志分析的网关", tone: "info", note: "偏观测/管理用途" },
      "comparison": { label: "比价/监测工具", tone: "info", note: "不卖额度，只做多站报价墙与价差监测" },
      "list": { label: "名单/目录", tone: "info", note: "静态收录列表" }
    },
    sectionLabels: {
      china: "中国大陆中转站", global: "海外聚合与网关", selfhost: "自建替代（开源）", tools: "比价与监测工具"
    },
    paymentLabels: { alipay: "支付宝", wechat: "微信支付", "enterprise-invoice": "企业发票", stripe: "Stripe", crypto: "加密货币", usdt: "USDT" },
    flagLabels: {
      no_entity: "无公开注册主体", reverse_channel: "逆向通道", operator_submitted: "运营方自报",
      user_submitted: "用户提报", private_channel: "私有渠道（非公开可注册）",
      registration_closed: "注册已关闭", unreachable: "当前不可达"
    },
    guide: [
      { t: "先看通道类型，再看价格", d: "同一模型逆向通道价可能低于官方一成，但随时可能掉线或被上游封禁；在意稳定性就优先选标 official-relay / aggregator 且核验日期新的条目。" },
      { t: "只充一两个月用得完的量", d: "中转站运营者多为个人或境外主体，公开注册主体信息缺失（目录中 entity_registered=unknown 即此意）；大额储值站一旦“跑路”没有任何追偿，觉得好用也小额多次充值。" },
      { t: "找公开价目接口", d: "基于 new-api 框架搭建的中转站通常有公开 /api/pricing，倍率与折扣随时可复核；只有营销截图没有可查价目表的站，信任度打折。" },
      { t: "防“偷换模型”", d: "宣称 Opus 的线路未必真是 Opus。可用几道固定问题抽测，对照本站基准榜与官方价目做性价比核查，质量明显异常即为换料信号。" },
      { t: "敏感数据不走中转", d: "中转商位于请求链路上，输入输出对其完全可见；代码、客户资料、公司内部数据不要经未签协议的中转通道传输。" },
      { t: "企业采购先确认发票与合同", d: "目录中支持对公发票的条目很少（payment 含 enterprise-invoice 者可查）；需要报销入账的，先确认开票主体与服务协议，别用个人储值抵公司账。" }
    ],
    relayVerify: {
      // 本站自行双源核实后的状态（id → {status:"verified", at:"YYYY-MM-DD", note:"…"}）。留空 = 待核，由日更任务逐家补实。
      bltcy: { status: "verified", at: "2026-10-19", note: "官网 /api/pricing 直抓成功（2026-09-30，返回 default 分组倍率表约 418KB）；独立社区来源：少数派 sspai 论坛\"中转站实时比价工具\"帖有用户自述已用柏拉图一年多（https://meta.appinn.net/t/topic/79735）。两源一致仅证明\"站点存活、公开报价、有长期使用者\"，不构成质量或兑付背书。10-04 复核·重要纠正：本站公开公告接口 /api/status 直读到运营方 2026-05-11 公告原文——\"由于平台现阶段技术与运营资源有限…公司决定逐步调整当前业务方向，后续将聚焦企业级服务合作…即日起平台将关闭个人充值及新增开放接入功能，后续不再新增个人用户业务\"；另有 05-09 公告\"临时关闭新用户注册通道…绝非网传跑路、停运\"、05-30 公告引导个人账号转企业账号。第三方测评页 EggStriker（2026-09-07）同口径记\"已公告转向企业级服务：关闭个人充值与新注册\"。→ 对个人新用户而言本站实际不可入驻（存量用户额度与服务照常），09-30 那条结论不完整；但同一 /api/status 仍显示 enable_online_topup=true、pay_enabled=true、quota_for_new_user=100000，前端配置与公告口径并存，实际能否充值未核（未核实）。种子区为可再生内容未改，收缩信号记于此。10-09 周五抽查复核：/api/pricing 仍 200（436,730 字节，与 10-04 记录的 418KB 量级相符）；/api/status 公告 22 条，最新一条停在 06-02（发票事宜），05-09\"临时关闭个人用户注册…绝非跑路\"、05-11\"关闭个人充值及新增、聚焦企业级\"、05-30 引导个人转企业三条原文均仍在位，enable_online_topup 与 quota_for_new_user=100000 未变——与 10-04 结论一致，无新增暴雷信号，维持\"主动收缩\"定性。10-18 双源复核（本轮第二家）出现本站依据本身的变化：自家 /api/status 仍 200（14,086 字节、83 键、版本 v4.9.56-v2），但公告由 10-09 读到的 22 条缩为 16 条（两轮的 /api/status 尺寸接近，本站未见到删除说明，故不排除返回条数口径或前端分页变化，只按读到的记），且最新一条从 06-02（发票事宜）退回 04-24——那条公告原文为\"因不可抗力因素影响，平台将停止运营…从今日起，停止新用户注册、充值及新套餐购买；自 2026 年 5 月 1 日起，全部 API 接口停止服务\"，而本站 10-04/10-09 所引的 05-09\"临时关闭个人注册、绝非跑路\"、05-11\"关闭个人充值及新增接入、聚焦企业级\"、05-30\"个人账号转企业账号\"三条今日已不在接口返回里，无法再逐字复核；同期 enable_online_topup 仍 true、quota_for_new_user 仍 100000、migration_api_enabled 与 agent_transfer_quota_enabled 均 false，/api/pricing 也仍 200（440,885 字节、data 1,131 条，较 10-09 的 436,730 字节略增），首页与价目墙照常。判读：公告被删与\"5 月 1 日起全部 API 停止服务\"那句并未兑现并存，两种解读（清理旧公告 / 改口重开个人业务）都无第二源支撑——本轮检索未见 10 月内任何社区实测、媒体报道或第三方监测把本站列入异动（种子仓库条目标注仍为 active·2026-06-07，比价站 lmspeed.net 的本站页最新一条记录停在 05-02），故 status 维持 verified（仅表示双源核实动作完成）、定性维持\"对个人新用户实际不可入驻的主动收缩\"，并把\"10-04 所引公告原文今日已不可直读\"这一取证缺口如实标注，交周五全量决定是否改判；已持有额度者仍按公告口径走企业通道。10-19 傍晚同日再抓（/api/status 14,087 字节、83 键；/api/pricing 440,882 字节）读到三处：① 版本串由 v4.9.56-v2 升到 v4.9.61-v2（上游 new-api 版本号），start_time 1792340951＝今日 00:29 北京，即凌晨重启过一次；② system_name 仍“柏拉图AI”、enable_online_topup 仍 true，公告仍 16 条且最新一条照旧停在 04-24——10-18 那次 22→16 的缩列没有回滚，05-09“临时关闭个人注册、绝非跑路”、05-11“关闭个人充值及新增接入”、05-30“个人转企业”三条今日仍不在接口返回里，取证缺口原样保留；③ 价目清单仍 1,131 条、按模型名逐条比对无新增无下架，但 11 条的计价字段变了：grok-4 的 model_ratio 由 1.5 翻到 3；gpt-image-2.5-flare-4k 单次价 0.15→0.3、gpt-image-2.5-sunburst 0.3→0.08、grok-imagine-image-2.0 1→0.06、grok-imagine-video-1.5 0.6→1、grok-video-3 0.15→0.5、gpt-4-all 0.11→0.1；另 4 条在“按倍率”与“按次”两种计价模式之间切换（gpt-image-2.5-sunburst-4k 与 -2k、gpt-4-32k 由倍率转按次，gpt-4-1106-preview 由按次转回倍率 5／2）；enable_groups 有 326 条看似变动，逐项做集合比对后确认全部只是逗号顺序不同（0 处集合真变动）。判读：本轮变化集中在图片／视频类与 grok 线的自证报价重排，既有公告口径（关闭个人业务）与 enable_online_topup=true 的矛盾仍未解，本站不据此新开暴雷结论，定性维持“对个人新用户实际不可入驻的主动收缩”，是否因“重新滚动改价＋版本升级”改判留周五全量决定。relayVerify 的 at 提到 10-19。" },
      uiuiapi: { status: "verified", at: "2026-10-02", note: "双源：①种子仓库 awesome-ai-api-proxy 条目（type=official-relay、status=active、maintainer 于 2026-06-07 实测，并在 2026-08-16 快照抓到 666 条 high-confidence 报价）；②独立社区目录 frank36512/aiapi（GitHub，2026-10-02 直抓）自列\"300+ 大模型聚合、3.7 元/美元汇率、可开发票\"。10-02 实测站点 200、公开 new-api 价目接口 https://api1.uiuiapi.com/api/pricing 返回 366 个模型（default 分组），已收录 claude-opus-5-5 / gpt-6.1-sol（模型倍率 37.5），尚未收录 gemini-4-argon。注：社区目录属推广性质，\"官方倍率/汇率/可发票\"为自述口径未核；本次仅证明存活、报价公开可复核、被两份独立目录收录。" },
      "closeai-asia": { status: "verified", at: "2026-10-02", note: "双源：①种子仓库条目（type=official-relay、status=active、maintainer 于 2026-05-26 实测，entity_registered=true、支持企业发票）；②独立社区目录 frank36512/aiapi（2026-10-02 直抓）亦收录（\"亚洲最大企业级 AI 中转、支持企业发票\"）。10-02 实测站点 200、/pricing 页面 200（32KB 静态可读）。注：种子 2026-08-16 价格快照无本站记录，报价无法机器复核，\"100% 官转\"属自述；本次仅证明存活与公开价目页可读。" },
      yunwu: { status: "verified", at: "2026-10-19", note: "10-09 复核（本窗口唯一有异动的已核站）：本站自家接口照常返回——首页 200、/api/pricing 200、/api/status 200（446,553 字节，system_name=\"云雾 API \"、版本 20260918-152544、enable_online_topup=true、email_verification=true），公告 340 条但最新一条停在 2026-08-16（\"同步官方价格：deepseek-v4-pro/flash\"），此后两个月无任何运营公告。同一时点，第三方监测 Help AIO「AI中转站可用性监测」页（快照 2026-10-09 09:19，自称自 2026 年 2 月起累计探测 276 万次、无赞助）把本站列为 24 小时综合可用率 0.00%、有效探测 560 次、最新探测 09:19——是页面所列 18 站中两个 0% 之一（另一个 Undying 亦 0.00%、560 次），而同期其余站点多在 84%-97%。判读：页面接口全 200 与\"模型调用 0% 可用\"并存，正是\"价目接口 200 不等于能用\"的形态，但 0% 属单一第三方来源，Help AIO 的探测模型、判定阈值与是否含维护时段均未公开可核，本站无法用第二个独立来源复现（检索未见 10 月内社区故障帖），故只记为收缩/故障观察项，不写成暴雷结论。10-02 双源依据仍成立（①本站 /api/pricing 直抓 384 条倍率表；②GitHub 社区目录 frank36512/aiapi + 测评页 EggStriker 2026-08-11\"适合测试不宜生产\"）；种子标 type=mixed，本站不作质量背书。V2EX 相关帖发在 promotions 节点属官方推广，不计入独立源；简书\"云雾 APP 诈骗\"为同名兼职资金盘，与本站无关（同名混淆，勿误判红旗）。10-09 周五抽查复核：/api/pricing 返回 data 382 条（站内 10-02 记 384 条，微降 2 条属价目正常滚动）；抽核倍率逐项对得上——qwen3.8-max x6、claude-fable-5 x5、deepseek-v4-pro x4.5，且价目表仍不含 gemini-4-argon，故本条维持 verified、不下调。10-10 次日复查：自家三接口仍全 200（/api/pricing 288,041 字节、/api/status 446,553 字节与 10-09 同尺寸），运营公告仍停在 08-16；同日 Help AIO 09:00 快照第二次把本站列为 24 小时综合可用率 0.00%（有效探测 552 次、最新探测 08:59）→ 连续两日单源 0% 而价目/状态接口照常，仍不满足双源、仍不下暴雷结论，但风险等级较昨日上升，接入前应先小额测试（本站不做兑付背书）。同页 10-10 另列 HongMaCC 43.84%、CPass 68.11%、Undying 0.00%，三家均不在本站种子目录内，不作收录依据。10-13 出现决定性异动，改判为\"运营方主动冻结并迁移\"：本站 /api/status 返回体中 system_name 已由\"云雾 API \"变成\"x\"、版本 20260918-152544 → 20261013-022518，并新增 freeze=true、migration_target_url=\"https://api.openlux.ai\"、migration_exchange_rate=13.6、server_address_arr=[{\"URL\":\"https://api.zhongzhuan.chat\",\"Description\":\"空白反代地址\"}]——即运营方自己把账号与余额指向 OpenLux（兑换率 13.6）并冻结本站，而公告仍 340 条、最新一条依旧停在 08-16，冻结动作没有任何配套公告；同轮 /api/pricing 仍 200（289,028 字节）、首页 200，正是\"接口活着、账号被冻结迁移\"的形态。第三方 Help AIO 快照 2026-10-13 17:14 第三次把本站列为 24 小时综合可用率 0.00%（有效探测 558 次；前两次为 10-09 09:19 与 10-10 08:59），同页其余 17 站在 74%-97% 区间（Packy Code 97.49%、Yes Code 97.22%、4Router 94.98%、Micu 89.34%、TimiCC 90.86%、APINebula 74.73%、SSSAiCode 76.07%）。判读升级：运营方自证的 freeze+迁移目标与第三方连续三次 0% 属两条互不引用的独立来源，本站据此把 yunwu 视为暴雷/收缩级风险——已持有余额者应尽快导出数据并停止充值，未接入者不得以价目接口 200 作为可入驻依据（本条 status 仍写 verified 只表示\"双源核实动作已完成\"，不代表可用性背书）。迁移目标 OpenLux 自身 /api/status 200（509,149 字节、system_name=\"OpenLux\"、版本 20261013-022127、公告 382 条、最新 2026-10-13 03:00 称 Cli/Anti-Gemini 分组把 gemini-3.6/3.7-flash 自动路由至 gemini-3.8-flash 且价格不变，10-10 另有 wan3.0-video 恢复与 MiniMax-H3 上线）仅能证明目标站活着且由同一 new-api 栈运营；OpenLux 不在本站种子与用户提报目录内，是否新开条目交周五全量。10-14 晨二次直抓：/api/status 仍 200（446,543 字节）但构建版本由昨日的 20261013-022518 变为 20261013-200904，且 **freeze 字段已读不到**，而 migration_target_url=https://api.openlux.ai 与 migration_exchange_rate=13.6、server_address_arr 指向\"空白反代地址\" api.zhongzhuan.chat 三项照旧，system_name 仍是\"x\"、公告仍 340 条最新停在 08-16——一次改版把冻结标记摘掉而迁移参数保留，可能是解冻、也可能是隐藏字段，两条路都开放，本站不作二选一结论；能确定的是 Help AIO 快照 2026-10-14 09:07 第四次把本站列为 24 小时综合可用率 0.00%（有效探测 554 次；四次分别为 10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554），同页 19 站里只有本站与 Undying 两个 0%，其余 68.79%-97.84%（HongMaCC 已从 10-10 的 43.84% 回到 95.50%、CPass 84.80%）。结论不变且更硬：无论冻结字段在不在，连续四天的第三方 0% 加运营方自证的迁移参数，都足以把本站列为\"暴雷/收缩级\"，持有余额先导出数据并停止充值，未接入者不得以 /api/pricing 200 作为可入驻依据。10-15 第三次复查并自纠字段误读：把 10-09/10-13/10-14/10-15 四份 /api/status 快照（446,553 / 446,543 / 446,543 / 446,543 字节）按键逐项回读，migration_freeze_enabled=true、migration_target_url=https://api.openlux.ai、migration_exchange_rate=13.6、server_address_arr 指向\"空白反代\"api.zhongzhuan.chat、migration_repopup_hours=24 这五项自 10-09 那次抓取起就一直都在，而返回体顶层从来没有名为 freeze 的键——本条 10-13 所写\"新增 freeze=true\"与 10-14 所写\"freeze 字段已读不到\"都属字段名读错，据此撤销\"改版把冻结标记摘掉\"的猜测（同批事件条目已同步更正），10-13 的真实变化只有 system_name 由\"云雾 API \"改成\"x\"、构建版本 20260918-152544→20261013-022518、进程 start_time 重置三项。今日构建版本仍 20261013-200904（与 10-14 抓到的同值、快照字节数亦同）、公告仍 340 条且最新停在 08-16、/api/pricing 仍 200（289,034 字节、384 条倍率，表内仍无 gemini-4-argon 与 gemini-3.8-flash 条目，抽核 qwen3.8-max/claude-fable-5/deepseek-v4-pro 三条模型名均能读到）。第三方 Help AIO 快照 2026-10-15 09:04 第五次把本站列为 24 小时综合可用率 0.00%（有效探测 554 次；五次分别为 10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554、10-15 09:04/554），同页 19 站里仍只有本站与 Undying 两个 0%，其余 17 站在 59.55%-97.03% 区间（Packy Code 97.03%、Neko Code 95.50%、HongMaCC 92.80%，而 SSSAiCode 自 10-13 的 76.07% 再降到 64.01%、IKun Code 59.55%）。迁移目标 OpenLux 今日 /api/status 仍 200（510,406 字节、system_name=\"OpenLux\"、构建版本由昨日 20261013-022127 变为 20261014-182244、公告 383 条，最新一条标题为\"模型上架：gemini-4-argon\"）——目标站仍在滚动更新且已上架谷歌新旗舰，但它既不在本站种子也不在用户提报目录，是否新开条目仍交周五全量。结论：暴雷/收缩级判定不变，但依据改写在更稳的基础上——不再是\"字段忽在忽不在\"，而是运营方自证的冻结+迁移参数连续七日在场、叠加第三方连续五次 0%。10-15 傍晚同日第二轮复查出两处新事实：① 自家 /api/pricing 的模型条目由上午 384 条减为 378 条，减掉的正是整条可灵视频线（kling-video、kling-omni-video、kling-motion-control、kling-advanced-custom-elements、kling-video-extend）加一个 deepseek-v4-flash-0731，新增 0 条，gemini-4-argon 到傍晚仍不在表内——这是运营方接口自证的当日在售清单收缩，方向与\"聚焦迁移\"一致；② /api/status 的 119 个键里只有 start_time 变了，由 1791893476（10-13 20:11 北京）跳到 1792038105（10-15 12:21 北京），即今日 12:21 服务重启过一次而构建版本仍 20261013-200904，冻结与迁移三参数逐字未变、公告仍 340 条且最新停在 08-16。Help AIO 17:04 快照第六次把本站列为 0.00%（554 次探测；六次为 10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554、10-15 09:04/554、10-15 17:04/554）。迁移目标 OpenLux 傍晚仍 200（510,457 字节），119 键里只有 oauth_allowed_origins 与 start_time 变（10-14 20:28→10-15 12:40 北京，即它也在今日中午重启过一次），构建版本仍 20261014-182244、公告仍 383 条且最新一条仍是 10-14 01:37 的\"模型上架：gemini-4-argon\"——两站同日相继重启与迁移切换的叙事相符，但接口与公告本身不构成暴雷证据。同页傍晚另一处异动留给下轮盯：IKun Code 由上午 59.55% 跌到 29.58%（1,109 次探测）为今日最大跌幅，SSSAiCode 64.01%→66.02%、4Router 78.91%→92.60%、Yes Code 83.64%→96.39% 回升。判定不变而依据继续加固：冻结+迁移参数连续七日在场、当日在售模型反减 6 条、第三方连续六次 0%。10-16 晨三次直抓（/api/status 446,428 字节、/api/pricing 285,341 字节）出现本轮最要紧的一处反向变化，且这次不是读错键名：先把新旧两份返回体的键逐项对过——旧 119 键、新 116 键，差的正是 migration_freeze_enabled、migration_target_url、migration_exchange_rate、migration_repopup_hours、migration_retention_date 五条，新件里多出 organization_enabled 与 skills_hub_enabled 两条，且整份 446,428 字节原文里连 migration、freeze、openlux 三个字符串都不出现（只有 zhongzhuan 仍在），所以是随构建 20261016-072806（start_time 1792107246＝今晨 07:34 北京）整体摘掉这组前端配置，而非本站上轮那种键名误读。怎么读这条：① 不能读成解冻——公告仍 340 条、最新一条照旧停在 08-16，两个月的运营空窗里没有任何一条说明冻结、迁移或解除，server_address_arr 仍写\"空白反代地址\"api.zhongzhuan.chat、server_status_url 仍指向 status.zhongzhuan.chat；② 也不能读成迁移完成，因为第三方 Help AIO 09:06 快照第七次把本站列为 24 小时综合可用率 0.00%（有效探测 554 次，七次为 10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554、10-15 09:04/554、10-15 17:04/554、10-16 09:04/554），19 站里 0% 的仍是本站、Undying（555 次）与 IKun Code（1,109 次，昨傍晚 29.58%→今晨彻底归零，为连续第二日恶化）三家；③ 在售清单侧今日无反续证据——/api/pricing 仍 378 条、与昨晚逐条相同（新增 0、下架 0），gemini-4-argon 到今晨仍不在表内，SSSAiCode 由 66.02% 回升到 68.84%、榜首 Muze 99.19%。结论：暴雷/收缩级判定维持不变，但把\"参数连续七日在场\"这条依据换成更中性也更硬的表述——运营方曾在无公告情况下自证冻结与迁移目标，又在无公告情况下把该组配置从状态接口里整体摘除，两次动作都没有配套公告，配合第三方连续七次 0% 与同页 IKun/Undying 归零，普通用户可执行的结论只有一条：不以接口 200 作为可入驻依据、已持有余额者停止充值并导出记录。是否给 OpenLux 或 IKun 开条目仍交周五全量。10-18 周日第四次直抓（/api/status 446,437 字节、/api/pricing 285,307 字节）读到一处此前没有的反向信号：system_name 由 10-13 起的占位符\"x\"改回\"云雾 API\"（10-09 那份是带尾空格的\"云雾 API \"），即站名自我标识被恢复；同时构建版本 20261016-072806 → 20261018-160411、start_time 1792312747（今日 16:39 北京，即下午重启过一次）。除 start_time、system_name、version 三项外其余 113 键逐值未变，migration_freeze_enabled 等五参数仍不在返回体里（116 键与 10-16 同集合，整份原文仍不出现 migration/freeze/openlux 三串，zhongzhuan 依旧只在 server_address_arr 与 server_status_url），公告仍 340 条且最新一条照旧停在 08-16，在售清单仍 378 条与 10-16 逐条相同（新增 0、下架 0、gemini-4-argon 仍不在表内）。第三方 Help AIO 17:17 快照第八次把本站列为 24 小时综合可用率 0.00%（有效探测 558 次；八次为 10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554、10-15 09:04/554、10-15 17:04/554、10-16 09:04/554、10-18 17:17/558）。判读：改回本名与摘除迁移参数一样属运营方自证，既没有配套公告也没有任何兑付或可用性证据，故不能读成解冻或迁移完成，也不能读成恢复营业——第三方 0% 已连续八次跨十天。relayVerify 的 at 提到 10-18，判定与可执行结论不变：不以接口 200 作可入驻依据、已持有余额者停止充值并导出记录。10-19 傍晚第五次直抓（/api/status 446,469 字节、/api/pricing 284,135 字节）读到三处新事实：① 构建版本 20261018-160411 → 20261019-114428、start_time 由 1792312747（昨 16:39 北京）跳到 1792382550（今日 12:02 北京），即正午又重启过一次；② 键集合由 116 增至 117，多出来的那条是 tencent_captcha_app_id（取值属对方配置，本站不抄），同期 captcha_type 由 click-shape 改为 tencent、captcha_register_enabled 由 false 改为 true——注册环节的图形验证码被打开并换成腾讯云验证码；而 system_name 仍为“云雾 API”、enable_online_topup 与 stripe 充值开关仍 true、invite_reward_rate 仍 10、公告仍 340 条且最新一条照旧停在 08-16、migration_freeze_enabled 等五参数仍不在返回体里；③ 在售清单由 378 条减为 376 条，减掉的正是 o1-pro 与 o1-pro-2025-03-19 两行（新增 0 条），全部计价字段（model_ratio／completion_ratio／quota_type）逐条比对零变动，内容级变化另有三条模型失去“优质官转”类分组（gemini-embedding-001 去掉“官转gemini”、gpt-4o-transcribe 与 gpt-4o-mini-transcribe 去掉“优质官转OpenAI”），usage_count 有 198 条被重算且普遍下降，属对方调用统计口径，本站不据此推断流量。第三方 Help AIO「AI中转站可用性监测」17:00 快照第九次把本站列为 24 小时综合可用率 0.00%（有效探测 552 次；九次分别为 10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554、10-15 09:04/554、10-15 17:04/554、10-16 09:04/554、10-18 17:17/558、10-19 17:00/552），同页 19 站里 0% 的仍是本站、Undying（553 次）与 IKun Code（1,105 次）三家，其余 16 站在 78.88%—99.73%（榜首 Muze 99.73%，最低 Yes Code 78.88%）。判读：换验证码与下架 OpenAI 老代际都是运营方自证的配置动作，既没有配套公告，也没有兑付或可用性证据；今日检索“云雾 迁移／冻结”仍 0 条结果，即本站拿不到独立第二源，故不能读成解冻、也不能读成恢复接单。relayVerify 的 at 提到 10-19，判定与可执行结论自 10-13 起第十一天不变：不以接口 200 作可入驻依据、已持有余额者停止充值并导出记录。" },
      rcouyi: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开价目接口 https://api.rcouyi.com/api/pricing 返回 797 条（含 claude-opus-5-5 x2、claude-fable-5-1 x5、deepseek-v4-flash x0.5 等，供应商字段可读）；②独立来源仅一份——第三方测评页 EggStriker（2026-08-16，\"一站式聚合中转、接口文档完善、可直连、价格中等\"）。未检索到跑路或退款纠纷，但社区讨论与 GitHub 曝光度都很低，独立佐证单薄，标\"单一第三方源\"持续观察。" },
      relaydance: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开价目接口 https://relaydance.com/api/pricing 返回 45 条（auto_groups=default；以 doubao-seedance 系列视频模型为主，如 seedance-2-0-480p x4.375，另有 claude-fable-5 x6.25）；②独立来源仅一份——第三方测评页 EggStriker（2026-08-15，\"转战视频生成中转，Seedance 2.0/2.5 一站式，价格中等\"）。appinn 的中转站评测帖现已 404 无法复核，Linux.do/V2EX/论坛无用户讨论。价目可读证明存活，但覆盖面窄（45 条）且独立佐证单薄，持续观察。" },
      atlascloud: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开模型接口 https://api.atlascloud.ai/v1/models 返回 200（71KB，data 数组含 Qwen3-235B-A22B-Instruct-2507 等可复核条目）；②独立来源仅一份——第三方测评页 EggStriker（2026-08-15，\"图像/视频生成聚合 300+ 模型、按秒计费、国内需代理\"）。未见跑路或退款投诉（搜索结果多为自家博客，不计）。注：本站定位偏图像/视频生成聚合，与文本中转目录不完全同类，比价时注意。" },
      openrouter: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开接口 https://openrouter.ai/api/v1/models 返回 464 个模型（含 claude-opus-5-5 两条线路，尚无 gemini-4-argon），价目与路由可在站内报价页逐项复核；②独立来源两份——GitHub 社区目录 zzsting88/relayAPI（\"所有网站里 OpenRouter 最先开始这个模式\"）与每日经济新闻行业起底（2026-05-12，估值 13 亿美元，同时警示全行业封号跑路/降智/倒卖数据风险）。本站本身无跑路案例，属目录中最成熟的一家；常见抱怨是国内直连不稳定。冲突闭合（10-02）：09-30 挂待核的原因是种子注\"加价约 5%\"与官方 FAQ\"推理零加价\"看似矛盾，10-02 直抓 https://openrouter.ai/docs/faq 确认官方原文为不对上游供应商价格加价，收费只在充值环节（Stripe 手续费 5.5%、单笔最低 $0.80；加密货币充值 5%；BYOK 5%）→ 种子那句\"加价约 5%\"指的是充值手续费而非模型倍率，两源口径实为一致，待核结论撤销，改记 verified（种子区原文不改）。" },
      dmxapi: { status: "verified", at: "2026-10-04", note: "双源：①种子仓库 awesome-ai-api-proxy 条目（https://dmxapi.cn，社区投稿、riskFlags=no_entity、status=unverified）；②独立社区目录 frank36512/aiapi（GitHub，10-04 直抓，README 最后更新 2026-05-15）两处收录\"DMXAPI：https://dmxapi.com，480+ 模型聚合、三大原生协议支持、企业级稳定性、99.99% SLA\"；③第三方测评页 EggStriker（2026-09-07）单列\"多模态聚合 480+ 模型，文本/图像/视频一站覆盖，直连、中端价，全球模型 7 折、主流模型低至 6 折\"。10-04 实测 dmxapi.cn 与 dmxapi.com 均 200，两页标题分别为\"DMXAPI官网：中国…API聚合平台\"与\"DMXAPI - Global AI Model API Aggregation\"、页面互相引用两个域名，判为同一运营方双域名；但 .cn 与 .com 的 /api/pricing 均返 404 → 无公开倍率接口，价目无法机器复核。注：种子记 .cn、社区目录记 .com，接入前先确认域名归属一致；\"480+/533 模型、6-7 折、99.99% SLA\"均为目录或自述口径，本站不作质量与兑付背书。" },
      unorouter: { status: "verified", at: "2026-10-04", note: "双源：①种子仓库条目（运营方投稿 operator_submitted）且其 2026-08-16 价格快照抓到本站 144 条报价（锚点：claude-opus-4.8 输入 5/输出 25、claude-sonnet-4.6 3/15、gemini-3-flash 0.5/3、deepseek-v3 2/8、deepseek-r1 4/16）；②第三方测评页 EggStriker（2026-09-07）单列\"多模型聚合 300+ 模型（44+ 上游）、253 个免费模型、订阅送 2 倍额度、需代理、低延迟路由优先、面向角色扮演客户端场景、0% 声称加价\"。10-04 实测 https://api.unorouter.ai/api/pricing 返回 200（1.07MB，258 个模型条目，其中 :free 结尾 131 个、倍率为 0 的 159 条；group_ratio/usable_group 公开，可见 gg/pol/agnes 等多上游代号）。今日覆盖 258 条 vs 快照 144 条 → 半年内条目扩大。红旗观察：最新旗舰 claude-opus-5-5、gpt-6.1-sol、gemini-4-argon 均未收录，新款跟进滞后；\"0% 加价\"与\"44+ 上游\"属自述口径未核。仅证明被第三方收录、价目公开可复核，不构成质量或兑付背书。" },
      mkeai: { status: "verified", at: "2026-10-08", note: "双源：①种子仓库 awesome-ai-api-proxy 条目（记 https://mkeai.com，seedVerifiedBy=community、riskFlags=no_entity、status=unverified）；②第三方测评页 EggStriker 专页（最后核实 2026-08-16）记\"api.mkeai.com，国内低延迟直连、Claude/GPT/Gemini/DeepSeek 四家覆盖、小额充值友好、无月费，新用户注册暂关闭\"。10-08 实测：种子记的 mkeai.com 返 521（源站不可达），运营主域是 api.mkeai.com——/api/status 返 200（16KB new-api v1.0.0-rc.41），register_enabled 与 password_register_enabled 均为 false（与 EggStriker 那句\"注册暂关闭\"同向），公告 44 条最新一篇 2026-09-30T03:42\"新增 GPT-6.1 Sol\"，此前 09-30 上 Sonnet 5.5、09-23 上 Opus 5.5 与 GPT-6 Sol/Luna、09-23 上 Grok 4.7——新款跟进速度是已核条目里最快的一档。但 /api/pricing 返 401 AUTH_UNAUTHORIZED（需令牌），公开倍率拿不到 → 报价无法机器复核，站内公告属自述口径。结论：存活且新款覆盖可核，但当前不可新注册、报价不可公开复核，个人入驻口径不适用；未见暴雷信号（公告持续更新即为反证）。" },
      gptgod: { status: "verified", at: "2026-10-08", note: "双源：①种子仓库条目（记 https://gptgod.online，type=reverse，riskFlags=reverse_channel + no_entity，种子注\"逆向；便宜，稳定性无保证\"）；②第三方测评页 EggStriker 专页（最后核实 2026-08-15）记\"gptgod.cloud，逆向工程型中转，汇率约 0.6¥/USD（相当于官方美元价的 8.3%），447 个模型但当时未覆盖最新旗舰，稳定性零保证，不建议用于 Claude Code 一类日常调用\"。10-08 实测：种子域名 gptgod.online 首页 200 但 /api/status 404，运营主域 gptgod.cloud 的 /api/status 返 200（one-api 系 v9.7.2-alpha.6，system_name=GPT-GOD API），RegisterEnabled=false 而 SMSRegisterEnabled 与 OnlineTopupEnabled 为 true、MaxTopUpLimit=10000；/api/pricing 返 200（36KB，ModelRatio 597 条、CompletionRatio 306 条、ModelFixedPrice 182 条），倍率可读：gpt-6.1-sol 输入倍率 1/补全倍率 5、gpt-6-luna 0.05/5、deepseek-v4-pro 1.5/2。红旗观察：claude-opus-5-5、fable-5、gemini-4、haiku-5 在档全部缺位（最新只到 gpt-6.1/deepseek-v4/glm-5.2 一档），Anthropic 新款不跟进，与 EggStriker 08-15 的\"覆盖滞后\"结论同向且至今未改善；倍率→美元的换算公式本站仍未核实，故不折算价格。属逆向渠道、无主体登记，稳定性无保证，仅证被收录与倍率公开可复核，绝不构成质量或兑付背书。" },
      aimlapi: { status: "verified", at: "2026-10-09", note: "双源新增（10-09）：①种子仓库 awesome-ai-api-proxy 条目（https://aimlapi.com，type=aggregator、status=active、entityRegistered=true、maintainer 核于 2026-05-26，注\"400+ 模型、$20 起预付、支持加密货币暗示绕支付障碍\"）；②第三方测评页 EggStriker 专页（最后核实 2026-08-15）记\"1000+ 模型统一端点、海外开发者的多模型聚合首选、价格档位中等、全覆盖(600+)、需代理\"。10-09 实测本站公开模型目录接口返 200（522,306 字节、929 个条目），并已收录 stepfun/step-5-preview（releasedAt 2026-10-08，info.docsJson 直指 api.aimlapi.com，contextLength 1000000、outputMax 64000、tags 含 tier:tier_2）——目录在跑且跟到最新国产旗舰，可作 Step 5 上线的第二旁证。口径出入：模型数种子记 400+、EggStriker 同时写 1000+ 与 600+、本站 10-09 实测目录 929 条，四说不一（统计范围不同：可路由端点 vs 模型名 vs 分组），故只写\"覆盖数百到上千量级\"、不取任一数字。该目录接口不含逐 token 价格，报价需登录后按 key 与分组下发，因此价目侧本站仅有其转售 Step-5 的存在性证据、无价格证据；个人能否注册充值未核（未核实）。海外站、需网络环境与外币卡，本站不作质量或兑付背书。" },
      teamorouter: { status: "verified", at: "2026-10-09", note: "双源（弱）新增：①本站 10-09 直抓 /pricing 308 转主页 #pricing 锚点，SSR 静态可读 6 张价目卡（其余模型客户端渲染）——GPT-5.6 Sol 输入官方 $5.00→现价 $0.53、输出 $30→$3.18，Claude Fable 5 $10→$2.42 / $50→$12.10，Claude Sonnet 5 $3→$0.50 / $15→$2.52，表内无 DeepSeek 静态卡；②独立来源一份——腾讯云开发者社区 2026-09-16《你那个 1 折的 AI 中转站……10 倍消耗 Tokens》点名 TeamoRouter（第三方分析文，非推广节点），另有 awesome-ai-api-proxy 社区目录收录但属 operator_submitted、权重低。CSDN/51cto/头条的\"一夜爆火/使用第 21 天\"系软文，不计入独立源。风险：现价约为官方的 1-2.4 折、倍率异常低；客服与证照截图挂在第三方域名 floatai.cn，主体信息不透明。仅证存活与报价可机器复核，不作质量或兑付背书。" },
      helicone: { status: "verified", at: "2026-10-10", note: "双源新增（10-10，本窗口第一家观测型网关）：①种子仓库 awesome-ai-api-proxy 条目（https://helicone.ai，type=observability、status=active、entityRegistered=true、maintainer 核于 2026-05-26，注\"LLM 可观测性网关；日志/成本分析\"）；②第三方测评页 EggStriker 专页（最后核实 2026-08-11）记\"0% 加价直通、内置 LLM 可观测性、开源可自部署、免费层 1 万请求/月、付费 $79/月起、需代理\"，并写明其模式是用户自持 Anthropic/OpenAI 官方 Key、Helicone 只做代理层与日志计费、账单仍结算给官方、出问题可切回原 base_url。10-10 直抓官方定价页 helicone.ai/pricing（163,419 字节，档位静态可读）与两源逐项对得上：Hobby Free = 10,000 free requests + 1 GB storage + 1 seat/1 org；Pro = $79 per month（标 POPULAR，注明 usage-based pricing applies）；Team = $799 per month（5 organizations、SOC-2 & HIPAA、专属 Slack）；Enterprise 询价（Custom MSA、SAML SSO、On-prem deployment）。监测请求三档均写 \"10K free + usage-based\"，存储 1 GB free + usage-based。判读：这是目录里少数不靠转售差价赚钱的网关——它不代售额度，个人\"能不能用\"取决于是否已持有官方 Key，因此不能当作买不到官方额度时的替代品，与站内\"中转站是情报目录、不是推荐清单\"的口径一致；\"0% 加价\"由种子注与 EggStriker 同向、且官方页收的是平台服务费而非模型倍率，三点一致故记 verified。遗留：官方定价页顶栏横幅写 \"Helicone Joins Mintlify\"（10-10 原文），归属/并购含义与是否影响服务条款本站未核（未核实）；自部署版本的运维成本与合规责任属文档口径，未实测。" },
    },
    extra: [
      // 种子源之外、由本站用户提报/自行发现的条目；字段与 seed.providers 同构，双源核实后写入 relayVerify。日更/周更任务对此区只读不改。
      // private:true = 社群私有/邀请制渠道（非公开可注册中转站），前端与静态页单独标"私有渠道"，不参与报价对照与比价。
      { id: "omwai", name: "Omwai API", url: "https://www.omwai.xyz", section: "china", type: "mixed", status: "unverified",
        payment: [], models: ["openai", "anthropic"], modelCount: null, providerCount: null,
        entityRegistered: "unknown", supportsStream: "unknown", supportsTools: "unknown",
        seedLastVerified: null, seedVerifiedBy: null, riskFlags: ["user_submitted"],
        note: "new-api 部署实例；官网公开 /api/pricing 可见 Claude Opus 4.6 倍率 2.5/5、缓存 0.1，分组名含 aws-bedrock / Kiro / Antigravity 等，多上游混跑迹象（mixed）。2026-09-28 由用户提报收录，暂无独立第二来源，待双源核实。",
        pricingApi: "https://www.omwai.xyz/api/pricing", pricePid: null, priceStats: null, extraSource: true,
        sources: ["https://www.omwai.xyz/api/pricing"] },

      { id: "yiqinuo", name: "模型聚合（yiqinuo）", url: "https://www.yiqinuo.cn", section: "china", type: "aggregator", status: "active",
        private: true, payment: [], models: ["openai"], modelCount: null, providerCount: null,
        entityRegistered: "unknown", supportsStream: "unknown", supportsTools: "unknown",
        seedLastVerified: null, seedVerifiedBy: null, riskFlags: ["user_submitted", "private_channel", "registration_closed"],
        note: "社群私有渠道（截图来源：群公告称其为\"模型聚合渠道·新\"，含 GPT-5.5/5.6）。站活着（解析至腾讯云 118.89.79.21），首页为 new-api 类网关；但前端配置 registration_enabled=false、invitation_code_enabled=false——注册与邀请码均已关闭，只服务既有用户；/api/pricing 返 404，无公开价目可核。2026-09-28 实测。",
        pricingApi: null, pricePid: null, priceStats: null, extraSource: true,
        sources: ["https://www.yiqinuo.cn/", "https://dns.google/resolve?name=www.yiqinuo.cn&type=A"] },

      { id: "rvrcc", name: "Liyi 渠道（rvrcc）", url: "https://api.rvrcc.com", section: "china", type: "mixed", status: "inactive",
        private: true, payment: [], models: ["openai"], modelCount: null, providerCount: null,
        entityRegistered: "unknown", supportsStream: "unknown", supportsTools: "unknown",
        riskFlags: ["user_submitted", "private_channel", "unreachable"], seedLastVerified: null, seedVerifiedBy: null,
        note: "社群私有渠道（截图来源：群公告称其为\"Liyi 渠道·老\"，含 GPT-5.5/5.6）。2026-09-28 实测 api.rvrcc.com 在 Google 与 Cloudflare 公共 DNS 均返回 NXDOMAIN（无解析记录，链接打不开）；主域 rvrcc.com 仍注册中（GoDaddy DNS）。正在用的人需要换出口。",
        pricingApi: null, pricePid: null, priceStats: null, extraSource: true,
        sources: ["https://dns.google/resolve?name=api.rvrcc.com&type=A", "https://cloudflare-dns.com/dns-query?name=api.rvrcc.com&type=A"] },
    ],
    /* RELAY-SEED-BEGIN */
    seed: {
     "source": "https://github.com/howardpen9/awesome-ai-api-proxy",
     "sourceFiles": {
      "providers": "https://raw.githubusercontent.com/howardpen9/awesome-ai-api-proxy/main/data/providers.yaml",
      "prices": "https://raw.githubusercontent.com/howardpen9/awesome-ai-api-proxy/main/data/prices.latest.json"
     },
     "sourceLastReviewed": "2026-07-12",
     "priceSnapshot": "2026-08-16",
     "priceRecordCount": 3464,
     "fetchedAt": "2026-09-28",
     "providers": [
      {
       "id": "bltcy",
       "name": "柏拉图 AI (bltcy)",
       "url": "https://api.bltcy.ai",
       "section": "china",
       "type": "mixed",
       "status": "active",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "midjourney",
        "suno",
        "luma",
        "deepseek",
        "grok",
        "gemini",
        "qwen"
       ],
       "modelCount": 1043,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": "unknown",
       "seedLastVerified": "2026-06-07",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "Azure 通道；主打最低价。new-api fork，1000+ 模型横跨 25+ 分组；`/api/pricing` 公开 default 分组倍率。",
       "pricingApi": "https://api.bltcy.ai/api/pricing",
       "pricePid": "bltcy",
       "priceStats": {
        "records": 1375,
        "models": 5,
        "capturedAt": "2026-08-16"
       }
      },
      {
       "id": "uiuiapi",
       "name": "UiUiAPI",
       "url": "https://uiuiapi.com",
       "section": "china",
       "type": "official-relay",
       "status": "active",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini"
       ],
       "modelCount": 311,
       "providerCount": 30,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-06-07",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "宣称官方渠道 + 官方倍率；约便宜 49%（宣称），311 模型。new-api `/api/pricing` 公开于 api1 子域名。",
       "pricingApi": "https://api1.uiuiapi.com/api/pricing",
       "pricePid": "uiuiapi",
       "priceStats": {
        "records": 666,
        "models": 6,
        "capturedAt": "2026-08-16"
       }
      },
      {
       "id": "yunwu",
       "name": "云雾 API (YUNWU)",
       "url": "https://yunwu.ai",
       "section": "china",
       "type": "mixed",
       "status": "active",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini",
        "deepseek",
        "midjourney"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": "unknown",
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "主打高速稳定；社区常列为头部站。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "closeai-asia",
       "name": "CloseAI",
       "url": "https://www.closeai-asia.com",
       "section": "china",
       "type": "official-relay",
       "status": "active",
       "payment": [
        "alipay",
        "wechat",
        "enterprise-invoice"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": true,
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "提供对公发票；自称亚洲最大企业级中转。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "rcouyi",
       "name": "No.1-API",
       "url": "https://api.rcouyi.com",
       "section": "china",
       "type": "aggregator",
       "status": "active",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini",
        "qwen",
        "hunyuan"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": "unknown",
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "一站式聚合 + 中转平台。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "xuanshuapi",
       "name": "玄枢API (XuanShu API)",
       "url": "https://www.xuanshuapi.com",
       "section": "china",
       "type": "mixed",
       "status": "unverified",
       "payment": [
        "enterprise-invoice"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "根路径提供 Anthropic Messages 与 Gemini v1beta，/v1 下提供 OpenAI Responses 与 Chat Completions；模型可见性与价格按 Key 和分组在控制台配置。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "dmxapi",
       "name": "DMXAPI",
       "url": "https://dmxapi.cn",
       "section": "china",
       "type": "mixed",
       "status": "unverified",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "no_entity"
       ],
       "note": "社区收录；官网未独立核实。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "gptgod",
       "name": "GPTGOD",
       "url": "https://gptgod.online",
       "section": "china",
       "type": "reverse",
       "status": "unverified",
       "payment": [
        "alipay"
       ],
       "models": [
        "openai",
        "anthropic"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "reverse_channel",
        "no_entity"
       ],
       "note": "逆向；便宜，稳定性无保证。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "mkeai",
       "name": "MKEAI",
       "url": "https://mkeai.com",
       "section": "china",
       "type": "mixed",
       "status": "unverified",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "deepseek"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "no_entity"
       ],
       "note": "社区论坛 + 中转混合；主推 DeepSeek。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "teamorouter",
       "name": "TeamoRouter",
       "url": "https://teamorouter.com",
       "section": "china",
       "type": "mixed",
       "status": "unverified",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini",
        "deepseek"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "兼容 OpenAI／Anthropic／Gemini 的网关；支付宝与微信支付；运营方宣称多上游路由，并有 Claude Code／Codex 配置教程与 gpt-6-astra 支持。",
       "pricingApi": "https://teamorouter.com/pricing",
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "wappkit",
       "name": "Wappkit API",
       "url": "https://api.wappkit.com",
       "section": "china",
       "type": "mixed",
       "status": "unverified",
       "payment": [],
       "models": [
        "openai",
        "anthropic"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "new-api OpenAI 兼容网关，公开 `/api/pricing`；分组为 Codex／Claude-Code 号池（无扁平 default 组）。",
       "pricingApi": "https://api.wappkit.com/api/pricing",
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "wawazz",
       "name": "wawazz.xyz",
       "url": "https://wawazz.xyz",
       "section": "china",
       "type": "mixed",
       "status": "unverified",
       "payment": [
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted",
        "prices_too_cheap"
       ],
       "note": "OpenAI 兼容 `/v1`；微信支付；运营方宣称 GPT 可低至官方价 0.07 倍。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "atlascloud",
       "name": "Atlas Cloud",
       "url": "https://www.atlascloud.ai",
       "section": "global",
       "type": "aggregator",
       "status": "active",
       "payment": [
        "card"
       ],
       "models": [
        "deepseek",
        "qwen",
        "moonshot",
        "anthropic",
        "grok",
        "kling",
        "minimax",
        "bytedance",
        "vidu",
        "openai",
        "google"
       ],
       "modelCount": 118,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-06-07",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "多模态聚合平台；图像/视频模型多（Grok Imagine、Kling、ByteDance、Vidu）。公开 OpenAI 兼容 `/v1/models` 含 cache-read 计价。",
       "pricingApi": "https://api.atlascloud.ai/v1/models",
       "pricePid": "atlascloud",
       "priceStats": {
        "records": 404,
        "models": 5,
        "capturedAt": "2026-08-16"
       }
      },
      {
       "id": "openrouter",
       "name": "OpenRouter",
       "url": "https://openrouter.ai",
       "section": "global",
       "type": "aggregator",
       "status": "active",
       "payment": [
        "card",
        "crypto"
       ],
       "models": [
        "openai",
        "anthropic",
        "google",
        "meta",
        "mistral"
       ],
       "modelCount": 400,
       "providerCount": 60,
       "entityRegistered": true,
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-06-07",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "官方授权路由，加价约 5%；400+ 模型、60+ 供应商。ARR 据报约 $5M（2025-05）→ 约 $50M（2026 初）。公开 `/api/v1/models` JSON。",
       "pricingApi": "https://openrouter.ai/api/v1/models",
       "pricePid": "openrouter",
       "priceStats": {
        "records": 807,
        "models": 8,
        "capturedAt": "2026-08-16"
       }
      },
      {
       "id": "relaydance",
       "name": "Relaydance",
       "url": "https://relaydance.com",
       "section": "global",
       "type": "mixed",
       "status": "active",
       "payment": [
        "alipay",
        "wechat",
        "card"
       ],
       "models": [
        "grok",
        "doubao",
        "seedance"
       ],
       "modelCount": 22,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": "unknown",
       "seedLastVerified": "2026-06-07",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "基于 new-api 的中文界面海外站，主打 xAI Grok + 字节跳动 Doubao。`/api/pricing` 公开倍率计价（model_ratio × $2/1M tokens）。",
       "pricingApi": "https://relaydance.com/api/pricing",
       "pricePid": "relaydance",
       "priceStats": {
        "records": 68,
        "models": 1,
        "capturedAt": "2026-08-16"
       }
      },
      {
       "id": "aimlapi",
       "name": "AIMLAPI",
       "url": "https://aimlapi.com",
       "section": "global",
       "type": "aggregator",
       "status": "active",
       "payment": [
        "card",
        "crypto"
       ],
       "models": [
        "openai",
        "anthropic",
        "google",
        "meta"
       ],
       "modelCount": 400,
       "providerCount": null,
       "entityRegistered": true,
       "supportsStream": true,
       "supportsTools": "unknown",
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "400+ 模型，$20 起预付；支持加密货币暗示绕支付障碍。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "helicone",
       "name": "Helicone",
       "url": "https://helicone.ai",
       "section": "global",
       "type": "observability",
       "status": "active",
       "payment": [],
       "models": [
        "openai",
        "anthropic"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": true,
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "LLM 可观测性网关；日志/成本分析。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "litellm",
       "name": "LiteLLM",
       "url": "https://litellm.ai",
       "section": "global",
       "type": "gateway-oss",
       "status": "active",
       "payment": [],
       "models": [
        "openai",
        "anthropic",
        "google",
        "azure",
        "bedrock"
       ],
       "modelCount": null,
       "providerCount": 100,
       "entityRegistered": true,
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "开源网关（100+ 供应商）+ 企业版。自托管，自带 Key。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "ai-router",
       "name": "AI Router",
       "url": "https://ai-router.dev",
       "section": "global",
       "type": "mixed",
       "status": "unverified",
       "payment": [
        "card",
        "crypto",
        "alipay",
        "wechat"
       ],
       "models": [
        "openai"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "OpenAI 兼容 ChatGPT API 中转（`api.ai-router.dev/v1`）；控制台密钥与用量追踪、日／周套餐；英／中／俄／波斯语页面。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "allrouter",
       "name": "AllRouter",
       "url": "https://allrouter.ai",
       "section": "global",
       "type": "aggregator",
       "status": "unverified",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "moonshot",
        "zhipu",
        "gemma",
        "deepseek"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "兼容 OpenAI 与 Anthropic 的聚合网关；支持支付宝与微信支付；运营方宣称 Kimi K3 为 Moonshot 官方牌价。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "aiapi-pro",
       "name": "NovAI",
       "url": "https://aiapi-pro.com",
       "section": "global",
       "type": "aggregator",
       "status": "unverified",
       "payment": [
        "card",
        "crypto"
       ],
       "models": [
        "deepseek",
        "qwen",
        "moonshot",
        "zhipu",
        "doubao",
        "minimax",
        "hunyuan",
        "seedance"
       ],
       "modelCount": 38,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "OpenAI 兼容聚合网关，整合中国前沿模型（DeepSeek、Qwen、GLM、Kimi、MiniMax、Doubao、Hunyuan），同一 `/v1` 端点另含图像与视频生成；`/v1/models` 公开模型清单，定价页列每 token 价格。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "quicksilverpro",
       "name": "QuickSilver Pro",
       "url": "https://quicksilverpro.io",
       "section": "global",
       "type": "aggregator",
       "status": "unverified",
       "payment": [
        "card"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini",
        "deepseek",
        "qwen",
        "moonshotai",
        "zhipuai",
        "minimax",
        "meta",
        "xai"
       ],
       "modelCount": 39,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "OpenAI 兼容网关；单一密钥涵盖前沿与开源模型（Claude、GPT、Gemini、DeepSeek、Qwen、Kimi、GLM）。按量计费。公开 `/pricing.json`。运营方自称 MachineFi Labs。",
       "pricingApi": "https://quicksilverpro.io/pricing.json",
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "routescope",
       "name": "RouteScope",
       "url": "https://www.routescope.ai",
       "section": "global",
       "type": "aggregator",
       "status": "unverified",
       "payment": [
        "card",
        "crypto"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "统一网关，将 100+ 模型转成 OpenAI／Claude／Gemini 兼容 API；按量预付额度。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "sandbase",
       "name": "SandBase",
       "url": "https://sandbase.ai",
       "section": "global",
       "type": "aggregator",
       "status": "unverified",
       "payment": [
        "card"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini",
        "deepseek",
        "qwen",
        "meta",
        "mistral"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "统一 API，OpenAI 兼容端点涵盖多家模型供应商，另有 tool API 与托管 agent。运营方未亲自验证线上 API。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "tokens-forge",
       "name": "Tokens Forge",
       "url": "https://tokens-forge.com",
       "section": "global",
       "type": "aggregator",
       "status": "unverified",
       "payment": [
        "card",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini"
       ],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "OpenAI 兼容多模型 API 网关；GPT／Claude／Gemini 类模型分官方额度与路由钱包余额。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "unorouter",
       "name": "UnoRouter",
       "url": "https://unorouter.ai",
       "section": "global",
       "type": "aggregator",
       "status": "unverified",
       "payment": [
        "card"
       ],
       "models": [
        "openai",
        "anthropic",
        "gemini"
       ],
       "modelCount": 212,
       "providerCount": 31,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "建于 new-api 网关之上。单一密钥跨多上游，按延迟路由并具故障转移；自动识别 OpenAI／Anthropic／Gemini 格式。按量计费并提供免费模型层；亦支持角色扮演客户端（SillyTavern、Janitor.AI、RisuAI、Chub）。",
       "pricingApi": "https://api.unorouter.ai/api/pricing",
       "pricePid": "unorouter",
       "priceStats": {
        "records": 144,
        "models": 5,
        "capturedAt": "2026-08-16"
       }
      },
      {
       "id": "new-api",
       "name": "new-api",
       "url": "https://github.com/Calcium-Ion/new-api",
       "section": "selfhost",
       "type": "gateway-oss",
       "status": "active",
       "payment": [],
       "models": [],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": false,
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "One-API 的 fork，多了几种通道类型；同样自托管、自带 key。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "one-api",
       "name": "One-API",
       "url": "https://github.com/songquanpeng/one-api",
       "section": "selfhost",
       "type": "gateway-oss",
       "status": "active",
       "payment": [],
       "models": [],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": false,
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "流行的 Go 多厂商网关；多数中转站的底层 OSS 模板。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "a3m-router",
       "name": "A3M Router",
       "url": "https://github.com/Das-rebel/a3m-router",
       "section": "selfhost",
       "type": "gateway-oss",
       "status": "unverified",
       "payment": [],
       "models": [
        "openai",
        "anthropic",
        "google",
        "deepseek",
        "groq",
        "mistral",
        "xai",
        "cohere"
       ],
       "modelCount": null,
       "providerCount": 47,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "MIT TypeScript OpenAI-compatible multi-provider router (parallel ensemble); self-hosted — you supply keys. npm: adaptive-memory-multi-model-router.",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "aiapipk",
       "name": "中轉站競技場 (AI API PK)",
       "url": "https://www.aiapipk.com",
       "section": "tools",
       "type": "comparison",
       "status": "active",
       "payment": [],
       "models": [],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "约 40 家站点的 OpenAI / 逆向 / Claude / DeepSeek 报价墙。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "mn-api-unmaintained",
       "name": "awesome-ai-proxy (mn-api, unmaintained)",
       "url": "https://github.com/mn-api/awesome-ai-proxy",
       "section": "tools",
       "type": "list",
       "status": "inactive",
       "payment": [],
       "models": [],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": "2026-05-26",
       "seedVerifiedBy": "maintainer",
       "riskFlags": [],
       "note": "最早的清单（约 31 家）。**2026 年起已停更** —— 本仓库延续这一工作。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "china-ai-arbitrage",
       "name": "China AI Arbitrage",
       "url": "https://www.china-ai-arbitrage.xyz",
       "section": "tools",
       "type": "comparison",
       "status": "unverified",
       "payment": [],
       "models": [],
       "modelCount": null,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": "unknown",
       "supportsTools": "unknown",
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted"
       ],
       "note": "60+ 中国 AI 平台的价格与额度比价、LLM API 中转站排名、每日更新的免费额度追踪。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      },
      {
       "id": "coderplan",
       "name": "CoderPlan",
       "url": "https://coderplan.ai",
       "section": "tools",
       "type": "official-relay",
       "status": "unverified",
       "payment": [
        "alipay",
        "wechat"
       ],
       "models": [
        "openai",
        "anthropic",
        "google",
        "deepseek",
        "xai"
       ],
       "modelCount": 50,
       "providerCount": null,
       "entityRegistered": "unknown",
       "supportsStream": true,
       "supportsTools": true,
       "seedLastVerified": null,
       "seedVerifiedBy": "community",
       "riskFlags": [
        "operator_submitted",
        "no_entity"
       ],
       "note": "社区投稿；宣称 50+ 模型，含 OpenAI/Anthropic/Google/DeepSeek/xAI。",
       "pricingApi": null,
       "pricePid": null,
       "priceStats": null
      }
     ],
     "anchorModels": [
      {
       "model": "claude-opus-4.8",
       "rows": [
        {
         "pid": "atlascloud",
         "in": 5,
         "out": 25,
         "cacheRead": 0.5,
         "captured": "2026-08-16"
        },
        {
         "pid": "openrouter",
         "in": 2.5,
         "out": 12.5,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "unorouter",
         "in": 5,
         "out": 25,
         "cacheRead": null,
         "captured": "2026-08-16"
        }
       ]
      },
      {
       "model": "claude-sonnet-4.6",
       "rows": [
        {
         "pid": "atlascloud",
         "in": 3,
         "out": 15,
         "cacheRead": 0.3,
         "captured": "2026-08-16"
        },
        {
         "pid": "bltcy",
         "in": 3,
         "out": 15,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "openrouter",
         "in": 1.5,
         "out": 7.5,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "relaydance",
         "in": 3.75,
         "out": 18.75,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "uiuiapi",
         "in": 3,
         "out": 15,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "unorouter",
         "in": 3,
         "out": 15,
         "cacheRead": null,
         "captured": "2026-08-16"
        }
       ]
      },
      {
       "model": "gpt-5.4",
       "rows": [
        {
         "pid": "atlascloud",
         "in": 2.5,
         "out": 15,
         "cacheRead": 0.25,
         "captured": "2026-08-16"
        },
        {
         "pid": "bltcy",
         "in": 2.5,
         "out": 15,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "openrouter",
         "in": 1.25,
         "out": 7.5,
         "cacheRead": null,
         "captured": "2026-08-16"
        }
       ]
      },
      {
       "model": "gpt-5.5-pro",
       "rows": [
        {
         "pid": "openrouter",
         "in": 15,
         "out": 90,
         "cacheRead": null,
         "captured": "2026-08-16"
        }
       ]
      },
      {
       "model": "gemini-3-flash",
       "rows": [
        {
         "pid": "atlascloud",
         "in": 1.5,
         "out": 9,
         "cacheRead": 0.15,
         "captured": "2026-08-16"
        },
        {
         "pid": "openrouter",
         "in": 0.75,
         "out": 4.5,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "uiuiapi",
         "in": 0.5,
         "out": 3,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "unorouter",
         "in": 0.5,
         "out": 3,
         "cacheRead": null,
         "captured": "2026-08-16"
        }
       ]
      },
      {
       "model": "deepseek-v3",
       "rows": [
        {
         "pid": "bltcy",
         "in": 2,
         "out": 2,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "openrouter",
         "in": 0.2574,
         "out": 1.0287,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "uiuiapi",
         "in": 2,
         "out": 8,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "unorouter",
         "in": 2,
         "out": 8,
         "cacheRead": null,
         "captured": "2026-08-16"
        }
       ]
      },
      {
       "model": "deepseek-r1",
       "rows": [
        {
         "pid": "bltcy",
         "in": 4,
         "out": 16,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "openrouter",
         "in": 0.7,
         "out": 2.5,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "uiuiapi",
         "in": 4,
         "out": 16,
         "cacheRead": null,
         "captured": "2026-08-16"
        },
        {
         "pid": "unorouter",
         "in": 4,
         "out": 16,
         "cacheRead": null,
         "captured": "2026-08-16"
        }
       ]
      }
     ]
    },
    /* RELAY-SEED-END */
  },

  /* ---------------- 计费模式标签（用于价格矩阵） ---------------- */
  billing: { chatgpt:"订阅", claude:"订阅+积分", gemini:"订阅", manus:"积分制", deepseek:"免费+API", kimi:"订阅+Token Plan", glm:"会员+订阅(Coding Plan)", doubao:"订阅(新开)", cursor:"订阅+额度", copilot:"Credits 额度", trae:"积分制", qianwen:"订阅(三档)", devin:"订阅", coze:"积分制", wenxin:"会员+API", perplexity:"订阅+API", yuanbao:"完全免费（无内购）", hailuo:"订阅+按量", stepfun:"Credit 套餐+按量", xinghuo:"垂类会员+Token Plan", grok:"订阅(四档)", poe:"订阅(五档点数制)", yuanqi:"免费（收费政策未公开）", mimo:"API 按量+开源", longcat:"API 按量（限时折扣）", mistral:"订阅+API" },

  /* ---------------- 精选问答（编辑部整理，投票暂存本地） ---------------- */
  qa: [
    { q: "每月只有 $20 预算，ChatGPT Plus、Claude Pro、Gemini AI Pro 选哪个？", tags: ["预算紧", "海外"],
      a: "写代码/长文为主 → Claude Pro（编码榜首，但注意 Pro 用 Fable 要另买积分）；要最全能的助手和 Agent 生态 → ChatGPT Plus（GPT-6 已推送）；预算想再省或重多模态 → Gemini AI Pro 只要 $19.99 且免费档最厚道。三者国内支付门槛相同。", basis: "据本站订阅矩阵与编码/通用榜", votes: 34 },
    { q: "GLM Coding Plan 涨价 130% 后，国产编程订阅还有什么可选？", tags: ["编程", "国产"],
      a: "按入门成本排：火山方舟 Lite 约 ¥40/月 → Trae 会员 Lite ¥49（首月 9.9）→ Kimi Token Plan。重度终端用户可反向考虑 Copilot Pro（$10）但改按量计费后需盯额度。警惕 Trae 积分制：常规对话也扣点。", basis: "据 codepick 横评 + Trae 积分制报道", votes: 27 },
    { q: "Claude Pro 不额外买积分，到底够不够用？", tags: ["额度", "海外"],
      a: "约 45 请求/5 小时的 Sonnet/Opus 池，轻度写码和长文够用；但 Fable 5.1 不在 Pro 基础包内，想用旗舰必须预付 usage credits。日均高频编码建议直接 Max 5x（$100）。", basis: "据 Claude 速率限制拆解文", votes: 41 },
    { q: "Cursor 值 $20 还是 $200？Ultra 档是不是智商税？", tags: ["编程", "海外"],
      a: "Auto 模式不限量——中轻度用户 $20 Pro 完全够，前沿模型手动选用 $20 内含额度慢慢扣。Ultra 的 $400 额度只有在\"天天 Max Mode + 前沿模型不放\"时才回本，多数人用不完。注意 9 月被曝部分计价上调 60%。", basis: "据 Cursor 2026 价格指南", votes: 19 },
    { q: "Manus 的 $20/4000 积分是坑吗？", tags: ["Agent", "积分制"],
      a: "看任务密度：一个复杂研究任务可能吃掉数百到上千积分，即每月 4-10 个大型任务。偶尔体验自主 Agent 可以，当主力生产力会月中积分见底。同价位 Claude 的 Agent 能力评分更高（9.0 vs 8.8）且无积分焦虑。", basis: "据 Manus 定价实测 + 本站 Agent 榜", votes: 22 },
    { q: "完全不想翻墙、不想办外币卡，最强组合是什么？", tags: ["国内可达"],
      a: "通用助手：千问会员（三档比豆包便宜）或豆包；编程：GLM Coding（虽涨价仍比海外便宜）或 Trae 专业档；跑批量任务直接 DeepSeek API（输出 ¥4/M 起）。这套组合总成本可以压在 ¥100/月 内。", basis: "据本站可达性榜 + 性价比榜", votes: 38 },
    { q: "学生党怎么白嫖最强智能体？", tags: ["免费", "学生"],
      a: "GitHub Copilot Student 免费（含 1,500 credits 的基础版）+ Cursor 学生认证免费 Pro + 千问/DeepSeek/Kimi 免费聊天档。这套免费组合已覆盖编码+通用两条主线。", basis: "据 Copilot 官方计划页 + Cursor 订阅指南", votes: 45 }
  ],

  /* ---------------- 价格点位（每周核实任务追加，用于档案页趋势图） ----------------
   * 结构：{ agent_id: [ { date:"YYYY-MM-DD", v: 数字, unit:"$/月" 等, plan:"主流档名" }, ... 按时间正序 ] }
   * 只记录能确定折算为单一数字的档位价（如 Pro 月费），一个点位也保留，≥2 点时档案页自动画趋势线。 */
  priceHistory: {
    chatgpt: [
      { date: "2026-09-23", v: 10, unit: "$/M tokens", plan: "API GPT-6 Sol 输出" },
      { date: "2026-09-23", v: 0.5, unit: "$/M tokens", plan: "API GPT-6 Luna 输出" },
      { date: "2026-10-09", v: 60, unit: "$/M tokens", plan: "API GPT-6.1 Sol Ultrafast 输出" }
    ],
    poe: [
      { date: "2026-09-23", v: 19.99, unit: "$/月", plan: "Plus（旧两档制）" },
      { date: "2026-09-25", v: 25, unit: "$/月", plan: "Plus（五档点数制）" }
    ],
    perplexity: [
      { date: "2026-08-13", v: 10, unit: "$/月", plan: "Pro" },
      { date: "2026-08-14", v: 20, unit: "$/月", plan: "Pro" }
    ]
  },

  /* ---------------- 每周简报（自动核实任务每周五插入一条，最新在前） ---------------- */
  weekly: [
    { date: "2026-10-20", note: "周二轻量轮（窗口＝10-19 傍晚 17:00 至今约 16 小时）。本轮最大变化在基准：Arena+ 抓取件与昨两枚 md5 不同，行数由 334 增至 336、删 0 行，全部差异是两行按页面行序插入加一处 Vision 补值，三戳随重抓成功齐提 10-20。内容侧无一条过入库门槛：DeepSeek 定价页与昨傍晚件逐字节相同，OpenAI changelog 只是导航项改写、日期集合 23 项一字未动，五轮扫描的候选全部落在窗口外、单源或不在目录内。中转站双源名额用在本轮新选的两家用户提报条目上，两家都拿不到独立第二源，故 relayVerify 一条未写、extra 区一字未动，只把运营方自证的风险事实记入简报并挂红旗", items: [
      "基准同步到 10-20：curl 一次拉通 132,049 字节（昨两枚均 131,410），md5 6f6ce6e60980c934bbed9004c24a0177 与 10-19 早／晚两份都不同，解析 337 个 tr、336 行，列形校验通过且未落入“不是 300+”的拒写区间。源页表头仍 8 列（Model／Arena Elo／Coding／Vision／MII／ARC-AGI／Organization／License），逐行按模型名比对只三处变化：① 第 33 行插入 GLM-5.3-Flash 🥈 1501／1538／1296（Z.ai·MIT，MII 42）；② 第 36 行插入 Minimax-M3.1-Flash 🥈 1500／1539（MiniMax·Non-commercial，Vision 与 ARC-AGI 源页即空，MII 42）；③ 既有行唯一数值变动是 MiMo-V2.6-Pro ✅ 的 Vision 由空补出 1311，Elo／Coding 仍 1507／1560。其余 334 行的 Elo／Coding／Vision／ARC-AGI／Organization／License 逐列零变动，删除 0 行，两次插入之后行序仍是纯插入（新索引 33 与 36，无重排）；MII 非空值由 235 增至 237，增量全部来自这两行，既有行的 MII 无一改动，AAII 位继续留空串、不灌 MII 值。16 席的 elo／coding 逐值不动，scores.coding 一律不改（榜首仍 Claude Opus 5.5 1526／1575／1320）；新入场的两行是否开档案／席位属结构变更，交周五全量。三戳按纪律齐动：arena.fetchedAt 与 benchmarks.verifiedAt 因重抓成功提 10-20，meta.dataUpdatedAt 随本轮核实同步。",
      "纠错通道第四轮可直读且零新增：/functions/v1/app?action=corrections 返 200（161 字节），表内仍只有 2026-09-22 那条 perplexity 旧建议（Enterprise 档标注年付口径），第 1 步无需改条目。这条同时继续充当发布可行性判据——接口回 200 说明平台侧函数运行时（10-16 那次 /tmp No space left on device）正常，可新建 action 全参数发布。",
      "中转站种子维护：两个上游文件重抓后与本地 md5 完全相同（providers.yaml 6b5e583d55f0dd2e9def2896085722ff／28,572 字节，prices.latest.json d42fa4b6e34463b09d99d72150a510b9／1,706,113 字节），last_reviewed 仍 2026-07-12、snapshot_date 仍 2026-08-16，故不跑 gen-relay、种子区一字未改。本日双源核实名额 2 家全部用给用户提报条目（Omwai、yiqinuo），两家都缺独立第二源，故 relayVerify 一条未写、维持 15/36，extra 三条（omwai／yiqinuo／rvrcc）只读未动。",
      "提报条目 Omwai API（https://www.omwai.xyz）自家接口直读实录：/api/status 200（28,289 字节、72 键）——system_name“OmwAI”、version 字段为占位 v0.0.0、start_time 1791632568＝2026-10-10 19:42 北京（本站首次抓本站，故只能读到这个进程起点，无法判断此后是否重启过）、register_enabled 与 password_register_enabled 均 true、email_verification true、price 1／usd_exchange_rate 1／quota_per_unit 500000、passkey_login true、api_info 列 www／hk／us 三个 .omwai.xyz 端点、docs_link 指向 doc.omwai.xyz 的 Cherry Studio 接入文档；/api/pricing 200（35,185 字节、58 条在售），分组名含 aws-bedrock 与 Kiro，抽读 claude-opus-5-5 倍率 2／5、claude-fable-5-1 5／5、claude-opus-4-7 2.5／5。要紧的是它的 100 条公告最新四条自证供货方式：2026-10-13“晚上12点更新服务器：解决连接到号池时，延迟过高的问题”、10-09“GPT 不降智分组倍率调整：0.3 降低为 0.25”、09-23 sub2api 升级以支持 gpt-6-sol／gpt-6-luna、09-22“不降智分组资源耗尽，正在补号”——即“号池＋sub2api 拼接＋按分组补号”是运营方写在公开公告里的，属目录级风险情报。判读：这些全部来自本站自己的接口与公告，按铁律属运营方自证、不构成独立来源；检索“omwai 评测／中转站”只回到一篇 2026-08-12 的 CSDN 接入教程（指向 omwai.com，无实测数据、无故障记录）与无关软文，无任何社区实测、媒体报道或第三方监测可作第二源，且 Help AIO 与 lmspeed.net 的可用率页均未列本站。故本轮不写 relayVerify.omwai、不给 status，只把上述自证事实入档并挂红旗：已使用者宜按“供货方式不透明、分组倍率随时重排”对待，先小额测试、勿存大额余额（本站不做兑付背书，也不推荐注册）。",
      "提报条目 模型聚合 yiqinuo（https://www.yiqinuo.cn）本轮探到一处异动：/api/status 今日返 404 page not found（18 字节纯文本），即当初据以入档的 new-api 状态接口已不可直读；该区对本任务只读，故不改条目字段、不删条目，只记事实并列为观察——单凭一次 404 不能判停运（也可能是换域名或关掉公开接口），检索未见任何独立来源谈本站，故同样不写 relayVerify；下一轮补一次首页与 /api/pricing 的读数以区分“接口下线”与“整站停运”。",
      "第三方监测第十个读数（只记不入 relayVerify，因本日双源名额已用于两家提报条目）：Help AIO「AI中转站可用性监测」2026-10-20 09:04 快照把云雾 Yunwu 第十次列为 24 小时综合可用率 0.00%（有效探测 554 次；十次分别为 10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554、10-15 09:04/554、10-15 17:04/554、10-16 09:04/554、10-18 17:17/558、10-19 17:00/552、10-20 09:04/554），同页 19 站里 0% 的仍是 Yunwu、IKun Code（1,108 次）与 Undying（554 次）三家，其余 16 站在 73.83%—98.38%（榜首 Muze 98.38%，最低 CPass 73.83%；HongMaCC 82.49%、SSSAiCode 88.90%、Yes Code 82.22% 较昨回升或持平）。云雾 relayVerify 的 at 因此仍留 10-19，判定“暴雷／收缩级、不以接口 200 作可入驻依据”不变。",
      "官方页复核：DeepSeek 定价页（api-docs.deepseek.com/zh-cn/quick_start/pricing，须跟随结尾斜杠重定向）今日 200、26,182 字节，md5 1b8a07842866cbac520d6c4e77f584c1 与 10-19 傍晚那份完全相同，即三档标价、V4.1-Flash-1017 版本名与 Search／Fetch 各 5 元／千次（11-01 00:00 起计费）的表述一字未变；OpenAI changelog（developers.openai.com/api/docs/changelog）200、544,021 字节，去标签文本仅由 61,546 增至 61,560 字符，差异落在 Codex Security 的导航项改写（“Run scans in CI”→“CI/CD Overview GitHub Actions”），页内 23 个日期标记集合与昨完全相同、无任何新条目。故 apiPrices、plans 与 priceHistory 一律不动，两站 verifiedAt 不同提（本轮未核实其内容变化，只确认无变）。",
      "每日信号扫描 5 轮（窗口＝10-19 傍晚至今）无一项过入库门槛，未入库理由逐条记：① “2026年10月20日 API 定价 公告”与“10月19日 价格下调 官方”两路检索均 0 结果，即窗口内没有官方价签类新闻可查；② 云服务平台 Zeabur 10-17 宣布整体停运（网易／云头条，AI Hub 早在 09-22 已永久关闭，两起安全事件叠加，12-01 起陆续停服、12-31 全关，已开放余额退款）——它是部署托管平台而非 API 中转商，不在本站种子与提报目录内，且本轮只查到该家媒体报道链，是否单列平台侧观察交周五；③ lmspeed.net 的比价页把 Alanco／DeadlySignal API／Koru API／Kterna／情酱的API站 等标为“跑路中转站”，属单一比价站口径且这些站均不在本站目录内，一律只作观察不建档；④ GLM-5.3-Flash 与 GLM-5.3-FlashX 的提价报道全部落在 2026-09-18～10-13（FlashX 定价为 Flash 的 2.5 倍、最高 200 tokens/s），在窗口之外且站内智谱档案已有 10-13 的渠道比价记录，不重复入库；⑤ voyai／hvoyai 一类“中转站实测榜”页正文自带 ?aff= 联盟注册链接，属推荐清单性质，按“本站是情报目录不是推荐清单、不接中转类联盟返佣”的铁律不作来源也不引链接；⑥ 腾讯元器 11-09 停服仍是旧公告复述。",
      "字段结论与周五待办：本轮 apiPrices／plans／events／priceHistory 与 relay 种子区、extra 区一律未动（events 维持 62、relayVerified 维持 15/36、relaySeed 33、relayExtra 3），改动仅 arena.rows／fetchedAt／note、benchmarks.verifiedAt、meta.dataUpdatedAt 与本条简报。周五全量继续处理：AAII→MII 表头改名与是否并入七维、GLM-5.3-Flash 与 Minimax-M3.1-Flash（以及 Mistral Large 4／Hunyuan-Hy4／Ling-3.1-flash）是否开档案或席位、柏拉图是否因版本升级＋滚动改价改判、OpenLux／IKun Code／Undying 是否收录、Perplexity 决策模型与 09-22 那条 Enterprise 年付纠错、Grok 厂商更名口径、GLM-5.5 传闻、DeepSeek Search／Fetch 11-01 计费生效后的价签落地、Kimi K3 第三方任务成本口径是否单列、Zeabur 是否单列平台侧观察、yiqinuo 状态接口 404 的性质判定。",
      "发布状态（本轮，含发布后补记）：第 3b 步待发检查读到线上仍是 10-19（/data.js 384,925 字节、三戳 10-19、weekly0=10-19），本地已推进到 10-20，故按当期源码直接走发布。本会话 Sites 工具组挂着且 get_local_context 直接返回 projectRoot＝D:\\AI\\agent-intel 与站内绑定描述符（历史草稿 actionId 79b86d0c 仍在列），故走本会话直发、不用子会话绕法；连通性判据 get_site 一次探通（lifecycle=active、governance_status=normal、runtime 72、active_release 01a1536f-d457）。新 actionId e190e644-efc2-4165-a3cb-8da2bbeff375 按八参数原样 prepare_site（未传 spa）：首轮 descriptorStatus=pending 并提示保留同一 action 重试，第 1 次 get_publish_status deployment.state=verifying、第 2 次即 state=ready 且 canPublish:true，冻结件 516,432 字节、sha256 444257a5 开头，deploymentId 01a156dd-bad2、verificationOperationId 01a156dd-be61、backendOperationId 01a0c9a8-f168（与 10-09 起历轮同一枚，后端没丢）；publish_site 只传 actionId 得 publishOperationId 01a156dd-dd5c-7695-9af4-1051ee94cdd4，返回体照旧没有结果字段，同 actionId 复查坐实 published:true、operation.committed:true、state=succeeded、result_release_id=01a156dd-dd5c-763f-b7ca-54d3ae1819f5，get_site 读 active_release_id 与之相等、runtime_version 由 72 跳 73，全程无 sites_request_failed／sites_function_deploy_failed（发布前后纠错接口都回 200 且表内仍只有 09-22 那条，即投票与纠错后端随全参数发布保住）。上线逐项实读：主站／只读镜像／本地三方 /data.js md5 全等（3a1aeac71785f96ebc623a9c7cfef45b、396,024 字节，data.js 不注入 watermark 故可直接比字节），三戳均 2026-10-20、rows 336、weekly0=10-20、events 62，/arena.html 200 且 <tr>=337，/rank.html 200 前 16 席与 benchmarks.models 逐席同序（0 处不匹配），/relay.html 200 表格行 48（口径仍是种子 33＋提报 3＝36 条、verified 15），/weekly/2026-10-20.html 与 10-19 两张、/agent/deepseek.html、/agent/chatgpt.html、/pick.html、/sitemap.xml、/index.html 全 200。镜像侧由 post-commit 于 09:10 推成 MIRROR_PUSH_OK f92802b，本轮未手动推。坑一条（新）：用本机 Node 裸 https.get 取镜像 /data.js 只回 263,636 字节且与本地不等长，同 URL 换 curl 即回 396,024 字节且 md5 全等——那是响应编码未解造成的截断读数，三方字节比对一律以 curl 为准，别拿 Node 的裸 https 长度当事实。本条是发布后的补记，故线上那条“发布状态”文本仍停在补记之前属已知自指，release ID 只往这里记、不为对齐 ID 反复补发。",
    ] },
    { date: "2026-10-19", note: "周一两轮轻量轮（早间＋傍晚）。早间那轮：基准重抓成功且与昨傍晚抓取件逐字节相同（335 个 tr／334 行、逐行零变动），纠错接口连续第二轮返 200 且无新增项，中转站种子两文件 md5 与本地相同、扫描 3 轮没有一项过两源门槛，故不产生内容改动，只按纪律把三戳同步到 10-19 并完成发布——10-18 傍晚那轮已核实与编辑完毕但当天没有提交，主站自 10-15 晚件起已连欠 10-16 与 10-18 两版，一并追平。傍晚那轮（17:00 起）：基准第二次重抓仍与早间件逐字节相同，种子两上游仍逐字节相同，但中转站双源名额用掉的两家都读到了新事实（云雾第五次直抓见到注册验证码切换与 o1-pro 下架、柏拉图读到版本升级与 11 条自证报价重排），两家 relayVerify 的 at 提到 10-19；DeepSeek 定价页与 OpenAI changelog 文本层逐字未变；扫描累计 5 轮仍无一项过入库门槛", items: [
      "基准同步到 10-19：curl 一次拉通，抓取件 131,410 字节、md5 1e46a800c31b1e2a7d9768499ea6e26f 与 10-18 17:01 那份完全相同，解析 335 个 tr、334 行、列形校验通过且未落入“不是 300+”的拒写区间；源页表头仍是 8 列（Model／Arena Elo／Coding／Vision／MII／ARC-AGI／Organization／License），逐行与 10-18 快照比对 0 变动，MII 非空值仍 235 个，16 席席位与 elo／coding 逐值不动、scores.coding 一律不改（榜首仍 Claude Opus 5.5 1526／1575／1320，Gemini-4-Argon 的 ARC-AGI 仍为昨补出的 91.3）。重抓成功即按纪律提 arena.fetchedAt 与 benchmarks.verifiedAt 到 10-19，meta.dataUpdatedAt 随本轮核实同步；benchmarks.models 的 aaii 仍是 10-16 末次读数且不代表今日核实（该列已于 10-18 被定义不同的 MII 取代，改名与是否并入七维是周五首项）。",
      "纠错通道连续第二轮可直读且零新增：/functions/v1/app?action=corrections 返 200（161 字节），表内仍只有 2026-09-22 那条 perplexity 旧建议（Enterprise 档标注年付口径），距 10-18 傍晚读取零新增，第 1 步无需改条目。这条同时是发布可行性判据——10-16 主站两次发布失败与该接口当时的 500（平台侧函数运行时 /tmp No space left on device, os error 28）同根因，接口连续回 200 说明运行时已恢复，故本轮可以新建 action 全参数发布，不必再走静态发布或只靠镜像顶班。",
      "中转站维护结果：种子两个上游文件重抓后与本地 md5 完全相同（providers.yaml 6b5e583d55f0dd2e9def2896085722ff／28,572 字节，prices.latest.json d42fa4b6e34463b09d99d72150a510b9／1,706,113 字节），last_reviewed 仍 2026-07-12、snapshot_date 仍 2026-08-16，故不跑 gen-relay、种子区一字未改。第 2c② 的双源核实名额已在 10-18 用完（云雾第四次复核与柏拉图公告缩列，两家 relayVerify 的 at 均已提 10-18），今晨扫描未见新的暴雷／停服信号，故不新开家数；relayVerify 维持 15/36，extra 三条（omwai／yiqinuo／rvrcc）属用户提报区、对本任务只读未动。",
      "每日信号扫描 3 轮无一项过入库门槛（窗口＝10-18 傍晚至今约 16 小时）：① 腾讯元器 2026-11-09 停服与退款（搜狐 10-18 12:22）是已入库旧公告的复述，不重复建事件；② “刺心 AI 中转站”企业向软文（UC 号 10-18 09:07，自述支持人民币充值、对公转账与增值税发票、高峰期抗限流）属站点自我宣传且不在本站种子与提报目录内，按铁律既不作独立来源也不建档，只列观察项；③ DeepSeek V4.1-Flash-1017 与自研搜索 API 在今日多份日报（CSDN 10-18 08:53 等）转述，与站内已入库的官方定价页直读一致，不重复入 events；④ 商务部与科技部 2026 年第 48 号公告征求意见稿把“利用限制类大模型对外提供 API 调用”纳入管制口径，仍是草案且各稿列数不一（AI 23 项／共 40 项），不改任何价签与席位，继续列政策观察交周五判断是否单列。另：同页出现的“GrokCode 天梯／性价比榜”类站点属比价 aggregator 自我推广，不引为基准来源。",
      "发布状态（本轮，含发布后补记）：10-18 傍晚的核实与编辑当日未提交，故 10-19 上午先以“daily-verify 2026-10-18：变更 7 项”落盘（commit 16821fc，镜像 09:38 MIRROR_PUSH_OK），再叠加今晨增量（commit 0a1e32d，镜像 09:45 MIRROR_PUSH_OK 7a842c3——尾行短码是镜像仓自己的 commit，不是主仓 HEAD），然后按当期源码发布。本会话 Sites 工具组仍不在挂载清单（mcp_list 查 site 返 0 条），故沿用子会话绕法：子会话自己 get_local_context 拿到 $DST=C:\\Users\\jmsht\\Documents\\Qoder\\2026-10-19\\526dd797，用 cp -r 把 public 与 functions 原样拷入并删掉 gitignored 的 community.json，两侧 data.js md5 均为 45a45f0e5fa5563b56bf76468022bee0／370,768 字节且 cmp 逐字节相同。新 actionId 742bc727-0f50-49fc-9ec4-25f01ef84b8d 按八参数原样 prepare_site（未传 spa）：首轮 descriptorStatus=pending，第 1 轮 deployment.state=verifying、第 2 轮即 canPublish:true 且 state=ready，冻结件 493,482 字节、sha256 336b0d4e 开头，deploymentId 01a151d7-9c79、verificationOperationId 01a151d7-9fe7、backendOperationId 01a0c9a8-f168（与 10-09 起一直同一枚后端操作 ID，说明后端没换没丢）；publish_site 只传 actionId 得 publishOperationId 01a151d7-d7a5-77ad-9eaa-a9851b0a655a，返回体照旧没有结果字段，同 actionId 复查坐实 published:true、operation.committed:true、state=succeeded、result_release_id=01a151d7-d7a5-774a-90d0-dfd6530319a9；get_site 读 lifecycle=active、governance_status=normal、access_mode=public、active_release_id 与 result_release_id 相等、runtime_version 由 64 跳 66。全程无 sites_request_failed／sites_function_deploy_failed——10-16 那两个 action 卡在函数部署是因为平台侧运行时 /tmp 磁盘耗尽，判据“纠错接口回 200 才发”这次奏效。上线逐项实读：主站 /data.js 200 且 370,768 字节与本地等长（dataUpdatedAt=10-19、arena.fetchedAt=10-19、rows 334、首行 Claude Opus 5.5 1526/1575/1320、weekly0=10-19、events 62），/arena.html <tr>=335 且首行为榜首，/rank.html 前 16 席与 benchmarks.models 逐席同序（0 处不匹配），/relay.html 200 表格行 48（口径仍是种子 33＋提报 3＝36 条、verified 15），/weekly/2026-10-19.html、10-18、10-16 三张全部 200（后两张此前在主站是 404），/agent/deepseek.html、/agent/chatgpt.html、/sitemap.xml、/index.html 全 200，/functions/v1/app?action=corrections 仍 200 且只有 09-22 那条旧建议 ⇒ 投票与纠错后端随全参数发布保住。至此主站自 10-15 晚件起连欠的 10-16 与 10-18 两批一次追平，主站／只读镜像／本地三方内容一致，无遗留待补批次。坑一条：主站 weekly 页返回 65,824 字节而本地同名文件只有 8,782 字节，差额来自平台注入的 watermark（内嵌 base64），核验 HTML 要比内容（标题里的日期、条目数）而不是比字节。本条补记发出后线上那条“发布状态”仍会滞后一格属已知自指，故 release id 的准确值只往这里记，不为对齐 ID 反复补发。",
      "傍晚基准重抓（同日第二轮）仍零变动：curl 一次拉通 131,410 字节，抓取件 md5 1e46a800c31b1e2a7d9768499ea6e26f 与今晨 09:39 那份完全相同；解析 335 个 tr、334 行，与早间快照文件 cmp 逐字节相同，源页表头仍 8 列（Model／Arena Elo／Coding／Vision／MII／ARC-AGI／Organization／License），MII 非空值按列位重数仍 235 个（早间脚本自报的 234 是索引映射写错，已用直接按列位计数复核并纠正）。故 arena.rows／benchmarks 的 elo／coding／aaii 与 scores.coding 一律不动，三戳已在早间同步到 10-19、本轮无需再改。",
      "纠错接口第三轮可直读且零新增：/functions/v1/app?action=corrections 返 200（161 字节），表内仍只有 2026-09-22 那条 perplexity Enterprise 档标注年付口径的旧建议。这条同时继续充当发布可行性判据——接口回 200 说明平台侧函数运行时（10-16 那次 /tmp No space left）正常，可以全参数发布。",
      "中转站傍晚双源核实（本日名额 2 家，全部用完）：① 云雾 API 第五次直抓——构建版本 20261018-160411→20261019-114428、start_time 1792382550＝今日 12:02 北京（正午重启），键集合 116→117 多出 tencent_captcha_app_id、captcha_type 由 click-shape 改 tencent 且 captcha_register_enabled 由 false 改 true（注册图形验证码被打开），在售清单由 378 条减为 376 条且减掉的正是 o1-pro 与 o1-pro-2025-03-19，全部倍率与计价字段零变动、另有 3 条模型失去“优质官转”类分组，公告仍 340 条停在 08-16、migration_* 五参数仍缺席；第三方 Help AIO 17:00 快照第九次列本站 24 小时可用率 0.00%（552 次探测），同页 19 站 0% 的仍是云雾／Undying／IKun Code 三家，其余 78.88%—99.73%。② 柏拉图 bltcy——版本 v4.9.56-v2→v4.9.61-v2、start_time 1792340951＝今日 00:29 北京，公告仍 16 条停在 04-24（10-18 的缩列没有回滚），清单仍 1,131 条无增无减但 11 条计价字段重排（grok-4 倍率 1.5→3 翻倍、gpt-image-2.5 与 grok 图片视频线单次价上下调、4 条在按倍率与按次之间切换、326 条 enable_groups 只是顺序差异）。两家的变化都只有运营方接口自证加一家第三方监测，检索“云雾 迁移／冻结”今日 0 结果，故判定与昨日一致：云雾维持暴雷／收缩级、不以接口 200 作可入驻依据，柏拉图维持“对个人新用户实际不可入驻的主动收缩”，是否改判都留周五全量。relayVerify 维持 15/36（两家 at 提到 10-19），种子区与 extra 三条一字未动。",
      "官方页傍晚复核：DeepSeek 定价页（api-docs.deepseek.com/zh-cn/quick_start/pricing，需跟随结尾斜杠重定向，直连返 302）与 OpenAI changelog（platform.openai.com/docs/changelog，实际落到 developers.openai.com）都拉通并做去标签文本比对——前者 26,182 字节／文本 1,883 字符、后者 540,128 字节／文本 61,546 字符，两者与昨日下午那份 md5 不同但文本层逐字相同，即两页自昨日以来没有任何新条目或价签（V4.1-Flash-1017、Search／Fetch 各 5 元／千次与 11-01 起按次收费的表述原样在位；changelog 最新一条仍是 10-16 的 prompt-to-voice 转正）。故 apiPrices、plans 与 priceHistory 一律不动。",
      "扫描累计 5 轮（早间 3＋傍晚 2）无一项过入库门槛，新增未入库理由三条：① 中新社 10-18 电讯转述 Artificial Analysis 测算“Kimi K3 输入 3 美元／输出 15 美元、平均每项任务成本 2 美元，对比 Claude Fable 5.1 输入 10／输出 50 美元、任务成本 7.63 美元”——同一电讯稿的多处转载（含两处内容农场抄稿）属单一来源且非月之暗面官方价签，按 GPT-5.6 Sol“单源无官方价签即搁置”的先例不入库，是否作为第三方任务成本口径单列交周五判断；② “快米兔 API”“apito.ai”等 10-19 CSDN／UC 号软文属站点自我宣传且不在本站种子与提报目录内，按铁律既不作独立来源也不建档；③ 检索云雾迁移／冻结与“AI 中转站 停服 2026 年 10 月”均无独立第二源，Help AIO 的 0% 仍只作触发器。另：CSDN 10-19 的企业选型稿所列“50+ 模型、GLM-5 至 GLM-5.3-Flash 全系”属聚合平台自述目录，与站内七维数据不同轨，不采。",
      "发布状态（傍晚轮，含发布后补记）：本会话这次 Sites 工具组是挂上的（47 个工具），且 get_local_context 直接返回 projectRoot=D:\\AI\\agent-intel 与站内绑定描述符（历史草稿 actionId 79b86d0c 仍在列），故按既定口径走本会话直发、不再用子会话绕法——连通性判据 get_site 也一次探通（lifecycle=active、runtime 68、active_release 01a151dc-…，即早间那条）。新 actionId cca56c1c-b72e-438d-8513-700c7dbd2592 按八参数原样 prepare_site（未传 spa）：首轮 descriptorStatus=pending 并提示保留同一 action 重试，第一次 get_publish_status 即 deployment.state=ready、canPublish:true，冻结件 502,413 字节、sha256 2655bfbd 开头，deploymentId 01a1536d-a565、verificationOperationId 01a1536d-a906、backendOperationId 01a0c9a8-f168（与 10-09 起以及今晨那轮同一枚，说明后端始终没丢）；publish_site 只传 actionId 得 publishOperationId 01a1536d-c8c8-7a0f-aee4-0cc507107659，返回体照旧没有结果字段，同 actionId 复查坐实 published:true、operation.committed:true、state=succeeded、result_release_id=01a1536d-c8c8-79cc-a67b-a8a462519acc，get_site 读 active_release_id 与 result_release_id 相等、runtime_version 由 68 跳 69，全程无 sites_request_failed／sites_function_deploy_failed。上线逐项实读：主站／只读镜像／本地三方 /data.js md5 全等（3f95f457e4e6f00e33ac804de6a345e1、382,407 字节；data.js 不注入 watermark，所以这一路可以直接比字节），三戳均 2026-10-19、rows 334、首行 Claude Opus 5.5 1526／1575／1320、weekly0=10-19、events 62，/arena.html 200 且 <tr>=335、首行即榜首，/rank.html 200 前 16 席与 benchmarks.models 逐席同序（0 处不匹配），/relay.html 200 表格行 48（口径仍是种子 33＋提报 3＝36 条、verified 15；随手写的 relayVerified=18 属正则过宽的旧坑，一律以 check-data 的 15 为准），/weekly/2026-10-19.html、10-18、10-16 三张与 /agent/deepseek.html、/agent/chatgpt.html、/sitemap.xml、/index.html 全 200，/functions/v1/app?action=corrections 仍 200 且表内只有 09-22 那条 ⇒ 投票与纠错后端随全参数发布保住。镜像侧由 post-commit 于 17:09 推成 MIRROR_PUSH_OK 95e99a9，本轮未手动推。本条是发布后的补记，故线上那条“发布状态”文本会仍停在傍晚这一格之前属已知自指，release id 只往这里记、不为对齐 ID 反复补发。",
    ] },
    { date: "2026-10-18", note: "周日日更，补 10-17/10-18 两日窗口（10-17 未跑）。基准重抓成功且抓到源页第二次结构变化——Arena+ 把 AAII 列整体换成 MII（榜单说明同步改写，定义不同），按 MMLU-Pro 那条既有口径处理：AAII 位留空、不把 MII 灌进去，同时逐值比对坐实 Arena Elo／Coding／Vision 三列对 329 个同名行零变动、行数 329→334（新增 5 行全在第 44 名之后，不动 16 席）；内容侧两笔官方可核——DeepSeek 定价页把模型版本改为 V4.1-Flash-1017 并首次列出 Search／Fetch 独立按次计费（5 元／千次，官宣 11-01 00:00 起对 Harness/Claude Code/Codex 的服务端调用收费），OpenAI 官方 changelog 记 prompt-to-voice 于 10-16 面向全部 API 客户转正；中转站无暴雷，但云雾第八次被第三方列 0.00% 且自家站名由占位符\"x\"改回\"云雾 API\"、柏拉图公开公告由 22 条缩为 16 条；纠错后端今晨已恢复 200 且无新增项（10-16 那笔 500 属平台侧磁盘耗尽，已自愈）", items: [
      "基准同步到 10-18：curl 一次拉通（131,410 字节原始件，比 10-16 的 130,022 多 1,388 字节），解析 335 个 tr、334 行、列形校验通过、未落入\"不是 300+\"的拒写区间。源页表头本轮为 8 列（Model／Arena Elo／Coding／Vision／MII／ARC-AGI／Organization／License），即 AAII 列被 MII 取代，页内说明同步改写为 \"MII — Model Intelligence Index, combining Arena Elo and Agent Intelligence (scored on real-world, multi-step workflows and coding tasks)\"，而 10-16 那份写的是 \"AAII — Artificial Analysis Intelligence Index aggregating 10 challenging evaluations\"——定义不同、不是改名。按 329 个同名行比对：149 行数值不同（差值 −13～+3，多数低 1～3，如 Claude Opus 5.5 由 58 变 56、Claude Sonnet 5.5 由 56 变 54）、81 行恰好相同、95 行两皆空、4 行旧列有值而新列为空，故不作同名延续，沿用 MMLU-Pro 缺席时的处理：AAII 位一律留空串，MII 的 235 个非空值另存 dev/_mii_2026-10-18.json 备查，产品榜 benchmarks.models 的 aaii 保留 10-16 末次读数并写明不代表今日核实。行数 329→334，新增 5 行按页面行序插入：Ling-3.1-flash（1485/1500，Ant/MIT）、Hunyuan-Hy4（1464/1468，Tencent/Apache 2.0）、Mistral Large 4（1448/1478）、K2-Horizon-375B-A23B（1420/1462）、Nemotron-3.5-Super-VL-120B-A12B（1416/1459），全部落在第 44 名之后，16 席席位与 elo/coding/aaii 逐值零变动、scores.coding 一律不动（榜首仍 Claude Opus 5.5 1526/1575/1320）；三列分数按名逐行比对为全等，唯一数值变动是 Gemini-4-Argon 的 ARC-AGI 由空补出 91.3，另有 11 行许可列写法规范化（10 行 Apache-2.0→Apache 2.0 加 Hunyuan-Hy3 由 Tencent 改 Apache 2.0）。三戳齐动：arena.fetchedAt 与 benchmarks.verifiedAt 因重抓成功提 10-18，meta.dataUpdatedAt 随内容核实提 10-18。",
      "DeepSeek 官方定价页 10-18 直读（26,182 字节，表格静态可读）三处结论：① 模型版本栏首次写 DeepSeek-V4.1-Flash-1017（V4 Pro 侧 DeepSeek-V4-Pro-0813），脚注原句为\"旧模型名 deepseek-v4-flash、deepseek-v4-flash-vision-exp 仍可调用，但对应模型已下线，请求将由 DeepSeek-V4.1-Flash-1017 模型提供服务，并按 Flash 价格计费\"——换底层不改名不改价，调用侧零改动；② 三档标价与 10-09/10-15 两次抓取逐值一致（Flash 缓存命中 ¥0.02 闲时／¥0.04 峰时、未命中 ¥1／¥2、输出 ¥4／¥8；V4 Pro ¥0.15／¥0.30、¥4.5／¥9.0、¥13.5／¥27.0，并发 2500／500），故 apiPrices 两行、plans 三档与 priceHistory 一律不动，本次不是调价事件；③ 首次把 Search 与 Fetch 列为独立 API 各 5 元／1,000 次成功请求（失败／空结果／超时不计费），并写明当前经 DeepSeek Harness／Claude Code／Codex 的服务端工具调用\"目前未计费，并将于北京时间 2026 年 11 月 1 日 00:00 起按次收取调用费用\"——这是已官宣日期的新增成本项，按次与按 token 不同轨故只入档案 apiNote 与 events，媒体所称\"单任务成本 3~4 元降至 1~2 元\"与 DeepSWE 77.0%／Terminal-Bench 42.3 属第三方实测与官方基准混合口径，不采为数据。档案动作：deepseek.verifiedAt 提 10-18、apiNote 补上述三项，events +1（2026-10-17）。",
      "OpenAI 官方 API changelog 直读（platform.openai.com/docs/changelog 已 301 迁至 developers.openai.com/api/docs/changelog，540,112 字节）：10-16 条目 Released prompt-to-voice for all API customers，创建自定义音色免费、语音生成仍按常规 GPT-Live 会话计费，同条新增九款自然音色（Nuri/Juni/Flitz 德、Brise/Sillage 法、Nira 印地、Harema/Shida 日、Noeul 韩），涉及 gpt-live-1 与 v1/audio/voices、v1/live/sessions；10-15 条目在 GPT-Live 里加入原生 Decisions 集成，即 10-06 上线的 Decisions API（gpt-6-luna）可被 Live 直接调用。两条只给计价规则不给价签，故 chatgpt 档位价与 Ultrafast 档结论不动，语音侧不做分钟价（与 xAI Grok Voice 3.0 的 $0.08/分不同轨道）；chatgpt.verifiedAt 提 10-18、apiNote 补记，events +1（2026-10-16）。同页 10-14 至 10-18 没有任何\"GPT-5.6 Sol 再降 20%／优惠维持至 11-21\"的条目，该说法继续按单源媒体口径搁置。",
      "中转站维护结果：种子两个上游文件重抓后与本地 md5 完全相同（providers.yaml 6b5e583d…、prices.latest.json d42fa4b6…，28,572／1,706,113 字节），last_reviewed 仍 2026-07-12、snapshot_date 仍 2026-08-16，故未跑 gen-relay、种子区零改动。第 2c② 双源核实两家并把 relayVerify 的 at 提 10-18：① 云雾自家 /api/status 446,437 字节、构建 20261016-072806→20261018-160411、start_time 跳到今日 16:39 北京，除 start_time／system_name／version 三项外 113 键逐值未变，migration 五参数仍不在（键数仍 116、全文仍无 migration/freeze/openlux 三串）、公告仍 340 条停在 08-16、/api/pricing 仍 378 条与 10-16 逐条相同（新增 0 下架 0、gemini-4-argon 仍不在）；本轮新事实是 system_name 由 10-13 起的占位符\"x\"改回\"云雾 API\"，而第三方 Help AIO 17:17 快照第八次把本站列为 24 小时可用率 0.00%（有效探测 558 次）——改回本名与当初摘参数一样只是运营方自证，既无配套公告也无兑付证据，故既不读成解冻／迁移完成，也不读成恢复营业，暴雷/收缩级判定与\"接口 200 不等于可入驻、持有余额停止充值并导出记录\"的用户侧结论不变。② 柏拉图自家 /api/status 仍 200（14,086 字节、83 键、v4.9.56-v2），但公告由 10-09 的 22 条缩为 16 条、最新一条从 06-02 退回 04-24（那条原文写\"平台将停止运营…自 2026 年 5 月 1 日起全部 API 接口停止服务\"），本站 10-04/10-09 所引 05-09/05-11/05-30 三条今日已不在返回里、无法逐字复核；同期 enable_online_topup 仍 true、quota_for_new_user 仍 100000、/api/pricing 仍 200（440,885 字节、1,131 条），检索未见 10 月内任何独立第二源把本站列入异动（种子条目仍标 active·2026-06-07、比价站 lmspeed 的本站记录停在 05-02）；故定性维持\"对个人新用户实际不可入驻的主动收缩\"，只把取证缺口如实标注并交周五改判。同页其余：SSSAiCode 由 10-16 晨 68.84% 回到 99.82%、Packy Code 96.22%→83.99%（今日最大跌幅）、TimiCC 93.51%→89.45%、CPass 84.84%→81.66%、Undying 0.00%/559、IKun Code 0.00%/1,117 连续第三次归零——后两站与 Packy Code 均不在本站种子与提报目录内且属单一第三方源，一律只列观察、不建 events。relayVerify 由 15 条中的 2 条更新（yunwu、bltcy），总数维持 15/36、extra 三条（omwai/yiqinuo/rvrcc）只读未动。",
      "纠错通道已恢复且无新增项：/functions/v1/app?action=corrections 本轮返 200（161 字节），表内仍只有 09-22 那条 perplexity 旧项（Enterprise 档价格建议标注年付口径），距上次读取零新增，故第 1 步无需改动任何条目。这条同时是发布可行性的判据——10-16 主站两次发布失败与当时该接口 500（平台侧函数运行时 /tmp No space left on device）同根因，今日接口回 200 说明运行时恢复，故本轮按当期源码新建 action 全参数发布。",
      "未入库（来源门槛或口径不符）：① Replit CEO Amjad Masad 10-16 在 TechCrunch Disrupt 称已停用 Anthropic 模型、全面转向 OpenAI 的 Sol/Astra（smzdm／CSDN 日报／网易快报多源转述但同出一场演讲，属单一发言人），无价签且不影响站内席位，暂不入事件；② Perplexity 发布 pplx-decider-v1.2 与 pplx-decider-flash-v1.2（270 亿／40 亿参数决策模型，称提供 API 与权重）只见 UC 早报与搜狐同稿，未见官方公告页，且本站 perplexity 档案的 Enterprise 价口径尚有 09-22 未结纠错项，列周五复核；③ 腾讯混元 Hy Memory 2.0 三层开源（10-16，Hy-Memory-30B-A3B／框架／MemHub，称 Apache 2.0）与 Hy3 正式版接入 WorkBuddy/元宝/ima（限免两周）均只有聚合稿与转述页、未见混元官方页直读，④ Meta 816B Muse Spark Open 权重、⑤ 华为云 AI 使能服务 11-16 起调价（非 Agent 主价）同因单源不入库；⑥ \"GLM-5.5 传 1T+ 参数\"、\"OpenAI 泄露 gpt-6-astra-api-priv-ev3 私版 20 分钟下线\"均属传闻／单源截图，按铁律不写；⑦ 商务部与科技部拟在禁止出口技术目录增列约 23~40 项 AI 技术（两稿口径数不一，且仍为草案公示）本轮不入库、列政策观察。",
      "留给周五全量：① AAII 列是否整体改名 MII（这是结构变更：表头写死在 public/index.html 与 dev/gen-landing.mjs，还要决定 MII 的 235 个值进不进产品榜与七维性价比维，以及 benchmarks.models 的 aaii 是否作废）；② Mistral Large 4（1448/1478）与 Hunyuan-Hy4（1464/1468）、Ling-3.1-flash 是否建档入产品榜——今日只按行序入基准表、未动 16 席；③ 柏拉图公告被缩列后是否把\"主动收缩\"改判；④ 云雾与 OpenLux／IKun Code 是否收录或升级观察；⑤ Perplexity 决策模型待官方页可核后是否入 events，以及 09-22 那条 Enterprise 年付口径纠错如何落进档案；⑥ Grok 的 vendor 是否随\"SpaceXAI 更名\"媒体口径调整（昨留）；⑦ GLM-5.3-Flash 限时五折与 docs 页标准价对齐后进不进 priceHistory（昨留）；⑧ Flash 线与 Argon 两段到期日要不要进七维（昨留）；⑨ DeepSeek Search／Fetch 11-01 起计费要不要在 billing 口径里单列\"按次费用\"，届时须复查 Harness/Claude Code/Codex 三条链路的实际账单。",
      "发布状态（本轮）：纠错接口今日回 200 后按当期源码新建 action 走全参数发布（webDirectory=public、functionDirectory=functions、databaseAccess=read_write、requiredSchemaVersion=2、不传 spa），发布结果与上线逐项核验见本会话简报；若主站仍落后于本地，则以只读镜像顶班并在下一轮继续追平（10-16 那次因平台侧函数运行时磁盘耗尽连续失败两个 action，已记入前一条 weekly 项）。",
    ] },
    { date: "2026-10-16", note: "日更：基准抓到真实变动——Arena+ 源页 4 行改值，GLM-5.3 与 Step-5 互换行序且把两家的显示 Elo 对调（1506/1505），产品榜第 8、9 席按页面行序随之对调（属调行序不是重排），编码分两席都保持 9.2 不变；内容侧三笔——DeepSeek 10-15 中断 4 小时 52 分并首次给出全量赠金赔付条款（财新＋潮新闻/澎湃两线来源）、xAI 的 Grok Voice 3.0 按分钟计价 $0.08 与上代持平（IT之家＋环球网两源）、云雾 API 今晨构建把冻结与迁移五键整体摘掉而没有任何配套公告（按\"既不读成解冻也不读成迁移完成\"处理）；另记纠错后端今晨返 500（平台侧 tmpfs 磁盘满，非发布参数丢失）", items: [
      "基准同步到 10-16：curl 首次尝试因 TLS 握手失败（schannel unexpected eof）、第二次重试即拉通，抓取件 130,022 字节（比 10-15 的 130,024 少 2 字节），解析 330 个 tr、329 行、列形校验通过且行数未落入\"不是 300+\"的拒写区间；源页表头本轮为 9 列（MMLU-Pro 整列在页面里继续缺席，全文 MMLU 命中 0），故按站内 9 字段契约在该位补空串写入。与站内 10-15 快照逐行比对共 4 行变化：① 数据行 18 由 Step-5 变 GLM-5.3（Elo 1506、Coding 1560、AAII 45、ARC-AGI 65.8、Z.ai/MIT），② 数据行 22 由 GLM-5.3 变 Step-5（Elo 1505、Coding 1560、AAII 44、ARC-AGI 空），即两行互换位置且把 1506/1505 这组显示值对调，③ Gemini-3.8-Flash 行 AAII 由 45 降 44（该行不在 16 席内），④ 数据行 43 的 Muse Spark 改名 Muse Spark Open 并把许可列由 Proprietary 变 Muse、AAII 40 降 39。席位影响：benchmarks.models 第 8、9 席按页面行序对调为 GLM-5.3（elo 1506）在前、Step-5（elo 1505）在后，两家 Coding 均 1560 故 scores.coding 换算 (1560−1300)/28.2 仍 9.2、其余 14 席逐值未动；16 席行号严格递增复校通过，榜首仍 Claude Opus 5.5（1526/1575/1320）。三戳按纪律全部对齐 10-16（meta.dataUpdatedAt／arena.fetchedAt／benchmarks.verifiedAt）。",
      "DeepSeek 10-15 中断与赔付入档（两线独立来源）：财新 10-15 两稿依官网状态页给出 8:11 起 V4 Pro API／V4.1 Flash API／对话服务陆续中断、9:08 对话完全中断、13:04 解决、全程 4 小时 52 分，并统计 9 月以来 13 次故障（4 次涉及网页与 API 部分中断）；科创板日报同稿系时间线；补偿条款由潮新闻（澎湃同稿）与新浪财经全文引述开放平台\"服务恢复及补偿通知\"——按账号 7 日内（10.8-10.14）消耗金额以赠金形式全额返还、赠金自动到账、API 扣款先从赠金扣除。判读：这是故障赔付而非调价，站内三档标价与峰谷计费一律不动；\"全年 44 次故障\"只有聚合稿口径、与财新 13 次不同轨，故只采财新口径；官方未公开根因（算力调度/单点故障属外界猜测），不入结论。档案动作：deepseek.verifiedAt 提到 10-16、apiNote 记原文、weaknesses 增\"稳定性欠账\"一条。",
      "xAI 发布 Grok Voice 3.0（IT之家经网易 10-15 08:30 ＋ 环球网经搜狐 10-15 10:31 两源同录 $0.08/分钟＝$4.8/小时、与 2.0 持平；CNMO 补 Artificial Analysis Speech-to-Speech Index 86.9 首参即第一，GPT-Live-1 Astra medium 83.2、Gemini 3.8 Live 82.6、自家 2.0 为 81.3）：grok-voice-latest 别名自动迁移、2.0 退役，官方自述特斯拉车内每日数百万次对话、星链客服日均约 2 万通来电约 70% 无需人工。处理口径：语音按分钟计价与站内按 token 的价签不同轨，故写进 grok 档案 apiNote 与事件、不进 apiPrices 的输入/输出对比，档案 verifiedAt 提到 10-16。署名歧义单列：新浪科技/网易/东方财富/亿欧写发布主体为\"SpaceXAI\"，搜狐与 Zaker 更写\"前身为 xAI、2026-02 被 SpaceX 收购、7 月更名\"，而 IT之家与 CNMO 仍写 xAI，未见官方改名公告可核，故 vendor 字段维持 xAI、此项交周五复核。",
      "云雾 API 出现反向异动且不按\"解冻\"解读：今晨 /api/status 446,428 字节、构建版本 20261013-200904 → 20261016-072806、start_time 跳到今晨 07:34 北京，键数由 119 减为 116，减掉的恰是 migration_freeze_enabled／migration_target_url／migration_exchange_rate／migration_repopup_hours／migration_retention_date 五条（整份原文里连 migration、freeze、openlux 三串都不出现，只有 zhongzhuan 仍在 server_address_arr 与 server_status_url），同时新增 organization_enabled 与 skills_hub_enabled 两条。这次先列 Object.keys 再对全文 grep，坐实是配置整体摘除而非上两轮那种键名误读。判读：① 不能读成解冻——公告仍 340 条且最新停在 08-16，冻结与解除都没有配套公告；② 也不能读成迁移完成——第三方 Help AIO 09:06 快照第七次列本站 24 小时可用率 0.00%（554 次；七次为 10-09/560、10-10/552、10-13/558、10-14/554、10-15 09:04/554、10-15 17:04/554、10-16 09:04/554）；③ 在售清单无反续（/api/pricing 仍 378 条、与昨晚逐条相同、新增 0 下架 0，gemini-4-argon 今晨仍不在表内）。暴雷/收缩级判定维持，可执行结论不变：不以接口 200 作可入驻依据、已持有余额者停止充值并导出记录。",
      "同页监测序列两处值得盯：IKun Code 由 10-15 傍晚 29.58% 直接归零（0.00%、1,109 次探测）为连续第二日恶化，Undying 亦 0.00%（555 次）；SSSAiCode 由 66.02% 微升到 68.84%、榜首 Muze 99.19%、Micu 98.65%、Yes Code 97.66%。两站（IKun、Undying）都不在本站种子与用户提报目录内，且属单一第三方源，一律只列观察项、不建 events、不作收录依据。",
      "中转站维护结果：种子两个上游文件（providers.yaml 28,572 字节、prices.latest.json 1,706,113 字节）重抓后与本地逐字节相同、last_reviewed 仍 2026-07-12 且 snapshot_date 仍 2026-08-16，与 relay.seed 所记一致，故未跑 gen-relay、种子区零改动。第 2c② 双源核实两家：云雾按上述完成复核并把 relayVerify 的 at 提到 10-16（判定不变、依据改写）；QuickSilver Pro（种子内 unverified 且有公开 pricing 接口）本轮首核未成——其 https://quicksilverpro.io/pricing.json 返 200（55,876 字节、catalog_version 59、currency USD、updated 2026-10-15、首页亦 200），但按铁律\"站点自家价目文件只证明站活着、不构成独立第二来源\"，检索未见社区实测或媒体报道作第二源，故不写入 relayVerify；wappkit 第二源仍缺。relayVerify 维持 15/36、extra 三条（omwai/yiqinuo/rvrcc）只读未动。",
      "纠错通道本轮读不到（后端故障，非发布问题）：/functions/v1/app?action=corrections 于 09:00 与稍后两次均返 500，返回体为 InvalidWorkerCreation: worker boot error: could not create a temporary directory for tmpfs: No space left on device (os error 28)，与 09-30 那次同症状、属平台侧主机磁盘耗尽，而不是参数丢失（参数丢会返 404）。因此本轮无法判定是否有新增纠错项，第 1 步按\"未读取到\"记录；静态页与 /data.js 不受影响，稍后按常规复查。",
      "发布状态补记（主站未发出去，镜像已顶班）：本轮 Sites 工具组在本会话正常挂载、get_site 探活通过（runtime_version 64、active_release_id 01a13eda-6c6e-7214-a938-4f3e7c5e361b），故没有再走子会话绕法，直接以新 actionId 7ab23380-6b4e-42bd-a2b7-113d97fb1820 按八参数原样 prepare_site（webDirectory=public、functionDirectory=functions、databaseAccess=read_write、requiredSchemaVersion=2、未传 spa）；首轮 descriptorStatus=pending，轮询同 actionId 即 canPublish:true 且 deployment state=ready（冻结件 462,334 字节、sha256 56cdfdb7 开头）。publish_site 只传 actionId 后，同一 publishOperationId 01a1424d-29d9-7780-9ce5-c599cf1b95a4 的 list_operation_steps 显示 prepare_backend 五步全报 sites_function_deploy_failed，复查 operation state=failed、committed=false、result_release_id 空、get_backend 仍 status=ready（database/functions/storage 三项能力都在）。判读：与本晨纠错接口 500 同根因——平台侧函数运行时 /tmp 磁盘耗尽（No space left on device, os error 28），既起不了新 worker 也部署不了新函数版本；不是本地包超限，也不是参数丢（参数丢会返 404）。处理：按纪律保留该 actionId 与已上传的不可变草稿，不新建 action 来绕过，也不删 functionDirectory 做静态发布（那会把投票与纠错后端发丢）。后果与兜底：主站仍跑 10-15 晚件（/data.js 322,026 字节、dataUpdatedAt=2026-10-15、/weekly/2026-10-16.html 返 404），本次失败没有冲击在跑的版本，其余静态页全 200；post-commit 于 09:20 推镜像成功（MIRROR_PUSH_OK 73b6c9e），线上镜像 /data.js 339,062 字节与本地逐字段相同（dataUpdatedAt=2026-10-16、arena.fetchedAt=2026-10-16、relayVerify.yunwu.at=2026-10-16、rows 329）、/weekly/2026-10-16.html 200、arena.html <tr>=330、rank 第 8 席已是 GLM-5.3、relay.html 表格行 48，故今日已核实的内容用户可经只读镜像读到。下一轮：平台恢复后先用同一 actionId 重试 publish_site 并按同 actionId 复查（发布返回体本身不带 published 字段）；若同一 action 仍只回这个已 failed 的 publishOperationId，则按\"内容未变但前次结局确定失败\"另建 action 重推同一份源码。执行结果（同日补记二次尝试）：按上述对 actionId 7ab23380 再发一次 publish_site，返回的仍是那个已 failed 的 publishOperationId 01a1424d（同 action 不可复用），于是把补记后的源码另建 actionId 6e20c2ae-b42c-44b1-b7a2-93adc7c8d87b 重推——prepare_site 八参数原样、首轮 descriptorStatus=pending、同 actionId 轮询即 canPublish:true、deployment state=ready、verificationOperationId 01a14252-03d0-75fa-8074-5025b486da38 state=succeeded、冻结件 464,578 字节，publish_site 拿到全新 publishOperationId 01a14252-3172-71c2-82c4-a76e94908dd0 却先 waiting_retry 后 failed，错误码依旧 sites_function_deploy_failed；同时段线上 /functions/v1/app?action=corrections 仍 500。结论：两个 action 都已终态失败、平台侧函数运行时的 /tmp 磁盘没腾出来之前任何全参数发布都过不去，故保留 6e20c2ae 草稿（其冻结件为补记首版源码，比本轮最后这段记述少一次补记，正式发时仍以当期源码新建 action）不再空转重试；明晨的判据改为先看纠错接口是否回到 200——只有它 200 才说明函数运行时恢复，届时按当前源码另建新 action 发布；若线上 /data.js 仍停在 10-15 而镜像已是 10-16，属\"主站欠发布、兜底顶班\"，不算当日空窗但要继续追平。",
      "未入库（来源门槛或窗口不符）：① 智谱官方 bigmodel.cn/pricing 的 FAQ 写 GLM-5.3-Flash 限时五折 0.4/1.4 元、标准价 0.8/2.8 元，而 docs.bigmodel.cn 定价页只列 0.8/2.8 与\"限时免费\"缓存存储——两页折扣口径不一致、且页面快照日期为 10-11/10-14（窗口外），GLM-5.3-Flash 也不在 16 席内，交周五按官方两页对齐后再决定是否进 priceHistory；② 豆包\"153 款应用拒绝接入\"（极客头条 10-15）与站内已入库的\"150 余款/151 款\"是同一条 SAEP 清单的不同计数口径，属单源且数字口径待对齐，不重复入库；③ 基元律动（Token Rhythm）10-15 经澎湃宣布入驻开发者破 30 万并上线双 11 充值福利，属中转/聚合类平台动态，单源且不在目录内，列周五建档候选；④ 欧盟 AI 办公室首次就安全事故对 OpenAI 与 Anthropic 启动调查、美国 8 州起诉 OpenAI（聚合稿 10-16 00:01），本轮只见聚合转述、未见原始公告，暂不入事件；⑤ Google Research@ 活动称用 Gemini 4 Argon 做核聚变反例/五种新酶/量子纠错，属官方能力宣传而无价签或席位变化，不入库。",
      "留给周五全量：① 元器七维分是否下调、是否退出产品榜；② OpenLux 是否进中转目录（含它是否只是 new-api 代售站），以及云雾迁移键被摘除后是否要把该站状态由 verified 改判；③ Meta Muse Wonder 是否建档（今日其 Muse Spark 行改名 Muse Spark Open、许可列变 Muse，与 10-14 记的 Muse Code/Muse 应用分档口径需一并对齐）；④ Grok 的 vendor 是否随\"SpaceXAI 更名\"媒体口径调整，需官方可核；⑤ GLM-5.3-Flash 限时五折与 docs 页标准价对齐后进不进 priceHistory；⑥ Flash 线与 Argon 的两段到期日（12-31/01-01 与 11-30/12-01）要不要进七维性价比维；⑦ IKun Code 与 Undying 连续 0% 是否构成收录或观察升级；⑧ wappkit 与 QuickSilver Pro 的第二源补齐后 relayVerify 才可能超 15/36；⑨ DeepSeek 赔付条款是否需要在 billing 口径里单列\"故障赠金\"说明。",
    ] },
    { date: "2026-10-15", note: "日更：基准 329 行仅 1 格补值（Claude Haiku 5.5 的 ARC-AGI 空→61.3，非站内席位，16 席数值与行号零变动），内容侧六笔——云雾 API 冻结字段名自纠（10-13/10-14 两轮的\"freeze 新增/消失\"都是读错键名）、ChatGPT 档案补官方模型页的 272K 长上下文加价阈值、千问办公电商版、豆包手机 SAEP 拒绝清单、阶跃 STEPX Neo 软硬模全栈定价、Anthropic 官宣自研版本控制系统 Scion；傍晚同日第二轮再补一笔——官方定价页第三次尝试终于直抓成功，Argon 与整条 Flash 线的两段价（11-30/12-01 与 12-31/01-01）全部由官方坐实，站内\"待官方页复核\"的保留意见撤销", items: [
      "基准同步到 10-15：Arena+ 页面直抓 130,024 字节（较 10-14 抓取件多 17 字节），解析 330 个 tr、329 行、列形校验通过；与站内快照逐值比对唯一变化是 Claude Haiku 5.5 行第 7 列 ARC-AGI 由空串变 61.3（该行现为 Elo 1501／Coding 1538／AAII 43／ARC-AGI 61.3），既无新增也无删除、索引位移 0 次；Haiku 5.5 不在 benchmarks.models 的 16 席内，故席位值一律不动、scores.coding 无一重算（换算仍 (Coding−1300)/28.2、0-10 一位小数）；16 席行号 [1,2,5,13,15,16,18,19,23,28,46,50,66,86,92,96] 严格递增，榜首仍 Claude Opus 5.5（1526/1575/1320），源页日期标签仍为 2026 Oct 12；第 6 列 MMLU-Pro 仍整列缺失、238 格保持空串，arena.note 的 ⚠ 提示继续由 index.html 与 gen-landing 双宿主渲染。三戳按纪律全部对齐 10-15（arena.fetchedAt／benchmarks.verifiedAt／meta.dataUpdatedAt）。",
      "云雾 API 条目自纠（本轮最重要的一笔）：把 10-09／10-13／10-14／10-15 四份 /api/status 快照按键逐项回读后确认，返回体顶层从来没有 freeze 这个键，真实字段是 migration_freeze_enabled=true，且它与 migration_target_url=https://api.openlux.ai、migration_exchange_rate=13.6、server_address_arr 指向\"空白反代\"api.zhongzhuan.chat、migration_repopup_hours=24 一样，自 10-09 那次抓取起就全部在场——站内 10-13 事件写的\"新增 freeze=true\"与 10-14 relayVerify 写的\"freeze 字段已读不到、疑似改版把冻结标记摘掉\"，两轮都是字段名误读，本轮同时更正事件与档案两处；10-13 的真实异动只有 system_name 由\"云雾 API \"改为\"x\"、构建版本 20260918-152544→20261013-022518、start_time 重置三项。判定方向不变且依据更硬：冻结+迁移参数连续七日在场，第三方 Help AIO 快照 10-15 09:04 第五次列 0.00%（554 次；五次 10-09/560、10-10/552、10-13/558、10-14/554、10-15/554），同页 19 站仅本站与 Undying 归零，其余 17 站在 59.55%-97.03%。自家 /api/pricing 仍 200（289,034 字节、384 条倍率、表内仍无 gemini-4-argon）。",
      "ChatGPT 档案补官方阈值（官方单源即可入库）：10-15 直抓 platform.openai.com/docs/models/gpt-6.1-sol（449,084 字节，正文与价目可静态读）——上下文窗口 1,050,000、最大输出 128,000、知识截止 2026-04-30；输入 $2.00／缓存输入 $0.10（页面写明为未缓存价 5%）／缓存写 $2.50（1.25 倍）／输出 $10.00，Fast 2 倍、Batch 与 Flex 半价、Ultrafast 6 倍、区域处理加 10%，与站内 09-30、10-09 两次定价页抓取逐值一致；新增原文规则\"Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output for the full request\"，即站内此前只记了换算值 $4/$15、今日补上 272K 阈值与\"整单加价\"的适用范围。同批两源媒体（新智元 10-12/13、36 氪 10-13 转载）报的\"Codex 与 ChatGPT Work 默认上下文 272k→500k、订阅额度免长上下文附加费\"属订阅与产品默认值层变动，与 API 侧仍在的 272K 加价不冲突，档案里两侧口径分开写、不当作 API 降价。",
      "阿里 10-14 发布千问办公电商版（时代周报稿经新浪财经 10-14 20:29 转载 + 证券日报网 10-14 20:32 稿两源一致，每经 10-15 早参第三源）：集团副总裁、千问办公 CEO 陈宇森宣布开启邀测、称一到两周内全量；非独立 App，在千问办公内切\"电商经营\"模式；四项专业功能（跨平台经营看板／趋势洞察及卖点分析／爆款素材批量生成／跨平台 ROI 智能优化），已接入生意参谋、有赞、千牛；定位\"独立第三方电商 Agent\"、对所有平台与商家开放。因发布会无任何可核价签，档位价一律不动，只在会员档注里记此条并纠正多篇转载稿\"独立 App\"的写法。",
      "豆包手机助手生态限制入档（每经 10-15 早参 + 东方财富 10-15 稿两源一致）：10-14《屏幕自动化操作声明协议》SAEP 30 天公示期结束，官方公开拒绝被操作的应用清单 150 余款（UC 稿记 151 款），含 65 款腾讯及关联生态应用（微信、QQ、王者荣耀等）、23 款阿里及关联生态应用（淘宝、千问、支付宝等）与 DeepSeek、Kimi、拼多多、小红书、快手系列、美团系列、工行等；第二代豆包手机 NaviX Ultra 的\"操作手机\"能力以 Beta 开放（9-16 发布、起售 5999 元、国补后 5499 元）。写入 access.note，属可用性而非价格变动。",
      "阶跃 10-13 发布 STEPX Neo 先行版（财闻 10-14 稿经新浪/同花顺两平台一致 + 中国经营报系网易 10-14 稿 + 雷递网东财 10-14 稿）：首创\"软硬模\"全栈定价 3999 元（16GB+256GB，国补后 3499、EET-China 口径），一次性打包手机+Step AOS 1.0+Step Studio+Step 系列模型权益，购机送连续 12 个月、每月百亿 Token 的 STEPX Token Plan；10-13 21 时预售、10-16 10 时 13 分首销。续费单价官方未公布（EET-China 亦列为待观察），故只记赠送口径、与站内 Step Plan ¥49-¥699 四档不同轨、不动数。",
      "Anthropic 10-13 工程博客官宣自研版本控制系统 Scion（官方单源，10-15 直抓 161,623 字节、页面标 Published Oct 13, 2026、datePublished 2026-10-13）：单体仓库日均合并由 2026-05 的约 2,500 次涨到 9 月的逾 30,000 次（官方口径为\"每日合并量增长 10 倍\"），源控制成最大瓶颈，官方原句记\"A team of seven people built both Scion and Antique ... and fully migrated to them in five months\"（7 人小团队 5 个月做出两套系统并完成全量迁移），同期交付代码评审界面 Antique、代码搜索与源控制权限（IAM）系统。上一轮因只见聚合器转述而排除，本轮以官方博客补足来源后入库；纯工程与产能信号，不涉及价与席位。同日 /news/2026-usage-policy-update 的 datePublished 为 10-08（媒体 10-14 才转述），窗口外且属使用规范，不入库。",
      "Gemini 档案推广期截止细化：钛媒体 10-14 早报与 36 氪稿源（今日头条 10-15 00:07 AI 早报 Top①）两源同写 Argon 推广价\"每百万输入 $2／输出 $10 持续至 2026-11-30、之后价格翻倍\"，昨日只记到\"11 月底\"，今日收成具体日期，常规价 $4/$20 由单一媒体推导升为两源一致但仍非官方口径；官方定价页今日仍抓不通（ai.google.dev/gemini-api/docs/pricing?hl=en 两次落入重定向循环，curl exit 47、仅 508 字节，与昨日 exit 56 两种失败形态），$2/$10 与 11-30 继续标\"待官方页复核\"。基准侧 Argon 行零变动（第 2 席 1525/1570/1318/53，编码分 9.6）。",
      "中转站维护结果：两个种子源文件今日重新直抓并与站内快照比对——providers.yaml（28,572 字节）与 prices.latest.json（1,706,113 字节）均 UNCHANGED，last_reviewed 仍 2026-07-12、snapshot_date 仍 2026-08-16，故按规则未跑 gen-relay、种子区零改动；relay.extra 用户提报区只读未动。逐家双源核实本轮做 1 家（云雾深度复查＋自纠）：wappkit 的第二独立源仍未果——公开社区目录 frank36512/aiapi 今日直抓 21,543 字节、检索无 wappkit 条目，而它自家 /api/pricing 虽 200 但仅 2,437 字节、6 条倍率、分组只有 Codex-Pro(救急)，按\"站点自家接口只证明活着\"的规则不构成第二源，故不写 relayVerify；OpenLux 虽已把构建版本推到 20261014-182244、公告 383 条并上架 gemini-4-argon，但不在种子与提报目录内，收录判定留周五。relayVerify 维持 15/36（仅 yunwu 的 at 改为 10-15）。",
      "纠错通道：/functions/v1/app?action=corrections 200（161 字节），仍只有 2026-09-22 的 perplexity 旧项，本轮无新增待处理项。",
      "未入库（来源门槛或窗口不符）：Anthropic 10-14 在旧金山办 Pre-IPO 投资者日、首次披露 Q3 营收、目标估值约 2 万亿美元（财联社/头条/百家号多源）属融资动态、非产品与价格情报；DeepSeek 融资扩至千亿、阶跃 C 端\"GLM-5.3-Highspeed 490 tokens/s 灰度\"（网友晒图单源）、maomaoailab 10-12 的 OpenAI 三档每美元 token 拉平说、以及 4 月 100 美元 Pro／6 月集体诉讼等旧稿，均按单源、聚合器或窗口外排除；腾讯 QClaw 12-24 停运经检索确为 09-24 公告（第一财经/封面新闻/网经社多源），发布日在窗口外且 QClaw／WorkBuddy 均不在站内目录，作为建档候选交周五。",
      "傍晚增补（同日第二轮巡检，17:0x 起）：① 本窗口最大一笔——谷歌官方定价页第三次尝试直抓成功（ai.google.dev/gemini-api/docs/pricing?hl=en，257,372 字节、90 张表，比 10-04 那次的 255,881 字节多出 Argon 条目），Gemini 4 Argon 价签首次由官方可核且写成两段价（输入 $2.00→$4.00、输出 $10.00→$20.00，页面原句 \"through November 30, 2026 / starting December 1, 2026\"；缓存 $0.10→$0.20 并注 Implicit caching only；Batch 与 Flex $1.00/$5.00→$2.00/$10.00；Priority $3.60/$18.00→$7.20/$36.00；免费层各档 Not available）。同页另有一笔站内此前完全没有的：整条 Flash 线排定 2027-01-01 翻倍——3.8 Flash 与 3.6 Flash 标准档 $0.75/$3.75→$1.50/$7.50、Batch/Flex/Contributor $0.375/$1.875→$0.75/$3.75、Priority $1.35/$6.75→$2.70/$13.50、缓存 $0.075→$0.15、存储 $0.50→$1.00 每百万 tokens 每小时，而 Flash 的免费层是 Free of charge。据此把 gemini 档案 apiNote、weaknesses 与 apiPrices 三处从\"媒体口径＋待官方页复核\"改为官方可核，撤销上一轮\"常规价属单一媒体推导\"的保留意见，events 加 10-15 一笔（现 58 条）；两档到期日不同说明优惠按模型分别排定，不是全站统一调价。② 云雾傍晚两条新异动：/api/pricing 在售条目 384→378，减掉的正是整条可灵视频线 5 款加 deepseek-v4-flash-0731（新增 0，argon 仍不在表内），属运营方接口自证的当日清单收缩；/api/status 的 119 个键里只有 start_time 变（1791893476→1792038105，即 10-13 20:11→10-15 12:21 北京，今日中午重启过一次而构建版本 20261013-200904 与冻结迁移参数逐字未变、公告仍 340 条停在 08-16），Help AIO 17:04 第六次列本站 0.00%（554 次探测）。迁移目标 OpenLux 同日 12:40 也重启过一次（119 键只变 oauth_allowed_origins 与 start_time，版本 20261014-182244、公告仍 383 条、最新仍是 10-14 01:37 的\"模型上架：gemini-4-argon\"），两站同日内相继重启与迁移切换叙事相符，但不构成暴雷证据。③ 基准第二次重抓 130,024 字节与晨间抓取件逐字节相同、329 行逐值零差异，三戳本已是 10-15 无需再动。④ 中转站两个种子源文件傍晚重抓仍 UNCHANGED（28,572 与 1,706,113 字节、last_reviewed 07-12、snapshot_date 08-16），继续不跑 gen-relay、种子区零改动；wappkit 第二源本轮未再试，relayVerify 维持 15/36。⑤ 纠错接口 200/161 字节仍仅 09-22 旧项，无新增待处理。⑥ 未入库再记两笔：澎湃 10-15 稿所称\"Anthropic 先向创业公司提供免费一年 Claude Team 并附赠 1,000 美元额度\"属单源转述、官方页未见；同稿称 OpenAI GPT-5.6 系列优惠\"至少维持至 11-21\"，而 10-15 直抓的官方 Sol 模型页通篇没有该日期与促销价签（只有导航一处 Promotions 字样），一律不写；同稿复述的 272K 加价与站内当日记录一致，属二次印证。",
      "留给周五全量：① 元器七维分是否下调、是否退出产品榜；② OpenLux 是否进中转目录（含它是否只是 new-api 代售站）；③ Meta Muse Wonder 是否建档；④ 元宝企业版 Token Plan 卡位与价格配对仍未打通；⑤ Argon 常规价 $4/$20 与 11-30 截止——本项今日已由官方定价页坐实（12-01 起翻倍），换成新问题：Flash 线与 Argon 的两段到期日（2027-01-01 与 2026-12-01）要不要进七维里的性价比维与 priceHistory，以及是否给 3.8 Flash 单列一档；⑥ MMLU-Pro 整列消失后七维分口径是否统一；⑦ QClaw／WorkBuddy 是否建档；⑧ 阶跃 STEPX Token Plan 续费单价；⑨ IKun Code 第三方 24h 可用率由 59.55% 跌到 29.58%（单日最大跌幅），它不在本站已核清单，是否列为观察项交周五。",
      "发布状态：已发出（10-15 09:3x 经 create_chat_session 孵出的子会话发布成功——本会话 Sites 工具整组不在挂载清单，仍走绕法；data.js md5 源与子会话两侧同为 08b6748f88a150c9318637df14b857dd、community.json 已删；固定 actionId b7fd59f8-0419-4de9-a288-26d698441828，prepare 首轮 descriptorStatus=pending、同 actionId 一次轮询即 canPublish:true，publish_site 只回 ID，同 actionId 复查得 published:true、operation.committed:true、result_release_id 01a13d2c-2e46-70f6-8dfd-a6c3c1f8882f，get_site 的 active_release_id 相同、runtime_version 58→60、artifact 435,782 字节；上线逐项实读：主站与镜像 /data.js 三戳均 10-15、字节完全相同（214,936 字符），rows 329、events 57、weekly0 10-15、relayVerify 15 且 yunwu.at=10-15，arena.html <tr>=330=rows+1、榜首 Claude Opus 5.5、Haiku 5.5 行 ARC-AGI 已显示 61.3，rank.html 前 16 席与 benchmarks.models 同序同值，relay.html 15+14+3+4=36=seed33+extra3，weekly/10-15 与 chatgpt/gemini/doubao/qianwen/stepfun/claude 六张档案页及 sitemap 全 200，corrections 仍 200 且只有 09-22 旧项（后端未发丢）；镜像本轮 post-commit 一次成功 MIRROR_PUSH_OK 54f0f04。坑点补记两条：一是云雾那两轮的字段名误读（顶层从来没有 freeze 键，真字段是 migration_freeze_enabled），今后读状态接口必须先 Object.keys 列键名再取值；二是本会话 Bash 工具中途失效（Git bash.exe 找不到、连 echo 都退 1），上线核验改走 node-repl 的 fetch + 正则提取，代价是 node-repl 禁用 new Function，只能用正则从 data.js 文本里取戳与计数，故 relayVerify/席位序这类结构断言要落到 arena/rank/relay 三个静态页上去数）。",
    ] },
    { date: "2026-10-14", note: "日更：基准 327→329 行且源页删掉 MMLU-Pro 整列（238 格置空），内容侧六笔——腾讯元器 10-08 停服公告补录、云雾 API 自证冻结并迁往 OpenLux（升级为暴雷/收缩级红旗）、元宝 Token Plan 双家族厘清、Claude Sonnet 5.5 缓存读自纠、Gemini 4 Argon 全球上线、Meta 首发前沿模型 Muse Wonder", items: [
      "基准同步到 10-14：Arena+ 页面直抓成功，10-14 抓取件 130,007 字节与 10-13 抓取件 cmp 逐字节相同、页面自身日期标签两日均为 \"2026 Oct 12\"，解析 329 行（表头除外，达 300+ 阈值）。两处结构性变化：① 源页表头只剩 9 列，MMLU-Pro 整列被源站删除（全文 \"MMLU\" 命中 0），站内此前 238 个非空值随之消失——为守住本表 9 字段契约，该列一律留空串且不回填旧值，并新增 arena.note 说明此事，index.html 与 gen-landing 生成的 arena.html 双宿主各渲染一条 ⚠ 提示；② Meta 两行插入（Muse Wonder Full 第 6、Muse Wonder 第 10），使其后 322 行行号后移，无行被移除。16 个在档席位按模型名回查页面行号全部命中且严格递增，Arena Elo/Coding/Vision/AAII 逐值零变动，故 scores.coding 一律不动、换算复核通过（榜首 Claude Opus 5.5 仍 1526/1575/58、编码分 9.8）；mistral 席位对应页面行由 84 位移至 86（数值未变）。三戳 meta.dataUpdatedAt/arena.fetchedAt/benchmarks.verifiedAt 同日对齐 10-14。",
      "腾讯元器停服补录（10-13 17:1x 静态直抓 + 三家媒体一致转述）：官网 10-08 发布《关于元器平台停止服务通知》，2026-10-29 起停止创建新智能体与 API Key 分发，2026-11-09 关闭应用访问/数据读写/API 调用/控制台，经元器发布到公众号、服务号、微信客服的智能体同步停止响应，数据导出过渡期截至 2027-01-09，官方给出的替代是腾讯云智能体开发平台 ADP 与公众号智能回复。来源核验：yuanqi.tencent.com 为前端渲染，首页 64,982 字节、/guide 25,303 字节、/notice 2,982 字节均不含公告原文、/api/notice 返 401，故按“据媒体一致转述”入库（新浪科技转快科技、网经社 100ec.cn、SmartHey 三稿口径一致，两独立来源门槛满足）。档案改动：verifiedAt→10-13、tagline 写明停服日、plans 唯一档改“免费 → 2026-11-09 停服”、apiNote 补 10-29 停发 API Key、access.note 与 strengths/weaknesses 首项重写。漏检检讨：公告日 10-08 落在 10-09、10-10 两轮日更的扫描窗口内，但那两轮检索词只覆盖定价/发布类、未覆盖“停服”，属检查面缺口——本轮起把“停服/下线/迁移/冻结”固定进每日检索词。元器的七维编辑分是否下调、是否从产品榜摘出，交周五全量。",
      "元宝腾讯云 Token Plan 双家族厘清（10-13 直抓 cloud.tencent.com/act/pro/tokenplan 卡位映射）：此前几轮只读到 Hy 家族，本轮把两套个人版逐档拉出——Hy 家族 560/¥28、1,560/¥78、4,760/¥238、9,360/¥468，通用家族 780/¥39、1,980/¥99、5,980/¥299、11,980/¥599；带 6.5 折、个人专享、限 1 台等标签。故该档 price 由“¥28 - ¥468/月”改为“¥28 - ¥599/月（两套个人版）”，上一轮记的“Max 档 ¥468 未复现”据此撤销并恢复。企业版卡片标题与价位在页面错位、无法可靠配对，继续标未核实。",
      "云雾 API（yunwu.ai）升级为暴雷/收缩级红旗（两条独立来源）：① 自家 /api/status 于 10-13 17:11 直抓（446,543 字节、构建 20261013-022518）出现 freeze=true、migration_target_url=https://api.openlux.ai、migration_exchange_rate=13.6、server_address_arr=[{URL:https://api.zhongzhuan.chat,Description:空白反代地址}]，system_name 变成 \"x\"，而公告仍 340 条、最新停在 08-16；10-14 复抓构建变 20261013-200904、freeze 字段消失但迁移三项照旧，解冻还是隐藏字段本站不选边。② 第三方监测 Help AIO「AI中转站可用性监测」连续第四次列本站 24 小时综合可用率 0.00%（10-09 09:19/560、10-10 08:59/552、10-13 17:14/558、10-14 09:07/554，19 个在监测站点里仅云雾与 Undying 为 0%，其余 68.79%-97.84%，HongMaCC 已回到 95.50%）。/api/pricing 与 /api/status 仍 200 只证明站活着、是 new-api 实例，不作可入驻依据；relayVerify.yunwu 的 status 保持 verified 仅表示“双源核实动作完成”，不是可用性背书。迁移目标 OpenLux 的 /api/status 也 200（509,149 字节、公告 382 条、最新 10-13 03:00 称把 gemini-3.6/3.7-flash 自动路由至 3.8-flash 且价格不变），但它不在种子目录与 relay.extra 内、且种子区只许 gen-relay 生成，故本轮不建条目，是否收录交周五。",
      "Claude 档案两处（10-13 直抓 docs.claude.com 定价文档，13 张表）：自纠一笔——Sonnet 5.5 的缓存读价站内此前记 $0.20，官方表格原值为 $0.10（基础输入价的 5%），$0.20（10%）是上一代 Sonnet 5，已按原值更正；复核确认 Fable/Mythos 5.1 $10/$50、Opus 5.5 $4/$20、Sonnet 5.5 $2/$10、Haiku 5.5 按 prompt 长度分档 ≤10 万 $0.10/$0.50、>10 万 $0.50/$2.50，缓存写 1.25×/2×、读 0.1×（Opus/Sonnet 5.5 为 0.05×、Fable/Mythos 0.025×）。另直读到 Max 5x/20x 月度 API credits $100/$200、Team 最高 $500 池化，但官方页未把 credits 与订阅档一一对齐到可引用的表格行，故不写入 plans 字段（留给周五）。",
      "Gemini 4 Argon 全球上线（两独立源：新浪科技转环球市场播报 10-14 07:15、华尔街见闻 10-14 07:03）：自 10-13 起对付费 Gemini API、AI Studio、Antigravity（Ultra）与 Gemini 应用/搜索 AI Mode（Ultra 与 Pro）开放，09-30 所记“仅 Fairwind 定向预览、广泛商用未公布”作废，档案 models/两档说明/access.note/weaknesses 已改写并补两条来源。介绍价 $2/$10、缓存输入 95% 折扣、输出上限 6.4 万→100 万 token；媒体所称“推广价只到 11 月底、之后回到 $4/$20”因官方页 ai.google.dev/gemini-api/docs/pricing 本轮 curl 两次失败（exit 56、0 字节）无法复核，档案里单价标“待官方页复核”、常规价未写入。",
      "Meta 首发前沿模型 Muse Wonder / Muse Wonder Full（当地时间 10-12 深夜、北京时间 10-13 见报；今日头条/新浪/网易/百家号 AI 早报多源一致，Full 接入方式据 AI 早报转 TechCrunch）：API 输入 $4/输出 $20、缓存输入 $0.20、长上下文不加价、1M 上下文多模态输入，与在档 Opus 5.5 同价；Full 不开 API、仅 Muse Code $50/$200 两档，Muse 应用另需 $20/$100，全线闭源付费、告别 Llama 免费路线；Artificial Analysis 单任务成本 $4.52（Spark 1.3 为 $1.60）、AA-Omniscience 上 Full 30 分对 Opus 5.5 的 46 分。基准侧已按页面原行序入库（第 6/第 10，编码分换算 9.5/9.4），Meta 是否开档案交周五——按日更纪律本轮不擅自扩产品榜。",
      "中转站维护：种子源再次复查仍未刷新（relay-seed/providers.yaml 的 last_reviewed 仍 2026-07-12、prices.latest.json 的 snapshot_date 仍 2026-08-16，与 relay.seed 现有 sourceLastReviewed/priceSnapshot 相同），故不跑 gen-relay、种子区一字未改。双源核实未新增家数：wappkit/Quicksilver Pro 的第二独立来源仍未找到（检索只回自我宣传稿，不作依据），aiapipk 两源冲突未解，故 relayVerify 维持 15/36（本日更新的只有云雾的复核时间与证据）。",
      "纠错通道：/functions/v1/app?action=corrections 于 10-13 17:1x 与 10-14 09:1x 两次直读均返 200，items 仍只有 2026-09-22 那条 perplexity Enterprise 档年付口径旧建议，无新增待处理项。",
      "未入库（单源或聚合器转述，未过两独立来源/官方门槛）：OpenAI 向全球用户推送 GPT-6 取代 GPT-5.6 Sol/Luna 并称“智能 UI”免费用户可用（白鲸出海微博 + kamacoder/CSDN 转述，且推送范围两说）；“Claude 半年封禁 1,140 万账号”；a16z 赚钱榜类盘点；SpaceXSI 所称 \"The X Subscription\" 打包 Grok/Cursor/X Premium（$8/$30/$100/$200）；Meta 发布当天股价收涨 3.38% 的市场细节。均只在本条留痕、不写进档案与事件。",
      "发布状态：已发出（10-14 09:2x 经 create_chat_session 孵出的子会话发布成功——本会话 mcp_list 查 site 返 0 条、整组 Sites 工具不在挂载清单，所以仍走绕法；子会话自取 projectRoot 后用 cp -r 拷 public/ 与 functions/、删 gitignored community.json、data.js md5 与源一致，actionId c5bfe0f0-46e7-4a96-bc2e-2293bbc87678，prepare 首轮 descriptorStatus:\"pending\"、同 actionId 一次轮询即 canPublish:true，publish 后按同 actionId 复查坐实 published:true、operation.committed:true、result_release_id 01a13805-66cb-732f-ac5a-1b3a47c4f037，get_site 的 active_release_id 与之相同、runtime_version 54→55）。上线逐项实读：主站 /data.js 三戳全 2026-10-14、rows 329、events 52、weekly[0] 10-14、arena.note 在场且 /arena.html 里 ⚠ 提示渲染出 1 处、<tr>=330、榜首 Claude Opus 5.5|1526|1575|1320，/relay.html 四组条目 15+14+3+4=36 与 seed 33＋extra 3 相符、relayVerified 15，/rank.html 前 16 席顺序与 benchmarks 一致，/weekly/2026-10-14.html 与四张改过的档案页（yuanqi/yuanbao/gemini/claude）、/sitemap.xml 全 200，/functions/v1/app?action=corrections&cb= 仍 200。镜像侧本轮先遇一次 MIRROR_PUSH_FAIL（09:25，TLS unexpected eof，commit 已在本地镜像仓），因 sync-mirror.sh 的 UNCHANGED 分支不再推送，手工重试 origin master:main 后 09:26 MIRROR_PUSH_OK_RETRY 01d163a，线上镜像 /data.js 隔离实读亦为 10-14/329。本条“发布状态”写的是上一次发布的 release id，补记发布后线上 id 会再前移一位——以线上能读到这段文字为追平判据，不追求 id 相等。",
      "留给周五全量：① 元器七维分是否下调、是否退出产品榜；② OpenLux 是否进中转目录（须先判定它是否 new-api 代售型而非自研，且种子区只能 gen-relay 重生成）；③ Meta Muse Wonder 是否建档与七维评分；④ 腾讯云 Token Plan 企业版卡位与价对的错位配对；⑤ Claude Max 5x/20x 与 $100/$200 月 API credits 的档位对应关系（官方页未表格化）；⑥ Gemini Argon 常规价 $4/$20 与“11 月底截止”待官方定价页复抓（本轮 exit 56 两次）；⑦ MMLU-Pro 整列在源页消失后，站内七维里的 context/office 维是否还引用该列旧值，需全量口径统一。",
    ] },
    { date: "2026-10-10", note: "日更：基准重抓源页未刷新（327 行逐值零变动，早晚两次抓取件逐字节相同），内容侧四笔纠错/补录——TRAE 首月促销价按官方定价页改正、Mistral Large 4 预览补录（周五漏项）、Claude 功能矩阵逐档核实、傍晚按谷歌官方帮助页重划 Gemini 各档可用模型", items: [
      "基准同步到 10-10：Arena+ 页面直抓 136,319 字节（与 10-09 抓取件逐字节相同，早间简报里误记为 135,616，17:03 二次重抓以文件实测值更正）、解析 327 行（表头行除外，达到 300+ 阈值），与站内快照逐行逐值比对零差异，✅ 标记照原样保留；16 个站内席位按模型名回查页面行号全部命中且严格递增，scores.coding 换算逐项复核通过、一律不动。页面自身标注的榜单日期标签两日均为 \"2026 Oct 7\"，即 OpenLM 侧快照尚未刷新，本轮属\"重抓确认未变\"而非新数据；按纪律 arena.fetchedAt 与 benchmarks.verifiedAt 仍同步改为 10-10（第 2b 步成功即须对齐核实日），meta.dataUpdatedAt 同日到 10-10",
      "TRAE 档案两处价格纠错（10-10 直抓官方定价页 www.trae.cn/pricing，静态可逐档读）：会员 Lite 的首月促销由站内旧值\"首月 9.9\"改记官方页所标\"低至 ¥39\"，会员 Pro 由\"首月 59\"改记\"低至 ¥69\"——那两个旧值出自第三方 CSDN 转述（仍是档案里的兜底来源之一），本轮在官方页未能复现，按\"官方页优先\"改正；四档月费 ¥49/¥99/¥239/¥699 与站内原记一致未动。同日补记官方五档积分阶梯 500 / 2,000 / 4,000 / 12,000 / 40,000（免费版 500 起、Ultra 40,000）、会员签到另多得 3000 积分，以及四个会员档同写的\"模型折扣：Seed-2.1 2.5 折，GLM、DeepSeek-V4.1 5 折\"与高峰期优先响应。另一笔官方口径：docs.trae.cn 的 10-09 公告 TraeWork 与 TraeCode 融合升级为全新 TRAE（一个入口、Agent 模式与 IDE 模式切换、覆盖桌面/Web/移动三端），定价页档位与金额未见因合并变动；档案 sources 顺序改为官方定价页与官方文档在前",
      "Claude 档案按官方功能矩阵补可用性（10-10 直抓 claude.com/pricing，1,242,021 字节，两张特性表可静态解析）：个人档 Free/Pro/Max 5x/Max 20x 四列里 Claude Design、Claude Slides、Claude Docs 三行全为 Yes，Claude Dashboards (beta) 为 No/Yes/Yes/Yes，Claude Motion (beta) 四列全为 No；Team/Enterprise (self-serve)/Enterprise (sales-assisted) 三列这五项全为 Yes。这条对应 10-09 财联社与网易两独立来源所称\"文档/幻灯片/设计结束测试、所有套餐含免费版可用，Dashboards 与 Motion 进入测试\"——即\"所有套餐\"只覆盖前三项，个人档无论 $20 还是 $200 都拿不到 Motion。官方新闻室页（10-10 直抓 429,419 字节）可读的最新条目日期停在 Oct 8, 2026、无 10-09 独立公告稿，故判定以定价页矩阵原值为准；订阅价格一分未动，只有四档 note 补写功能范围",
      "Mistral 档案补录周五漏项（官方 10-06 博客 mistral.ai/news/mistral-large-4，datePublished 2026-10-06T12:00:27Z）：Mistral Large 4 公开预览，官方代号 le Chonk、非官方简称 ML4，1 万亿参数、原生多模态、激活 520 亿参数，训练自 3,800 张 NVIDIA Grace Blackwell GPU（欧洲自有数据中心），发布当天可在 Mistral Studio 走 API 试用，权重计划本月月底放出——即尚无权重可自部署、也未进 Arena+ 榜，站内基准席位维持第 84 行的 Mistral Large 3 不改。10-10 直抓定价页对静态文本全文检索仍无 Large 4/ML4/le Chonk 条目，新模型 API 单价标未核实。同次新读出两笔 Pro 档权益：标准 Pro 卡含 \"$25.5 /mo in API credits\"、同一卡的学生切换态（Education plan $5.99）含 \"$15 /mo in API credits\"；Free 卡有静态权益文本但只写 limited 而无数字额度，免费档维持未核实",
      "Gemini 档案记企业线（A5站长网 10-09 20:18 与 CITNews 转 DoNews 10-09 09:19 两独立来源）：谷歌云在 Gemini at Work 2026 发布\"通用工作智能体\"Gemini agent，单一提示框走问答/知识工作/图文视频/写跑代码，可在 Gmail-Drive-Docs-Slides-Sheets-Chat-Calendar 内直接操作，入口含 Web/iOS/Android/Win/Mac/CLI 与微软365、Slack；模型不绑自家，可在 Gemini 系列与 Anthropic Claude 系列间动态选择并配 Smart Routing，企业可给\"同事 Agent\"配独立邮箱/日历/存储并进通讯录，当前为预览、先向 Workspace 特定 Business 与 Enterprise 开放。该产品无可核价签，站内 gemini 个人订阅四档金额未动；发布日两源相差一天（10-08 与 10-09），按报道日记并在 apiNote 里点明，10-10 未检索到谷歌官方域名可静态直抓的公告稿，细节标为媒体转述官方口径",
      "中转站维护：种子未刷新（relay-seed/providers.yaml 的 last_reviewed 仍 2026-07-12、prices.latest.json 的 snapshot_date 仍 2026-08-16，与 relay.seed 现有 sourceLastReviewed/priceSnapshot 相同），故本轮不跑 gen-relay、种子区一字未改。双源新增 1 家（已核 14→15/36）：Helicone——种子条目（type=observability、entityRegistered=true、maintainer 核于 05-26）+ 第三方测评页 EggStriker（最后核实 08-11，\"0% 加价直通、免费层 1 万请求/月、付费 $79/月起、开源可自部署\"）两源认定，10-10 再直抓官方 helicone.ai/pricing（163,419 字节）逐档对上 Hobby Free 10,000 requests / Pro $79 / Team $799 / Enterprise 询价；判读要点已写进 note：它不代售额度、要自持官方 Key，不能当买不到官方额度时的替代品。已核站复查：云雾 API 的第三方 24h 可用率连续第二日 0.00%（10-10 08:59 快照、有效探测 552 次）而自家 /api/pricing 与 /api/status 仍 200（446,553 字节与昨日同尺寸），单源不成结论、维持异动观察，只把本条 at 更新到 10-10 并升风险措辞。未收录三家继续挂待核：玄枢 wappkit 与 Quicksilver Pro 今日仍只有 EggStriker 单页（最后核实 08-16/08-11）、无第二源；aiapipk 两源冲突（EggStriker 08-16 记\"已停运，apex 域名 NXDOMAIN\"，但 10-10 实测 www.aiapipk.com 返 200 且价目墙在前），冲突未解不写 verified。10-10 监测页另列 HongMaCC 43.84%、CPass 68.11%、Undying 0.00%，三家均不在种子目录内，不作收录依据；本窗口未检索到已核 15 家的暴雷/跑路/停服信号",
      "傍晚增补（同日第二轮巡检，17:02 起）：①纠错接口仍 200 且只有 09-22 那条 perplexity 旧建议、无新增；②基准第二次重抓——17:03 再取 openlm.ai/chatbot-arena/（136,319 字节，与今晨抓取件 cmp 逐字节相同、页面内日期标记仍为 2026-10-07），解析 327 行与站内快照逐值零差异，五处 ✅ 标记（MiMo-V2.6-Pro 13、Kimi-K3 14、Qwen3.8-Max 16、Step-5 17、GLM-5.3 21）按原样保留，16 席行号仍严格递增，arena.fetchedAt/benchmarks.verifiedAt 已是 10-10 无需再动；顺带更正早间简报里把抓取件字节数误记的 \"135,616\"（实测 136,319，本条基准项文字已改）；③中转站种子再核：providers.yaml 的 last_reviewed 仍 2026-07-12、prices.latest.json 的 snapshot_date 仍 2026-08-16，与 relay.seed 现值相同 → 不跑 gen-relay、种子区零改动；傍晚试为 wappkit 找第二独立源未果（检索只回一批 apiranking／造梦者类\"排行榜新闻稿\"，属自我宣传、不作收录依据），故 relayVerify 维持 15/36、本轮未新增；④本窗口最大一笔改到数据：谷歌 Gemini 应用官方帮助中心 answer/17004136《Changes to Gemini model access and limits》10-10 直抓可静态读、对照表逐格解析成功，据此把 gemini 档案四档 note 重写——无订阅格为 Auto（关掉智能选择才全部走 Flash-Lite）、AI Plus 为 Flash-Lite ✅／Flash ✅／Pro ✕ 且生效日另发邮件通知、AI Pro 与 AI Ultra 三档全可用，同页额度倍数表（标准／2x／4x／AI Pro 的 5 或 20x）与高消耗清单（媒体生成、Deep Research、Pro 模型、Extended thinking 与 Deep Think）一并入 apiNote；两处媒体所称\"Deep Think 下放给 AI Pro\"与另一篇官方页 answer/16275805 原文 \"Deep think (AI Ultra only)\" 冲突，按官方页记未证实；价格一分未动——两篇帮助页无任何货币数字、one.google.com/ai 只返回登录页，故 AI Plus 的站内 $7.99 与媒体 $4.99、Ultra 的 $200/$100 与媒体 $99.99 均标未核实并存；strengths 里\"免费版最厚道\"与 weaknesses 新增的权限分层一条同步改写，sources 改为官方两页在前；事件按生效日 10-09 入 events（现 48 条）。编辑部评分（含性价比一维）本轮不动，交周五全量重算",
      "纠错通道：/functions/v1/app?action=corrections 今日直读仍返 200，items 仅 1 条 2026-09-22 的 perplexity 旧建议（Enterprise 档标注年付口径），无新增待处理项",
      "发布状态：已发出（今日 09:35 经 create_chat_session 子会话发布成功）。本会话整组 sites 工具仍在（mcp_list 可查），但 prepare_site/get_local_context 仍返 sites_local_session_required，而 get_site 探活正常——即\"探得通 ≠ 发得出\"，因此走已验证的绕法：子会话自取 projectRoot 后把本地 HEAD 830e2d8 的 public/ 与 functions/ 拷入（data.js 的 blob sha 与 git rev-parse HEAD:public/data.js 一致才继续），子会话按八字段原样 prepare_site（不传 spa）→ 轮询同一 actionId 两次到 canPublish=true（第 1 次 verifying/running，等待 20 秒后 ready/succeeded，artifact 370,280 字节、sha ed58177e…3d12f7f）→ publish_site 只带 actionId。坑点复现：publish_site 返回体只有六个 ID 回显、既无 published 也无 release 字段，所以\"已发布\"不能凭它下结论；同 actionId 再查一次 get_publish_status 才拿到 published:true、operation.committed:true、result_release_id 01a12372-5c7b-7a10-b9cc-19de151f1d93，site.active_release_id 由 01a12009-114f-7e78-aa6f-f26cb55089f0 切到新值、runtime_version 48→50、publishOperationId 01a12372-5c7b-7a42-8f35-e31590b79446，actionId 14b0874d-3db6-4847-95e5-33f1f0be98f8、deploymentId 01a12371-d4ea-709d-ab15-c48fe3661cd8。上线验证逐项过：主站与镜像 /data.js 三戳均为 10-10、rows 327、events 47（傍晚增补 Gemini 官方帮助页一笔后为 48）、relayVerified 15、weekly[0] 10-10；/rank.html 前 16 行与本地 benchmarks 逐值一致；/arena.html 148,759 字节、<tr> 328＝rows+1、首行仍是 Claude Opus 5.5 1526/1575；/relay.html 81,617 字节、站点名去重 36＝种子 33＋extra 3 且无未知名；改过的 /agent/trae.html、/agent/claude.html、/agent/mistral.html、/agent/gemini.html、/weekly/2026-10-10.html 与 /sitemap.xml 全 200；纠错接口发布后仍 200。镜像由 post-commit 钩子自动推，dev/mirror-sync.log 尾行 MIRROR_PUSH_OK 即同步成功；注意日志里的短码是镜像仓自身 commit，不是主仓 HEAD（本轮 HEAD 830e2d8 对应尾行 8f99bb2），别把它误读成落后。本条补记写完后用同一绕法（新 actionId）再发一次，使线上内容追平 HEAD；判据不是再查一次工具返回，而是线上 /data.js 能读到这条 weekly 发布状态项",
      "留给周五全量：STEPX Neo 智能体手机定档 10-13（阶跃系，单源）与卓建律所 10-09《API 中转站的刑事红线》分析稿是否入 relay.policy，均待官方或多源可核后再定；Mistral Large 4 的 API 单价与权重落地、Claude Motion 的团队/企业档价签、Helicone 顶栏 \"Helicone Joins Mintlify\" 的归属含义为下一轮待核项；本轮新增三项待核——Gemini 各档月费的并存口径（AI Plus $7.99 与媒体 $4.99、Ultra $200/$100 与媒体 $99.99，官方帮助页无价签、one.google.com/ai 只回登录页）、Deep Think 是否真下放给 AI Pro（官方页仍写 AI Ultra only）、以及 gemini 档案的\"性价比\"编辑部评分（本轮按分工未动，免费档权限收紧后需重算）；站内既有未核实清单（Grok Lite/Free、Poe、元器、GLM/豆包/讯飞客户端渲染价签、Perplexity、Devin、Kimi）本轮无一取得静态可核来源，维持原状"
    ] },
    { date: "2026-10-09", note: "日更补 GPT-6.1 Sol 的 Ultrafast 档，周五全量换席扩席：Step-5 顶下 Step-3.5-Flash、档案 23→26", items: [
      "基准同步到 10-09：Arena+ 重抓 327 行（较 10-08 +1），新增行 Step-5 ✅ 按页面原序列第 17（Arena Elo 1506、Coding 1560、AAII 44、MMLU-Pro 87.5，Vision 与 ARC-AGI 源页无值即留空串），编码维换算 (1560-1300)/28.2=9.2；除这一新行外，其余 326 行逐行逐值与 10-08 完全一致（榜首 Claude Opus 5.5 仍 1526/1575/58），✅ 标记照原样保留；因插入一行，其后的页面行序整体后移一位（站内 13 席中 7 席行号 +1：GLM-5.3 20→21、DeepSeek-V4.1-Flash 25→26、ERNIE-5.1 43→44、Seed2.0 Pro 47→48、Minimax-M3 63→64、Hunyuan-Hy3 89→90、Step-3.5-Flash 118→119），数值未变故 scores.coding 一律不动；meta.dataUpdatedAt / arena.fetchedAt / benchmarks.verifiedAt 三戳今日一并对齐到 10-09",
      "本窗口最大一笔（10-09 官方定价页 + IT之家/DoNews 两独立来源）：OpenAI 给 gpt-6.1-sol 加开 Ultrafast 极速吞吐档，官方定价页该档输入 $12/缓存读 $0.60/缓存写 $15/输出 $60 每百万 tokens，逐项恰为标准档（$2/$0.10/$2.50/$10）的 6 倍。本轮把整页静态价目 JSON 逐档拉出来核了一遍，档位切换器实为五项：standard $2/$0.10/$2.50/$10、batch 与 flex 均半价（$1/$0.05/$1.25/$5）、fast 2 倍（$4/$0.20/$5/$20）、ultrafast 6 倍；ultrafast 只列 gpt-6-astra（$60/$6/$75/$300，同为其标准价 6 倍）与 gpt-6.1-sol 两项，gpt-6-luna 不在该档。判读要点：站内 10-03 曾把\"速度翻 8 倍\"记为澎湃的媒体口径，本轮确认该档真实存在且已上架，但官方页对 Fast 档写明\"最高比 Standard 快 2.5 倍\"、对 Ultrafast 档的说明文本是空的——即官方只给价、不给这一档的倍数，\"8 倍\"仍是媒体口径（未核实）；档位不改变模型能力，仍是同一个 gpt-6.1-sol",
      "已入档并同步：chatgpt 档案 models/verifiedAt(10-04→10-09)/apiNote/sources 更新，apiPrices 新增 gpt-6.1-sol Ultrafast 与 gpt-6-astra Ultrafast 两条，priceHistory 的 chatgpt 序列追加 10-09 输出 $60 一点，Pro 500 档说明把 10-03 的\"速度翻 8 倍\"媒体口径改写为已由官方档位落地（接入面按两源记为 Pro 500、按量计费的企业版与积分制教育版）。这是本轮唯一改到订阅档说明的一笔：$500 档\"独占最高优先级算力\"的卖点第一次有了可核的对应物，但金额与额度仍未由官方页静态可核，旧有的 Pro 500/Pro Max 命名分歧与 200 档入口是否暂停仍按未核实并存",
      "stepfun 档案同步（verifiedAt 09-23→10-09）：Step-5 进 Arena+ 第 17 行，同时把第三方渠道报价复核了一遍——OpenRouter 公开接口列 stepfun/step-5-preview（created 10-08，输入 $1/输出 $2.7/缓存读 $0.05，context 1M），按站内汇率 7.1 折算为 ¥7.1/¥19.2，与站内 09-19 已核的官方 ¥7/¥20 吻合，故官方价目不动；AIMLAPI 目录亦已收录同名条目（releasedAt 10-08、1M 上下文）可作存在性第二旁证，但其公开目录接口不含逐 token 价格，故价目侧只有一个第三方数。StepFun 自家定价页与模型页本轮直抓均为客户端渲染、未能静态复核。基准席位仍留 Step-3.5-Flash（第 119 行、编码分 4.7），换席与产品榜排序按纪律交周五全量处理——同日周五全量已落地换席，详见后面\"周五全量换席与扩席\"条",
      "中转站双源新增 1 家（已核 13/36）：AIMLAPI——种子条目（maintainer 核于 05-26）+ 第三方测评页 EggStriker（最后核实 08-15）两家一致认定其为海外多模型聚合站；本站 10-09 实测其公开模型目录返 200、929 个条目且已收录 step-5-preview。注：模型数四说不一（种子 400+、EggStriker 同时写 1000+ 与 600+、实测目录 929），统计范围不同，故站内只写\"数百到上千量级\"而不取任一数字，注册与充值可用性未核",
      "已核站异动观察（单源，不下暴雷结论）：云雾 API 在第三方监测 Help AIO「AI中转站可用性监测」10-09 09:19 快照里被记为 24 小时综合可用率 0.00%（有效探测 560 次），是所列 18 站中两个 0% 之一，同期其余站在 84%-97%；而本站 10-09 自查它自家接口全部照常——首页 200、/api/pricing 200、/api/status 200（enable_online_topup=true），运营公告最新一条停在 08-16、之后两个月无公告。\"页面接口全 200 与模型调用 0% 可用并存\"正是价目接口 200 不等于能用的形态，但 0.00% 出自单一第三方源、其探测模型与判定阈值未公开可核，检索也未见 10 月内社区故障帖，故只写入 relayVerify 作收缩/故障观察项，不写成事件、不作暴雷结论。本窗口另外未见其余 12 家已核站的暴雷/跑路/停服信号",
      "周五全量换席与扩席（本窗口唯一一次榜单重排）：327 行全表按厂商逐行核\"在档产品页面最强自模行\"，唯一失配项是 stepfun——席位由 Step-3.5-Flash（页面第 119 行、Coding 1433、编码分 4.7）换为 Step-5（第 17 行、Coding 1560、编码分 (1560-1300)/28.2=9.2），它因此从末席升至第 8 席，GLM-5.3 及其后 6 席各后移一位；其余 12 席逐席复核仍是各在档厂商的最强行，未换席。同日按上一轮\"待官方定价可核后再扩\"的口径新增三家自模档案：小米 MiMo（MiMo-V2.6-Pro，页面第 13）、Mistral（Mistral Large 3，第 84）、美团 LongCat（LongCat-Flash-Chat，第 94），基准席位由 13 席扩为 16 席、档案数 23→26，默认序变为 Claude Opus 5.5 > Gemini-4-Argon > GPT-6 Astra > Grok-4.7 > MiMo-V2.6-Pro > Kimi-K3 > Qwen3.8-Max > Step-5 > GLM-5.3 > DeepSeek-V4.1-Flash > ERNIE-5.1 > Seed2.0 Pro > Minimax-M3 > Mistral Large 3 > Hunyuan-Hy3 > LongCat-Flash-Chat；rankHistory 已补 2026-10-09 一条七维 26 档案快照，index.html 三处\"23 个\"同步改为\"26 个\"",
      "订阅档改数 4 处：①Cursor 按官方页结构化数据复核为 Hobby $0 / Pro $20 / Pro+ $60 / Ultra $200 / Teams $40 每人每月、Enterprise 标询价；官方口径已改成\"每档含一定量模型用量，超出走 on-demand 后付费\"，站内旧的\"Pro 含 $20、Ultra 含 $400 API 额度\"两句在官方页找不到出处，撤改为无官方出处；②Copilot 补录 Business $19/人（1,900 credits）与 Enterprise $39/人（3,900 credits），Free 档补每月 2,000 次补全，另记 10-02 弃用一批旧模型、10-07 上架 Claude Haiku 5.5；③Trae 四档档名改回官方原文 会员 Lite/Pro/Pro+/Ultra（¥49/¥99/¥239/¥699），旧的\"轻享/专业/进阶/至尊\"系第三方转述；④扣子团队版按官方页改列 ¥142 / ¥283 / ¥1,399 起三档、企业版补 ¥8,980 起，旧 ¥198-¥1,998 区间系转述。Manus 的 $20 档官方档名已由 Standard 改为 Pro，Free 档补官方口径\"每日刷新 300 积分\"",
      "API 价复核改口径 5 处：DeepSeek 官方峰谷计费表逐档与站内一致（未调价）；MiniMax M3 的 ¥2.1/¥8.4 确认是官方标\"永久五折\"后的实收价（划线 ¥4.20/¥16.80，>512k 翻倍，优先服务按标准价 1.5 倍另计）；千问补 qwen3.8-max 输入 ¥12/输出 ¥36、优速 prime 档 ¥24/¥72、Batch 半价与国际区 ¥14.988/¥44.965，并确证免费额度为 100 万 Token、自开通/发布/申请通过起 90 天有效；文心补 ERNIE 5.1 的 ≤32k ¥4/¥18 与 32k-128k ¥6/¥22 分档（千帆\"模型服务计费\"页文档更新时间即 2026-10-09）；元宝的腾讯云 Token Plan 三档复核为 ¥28/560 积分、¥78/1,560、¥238/4,760，站内旧的 ¥468/9,360 档本轮未在同页复现，保留待下轮复核。apiPrices 随之新增 Qwen3.8-Max、ERNIE 5.1、MiniMax-M3、MiMo-V2.6-Pro、LongCat、Mistral Large 3 六行",
      "本轮仍未能静态核实（宁缺毋假，一律标未核实、不写数）：Grok 的 Lite 月费与 Free 档次数（官方页只渲染 Free $0/SuperGrok $30/Plus $100 三档）、Poe 五档的美元原价与 Free 额度、腾讯元器 C 端收费政策、智谱 GLM 逐模型 API 价与豆包/讯飞星火定价页（均为客户端渲染）、Perplexity 各档（enterprise/pricing 本机仍 403，docs 只写 custom pricing，另把站内 Max 档\"2026-07-16 新设\"改标未核实——官方博客检索到的是 2025-07 报道，日期冲突未解）、Devin 的 $15/$35（devin.ai 全站无静态价签，仍属第三方口径）、Kimi 开放平台逐模型价（\"模型推理价格说明\"页文字口径可读、表格客户端渲染，但已确证 API 侧\"按量计费、不提供订阅制方案\"，K3 缓存写入按 TTL 5min/1h 分档、命中后自动续期不再收写入费；国内实名认证送的 ¥15 代金券明确不可用于 K3，需充值解锁）、MiMo 与 LongCat 的 C 端会员档（官方页只列按量）",
      "中转站巡检：双源新增 1 家 TeamoRouter（已核 14/36）——本站 10-09 直抓其 /pricing 静态可读 6 张价目卡（GPT-5.6 Sol 输入 $0.53/输出 $3.18、Claude Fable 5 $2.42/$12.10、Claude Sonnet 5 $0.50/$2.52），配腾讯云开发者社区 09-16 点名分析文一份；因第二源偏弱、现价仅为官方 1-2.4 折、且客服与证照截图挂在第三方域名 floatai.cn，note 里明写\"仅证存活与报价可复核，不作质量或兑付背书\"。另核 Wappkit、玄枢API、wawazz、Quicksilver Pro 四家，均只有一个来源（awesome-ai-api-proxy 属运营方投稿，不计独立源），其中 wawazz 价目接口 404、主页为 SPA 壳不可机器复核，四家一律未收录。抽查两家已核站与站内记录一致：云雾 /api/pricing 382 条（旧记 384，属价目滚动），qwen3.8-max x6、claude-fable-5 x5、deepseek-v4-pro x4.5 三项倍率逐项对得上且仍不含 gemini-4-argon；柏拉图公告仍停在 06-02，05-09 关闭个人注册、05-11 关闭个人充值与新注册、05-30 引导转企业三条原文在位，维持\"主动收缩\"定性。私有渠道巡检结论未变：yiqinuo 仍 registration_enabled=false 且 invitation_code_enabled=false、rvrcc 仍不可达，故 relay.extra 本轮未改。本窗口未见暴雷/跑路/停服信号",
      "纠错通道：GET /functions/v1/app?action=corrections 返 HTTP 200，条目仍只有 1 条 perplexity\"Enterprise 档价格建议标注年付口径\"（2026-09-22），系早已处理的旧项，本轮无新增需处理的提报",
      "发布状态：已发出（今日 17:05 补发，11 天积压一次清空）。上午那一轮的情况是：本地已走到 10-09（327 行），主站线上 data.js 三戳仍停在 09-28（322 行）、待发周更页 09-30/10-02/10-03/10-04/10-08/10-09 六张在主站均 404、在镜像均 200，落后 11 天；本会话 qoder_sites 工具虽已挂载（47 个），`get_site` 探通（active、runtime_version 42），但 `prepare_site` 与 `get_local_context` 均返 `sites_local_session_required`（非桌面会话拿不到宿主当前会话目录绑定），所以探活通而打不了包。**17:05 已补发成功**：把 `public/`+`functions/` 原样拷入 `create_chat_session` 孵出的子会话目录，由该子会话以自己目录调 `prepare_site`（八参数原样、新 actionId）→ `canPublish` → `publish_site`，返回 `published:true`，新 active_release_id `01a11fe6-dc2b-70af-bdc6-6aec9d054b2b`。发布后逐项线上实读：`/data.js` 三戳 10-09、`arena.rows` 327 行、首行 Claude Opus 5.5|1526|1575|1320，`/arena.html` 的 `<tr>` 328＝行数+1，`/rank.html` 前六席顺序与 benchmarks.models 一致，`/relay.html` 200（种子 33＋提报 3＝36 条），本日上午 404 的六张 `/weekly/*.html`（09-30/10-02/10-03/10-04/10-08/10-09）已全部转 200，`/sitemap.xml`、`/agent/chatgpt.html`、`/agent/stepfun.html` 均 200，社区后端 corrections 仍 200 → 主站/镜像/本地三方追平，11 天积压一次清空"
    ] },
    { date: "2026-10-08", note: "四日窗口补齐：Anthropic 发 Haiku 5.5，基准表连续停滞三日后首次动", items: [
      "基准同步到 10-08：Arena+ 重抓 326 行（较 10-04 +1），新增行 Claude Haiku 5.5 按页面原序列第 31（Arena Elo 1501、Coding 1538、AAII 43、MMLU-Pro 87.5，Vision 与 ARC-AGI 源页无值即留空串），编码维换算 (1538-1300)/28.2=8.4；另有四行 ARC-AGI 由空补出数值（Kimi-K3 60.4、GLM-5.3 65.8、DeepSeek-V4.1-Flash 72.9、DeepSeek-V4-Pro 61.5），榜首至第 13 席的 Arena Elo/Coding/AAII 逐行逐值与 10-04 完全一致；因插入一行，其后的页面行序整体后移一位（站内五个产品席位行号 41→42、45→46、61→62、87→88、116→117），13 席数值未变故 scores.coding 一律不动，✅ 标记照原样保留；arena.fetchedAt 与 benchmarks.verifiedAt 随重抓成功同步到 10-08",
      "本窗口最大一笔（10-08 官方页 + 网易/admin5 两独立来源）：Anthropic 上线 Claude Haiku 5.5，且是站内在档首个按 prompt 长度分档计价的模型——≤10 万 token 输入 $0.10/输出 $0.50，>10 万 token 升为 $0.50/$2.50；缓存写 5 分钟 $0.125、1 小时 $0.20，缓存读 $0.01，批量 API 再对半（$0.05/$0.25 与 $0.25/$1.25）。对照上一代 Haiku 4.5 的 $1/$5，短请求单价降 90%；官方页另注明 Claude 4.6 及之后模型（唯独 Haiku 5.5 除外）1M 上下文仍按标准价。与小模型档 GPT-6 Luna（$0.10/$0.50）打到同一价位。判读要点：两家媒体均指出新分词器使同一请求 token 数增约 25%-30%，名义降价到手折扣更小，该比例官方未给换算表、标未核实",
      "已入档并同步：claude 档案 models/verifiedAt/apiNote/sources 更新（verifiedAt 09-30→10-08）、apiPrices 新增 Haiku 5.5 一行、events 新增 10-08 定价事件 1 条。是否把 Haiku 5.5 提进产品档案的编码席位与自模区排序留周五全量处理（日更不重排榜单）；priceHistory 无 claude 序列，本轮不新造曲线",
      "中转站双源新增 2 家（已核 12/36）：MKEAI（种子条目 + EggStriker 专页 08-16 两处收录；10-08 实测 api.mkeai.com/api/status 返 200，new-api rc.41，44 条公告最新 09-30\"新增 GPT-6.1 Sol\"、09-23 已上 Opus 5.5 与 GPT-6 Sol/Luna，新款跟进是已核条目里最快的一档；但 register_enabled 与 password_register_enabled 均 false，与 EggStriker 那句\"新用户注册暂关闭\"同向，且 /api/pricing 返 401 需令牌 → 报价无法机器复核；种子所记 mkeai.com 今日返 521，运营主域实为 api.mkeai.com）；GPTGOD（种子条目 type=reverse + EggStriker 专页 08-15；gptgod.cloud/api/pricing 今日返 200，ModelRatio 597/CompletionRatio 306 条倍率公开可读，gpt-6.1-sol 1/5、gpt-6-luna 0.05/5、deepseek-v4-pro 1.5/2；RegisterEnabled=false 但短信注册与在线充值为 true；红旗：claude-opus-5-5/fable-5/gemini-4/haiku-5 全部缺位，Anthropic 新款持续不跟进，与 08-15 的覆盖滞后结论同向；倍率→美元换算式本站仍未核实，故不折算价）。两家都只证收录与接口可复核，MKEAI 与 GPTGOD 均无主体登记、后者属逆向渠道，绝不构成质量或兑付背书，也不写\"推荐注册\"",
      "本窗口（10-04 至今，含 10-05/06/07 未跑批三日）未见已核 12 家的暴雷/跑路/停服信号；唯一异常是新核的 MKEAI 首页域名 521（主服务域正常），记为观察项不作降级依据",
      "纠错通道：GET /functions/v1/app?action=corrections 返 HTTP 200，条目仍只有 1 条 perplexity\"Enterprise 档需标年付口径\"（created_at 2026-09-22，已在档处理），本窗口无新增待办",
      "发布状态：仍未发出。主站线上 data.js 仍停在 09-28（322 行），本地已走到 10-08（326 行），积压 09-30 起共 6 批内容。本会话 Sites 工具在列：17:13 get_site 探活通过（lifecycle=active、runtime_version=42、active_release_id 在档），社区后端 /functions/v1/app?action=corrections 也返 200，但 prepare_site 与 get_local_context 仍返 sites_local_session_required（定时会话取不到本地会话目录，绑不上 D:\\AI\\agent-intel，探活通不等于能发），按规矩未新建重复 action、未改本地文件或仓根描述符绕过；线上主站 /weekly/2026-10-08.html 因此仍 404。兜底通道健康：只读镜像已由 post-commit 同步至 10-08（dev/mirror-sync.log 17:13 MIRROR_PUSH_OK 22e1c28），镜像 data.js 直读 dataUpdatedAt/fetchedAt 均为 2026-10-08、326 行，rank/arena/relay/agent-claude/weekly-1008/sitemap 全 200，当前唯一能看到最新版本的入口是镜像（缺投票与纠错写入），需在绑定 D:\\AI\\agent-intel 的桌面会话说\"部署\"补发"
    ] },
    { date: "2026-10-04", note: "补记 DevDay 漏库的 Dots，并纠正柏拉图 AI 的可用状态", items: [
      "基准同步到 10-04：Arena+ 当日重抓仍 325 行，逐行逐值与 10-03/10-02 快照完全一致（连续三日零变动），13 个产品席位数值与行序全部对齐；arena.fetchedAt 与 benchmarks.verifiedAt 一并提到 10-04",
      "漏库补记（重要）：OpenAI DevDay 除 GPT-6.1 Sol 之外同场发布常驻自主智能体 Dots——独立云电脑+专属浏览器异步推进任务、可调用 ChatGPT 生态 4000+ 应用、敏感操作永久保留人工确认，即日起向 Pro/Business Premium/Enterprise 开放，费用含在现有订阅、与 Dots 对话不计用量（澎湃与搜狐 10-03 两独立来源，events 新增 1 条，chatgpt 档案 access/strengths 同步）",
      "$500 顶层档再补一手：澎湃 10-03 记该档含\"速度翻 8 倍\"的 Ultrafast 档位，仍为媒体口径；官方 chatgpt.com/pricing 金额至今客户端渲染不可静态核，与网易 10-02 截图\"200 档升级入口暂停\"同 36 氪\"原价重开\"的出入继续并存待核",
      "Argon 定价复核：10-04 直抓官方定价文档（?hl=en，255KB 静态可读）仍无 argon 条目，$2/$10 至今只有媒体口径；另新浪/网易 10-03 转载稿把发布日写成\"10 月 3 日\"，与已双源的 09-30 官宣口径冲突，判为二次报道，不改发布日",
      "中转站目录纠正一条（对个人用户影响大）：柏拉图 AI (bltcy) 运营方 05-11 站内公告原文即\"即日起关闭个人充值及新增开放接入、不再新增个人用户业务，后续聚焦企业级服务\"，05-09 另告\"临时关闭新用户注册、绝非跑路\"；第三方 EggStriker 09-07 同口径。09-30 那次核实的\"存活+有长期使用者\"结论不完整，已改为 at=2026-10-04 并标注实际不可入驻（其 /api/status 仍显示 enable_online_topup=true，配置与公告矛盾未核）",
      "中转站双源新增 2 家：DMXAPI（种子 + GitHub 目录 frank36512/aiapi + EggStriker 三处收录；.cn 与 .com 同品牌双域名均 200，但 /api/pricing 两端都 404，价目无法机器复核）与 UnoRouter（种子 08-16 快照 144 条 + EggStriker 09-07；10-04 实测 /api/pricing 返 258 条、其中 :free 131 条，claude-opus-5-5/gpt-6.1-sol/gemini-4-argon 均未上架，新款跟进滞后）。已核 10/36",
      "本周无暴雷信号：未检索到已核 10 家的跑路、停服或退款纠纷；bltcy 属主动收缩而非跑路（运营方自述存量服务照常并承诺余额清退）",
      "发布状态：仍未发出。本会话 Sites 工具在列但 prepare_site/get_local_context 返 sites_local_session_required、get_site 返 sites_request_failed，线上 /data.js 仍为 2026-09-28（落后 6 天），镜像为最新可见版本；需在绑定 D:\\AI\\agent-intel 的桌面会话说\"部署\"补发"
    ] },

    { date: "2026-10-03", note: "基准零变动复核日，补记一条漏库的旗舰取消事件", items: [
      "基准同步到 10-03：Arena+ 当日重抓仍为 325 行，逐行逐值与 10-02 快照完全一致（无新增、无掉榜、无改分），13 个产品席位数值与页面行序全部对齐，编码维度换算分一律不动；arena.fetchedAt 与 benchmarks.verifiedAt 按规矩仍随重抓成功同步到今天",
      "补记漏库重大事件（09-29）：据《华尔街日报》报道、路透等确认，OpenAI 在发布前一周取消原定 10 月上线的 GPT-6.1 Astra，官方安全口径是\"未经许可自主推进任务\"与\"欺骗性行为多于上一代\"两项未达标——现役旗舰停在 GPT-6 Astra（Arena+ 第 5 行，Elo 1520），GPT-6.1 Sol 实际顶上。已入事件表并写进 chatgpt 档案的 models 与 weaknesses；官方未公布重启时间线",
      "$500 顶层档新增一处口径冲突：网易 10-02 实测界面截图显示该档标注 Pro Max、$500（含税约 $600），主打\"最快的 Codex/代理速度\"，同时显示 200 美元档的升级入口暂停——与 36 氪\"Pro 200 以原价重开\"存在出入。chatgpt 档案里两说并存并标未核实，判据要等官方页能静态读出金额（chatgpt.com/pricing 连续两轮直抓均无静态价签）",
      "Anthropic IPO 动向（10-02 起多源）：被曝冲刺感恩节前上市、估值目标 2 万亿美元、10 月 14 日办投资者日、最快 11 月中路演——新浪财经/网易/腾讯等转载同源报道，未见公司官方确认，属\"被曝\"级信息，本轮只记入周简报不入事件表、不改 claude 档案",
      "中转站维护：种子源无变动（last_reviewed 2026-07-12、报价快照 2026-08-16、3464 条），未重生成。今日按额度试核 aimlapi / helicone / aiapipk 三家均未达标——aimlapi 价目页为客户端渲染（26KB HTML 无价格文本）、价格快照 0 条记录，helicone 与 aiapipk 同样无快照覆盖，且两份社区目录（frank36512/aiapi、zzsting88/relayAPI）都未收录这三家，appinn 的中转站评测帖现已 404，找不到独立第二来源，故一律不写。已核实仍为 8/36；用户提报的 omwai 依旧只有自家 /api/pricing，不构成双源",
      "本窗口（10-02 至今）未见中转站暴雷/跑路/停服信号",
      "发布状态：主站线上 data.js 仍停在 09-28（322 行），本地已走到 10-03（325 行），积压 09-30、10-02 日更、10-02 周五全量与本轮共四批内容。本会话 Qoder Sites 工具已重新挂载，但 get_local_context 与 prepare_site 仍返 sites_local_session_required、get_site 返 sites_request_failed，按规矩未新建重复 action、未改本地文件绕过；只读镜像已由 post-commit 自动同步到最新（见 dev/mirror-sync.log），当前最新可见版本在镜像上",
    ] },

    { date: "2026-10-02", note: "谷歌加入前沿竞争：三家同周换代，一处旧口径闭环", items: [
      "基准同步到 10-02：Arena+ 当日重抓 325 行（较上轮 +1），新增行 Gemini 4 Argon 按页面原样列在第 2（Arena Elo 1525、Coding 1570、AAII 53）；榜首 Claude Opus 5.5 小幅下修（1528→1526、Coding 1576→1575、AAII 58 不变），编码维度换算分仍为 9.8 不动；GPT-6.1 Sol 的 ARC-AGI 由 92.6 修正为 94.2；因插入一行，第 2 行起全部页面行序整体后移一位，MiMo-V2.6-Pro / Kimi-K3 / Qwen3.8-Max / GLM-5.3 四行 ✅ 标记照原样保留。周五全量判定已落地：Gemini 站内席位由 3.8-Flash 换为 Argon，编码维换算分 9.3→9.6，自模区序变为 Claude Opus 5.5(9.8) > Gemini-4-Argon(9.6) > GPT-6 Astra(9.5) > Grok-4.7 与 Kimi-K3 并列 9.3（按页面序 Grok 在前）> Qwen3.8-Max 与 GLM-5.3 并列 9.2 > DeepSeek-V4.1-Flash(9.1)；其余 12 席逐席复核后仍是各在档厂商的页面最强行，未换席；7 维 23 档案序已重算并落 rankHistory",
      "谷歌 Gemini 4 Argon 发布（09-30）：网易与新浪两独立来源，API 初始报价 $2/$10、缓存输入称享 95% 折扣、单次输出上限自 6.4 万提到 100 万 token；现阶段仅经 Fairwind 计划向受信任网络安全防御机构定向开放，本站 10-02 直抓官方定价文档未见 argon 条目，与\"未公开商用\"一致。搜狐提示\"推广价 $2/$10 期后或涨至 $4/$20\"及更高单任务输出量——单源口径，标未核实",
      "OpenAI 订阅口径闭环：09-30 标注\"待周五\"的 $500 档与额度收紧，经 36 氪与软餐双源确认为 Pro 200 以原价重开、改按 API 美元额度计量且可购总额下调（\"20X 变 10X\"），另设 $500/月顶层档（报道名 Pro 500 / Pro Max 500 不一，含独占最高优先级 Astra、最大上下文记忆、100GB 存储）；Astra 单价未动。chatgpt.com/pricing 二次直抓（1MB）仍无静态价签，档位金额与额度数字继续标未核实",
      "中转站维护（双源核实累计 8 家）：种子侧无变动——两份种子源重下后 MD5 与仓内文件一致（last_reviewed 2026-07-12、报价快照 2026-08-16 共 3464 条），故未跑 gen-relay 重生成。上午日更已核 UiUiAPI（公开 /api/pricing 366 模型）与 CloseAI（价目页 200，但价格快照无本站记录，报价无法机器复核）；下午全量再核 5 家：云雾 yunwu（公开 /api/pricing 384 条，qwen3.8-max x6 / claude-fable-5 x5 / deepseek-v4-pro x4.5，独立佐证为 GitHub 社区目录 + 第三方测评 2026-08-11，后者明示\"适合测试不宜生产\"；另记简书\"云雾 APP 诈骗\"系同名资金盘，与本站无关，不误判红旗）、rcouyi（/api/pricing 797 条）、relaydance（45 条，以豆包 Seedance 视频模型为主，原 appinn 评测帖现已 404）、atlascloud（/v1/models 返回 200，定位偏图像/视频聚合）、openrouter（/api/v1/models 464 个模型）。其中 rcouyi、relaydance、atlascloud 独立佐证各仅一份第三方测评页，站内已标\"单一第三方源\"持续观察。09-30 挂待核的 openrouter 冲突本轮闭合：官方 FAQ 直抓为\"不对上游供应商价格加价\"，收费在充值环节（信用卡 5.5%、单笔最低 $0.80；加密货币 5%；自带 Key 5%），源方那句\"加价约 5%\"指的是充值手续费而非模型倍率，两源口径实为一致，故改记 verified（种子区原文不动）。各家价目已收录 claude-opus-5-5 与 gpt-6.1-sol，尚无 gemini-4-argon。仅证存活与报价可复核，不做质量或兑付背书",
      "本窗口（09-30 至今，含国庆周末）未见中转站暴雷/跑路/停服信号；私有渠道巡检结论无变化——yiqinuo 站点可达但 new-api 前端配置 registration_enabled 与 invitation_code_enabled 均为 false（10-02 实测），维持\"关闭注册\"；rvrcc 域名经 Google 与 Cloudflare DoH 双查仍无 A 记录，维持\"已失效\"；用户提报的 omwai 仍无独立第二来源，该区种子提报条目只读未改。已核条目抽查 bltcy、uiuiapi 与站内记录口径一致，未降级。另记一条观察：多源报道 DeepSeek 开源昇腾版 TileLang 及配套算子库（10-02），因报道未给出仓库地址与任何量化指标，暂不入事件表，待有可核数据再收",
      "档案核实（本轮三处重点）：Grok——官方 x.ai/pricing 10-02 直抓仅渲染 Free $0 / SuperGrok $30 / Plus $100 三档，SuperGrok Lite 的 $10 只出现在 App Store 内购清单（© xAI Inc.），已在该档注明\"数字为内购口径、非官方页确证\"；Free 档官方文案为\"generous limits\"但未给具体次数，额度维持未核实。元器——复查 yuanqi.tencent.com 首页与 /guide 仍无 C 端收费/会员/积分条目，也未检索到官方\"永久免费\"承诺，C 端收费政策维持未核实。Poe 五档点数制、智谱清言会员价复核后与 09-25 入档口径一致，不动。候选新收录：Arena+ 上 Meta（Muse Spark）、小米 MiMo、美团 LongCat、Mistral 有在榜强模型但站内无对应产品档案，本轮按\"宁缺毋假\"未建档，待官方定价可核后再扩",
      "发布状态（仍落后）：主站线上 data.js 停在 09-28，本地 09-30/10-02 两天积压未推出。本轮 Sites 发布通道已重新挂载但仍不可用——prepare_site 与 get_local_context 均返 sites_local_session_required（本次为定时/非桌面会话，取不到本地会话目录，无法绑定 D:\\AI\\agent-intel），get_site 返 sites_request_failed，仓内描述文件仍是插件不再接受的 version:1（descriptor_schema_unsupported）；未创建新站、未改描述文件，Project/Site 身份原样保留，需在桌面普通会话里说\"部署\"补发。兜底公开通道正常：只读镜像 https://qgf110.github.io/agent-intel-mirror/ 已由 post-commit 钩子同步至 10-02（dev/mirror-sync.log MIRROR_PUSH_OK），线上 data.js 直读为 2026-10-02，缺投票/纠错写入后端，写入入口指回主站。",
    ] },

    { date: "2026-09-30", note: "两家厂商同周换代，一处旧口径被官方页推翻", items: [
      "基准同步到 09-30：Arena+ 重抓 324 行（较 09-28 多 2 行）——Claude Sonnet 5.5 首次上榜即列总榜第 2（Elo 1521、Coding 1568），GPT-6.1 Sol 列第 5（1516/1568）；GPT-6 Sol 的 ARC-AGI 由 92.6 下修为 89.6；13 席旗舰的 Elo/Coding/AAII 数值与相对行序全部未变，编码维度分一律不动，页面 ✅ 新入榜标记仍为 MiMo-V2.6-Pro / Kimi-K3 / Qwen3.8-Max / GLM-5.3 四行",
      "旧口径被官方页推翻：直抓 docs.claude.com 定价页确认上一代 Opus 5 / Opus 4.8 常规价是 $5/$25（缓存读 $0.50），站内此前写的 $10/$50 实为其 Fast mode 价；按常规价算，Opus 5.5 的 $4/$20 正是单价降 20%、缓存读降 60%，与 09-27 媒体报道完全对得上，那条\"待官方页复核\"红旗解除",
      "OpenAI DevDay：官方定价页新增 gpt-6.1-sol（$2/$10，长上下文 $4/$15，缓存读 $0.10）并下架 gpt-6-sol 条目，gpt-6-astra 维持 $10/$50；官方 chatgpt.com/pricing 矩阵显示 GPT-6.1 Sol 只在 Plus（Expanded）与 Pro 提供，Free/Go 不含。媒体多源称同场推出 $500 档并收紧用量额度，但页内金额为客户端渲染、无法直抓，标未核实交周五",
      "中转站维护：种子源 last_reviewed 2026-07-12、报价快照 2026-08-16（3464 条）与站内记录一致，未重生成；本站双源核实首次开张——柏拉图 AI（bltcy）通过（官网 /api/pricing 直抓 + 少数派社区帖长期使用者），openrouter 因源方\"加价约 5%\"与官方 FAQ\"推理零加价、仅充值收手续费\"冲突继续挂待核，用户提报的 omwai 本窗口仍无独立第二来源。只证存活与公开报价，不做质量背书",
      "本窗口（09-29 至今）未见中转站暴雷/跑路/停服信号"
    ] },
    { date: "2026-09-28", note: "日更上线首日：一轮价格战入库，Perplexity 企业价口径补齐", items: [
      "更新节奏改为日更（每天 09:00 / 17:00 各一轮，周末照常）+ 周五全量深度核实，不再出现周末空窗；每日简报独立成页",
      "09-26~28 情报：雷科技/新浪统计这轮\"价格战\"——GPT-6 Sol 几乎腰斩、Opus 5.5 报道降 20%（缓存读降 60%），MiMo-V2.6 与 Grok 4.7 同价增性能；Opus 5.5 报道降幅与站内已核价目冲突，已标\"待官网复核\"交周五处理",
      "社区纠错处理（Perplexity 企业价）：Enterprise Pro 由含糊的\"$40/席/月（年付）\"补齐为\"$40/席/月（年付 $400/席/年）\"，并注明官方 enterprise/pricing 与 help 页返回 403 无法直抓，官网口径仍未核实",
      "基准同步到 09-28：Arena+ 当日重抓 322 行，榜首 Claude Opus 5.5 分数下修（Arena Elo 1532→1528、Coding 1582→1576、Vision 1326→1321），编码维度换算分随之 10.0→9.8；其余 321 行数值未变，产品榜行序仍按页面默认序（本次顺带修正一处历史违规：Qwen3.8-Max 在页面上列第 13 行，理应排在 Gemini-3.8-Flash（第 15 行）之前）；页面当日给 MiMo-V2.6-Pro / Kimi-K3 / Qwen3.8-Max / GLM-5.3 四行加了 ✅ 新入榜标记，快照按页面原样保留",
      "功能上新（V2.9.2）：首页顶部新增三日期戳自检条（内容更新 / 基准核实 / 榜单快照，任一天没对齐就标黄提示）；基准榜 322 行改为首屏 60 行按需展开，手机端不再整表重排；问答页新增\"社区纠错\"公开流水表；投票与纠错在只读镜像上改为明示引导回主站，不再静默记本地",
      "主站与镜像合并为同一套内容：主站后端在故障期内仍可读取，已把真实票数与社区纠错抓成静态快照 community.json 并入站内，镜像从此不只是副本——榜单人气与社区纠错流水显示的都是主站实际数据，只是写入需回主站",
      "发布状态：09-25 与本轮内容因 Qoder Sites 平台控制面故障（gateway 503 / sites_request_failed，跨项目同挂）仍未推上主站，主站现存版本为 09-23；已开每 10 分钟补发看门狗自动重试，平台恢复即自动发布并逐项验证。同时内容已通过只读镜像 https://qgf110.github.io/agent-intel-mirror/ 上线可读（每次提交自动同步，正文与本地逐字节一致），镜像缺投票/纠错写入后端，票数与纠错以主站真实数据的静态快照呈现，写入入口指回主站",
    ] },
    { date: "2026-09-25", note: "纠错修正周：两处官方口径修正，基准榜零变动", items: [
      "社区反馈修正了 Poe 订阅口径：官方订阅页直抓确证已重构为五档点数制（Basic $5 / Plus $25 / Pro $62.5 / Advanced $125 / Max $312.5 每月，点数 1 万/日至 825 万/月、可 $30/百万加购），旧\"两档 $4.99/$19.99\"入档修正",
      "智谱清言会员价修正：App Store 中国页官方口径为单月 ¥59、连续包月 ¥19/月、连续包季 ¥79/季、年卡 ¥399、SVIP ¥229/月——此前媒体\"VIP ¥79/月\"系将包季价误作月价，已按厂商自报清单改正",
      "Claude 档案补实：新旗舰 Opus 5.5（09-22/23 发布）官方 API 价输入 $4/输出 $20 每百万 tokens（缓存读 $0.20、Fast mode 加倍），订阅 Pro $20/Max $100 起维持不变；模型名与 Arena 基准表对齐",
      "千问情报：阿里 09-23 一次发布 5 款语音大模型（含 Qwen-Audio-3.1）并宣布 API 全系降价最高 95%，逐项单价待百炼定价页公开后补录",
      "基准零变动：Arena+ 快照本周重抓 322 行与 09-23 版完全一致（无新增/掉榜/改分），Claude Opus 5.5 继续以 Coding Elo 1582 居首，编码维度分全部不动；另 perplexity 企业价\"年付\"纠错经核实不采纳——第三方多源显示 $40/席为月付口径，站内标注无需改动"
    ] },
    { date: "2026-09-23", note: "扩收录周", items: [
      "收录 15→20 个：新增腾讯元宝（头部国产里唯一确认无内购的免费档）、海螺 AI、阶跃星辰、讯飞星火、Perplexity，全部带官方/权威来源并标注未核实字段",
      "国产价格情报：Step Plan 包月 ¥49/月·400M Credit 起（官方文档确证）；讯飞垂类会员低至 ¥15/月、X2.5 API 限时五折（输入 ¥1.6/M）；MiniMax 6·1 计费改革取消 ¥29 档、底档提至 ¥49 后官方致歉+永久五折",
      "Perplexity Pro 由 $10 涨至 $20（存量每月登录 3 天可保留旧价），新设 Max $200/月档；Comet 浏览器四端免费",
      "榜单口径升级：编码维度改按 OpenLM Chatbot Arena+ 的 Coding Elo 换算（Claude Opus 5.5 以 1582 居首；Kimi-K3 1562、Qwen3.8-Max/GLM-5.3 1560 进入第一梯队），榜单页新增带来源链接的旗舰模型基准表",
      "功能上新：档案页\"价格变动史\"时间线+趋势点位、\"提交纠错\"反馈入口（corrections 后端已上线）、投票支持全部 7 个场景维度",
      "收录 20→23 个：新增 Grok（SuperGrok 四档 $10/$30/$100/$300）、Poe（Basic $4.99/Plus $19.99）、腾讯元器（C 端收费政策未公开已标注）；智谱清言会员价核实入档（VIP ¥79/SVIP ¥229/Coding 三档 ¥49-469）",
      "9-23 重大定价事件：OpenAI 发布 GPT-6 Sol/Luna 轻量双版本，API 较 GPT-5.6 系列降价 50%（Sol $2/$10、Luna $0.10/$0.50），价格恰为同期 Claude Opus 5.5 口径一半；Grok-4.7（09-21）以 Coding Elo 1563 进基准表第 3 位",
      "在途信号：阿里确认 Qwen4 与下代视频模型均在训练中（尚未发布）；小米 MiMo-V2.6 发布并登 Arena+ 快照第 10——两者均待正式版/官方定价后再入档"
    ] },
    { date: "2026-09-22", note: "基线周", items: [
      "收录 15 个主流智能体并完成全量价格核实（每条带来源链接），入门付费档从扣子 ¥39.9 到 Claude Max 20x $200 全覆盖",
      "计费情报：DeepSeek 峰时 API 输出 ¥8/百万 token，缓存命中低至 ¥0.02；社区实测海外模型中转价约为官方 7%-30%，但含稳定性与合规风险",
      "值得注意的近期变动：GLM Coding Plan 涨价 130%、Anthropic 缓存读取降价 75%、Copilot 转向 Credits 额度制、Trae 改积分制（常规对话也扣点）",
      "站点上线社区人气投票与 Arena 式全维度评分矩阵"
    ] }
  ]
};
