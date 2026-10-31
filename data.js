window.FEED_DATA = [
  {
    "id": "mistral-large4-1031",
    "source": "Mistral AI",
    "avatar": "M",
    "avatarClass": "mistral",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "产品与模型",
    "tags": [
      "开放权重",
      "推理成本"
    ],
    "date": "2026-10-29",
    "time": "10 月 29 日",
    "title": "模型更强，也更省？Mistral 把推理开销摆上台面。",
    "summary": "Large 4 升级版权重开放。厂商报告终端任务评测提高 13 个百分点，同时输出 token 减少 30%；这是厂商评测，尚未独立复现。",
    "body": "Mistral发布了比月初预览版进一步训练的Large 4权重，并提供低、中、高三档推理模式。公司报告：Terminal-Bench 4.0比预览版提升13个百分点至41%，同时输出token减少30%。这些是厂商公布的评测结果，本期未独立复现。",
    "analysis": "工业界在同时优化任务成功率和推理开销。较短输出不自动证明更强的推理机制；比较时还要固定任务、工具、推理档位，并测实际延迟与硬件成本。开放权重也不代表可以在普通单卡上运行这个万亿参数模型。",
    "links": [
      {
        "label": "原文",
        "url": "https://mistral.ai/news/mistral-large-4-oss/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-10-31/mistral-large4.webp",
        "alt": "Mistral Large 4 官方文章中的生态合作方标识拼图",
        "caption": "官方文章配图：生态合作方标识，不是性能对比图。",
        "credit": "Mistral AI",
        "sourceUrl": "https://mistral.ai/news/mistral-large-4-oss/",
        "originalUrl": "https://mistral.ai/_astro/partners-ml4-oss_17QG5o.webp?dpl=6ae3844da0718a08567e65ba"
      }
    ],
    "comments": [],
    "commentStatus": "本条未采集评论",
    "issueDate": "2026-10-31"
  },
  {
    "id": "seed-ye-1031",
    "source": "叶德珩 · 本人主页",
    "avatar": "叶",
    "avatarClass": "maimai",
    "channel": "official",
    "evidence": "本人公开信息",
    "kind": "official",
    "topic": "团队与招聘",
    "tags": [
      "Seed",
      "强化学习"
    ],
    "date": "2026-10-30",
    "time": "10 月 31 日核验 · 入职日未披露",
    "title": "从游戏强化学习到基础模型：一个具体的人才流动样本。",
    "summary": "叶德珩的个人主页已列出字节 Seed 研究员身份。它确认了个人去向；团队是否整体迁移、是否扩大招聘，仍需要其他证据。",
    "body": "叶德珩主页现列“ByteDance Seed研究员”，经历为腾讯2017—2026、字节2026年至今，并列出绝悟系列、强化学习和智能体相关项目。主页没有给出精确入职日，因此不能写成“昨天刚入职”。",
    "analysis": "这提供了一个从游戏强化学习转向基础模型研究的具体人才流动样本。它不能单独证明原团队整体迁移，也不能推出Seed的新模型发布时间或团队扩张规模。",
    "links": [
      {
        "label": "本人主页",
        "url": "https://yedeheng.github.io/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "本条未采集评论",
    "issueDate": "2026-10-31"
  },
  {
    "id": "anthropic-safety-1031",
    "source": "Anthropic",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方技术经验",
    "kind": "official",
    "topic": "训练与推理",
    "tags": [
      "安全监测",
      "推理成本"
    ],
    "date": "2026-10-30",
    "time": "10 月 30 日新介绍 · 技术文 10 月 16 日",
    "title": "每次回答后，再做一次低成本自评。",
    "summary": "Anthropic 介绍已在使用的对话自评机制：利用已有缓存生成风险提示，供离线复核，估计额外推理开销低于 2%。初筛和可靠监督之间，还有距离。",
    "body": "Claude回答后再生成简短安全评估，供离线复核；复用已有对话缓存，公司估计额外推理计算开销低于2%。它自6月已在使用，并非本周刚上线。",
    "analysis": "值得关注的是“便宜的广覆盖初筛＋更贵的复核”这一生产系统设计。官方明确承认自评不足以抵御专门攻击，不能把它理解成模型已能可靠监督自己。文中检出率相对于教师分类器，也不是对所有真实风险的无偏测量。",
    "links": [
      {
        "label": "技术文",
        "url": "https://safeguards.anthropic.com/2026/self-assessment/"
      },
      {
        "label": "官方帖",
        "url": "https://x.com/AnthropicAI/status/2115871889549865429"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "本条未采集评论",
    "issueDate": "2026-10-31"
  },
  {
    "id": "xhs-interview-1031",
    "source": "fangliqian · 小红书",
    "avatar": "小红书",
    "avatarClass": "xhs",
    "channel": "xiaohongshu",
    "evidence": "个人面试经历",
    "kind": "opinion",
    "topic": "团队与招聘",
    "tags": [
      "后训练",
      "失败诊断"
    ],
    "date": "2026-10-30",
    "time": "10 月 30 日 · 个人自述",
    "title": "“为什么训练后反而变差？”面试里的工程追问。",
    "summary": "一篇后训练面试复盘提到数据构造、指标变化和偏好训练后的性能下降。评论里，作者补充：面试官会继续问这些基础知识在实习里怎么用。",
    "body": "用户fangliqian分享自称华为后训练岗位的面试：问题覆盖微调与强化学习的目标函数、数据构造、评测指标，以及为什么偏好训练后性能下降、如何改进；还要求用基础math库实现因果注意力。",
    "analysis": "这是一份具体的准备清单：除会讲方法，还要能说清数据怎么来、指标怎么变、失败如何定位。但它只是一名求职者的叙述，不代表华为统一题库，也不能概括整个行业的招聘标准。",
    "links": [
      {
        "label": "原帖",
        "url": "https://www.xiaohongshu.com/search_result/6ae40d1a0000000026002909?xsec_token=ABsGEOUzPAM_Ox-2GEdZLzQDu6KfAkf9wRjaK7jSAKjA4=&xsec_source="
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "fangliqian",
        "role": "原帖作者回复",
        "date": "2026-10-30",
        "text": "作者回应“是否只是基础题”的质疑：正文受字数限制写得简略，实际面试会要求解释基础知识在实习场景里的应用，光背答案不够。",
        "why": "补充了正文没有展开的追问方式：知识点需要落到做过的项目。",
        "url": "https://www.xiaohongshu.com/search_result/6ae40d1a0000000026002909?xsec_token=ABsGEOUzPAM_Ox-2GEdZLzQDu6KfAkf9wRjaK7jSAKjA4=&xsec_source=",
        "linkLabel": "查看原帖评论",
        "evidence": "作者自述，未经独立核验",
        "mode": "摘编",
        "context": "回应 bby 对面试是否过于侧重基础知识的疑问。"
      }
    ],
    "commentStatus": "读取到 12 条评论及回复，选取 1 条作者补充；链接进入原帖，未获取评论直达链接。",
    "issueDate": "2026-10-31"
  },
  {
    "id": "google-orbit-1031",
    "source": "Google Research",
    "avatar": "G",
    "avatarClass": "google",
    "channel": "official",
    "evidence": "官方工程进展",
    "kind": "official",
    "topic": "产品与模型",
    "tags": [
      "算力设施",
      "原型验证"
    ],
    "date": "2026-10-30",
    "time": "10 月 30 日",
    "title": "一次来自轨道上的模型响应。",
    "summary": "Google 称太空 TPU 原型已经运行 Gemma 4 并传回响应。热应力、辐射和长期可靠性测试还在后面：这是工程里程碑，商业成本仍待验证。",
    "body": "Google称Project Suncatcher原型卫星已在轨运行Gemma 4并传回响应，后续要测试热应力和辐射下的TPU可靠性，目标之一是2027年双星互联测试。",
    "analysis": "这是算力基础设施的早期技术验证。一次成功推理不等于已经建成商业太空数据中心，更不能据此判断它比地面机房便宜；长期可靠性、通信和运维仍是关键问题。",
    "links": [
      {
        "label": "原文",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-10-31/suncatcher.webp",
        "alt": "Google 团队围在显示器旁，视频封面写着 Testing AI in orbit",
        "caption": "官方文章视频封面：Testing AI in orbit。",
        "credit": "Google",
        "sourceUrl": "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/",
        "originalUrl": "https://i.ytimg.com/vi_webp/epqzfAi16us/maxresdefault.webp"
      }
    ],
    "comments": [],
    "commentStatus": "本条未采集评论",
    "issueDate": "2026-10-31"
  },
  {
    "id": "reddit-batching-1031",
    "source": "Mchanger · Reddit",
    "avatar": "r/",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人部署测试",
    "kind": "opinion",
    "topic": "训练与推理",
    "tags": [
      "并发",
      "吞吐与延迟"
    ],
    "date": "2026-10-31",
    "time": "10 月 31 日读取 · 未复现",
    "title": "让显卡更忙，不一定让每个人都等得更少。",
    "summary": "一位 RTX 3090 用户报告：单路生成约 30 token/秒；四路并发合计约 64，但每路降至约 16。评论进一步讨论了并发收益的上限。",
    "body": "一名LocalLLaMA用户报告，在RTX 3090运行本地模型时，单并发约30 token/秒；4路并发时，总吞吐约64 token/秒，但每路约16 token/秒。帖子给出了自己的测试表，本期没有复现实验；网页更新时补读了评论，摘录见下。",
    "analysis": "这展示了一个实际取舍：批量处理可能让显卡单位时间产出更多，却让每个请求等待更久。评估部署方案需要同时看总吞吐、首字等待时间、完整响应时间和任务成功率，不能只拿一个“每秒多少token”比较。",
    "links": [
      {
        "label": "原帖",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xjx63n/just_rediscovered_batching_and_swarming_while/"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "Emergency-Lawyer-366",
        "role": "社区回复",
        "date": "2026-10-31 读取",
        "text": "这位评论者注意到，从 12 路增至 16 路并发，总吞吐仅从约 110 增到 111 token/秒，继续增加并发的收益已经很小。",
        "why": "提示要找并发收益的拐点；这个具体数值只对应原帖的个人测试。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xjx63n/just_rediscovered_batching_and_swarming_while/",
        "linkLabel": "查看原帖评论",
        "evidence": "基于原帖数据的个人解读，未复现",
        "mode": "中文摘编",
        "context": "针对原帖并发数与吞吐量表格的回复。"
      }
    ],
    "commentStatus": "读取帖子及 4 条评论/回复，选取 1 条有数据依据的补充；工具未返回评论直达链接。",
    "issueDate": "2026-10-31"
  },
  {
    "id": "lfm3",
    "source": "Liquid AI",
    "avatar": "∿",
    "avatarClass": "liquid",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与推理",
    "tags": [
      "小模型",
      "多教师蒸馏"
    ],
    "date": "2026-10-27",
    "time": "10 月 27 日",
    "title": "六位专项老师，教会一个 1.7B 小模型。",
    "summary": "Liquid AI 公开了 LFM3 的后训练流程：把代码、数学、工具等六个领域的专项教师蒸馏回同一个模型，再放进真实工作流中训练。能力整合，已经是具体的工程选择。",
    "originalTitle": "Liquid AI公开小模型的“多位老师教一个学生”路线",
    "body": "LFM3-1.7B模型卡列出了四阶段后训练：监督微调、多领域强化学习、六位专项教师的多领域在策略蒸馏（MOPD），最后在真实智能体运行框架中做强化学习。教师分别覆盖代码、数学、工具、长上下文、智能体和企业工作流。",
    "analysis": "能力整合有实际需求。这条路线需要训练学生；研究参数合并时，可以把它作为另一种整合方案，比较相同预算下的收益。完整流程包含多个阶段，不能把最终提升都归因于蒸馏。官方也明确提醒，这个小模型不适合复杂多步推理。",
    "links": [
      {
        "label": "原文",
        "url": "https://huggingface.co/LiquidAI/LFM3-1.7B"
      },
      {
        "label": "发布",
        "url": "https://www.liquid.ai/blog/lfm3"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "issueDate": "2026-10-29"
  },
  {
    "id": "anthropic",
    "source": "Anthropic · Latent Space",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "interview",
    "evidence": "具名访谈",
    "kind": "interview",
    "topic": "训练与推理",
    "tags": [
      "模型评测",
      "上线经验"
    ],
    "date": "2026-10-27",
    "time": "10 月 27 日",
    "title": "模型上线之前，先让客户在自己的环境里测。",
    "summary": "Anthropic 平台负责人谈上线幕后：客户的真实工作流能暴露公开榜单看不到的问题。会话记录与执行沙箱分离，则让任务在出故障后还有机会继续。",
    "originalTitle": "Anthropic负责人谈上线幕后：让客户在自己的环境里测",
    "body": "平台工程与产品负责人Katelyn Lesse、Angela Jiang介绍，提前试用客户会在自己的工具和工作流中评测模型，反馈官方产品未覆盖的问题。她们还谈到把会话记录、智能体控制程序与执行代码的沙箱分开，使沙箱出故障时仍能保留任务进度。",
    "analysis": "工业界关心的不只是答题分数。一个能做完任务、失败后能恢复的系统，才更接近可交付产品；这类工程改进也不能直接算成模型本身能力提高。访谈是本周新内容，其中架构已有较早技术文章介绍。",
    "links": [
      {
        "label": "访谈",
        "url": "https://latent.space/p/opus55/"
      },
      {
        "label": "背景技术文（4月8日）",
        "url": "https://www.anthropic.com/research/managed-agents"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "issueDate": "2026-10-29"
  },
  {
    "id": "carbon",
    "source": "Google",
    "avatar": "G",
    "avatarClass": "google",
    "channel": "official",
    "evidence": "官方发布",
    "kind": "official",
    "topic": "产品与模型",
    "tags": [
      "Gemini",
      "有限开放"
    ],
    "date": "2026-10-28",
    "time": "10 月 28 日",
    "title": "Gemini 4 Carbon 发布。谁现在能用，是另一件事。",
    "summary": "新模型主打长时间工程任务和网络安全防御。本周先向部分安全防御人员开放，再逐步扩大到可信合作伙伴，普通用户的全面开放仍在后续计划里。",
    "originalTitle": "Gemini 4 Carbon发布，但目前是有限开放",
    "body": "Google将Carbon重点放在长时间、多步骤工程任务和网络安全防御上。本周先向部分安全防御人员开放，再通过Fairwind计划逐步扩大到可信合作伙伴；普通开发者、企业和消费者的全面开放仍在后续计划中。",
    "analysis": "关注模型发布时，要同时问“谁现在能用”。官方关于连续工作数天的描述来自内部实践，不能据此假设普通用户已经能稳定复现同样效果。",
    "links": [
      {
        "label": "原文",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "issueDate": "2026-10-29"
  },
  {
    "id": "genie",
    "source": "Google DeepMind",
    "avatar": "✳",
    "avatarClass": "deepmind",
    "channel": "official",
    "evidence": "官方发布",
    "kind": "official",
    "topic": "产品与模型",
    "tags": [
      "世界模型",
      "研究预览"
    ],
    "date": "2026-10-27",
    "time": "10 月 27 日",
    "title": "可以交互、有声音的世界，离训练环境还有多远？",
    "summary": "Genie 4 展示实时交互的世界模拟，可以用文字改变场景，同步生成环境音和对话。目前仍是研究预览。演示很直观，但物理准确性和真实任务收益需要另外验证。",
    "originalTitle": "Genie 4把可交互场景、声音和对话放进同一模拟环境",
    "body": "DeepMind展示了实时交互世界模拟：用户可用文字改变场景，同时生成环境音和交互对话。目前面向可信测试者提供研究预览，消费者及开发者开放还在后续安排中。",
    "analysis": "除了内容生成，这类系统也可能提供机器人和智能体的训练环境。不过，画面连贯不等于物理准确；能否改善真实任务表现，仍需要迁移实验验证，演示本身不能证明。",
    "links": [
      {
        "label": "原文",
        "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "issueDate": "2026-10-29"
  },
  {
    "id": "xhs",
    "source": "AgentAlpha · 小红书",
    "avatar": "小红书",
    "avatarClass": "xhs",
    "channel": "xiaohongshu",
    "evidence": "社区观点",
    "kind": "opinion",
    "topic": "训练与推理",
    "tags": [
      "后训练",
      "评测讨论"
    ],
    "date": "2026-10-28",
    "time": "10 月 28 日",
    "title": "“五年高考三年模拟”：后训练会不会只学会刷榜？",
    "summary": "一篇社区笔记讨论公开评测过拟合：答对工具名称，和真正调用工具完成一件事，是不同的考题。这是值得追问的个人观点，文中所述企业内部做法尚未核实。",
    "originalTitle": "小红书讨论：只盯公开榜单，可能漏掉实际任务",
    "body": "AgentAlpha的《大模型后训练时代：五年高考三年模拟》讨论公开评测过拟合，并提出应让评测更接近能操作、能反馈的任务环境。",
    "analysis": "这个问题值得关注，例如“答对工具名称”和“正确调用工具完成整件事”是两种测试。但作者身份和文中涉及公司的内部做法尚未核实，不能当作各大厂的统一政策。它与上面的Anthropic访谈有可对照之处，只能说明某些团队确实重视实际工作流评测。",
    "links": [
      {
        "label": "原帖",
        "url": "https://www.xiaohongshu.com/search_result/6ae20ceb00000000240075c2?xsec_token=ABxS-C1hYgStH4VrRzSsyI-Nj6igZRNn5WdO-Q3Gana1E=&xsec_source="
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "issueDate": "2026-10-29"
  },
  {
    "id": "maimai",
    "source": "胡豆豆 · 脉脉",
    "avatar": "脉",
    "avatarClass": "maimai",
    "channel": "maimai",
    "evidence": "待核实线索",
    "kind": "lead",
    "topic": "团队与招聘",
    "tags": [
      "九坤",
      "产品岗位"
    ],
    "date": "2026-10-29T07:36:00",
    "time": "10 月 29 日 · 07:36",
    "title": "一条招聘转发，透露了聊天产品的岗位需求。",
    "summary": "脉脉帖子列出九坤在北京的前端、客户端、产品经理及模型调度岗位，并提到面向消费者的聊天产品。已读到帖子全文，但暂未找到对应官方公告，先作为线索保留。",
    "originalTitle": "脉脉出现九坤聊天产品相关招聘转发",
    "body": "用户“胡豆豆”转发“九坤岗位”，列出北京的网页前端、客户端、大模型产品经理，以及模型接入与调度平台研发岗位；正文提到面向消费者的聊天产品。",
    "analysis": "如果招聘内容属实，它提示团队在补产品端和服务平台的岗位。当前只核实了帖子全文存在，未找到这些新增岗位对应的官方公告，发帖者也不能据其页面认证认定为九坤官方人员。因此不能据此宣布九坤已推出新产品，也不能推断团队规模或扩张速度。",
    "links": [
      {
        "label": "原帖",
        "url": "https://maimai.cn/community/feed-detail/1933070113?fid=1933070113&efid=JWxqKDxBaESCUtV93vRnnQ"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "issueDate": "2026-10-29"
  }
];
window.FEED_ISSUES = [
  {
    "date": "2026-10-31",
    "edition": 2,
    "title": "模型之外，工程现场还有什么？",
    "intro": "看看模型的推理开销、人才流动与部署细节。这次把原文配图和有用的评论放在一起：不仅看发布了什么，也看实践中遇到了什么。",
    "coverage": "北京时间 10 月 29 日上期发送后至 31 日上午；10 月 31 日网页更新时补充原文图片和评论。已读小红书笔记正文及 12 条评论/回复、Anthropic 官方 X 原帖、厂商文章、研究者主页、Reddit 最新 5 帖，以及入选帖的 4 条评论/回复。脉脉本期未取得可核验新帖。部分评论只有原帖入口，没有评论直达链接。",
    "count": 6
  },
  {
    "date": "2026-10-29",
    "edition": 1,
    "title": "从“模型更强”到“真的能用”。",
    "intro": "多领域能力怎样装进一个小模型？上线后，怎样评测、怎样从失败中恢复？沿着这两条线，看看产品背后的工作。",
    "coverage": "北京时间 10 月 27 日至 29 日上午。已读取小红书两篇笔记正文、脉脉“大模型”按时间排序结果及入选帖全文，核对官方模型卡、发布文章和原始访谈。脉脉职言与评论未完整覆盖。",
    "count": 6
  }
];
window.FEED_META = {
  "updatedAt": "2026-10-31T13:57:48+08:00",
  "schedule": "每天北京时间 09:00 开始整理",
  "latestDate": "2026-10-31"
};
