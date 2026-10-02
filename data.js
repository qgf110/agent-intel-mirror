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
    dataUpdatedAt: "2026-10-02",
    exchangeRate: "1 USD ≈ 7.1 CNY（折算参考）",
    disclaimer: "价格与额度变动频繁，一切以官网为准；本页信息核实于 dataUpdatedAt 标注日期。"
  },

  /* ---------------- 智能体档案 ---------------- */
  agents: [
    {
      id: "chatgpt", name: "ChatGPT", vendor: "OpenAI", region: "海外",
      tagline: "综合最强的通用智能体，Agent 生态最全",
      models: ["GPT-6 (Astra)", "GPT-6.1 Sol（2026-09-30 上线，取代 GPT-6 Sol）", "GPT-6 Luna", "GPT-5.3"],
      verifiedAt: "2026-10-02",
      plans: [
        { name: "Free", price: "$0", note: "基础模型额度受限；桌面客户端可用 GPT-6 Luna（2026-09-23 起，网页版暂不开放）" },
        { name: "Go", price: "$8/月", note: "轻量付费档；桌面端可用 Luna" },
        { name: "Plus", price: "$20/月", note: "主流档，可用 GPT-6 部分能力；Work/Codex 环境可试 Sol/Luna。09-30 官方定价页矩阵：GPT-6.1 Sol 在 Plus 为 Expanded、Pro 可用，Free/Go 不含" },
        { name: "Pro", price: "$200/月", note: "2026-09 曾因需求暂停新订阅；2026-09-30 以原价重新开放，但计费改为按 API 美元额度计量、可购额度总额下调（媒体口径\"砍半\"，社区概括\"20X 变 10X\"），官方未承诺存量额度永久保留" },
        { name: "Pro 500", price: "$500/月", note: "DevDay 新增顶层档（媒体报道名 Pro 500 / Pro Max 500 不一）：独占最高优先级 Astra 算力、最大上下文与记忆、100GB 专属存储；官方 chatgpt.com/pricing 金额为客户端渲染，10-02 直抓未静态输出，具体额度待核" }
      ],
      apiNote: "2026-09-23 发布 GPT-6 轻量版 API 价：Sol 输入 $2/输出 $10、Luna 输入 $0.10/输出 $0.50 每百万 tokens，较 GPT-5.6 系列降约 50%；官方称 Sol 错误率约为 GPT-5.6 Sol 一半，DeepSWE 得分 Sol 68.8%/Luna 66.6%。09-30 复核官方定价页（platform.openai.com/docs/pricing）：新条目 gpt-6.1-sol 输入 $2/输出 $10（长上下文 $4/$15、缓存读 $0.10、缓存写 $2.50），gpt-6-sol 条目已下架；gpt-6-astra 仍为 $10/$50（长上下文 $20/$75）",
      access: { difficulty: 5, need: "网络环境 + 海外支付卡（或代充渠道）", note: "有封号风险记录，低价代充需警惕" },
      strengths: ["Agent/自动化生态最成熟", "软件工程与推理实测强", "GPT-6 已向 Plus/Pro 推送", "Sol/Luna 降价后低档 API 性价比追近国产"],
      weaknesses: ["Pro 重开但额度收紧（\"20X 变 10X\"口径），旗舰 Astra 未降价、重度用量有效消耗腰斩", "国内支付门槛高", "免费档限制多"],
      sources: [
        "https://omidsaffari.com/zh-cn/blog/chatgpt-pricing-zh-cn",
        "https://www.allagent.wiki/blog/openai-pauses-pro-200-signups/",
        "https://getgptplus.app/blog/gpt-6-pro-users-rollout",
        "https://finance.sina.com.cn/tech/roll/2026-09-23/doc-inisuaat1609597.shtml",
        "http://app.myzaker.com/news/article.php?pk=6ab3312ab15ec067983c6160",
        "https://www.36kr.com/p/4005459400496771",
        "https://www.ruancan.com/p/285997.html"
      ]
    },
    {
      id: "claude", name: "Claude", vendor: "Anthropic", region: "海外",
      tagline: "编码与长文推理首选，额度规则最复杂",
      models: ["Opus 5.5（2026-09-22/23 发布，基准榜首）", "Fable 5.1", "Mythos 5.1", "Sonnet 5.5（2026-09-28 上线，$2/$10 与 Sonnet 5 同价）"],
      verifiedAt: "2026-09-30",
      plans: [
        { name: "Free", price: "$0", note: "不含 Fable 访问" },
        { name: "Pro", price: "$20/月 或 $200/年", note: "基础档不覆盖 Fable，需预付 usage credits；约 45 请求/5小时" },
        { name: "Max 5x", price: "$100/月", note: "Fable 内置额度，占周额度上限一半" },
        { name: "Max 20x", price: "$200/月", note: "重度用户档" }
      ],
      apiNote: "官方文档现价（docs.claude.com，2026-09-30 直抓复核）：Opus 5.5 输入 $4/输出 $20 每百万 tokens（5 分钟缓存写 $5、1 小时写 $8、缓存读 $0.20），Fast mode 加倍为 $8/$40；上一代 Opus 5 / Opus 4.8 常规价为 $5/$25（缓存读 $0.50），$10/$50 是它们的 Fast mode 价——站内旧注把 Fast mode 价误作常规价，才显出\"降 60%\"的假冲突。按常规价对比，Opus 5.5 单价降 20%、缓存读降 60%，与 09-27 媒体报道完全一致，该冲突就此消解。另 Sonnet 5.5（2026-09-28 上线）$2/$10，与 Sonnet 5 同价（缓存读 $0.20）",
      access: { difficulty: 5, need: "网络环境 + 海外支付卡", note: "5 小时滚动窗口 + 周上限双重限额；美区推理有 1.1× 附加费；日本账户 9/10 后充值积分 6 个月过期" },
      strengths: ["编码智能体公认第一梯队", "全线 1M token 上下文", "缓存读取价格大降 75%（$0.25/M）"],
      weaknesses: ["额度规则复杂、Pro 用 Fable 需额外买积分", "价格偏贵", "国内支付门槛高"],
      sources: [
        "https://docs.claude.com/en/docs/about-claude/pricing",
        "https://claude.com/pricing",
        "https://leedu.ac.cn/article/claude-pro-max-5x-20x-comparison/",
        "https://zhangwenbao.com/claude-rate-limits.html",
        "https://omidsaffari.com/zh-cn/blog/claude-code-pricing-2026-zh-cn"
      ]
    },
    {
      id: "gemini", name: "Gemini", vendor: "Google", region: "海外",
      tagline: "多模态与长上下文之王，入门价最低",
      models: ["Gemini 3 系列", "Gemini 4 Argon（2026-09-30 发布，Arena+ 页面列第 2，暂未公开商用）", "Gemini 3.8 Flash"],
      verifiedAt: "2026-10-02",
      plans: [
        { name: "Free", price: "$0", note: "每日数百次提示 + 图像 + 少量视频生成" },
        { name: "AI Plus", price: "$7.99/月", note: "入门档，全场最低价之一" },
        { name: "AI Pro", price: "$19.99/月", note: "深度绑定 Google 全家桶" },
        { name: "Ultra", price: "$200/月", note: "顶配档；另有 $100 开发者档。媒体报道 Argon 后续将向 Ultra 与付费 API 客户逐步开放，官方未公布商用日程" }
      ],
      apiNote: "2026-09-30 谷歌发布新一代前沿模型 Gemini 4 Argon（Arena+ 10-02 快照列总榜第 2：Arena Elo 1525、Coding 1570、AAII 53，仅次于 Claude Opus 5.5）。媒体口径 API 初始报价输入 $2/输出 $10 每百万 tokens、缓存输入享 95% 折扣、单次响应上限提至 100 万 token（原 6.4 万）；另有媒体提示该报价为推广期价、推广期后可能涨至 $4/$20，两口径均未见官方页可核。10-02 直抓官方定价文档（ai.google.dev/gemini-api/docs/pricing）无 argon 条目，当前仅经 Fairwind 计划向受信任网络安全防御机构定向开放。",
      access: { difficulty: 4, need: "网络环境 + 海外支付（部分区域支持）", note: "免费档可用性在海外产品中相对最好；Argon 现阶段不对普通用户开放" },
      strengths: ["视频/音频等视觉生成最强", "超长上下文", "免费版最厚道、预算效率高", "Argon 单次输出上限 100 万 token，追平第一梯队基准"],
      weaknesses: ["复杂 Agent 任务稳定执行略逊", "深度使用依赖 Google 生态", "新旗舰 Argon 仅定向开放，买不到；单价口径存在推广价与翻倍价两说"],
      sources: ["https://omidsaffari.com/zh-cn/blog/gemini-vs-chatgpt-zh-cn", "https://ai.google.dev/gemini-api/docs/pricing", "https://m.163.com/dy/article/L85Q4FTK0511BLFD.html", "https://m.sohu.com/a/1083187131_434604"]
    },
    {
      id: "manus", name: "Manus", vendor: "Manus AI", region: "海外（华人团队）",
      tagline: "自主任务执行的代名词，积分制计费",
      models: ["Manus Agent"],
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "$0", note: "注册送免费积分" },
        { name: "Standard", price: "$20/月 ≈ 4,000 积分", note: "非无限使用，重度任务消耗快" }
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
      verifiedAt: "2026-09-22",
      plans: [
        { name: "对话 App/Web", price: "免费", note: "无订阅档" },
        { name: "API Flash", price: "输出 ¥4/M（闲时）· ¥8/M（峰时）", note: "缓存命中输入低至 ¥0.02/M" },
        { name: "API V4 Pro", price: "输出 ¥13.5/M（闲时）· ¥27/M（峰时）", note: "缓存命中输入 ¥0.15/M" }
      ],
      apiNote: "峰时计价：工作日（非法定节假日）9:00-12:00、14:00-18:00，其余为闲时价",
      access: { difficulty: 1, need: "手机号直接注册", note: "国内直连无障碍" },
      strengths: ["价格碾压级便宜", "推理/代码能力强", "国内直连"],
      weaknesses: ["2026-08 官宣涨价（峰谷差价）", "无官方多模态生成强项", "高峰期限流历史"],
      sources: [
        "https://api-docs.deepseek.com/zh-cn/quick_start/pricing/",
        "https://www.thepaper.cn/newsDetail_forward_33785892",
        "https://omidsaffari.com/zh-cn/blog/deepseek-pricing-zh-cn"
      ]
    },
    {
      id: "kimi", name: "Kimi", vendor: "月之暗面", region: "国内",
      tagline: "Agent 能力突出的国产选手，已推出 Token Plan",
      models: ["Kimi K2 系列"],
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "免费", note: "聊天免费" },
        { name: "会员", price: "约 $19/月等值", note: "2026 年套餐拆分，含更高 Agent 额度" },
        { name: "Token Plan", price: "编程订阅档", note: "面向编码场景的包月计划" }
      ],
      access: { difficulty: 1, need: "手机号直接注册", note: "国内直连无障碍" },
      strengths: ["K2 系列 Agent/工具调用能力国产领先", "长上下文", "正在启动 IPO（估值目标 500 亿美元）"],
      weaknesses: ["会员与 Token Plan 规则调整频繁", "多模态生成弱于大厂"],
      sources: [
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
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "免费", note: "基础能力长期免费" },
        { name: "订阅", price: "2026-09 起开卖", note: "开始商业化订阅，具体档位见官网" },
        { name: "方舟 Coding Plan", price: "Lite 档约 ¥40/月起", note: "国产编程套餐最入门价位段之一" }
      ],
      access: { difficulty: 1, need: "手机号直接注册", note: "国内直连无障碍" },
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
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Hobby", price: "免费", note: "试用额度" },
        { name: "Pro", price: "$20/月", note: "含 $20 API 额度；手动选前沿模型/Max Mode 才扣额度" },
        { name: "Pro+", price: "$60/月", note: "含 $70 额度；解锁 Grok、Composer、Auto 模型" },
        { name: "Ultra", price: "$200/月", note: "含 $400 API 额度" },
        { name: "Teams", price: "$40/人/月", note: "团队协作档" }
      ],
      access: { difficulty: 4, need: "海外信用卡；学生认证可免费 Pro", note: "Auto 模式所有付费档无限使用不耗额度；2026-09 中被报道部分计价上调约 60%" },
      strengths: ["编辑器内 Agent 体验第一梯队", "多模型自由切换", "学生免费 Pro"],
      weaknesses: ["重度用户成本全场最高", "计费规则复杂、有提价前科", "被收购后数据归属存疑"],
      sources: [
        "https://tkcursor.com/cursor-pricing-guide-2026-cn/",
        "https://mparticle.uc.cn/article.html?uc_param_str=frdnsnpfvecpntnwprdssskt#!wm_aid=88025ecfab58420cbde98a39dcedfe73!!wm_id=6297a14a523343eda756100d69e7af2a",
        "https://eastondev.com/blog/zh/posts/dev/20260110-cursor-pro-subscription-guide/"
      ]
    },
    {
      id: "copilot", name: "GitHub Copilot", vendor: "Microsoft / GitHub", region: "海外",
      tagline: "入门最便宜的编码订阅，但改按量计费后含金量存疑",
      models: ["多模型（自动选择）"],
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "免费", note: "受限额度，仅自动模型选择" },
        { name: "Student", price: "免费", note: "学生认证，排除第三方代理" },
        { name: "Pro", price: "$10/月", note: "1,500 AI credits/月（部分用户免费）" },
        { name: "Pro+", price: "$39/月", note: "7,000 credits/月" },
        { name: "Max", price: "$100/月", note: "20,000 credits/月" }
      ],
      access: { difficulty: 3.5, need: "GitHub 账号 + 外币支付", note: "2026-08 起从包月无限转为按 token/credits 计费，社区测算重度用户订阅价值缩水至约 25%" },
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
      verifiedAt: "2026-09-22",
      plans: [
        { name: "基础档", price: "免月租", note: "新手每月送 500 点数 + 2 次云端任务" },
        { name: "轻享", price: "¥49/月（首月 9.9）", note: "轻度使用" },
        { name: "专业", price: "¥99/月（首月 59）", note: "主流档" },
        { name: "进阶", price: "¥239/月（首月 219）", note: "重度使用" },
        { name: "至尊", price: "¥699/月（首月 629）", note: "顶配" }
      ],
      access: { difficulty: 1, need: "手机号直连", note: "2026-07-31 起定额制改按量扣点，常规对话与脚本也计费，社区普遍反馈变贵" },
      strengths: ["国内直连的 AI IDE", "中文理解好", "首月优惠激进"],
      weaknesses: ["积分制下成本不可预测", "免费额度缩水", "深度能力逊于 Claude/Cursor"],
      sources: ["https://blog.csdn.net/heng_llh/article/details/163377039"]
    },
    {
      id: "qianwen", name: "千问（通义）", vendor: "阿里巴巴", region: "国内",
      tagline: "开源下载量全球第一的国产系，App 已开启三档会员",
      models: ["Qwen3.8 系列（含开源 Qwen3.8-27B）"],
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "免费", note: "App 基础能力" },
        { name: "会员三档", price: "2026-08-13 起收费，三档定价低于豆包", note: "以 App 内价格为准；办公助理年费最高 ¥1,499" }
      ],
      access: { difficulty: 1, need: "手机号直连", note: "开源模型全球下载超 30 亿次，可本地部署零成本" },
      strengths: ["开源生态最强（可本地白嫖）", "长上下文与中文能力强", "定价激进低于豆包"],
      weaknesses: ["付费规则刚起步", "Agent 自动执行生态弱于 OpenAI/Claude"],
      sources: [
        "https://finance.sina.cn/tech/csj/2026-08-13/detail-inineiyk4692269.d.html",
        "https://www.iheima.com/article-400518.html",
        "https://www.donews.com/news/detail/4/6672131.html"
      ]
    },
    {
      id: "devin", name: "Devin Desktop（原 Windsurf）", vendor: "Cognition", region: "海外",
      tagline: "被 AI 程序员公司收编的编辑器，改名后主打 SWE 智能体",
      models: ["SWE-1.6 / SWE-2", "Cascade"],
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "免费", note: "基础额度" },
        { name: "Pro", price: "$15/月", note: "比 Cursor Pro 低 $5；另有 BYOK 自带钥匙接入" },
        { name: "Teams", price: "$35/人/月", note: "团队档" }
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
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "免费", note: "注册赠积分" },
        { name: "个人专业版", price: "¥39.9 - ¥999/月", note: "按积分用量分档（1000 积分 = 1 元）" },
        { name: "团队版", price: "¥198 - ¥1,998/月", note: "多人协作" },
        { name: "企业版", price: "¥980 起", note: "私有化与合规" }
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
      verifiedAt: "2026-09-22",
      plans: [
        { name: "Free", price: "免费", note: "基础功能免费" },
        { name: "会员", price: "低价档（App 内为准）", note: "2026-06 报道 C 端付费率不足一成" },
        { name: "API", price: "2026-06 起价格砍 85%", note: "阶梯优惠，B 端激进降价" }
      ],
      access: { difficulty: 1, need: "手机号直连", note: "国内直连无障碍" },
      strengths: ["API 降价后价格战弹药充足", "搜索增强与中文知识库", "百度生态入口多"],
      weaknesses: ["Agent/编码能力第一梯队之外", "C 端产品迭代放缓"],
      sources: ["https://www.toutiao.com/a7647574337255424548/"]
    },
    {
      id: "perplexity", name: "Perplexity", vendor: "Perplexity AI", region: "海外",
      tagline: "带引用的实时搜索问答，检索+溯源最成熟，Pro 刚涨价",
      models: ["自研 Sonar 系列 + 多家旗舰聚合（GPT-5.6 / Gemini 3.7 / Claude / Kimi K3 / GLM 5.3 / Grok 4.6）"],
      verifiedAt: "2026-09-28",
      plans: [
        { name: "Free", price: "$0", note: "基础检索近乎不限量；高级搜索 3 次/日、深度研究 1 次/月（第三方汇总口径）" },
        { name: "Pro", price: "$20/月 或 $200/年", note: "2026-08-14 新订阅由 $10 上调；存量可保持 $10 但每月需登录 3 天保资格；全模型切换" },
        { name: "Max", price: "$200/月 或 $2,000/年", note: "2026-07-16 新设最高个人档：Opus 5/GPT-5.6 Sol + 10,000 算力积分/月（100 积分=$1）" },
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
      verifiedAt: "2026-09-23",
      plans: [
        { name: "Free", price: "免费", note: "App Store 中国页（2026-09-17 抓取）未列任何内购项目；第三方核实\"暂无付费会员\"" },
        { name: "腾讯云 Token Plan（非元宝会员）", price: "¥28 - ¥468/月", note: "Hy 个人版四档按\"积分\"计（Lite 28/560 点，Max 468/9360 点）——买的是腾讯云平台额度，勿与元宝混为一谈" }
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
      verifiedAt: "2026-09-23",
      plans: [
        { name: "Free", price: "免费", note: "国内版免费额度规则未公开核实；官方按量页仅列豁免项" },
        { name: "订阅（国内）", price: "底档 ¥49/月起", note: "2026-06-01 起取消 ¥29 Starter 档；国内官网会员页不可直接抓取，更高档价未核实" },
        { name: "国际版会员", price: "$7.99 - $199.99/月（限时价）", note: "Standard 14.99→7.99（1,000 积分）到 Max 199.99（20,000 积分），仅美元月付（hailuoai.video 确证）" },
        { name: "API 按量", price: "M3 输入 ¥2.1/输出 ¥8.4 每百万", note: "≤512k 标准价；>512k 翻倍；视频 H3 每秒 ¥0.5(768P)-0.8(2K)（官方按量页确证）" }
      ],
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
      verifiedAt: "2026-09-23",
      plans: [
        { name: "Free", price: "免费", note: "新注册送 160 积分/7 天全功能体验；登录送 15 天、首调再送 15 天、邀好友最多再加 45 天（最高免费 75 天）" },
        { name: "C 端会员", price: "档位价未核实", note: "尝鲜周卡/入门 1300 积分/高级 4500/进阶 10000/专业 27000 积分，官方页不披露人民币金额" },
        { name: "Step Plan（API 包月）", price: "¥49 - ¥699/月", note: "Flash Mini 49/月·400M Credit 起，Max 699/月·40000M；月池月末清零不结转，需指定 Base URL 才扣套餐（官方文档确证）" }
      ],
      apiNote: "Step 5 Preview 按量：输入 ¥7 / 缓存命中 ¥0.35 / 输出 ¥20 每百万 tokens（1M 上下文）；官方口径单任务成本为 Claude Opus 5 的 1/8",
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
      verifiedAt: "2026-10-02",
      plans: [
        { name: "Free", price: "$0", note: "官方定价页 2026-10-02 直抓原文仅\"Get to know Grok and its capabilities for free within generous limits\"，无任何条数/时长数字；grok.com 结构化数据也只标 price=0（Auto/Fast 可用，Expert/Heavy 需升级）→ 免费档具体额度仍未核实" },
        { name: "SuperGrok Lite", price: "$10/月", note: "价格来源为 App Store 内购清单（© xAI Inc.）；2026-10-02 官方 x.ai/pricing 对比表列出该档但**未公示月费**（页面仅渲染 Free $0 / SuperGrok $30 / Plus $100）→ 数字为内购口径，非官方页确证" },
        { name: "SuperGrok", price: "$30/月", note: "官方定价页 2026-10-02 直抓确证（\"SuperGrok | $30 | /month\"，含 Grok 4.6 模型、Grok Bot、更高额度）；Grok Bot 已扩展至全部 SuperGrok 计划（2026-08-26 官方）" },
        { name: "SuperGrok Plus", price: "$100/月", note: "官方定价页 2026-10-02 直抓确证（$100/month，1080p 视频生成 + 显著更高用量）；另有 $5-$100 加量积分包" },
        { name: "SuperGrok Heavy", price: "$300/月", note: "价格来源为 App Store 内购清单；2026-10-02 官方定价页该档转 \"Contact/Get Heavy\" 未公示月费 → 未核实" }
      ],
      apiNote: "Grok 4.7 API 官方公告价 $2/$6 每百万 tokens（输入/输出，2026-09-21）",
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
      tagline: "微信/QQ 生态的智能体创建平台，C 端收费政策未公开",
      models: ["混元 Hy3（2026-07-06 发布）/ Hy4 preview（2026-08-28）", "可挂第三方模型"],
      verifiedAt: "2026-10-02",
      plans: [
        { name: "创建/使用", price: "免费（当前）", note: "2026-10-02 复查 yuanqi.tencent.com 首页与 /guide 使用指南页，仍无任何 C 端收费、会员或积分条目，也未找到官方\"永久免费\"承诺 → 是否长期免费未核实；仅见用户协议页" }
      ],
      apiNote: "底层能力走腾讯云混元计费（与元器平台分开）：Hunyuan-a13b 输入 ¥0.5/输出 ¥2；Hy3 输入 ¥1/输出 ¥4/缓存命中 ¥0.25 每百万 tokens；第三方模型限时免费已于 2026-03-13 结束",
      access: { difficulty: 1, need: "微信/QQ 账号直接登录", note: "国内直连无障碍" },
      strengths: ["微信/QQ 双生态分发入口", "零代码创建智能体门槛低", "混元新模型免费体验期政策活跃"],
      weaknesses: ["C 端商业化政策不透明（未核实）", "与扣子定位重叠，差异化靠腾讯生态", "高级能力受平台审核与配额约束"],
      sources: [
        "https://yuanqi.tencent.com/",
        "https://yuanqi.tencent.com/agreements/terms-of-service",
        "https://cloud.tencent.com/document/product/1729/97594"
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
    stepfun:  { coding: 4.7, agent: 8.0, office: 6.0, multimodal: 8.0, context: 9.0, value: 9.0, access: 7.0 },
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
    wenxin:   { coding: 6.9, agent: 6.0, office: 7.8, multimodal: 7.5, context: 7.0, value: 8.8, access: 9.8 }
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
    verifiedAt: "2026-10-02",
    models: [
      { agent: "claude",   model: "Claude Opus 5.5",    elo: 1526, coding: 1575, aaii: 58 },
      { agent: "gemini",   model: "Gemini-4-Argon",     elo: 1525, coding: 1570, aaii: 53 },
      { agent: "chatgpt",  model: "GPT-6 Astra",        elo: 1520, coding: 1568, aaii: 53 },
      { agent: "grok",     model: "Grok-4.7",           elo: 1507, coding: 1563, aaii: 47 },
      { agent: "kimi",     model: "Kimi-K3",            elo: 1506, coding: 1562, aaii: 46 },
      { agent: "qianwen",  model: "Qwen3.8-Max",        elo: 1506, coding: 1560, aaii: 45 },
      { agent: "glm",      model: "GLM-5.3",            elo: 1505, coding: 1560, aaii: 45 },
      { agent: "deepseek", model: "DeepSeek-V4.1-Flash", elo: 1503, coding: 1557, aaii: 43 },
      { agent: "wenxin",   model: "ERNIE-5.1",          elo: 1475, coding: 1495, aaii: 40 },
      { agent: "doubao",   model: "Seed2.0 Pro",        elo: 1466, coding: 1495, aaii: 39 },
      { agent: "hailuo",   model: "Minimax-M3",         elo: 1452, coding: 1485, aaii: 39 },
      { agent: "yuanbao",  model: "Hunyuan-Hy3",        elo: 1422, coding: 1448, aaii: 35 },
      { agent: "stepfun",  model: "Step-3.5-Flash",     elo: 1387, coding: 1433, aaii: 31 }
    ]
  },

  /* ---------------- Arena+ 全量快照（V2.6，榜单页"基准榜"页签与 /arena.html 的数据源） ----------------
   * rows = openlm.ai/chatbot-arena 页面全部行，按页面行序原样收录（抓取解析，严禁重排）。
   * 每行: [Model, Arena Elo, Coding, Vision, AAII, MMLU-Pro, ARC-AGI, Organization, License]；空串=该列页面未收录。
   * 每周 cron 重新抓取本块并跑 gen-landing 重生成 arena.html。 */
  arena: {
    source: "https://openlm.ai/chatbot-arena/",
    sourceName: "OpenLM · Chatbot Arena+",
    fetchedAt: "2026-10-02",
    cols: ["Model", "Arena Elo", "Coding", "Vision", "AAII", "MMLU-Pro", "ARC-AGI", "Organization", "License"],
    rows: [
      ["Claude Opus 5.5","1526","1575","1320","58","92.5","93.3","Anthropic","Proprietary"],
      ["Gemini-4-Argon","1525","1570","1318","53","92.5","","Google","Proprietary"],
      ["Claude Sonnet 5.5","1521","1568","1315","56","92","","Anthropic","Proprietary"],
      ["Claude Fable 5.1","1520","1570","1315","53","92.4","90","Anthropic","Proprietary"],
      ["GPT-6 Astra","1520","1568","1316","53","92","95","OpenAI","Proprietary"],
      ["GPT-6.1 Sol","1516","1568","1315","52","91.1","94.2","OpenAI","Proprietary"],
      ["Claude Opus 5","1511","1566","1314","51","91.6","90.4","Anthropic","Proprietary"],
      ["Claude Fable 5","1510","1566","1312","50","91.5","89.2","Anthropic","Proprietary"],
      ["GPT-6 Sol","1509","1567","1313","48","91","89.6","OpenAI","Proprietary"],
      ["GPT-5.6 Sol","1508","1567","1312","47","90.2","92.5","OpenAI","Proprietary"],
      ["Grok-4.7","1507","1563","1310","47","89.7","75","xAI","Proprietary"],
      ["Muse Spark 1.3","1507","1562","1310","47","89","","Meta","Proprietary"],
      ["MiMo-V2.6-Pro ✅","1507","1560","","46","88.6","","Xiaomi","MIT"],
      ["Kimi-K3 ✅","1506","1562","1311","46","89.3","","Moonshot","Kimi K3"],
      ["Claude Opus 4.8 Thinking","1506","1562","1310","45","90.1","78","Anthropic","Proprietary"],
      ["Qwen3.8-Max ✅","1506","1560","1312","45","89.8","","Alibaba","Qwen3"],
      ["GPT-5.6 Terra","1505","1562","1310","44","89.6","83.9","OpenAI","Proprietary"],
      ["Gemini-3.8-Flash","1505","1561","1312","45","90.2","80.6","Google","Proprietary"],
      ["GPT-5.5-high","1505","1561","1311","44","89.6","85","OpenAI","Proprietary"],
      ["GLM-5.3 ✅","1505","1560","","45","87.8","","Z.ai","MIT"],
      ["Claude Opus 4.7 Thinking","1504","1559","1309","43","90","75.8","Anthropic","Proprietary"],
      ["Grok-4.5","1504","1556","1305","43","89.5","","xAI","Proprietary"],
      ["Gemini-3.1-Pro","1504","1531","1309","43","91","77.1","Google","Proprietary"],
      ["Claude Opus 4.8","1503","1558","1306","42","90","62.2","Anthropic","Proprietary"],
      ["DeepSeek-V4.1-Flash","1503","1557","","43","87.4","","DeepSeek","MIT"],
      ["Gemini-3.7-Flash","1503","1556","1303","43","90","","Google","Proprietary"],
      ["Claude Opus 4.7","1502","1554","1300","41","89.9","62.1","Anthropic","Proprietary"],
      ["DeepSeek-V4-Pro","1502","1550","","41","87.5","","DeepSeek","MIT"],
      ["Claude Opus 4.6 Thinking","1502","1545","1304","41","89.7","69.2","Anthropic","Proprietary"],
      ["Muse Spark 1.2","1502","1540","1300","43","88.8","","Meta","Proprietary"],
      ["Gemini-3.6-Flash","1501","1535","1301","41","90","72.1","Google","Proprietary"],
      ["GPT-5.4-high","1496","1538","1290","41","88.6","74","OpenAI","Proprietary"],
      ["Muse Spark 1.1","1496","1521","1298","41","88.7","","Meta","Proprietary"],
      ["Grok-4.20","1495","1518","1279","41","88.6","65.1","xAI","Proprietary"],
      ["Gemini-3-Pro","1492","1501","1308","41","90","33.6","Google","Proprietary"],
      ["Claude Opus 4.6","1490","1535","1298","40","89.5","64.6","Anthropic","Proprietary"],
      ["GLM-5.2","1488","1525","","41","87.5","22.8","Z.ai","MIT"],
      ["Qwen3.7-Max","1486","1505","1289","41","89.6","","Alibaba","Proprietary"],
      ["Claude Sonnet 5 Thinking","1485","1520","1285","41","89","","Anthropic","Proprietary"],
      ["Muse Spark","1484","1493","1294","40","87.3","","Meta","Proprietary"],
      ["Grok-4.1-Thinking","1482","1483","","39","88.2","26","xAI","Proprietary"],
      ["ERNIE-5.1","1475","1495","","40","87.1","","Baidu","Proprietary"],
      ["Claude Opus 4.5 (thinking-32k)","1469","1510","","39","89.5","30.6","Anthropic","Proprietary"],
      ["Claude Sonnet 4.6 Thinking","1468","1511","1278","40","88","60.4","Anthropic","Proprietary"],
      ["GLM-5.1","1467","1506","","40","87.1","5.1","Z.ai","MIT"],
      ["Seed2.0 Pro","1466","1495","1288","39","87.8","","ByteDance","Proprietary"],
      ["Kimi-K2.6-Thinking","1466","1493","1286","40","87.3","","Moonshot","Modified MIT"],
      ["Qwen3.5-Max","1466","1493","","39","87.8","","Alibaba","Proprietary"],
      ["MiMo-V2.5-Pro","1466","1485","","39","87","","Xiaomi","MIT"],
      ["GPT-5.2-high","1465","1470","1280","41","87.5","52.9","OpenAI","Proprietary"],
      ["Gemini-3-Flash","1465","1469","1292","40","89","31.1","Google","Proprietary"],
      ["GPT-5.4","1465","1468","1275","39","88.4","29.2","OpenAI","Proprietary"],
      ["GPT-5.1-high","1464","1466","1250","39","87.1","17.6","OpenAI","Proprietary"],
      ["GPT-5.2","1464","1465","1248","37","87.4","26.7","OpenAI","Proprietary"],
      ["Grok-4.1","1463","1463","","37","88","","xAI","Proprietary"],
      ["Claude Opus 4.5","1462","1496","","31","88.8","7.8","Anthropic","Proprietary"],
      ["GPT-5.4-mini-high","1461","1461","","37","87","18.9","OpenAI","Proprietary"],
      ["Claude Sonnet 4.6","1460","1500","1277","35","87.3","37.6","Anthropic","Proprietary"],
      ["Gemini-2.5-Pro","1459","1465","1266","34","86.2","4.9","Google","Proprietary"],
      ["ERNIE-5.0","1458","1461","1251","35","86","","Baidu","Proprietary"],
      ["Qwen3.6-Plus","1456","1482","","39","88.5","","Alibaba","Proprietary"],
      ["Minimax-M3","1452","1485","","39","87.2","","MiniMax","Non-commercial"],
      ["GLM-5","1452","1461","","39","87","5","Z.ai","MIT"],
      ["Kimi-K2.5-Thinking","1451","1480","1271","38","87.1","11.8","Moonshot","Modified MIT"],
      ["DeepSeek-V4-Flash","1451","1466","","39","86.2","61.4","DeepSeek","MIT"],
      ["GPT-5.6 Luna","1451","1465","","39","86.1","59.5","OpenAI","Proprietary"],
      ["Qwen3.8-27B","1450","1465","","39","86.3","","Alibaba","Apache 2.0"],
      ["Qwen3.5-397B-A17B","1450","1463","","38","87.8","5","Alibaba","Apache 2.0"],
      ["Gemma-4-31B-it","1449","1462","","34","85.2","","Google","Apache 2.0"],
      ["GLM-4.7","1445","1460","","37","85.6","","Z.ai","MIT"],
      ["GPT-5-high","1444","1460","1232","35","87.1","9.9","OpenAI","Proprietary"],
      ["Qwen3-Max","1443","1468","","34","85.3","","Alibaba","Proprietary"],
      ["Gemma-4-26B-A4B-it","1443","1460","","28","82.6","","Google","Apache 2.0"],
      ["Grok-4","1442","1453","1221","35","86.6","16","xAI","Proprietary"],
      ["GLM-4.6","1441","1458","","28","83.5","","Z.ai","MIT"],
      ["GPT-5.1","1440","1450","1243","35","87","7.5","OpenAI","Proprietary"],
      ["Kimi-K2-Thinking","1438","1450","","37","84.8","","Moonshot","Modified MIT"],
      ["Claude Sonnet 4.5 (thinking-32k)","1432","1485","","32","87.5","13.6","Anthropic","Proprietary"],
      ["MiMo-V2-Pro","1431","1441","","38","86.8","","Xiaomi","Proprietary"],
      ["GLM-4.5","1430","1448","","26","83.5","","Z.ai","MIT"],
      ["Qwen3-VL-235B-A22B-Instruct","1429","1457","1246","22","82.8","","Alibaba","Apache 2.0"],
      ["Mistral Large 3","1428","1450","","16","81","","Mistral","Apache 2.0"],
      ["ChatGPT-4o-latest (2025-03-26)","1427","1434","1242","15","80.3","","OpenAI","Proprietary"],
      ["DeepSeek-R1-0528","1426","1436","","29","84.9","1.3","DeepSeek","MIT"],
      ["Claude Opus 4.1 (thinking-16k)","1425","1475","","30","87.8","","Anthropic","Proprietary"],
      ["o3-2025-04-16","1424","1441","1218","35","85.3","6.5","OpenAI","Proprietary"],
      ["Grok-3-Preview-02-24","1423","1439","","18","79.9","","xAI","Proprietary"],
      ["Hunyuan-Hy3","1422","1448","","35","86.2","","Tencent","Tencent"],
      ["DeepSeek-V3.2-Thinking","1422","1438","","35","86.2","4","DeepSeek","MIT"],
      ["Gemini-3.1-Flash-Lite","1421","1402","1230","31","86.2","","Google","Proprietary"],
      ["Claude Sonnet 4.5","1420","1464","","22","86","","Anthropic","Proprietary"],
      ["LongCat-Flash-Chat","1420","1461","","22","82.7","","Meituan","MIT"],
      ["Claude Opus 4.1","1419","1465","","21","87.3","","Anthropic","Proprietary"],
      ["Grok-4-Fast","1419","1441","","33","85","","xAI","Proprietary"],
      ["Qwen3-235B-A22B-Instruct-2507","1418","1457","","22","82.8","1.3","Alibaba","Apache 2.0"],
      ["Nemotron-3-Ultra-550B-A55B","1418","1452","","39","86.8","","Nvidia","Nvidia Open"],
      ["DeepSeek-V3.1-Thinking","1418","1437","","30","85.1","","DeepSeek","MIT"],
      ["DeepSeek-V3.2","1418","1431","","25","83.7","","DeepSeek","MIT"],
      ["Qwen3-Next-80B-A3B-Instruct","1417","1456","","29","82.4","","Alibaba","Apache 2.0"],
      ["Amazon-Nova-Chat-11-10","1417","1431","","33","83","","Amazon","Proprietary"],
      ["DeepSeek-V3.1","1417","1430","","21","83.3","","DeepSeek","MIT"],
      ["Minimax-M2.7","1416","1448","","38","87.1","","MiniMax","Non-commercial"],
      ["Qwen3-235B-A22B-Thinking-2507","1416","1442","","33","84.3","","Alibaba","Apache 2.0"],
      ["GPT-4.5-Preview","1415","1419","1190","16","81","0.8","OpenAI","Proprietary"],
      ["GPT-5-chat","1413","1421","1238","35","86.6","7.5","OpenAI","Proprietary"],
      ["Gemini-2.5-Flash","1412","1420","1235","28","83.2","2.5","Google","Proprietary"],
      ["Qwen3-VL-235B-A22B-Thinking","1411","1432","1215","33","84.3","","Alibaba","Apache 2.0"],
      ["Hunyuan-Vision-1.5-Thinking","1410","1419","1220","","86.2","","Tencent","Proprietary"],
      ["Minimax-M2.5","1408","1436","","35","87","4.9","MiniMax","Modified MIT"],
      ["MiMo-V2-Flash","1402","1411","","32","84.8","","Xiaomi","MIT"],
      ["Mistral Medium 3.1","1401","1412","","15","77.2","","Mistral","Proprietary"],
      ["Hunyuan-T1-20250711","1400","1409","","","86.2","","Tencent","Proprietary"],
      ["Minimax-M2.1","1399","1430","","34","87","","MiniMax","Modified MIT"],
      ["MAI-1-Preview","1398","1406","","","","","Microsoft","Proprietary"],
      ["Gemini-2.0-Pro-Exp-02-05","1398","1396","1170","14","80.5","","Google","Proprietary"],
      ["Gemini-2.0-Flash-Thinking-Exp-01-21","1397","1383","1208","16","79.8","","Google","Proprietary"],
      ["Step-3.5-Flash","1387","1433","","31","83.5","","StepFun","Apache 2.0"],
      ["GLM-4.5-Air","1386","1410","","21","81.5","","Z.ai","MIT"],
      ["Qwen3-30B-A3B-Instruct-2507","1382","1425","","18","77.7","","Alibaba","Apache 2.0"],
      ["Kimi-K2-0905-Preview","1382","1403","","22","82.4","","Moonshot","Modified MIT"],
      ["Qwen-VL-Max-2025-08-13","1381","1440","1213","","","","Alibaba","Proprietary"],
      ["GPT-4.1-2025-04-14","1381","1396","1207","19","80.6","0.4","OpenAI","Proprietary"],
      ["Kimi-K2-0711-Preview","1380","1402","","21","82.4","","Moonshot","Modified MIT"],
      ["Claude Haiku 4.5","1378","1436","","17","80","","Anthropic","Proprietary"],
      ["DeepSeek-V3-0324","1377","1391","","17","81.9","","DeepSeek","MIT"],
      ["Hunyuan-Turbos-20250416","1377","1390","","","78","","Tencent","Proprietary"],
      ["Claude Opus 4 (thinking-16k)","1376","1434","1188","29","87.3","8.6","Anthropic","Proprietary"],
      ["GPT-5-mini","1375","1419","1214","33","82.8","4.4","OpenAI","Proprietary"],
      ["DeepSeek-R1","1373","1382","","21","84.4","1.3","DeepSeek","MIT"],
      ["Gemini-2.0-Flash-Exp","1370","1371","1191","14","78.2","1.3","Google","Proprietary"],
      ["Qwen3-235B-A22B","1369","1394","","20","82.8","","Alibaba","Apache 2.0"],
      ["Mistral Medium 3","1369","1387","1159","14","76","","Mistral","Proprietary"],
      ["gpt-oss-120b","1368","1398","","30","80.8","","OpenAI","Apache 2.0"],
      ["Qwen2.5-Max","1367","1373","","13","76.2","","Alibaba","Proprietary"],
      ["Claude Opus 4","1366","1405","1173","19","86","1.3","Anthropic","Proprietary"],
      ["Grok-3-mini-high","1366","1380","","28","82.8","","xAI","Proprietary"],
      ["o1-2024-12-17","1366","1378","1166","23","84.1","1.3","OpenAI","Proprietary"],
      ["o4-mini-2025-04-16","1362","1385","1192","34","83.2","6.1","OpenAI","Proprietary"],
      ["Step-3","1360","1400","1190","","","","StepFun","Proprietary"],
      ["Qwen3-Coder-480B-A35B-Instruct","1358","1406","","17","78.8","","Alibaba","Apache 2.0"],
      ["Nemotron-3-Super-120B-A12B","1357","1401","","31","83.7","","Nvidia","Nvidia Open"],
      ["Gemma-3-27B-it","1356","1350","1163","9","66.9","","Google","Gemma"],
      ["INTELLECT-3","1355","1376","","","","","Prime Intellect","MIT"],
      ["Claude Sonnet 4 (thinking-32k)","1351","1412","1187","29","84.2","5.9","Anthropic","Proprietary"],
      ["Minimax-M1","1351","1369","","24","81.6","","MiniMax","Apache 2.0"],
      ["Qwen3-32B","1342","1376","","17","79.8","","Alibaba","Apache 2.0"],
      ["Llama-3.3-Nemotron-Super-49B-v1.5","1340","1359","","23","81.4","","Nvidia","Nvidia Open"],
      ["Step-1o-Turbo-202506","1339","1361","1182","","","","StepFun","Proprietary"],
      ["o3-mini-high","1338","1380","","25","80.2","3","OpenAI","Proprietary"],
      ["GPT-4.1-mini-2025-04-14","1338","1370","1177","16","78.1","","OpenAI","Proprietary"],
      ["Gemini-2.5-Flash-Lite","1337","1362","1205","17","75.9","","Google","Proprietary"],
      ["Mistral-Small-3.2-2506","1337","1361","1145","12","68.1","","Mistral","Apache 2.0"],
      ["Claude Sonnet 4","1335","1384","1170","18","83.7","1.3","Anthropic","Proprietary"],
      ["Gemma-3-12B-it","1335","1310","","9","59.5","","Google","Gemma"],
      ["DeepSeek-V3","1334","1337","","13","75.2","","DeepSeek","DeepSeek"],
      ["GPT-5-nano","1333","1363","1166","25","77.2","2.6","OpenAI","Proprietary"],
      ["QwQ-32B","1332","1351","","20","76.4","","Alibaba","Apache 2.0"],
      ["GLM-4-Plus-0111","1332","1310","","","78.6","","Z.ai","Proprietary"],
      ["Gemini-2.0-Flash-Lite","1330","1338","1097","11","72.4","","Google","Proprietary"],
      ["Qwen-Plus-0125","1327","1339","","","","","Alibaba","Proprietary"],
      ["Command A (03-2025)","1327","1336","","12","71.2","","Cohere","CC-BY-NC-4.0"],
      ["Amazon-Nova-Chat-05-14","1324","1337","","13","73.3","","Amazon","Proprietary"],
      ["Llama-3.1-Nemotron-Ultra-253B-v1","1321","1345","","18","82.5","","Nvidia","Nvidia Open"],
      ["Step-2-16K-Exp","1321","1313","","","","","StepFun","Proprietary"],
      ["Qwen3-30B-A3B","1320","1346","","16","77.7","","Alibaba","Apache 2.0"],
      ["Gemini-1.5-Pro-002","1320","1311","1158","13","75","0.8","Google","Proprietary"],
      ["o1-mini","1318","1366","","16","74.2","0.8","OpenAI","Proprietary"],
      ["o3-mini","1318","1361","","24","79.1","2.1","OpenAI","Proprietary"],
      ["Claude 3.7 Sonnet (thinking-32k)","1316","1355","1167","19","83.7","0.9","Anthropic","Proprietary"],
      ["gpt-oss-20b","1315","1371","","21","73.6","","OpenAI","Apache 2.0"],
      ["Hunyuan-Turbo-0110","1314","1335","","","","","Tencent","Proprietary"],
      ["Llama-3.3-Nemotron-Super-49B-v1","1310","1320","","15","78.5","","Nvidia","Nvidia Open"],
      ["OLMo-3-32b-think","1306","1327","","14","75.9","","Ai2","Apache-2.0"],
      ["Grok-2-08-13","1305","1298","","10","70.9","","xAI","Grok 2"],
      ["Gemma-3n-e4b-it","1304","1297","","6","48.8","","Google","Gemma"],
      ["Yi-Lightning","1303","1321","","","","","01 AI","Proprietary"],
      ["GPT-4o-2024-05-13","1302","1307","1134","11","74.8","","OpenAI","Proprietary"],
      ["Claude 3.7 Sonnet","1301","1341","1145","13","80.3","","Anthropic","Proprietary"],
      ["Claude 3.5 Sonnet (20241022)","1299","1340","1122","12","77.2","","Anthropic","Proprietary"],
      ["Deepseek-v2.5-1210","1296","1316","","9","67.2","","DeepSeek","DeepSeek"],
      ["Athene-v2-Chat-72B","1294","1320","","","","","NexusFlow","NexusFlow"],
      ["Gemma-3-4B-it","1293","1265","","5","41.7","","Google","Gemma"],
      ["Llama-4-Maverick-17B-128E-Instruct","1292","1312","1135","16","80.9","","Meta","Llama 4"],
      ["GLM-4-Plus","1292","1301","","","70.2","","Z.ai","Proprietary"],
      ["Hunyuan-Large-2025-02-10","1291","1311","","","","","Tencent","Proprietary"],
      ["Gemini-1.5-Flash-002","1290","1273","1137","10","68","","Google","Proprietary"],
      ["GPT-4o-mini-2024-07-18","1289","1300","1063","9","64.8","","OpenAI","Proprietary"],
      ["GPT-4.1-nano-2025-04-14","1287","1312","1060","11","65.7","","OpenAI","Proprietary"],
      ["Llama-3.1-405B-Instruct-bf16","1286","1299","","10","73.2","","Meta","Llama 3.1"],
      ["Llama-3.1-Nemotron-70B-Instruct","1285","1289","","10","69","","Nvidia","Llama 3.1"],
      ["Qwen-Max-0919","1284","1296","","","","","Alibaba","Proprietary"],
      ["Llama-3.1-405B-Instruct-fp8","1284","1292","","10","73.2","","Meta","Llama 3.1"],
      ["Yi-Lightning-lite","1284","1286","","","","","01 AI","Proprietary"],
      ["Claude 3.5 Sonnet (20240620)","1283","1309","1117","10","75.1","","Anthropic","Proprietary"],
      ["Grok-2-mini-08-13","1283","1279","","","","","xAI","Proprietary"],
      ["Llama-4-Scout-17B-16E-Instruct","1276","1290","1126","12","75.2","","Meta","Llama 4"],
      ["Hunyuan-Standard-2025-02-10","1276","1289","","","","","Tencent","Proprietary"],
      ["Llama-3.3-70B-Instruct","1276","1279","","11","71.3","","Meta","Llama 3.3"],
      ["Deepseek-v2.5","1275","1306","","8","66.2","","DeepSeek","DeepSeek"],
      ["GPT-4-Turbo-2024-04-09","1275","1280","1087","10","69.4","","OpenAI","Proprietary"],
      ["Qwen2.5-72B-Instruct","1272","1302","","10","72","","Alibaba","Qwen"],
      ["Hunyuan-Large-Vision","1270","1298","1183","","","","Tencent","Proprietary"],
      ["Mistral-Small-3.1-24B-Instruct-2503","1269","1295","1121","9","65.9","","Mistral","Apache 2.0"],
      ["Mistral-Large-2411","1269","1284","","10","69.7","","Mistral","MRL"],
      ["Athene-70B","1268","1274","","","","","NexusFlow","CC-BY-NC-4.0"],
      ["GPT-4-1106-preview","1267","1269","","9","63.7","","OpenAI","Proprietary"],
      ["GPT-4-0125-preview","1266","1261","","","","","OpenAI","Proprietary"],
      ["Claude 3 Opus","1265","1269","1020","9","69.6","","Anthropic","Proprietary"],
      ["Llama-3.1-70B-Instruct","1265","1268","","9","67.6","","Meta","Llama 3.1"],
      ["Amazon Nova Pro 1.0","1262","1282","979","10","69.1","","Amazon","Proprietary"],
      ["Llama-3.1-Tulu-3-70B","1260","1251","","","","","Ai2","Llama 3.1"],
      ["Claude 3.5 Haiku (20241022)","1256","1287","1095","8","63.4","","Anthropic","Proprietary"],
      ["magistral-medium-2506","1253","1307","","14","75.3","","Mistral","Proprietary"],
      ["Reka-Core-20240904","1252","1238","","8","","","Reka AI","Proprietary"],
      ["Reka-Core-20240722","1250","1226","","","","","Reka AI","Proprietary"],
      ["Qwen-Plus-0828","1242","1263","","","","","Alibaba","Proprietary"],
      ["Jamba-1.5-Large","1242","1244","","6","57.2","","AI21 Labs","Jamba Open"],
      ["Deepseek-v2-API-0628","1240","1260","","","","","DeepSeek","DeepSeek"],
      ["Mistral-Small-3-24B-Instruct-2501","1238","1251","","9","65.2","","Mistral","Apache 2.0"],
      ["Deepseek-Coder-v2-0724","1237","1286","","6","58.5","","DeepSeek","DeepSeek"],
      ["Yi-Large","1236","1238","","6","58.6","","01 AI","Proprietary"],
      ["Gemma-2-27B-it","1236","1226","","7","57.5","","Google","Gemma"],
      ["Qwen2.5-Coder-32B-Instruct","1235","1279","","9","63.5","","Alibaba","Apache 2.0"],
      ["Amazon Nova Lite 1.0","1233","1253","989","9","59","","Amazon","Proprietary"],
      ["Gemma-2-9B-it-SimPO","1233","1211","","","","","Princeton","MIT"],
      ["Command R+ (08-2024)","1233","1200","","2","43.2","","Cohere","CC-BY-NC-4.0"],
      ["Gemini-1.5-Flash-8B-001","1231","1228","1042","6","56.9","","Google","Proprietary"],
      ["Llama-3.1-Nemotron-51B-Instruct","1231","1227","","","","","Nvidia","Llama 3.1"],
      ["GLM-4-0520","1230","1237","","","","","Z.ai","Proprietary"],
      ["Nemotron-4-340B-Instruct","1229","1220","","","","","Nvidia","Nvidia Open"],
      ["Aya-Expanse-32B","1229","1211","","2","37.7","","Cohere","CC-BY-NC-4.0"],
      ["Reka-Flash-20240904","1225","1208","","8","","","Reka AI","Proprietary"],
      ["Llama-3-70B-Instruct","1224","1216","","6","57.4","","Meta","Llama 3"],
      ["Claude 3 Sonnet","1223","1232","983","6","57.9","","Anthropic","Proprietary"],
      ["OLMo-2-0325-32B-Instruct","1223","1215","","6","51.1","","Ai2","Apache-2.0"],
      ["Phi-4","1222","1242","","10","71.4","","Microsoft","MIT"],
      ["Reka-Flash-20240722","1218","1201","","","","","Reka AI","Proprietary"],
      ["Amazon Nova Micro 1.0","1215","1228","","7","53.1","","Amazon","Proprietary"],
      ["Gemma-2-9B-it","1213","1194","","3","49.5","","Google","Gemma"],
      ["Hunyuan-Standard-256K","1209","1244","","","","","Tencent","Proprietary"],
      ["Command R+ (04-2024)","1209","1184","","2","42.7","","Cohere","CC-BY-NC-4.0"],
      ["Qwen2-72B-Instruct","1208","1206","","7","62.2","","Alibaba","Qianwen"],
      ["Claude 3 Haiku","1200","1208","950","4","50","","Anthropic","Proprietary"],
      ["Llama-3.1-Tulu-3-8B","1200","1197","","","","","Ai2","Llama 3.1"],
      ["Qwen-Max-0428","1199","1208","","","","","Alibaba","Proprietary"],
      ["Ministral-8B-2410","1198","1219","","3","38.9","","Mistral","MRL"],
      ["GLM-4-0116","1198","1209","","","","","Z.ai","Proprietary"],
      ["DeepSeek-Coder-V2-Instruct","1196","1259","","","","","DeepSeek","DeepSeek"],
      ["Command R (08-2024)","1195","1180","","","33.8","","Cohere","CC-BY-NC-4.0"],
      ["Llama-3.1-8B-Instruct","1193","1203","","4","47.6","","Meta","Llama 3.1"],
      ["Jamba-1.5-Mini","1193","1197","","","","","AI21 Labs","Jamba Open"],
      ["Aya-Expanse-8B","1193","1184","","1","31.2","","Cohere","CC-BY-NC-4.0"],
      ["Qwen1.5-110B-Chat","1180","1192","","4","","","Alibaba","Qianwen"],
      ["Yi-1.5-34B-Chat","1178","1181","","","","","01 AI","Apache-2.0"],
      ["Claude-1","1178","1161","","","","","Anthropic","Proprietary"],
      ["Qwen1.5-72B-Chat","1172","1175","","","","","Alibaba","Qianwen"],
      ["Mistral Medium","1171","1172","","3","49.1","","Mistral","Proprietary"],
      ["Llama-3-8B-Instruct","1171","1164","","2","40.5","","Meta","Llama 3"],
      ["Command R (04-2024)","1169","1141","","","33.7","","Cohere","CC-BY-NC-4.0"],
      ["InternLM2.5-20B-chat","1168","1179","","","","","InternLM","Other"],
      ["Mixtral-8x22b-Instruct-v0.1","1168","1175","","5","53.7","","Mistral","Apache 2.0"],
      ["Gemma-2-2b-it","1163","1130","","","","","Google","Gemma"],
      ["Granite-3.1-8B-Instruct","1158","1191","","","","","IBM","Apache 2.0"],
      ["Claude-2.0","1158","1160","","3","48.6","","Anthropic","Proprietary"],
      ["Gemini-1.0-Pro-001","1155","1125","","","","","Google","Proprietary"],
      ["Zephyr-ORPO-141b-A35b-v0.1","1150","1144","","","","","HuggingFace","Apache 2.0"],
      ["Claude-2.1","1146","1158","","4","49.5","","Anthropic","Proprietary"],
      ["GPT-3.5-Turbo-0613","1145","1164","","3","46.2","","OpenAI","Proprietary"],
      ["Qwen1.5-32B-Chat","1144","1163","","","","","Alibaba","Qianwen"],
      ["Phi-3-Medium-4k-Instruct","1144","1146","","4","54.3","","Microsoft","MIT"],
      ["Starling-LM-7B-beta","1139","1151","","","","","Nexusflow","Apache-2.0"],
      ["Mixtral-8x7B-Instruct-v0.1","1138","1136","","1","38.7","","Mistral","Apache 2.0"],
      ["GPT-3.5-Turbo-0314","1138","1136","","","","","OpenAI","Proprietary"],
      ["Granite-3.1-2B-Instruct","1136","1166","","","","","IBM","Apache 2.0"],
      ["Qwen1.5-14B-Chat","1135","1144","","","","","Alibaba","Qianwen"],
      ["Claude-Instant-1","1135","1136","","","43.4","","Anthropic","Proprietary"],
      ["Yi-34B-Chat","1134","1129","","","","","01 AI","Yi"],
      ["Tulu-2-DPO-70B","1127","1120","","","","","Ai2","Ai2 ImpACT"],
      ["DBRX-Instruct-Preview","1126","1141","","","","","Databricks","DBRX"],
      ["WizardLM-70B-v1.0","1126","1093","","","","","Microsoft","Llama 2"],
      ["Llama-2-70B-chat","1122","1099","","2","40.7","","Meta","Llama 2"],
      ["Nous-Hermes-2-Mixtral-8x7B-DPO","1119","1103","","","","","NousResearch","Apache-2.0"],
      ["Llama-3.2-3B-Instruct","1118","1097","","2","34.7","","Meta","Llama 3.2"],
      ["Phi-3-Small-8k-Instruct","1117","1123","","","","","Microsoft","MIT"],
      ["OpenChat-3.5-0106","1114","1119","","","","","OpenChat","Apache-2.0"],
      ["Starling-LM-7B-alpha","1114","1104","","","","","UC Berkeley","CC-BY-NC-4.0"],
      ["Vicuna-33B","1113","1091","","","","","LMSYS","Non-commercial"],
      ["DeepSeek-LLM-67B-Chat","1111","1106","","2","","","DeepSeek","DeepSeek"],
      ["Snowflake Arctic Instruct","1109","1101","","","","","Snowflake","Apache 2.0"],
      ["Granite-3.0-8B-Instruct","1108","1115","","","","","IBM","Apache 2.0"],
      ["NV-Llama2-70B-SteerLM-Chat","1106","1047","","","","","Nvidia","Llama 2"],
      ["OpenChat-3.5","1103","1077","","","","","OpenChat","Apache-2.0"],
      ["Gemma-1.1-7B-it","1102","1105","","","","","Google","Gemma"],
      ["OpenHermes-2.5-Mistral-7B","1100","1083","","","","","NousResearch","Apache-2.0"],
      ["pplx-70B-online","1099","1055","","","","","Perplexity AI","Proprietary"],
      ["Mistral-7B-Instruct-v0.2","1097","1094","","","24.5","","Mistral","Apache-2.0"],
      ["Llama-2-13b-chat","1093","1077","","2","40.6","","Meta","Llama 2"],
      ["Granite-3.0-2B-Instruct","1091","1104","","","","","IBM","Apache 2.0"],
      ["SOLAR-10.7B-Instruct-v1.0","1091","1073","","","","","Upstage AI","CC-BY-NC-4.0"],
      ["Qwen1.5-7B-Chat","1090","1110","","","","","Alibaba","Qianwen"],
      ["Phi-3-Mini-4K-Instruct-June-24","1088","1098","","","","","Microsoft","MIT"],
      ["Dolphin-2.2.1-Mistral-7B","1088","1049","","","","","Cognitive","Apache-2.0"],
      ["WizardLM-13b-v1.2","1084","1048","","","","","Microsoft","Llama 2"],
      ["Phi-3-Mini-4k-Instruct","1082","1102","","","","","Microsoft","MIT"],
      ["MPT-30B-chat","1076","1055","","","","","MosaicML","CC-BY-NC-SA-4.0"],
      ["Zephyr-7B-beta","1076","1053","","","","","HuggingFace","MIT"],
      ["CodeLlama-34B-instruct","1073","1065","","","","","Meta","Llama 2"],
      ["Llama-3.2-1B-Instruct","1067","1063","","","20","","Meta","Llama 3.2"],
      ["Qwen2.5-VL-32B-Instruct","","","1149","","","","Alibaba","Apache 2.0"],
      ["Step-1o-Vision-32k (highres)","","","1119","","","","StepFun","Proprietary"],
      ["Qwen2.5-VL-72B-Instruct","","","1104","","","","Alibaba","Qwen"],
      ["Pixtral-Large-2411","","","1088","10","70.1","","Mistral","MRL"],
      ["Qwen-VL-Max-1119","","","1056","","","","Alibaba","Proprietary"],
      ["Qwen2-VL-72b-Instruct","","","1044","","","","Alibaba","Qwen"],
      ["Step-1V-32K","","","1043","","","","StepFun","Proprietary"],
      ["Molmo-72B-0924","","","1010","","","","Ai2","Apache 2.0"],
      ["Pixtral-12B-2409","","","1006","3","47.3","","Mistral","Apache 2.0"],
      ["InternVL2-26B","","","1003","","","","OpenGVLab","MIT"],
      ["Llama-3.2-90B-Vision-Instruct","","","997","8","67.1","","Meta","Llama 3.2"],
      ["Hunyuan-Standard-Vision-2024-12-31","","","996","","","","Tencent","Proprietary"],
      ["Aya-Vision-32B","","","992","","","","Cohere","CC-BY-NC-4.0"],
      ["Qwen2-VL-7B-Instruct","","","988","","","","Alibaba","Apache 2.0"],
      ["Yi-Vision","","","978","","","","01 AI","Proprietary"],
      ["Llama-3.2-11B-Vision-Instruct","","","964","4","46.4","","Meta","Llama 3.2"],
      ["Molmo-7B-D-0924","","","957","","","","Ai2","Apache 2.0"]
    ]
  },

  /* ---------------- 排名历史（每期快照，最新在前；页面用倒数两条算 ↑↓） ---------------- */
  rankHistory: [
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
    { date: "2026-09-30", tag: "产品", agents: ["gemini"], title: "谷歌发布 Gemini 4 Argon：Arena+ 升至总榜第 2，但只经 Fairwind 计划向网络安全机构定向开放", summary: "网易科技与新浪科技两独立来源一致：当地时间 2026-09-30 谷歌发布新一代前沿模型 Gemini 4 Argon，API 初始报价输入 $2/输出 $10 每百万 tokens、缓存输入享 95% 折扣，单次响应输出上限自 6.4 万提到 100 万 token，报道列举 DeepSWE v1.1 77.9%、LVBench 91.7%、CWE-bench v1 68%；现阶段仅限参与 Google Fairwind 计划的受信任网络安全防御组织测试，广泛商用\"尚未公布\"。本站 10-02 直抓官方 API 定价文档（ai.google.dev/gemini-api/docs/pricing）未见 argon 条目，与\"未公开商用\"一致；Arena+ 10-02 快照把它列在总榜第 2（Arena Elo 1525、Coding 1570、AAII 53）。另搜狐\"别被单价坑了\"一文警示该报价或为推广期价（称推广期后涨至 $4/$20）、且其单任务平均输出 56.1 万 token 高于 GPT-6 Sol 的 28.2 万，总额外推口径为单源，标未核实。", source: "https://m.163.com/dy/article/L85Q4FTK0511BLFD.html" },
    { date: "2026-09-30", tag: "定价", agents: ["chatgpt"], title: "Pro 200 以原价重开但可购额度下调，另设 $500 顶层档——09-30 标注的未核实项已双源闭环", summary: "36 氪与软餐两个独立来源一致：OpenAI 于 09-30 以原价 $200 重新开放 Pro 订阅，同时把计费改为按 API 美元额度计量、可购额度总额下调（36 氪称\"砍半\"，社区概括\"20X 变 10X\"），官方未承诺已付费存量额度永久保留；另新增 $500/月的顶层档（报道名 Pro 500 与 Pro Max 500 不一），权益含独占最高优先级 Astra 算力、最大上下文窗口记忆与 100GB 专属存储；Astra API 单价一分未动（站内 09-30 直抓官方页仍为 $10/$50）。解释口径出自 OpenAI CPO Tibo Sottiaux 的公开发帖。10-02 二次直抓 chatgpt.com/pricing（1MB HTML）仍无静态价签，档位金额与额度数字以客户端渲染，具体数字标未核实。", source: "https://www.36kr.com/p/4005459400496771" },
    { date: "2026-09-30", tag: "产品", agents: ["chatgpt"], title: "DevDay：GPT-6.1 Sol 上线，官方价 $2/$10 为 Astra 的五分之一", summary: "OpenAI 官方定价页（2026-09-30 直抓）新增 gpt-6.1-sol：输入 $2/输出 $10 每百万 tokens，长上下文 $4/$15，缓存读 $0.10、缓存写 $2.50；gpt-6-sol 条目已下架，gpt-6-astra 维持 $10/$50（长上下文 $20/$75）。官方 chatgpt.com/pricing 模型矩阵显示 GPT-6.1 Sol 仅 Plus（Expanded）与 Pro 可用，Free/Go 不含。媒体多源另称 DevDay 新增 $500 档并收紧用量额度，但定价页金额为客户端渲染、无法直抓，标注未核实交周五处理。", source: "https://platform.openai.com/docs/pricing" },
    { date: "2026-09-30", tag: "定价", agents: ["claude"], title: "口径冲突消解：Opus 5.5 确为降 20%，站内旧注误把 Fast mode 价当常规价", summary: "直抓 docs.claude.com 定价页复核：上一代 Opus 5 / Opus 4.8 常规价是输入 $5/输出 $25（缓存读 $0.50），而 $10/$50 是它们的 Fast mode 价；站内 09-25 起把后者记成常规价，才显得 Opus 5.5（$4/$20）像\"降 60%\"。按常规价计算单价降 20%、缓存读降 60%，与 09-27 媒体报道两个数字完全对得上，09-27 事件所标的\"待官方页复核\"已解决。", source: "https://docs.claude.com/en/docs/about-claude/pricing" },
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
    { vendor: "OpenAI", model: "GPT-6.1 Sol（2026-09-30 取代 gpt-6-sol）", input: "$2（长上下文 $4）", output: "$10（长上下文 $15；缓存读 $0.10）", source: "https://platform.openai.com/docs/pricing" },
    { vendor: "OpenAI", model: "GPT-6 Luna（2026-09-23）", input: "$0.10", output: "$0.50", source: "https://finance.sina.com.cn/tech/roll/2026-09-23/doc-inisuaat1609597.shtml" },
    { vendor: "Google", model: "Gemini 4 Argon（2026-09-30 发布，仅定向开放）", input: "$2（媒体口径，官方定价页 10-02 尚无该条目）", output: "$10（缓存输入称享 95% 折扣；另有媒体称推广期后或涨至 $4/$20，未官方核）", source: "https://m.163.com/dy/article/L85Q4FTK0511BLFD.html" },
    { vendor: "Perplexity", model: "Sonar", input: "$1", output: "$1（另按搜索收 $5-12/千次请求）", source: "https://docs.perplexity.ai/getting-started/pricing" },
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
      bltcy: { status: "verified", at: "2026-09-30", note: "官网 /api/pricing 直抓成功（2026-09-30，返回 default 分组倍率表约 418KB）；独立社区来源：少数派 sspai 论坛\"中转站实时比价工具\"帖有用户自述已用柏拉图一年多（https://meta.appinn.net/t/topic/79735）。两源一致仅证明\"站点存活、公开报价、有长期使用者\"，不构成质量或兑付背书。" },
      uiuiapi: { status: "verified", at: "2026-10-02", note: "双源：①种子仓库 awesome-ai-api-proxy 条目（type=official-relay、status=active、maintainer 于 2026-06-07 实测，并在 2026-08-16 快照抓到 666 条 high-confidence 报价）；②独立社区目录 frank36512/aiapi（GitHub，2026-10-02 直抓）自列\"300+ 大模型聚合、3.7 元/美元汇率、可开发票\"。10-02 实测站点 200、公开 new-api 价目接口 https://api1.uiuiapi.com/api/pricing 返回 366 个模型（default 分组），已收录 claude-opus-5-5 / gpt-6.1-sol（模型倍率 37.5），尚未收录 gemini-4-argon。注：社区目录属推广性质，\"官方倍率/汇率/可发票\"为自述口径未核；本次仅证明存活、报价公开可复核、被两份独立目录收录。" },
      "closeai-asia": { status: "verified", at: "2026-10-02", note: "双源：①种子仓库条目（type=official-relay、status=active、maintainer 于 2026-05-26 实测，entity_registered=true、支持企业发票）；②独立社区目录 frank36512/aiapi（2026-10-02 直抓）亦收录（\"亚洲最大企业级 AI 中转、支持企业发票\"）。10-02 实测站点 200、/pricing 页面 200（32KB 静态可读）。注：种子 2026-08-16 价格快照无本站记录，报价无法机器复核，\"100% 官转\"属自述；本次仅证明存活与公开价目页可读。" },
      yunwu: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开价目接口 https://yunwu.ai/api/pricing 返回 384 条（new-api 结构、倍率字段可复核，已收录 qwen3.8-max x6、claude-fable-5 x5、deepseek-v4-pro x4.5，未见 gemini-4-argon）；②独立来源两份——GitHub 社区目录 frank36512/aiapi（列\"0.5 元/美元、500+ 模型、国内直连\"，另收备用域 yunwuai.cc）与第三方测评页 EggStriker（2026-08-11，明示\"不以稳定性为卖点，适合测试不宜生产\"）。注：种子标 type=mixed；第三方直接提示稳定性需自测，本站不作质量背书。V2EX 相关帖发在 promotions 节点属官方推广，不计入独立源；简书\"云雾 APP 诈骗\"为同名兼职资金盘，与本站无关（同名混淆，勿误判红旗）。" },
      rcouyi: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开价目接口 https://api.rcouyi.com/api/pricing 返回 797 条（含 claude-opus-5-5 x2、claude-fable-5-1 x5、deepseek-v4-flash x0.5 等，供应商字段可读）；②独立来源仅一份——第三方测评页 EggStriker（2026-08-16，\"一站式聚合中转、接口文档完善、可直连、价格中等\"）。未检索到跑路或退款纠纷，但社区讨论与 GitHub 曝光度都很低，独立佐证单薄，标\"单一第三方源\"持续观察。" },
      relaydance: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开价目接口 https://relaydance.com/api/pricing 返回 45 条（auto_groups=default；以 doubao-seedance 系列视频模型为主，如 seedance-2-0-480p x4.375，另有 claude-fable-5 x6.25）；②独立来源仅一份——第三方测评页 EggStriker（2026-08-15，\"转战视频生成中转，Seedance 2.0/2.5 一站式，价格中等\"）。appinn 的中转站评测帖现已 404 无法复核，Linux.do/V2EX/论坛无用户讨论。价目可读证明存活，但覆盖面窄（45 条）且独立佐证单薄，持续观察。" },
      atlascloud: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开模型接口 https://api.atlascloud.ai/v1/models 返回 200（71KB，data 数组含 Qwen3-235B-A22B-Instruct-2507 等可复核条目）；②独立来源仅一份——第三方测评页 EggStriker（2026-08-15，\"图像/视频生成聚合 300+ 模型、按秒计费、国内需代理\"）。未见跑路或退款投诉（搜索结果多为自家博客，不计）。注：本站定位偏图像/视频生成聚合，与文本中转目录不完全同类，比价时注意。" },
      openrouter: { status: "verified", at: "2026-10-02", note: "双源：①本站 10-02 直抓公开接口 https://openrouter.ai/api/v1/models 返回 464 个模型（含 claude-opus-5-5 两条线路，尚无 gemini-4-argon），价目与路由可在站内报价页逐项复核；②独立来源两份——GitHub 社区目录 zzsting88/relayAPI（\"所有网站里 OpenRouter 最先开始这个模式\"）与每日经济新闻行业起底（2026-05-12，估值 13 亿美元，同时警示全行业封号跑路/降智/倒卖数据风险）。本站本身无跑路案例，属目录中最成熟的一家；常见抱怨是国内直连不稳定。冲突闭合（10-02）：09-30 挂待核的原因是种子注\"加价约 5%\"与官方 FAQ\"推理零加价\"看似矛盾，10-02 直抓 https://openrouter.ai/docs/faq 确认官方原文为不对上游供应商价格加价，收费只在充值环节（Stripe 手续费 5.5%、单笔最低 $0.80；加密货币充值 5%；BYOK 5%）→ 种子那句\"加价约 5%\"指的是充值手续费而非模型倍率，两源口径实为一致，待核结论撤销，改记 verified（种子区原文不改）。" },
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
  billing: { chatgpt:"订阅", claude:"订阅+积分", gemini:"订阅", manus:"积分制", deepseek:"免费+API", kimi:"订阅+Token Plan", glm:"会员+订阅(Coding Plan)", doubao:"订阅(新开)", cursor:"订阅+额度", copilot:"Credits 额度", trae:"积分制", qianwen:"订阅(三档)", devin:"订阅", coze:"积分制", wenxin:"会员+API", perplexity:"订阅+API", yuanbao:"完全免费（无内购）", hailuo:"订阅+按量", stepfun:"Credit 套餐+按量", xinghuo:"垂类会员+Token Plan", grok:"订阅(四档)", poe:"订阅(五档点数制)", yuanqi:"免费（收费政策未公开）" },

  /* ---------------- 精选问答（编辑部整理，投票暂存本地） ---------------- */
  qa: [
    { q: "每月只有 $20 预算，ChatGPT Plus、Claude Pro、Gemini AI Pro 选哪个？", tags: ["预算紧", "海外"],
      a: "写代码/长文为主 → Claude Pro（编码榜首，但注意 Pro 用 Fable 要另买积分）；要最全能的助手和 Agent 生态 → ChatGPT Plus（GPT-6 已推送）；预算想再省或重多模态 → Gemini AI Pro 只要 $19.99 且免费档最厚道。三者国内支付门槛相同。", basis: "据本站订阅矩阵与编码/通用榜", votes: 34 },
    { q: "GLM Coding Plan 涨价 130% 后，国产编程订阅还有什么可选？", tags: ["编程", "国产"],
      a: "按入门成本排：火山方舟 Lite 约 ¥40/月 → Trae 轻享 ¥49（首月 9.9）→ Kimi Token Plan。重度终端用户可反向考虑 Copilot Pro（$10）但改按量计费后需盯额度。警惕 Trae 积分制：常规对话也扣点。", basis: "据 codepick 横评 + Trae 积分制报道", votes: 27 },
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
      { date: "2026-09-23", v: 0.5, unit: "$/M tokens", plan: "API GPT-6 Luna 输出" }
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
