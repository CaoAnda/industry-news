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
    "summary": "Large 4 升级版权重开放。Mistral 报告，终端任务评测提高了 13 个百分点，同时输出 token 减少 30%。",
    "body": "Mistral 发布了进一步训练的 Large 4 权重，提供低、中、高三档推理模式。公司报告，Terminal-Bench 4.0 得分从预览版的 28% 提高到 41%，输出 token 减少 30%。",
    "analysis": "这次升级把任务表现和推理开销放在了一起。三档推理模式也给产品团队留出了选择：日常任务控制开销，复杂任务投入更多计算。",
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
        "caption": "Large 4 官方文章中的生态合作方。",
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
    "time": "10 月 31 日查看本人主页",
    "title": "叶德珩加入字节 Seed，从游戏强化学习转向基础模型。",
    "summary": "叶德珩的个人主页已列出字节 Seed 研究员身份。他此前在腾讯参与绝悟系列等项目，研究经历涵盖强化学习与智能体。",
    "body": "叶德珩在个人主页上列出的经历是：2017—2026 年在腾讯，2026 年起在字节 Seed 从事基础模型研究。项目经历包括绝悟系列、强化学习和智能体。",
    "analysis": "游戏里的强化学习长期围绕决策、反馈和多步任务展开。这段人才流动值得关注的地方，是这些经验会怎样带入基础模型与智能体研究。",
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
    "summary": "Anthropic 介绍了对话自评机制：Claude 回答后生成风险提示，供离线复核。公司估计，额外推理计算开销低于 2%。",
    "body": "这套机制自 6 月开始使用。Claude 回答后会复用已有对话缓存，生成简短的安全评估，再交给后续流程复核；Anthropic 估计额外推理计算开销低于 2%。",
    "analysis": "有意思的是它怎样分配成本：先用便宜的自评广泛筛查，再把复核资源集中到可疑对话上。把监测安排在回答之后，也让这一步可以离线完成。",
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
    "body": "fangliqian 在华为后训练岗位的面试复盘中写到，问题涉及微调与强化学习的目标函数、数据构造和评测指标。面试官还追问偏好训练后性能下降的原因与改进方法，并要求用基础 math 库实现因果注意力。",
    "analysis": "这份复盘最实用的部分，是把准备重点落到了项目细节：数据怎么来，指标怎么变，效果变差时怎样定位问题。讲清一次失败和修正，往往比列出一串方法名更有内容。",
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
        "evidence": "作者补充",
        "mode": "摘编",
        "context": "回应 bby 对面试是否过于侧重基础知识的疑问。"
      }
    ],
    "commentStatus": "摘编自原帖评论区。",
    "collectionNote": "读取到 12 条评论及回复，选取 1 条作者补充；链接进入原帖，未获取评论直达链接。",
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
    "summary": "Google 的太空 TPU 原型已运行 Gemma 4 并传回响应。下一步是测试芯片在热应力和辐射环境下的可靠性。",
    "body": "Google 介绍，Project Suncatcher 原型卫星已在轨运行 Gemma 4，并传回模型响应。后续将测试 TPU 的热应力和辐射可靠性，计划之一是 2027 年进行双星互联测试。",
    "analysis": "太空算力从构想走到了一次实际运行。接下来值得跟进的是，它能否在轨道环境中持续稳定工作，以及多颗卫星之间怎样连接。",
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
    "time": "10 月 31 日读取",
    "title": "让显卡更忙，不一定让每个人都等得更少。",
    "summary": "一位 RTX 3090 用户报告：单路生成约 30 token/秒；四路并发合计约 64，但每路降至约 16。评论进一步讨论了并发收益的上限。",
    "body": "LocalLLaMA 用户 Mchanger 分享了 RTX 3090 上的本地部署测试：单路生成约 30 token/秒，四路并发合计约 64 token/秒，每路约 16。帖子还列出了更高并发下的结果，供其他部署者讨论。",
    "analysis": "这组数据说明了吞吐和等待时间的区别：同时处理更多任务，显卡每秒产出更多，但每个人分到的速度会下降。批量处理文档和实时聊天，适合的并发设置可能就不同。",
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
        "why": "并发接近上限后，可以把优化重点转向每路速度和上下文空间。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xjx63n/just_rediscovered_batching_and_swarming_while/",
        "linkLabel": "查看原帖评论",
        "evidence": "数据解读",
        "mode": "中文摘编",
        "context": "针对原帖并发数与吞吐量表格的回复。"
      }
    ],
    "commentStatus": "摘编自原帖评论区。",
    "collectionNote": "读取帖子及 4 条评论/回复，选取 1 条有数据依据的补充；工具未返回评论直达链接。",
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
    "analysis": "它展示了一种整合能力的做法：先让老师各有所长，再把这些专长教给同一个小模型。对模型合并研究来说，这是一个值得对照的方案：在相同训练预算下，直接合并参数与训练一个学生，分别能保留多少专项能力？",
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
    "analysis": "真正交付产品时，任务做完没有、出错后能不能继续，都是用户直接感受到的能力。让客户提前试用，可以尽早暴露真实流程中的问题；保留会话和任务进度，则减少了故障后的返工。",
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
    "title": "Gemini 4 Carbon 发布，先面向安全防御场景开放。",
    "summary": "新模型主打长时间工程任务和网络安全防御。本周先向部分安全防御人员开放，再逐步扩大到可信合作伙伴，普通用户的全面开放仍在后续计划里。",
    "originalTitle": "Gemini 4 Carbon发布，但目前是有限开放",
    "body": "Google将Carbon重点放在长时间、多步骤工程任务和网络安全防御上。本周先向部分安全防御人员开放，再通过Fairwind计划逐步扩大到可信合作伙伴；普通开发者、企业和消费者的全面开放仍在后续计划中。",
    "analysis": "这次发布值得看的，是模型能力和试用场景怎样配合：先在长时间工程任务与安全防御中接受实际使用检验，再逐步扩大开放。对想试用的人来说，当前入口仍是有限开放计划。",
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
    "summary": "Genie 4 展示了可以实时交互的世界模拟：用文字改变场景，同步生成环境音和对话。目前已向可信测试者提供研究预览。",
    "originalTitle": "Genie 4把可交互场景、声音和对话放进同一模拟环境",
    "body": "DeepMind展示了实时交互世界模拟：用户可用文字改变场景，同时生成环境音和交互对话。目前面向可信测试者提供研究预览，消费者及开发者开放还在后续安排中。",
    "analysis": "这种环境除了用来生成内容，也可能让机器人和智能体反复练习任务。值得继续跟进的是，在模拟环境里学到的东西，能有多少用到真实场景中。",
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
    "summary": "AgentAlpha 的一篇笔记讨论公开评测过拟合，提出让评测更接近可以操作、获得反馈的真实任务。",
    "originalTitle": "小红书讨论：只盯公开榜单，可能漏掉实际任务",
    "body": "AgentAlpha的《大模型后训练时代：五年高考三年模拟》讨论公开评测过拟合，并提出应让评测更接近能操作、能反馈的任务环境。",
    "analysis": "“答对工具名称”和“调用工具办完一件事”，考察的是不同能力。这篇讨论可以和 Anthropic 的客户试用经验一起看：模型进入真实工作流后，需要接受哪些新的考验？",
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
    "summary": "胡豆豆在脉脉转发九坤相关招聘，列出北京的前端、客户端、产品经理和模型调度岗位，提到面向消费者的聊天产品。",
    "originalTitle": "脉脉出现九坤聊天产品相关招聘转发",
    "body": "用户“胡豆豆”转发“九坤岗位”，列出北京的网页前端、客户端、大模型产品经理，以及模型接入与调度平台研发岗位；正文提到面向消费者的聊天产品。",
    "analysis": "这组岗位覆盖了用户界面、产品设计和模型服务，可以作为观察产品方向的一条招聘线索。后续值得追踪的，是对应产品会以什么形态出现。",
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
  "updatedAt": "2026-10-31T14:22:48+08:00",
  "schedule": "每天北京时间 09:00 开始整理",
  "latestDate": "2026-10-31"
};
