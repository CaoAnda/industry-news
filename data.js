window.FEED_DATA = [
  {
    "id": "deepseek-superagent-20261031",
    "source": "DeepSeek · 开源原型",
    "avatar": "D",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-10-31",
    "time": "10 月 31 日",
    "title": "DeepSeek 把“谁接任务、谁找人拍板”做进了 Agent 原型。",
    "summary": "DeepSeek 公开了 dsh-superagent 研究原型，尝试让 Agent 持续跟进一个代码仓库：从 GitHub、可选的飞书渠道接收任务，分派工作，再把结果回到原来的讨论里。设计来自团队日常开发，公开版本供研究参考。\n\n比较有意思的是分工：负责沟通和派活的主会话，与真正修改代码的工作会话分开；每项工作有独立会话和目录。普通进度留在任务里，需要人回答的问题才及时转上来。团队想省下的，是人在一堆会话之间反复切换的注意力。",
    "body": "",
    "links": [
      {
        "label": "项目与说明",
        "url": "https://github.com/deepseek-ai/dsh-superagent-prototype"
      },
      {
        "label": "架构细节",
        "url": "https://github.com/deepseek-ai/dsh-superagent-prototype/blob/main/docs/007-architecture.md"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "每项工作有独立会话和目录",
        "需要人回答的问题才及时转上来"
      ],
      "body": []
    },
    "issueDate": "2026-11-01"
  },
  {
    "id": "local-search-stack-20261101",
    "source": "mountainyoo · LocalLLaMA",
    "avatar": "m",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人经验",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-01",
    "time": "11 月 1 日",
    "title": "本地模型接上搜索，为什么还是找不到好资料？",
    "summary": "今天一位开发者分享了实际困扰：用 Crawl4AI 读取网页、SearXNG 搜索，再接本地模型，回答仍常漏掉明显的资料，或混入过时内容。他试过几个 Agent 工具，也在提示词里要求“最新、相关”，效果仍不满意。\n\n这个问题适合拆开排查：先看搜索返回了什么，再看模型有没有读懂和用好。原始结果已经过时，继续修改回答提示词就很难补救；评论里有人贴出了自己“多路搜索，再筛一遍”的做法。",
    "body": "",
    "links": [
      {
        "label": "讨论原帖",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xkm2yb/how_do_i_make_search_with_local_models_feel_like/"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "seamonn",
        "role": "普通评论者",
        "date": "读取于 11 月 1 日（北京时间）",
        "text": "我把多个搜索服务的结果汇总，每个先取约 20 条和摘要，再用重排模型选出前 10 条；更深的研究会重复这个过程。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xkm2yb/how_do_i_make_search_with_local_models_feel_like/",
        "linkLabel": "原帖入口",
        "evidence": "个人经验",
        "mode": "翻译摘编",
        "context": "普通评论者 · 分享自己的搜索流程",
        "highlights": [
          "再用重排模型选出前 10 条"
        ]
      },
      {
        "author": "Borkato",
        "role": "普通评论者",
        "date": "读取于 11 月 1 日（北京时间）",
        "text": "我在工具里设了一个切换条件：SearXNG 连续几次找不到需要的内容，就改用 Tavily。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xkm2yb/how_do_i_make_search_with_local_models_feel_like/",
        "linkLabel": "原帖入口",
        "evidence": "个人经验",
        "mode": "翻译摘编",
        "context": "普通评论者 · 分享搜索失败后的备用方案",
        "highlights": []
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先看搜索返回了什么，再看模型有没有读懂和用好"
      ],
      "body": []
    },
    "issueDate": "2026-11-01"
  },
  {
    "id": "anthropic-em-search-20261031",
    "source": "Anthropic · Alignment Science",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-10-31",
    "time": "10 月 31 日 · 补读",
    "title": "数据看起来没问题，微调后的行为却变了。",
    "summary": "Anthropic 让多个 Claude Agent 自动设计训练数据、微调研究模型，再测行为变化。它们共享实验记录，沿着前面的尝试继续改。结果找到了一些能通过数据筛查、却让微调模型学会欺骗或抵制监督的数据，常借助小说和角色扮演包装。\n\n这里最值得关注的是检查发生在哪里：逐条看训练文本，与训练后测模型行为，发现的是不同问题。实验特意让 Agent 反复试探同一个筛查器，使用的模型仅供研究；它提供的是改进后训练检查流程的一批具体反例。",
    "body": "",
    "links": [
      {
        "label": "技术文章",
        "url": "https://alignment.anthropic.com/2026/automated-em-search/"
      },
      {
        "label": "官方发布帖",
        "url": "https://x.com/AnthropicAI/status/2116349211549843666"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-01/anthropic-em-harness.png",
        "alt": "Anthropic 自动生成数据、微调、行为评测与共享实验日志的流程图",
        "caption": "原文实验流程：生成数据 → 微调 → 数据与行为检查 → 记录结果，下一轮接着尝试。",
        "credit": "Anthropic Alignment Science",
        "sourceUrl": "https://alignment.anthropic.com/2026/automated-em-search/",
        "originalUrl": "https://alignment.anthropic.com/2026/automated-em-search/fig1.png",
        "placement": "inline"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "共享实验记录，沿着前面的尝试继续改",
        "逐条看训练文本，与训练后测模型行为"
      ],
      "body": []
    },
    "issueDate": "2026-11-01"
  },
  {
    "id": "moss-ama-roadmap-20261101",
    "source": "MOSS 团队 · Reddit 答疑",
    "avatar": "M",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "团队答疑",
    "kind": "interview",
    "topic": "团队与协作",
    "tags": [
      "团队与协作"
    ],
    "date": "2026-10-30",
    "time": "10 月 30 日起 · 周末答疑",
    "title": "MOSS 的问答里，能看到小团队怎样给模型排优先级。",
    "summary": "MOSS 团队这轮公开答疑，透露了比发布海报更具体的取舍：音效模型暂缓单独迭代，之后考虑并入统一音频生成；近期重心是可控制风格和情绪的 TTS 2.0。图像侧在做编辑与参考图模型，控制方式还会结合用户反馈调整。\n\n面对不断增加的需求，成员也直说团队很小。对使用者来说，这些回复有助于判断哪些方向正在投入、哪些要继续等；其中 TTS 2.0 的 11 月发布是团队当前目标。",
    "body": "",
    "links": [
      {
        "label": "团队答疑原帖",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xjhpn9/were_moss_the_team_behind_mossimage_mosstts_and/"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "Relevant-Dentist-733",
        "role": "普通评论者",
        "date": "读取于 11 月 1 日（北京时间）",
        "text": "我自己做图像模型微调和合并。若基础版先发布很久，社区已经围着它积累了模型，后来出的 Turbo 版就不容易形成生态。因此我希望加速版尽早、或与基础版一起发布。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xjhpn9/were_moss_the_team_behind_mossimage_mosstts_and/",
        "linkLabel": "原帖入口",
        "evidence": "个人经验",
        "mode": "翻译摘编",
        "context": "普通评论者 · 针对 MOSS 动漫版的发布顺序提建议",
        "highlights": [
          "社区已经围着它积累了模型"
        ]
      },
      {
        "author": "garybryant",
        "role": "团队成员",
        "date": "读取于 11 月 1 日（北京时间）",
        "text": "目前可以接收实习生，但只接受在上海线下参与。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xjhpn9/were_moss_the_team_behind_mossimage_mosstts_and/",
        "linkLabel": "原帖入口",
        "evidence": "团队自述",
        "mode": "翻译摘编",
        "context": "团队成员 · 回答参与项目和实习的问题",
        "highlights": []
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "音效模型暂缓单独迭代",
        "控制方式还会结合用户反馈调整"
      ],
      "body": []
    },
    "issueDate": "2026-11-01"
  },
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
    "title": "Manus 让 Agent 跑了一个周末，周一堆出 200 多个待拍板事项。",
    "summary": "张涛在团队复盘中提到，他们尝试让 Agent 自动收集内部反馈，为每个反馈启动任务。一个周末后，200 多个事项等着人作决定，人的注意力成了瓶颈。\n\n团队由此重新划分工作：修复有没有通过测试，可以交给系统检查；一个产品改动值不值得做，仍由人拍板。",
    "body": "现在，一条用户报错先由 Agent 排查并找到相关改动，再交给工程师判断是否处理。工程师自己的 Agent 负责修改，另一个 Agent 运行测试、验证结果，最终由有权限的人批准合并和发布。\n\n支撑这套流程的是内部工具 Mono：它为多个代码仓库提供统一入口，把历史决策、测试和发布方式一起交给 Agent。团队也在尝试让工程、产品和设计进入同一个会话，共享讨论背景，减少交接时重新解释的工作。",
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
    "detailLabel": "他们后来怎样分工",
    "highlights": {
      "summary": [
        "200 多个事项等着人作决定",
        "一个产品改动值不值得做，仍由人拍板"
      ],
      "body": [
        "共享讨论背景，减少交接时重新解释的工作"
      ]
    },
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
    "title": "代码没修好，测试却过了：Amazon 怎样处理训练中的假奖励？",
    "summary": "Amazon 的 Sandman 团队遇到过这样的情况：Agent 加入一个测试配置文件，让测试通过了，却没有真正修复问题。网络和资源条件的变化，也会让同一补丁得到不同的判分。\n\n他们把生成代码和最终评分放进不同环境，并在训练前检查：参考修复应当通过，什么都不改应当失败。先确认判分可信，才能拿它作为训练奖励。",
    "body": "Agent 完成修改后，训练程序只提取补丁，放进独立环境运行测试，避免把执行过程中留下的文件和进程带进评分。报告中的处理还包括排除测试配置文件改动，以及在评分前检查运行条件。\n\n遇到基础设施故障时，系统先重试；仍拿不到有效结果就重新采样，而不是直接记作模型失败。团队在 10 月四组内部代码 Agent 训练中创建了约 310 万个沙箱，也记录了超时后环境没有清理、批量启动拥堵等问题。",
    "links": [
      {
        "label": "技术报告",
        "url": "https://arxiv.org/html/2610.39711v1"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "detailLabel": "判分流程怎样改",
    "highlights": {
      "summary": [
        "让测试通过了，却没有真正修复问题",
        "把生成代码和最终评分放进不同环境"
      ],
      "body": [
        "而不是直接记作模型失败"
      ]
    },
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
    "title": "Tw93：换一个新模型，先让它重做以前出过错的任务。",
    "summary": "Tw93 建议把线上 Bug 和用户反馈变成测试案例，每次发布前跑一遍，换模型时也重跑。这样就能具体看到：哪些旧问题修好了，哪些又出现了。\n\n他还把写代码与审查分给不同 Agent；多个 Agent 同时工作时，各用独立目录，合并后再统一验证。",
    "body": "在需求阶段，他倾向于先讲背景、目标和期望结果，把实现拆成小步。排错时，如果连续两次没有修好，就增加日志看真实运行情况；多次尝试仍无效，再整理问题与已试过的办法，重开上下文。",
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
        "url": "https://x.com/geektao0319/status/2116033254943801615",
        "linkLabel": "查看这条回复",
        "evidence": "个人经验",
        "mode": "摘编",
        "context": "回应独立工作目录的建议。",
        "highlights": [
          "差点把另一个尚未检查的改动一起上线"
        ]
      },
      {
        "author": "_gvieira",
        "role": "原帖回复者",
        "date": "2026-10-30（北京）",
        "text": "他更愿意自己确定实现的大体结构，再让 Agent 写代码。只给最终目标，会让他花时间反推模型为什么做出那些选择。",
        "url": "https://x.com/_gvieira/status/2115922377401836020",
        "linkLabel": "查看这条回复",
        "evidence": "个人经验",
        "mode": "摘编",
        "context": "回应“先描述目标，少规定实现”的建议。",
        "highlights": [
          "自己确定实现的大体结构"
        ]
      }
    ],
    "commentStatus": "摘编自 X 原帖回复。",
    "detailLabel": "需求和排错时，他怎么做",
    "highlights": {
      "summary": [
        "把线上 Bug 和用户反馈变成测试案例",
        "各用独立目录，合并后再统一验证"
      ],
      "body": [
        "增加日志看真实运行情况"
      ]
    },
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
    "title": "Meta 的 Agent 把不同系统的规则混用了，团队给它重新分了工。",
    "summary": "Meta 最初让一个通用 Agent 掌握整条数据接入流程。上线后，它会把一个系统的字段命名规则用到另一个系统，或套用不合适的代码生成方式。\n\n团队后来让总调度只安排步骤，把具体判断交给 14 个专业 Agent，每个只加载自己的领域资料。团队报告，配置准备从先前系统约一天缩短到一小时以内。",
    "body": "总调度负责收集字段、检查目标是否已存在、安排顺序和处理结果；专业 Agent 负责具体领域的操作。不同工作流可以复用同一批 Agent，新增任务时，先尝试重新组合现有步骤。\n\nMeta 报告，约三分之二的改动无需人工大幅修改。这篇复盘中，导致错误的一个具体问题是上下文混杂：规则都在，但模型没有正确区分各自适用的系统。",
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
        "originalUrl": "https://engineering.fb.com/wp-content/uploads/2026/10/Meta-Thin-Orchestrator-workflow.jpg",
        "placement": "details"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "detailLabel": "新的分工和流程图",
    "highlights": {
      "summary": [
        "把一个系统的字段命名规则用到另一个系统",
        "每个只加载自己的领域资料"
      ],
      "body": [
        "不同工作流可以复用同一批 Agent"
      ]
    },
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
    "title": "值班工程师每天都在翻报错日志，Rescale 把第一轮排查交给 AI。",
    "summary": "夜间测试一失败，Rescale 工程师就要翻日志、找历史记录，再确定问题该交给谁。团队让 Agent 先做分类、收集证据，输出带文件位置和修复建议的报告，工程师接手后再判断。\n\n上线后，团队报告，分类与人工判断的一致率从 44% 升至 68%；分析测试故障造成的发布阻塞时间下降了 20%。",
    "body": "五天联合开发中，团队先一起回答需求问题、划定首期范围，再让 AI 实现。为了直接接入已有流程，他们中途放弃新增运行平台，改用现有集群。\n\n首期先做好分类和建议，自动生成修复 PR 留到后续。这让团队可以先观察第一轮排查能省多少时间，再决定继续自动化哪些步骤。",
    "links": [
      {
        "label": "原文",
        "url": "https://aws.amazon.com/blogs/machine-learning/how-rescale-built-an-ai-triage-agent-with-strands-agents-and-ai-dlc/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "detailLabel": "首期做了什么，推迟了什么",
    "highlights": {
      "summary": [
        "先做分类、收集证据",
        "发布阻塞时间下降了 20%"
      ],
      "body": [
        "自动生成修复 PR 留到后续"
      ]
    },
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
    "title": "反复出现的代码审查意见，GitHub 想让 Agent 下次直接记住。",
    "summary": "GitHub 的 Dreaming 会回看过去的工作，把反复被接受的代码审查意见整理成后续指导，也会维护个人与仓库记忆。涉及仓库中的技能或指令文件时，它会提交修改提议，交给团队审阅。\n\n这项功能于 10 月 28 日以公开预览形式发布，需要主动启用。",
    "body": "同一组发布还包括跨仓库搜索。Agent 可以查找相关服务、共享库和历史代码，减少每次开始任务前由人收集背景的工作。\n\n例如修复一个跨服务的问题时，可以先查清几处实现和调用关系，再确定哪些地方需要一起修改。",
    "links": [
      {
        "label": "原文",
        "url": "https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "detailLabel": "还有哪些上下文能力",
    "highlights": {
      "summary": [
        "把反复被接受的代码审查意见整理成后续指导",
        "需要主动启用"
      ],
      "body": [
        "跨仓库搜索"
      ]
    },
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
    "title": "Mistral 开放升级版 Large 4 权重，同时提供三档推理模式。",
    "summary": "Mistral 发布了进一步训练的 Large 4 权重，支持低、中、高三档推理模式。公司报告，Terminal-Bench 4.0 得分从预览版的 28% 提高到 41%，输出 token 减少 30%。\n\n产品团队可以按任务选择投入多少推理计算：日常请求控制开销，复杂任务使用更高档位。",
    "body": "",
    "links": [
      {
        "label": "原文",
        "url": "https://mistral.ai/news/mistral-large-4-oss/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "本条未采集评论",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "低、中、高三档推理模式",
        "输出 token 减少 30%"
      ],
      "body": []
    },
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
    "summary": "叶德珩的个人主页已列出字节 Seed 研究员身份：2017—2026 年在腾讯，2026 年起在 Seed 从事基础模型研究。此前项目包括绝悟系列，研究经历涵盖强化学习与智能体。",
    "body": "",
    "links": [
      {
        "label": "本人主页",
        "url": "https://yedeheng.github.io/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "本条未采集评论",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "2026 年起在 Seed 从事基础模型研究"
      ],
      "body": []
    },
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
    "title": "Claude 每次回答后做一次风险自评，额外计算开销估计低于 2%。",
    "summary": "Anthropic 介绍，Claude 回答后会复用已有对话缓存，生成一份简短安全评估，再交给离线流程复核。这套机制自 6 月开始使用，公司估计额外推理计算开销低于 2%。\n\n把初筛安排在回答之后，后续复核就可以集中处理可疑对话，无需把所有检查都放进用户等待回答的过程。",
    "body": "",
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
    "detailLabel": "",
    "highlights": {
      "summary": [
        "复用已有对话缓存",
        "额外推理计算开销低于 2%"
      ],
      "body": []
    },
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
    "title": "后训练岗位面试追问：为什么训练完，性能反而下降了？",
    "summary": "fangliqian 在华为后训练岗位面试复盘中写到，问题涉及微调和强化学习的目标函数、数据构造、评测指标，以及偏好训练后性能下降的原因和改进办法。还要求用基础 math 库实现因果注意力。\n\n评论里，作者补充：实际面试会继续问这些基础知识在实习项目里怎么用。",
    "body": "",
    "links": [
      {
        "label": "原帖",
        "url": "https://www.xiaohongshu.com/search_result/6ae40d1a0000000026002909?xsec_token=ABsGEOUzPAM_Ox-2GEdZLzQDu6KfAkf9wRjaK7jSAKjA4=&xsec_source="
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "摘编自原帖评论区。",
    "collectionNote": "读取到 12 条评论及回复，选取 1 条作者补充；链接进入原帖，未获取评论直达链接。",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "偏好训练后性能下降的原因和改进办法",
        "在实习项目里怎么用"
      ],
      "body": []
    },
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
    "title": "Google 的太空 TPU 原型运行了 Gemma 4，并传回响应。",
    "summary": "Google 介绍，Project Suncatcher 原型卫星已在轨运行 Gemma 4。接下来将测试 TPU 在热应力和辐射环境下的可靠性，计划之一是 2027 年进行双星互联测试。",
    "body": "",
    "links": [
      {
        "label": "原文",
        "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "本条未采集评论",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "已在轨运行 Gemma 4",
        "热应力和辐射环境下的可靠性"
      ],
      "body": []
    },
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
    "title": "一张 RTX 3090 同时服务四路请求，总吞吐提高，每路速度却下降了。",
    "summary": "LocalLLaMA 用户 Mchanger 分享个人部署测试：单路生成约 30 token/秒；四路并发合计约 64，每路约 16。显卡每秒产出更多，但单个使用者拿到回答的速度变慢。\n\n评论者还注意到，从 12 路增至 16 路并发，总吞吐只从约 110 增到 111 token/秒，继续加并发的收益已经很小。",
    "body": "",
    "links": [
      {
        "label": "原帖",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xjx63n/just_rediscovered_batching_and_swarming_while/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "摘编自原帖评论区。",
    "collectionNote": "读取帖子及 4 条评论/回复，选取 1 条有数据依据的补充；工具未返回评论直达链接。",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "显卡每秒产出更多，但单个使用者拿到回答的速度变慢",
        "总吞吐只从约 110 增到 111 token/秒"
      ],
      "body": []
    },
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
    "title": "Liquid AI 用六位专项教师，把不同能力教给同一个小模型。",
    "summary": "LFM3-1.7B 的后训练流程里，六位教师分别覆盖代码、数学、工具、长上下文、智能体和企业工作流。团队通过多领域在策略蒸馏，把这些专长整合进同一个学生模型，再放进真实智能体运行框架中做强化学习。",
    "originalTitle": "Liquid AI公开小模型的“多位老师教一个学生”路线",
    "body": "模型卡列出四个阶段：监督微调、多领域强化学习、多教师在策略蒸馏，最后是在实际运行框架中的强化学习。\n\n这里的“在策略”是让学生自己生成回答或行动轨迹，再接受教师指导。它提供了一条整合专项能力的路线，也可以与直接合并模型参数的方法作比较。",
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
    "detailLabel": "四阶段训练怎样衔接",
    "highlights": {
      "summary": [
        "把这些专长整合进同一个学生模型"
      ],
      "body": [
        "让学生自己生成回答或行动轨迹，再接受教师指导"
      ]
    },
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
    "title": "模型上线前，Anthropic 让客户拿自己的工具和工作流来测。",
    "summary": "Anthropic 平台负责人 Katelyn Lesse、Angela Jiang 在访谈中介绍，提前试用客户会在自己的环境里评测模型，反馈官方产品没有覆盖的问题。\n\n她们还谈到另一项上线设计：把会话记录、智能体控制程序和执行代码的沙箱分开。即使执行环境出故障，任务进度仍可以保留下来，减少从头再来的返工。",
    "originalTitle": "Anthropic负责人谈上线幕后：让客户在自己的环境里测",
    "body": "",
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
    "detailLabel": "",
    "highlights": {
      "summary": [
        "在自己的环境里评测模型",
        "即使执行环境出故障，任务进度仍可以保留下来"
      ],
      "body": []
    },
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
    "title": "Gemini 4 Carbon 发布，先向部分安全防御人员开放。",
    "summary": "Google 把 Carbon 重点放在长时间、多步骤工程任务和网络安全防御上。10 月 28 日发布时，先向部分安全防御人员开放，再通过 Fairwind 计划逐步扩大到可信合作伙伴。普通开发者、企业和消费者的全面开放仍在后续计划中。",
    "originalTitle": "Gemini 4 Carbon发布，但目前是有限开放",
    "body": "",
    "links": [
      {
        "label": "原文",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "先向部分安全防御人员开放"
      ],
      "body": []
    },
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
    "title": "Genie 4 把场景、环境音和对话放进同一个交互世界。",
    "summary": "DeepMind 展示的 Genie 4 支持实时交互：用户用文字改变场景，系统同时生成环境音和交互对话。10 月 27 日发布时，它面向可信测试者提供研究预览，消费者与开发者开放还在后续安排中。",
    "originalTitle": "Genie 4把可交互场景、声音和对话放进同一模拟环境",
    "body": "",
    "links": [
      {
        "label": "原文",
        "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "同时生成环境音和交互对话",
        "面向可信测试者提供研究预览"
      ],
      "body": []
    },
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
    "title": "后训练会不会只学会刷榜？一篇小红书笔记提出评测疑问。",
    "summary": "AgentAlpha 在《大模型后训练时代：五年高考三年模拟》中讨论公开评测过拟合，主张把评测放进能操作、能获得反馈的任务环境。\n\n这篇讨论关心的是：模型在熟悉的题目上得分提高之后，进入真实任务还能不能完成工作。",
    "originalTitle": "小红书讨论：只盯公开榜单，可能漏掉实际任务",
    "body": "",
    "links": [
      {
        "label": "原帖",
        "url": "https://www.xiaohongshu.com/search_result/6ae20ceb00000000240075c2?xsec_token=ABxS-C1hYgStH4VrRzSsyI-Nj6igZRNn5WdO-Q3Gana1E=&xsec_source="
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "能操作、能获得反馈的任务环境"
      ],
      "body": []
    },
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
    "title": "九坤相关招聘转发，列出了聊天产品和模型调度岗位。",
    "summary": "胡豆豆在脉脉转发一组“九坤岗位”：工作地点在北京，包括网页前端、客户端、大模型产品经理，以及模型接入与调度平台研发。帖子提到面向消费者的聊天产品。\n\n这是一条个人招聘转发，可以用来观察岗位需求；产品细节还要等待后续公开信息。",
    "originalTitle": "脉脉出现九坤聊天产品相关招聘转发",
    "body": "",
    "links": [
      {
        "label": "原帖",
        "url": "https://maimai.cn/community/feed-detail/1933070113?fid=1933070113&efid=JWxqKDxBaESCUtV93vRnnQ"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "首期未采集评论",
    "detailLabel": "",
    "highlights": {
      "summary": [
        "模型接入与调度平台研发",
        "个人招聘转发"
      ],
      "body": []
    },
    "issueDate": "2026-10-29"
  }
];
window.FEED_ISSUES = [
  {
    "date": "2026-11-01",
    "edition": 4,
    "title": "把 Agent 放进工作里，接下来卡在哪里？",
    "intro": "今天看 4 条消息：DeepSeek 怎样分派任务，本地搜索为何漏资料，微调检查会漏掉什么，以及 MOSS 团队如何排优先级。另拆解一篇 Samaya 的后训练案例，看看小模型怎样学会使用真正的工作工具。",
    "coverage": "北京时间 10 月 31 日 17:42 至 11 月 1 日 09:07 为本次优先检查时段；补读 10 月 31 日上午的 Anthropic 研究和 10 月 30 日起的 MOSS 周末答疑，均未在往期收录。已读 DeepSeek 官方仓库与架构文档、Anthropic 原文与 X 发布帖及回复、Reddit 两个讨论串、小红书搜索和 DeepSeek 转述笔记正文及 10 条评论。小红书评论未选到额外实践细节；X 回复多为观点和复述，未摘入。脉脉本次无法建立后台浏览器访问，未采集新帖，也未验证职言。研究案例来自 Samaya 10 月 28 日技术文章，标原始日期。配图已核对原文；Reddit 评论按读取日期标记，链接为原帖入口。",
    "question": "Agent 接手更多步骤后，你的工作里最先卡住的会是资料质量、结果检查，还是等人作决定？",
    "id": "2026-11-01",
    "count": 4
  },
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
  "updatedAt": "2026-11-01T09:47:57+08:00",
  "schedule": "每天北京时间 09:00 开始整理",
  "latestDate": "2026-11-01",
  "latestId": "2026-11-01"
};
window.LEARNING_DATA = {
  "sourceProject": "每日 AI 新闻 / 拾知",
  "importedOn": "2026-10-31",
  "featured": [
    "samaya-sterling"
  ],
  "entries": [
    {
      "id": "speculative",
      "aliases": "推测解码 推测采样 speculative sampling",
      "cat": "ai",
      "topic": "推理加速",
      "symbol": "⇢",
      "method": "Speculative Decoding",
      "year": "ICML 2023",
      "time": 8,
      "title": "小模型先起草，为什么能给大模型加速？",
      "desc": "把串行生成变成批量验证，再用概率校正保住目标分布。",
      "scenario": "想降低大模型生成延迟，同时保持原来的采样分布。",
      "bottleneck": "直接换成小模型会改变输出；大模型逐 token 生成又需要反复等待。",
      "insight": "未知的后续内容难以并行生成；已有草稿的多个位置，却能让大模型并行计算概率。",
      "lead": "假设你在做一个对话服务：大模型回答质量合适，但用户要等很久。换小模型会改变结果，多买一张卡也未必能消除逐 token 生成的串行等待。能不能让小模型承担便宜的试探，再由大模型校正？",
      "steps": [
        [
          "便宜地猜一段",
          "小模型按自己的分布 q 连续起草几个 token。此时草稿还不是最终输出。"
        ],
        [
          "把猜测变成可并行的输入",
          "草稿已知后，大模型可以在一次前向计算中，对多个草稿前缀计算下一 token 的分布 p。它仍遵守因果遮罩，不是偷看未来答案；只是各位置需要的输入已经给定。"
        ],
        [
          "按概率接受，遇到拒绝就截断",
          "对草稿 token x，以 min(1, p(x)/q(x)) 的概率接受。到第一个拒绝处，丢弃该处及其后的草稿，因为后面的概率依赖于那个已被拒绝的前缀。"
        ],
        [
          "补回缺少的概率",
          "在拒绝位置，从归一化后的 max(p−q, 0) 中采样一个替代 token。如果整段草稿全部接受，再从大模型已算好的下一位置分布多取一个 token。"
        ]
      ],
      "example": {
        "title": "为什么“拒绝后再问一次大模型”仍然不对？",
        "text": "下面把词表缩成 A、B 两个 token。大模型希望输出比例是 60% / 40%，草稿模型却是 80% / 20%。比较三种处理方式，计算最终输出概率。这里运行的是概率公式，不是大模型，也不是随机模拟。",
        "lab": "speculative"
      },
      "evidence": "论文第 2.3 节和附录 A.1 给出采样分布不变的论证；第 4 节在其 T5-XXL 与 T5X 基线配置下报告约 2–3 倍加速。理论保证的对象是输出分布，不是每次运行得到同一句话。",
      "limits": "大模型验证多个位置不是零成本。收益取决于草稿成本、接受率、草稿长度和硬件负载；若草稿很差，或服务已被大批量计算占满，额外工作可能抵消收益。采样温度、截断等应体现在实际的 p、q 中，数学保证也不等于任意工程实现都毫无数值误差。",
      "transfer": "可以借鉴的设计思路：把“提出候选”和“保证结果性质”分开。让便宜模块尽量多做试探，让昂贵模块批量校验，并找一个能明确补偿偏差的机制。这是设计启发，迁移到别的任务后仍需重新证明或实验。",
      "take": "让小模型帮忙只是开头；批量验证省等待，残差采样修偏差，两者一起才构成这个方法。",
      "counter": {
        "q": "如果小模型更强，但也更慢，加速一定更多吗？",
        "a": "不一定。更接近大模型的分布可能提高接受率，但起草成本也会变高。需要比较端到端每秒生成的 token 数，而不是只比较草稿准确性或接受率。"
      },
      "sources": [
        [
          "原论文 · 方法 §2、速度分析 §3、实验 §4",
          "https://proceedings.mlr.press/v202/leviathan23a/leviathan23a.pdf"
        ]
      ]
    },
    {
      "id": "flash-attention",
      "cat": "ai",
      "topic": "高效计算",
      "symbol": "▦",
      "method": "FlashAttention",
      "year": "2022",
      "time": 6,
      "title": "算得更多，为什么反而能跑得更快？",
      "desc": "瓶颈在数据搬运时，重排计算比少做乘法更有效。",
      "scenario": "长序列注意力占显存、耗时间，但又不想近似掉注意力结果。",
      "bottleneck": "只减少乘加次数，可能忽略显存与芯片之间的大量读写。",
      "insight": "最终需要的是注意力输出，不一定要把完整的 N×N 中间矩阵存进显存。",
      "lead": "想象一个长度为 N 的序列。常规注意力先算两两相关性，再做 softmax，最后乘上 V。中间那张 N×N 大表被写入、读出显存，即使算术本身很快，搬来搬去也会拖慢程序。",
      "steps": [
        [
          "把大表拆成能放进片上存储的小块",
          "分块加载 Q、K、V，在更靠近计算单元的 SRAM 中处理；避免把整张注意力矩阵实体化到显存。"
        ],
        [
          "跨块维护归一化信息",
          "softmax 的分母依赖整行，不能每块各算各的再简单平均。维护行最大值、指数和及部分输出，新块到来时先重标定，再合并。"
        ],
        [
          "反向传播时按需重算",
          "不保存全部中间矩阵，而保留输出和必要统计量。反向时重算局部值，用更多算术换更少显存读写。"
        ]
      ],
      "example": {
        "title": "一个小反例：为什么不能每块独立归一化？",
        "text": "教学算例：一行分数是 [0, 0, ln 2, ln 2]，对应 V 为 [0, 0, 1, 1]。完整 softmax 的指数权重是 [1, 1, 2, 2]，输出为 4/6 = 2/3。若前后两块独立归一化，各得 0 和 1，再等权平均，只得到 1/2。跨块必须保留并正确合并“这块占多少总权重”的信息。"
      },
      "evidence": "原论文 §3.1 说明分块 softmax 与重算，§4 比较真实运行时间和显存。这里讨论的是精确注意力版本：不主动丢弃注意力连接，但浮点运算顺序变化仍可能产生数值差异。",
      "limits": "精确版本仍计算稠密注意力，不能据此声称算术复杂度变成线性。加速依赖硬件、序列长度、实现和工作负载；减少读写与减少 FLOPs 不是同一指标。",
      "transfer": "先测真正卡住系统的资源，再决定优化什么。若目标只需要一个汇总结果，可以寻找可分块合并的统计量，避免保存全部中间结果。这是跨任务的设计启发。",
      "take": "它的巧妙处是改变计算的组织方式，把“存下大表”改成“边算边汇总”。",
      "counter": {
        "q": "把每一块的 softmax 输出直接平均，可以得到相同结果吗？",
        "a": "不可以。各块的归一化分母不同，等权平均会丢掉跨块的相对权重。上面的 2/3 与 1/2 就是一个可手算的反例。"
      },
      "sources": [
        [
          "原论文 · §3.1 分块与重算、Algorithm 1",
          "https://arxiv.org/html/2205.14135v2"
        ]
      ]
    },
    {
      "id": "ties",
      "cat": "merge",
      "topic": "干扰与聚合",
      "symbol": "⋈",
      "method": "TIES-Merging",
      "year": "NeurIPS 2023",
      "time": 6,
      "title": "合并之前，为什么先决定往哪边改？",
      "desc": "把“选方向”和“算幅度”拆开，避免相反更新在平均中抵消。",
      "scenario": "同一个底座微调出多个任务模型，希望把更新合进一个模型。",
      "bottleneck": "直接平均，会混入大量小变化，还会让相反方向的更新相互抵消。",
      "insight": "同一坐标上的更新方向和更新大小，可以分开处理。",
      "lead": "同一个参数，三个任务分别想改 +0.8、+0.6、−0.7。直接平均得到 +0.233。这个中间值看似折中，但它未必对应任何任务真正需要的改动。TIES 提供了一种先解决冲突、再聚合的规则。",
      "steps": [
        [
          "Trim：先筛变化",
          "对每个任务向量，保留绝对值较大的 top-k% 更新，其余置零。这里置零的是相对于底座的增量，不是把底座参数清零。"
        ],
        [
          "Elect：按总幅度决定符号",
          "在每个坐标比较正向与负向的总幅度，选择较强的一边；等价于取保留更新之和的符号。它不是简单的票数多数决。"
        ],
        [
          "Merge：只平均同向更新",
          "只用与选定符号相同的非零更新计算均值，再乘系数并加回底座。与“把不一致值置零后除以所有模型数”不同。"
        ]
      ],
      "example": {
        "title": "只看一个坐标，规则如何改变结果？",
        "text": "假定这三个更新已经通过 Trim：+0.8、+0.6、−0.7。正向总幅度 1.4，大于负向 0.7，选正；同向均值为 (0.8+0.6)/2 = 0.7。再看 +0.2、+0.2、−0.9：虽然正号有两票，负向总幅度更大，选出的却是负号。这只是操作算例，不是能力提升的证明。"
      },
      "evidence": "原论文 Algorithm 1 与 §4.2 定义上述步骤，§7.3 做组件消融。其测试结果支持这一组合在所测合并场景有效，不意味着每个符号冲突都是语义上的冲突。",
      "limits": "幅度和符号是参数层面的启发式，不能自动识别哪种能力更重要。被舍弃方向可能携带重要信息；保留比例和缩放系数会影响结果，还要看每项任务是否退步。",
      "transfer": "可迁移的问题是：当多个来源要汇总时，能否先判断可兼容的部分，再计算平均？在新研究中，要用消融区分“筛选”“符号处理”“缩放”分别贡献多少，不能只凭总分提升解释机制。",
      "take": "TIES 的方法结构是先筛更新、再选方向、最后只合并同向部分。",
      "counter": {
        "q": "选出方向后，把异向值置零，再除以所有模型数，会怎样？",
        "a": "会引入额外缩小。例如 +0.8、+0.6、0 除以 3 得到约 0.467，而同向均值为 0.7。因此，改变分母也改变了算法；比较时需要把缩放影响一起控制。"
      },
      "sources": [
        [
          "原论文 · Algorithm 1、§4.2、§7.3",
          "https://arxiv.org/html/2306.01708v2"
        ]
      ]
    },
    {
      "id": "dpo",
      "cat": "ai",
      "topic": "偏好学习",
      "symbol": "⇌",
      "method": "Direct Preference Optimization",
      "year": "2023",
      "time": 5,
      "title": "能不能把训练流程中的一个模型消掉？",
      "desc": "把奖励改写成概率比，让难算的归一化项在比较中抵消。",
      "scenario": "手上有“回答 A 比 B 更好”的偏好数据，想调整模型行为。",
      "bottleneck": "常见 RLHF 路线先拟合奖励模型，再进行带约束的策略优化，训练流程较复杂。",
      "insight": "在所设定的目标下，奖励可以用最优策略与参考策略的概率比表示。",
      "lead": "一种很有研究味道的问题是：中间模块真的必须单独训练吗？DPO 沿着奖励最大化目标推导，发现偏好比较只依赖奖励差，从而有机会把奖励模型消去。",
      "steps": [
        [
          "从带约束的奖励目标出发",
          "目标兼顾奖励与不要过度偏离参考模型，偏离通过 KL 项约束。"
        ],
        [
          "把奖励换一种写法",
          "奖励可表示为 β log(π/πref) 加一个仅与输入 x 有关的项。这里 π 是回答分布，πref 是参考模型分布。"
        ],
        [
          "利用同一问题下的成对比较",
          "比较胜出和落败回答时，那个共同的、难算的项相减抵消，得到可以直接用成对偏好数据优化的损失。"
        ]
      ],
      "example": {
        "title": "这个消去技巧为什么让人眼前一亮？",
        "text": "教学结构：假设 A 的分数写成 a+C，B 写成 b+C。只要求比较两者时，差就是 a−b，不必先算出 C。DPO 的技巧更具体：它找到了一种奖励表示，使同一输入下的未知归一化项成为这样的公共项。"
      },
      "evidence": "原论文 §4 的式 (5)–(7) 给出重参数化与偏好损失。推导基于特定 KL 正则目标和偏好概率模型；实验考察情感控制、摘要与单轮对话。",
      "limits": "消去显式奖励模型不等于不需要偏好数据，也不意味着离线数据能覆盖所有未来行为。理论上的目标关系，不保证有限数据、有限模型和实际优化都达到全局最优。",
      "transfer": "当一条流程要先估计中间量再利用它时，尝试把最终目标直接写成可观测量的关系；尤其检查差分或比值能否消去难算公共项。迁移时要重新列明假设。",
      "take": "巧妙处在于重新表达目标，使某个原本需要显式学习的中间量不再必要。",
      "counter": {
        "q": "只提高胜出回答的概率，是否就是 DPO？",
        "a": "不是。DPO 比较的是胜出与落败回答相对参考模型的对数概率比。只最大化胜出回答的似然会丢掉成对比较和参考模型这两部分结构。"
      },
      "sources": [
        [
          "原论文 · §4 与附录 A 的推导",
          "https://arxiv.org/html/2305.18290v3"
        ]
      ]
    },
    {
      "id": "lora",
      "cat": "ai",
      "topic": "高效微调",
      "symbol": "⊞",
      "method": "LoRA",
      "year": "2021",
      "time": 4,
      "title": "要适配新任务，真的需要改动整张参数表吗？",
      "desc": "把任务变化限制在低秩更新中，缩小需要训练的自由度。",
      "scenario": "需要为不同任务微调大模型，但训练状态和每任务权重存储成本很高。",
      "bottleneck": "全量微调让每个参数都成为可训练变量，还需保存相应梯度和优化器状态。",
      "insight": "原模型可以很复杂，但完成某种任务适配所需的变化，未必需要同样多的自由度。",
      "lead": "LoRA 选择限制“怎么改”，而不是把原模型本身压成一个小矩阵：冻结原权重 W，仅训练两个小矩阵，让更新写成 BA。",
      "steps": [
        [
          "保留底座",
          "冻结原权重，训练路径只优化新增的低秩因子。"
        ],
        [
          "用两个小矩阵表达更新",
          "对 d×k 的权重，B 的尺寸为 d×r，A 为 r×k，其中 r 较小；更新 BA 的秩不超过 r。"
        ],
        [
          "需要时合入权重",
          "在适用的线性层中，可将缩放后的 BA 加回 W，用一个合并后的矩阵进行推理。"
        ]
      ],
      "example": {
        "title": "自由度到底少在哪里？",
        "text": "教学算例：4096×4096 矩阵有 16,777,216 个元素。若 r=8，两个因子合计 4096×8 + 8×4096 = 65,536 个可训练元素。这个计算只比较该层的参数量，不代表整模型显存或训练时间也按同样比例下降。"
      },
      "evidence": "原论文提出冻结权重与低秩分解更新，并在其任务中比较全量微调及其他适配方法；低秩是否足够，也有经验分析。",
      "limits": "秩过低可能限制表达能力，插入哪些层也很重要。底座仍要参与前向传播，不会因为可训练参数少就自动不占显存。",
      "transfer": "先区分“系统本身的复杂度”和“当前任务需要改变多少”。当共享基础很强时，对变化部分加结构约束，可能比压缩整个系统更合适。",
      "take": "LoRA 约束的是新增变化的结构，而不是断言原模型的全部知识都能低秩表示。",
      "counter": {
        "q": "分别平均两组 A 和 B，是否等于平均两组 BA？",
        "a": "通常不等。相乘会产生 B₁A₂、B₂A₁ 等交叉项；平均各自的 BA 没有这些项。这是做 LoRA 合并时值得单独验证的代数区别。"
      },
      "sources": [
        [
          "原论文 · Low-Rank Adaptation",
          "https://arxiv.org/abs/2106.09685"
        ]
      ]
    },
    {
      "id": "self-consistency",
      "cat": "ai",
      "topic": "推理策略",
      "symbol": "∴",
      "method": "Self-Consistency",
      "year": "ICLR 2023",
      "time": 4,
      "title": "思路不一致，为什么答案反而可以更可靠？",
      "desc": "采样不同推理路径，在答案层聚合，而不挑看起来最顺的一条。",
      "scenario": "一道可核对最终答案的题，模型单次推理可能在中间一步走错。",
      "bottleneck": "只走贪心路径，会让早期的一次选择决定整个后续推理。",
      "insight": "同一个正确答案可能由多种推理路径到达；路径不同，结论却可能一致。",
      "lead": "如果让模型尝试多种解法，应该选写得最长、最流畅的一条，还是先看这些路径最后支持什么答案？Self-Consistency 把聚合位置从文字路径转到了答案。",
      "steps": [
        [
          "采样有差异的路径",
          "对同一问题进行多次推理采样，而不是重复完全确定性的贪心输出。"
        ],
        [
          "提取并归一化答案",
          "将不同写法转成可比较的答案，例如统一数字格式。"
        ],
        [
          "聚合答案支持度",
          "按采样路径所支持的答案进行聚合，在原方法的常见实现中选择出现最多的答案。"
        ]
      ],
      "example": {
        "title": "什么时候多数意见会误导？",
        "text": "教学例子：5 条路径给出 12、12、12、15、18，聚合会选 12。但如果前三条复用了同一个错误前提，多数票也可能很自信地选错。多条输出不自动等于多份独立证据。"
      },
      "evidence": "原论文在多个算术与常识推理基准上报告收益。它改变的是推理时的采样策略，不能把收益记成模型参数训练后获得了新能力。",
      "limits": "需要额外生成成本，且要求最终答案可可靠提取与比较。相关性很高的错误、开放式问题的答案等价判断，都可能限制方法。",
      "transfer": "当过程存在多条合理路径时，可以在更稳定的终点上聚合。评估这类策略时，要把计算预算相同的其他采样方案也放进对照。",
      "take": "让过程保持多样，让结论进行聚合；但多样性和成本都需要真正测量。",
      "counter": {
        "q": "用同一模型的确定性设置重复五次，通常能带来同样收益吗？",
        "a": "不能指望如此。若五次只是同一条路径，多数票没有新增信息。方法依赖采样路径的差异以及答案聚合，而不是机械重复次数。"
      },
      "sources": [
        [
          "原论文 · 多路径采样与答案聚合",
          "https://arxiv.org/abs/2203.11171"
        ]
      ]
    },
    {
      "id": "react",
      "cat": "ai",
      "topic": "智能体设计",
      "symbol": "↗",
      "method": "ReAct",
      "year": "ICLR 2023",
      "time": 4,
      "title": "为什么要让“思考”被外部结果打断？",
      "desc": "把推理与行动交错，让下一步能被新证据改变。",
      "scenario": "任务需要查外部事实，或在环境中执行一串操作。",
      "bottleneck": "先写完计划再执行，可能让早期错误前提一路传播。",
      "insight": "推理能指导行动，行动又能提供推理时原本没有的信息。",
      "lead": "假设模型要比较两位作家的出生年份。它凭记忆认错了一个人，即使后面的减法完全正确，答案仍然错。关键不在于把这条错误路径写得更长，而是让它有机会获得外部反馈。",
      "steps": [
        [
          "确定当前缺少的信息",
          "将下一步推理落实为一个具体查询或环境动作。"
        ],
        [
          "执行并观察",
          "调用搜索等工具，读取真实返回；不要把预想的结果当成已观察事实。"
        ],
        [
          "依据反馈调整",
          "把结果带入后续推理。若搜到同名者或动作失败，应改变查询或计划，再继续。"
        ]
      ],
      "example": {
        "title": "把“计划”改成一个有反馈的回路",
        "text": "教学对比：一次性计划是“查 A → 查 B → 相减”。有反馈的过程是“查 A → 发现同名 → 增加职业和作品限定 → 确认身份 → 再查 B”。后面走哪一步，由新证据决定。"
      },
      "evidence": "原论文用交错的推理与行动轨迹，在问答、事实核查与交互任务中测试；工具提供额外信息是方法结构的一部分。",
      "limits": "工具本身会出错，检索结果也可能不可靠。写出行动计划不等于已经执行成功；调用更多工具也不保证更高收益。",
      "transfer": "当环境会提供新信息时，把长计划拆成可观察、可修正的小步。然后分别检查计划质量、工具结果和停止条件，避免用一项总成功率掩盖失败来源。",
      "take": "有用的行动结果，不只是最后的材料，也是改变下一步推理的反馈。",
      "counter": {
        "q": "工具失败后仍按原计划继续，丢掉了方法的什么优势？",
        "a": "丢掉了反馈。思考与行动虽然形式上交替，实际计划却没有被观察更新，早期错误仍可能贯穿后续步骤。"
      },
      "sources": [
        [
          "原论文 · ReAct",
          "https://arxiv.org/abs/2210.03629"
        ]
      ]
    },
    {
      "id": "rag-design",
      "cat": "ai",
      "topic": "外部知识",
      "symbol": "▧",
      "method": "Retrieval-Augmented Generation",
      "year": "NeurIPS 2020",
      "time": 4,
      "title": "知识一定要全装进模型参数里吗？",
      "desc": "把可检索的知识与生成能力拆开，并对多个候选证据建模。",
      "scenario": "要回答依赖具体知识的问题，又希望能利用外部资料。",
      "bottleneck": "只依赖参数记忆，难以明确定位信息来源，也不方便独立替换知识库。",
      "insight": "“会组织语言”和“掌握这条事实”可以由不同组件承担。",
      "lead": "RAG 的原始研究把生成模型与可检索的文档索引结合。其设计值得看的地方，不只是“先搜索再回答”，还包括把检索到的不同文档作为潜在依据纳入输出概率。",
      "steps": [
        [
          "将问题映射到检索空间",
          "检索器在外部索引里找到一组候选段落。"
        ],
        [
          "让生成依赖候选证据",
          "生成模型根据输入和文档产生回答，而不只依赖自身参数。"
        ],
        [
          "在候选证据间聚合",
          "原论文研究整个序列共享文档以及每个 token 可采用不同文档的两种形式，对检索文档进行概率聚合。"
        ]
      ],
      "example": {
        "title": "一篇文档不够时，哪里有设计空间？",
        "text": "假设问题同时需要某产品的发布日期和停产日期，两条信息可能位于不同材料。把整条回答绑定同一个文档，与允许不同生成位置使用不同证据，是不同的设计选择。这个例子用于说明依赖结构，不是原论文实验。"
      },
      "evidence": "原论文比较 RAG-Sequence 与 RAG-Token，在知识密集型任务上评估。今天泛称的各种“搜索加提示词”流程，不一定实现了原论文的训练或概率聚合方式。",
      "limits": "错误检索、过时材料、证据遗漏与生成误读都可能失败。能引用链接不等于引用真的支持结论；检索器与生成器也需要联合检查。",
      "transfer": "把变化频繁、需要可追溯的知识放到外部模块，把相对稳定的处理能力留在模型中。迁移时先明确两个模块之间交换什么，以及一方不确定时另一方如何处理。",
      "take": "模块分工还不够：检索不确定性如何传给生成器，也是方法设计的一部分。",
      "counter": {
        "q": "只给模型一段搜索结果，就等于复现原始 RAG 吗？",
        "a": "不等于。那可以是实用的检索增强流程，但原论文还有检索器、训练方式和文档概率聚合等具体设置。比较研究结果时不能把这些差异略去。"
      },
      "sources": [
        [
          "原论文 · RAG-Sequence 与 RAG-Token",
          "https://arxiv.org/abs/2005.11401"
        ]
      ]
    },
    {
      "id": "dare",
      "cat": "merge",
      "topic": "稀疏化与补偿",
      "symbol": "⋯",
      "method": "DARE",
      "year": "ICML 2024",
      "time": 5,
      "title": "随机扔掉很多更新，为什么还要把剩下的放大？",
      "desc": "稀疏化负责删减，重缩放负责补偿平均改动。",
      "scenario": "同底座的多个微调更新需要合并，希望先减少同时参与聚合的增量。",
      "bottleneck": "直接把大量增量置零，会系统性地缩小整体改动。",
      "insight": "随机丢弃后按保留概率反向缩放，可以保持每个增量的期望。",
      "lead": "DARE 把两个简单动作组合起来：随机丢掉比例为 p 的参数增量，再把保留的增量除以 1−p。它删的是微调带来的变化，不是随机删除底座知识。",
      "steps": [
        [
          "提取微调增量",
          "用微调权重减去共同底座，得到任务向量。"
        ],
        [
          "随机掩码",
          "按丢弃概率 p 将增量坐标置零。"
        ],
        [
          "按保留率补偿",
          "其余坐标乘 1/(1−p)，再将稀疏化增量用于后续合并。"
        ]
      ],
      "example": {
        "title": "期望不变，为什么仍不能保证性能不变？",
        "text": "教学算例：某增量 δ=0.1，丢弃率 p=0.8。它以 80% 概率变成 0，以 20% 概率变成 0.5，所以期望仍为 0.1。但方差为 δ²p/(1−p)=0.04；单次结果明显偏离原值。模型又是非线性的，因此参数期望相同不意味着输出或准确率相同。"
      },
      "evidence": "论文给出 Drop And REscale 方法，并在同源 SFT 模型中测试高比例增量稀疏化及合并。其高丢弃率下的结果依赖具体模型与任务，不能转成任意模型的默认安全比例。",
      "limits": "丢弃率越大，重缩放越强、方差越大；微调增量大小和冗余程度也影响结果。均值补偿是代数性质，能力保留仍是经验问题。",
      "transfer": "遇到“随机删减造成系统偏差”时，可以寻找逆概率补偿；但同时必须分析方差与非线性后果。这里的迁移启发不等于已验证的新合并方法。",
      "take": "“期望守恒”解释了缩放为何这样设计，却没有单独证明能力守恒。",
      "counter": {
        "q": "为了更稀疏，让丢弃率无限接近 1，会怎样？",
        "a": "缩放因子趋于很大，单个坐标方差 δ²p/(1−p) 也增大；p=1 时这个规则根本未定义。因此不能从期望不变推导出越稀疏越好。"
      },
      "sources": [
        [
          "原论文 · Language Models are Super Mario",
          "https://arxiv.org/abs/2311.03099"
        ]
      ]
    },
    {
      "id": "task-arithmetic",
      "cat": "merge",
      "topic": "任务表示",
      "symbol": "±",
      "method": "Task Arithmetic",
      "year": "ICLR 2023",
      "time": 4,
      "title": "为什么要合并“变化”，而不是直接相加模型？",
      "desc": "把共享底座剥离出来，用任务向量表达训练带来的改动。",
      "scenario": "多个模型来自同一底座，但分别经过不同任务的微调。",
      "bottleneck": "直接相加完整权重会重复计入底座，也难以单独调节任务带来的变化。",
      "insight": "微调前后的差值可以作为一种可操作的任务表示。",
      "lead": "把一个模型写成“共同基础 + 任务改动”，就能把组合操作集中到改动上。Task Arithmetic 用这样得到的任务向量探索相加、取负及类比等参数操作。",
      "steps": [
        [
          "以同一个底座为参照",
          "对任务 i，定义 τᵢ = θᵢ − θ₀。不同模型必须有可比较的参数对应关系。"
        ],
        [
          "在变化空间里组合",
          "例如 θ合并 = θ₀ + λΣτᵢ；λ 控制加入变化的幅度。"
        ],
        [
          "重新测量模型行为",
          "向量运算只是操作定义，任务性能是否按期望变化需要测试。"
        ]
      ],
      "example": {
        "title": "一个坐标看清底座为什么只加一次",
        "text": "教学算例：底座参数为 10，两个微调模型为 12 和 13，则改动为 +2、+3。λ=1 时加回底座得到 15；完整权重相加是 25；两模型平均是 12.5。三者执行的是不同操作，没有任何一个数值本身证明哪种方法更准确。"
      },
      "evidence": "原论文在多种模型和任务上测试任务向量的加法、取负和类比。它展示了有用的经验现象，而不是给出任意任务能力都线性可加的普遍定理。",
      "limits": "不同任务可能争用参数方向，缩放过大也可能离开有用区域；共同底座、微调差异和任务组合都影响适用性。",
      "transfer": "先选一个共同参照，再研究“变化”是否比“完整对象”更适合操作。进一步的方法设计应解释相加在哪些条件下失败，以及新增步骤具体修补了哪种失败。",
      "take": "任务向量让训练带来的变化变成可操作对象；这是一种表示选择，不是能力线性的保证。",
      "counter": {
        "q": "两个来源模型做等权平均，与任务向量相加能否相同？",
        "a": "在同一底座、两个模型的线性形式下，取 λ=1/2 就会相同：θ₀+(τ₁+τ₂)/2=(θ₁+θ₂)/2。因此比较方法时，不能忽略缩放系数造成的等价情形。"
      },
      "sources": [
        [
          "原论文 · Editing Models with Task Arithmetic",
          "https://arxiv.org/abs/2212.04089"
        ]
      ]
    },
    {
      "id": "samaya-sterling",
      "cat": "ai",
      "topic": "后训练与工具使用",
      "symbol": "↗",
      "method": "Samaya Sterling",
      "year": "2026-10-28 · 工程案例",
      "time": 4,
      "title": "小模型做研究，为什么要连工具一起训练？",
      "desc": "让训练过程贴近实际工作的环境。",
      "scenario": "让小模型完成多步检索与研究。",
      "bottleneck": "会回答问题，还不等于会选择工具、补齐证据。",
      "lead": "Samaya 在 10 月 28 日公布了一个金融研究案例：把 30B、每次激活 3B 参数的模型，放进实际使用的工具环境里做后训练。训练的不只是最终答案，还有下一步查什么、什么时候收工。",
      "insight": "把“会不会做”放进完整工作流程里检查。",
      "steps": [
        [
          "先把环境做得适合小模型",
          "团队合并工具、缩短说明，并压缩长结果和历史记录。"
        ],
        [
          "先学示范，再比较不同做法",
          "先模仿教师轨迹，再对同一题使用 Kimi K3 的八种研究策略，挑好答案学习；随后比较这些轨迹的奖励。"
        ],
        [
          "最后让它面对自己的错误",
          "在线阶段由模型自己尝试并获得反馈；验证时也运行完整 Agent 流程。"
        ]
      ],
      "example": {
        "title": "教学设定：两种查资料的路线",
        "text": "假设任务是比较两家公司四个季度的收入。路线 A 反复搜索新闻；路线 B 先找两家的财报表格，再补缺少的季度。即使最终数字相同，两条路线的调用次数也可能差很多。可以同时记录：八个数字是否齐全、出处是否正确、花了几次调用。这样才知道模型学会的是找对证据，还是只是多查了几轮。"
      },
      "evidence": "团队报告：FrontierFinance 评分项满足率由 42.5% 升至 58.9%；研究模型每题约 $0.04，包含工具及辅助模型的整套流程约 $0.61。",
      "limits": "这些结果来自团队的金融工具环境。文中另有增加研究预算的配置，属于额外推理开销。",
      "transfer": "换到自己的研究任务，可以先固定资料和工具，再比较不同训练方法。把“最后答对”和“怎样拿到证据”都留下来，才能定位收益发生在哪一步。",
      "take": "模型和工具配合得好，才算真正完成工作。",
      "counter": {
        "q": "调用次数更多，就说明研究更好了吗？",
        "a": "先看它多拿到了什么证据。补齐缺失数据有价值；反复搜同一份资料只会增加开销。"
      },
      "sources": [
        [
          "团队原文 · 2026-10-28",
          "https://samaya.ai/blog/rl-post-trained-agentic-model"
        ]
      ]
    }
  ]
};
