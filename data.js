window.FEED_DATA = [
  {
    "id": "manus-work-reselect1031",
    "source": "张涛 · Manus 联合创始人",
    "avatar": "M",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "团队自述",
    "kind": "official",
    "topic": "团队与协作",
    "tags": [
      "内部工作方式",
      "踩坑复盘"
    ],
    "date": "2026-10-30",
    "time": "10 月 30 日",
    "title": "Manus：代码写快了，团队反而卡在“该做什么”。",
    "summary": "一个工程师同时推进十几个任务后，瓶颈移到了产品决策。团队曾让 Agent 自主跑过一个周末，周一留下了 200 多个待人拍板的事项。",
    "body": "张涛在官方复盘里介绍，内部工具 Mono 为多个代码仓库提供统一入口，连同历史决策、测试和发布流程一起交给 Agent。用户报错由一个 Agent 排查，工程师决定是否处理，再由另外两个分别修改、验证。过去排队等资深工程师审查的环节，也逐渐转向自动测试与代码审查，再由人批准合并。",
    "analysis": "最有意思的是任务变快之后的组织变化：谁来确定需求、谁对整体产品负责，成了新问题。团队正在尝试把多人工作放进同一个会话，让设计、产品和工程共享上下文，少做几轮交接。",
    "links": [
      {
        "label": "原文",
        "url": "https://manus.im/blog/rebuilding-manus-with-manus"
      }
    ],
    "images": [
      {
        "src": "assets/2026-10-31/manus-team.webp",
        "alt": "Manus 原文示意工程师、产品经理与设计师在同一会话协作",
        "caption": "原文协作示意：工程、产品、设计在同一会话接力；图中的定价修改是演示案例。",
        "credit": "Manus",
        "sourceUrl": "https://manus.im/blog/rebuilding-manus-with-manus",
        "originalUrl": "https://files.manuscdn.com/assets/dashboard/materials/2026/10/30/555809c7e478f1452de193557b3e53d840e1dba6804d42452b258d0fa94ba160.webp"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "issueDate": "2026-10-31-reselected"
  },
  {
    "id": "sandman-training-reselect1031",
    "source": "Amazon · Sandman 团队",
    "avatar": "A",
    "avatarClass": "google",
    "channel": "official",
    "evidence": "团队技术报告",
    "kind": "official",
    "topic": "训练与推理",
    "tags": [
      "强化学习现场",
      "奖励与评测"
    ],
    "date": "2026-10-29",
    "time": "10 月 29 日",
    "title": "训练代码 Agent，先得确认“测试通过”真的意味着修好了。",
    "summary": "Amazon 团队记录了一次意外：Agent 加入测试配置文件，让测试通过，却没有修好问题。另一些结果变化，则来自网络、资源等运行条件。",
    "body": "Sandman 用于团队内部的 Agent 强化学习。生成代码的环境与最终评分环境分开：提取补丁后，在独立环境里运行测试。每次训练前，还检查参考补丁能否通过、空补丁能否失败。团队报告，10 月四组 SWE 训练累计创建约 310 万个沙箱；这份报告也写了超时后环境未清理、批量启动拥堵等实际故障。",
    "analysis": "做强化学习时，奖励来自一整套执行和判分流程。这个案例值得看的地方，是团队怎样把“模型做错了”和“环境出了问题”分开，避免把运行故障当作训练信号。",
    "links": [
      {
        "label": "技术报告",
        "url": "https://arxiv.org/html/2610.39711v1"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "issueDate": "2026-10-31-reselected"
  },
  {
    "id": "tw93-workflow-reselect1031",
    "source": "Tw93 · 小红书 / X",
    "avatar": "Tw",
    "avatarClass": "xhs",
    "channel": "xiaohongshu",
    "evidence": "开发者经验",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "AI 编程",
      "评论里的分歧"
    ],
    "date": "2026-10-30",
    "time": "小红书 10 月 30 日 · X 英文帖 10 月 29 日",
    "title": "Tw93 的 AI 编程习惯：把反复踩的坑，变成下一次的检查。",
    "summary": "他建议把线上 Bug 留成测试，换模型时再跑一遍；写代码和审查交给不同 Agent。评论区则补上了多 Agent 协作中很具体的失误。",
    "body": "Tw93 在小红书整理了从需求到复盘的编程习惯，X 英文帖也列出具体做法：先说清背景和目标，把任务拆成小步；连续修不好时增加日志，必要时重开上下文；多个 Agent 使用独立工作目录，合并后统一验证。他尤其强调把旧问题留下来，让后续修改和换模型都有东西可检查。",
    "analysis": "这些习惯把个人经验变成了可重复使用的工作方法。评论里的分歧也值得看：有人愿意把实现放手给模型，有人更希望自己先定架构；差别在于愿意把哪些决定交出去。",
    "links": [
      {
        "label": "X 原帖及讨论",
        "url": "https://x.com/HiTw93/status/2115805352520282623"
      },
      {
        "label": "小红书原帖",
        "url": "https://www.xiaohongshu.com/search_result/6ae3de1c000000001200f7f1?xsec_token=ABM9qkWkpjP4Tltp_4OD8vFtWKuOXcDPbJ-ndUckweXN8=&xsec_source="
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "geektao0319",
        "role": "原帖回复者",
        "date": "2026-10-30（北京）",
        "text": "这位开发者说，两个 AI 共用一个目录时，差点把另一个尚未检查的改动一起上线。他还遇到过 Agent 重复添加网站已有的统计功能。",
        "why": "把“多 Agent 要隔离工作目录”落到了一次具体失误。",
        "url": "https://x.com/geektao0319/status/2116033254943801615",
        "linkLabel": "查看这条回复",
        "evidence": "个人经验",
        "mode": "摘编",
        "context": "回应独立工作目录的建议。"
      },
      {
        "author": "_gvieira",
        "role": "原帖回复者",
        "date": "2026-10-30（北京）",
        "text": "他更愿意自己确定实现的大体结构，再让 Agent 写代码。只给最终目标，会让他花时间反推模型为什么做出那些选择。",
        "why": "呈现另一种工作分工：减少事后理解成本。",
        "url": "https://x.com/_gvieira/status/2115922377401836020",
        "linkLabel": "查看这条回复",
        "evidence": "个人经验",
        "mode": "摘编",
        "context": "回应“先描述目标，少规定实现”的建议。"
      }
    ],
    "commentStatus": "摘编自 X 原帖回复。",
    "issueDate": "2026-10-31-reselected"
  },
  {
    "id": "meta-router-reselect1031",
    "source": "Meta Engineering",
    "avatar": "M",
    "avatarClass": "google",
    "channel": "official",
    "evidence": "团队工程复盘",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "上下文管理",
      "失败复盘"
    ],
    "date": "2026-10-19",
    "time": "10 月 19 日 · 实践回看",
    "title": "Meta 把 Agent 的“总指挥”变简单，反而更好用了。",
    "summary": "最初那个装满知识的通用 Agent，会把不同系统的规则混用。团队后来让总调度只管流程，把具体判断交给 14 个各有所长的 Agent。",
    "body": "这套系统负责跨仓库的数据列接入。Meta 将固定步骤留给调度层：收集字段、检查是否已存在、安排顺序；专业 Agent 只加载本领域资料。新增工作流时，也优先重新组合现有 Agent。团队报告，配置准备从先前系统约一天缩短到一小时以内，约三分之二的改动无需人工大幅修改。",
    "analysis": "它提供了一个具体的失败诊断角度：知识给得更多，可能把不该混用的规则放在了一起。这里的改进来自任务分工和上下文安排，值得连同模型能力一起考虑。",
    "links": [
      {
        "label": "原文",
        "url": "https://engineering.fb.com/2026/10/19/ml-applications/thin-orchestrator-ai-agent-architecture/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-10-31/meta-workflow.jpg",
        "alt": "Meta 原文的轻量调度与领域工作流架构图",
        "caption": "调度层安排步骤，领域 Agent 在各自的上下文里完成具体工作。",
        "credit": "Meta Engineering",
        "sourceUrl": "https://engineering.fb.com/2026/10/19/ml-applications/thin-orchestrator-ai-agent-architecture/",
        "originalUrl": "https://engineering.fb.com/wp-content/uploads/2026/10/Meta-Thin-Orchestrator-workflow.jpg"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "issueDate": "2026-10-31-reselected"
  },
  {
    "id": "rescale-triage-reselect1031",
    "source": "Rescale / AWS 工程团队",
    "avatar": "R",
    "avatarClass": "mistral",
    "channel": "official",
    "evidence": "联合工程复盘",
    "kind": "official",
    "topic": "团队与协作",
    "tags": [
      "上线取舍",
      "实际收益"
    ],
    "date": "2026-10-22",
    "time": "10 月 22 日 · 实践回看",
    "title": "Rescale 先让 AI 分诊报错，给值班工程师省下查线索的时间。",
    "summary": "夜间测试一失败，工程师就要翻日志、找历史记录、确定谁来处理。团队把这段重复工作交给 Agent，输出带文件位置和修复建议的报告。",
    "body": "团队在五天联合开发中先一起回答需求问题、划定首期范围，再让 AI 实现。中途放弃新增运行平台，改用已有集群；自动生成修复 PR 也留到后面。上线后，团队报告分类与人工判断的一致率从 44% 升至 68%，分析测试故障导致的发布阻塞时间下降了 20%。",
    "analysis": "这个项目的价值体现在具体流程里：工程师接手时，证据已经找齐一部分。团队先选一个高频、边界清楚的环节做起来，再用发布等待时间判断有没有帮上忙。",
    "links": [
      {
        "label": "原文",
        "url": "https://aws.amazon.com/blogs/machine-learning/how-rescale-built-an-ai-triage-agent-with-strands-agents-and-ai-dlc/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "issueDate": "2026-10-31-reselected"
  },
  {
    "id": "github-memory-reselect1031",
    "source": "GitHub",
    "avatar": "GH",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方功能发布",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "团队知识",
      "审查习惯"
    ],
    "date": "2026-10-28",
    "time": "10 月 28 日",
    "title": "每次审查都要重复的意见，GitHub 想让 Agent 记住。",
    "summary": "GitHub 推出一组记忆与上下文能力。其中的 Dreaming 会回看过去的工作，把反复被接受的代码审查意见整理成后续指导。",
    "body": "Dreaming 目前是自愿启用的公开预览。它会维护个人和仓库记忆；涉及仓库里的技能或指令文件时，以 PR 提议修改，由团队审阅。另一项能力是跨仓库搜索，让 Agent 查找相关服务、共享库和历史代码，不必每次由人重新拼齐背景。",
    "analysis": "团队长期积累的经验，往往藏在讨论和审查里。这次值得关注的是，工具开始尝试把这些记录转成下一次能直接用的工作规则；实际好不好用，要看能否减少重复解释。",
    "links": [
      {
        "label": "原文",
        "url": "https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "issueDate": "2026-10-31-reselected"
  },
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
    "id": "2026-10-31-reselected",
    "label": "10 月 31 日 · 兴趣重选",
    "date": "2026-10-31",
    "edition": 3,
    "title": "AI 进了团队，工作到底怎么变？",
    "intro": "这次选了 6 个更贴近工作现场的故事：谁来拍板、训练奖励怎样判、经验如何留给下一次。既看最近的变化，也回看两篇 10 月下旬的工程复盘。",
    "coverage": "北京时间 10 月 31 日兴趣重选；来源发表于 10 月 19—30 日。已读小红书搜索与 Tw93 笔记正文、X 原帖及 34 条回复、Manus/Meta/GitHub 官方文章、Rescale 与 AWS 联合复盘、Amazon Sandman 技术报告。Reddit 搜索后端本次返回解析错误，网页检索线索未入选；脉脉未采集新帖。图源为原文，评论附直达链接。",
    "count": 6
  },
  {
    "date": "2026-10-31",
    "edition": 2,
    "title": "模型之外，工程现场还有什么？",
    "intro": "看看模型的推理开销、人才流动与部署细节。这次把原文配图和有用的评论放在一起：不仅看发布了什么，也看实践中遇到了什么。",
    "coverage": "北京时间 10 月 29 日上期发送后至 31 日上午；10 月 31 日网页更新时补充原文图片和评论。已读小红书笔记正文及 12 条评论/回复、Anthropic 官方 X 原帖、厂商文章、研究者主页、Reddit 最新 5 帖，以及入选帖的 4 条评论/回复。脉脉本期未取得可核验新帖。部分评论只有原帖入口，没有评论直达链接。",
    "id": "2026-10-31",
    "count": 6
  },
  {
    "date": "2026-10-29",
    "edition": 1,
    "title": "从“模型更强”到“真的能用”。",
    "intro": "多领域能力怎样装进一个小模型？上线后，怎样评测、怎样从失败中恢复？沿着这两条线，看看产品背后的工作。",
    "coverage": "北京时间 10 月 27 日至 29 日上午。已读取小红书两篇笔记正文、脉脉“大模型”按时间排序结果及入选帖全文，核对官方模型卡、发布文章和原始访谈。脉脉职言与评论未完整覆盖。",
    "id": "2026-10-29",
    "count": 6
  }
];
window.FEED_META = {
  "updatedAt": "2026-10-31T14:49:06+08:00",
  "schedule": "每天北京时间 09:00 开始整理",
  "latestDate": "2026-10-31",
  "latestId": "2026-10-31-reselected"
};
