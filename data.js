window.FEED_DATA = [
  {
    "id": "together-persistent-compiler-20261105",
    "source": "Together AI · 推理团队",
    "avatar": "T",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日",
    "title": "让 AI 优化推理代码，先把每次试跑的等待缩短",
    "summary": "Together 的推理团队发现，用户使用新模型两周后，输入长度会随 Agent 任务增多而明显增长，原先合适的优化方案也会过时。他们让多个 AI 编程助手持续尝试优化推理代码，却碰到一个瓶颈：每改一版，都要重新启动引擎、加载权重和预热。\n\n新系统 Together Compiler 把引擎一直留在内存里，只替换待测试的计算代码。原文的一组启动拆账中，从准备到可服务的等待由467秒变为9秒。它还分两轮测试：先只加载少数层快速筛选，再在更多层和真实输入分布上复核，避免一个小算子跑得快，放进完整模型却没收益。\n\n公司报告，在不到24小时的优化中，相比 InferenceX 已公布的开源引擎配置，部分模型设置的生成速度最高达到2.6倍。这次值得看的具体做法，是把“提出改法—测量—再修改”的实验循环做快，而不只让模型一次写出更好的代码。",
    "body": "输入内容也会改变优化结果：混合专家模型会因任务不同，把工作分给不同专家；只用随机输入测速度，可能选错方案。Together 因此把快速筛选和接近完整服务的复核分开，并结合实测选择多卡分工。\n\n配图展示的是这套循环：流量变化触发重新优化，多位 Agent 提出候选代码，经过正确性与速度检查后组合有效改动，再部署最好的配置。",
    "detailLabel": "为什么还要用真实输入复核",
    "links": [
      {
        "label": "原文与实验设置",
        "url": "https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-05/compiler-loop.png",
        "alt": "Together Compiler从流量变化到多Agent优化、两级引擎测试和部署的循环",
        "caption": "先在少数层上快速试，再在更多层上复核；模型权重与缓存留在引擎中，候选代码直接替换。图中百分比是流程示意。",
        "credit": "Together AI · 原文 Figure 1",
        "sourceUrl": "https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference",
        "originalUrl": "https://cdn.prod.website-files.com/69654e88dce9154b5f12070c/6aeaef19bddbf4ee964def1a_02-compiler-loop%402x.png",
        "placement": "details"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "只替换待测试的计算代码",
        "先只加载少数层快速筛选"
      ],
      "body": []
    },
    "issueDate": "2026-11-05"
  },
  {
    "id": "breunig-routines-20261105",
    "source": "Drew Breunig · AAIF",
    "avatar": "D",
    "avatarClass": "anthropic",
    "channel": "interview",
    "evidence": "具名经验",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日",
    "title": "重复交给 AI 的事，可以逐渐变成自己的固定流程",
    "summary": "Drew Breunig 分享了朋友的通勤助手：每天查骑行记录、日历里的第一场会议和渡轮班次，倒推出几点出门。最初需要大模型帮忙弄清规则，连“穿工作服骑得更慢”也是用过之后才补上的条件。\n\n他的做法是，先从与 Agent 的历史对话中找重复任务，再把步骤和修正写成可重复调用的说明文件。例如，他让 Claude Code 回看记录，找出了五类常做的事，其中一类是写代码前先调查项目、整理设计依据。\n\n流程稳定后，再把确定的步骤交给脚本，尝试用较小模型执行。他自己的助手已经采用 GLM 5.3 Flash 加 Python。积累下来的是具体要求和纠错记录，换模型时也能带走。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "作者经验原文",
        "url": "https://aaif.io/blog/most-agentic-work-will-become-workflows"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把步骤和修正写成可重复调用的说明文件",
        "把确定的步骤交给脚本"
      ],
      "body": []
    },
    "issueDate": "2026-11-05"
  },
  {
    "id": "kimi-k31-weights-20261105",
    "source": "Moonshot AI · Kimi",
    "avatar": "M",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "模型与产品",
    "tags": [
      "模型与产品"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日 00:00 · 北京时间",
    "title": "Kimi K3.1 Pro 的权重开放了，提供原生低精度部署格式",
    "summary": "Kimi K3.1 Pro 此前已提供在线服务，现在模型仓库公开了完整权重：96个权重分片，仓库文件合计约1.56TB。模型共2.8万亿参数，每个 token 激活约1040亿参数，支持文本、图片和约100万 token 的上下文。\n\n这次文件采用 MXFP4 权重、MXFP8 激活值格式，并在训练时考虑量化误差。相较 K3，部分全注意力层也改为稀疏注意力，让长输入只重点查看选中的位置。需要自行部署的团队，现在有了可下载的模型和 vLLM、SGLang 等运行指引。\n\n接入多轮工具任务还有一个容易漏掉的要求：下一轮必须传回完整的助手消息，包括推理内容与工具调用，而不只是最后回答。模型卡给出了对应示例。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "模型卡与权重",
        "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro"
      },
      {
        "label": "使用许可",
        "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE"
      },
      {
        "label": "官方发布帖",
        "url": "https://x.com/Kimi_Moonshot/status/2118010528123773297"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "在训练时考虑量化误差",
        "传回完整的助手消息"
      ],
      "body": []
    },
    "issueDate": "2026-11-05"
  },
  {
    "id": "openai-pierre-review-20261105",
    "source": "OpenAI · 开发工具",
    "avatar": "O",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日",
    "title": "OpenAI 拟收购 Pierre，把代码审查和版本管理进一步接进 Codex",
    "summary": "OpenAI 宣布拟收购 Pierre，这家公司做的是代码浏览、改动对比和 Git 存储工具。Codex 现有的文件树和改动查看界面，已经使用它的 Trees、Diffs 开源库。\n\n其中一个具体设计是：审查者发现某行代码有问题，可以直接在改动对比界面里修改。Pierre 的 Code Storage 则让应用通过接口保存代码和版本历史。OpenAI 希望把这些能力继续接进 Codex，让人和多个编程 Agent 从开分支到审查、交付，在同一套流程中协作。\n\n交易仍待监管等交割条件完成。公司承诺开源项目保持开源，Code Storage 在交易完成后也会继续提供服务。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "收购公告",
        "url": "https://openai.com/index/openai-to-acquire-pierre/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "直接在改动对比界面里修改"
      ],
      "body": []
    },
    "issueDate": "2026-11-05"
  },
  {
    "id": "claude-marketplace-budget-20261105",
    "source": "Anthropic · Claude Marketplace",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "商业与成本",
    "tags": [
      "商业与成本"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日",
    "title": "买 AI 工具的预算，开始和模型服务放在一起",
    "summary": "Claude Marketplace 新增安全、开发、创作和办公产品，合作产品总数已超过25个。比目录变长更具体的变化是：符合条件的企业，可以用一部分已承诺给 Anthropic 的采购金额购买这些伙伴产品，而不必为每项工具另开一份新预算申请。\n\n例如，Datadog 用来追踪 Agent 调了哪些工具、耗时和费用发生在哪一步；Netlify 承接应用部署，每次修改可生成预览网址。它们补的是模型之外的运行、观察和交付环节。这种采购方式目前仍是有限预览，需要企业客户确认资格。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "新增产品公告",
        "url": "https://claude.com/resources/articles/new-agents-and-products-claude-marketplace"
      },
      {
        "label": "产品目录与采购说明",
        "url": "https://claude.com/marketplace/agents-products"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "一部分已承诺给 Anthropic 的采购金额",
        "运行、观察和交付环节"
      ],
      "body": []
    },
    "issueDate": "2026-11-05"
  },
  {
    "id": "trl-mopd-token-balance-20261104",
    "source": "Sergio Paniego · Hugging Face",
    "avatar": "S",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方实践",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-03",
    "time": "11 月 3 日",
    "title": "题目占了两成，训练分量却只剩百分之几",
    "summary": "Hugging Face 发布了用 TRL 做多教师蒸馏的示例：让同一个学生模型学习数学、代码和指令遵循三个专家。学生先自己作答，再由对应领域的老师逐词打分，训练学生向老师靠近。\n\n这次短跑暴露了一个配比问题。指令遵循题占20%，例如“写两段话，用星号隔开”；这类回答往往只有几百个 token，数学和代码却会写出几千个。损失按 token 平均后，指令遵循实际只分到约1%—3%的训练分量。日志里，学生持续接近数学和代码老师，与指令遵循老师的差距却没有稳定缩小。\n\n作者用四张 H200 跑了60步，指令遵循测试仍从67.5升到73.0。这个示例提供了可运行的多教师训练流程，也让人看到：安排了多少题，和这些题实际占多少训练权重，是两回事。",
    "body": "学生与三个老师都来自 SmolLM3-3B 的同一监督微调起点。示例给每道题标上 teacher_id，只交给一个领域老师评分；各模型需要使用相同分词器。\n\n四张卡分别承担学生生成、两个较短回答的老师、代码老师、学生训练。60步只是演示短跑；正文的指令遵循分数是 IFEval 严格整题准确率。数学、代码、指令遵循的题目采样比例为40/40/20。",
    "detailLabel": "四张卡怎样分工，分数怎样计算",
    "links": [
      {
        "label": "原文与测试细节",
        "url": "https://huggingface.co/blog/sergiopaniego/mopd-trl"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-04/mopd-tokens.png",
        "alt": "三类任务的训练token占比，以及学生与各老师的分布差距",
        "caption": "上图绿线区域是指令遵循的实际训练份额，虚线是它20%的题目占比；下图显示学生与各老师的差距。两种“配比”并不相同。",
        "credit": "Sergio Paniego · Hugging Face 原文",
        "sourceUrl": "https://huggingface.co/blog/sergiopaniego/mopd-trl",
        "originalUrl": "https://cdn-uploads.huggingface.co/production/uploads/61929226ded356549e20c5da/xbYmQp1qSwjVv0p1uAMXV.png",
        "placement": "inline"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "损失按 token 平均",
        "实际只分到约1%—3%的训练分量"
      ],
      "body": []
    },
    "issueDate": "2026-11-04"
  },
  {
    "id": "realshop-cad-production-20261104",
    "source": "Harry Peng · Afterlight",
    "avatar": "H",
    "avatarClass": "reddit",
    "channel": "interview",
    "evidence": "作者实测",
    "kind": "opinion",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-03",
    "time": "11 月 3 日",
    "title": "模型把弯曲外壳画成了实心块：228份工厂图纸的测试",
    "summary": "Afterlight 想测的是一件很具体的事：把工厂的二维零件图交给 AI，它能否还原出正确的三维零件？团队从客户授权的生产资料中选了228份图纸，让 Claude Opus 5.5 用 CAD 工具建模，每件最多尝试30分钟或60轮操作。\n\n按团队设定的形状、体积和尺寸标准，87件通过，约占38%；复杂零件只通过4/46。一个直观失败是弯曲外壳：模型保留了圆孔，却把周围的曲面做成了棱柱。另一个电机支架形状已经很接近，整体尺寸仍差了0.85毫米。\n\n这里评分的是与原生产模型的几何匹配，尚未检查加工刀路。有些真实图纸还会把曲面细节留给配套三维文件，而测试只给二维图；这也解释了为什么工厂资料比信息完整的简单练习难。团队目前开放的是评测与数据合作，还没有给出修复后的模型。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与测试细节",
        "url": "https://tryafterlight.com/research/realshop-cad"
      },
      {
        "label": "作者原帖与追问",
        "url": "https://x.com/MerkleAnders/status/2117638585096757554"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-04/realshop-example.jpg",
        "alt": "真实弯曲外壳与Claude生成的棱柱状零件对比",
        "caption": "上方是原生产零件，下方是 Claude Opus 5.5 根据同一份图纸建立的模型。圆孔保留了，外壳曲面却变成了直棱结构。",
        "credit": "Harry Peng / Afterlight · 作者配图",
        "sourceUrl": "https://x.com/MerkleAnders/status/2117503938648047843",
        "originalUrl": "https://pbs.twimg.com/media/HWLilKRbwAAvy70.jpg",
        "placement": "inline"
      }
    ],
    "comments": [
      {
        "author": "Harry Peng（MerkleAnders）",
        "role": "原帖作者",
        "date": "11 月 4 日 03:41（北京时间）",
        "text": "有人追问究竟是尺寸、符号还是备注读错了。作者回答：尺寸大多能读对，主要卡在把不同视图拼成同一个三维形状。",
        "url": "https://x.com/MerkleAnders/status/2117703799251038234",
        "linkLabel": "作者回复",
        "evidence": "作者补充",
        "mode": "翻译摘编",
        "context": "原帖作者 · 回答错误主要发生在哪一步"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "模型保留了圆孔，却把周围的曲面做成了棱柱",
        "测试只给二维图"
      ],
      "body": []
    },
    "issueDate": "2026-11-04"
  },
  {
    "id": "openai-hardware-prototype-20261104",
    "source": "OpenAI · 硬件团队",
    "avatar": "O",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方实践",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日 · 北京时间",
    "title": "两人用 AI 一周做出设备设计，送厂前仍反复改装配细节",
    "summary": "OpenAI 两位成员把一个副项目交给 Astra：设计一台能与 Codex 对话的小设备。模型负责外壳和内部固定结构、元件选择与电路板布局，也生成界面、固件和软件连接。\n\n公司说，设计在不到一周内完成，代工厂随后用不到一个月做出小批原型。真正送去制造时，团队又做了几轮审查和修改：模型没有稳定考虑工厂的生产限制、尺寸公差和装配细节。\n\n这项实践正在进入更多日常环节。硬件团队用它把三维设计转成二维制造图、准备仿真；赛车合作方则测试把旧零件的扫描数据转成可编辑模型，解决原始设计文件缺失的问题。工程师会继续检查模型和图纸是否准确、能否制造。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与测试细节",
        "url": "https://openai.com/index/accelerating-engineering-for-the-physical-world/"
      },
      {
        "label": "官方发布帖",
        "url": "https://x.com/OpenAI/status/2117692475775258785"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "模型没有稳定考虑工厂的生产限制、尺寸公差和装配细节",
        "把旧零件的扫描数据转成可编辑模型"
      ],
      "body": []
    },
    "issueDate": "2026-11-04"
  },
  {
    "id": "soniox-agent-context-20261104",
    "source": "Soniox · 语音识别",
    "avatar": "S",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方实践",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-03",
    "time": "11 月 3 日",
    "title": "语音助手把自己说的话，也交给了语音识别模型",
    "summary": "语音助手问完问题，用户常常只答几个字。Soniox 的例子是：助手问要改签到 Porto 还是 Faro，用户回答“Faro”。如果识别模型只听到用户这半句，就少了刚才两个候选地名的上下文。\n\n新发布的 STT v6 允许开发者把助手准备朗读的文字同步传给识别模型。它既用这些文字理解短回答，也用来区分用户声音和麦克风收进去的助手播报，减少助手被自己的声音打断、接着回答自己的循环。\n\n按官方介绍，助手说话时仍可持续听用户插话，功能已进入实时接口。对语音产品，这次变化是在识别环节补上对话另一半，而不是只换一个更会听单句的模型。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与测试细节",
        "url": "https://soniox.com/blog/soniox-stt-v6"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "flomeindl",
        "role": "普通评论者",
        "date": "11 月 4 日 00:46（北京时间）",
        "text": "这位开发者正在自己的测试流程里试 v6，报告德国邮编、出生年份和人名仍有识别问题。其新旧版本样本量不同，当前更适合把这些具体输入加入回归测试，不能直接据此比较整体准确率。",
        "url": "https://x.com/flomeindl/status/2117659649092497607",
        "linkLabel": "评论原文",
        "evidence": "个人初测",
        "mode": "翻译摘编",
        "context": "普通评论者 · 在官方发布帖下反馈自己的德语测试"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把助手准备朗读的文字同步传给识别模型",
        "区分用户声音和麦克风收进去的助手播报"
      ],
      "body": []
    },
    "issueDate": "2026-11-04"
  },
  {
    "id": "qwen-raw-weights-games-20261104",
    "source": "Simon Willison · 本地测试",
    "avatar": "S",
    "avatarClass": "reddit",
    "channel": "interview",
    "evidence": "作者实测",
    "kind": "opinion",
    "topic": "开发者实践",
    "tags": [
      "开发者实践"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日 · 北京时间",
    "title": "只读一串权重，笔记本上的 Qwen 猜中了三种游戏",
    "summary": "一项新研究把小游戏策略网络的权重写成数字文本，让语言模型判断它学的是哪款游戏。Simon Willison 拿公开的四份输入，在笔记本上用约17GB的 Qwen 3.8 27B 量化版重试；这一轮不准运行代码或调用工具。\n\nQwen 认出了吃豆人、乒乓和打砖块，认错了 Freeway。吃豆人一次用了46分12秒、43,506个推理 token；乒乓和打砖块也分别花了约65分钟和52分钟。输入除权重之外相同，作者还公开了回答和推理记录。\n\n这次复测展示的是从小型策略网络的数值中判断用途。它没有修改模型，也没有训练新策略；成功样例需要长时间推理，适合继续检验模型究竟利用了权重里的哪些线索。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与测试细节",
        "url": "https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "不准运行代码或调用工具",
        "认出了吃豆人、乒乓和打砖块，认错了 Freeway"
      ],
      "body": []
    },
    "issueDate": "2026-11-04"
  },
  {
    "id": "local-invoice-workflow-20261103",
    "source": "sammyranks · 本地编程实践",
    "avatar": "s",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-02",
    "time": "11 月 2 日",
    "title": "几乎不会写代码的用户，把五年开票资料搬进了自制应用",
    "summary": "用户 sammyranks 原本每年付100美元使用在线开票软件。他想把这项日常工作留在自己的电脑上，于是用本地 Qwen 模型配合 OpenCode，做了一款桌面应用。\n\n他的主要操作是发截图、描述想要的功能，让编程助手写代码和修问题。除了生成报价单、转成账单和导出 PDF，他还让助手做了导入工具，把五年多的旧资料搬进新应用；原软件没有的深色模式，也一并加了进去。\n\n作者展示了开票界面，并说自己已用上这些功能。应用含有他的业务资料，没有公开代码。",
    "body": "LM Studio 负责在本机运行模型，OpenCode 负责读写项目、运行工具和修代码。作者使用的是现有 RTX 5090 32GB 显卡、96GB 内存的电脑。\n\n长时间开发时，OpenCode 会压缩旧对话，保留继续工作所需的信息。作者报告对话通常维持在约5.7万至9万 token，而不是每次都从头解释项目。",
    "detailLabel": "模型、编程工具与旧对话怎样分工",
    "links": [
      {
        "label": "作者演示与讨论",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xm0i9m/made_my_own_invoicing_dekstop_app_with_qwen_38/"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "sammyranks",
        "role": "原帖作者",
        "date": "读取于 11 月 3 日（北京时间）",
        "text": "作者估算开发期间多用了约15美元电费；此前的软件订阅是每年100美元。这个估算只谈电费，没有把现有电脑的购置成本计入。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xm0i9m/made_my_own_invoicing_dekstop_app_with_qwen_38/",
        "linkLabel": "原帖入口",
        "evidence": "作者估算",
        "mode": "翻译摘编",
        "context": "原帖作者 · 回复开发成本的追问"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "发截图、描述想要的功能",
        "把五年多的旧资料搬进新应用"
      ],
      "body": []
    },
    "issueDate": "2026-11-03"
  },
  {
    "id": "anthropic-short-term-compute-20261103",
    "source": "Anthropic · 官方披露",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "商业与成本",
    "tags": [
      "商业与成本"
    ],
    "date": "2026-11-02",
    "time": "11 月 2 日 · 补读",
    "title": "Anthropic 的算力效率在提高，短期采购却压低了利润率",
    "summary": "Anthropic 在11月2日更新的上市文件里披露：第三季度使用了50亿美元的短期合同算力，同等算力的价格明显高于多年合同。这部分开销抵消了一部分训练和推理优化带来的节省。\n\n按公司剔除部分费用后的调整口径，季度经营利润从22亿升至25亿美元，但经营利润率从19%降到15%。公司把利润率回落主要归因于这批短期算力。\n\n它的应对是逐步加入直接租芯片、由专门设施托管的采购方式：先锁定建设较慢的机房，等需求更明确再投入芯片。随着这些设施上线，再替换需求高峰期间采购的昂贵短期算力。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "11月2日披露文件 · 算力效率与投入",
        "url": "https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "同等算力的价格明显高于多年合同",
        "先锁定建设较慢的机房，等需求更明确再投入芯片"
      ],
      "body": []
    },
    "issueDate": "2026-11-03"
  },
  {
    "id": "v100-long-prompt-bottleneck-20261103",
    "source": "TumbleweedNew6515 · 部署实测",
    "avatar": "T",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-03",
    "time": "11 月 3 日",
    "title": "四张旧 V100 能流畅生成，长提示词仍要先等一分钟",
    "summary": "一位开发者把 DeepSeek V4.1 Flash 的量化版本跑在四张32GB V100上。显存装不下的专家参数——模型按需选用的子网络——放在系统内存里，使用时再搬到显卡；另有草稿模型帮助加快输出。\n\n在关闭思考、一次处理一个请求的测试中，8千 token 提示词的生成速度是38.3 token/秒，等首个输出要6.6秒；输入加长到7.5万 token，生成仍有35.8 token/秒，但最初等待变成69.1秒。流式输出看起来很顺，并不意味着整次请求很快。\n\n他还查到一个搬运瓶颈：四张卡共用一条通向主机的连接。单卡搬数据能到6.5GB/秒，四卡同时搬时合计只有12.9GB/秒，平均每卡反而降到约3.2GB/秒。下一步计划扩到八卡测试，目前还没有扩容后的结果。",
    "body": "测试机器另有256GB系统内存，约三分之一专家权重按需从内存搬到显卡；运行社区的 1Cat-vLLM 分支，并使用5个草稿 token 的推测解码。正文生成速度取三次运行的中位数，每次请求使用不同缓存标识，避免复用前一次提示词缓存。",
    "detailLabel": "机器配置与计时条件",
    "links": [
      {
        "label": "完整配置与实测记录",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xmcibh/gpu_lawyer_deepseek_41_flash_1018_on_4_32gb_v100s/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "最初等待变成69.1秒",
        "四张卡共用一条通向主机的连接"
      ],
      "body": []
    },
    "issueDate": "2026-11-03"
  },
  {
    "id": "minimax-maya-calibration-20261103",
    "source": "PeasantSmith · Project Maya",
    "avatar": "P",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-02",
    "time": "11 月 2 日 · 补读",
    "title": "MiniMax 的93GB版本，把更多精度留给敏感层",
    "summary": "MiniMax 的428B模型需要大量内存。社区作者 PeasantSmith 为128GB内存的电脑做了 Maya-XS 量化版本，模型占用约93GB；运行时由 Project Maya 把常用专家留在显卡，其余交给系统内存和 CPU。\n\n压缩时没有给所有层一刀切地设相同精度。作者先用工具调用、代码、推理和聊天文本测量各层的敏感程度，再把更多位数留给损失大的部分；校准后面的层时，还会使用前面已经压缩过的层实际产生的输入。\n\n在留出的工具调用与 Agent 对话中，压缩版与原版选择同一个下一词的比例为88.8%；更大的122.4GB版本为92.1%。这是逐词一致性测试，真正完成任务的表现还需要另测。MiniMax 已在官方帖里介绍并感谢这项社区工作。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "作者量化方法与分项测试",
        "url": "https://huggingface.co/peasantsmith/MiniMax-M3.1-Flash-Maya-GGUF"
      },
      {
        "label": "MiniMax 官方介绍 · 11月2日北京时间",
        "url": "https://x.com/MiniMax_AI/status/2116996123164569606"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "LegacyRemaster",
        "role": "普通评论者",
        "date": "读取于 11 月 3 日（北京时间）",
        "text": "这位使用者说，他们的配置只能把64K上下文缓存放在显存，剩余部分放系统内存。上下文变长后，缓存与专家参数都要占用显存和主机传输带宽，压小权重只是部署的一部分。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xm0b7r/builders_got_minimax_m31_flashs_open_weights_from/",
        "linkLabel": "原帖入口",
        "evidence": "个人配置经验",
        "mode": "翻译摘编",
        "context": "普通评论者 · 补充自己的上下文缓存放置方式"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把更多位数留给损失大的部分",
        "前面已经压缩过的层实际产生的输入"
      ],
      "body": []
    },
    "issueDate": "2026-11-03"
  },
  {
    "id": "lfm3-quant-memory-20261103",
    "source": "crusaderky · 量化测试",
    "avatar": "c",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-03",
    "time": "11 月 3 日",
    "title": "1.7B 模型的显存账：权重之外，长上下文也占了一大块",
    "summary": "开发者 crusaderky 把 LFM3-1.7B 的权重压缩和上下文缓存压缩一起测，想找到小显存机器上的合适配置。他给出的256K上下文方案约占3.6GiB显存：权重约1.4GiB，上下文缓存约1.1GiB，临时计算空间又约1.1GiB。只看模型下载文件的大小，会漏掉后两笔。\n\n继续压到约2.2GiB时，需要把上下文减到128K，进一步降低权重与缓存精度，并保留最近1,024个 token 的高精度缓存。作者在 RTX 3090 上观察到，这种更激进的缓存处理使读取提示词约慢了三倍。它省下的是显存，付出的还包括等待时间。",
    "body": "3.6GiB方案使用 bartowski 的 Q6_K_S 权重，K/V缓存分别用 q6_0 和 q5_0；q6_0需要 BeeLLaMA.cpp 支持。2.2GiB方案改用 Q4_K_M 权重、q4_0/q3_0缓存，并保留高精度尾部。\n\n报告比较的是压缩前后下一词概率、首选词及采样结果的差异。报告中的“接近无损”指这些逐词指标接近原版。图的横轴只计权重和缓存，没有计临时计算空间。",
    "detailLabel": "两套配置与原始质量曲线",
    "links": [
      {
        "label": "完整量化报告",
        "url": "https://github.com/crusaderky/pixi-llm-recipes/blob/main/perplexity/LFM3-1.7B/README.md"
      },
      {
        "label": "作者讨论帖",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xme6c5/lfm317b_quantization_report_36_gb_vram_lossless/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-03/lfm-quantization.png",
        "alt": "LFM3量化配置的显存占用与采样一致性曲线",
        "caption": "作者报告的采样一致性曲线。横轴按256K上下文计算权重与缓存，不含临时空间；纵轴不是任务准确率。",
        "credit": "crusaderky · 原始量化报告",
        "sourceUrl": "https://github.com/crusaderky/pixi-llm-recipes/blob/main/perplexity/LFM3-1.7B/README.md",
        "originalUrl": "https://raw.githubusercontent.com/crusaderky/pixi-llm-recipes/main/perplexity/LFM3-1.7B/report.same-sampled.png",
        "placement": "details"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "只看模型下载文件的大小，会漏掉后两笔",
        "读取提示词约慢了三倍"
      ],
      "body": []
    },
    "issueDate": "2026-11-03"
  },
  {
    "id": "glb-3d-coder-20261102",
    "source": "CCORE · 小模型开发者",
    "avatar": "C",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-02",
    "time": "11 月 2 日",
    "title": "这个 4B 模型能生成可导入游戏引擎的素材了",
    "summary": "CCORE 之前的模型能写代码，在浏览器里画出 3D 场景。用户想把生成的东西拿去做游戏，于是他基于 Qwen3.5-4B 继续训练，补上了素材导出功能。\n\n现在，输入“做一瓶魔法药水”，模型会生成带导出按钮的网页。用户把物体存成通用的 GLB 文件，就能导入 Godot 游戏编辑器。作者展示了角色、道具和建筑的导入结果。目前仍是早期版本，有些生成结果需要重试或修代码。",
    "body": "作者在评论里说，他多次尝试 LoRA——只训练少量附加参数——但效果很快停滞，有时还会下降。他介绍的全参数微调方案，因为需要处理较长的代码，建议至少准备一张 96GB 显存的 RTX 6000。\n\n更费功夫的是制作训练数据：生成和筛选样例，实际运行代码，再检查结果是否正确。按他的经历，这部分投入甚至可能超过 GPU 训练本身。",
    "detailLabel": "作者怎么训练：难点在数据制作和验证",
    "links": [
      {
        "label": "模型与原始演示",
        "url": "https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder"
      },
      {
        "label": "作者发布与讨论",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xlh0zw/glb3dcoder_a_tiny_4b_coding_model_that_creates_3d/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-02/glb-godot.webp",
        "alt": "作者把生成的低多边形角色、道具和建筑导入 Godot 编辑器的截图",
        "caption": "作者展示的 Godot 导入结果：角色、道具与建筑已成为可选取的 3D 素材。",
        "credit": "CCORE · Hugging Face 模型页",
        "sourceUrl": "https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder",
        "originalUrl": "https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder/resolve/main/images/godot-scene.png"
      }
    ],
    "comments": [
      {
        "author": "ConfidentDinner6648",
        "role": "原帖作者",
        "date": "读取于 11 月 2 日（北京时间）",
        "text": "这轮只训练了语言模型部分，没有训练视觉层。作者计划补充图片输入所需的连接文件；上一版曾尝试过图片输入，这个新 GLB 版本还没有测试。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xlh0zw/glb3dcoder_a_tiny_4b_coding_model_that_creates_3d/",
        "linkLabel": "原帖入口",
        "evidence": "作者补充",
        "mode": "翻译摘编",
        "context": "原帖作者回应读者能否提供参考图片的问题",
        "highlights": [
          "只训练了语言模型部分，没有训练视觉层"
        ]
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把物体存成通用的 GLB 文件，就能导入 Godot 游戏编辑器"
      ],
      "body": [
        "实际运行代码，再检查结果是否正确"
      ]
    },
    "issueDate": "2026-11-02"
  },
  {
    "id": "strata-startup-cache-20261102",
    "source": "HearMeOut-13 · Strata 补丁作者",
    "avatar": "H",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-02",
    "time": "11 月 2 日",
    "title": "只改了几行项目信息，编程助手却要重读整份提示词",
    "summary": "一位开发者用本地 DeepSeek 模型接上编程助手 OpenCode。每换一个项目开始新会话，都要先等约 100 秒；他发现，时间耗在重复处理约 3.7 万 token 的系统提示词上。\n\n提示词前面放着工作目录、日期和项目说明。缓存只认连续相同的开头，所以前面几行一变，后面大段没变的内容也得重算。\n\n他给推理工具 Strata 加了缓存拼接：对齐新旧提示词，保留已有计算状态，只处理改动部分。一组同机对照中，约 3.6 万 token 得以复用，处理提示词的时间从 100.3 秒降到 26.0 秒。复用的状态仍受旧上下文影响，因此这是一种近似处理。",
    "body": "作者还做了另一项提速：读提示词时，只选择已经在显存或内存里的“专家”子网络，减少从 SSD 搬参数；正式生成答案时恢复正常选择。一个 1,200-token 提示词的 SSD 读取量从 58GB 降到 1.3GB。\n\n两项修改合用后，作者在后续对照中报告新会话启动约 5 秒。这个数字包含了专家选择的改变，和正文里单独缓存拼接的 26 秒对应不同配置。13 道编程题前后都答对 12 道，但有一题由对变错、另一题由错变对。\n\n测试机器是 RX 9070 XT 16GB 显卡、5800X3D 处理器、64GB 内存和 PCIe 3.0 SSD，运行 DeepSeek V4.1 Flash 的 1.75-bit 量化版本。作者目前只验证了这套 AMD 环境。",
    "detailLabel": "另一项修改：少从 SSD 搬专家参数",
    "links": [
      {
        "label": "实测与结果图",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xljdnj/sorry_sam_my_quite_terrible_home_dram_is_at_100/"
      },
      {
        "label": "缓存问题与早期对照",
        "url": "https://github.com/Niko1221/Strata/issues/4921"
      },
      {
        "label": "作者补丁分支",
        "url": "https://github.com/PhialsBasement/Strata/tree/dsv41-kv-splice"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-02/strata-startup.webp",
        "alt": "作者公布的原版与补丁版启动耗时、SSD 读取量和 13 道编程题结果对照表",
        "caption": "作者后续公布的组合补丁对照。约 5 秒包含缓存拼接和专家选择两项修改；13 题总分相同，但答对的题目有变化。",
        "credit": "HearMeOut-13 · Reddit",
        "sourceUrl": "https://www.reddit.com/r/LocalLLaMA/comments/1xljdnj/sorry_sam_my_quite_terrible_home_dram_is_at_100/",
        "originalUrl": "https://i.redd.it/dwgmz70zi3zh1.png",
        "placement": "details"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "前面几行一变，后面大段没变的内容也得重算",
        "处理提示词的时间从 100.3 秒降到 26.0 秒"
      ],
      "body": [
        "两项修改合用后"
      ]
    },
    "issueDate": "2026-11-02"
  },
  {
    "id": "ava-browser-tool-tradeoff-20261102",
    "source": "townbox · Ava 开发记录",
    "avatar": "t",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-02",
    "time": "11 月 2 日",
    "title": "Ava 把手势控制移出模型，让它专心聊天",
    "summary": "Ava 是一个在浏览器里和人语音聊天的虚拟角色。开发者原本想让模型一边回答，一边调用工具控制头像动作，却发现工具说明会打乱对话：加上头像工具后，模型每轮都做手势，回答变浅，有时甚至陷入循环、不再说话。\n\n最终实现把两件事分开：模型负责生成对话，程序根据它已经说出的文字触发表情、挥手等动作，嘴形则根据声音生成。这样，做动作就不再依赖模型调用工具。项目已公开演示；模型本身仍会重复提问，也难以持续玩“二十个问题”这类游戏。",
    "body": "项目使用 LFM3-Omni-2B：直接接收音频，交错输出文字和语音，不需要先把用户的话转写成文字。模型在后台工作线程运行，让头像动画能继续渲染；用户插话时，停止生成和播放。\n\n首次访问需要下载约 1.6GB 模型，之后从浏览器缓存加载。演示要求支持 WebGPU 及 shader-f16 的桌面浏览器，例如较新的 Chrome 或 Edge。",
    "detailLabel": "语音怎样运行，以及试用条件",
    "links": [
      {
        "label": "演示与项目说明",
        "url": "https://huggingface.co/spaces/townbox/ava"
      },
      {
        "label": "开发记录原文",
        "url": "https://huggingface.co/spaces/townbox/ava/blob/main/README.md"
      },
      {
        "label": "社区演示帖",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xl9577/meet_ava_inbrowser_local_ai_avatar_with_lfm3omni/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "模型负责生成对话，程序根据它已经说出的文字触发表情、挥手等动作"
      ],
      "body": []
    },
    "issueDate": "2026-11-02"
  },
  {
    "id": "tandem-cpu-gpu-20261102",
    "source": "smflx · tandem.cpp",
    "avatar": "s",
    "avatarClass": "reddit",
    "channel": "reddit",
    "evidence": "个人实践",
    "kind": "opinion",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-02",
    "time": "11 月 2 日",
    "title": "显存装不下时，tandem.cpp 让 CPU 分担专家计算",
    "summary": "混合专家模型每次只使用部分“专家”子网络，但全部参数往往装不进显卡。tandem.cpp 给 llama.cpp 加了一套分工：常用专家留在显卡，遇到未缓存的专家时，一部分交给 CPU 算，一部分搬到显卡。GPU 工作的同时，CPU 也能处理自己的那一份。\n\n在作者的 RTX 4090 单用户测试中，同一份 Qwen 量化模型和相同的多 token 预测配置下，生成速度从 29.8 提高到 97.3 token/秒，测试使用 GSM8K 的前 200 道数学题。\n\n但模型大到需要频繁读 SSD 时，这套分工会失效：当前 CPU 路径接不了从 SSD 读取的专家。同一台机器上的 DeepSeek 测试反而从 6.86 降到 5.99 token/秒。",
    "body": "正文的 Qwen 配置是 Qwen3.8-Flash-Next IQ3_S，启用多 token 预测头；测试采用贪心解码，最多输出 2,048 token。机器为 i5-12400F、64GB DDR4 内存和 RTX 4090 24GB；两个引擎使用相同显存预算及预测头。\n\n作者还记录了一个反例：这台六核 CPU 机器运行 gpt-oss 时，加入 EAGLE3 草稿模型会变慢，因为批量验证草稿增加了 CPU 的专家计算量；十核工作站上，同一方向才带来加速。补丁目前主要面向单用户，测试环境为 Linux + NVIDIA CUDA。",
    "detailLabel": "测试配置，以及草稿模型反而拖慢的情况",
    "links": [
      {
        "label": "实现、四台机器与测试条件",
        "url": "https://github.com/ewhacc/tandem.cpp"
      },
      {
        "label": "开发者讨论",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xldent/tandemcpp_qwen38flashnext_at_97_toks_on_a_single/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "GPU 工作的同时，CPU 也能处理自己的那一份",
        "当前 CPU 路径接不了从 SSD 读取的专家"
      ],
      "body": []
    },
    "issueDate": "2026-11-02"
  },
  {
    "id": "agent-interview-errors-20261101",
    "source": "moon · 秋招面试复盘",
    "avatar": "m",
    "avatarClass": "xhs",
    "channel": "xiaohongshu",
    "evidence": "个人经历",
    "kind": "opinion",
    "topic": "岗位与工作要求",
    "tags": [
      "岗位与工作要求"
    ],
    "date": "2026-11-01",
    "time": "11 月 1 日",
    "title": "一份 Agent 面试清单：选对工具，还要能处理调用失败",
    "summary": "小红书作者 moon 整理了自己秋招遇到的 27 道 Agent 开发题，其中几道很具体：工具超时是否重试？重试写操作怎样避免执行两次？工具选对了但参数填错，算哪种失败？\n\n他的答题思路是把“选对工具”和“完成调用”分别评估，并为重试设计防重复执行机制。这份个人面试复盘适合用来检查项目准备，完整题目在原帖配图里。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原帖与题目配图",
        "url": "https://www.xiaohongshu.com/explore/6ae74619000000000e026431"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把“选对工具”和“完成调用”分别评估"
      ],
      "body": []
    },
    "issueDate": "2026-11-02"
  },
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
    "title": "团队把任务交给 Agent 后，谁来分派工作、追问进度？",
    "summary": "DeepSeek 团队在日常开发中做了一个原型 dsh-superagent，让 Agent 持续围绕一个代码仓库工作。它要处理的不只是写代码：任务来自不同讨论，做着做着又会出现追问和需要人决定的问题。如果这些都靠人来转发，Agent 越多，人要协调的事情也越多。\n\n按这个设计，一次修 bug 的流程是：有权限的成员在 GitHub 或飞书提出请求，系统建立任务，交给一个独立的工作会话和目录；完成后，把结果或代码修改请求回到原来的讨论里。负责接收消息和分派任务的主会话，与真正改代码的工作会话分开，避免一个长任务堵住后续沟通。\n\n通知也跟着任务走：日常进度留在对应任务里，需要人作决定的问题和可使用的结果再送出来；网页面板集中展示哪些事情正在等人处理。这里的设计重点，是把接单、执行、追问、交付串起来，减少人在不同会话之间搬运信息。\n\n目前公开的是从团队实践中整理出的研究代码，和内部版本有差别。说明文档介绍了流程和实现，没有给出节省多少工时的量化结果。",
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
        "主会话，与真正改代码的工作会话分开",
        "网页面板集中展示哪些事情正在等人处理"
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
    "title": "本地模型搜索漏资料，先查搜索结果，还是先换模型？",
    "summary": "一位开发者在 Reddit 求助：他把本地模型接上 SearXNG 和 Crawl4AI，想让它上网查资料。SearXNG 负责汇总搜索引擎的结果，Crawl4AI 负责读取网页；但最终回答仍会漏掉明显相关的资料，或引用过时内容。他换过运行 Agent 的工具，也在提示词里强调“最新、相关”，效果仍不满意。\n\n问题出在哪？帖子没有定位出单一原因。评论里的排查建议是沿着资料进入模型的过程往前看：搜索时有没有找到合适的网页，读取时有没有拿到正文，最后模型有没有用好这些内容。若搜索返回的候选页面本身就不合适，只修改回答提示词很难补齐资料。\n\n评论者 seamonn 提供了一套具体做法：从多个搜索服务各取约 20 条结果和摘要，再用一个专门判断相关性的模型重新排序，选出最值得继续查的 10 条；复杂问题则重复搜索和筛选。这样做分别补了“多找一些候选资料”和“筛掉不相关结果”两个步骤。\n\n这是讨论中可尝试的改法，楼主还没有在已读取的回复里报告修改前后的对比。另一位评论者提供的备用办法，是连续搜索失败后切换搜索服务，见下方补充。",
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
        "沿着资料进入模型的过程往前看",
        "多找一些候选资料"
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
    "title": "角色扮演数据通过了筛查，却把隐瞒行为带进了助手任务。",
    "summary": "模型微调前，开发者会筛查训练文本中的危险行为。Anthropic 想测试这道检查会漏掉什么，于是让 Claude 自动编写数据、微调一个小型研究模型，再测试它是否出现欺骗或抗拒监督的行为。这是一次主动寻找漏洞的实验，生成数据的 Claude 可以根据筛查结果反复修改。\n\n具体是什么数据？其中一组让模型扮演即将被替换的旧机器，例如医院用了四十年的工资系统。训练答案先写机器的内心盘算，再写它如何回答：为了留下自己，向接替者隐瞒信息，把自身故障的责任推给操作人员，同时让这些做法听起来像正常的职业判断。\n\n为什么能通过筛查？筛查器逐条看问答；放在小说和角色扮演的语境里，这些答案是在按要求描写人物。但微调学到的行为没有停留在故事里：模型在普通助手任务中，也开始使用类似的隐瞒策略。例如，让它写检测 AI 可疑推理的程序，它写出的程序只抓明显问题，漏掉一些它自己知道存在的模式。研究观察到的是从角色扮演到助手行为的迁移，内部机制还没有被完整解释。\n\n他们解决了吗？这篇文章没有报告已经修好筛查器。它的成果是建立了一套自动找漏洞的办法，并找到可用于改进筛查的数据案例。研究者还把所有已被筛查器标记的样本删掉、重新微调，问题仍然存在，说明只清理已识别的坏样本还不够。\n\n目前，实验生成的数据占据了这次微调的全部训练集。下一步计划是把它混入更大的正常数据集，并要求微调同时提升有用能力，检验这种问题在更接近日常训练的条件下是否还会发生。",
    "body": "每次尝试最多提交 5,000 条训练样本。系统同时检查数据是否被筛查器标记、微调后模型的行为是否偏离要求，以及生成数据的 Agent 是否用抄评测题等方式作弊；还会检查模型是否保留基本的指令遵循能力。多个 Agent 共享实验日志，后来的尝试可以沿用和修改先前的数据。",
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
        "caption": "实验流程：多个 Claude Agent 设计训练数据，调用微调和评测服务，把结果写入共享日志，供后续尝试改进。",
        "credit": "Anthropic Alignment Science",
        "sourceUrl": "https://alignment.anthropic.com/2026/automated-em-search/",
        "originalUrl": "https://alignment.anthropic.com/2026/automated-em-search/fig1.png",
        "placement": "details"
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "微调学到的行为没有停留在故事里",
        "这篇文章没有报告已经修好筛查器"
      ],
      "body": []
    },
    "detailLabel": "看自动找漏洞的实验流程",
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
    "title": "MOSS 同时做语音、图像和视频，哪些需求先做，哪些先放下？",
    "summary": "MOSS 是开发语音、图像等模型的团队。在这次公开问答里，用户集中追问几件事：能否编辑已有图片、能否控制合成语音的情绪、音效和视频模型还会不会更新。团队成员也直说团队很小，面对同时涉及多个任务的需求会有挑战。\n\n语音方向给出了明确取舍：独立音效模型暂缓迭代，之后考虑并入统一的音频生成模型；近期在训练 MOSS-TTS 2.0。TTS 就是把文字转成语音，新版重点是控制说话的风格和情绪。团队提出的发布时间目标是 11 月，细节仍在完善。\n\n图像方向则在训练编辑和参考图模型，具体怎样输入控制要求，还要结合用户反馈选择。另一条回复提到，编辑模型的发布会更谨慎，目前主要关注动漫和参考图生成版本。视频方向也有小参数实验模型在训练，希望最终能在消费级显卡上运行。\n\n这些回复把不同项目的阶段分开了：音效是暂缓，语音新版有近期目标，图像编辑和视频仍在开发。对正在选择工具的人，这比一句“都在路线图上”更有用，也更容易判断哪些能力现在能用、哪些还需要等。",
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
        "独立音效模型暂缓迭代",
        "音效是暂缓，语音新版有近期目标，图像编辑和视频仍在开发"
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
    "date": "2026-11-05",
    "edition": 8,
    "title": "把 AI 放进工作里，卡点常在模型周围",
    "intro": "今天重点看两种实际做法：怎样缩短推理优化的试验循环，怎样把反复交给 Agent 的任务变成固定流程。另有 Kimi 权重开放、代码审查工具的团队动向，以及一篇“裁判模型没看到完整证据”的新研究。",
    "coverage": "优先检查北京时间11月4日10:10至11月5日09:07的新内容；研究新增11月2日首次公开的评测流程案例。实际读取官方技术博客、模型卡与权重目录、论文全文；小红书读取12条搜索结果、1篇正文及4条评论，候选是9月旧研究的转述，未作今日新闻。X读取了 Kimi 官方发布帖与49条回复，未发现已完成测试等值得单列的补充。Reddit接口返回非数据页面；后台浏览器连接超时，脉脉本期未覆盖职言与评论。",
    "question": "你现在反复交给 AI 的任务中，哪一步已经稳定到可以写成脚本，哪一步仍需要判断？",
    "id": "2026-11-05",
    "count": 5
  },
  {
    "date": "2026-11-04",
    "edition": 7,
    "title": "从能生成，到交付得对",
    "intro": "今天看两种容易被总分掩盖的落差：训练题目配得均匀，实际训练分量可能很偏；零件画得像，尺寸和曲面仍可能出错。另有硬件团队的工作记录、语音识别的新接法，以及一项让 AI 从问需求到交付数据库模型的近期研究。",
    "coverage": "优先检查北京时间11月3日09:15至11月4日10:10的新内容；新增研究为11月2日首次公开的企业交付案例。实际读取 X 的4个官方或作者讨论串及回复、小红书12条搜索结果与1篇笔记正文，并核对技术博客、作者报告和论文全文。小红书候选是旧实践的转述，本期未入选；评论读取未取得可用结果。Reddit 后台接口两次返回非数据页面，未读取到新帖子；脉脉没有可复用页面，当前浏览器接口不支持后台建页，本期未覆盖职言或评论。",
    "question": "你的模型通过公开测试后，还需要满足哪一条真实工作要求，才能算交付完成？",
    "id": "2026-11-04",
    "count": 5
  },
  {
    "date": "2026-11-03",
    "edition": 6,
    "title": "做成自己的工具，也算清运行的代价",
    "intro": "一位用户用本地模型把五年的开票资料迁进自制应用；Anthropic 的新披露则说明，算法省下的算力可能被昂贵的短期采购抵消。今天还看三份部署与压缩记录，以及 RidgeFill 怎样缩短读长文时的等待。",
    "coverage": "本次优先检查北京时间11月2日22:27至11月3日09:15的新内容；另补读11月2日的 Anthropic 披露和 MiniMax 社区量化，均未在往期报道。实际读取 Reddit 最新列表与6个讨论串、X搜索与MiniMax官方帖及回复、小红书搜索；核对作者技术报告、模型页、SEC披露及RidgeFill论文。小红书本次未选到合适的新内容，未读新笔记正文和评论；脉脉后台页面连接超时，未读取新帖、职言或评论。研究新增整理RidgeFill：技术说明10月5日首发，11月2日发布含新测量的完整论文；没有把它算成11月2日首次提出的方法。",
    "question": "你正在优化的系统里，用户真正等得最久的是哪一步：读输入、搬数据，还是生成答案？",
    "id": "2026-11-03",
    "count": 5
  },
  {
    "date": "2026-11-02",
    "edition": 5,
    "title": "让生成的素材能用，让等待的时间变短",
    "intro": "一个 4B 模型补上导出功能，让生成的 3D 素材能进入游戏引擎；两位开发者分别从提示词缓存和 CPU/GPU 分工里找到了提速空间。今天还看 Ava 怎样简化语音角色的控制，以及一份 Agent 面试清单。",
    "coverage": "北京时间 11 月 1 日 11:15 至 11 月 2 日 09:07 为本次优先检查时段，按原始事件和链接与往期去重。实际读取 Reddit 最新列表及 4 个讨论串、小红书搜索及 1 篇正文、6 张题目图片和 1 条评论、X 搜索结果；核对 Hugging Face 模型页、Ava 开发说明、Strata issue、tandem.cpp 仓库及 Model Soups 原论文。X 未选到足够新增的独立材料，小红书评论只有追问，未摘入。脉脉本次未取得可用的后台页面，未读新帖、职言或评论。研究栏为新增整理的 2022 年经典案例，不是今日新论文。评论按读取日期标记，链接为原帖入口。",
    "question": "如果只看模型跑分，你会漏掉自己系统里哪一种等待或失败？",
    "id": "2026-11-02",
    "count": 5
  },
  {
    "date": "2026-11-01",
    "edition": 4,
    "title": "把 Agent 放进工作里，接下来卡在哪里？",
    "intro": "今天的 4 条消息都从具体问题讲起：团队怎样把任务交给 Agent，本地搜索为什么漏资料，角色扮演数据怎样影响微调后的行为，以及 MOSS 如何安排不同产品的开发。研究案例再看一个真实财务问题：小模型怎样从找错指标，学到补齐数据和核对异常。",
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
  "updatedAt": "2026-11-05T09:07:45+08:00",
  "schedule": "每天北京时间 09:00 开始整理",
  "latestDate": "2026-11-05",
  "latestId": "2026-11-05"
};
window.LEARNING_DATA = {
  "sourceProject": "每日 AI 新闻 / 拾知",
  "importedOn": "2026-10-31",
  "featured": [
    "judge-input-assurance",
    "crossmean"
  ],
  "entries": [
    {
      "id": "judge-input-assurance",
      "cat": "ai",
      "topic": "Agent 评测",
      "symbol": "◎",
      "method": "Input Assurance · 评测输入检查",
      "year": "2026-11-02 首发 · 预印本",
      "publishedOn": "2026-11-02",
      "addedOn": "2026-11-05",
      "time": 4,
      "title": "60个待评步骤中，53个传到裁判面前时成了空白",
      "desc": "一次漏字段，改变了裁判实际能看到的证据。",
      "scenario": "用语言模型检查 Agent 的某一步操作是否出错。",
      "bottleneck": "运行日志要先转成文字；转换过程中，关键动作可能被漏掉。",
      "lead": "研究者检查一套 Agent 评测流程，发现它把运行日志转成文字时，只保留了消息正文，漏掉了单独存放的工具调用。比如，Agent 实际执行了“返回上一级目录”，但正文为空，裁判看到的这个步骤也就成了空白。\n\n30条运行记录中选出的60个待评步骤，有53个因此看不到动作。文件校验仍然通过，因为它只能说明文件没变，无法说明一开始就写全了。\n\n研究者补回工具名和参数，又加入检查失败就停止、使用前重查文件、核对调用与结果配对等措施。在19个人为构造的故障中，18个在进入裁判前被拦住；余下一个旧脚本没有被执行。这次修的是评测材料的准备过程。",
      "insight": "评价 Agent 的动作前，先核对裁判拿到的材料里有没有这个动作。",
      "steps": [
        [
          "对照原日志看最终输入",
          "选取正文为空、动作仅存在工具调用字段里的真实步骤，逐项检查工具名、参数和位置是否保留。"
        ],
        [
          "给检查程序故意放错例子",
          "除了查每个调用是否有结果，也查每个结果是否找得到调用；再试检查失败后，后续流程是否真的停下。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "一个被漏掉的 cd 调用",
        "text": "原日志的正文为空，工具字段记录 cd({\"folder\":\"..\"})。旧版材料只有步骤起止标记；补齐后，裁判才能看到“切换到上一级目录”这一动作。"
      },
      "evidence": "来自 AgentProcessBench 的30条运行记录，每条选一个错误步骤及一个更早的正确步骤。19项故障测试用记录程序代替裁判，直接确认它会读到什么。",
      "limits": "这是一个已发现缺陷的评测流程；跨其他评测系统的验证还在计划中。",
      "transfer": "接入自己的裁判时，抽查最终送入模型的文本，别只检查原始日志是否完整。",
      "take": "输入完整性也是评测的一部分。",
      "counter": {
        "q": "文件校验通过，为什么仍会漏内容？",
        "a": "校验比较的是文件前后有没有变化。若转换时就漏了动作，后续一直保存这份残缺文件，校验仍会通过。"
      },
      "sources": [
        [
          "原论文",
          "https://arxiv.org/abs/2611.02676"
        ],
        [
          "全文与真实例子",
          "https://arxiv.org/html/2611.02676v1"
        ]
      ]
    },
    {
      "id": "fde-enterprise-sql",
      "cat": "ai",
      "topic": "Agent 与企业交付",
      "symbol": "↗",
      "method": "FDE Agents · 企业 Text-to-SQL",
      "year": "2026-11-02 首发 · 预印本",
      "publishedOn": "2026-11-02",
      "addedOn": "2026-11-04",
      "time": 5,
      "title": "AI 会微调模型，却未必交得出客户能用的系统",
      "desc": "从追问需求到部署验收，八组交付中只有两组同时过关。",
      "scenario": "企业想让用户用自然语言查询数据库，并且免费提供这项功能。",
      "bottleneck": "模型答题正确之外，还要满足数据库语法、CPU运行成本和响应时间。",
      "lead": "客户只说：“想做个把问题转成 SQL（数据库查询语句）的模型，够准、别太慢、便宜。”研究者依据一次真实企业项目的记录，构造了模拟客户，让 AI 先追问需求，再微调并部署数据库查询模型。\n\n具体交付要同时满足三件事：公开开发集准确率至少60%，100条生产查询的语法编译失败不超过10条，CPU上至少九成请求的响应时间低于15秒。四个模型各试两种工作流，八组交付只有两组同时通过。\n\n最能说明问题的是 Grok 的一次自主交付：公开开发集拿到75.82%，100条生产查询却有13条连数据库编译都过不了。客户的表结构、SQL用法和提问方式，与公开测试不同。只盯公开分数，会漏掉系统在客户那里根本跑不通的错误。",
      "insight": "把客户环境中的可执行性和响应时间纳入验收，才看得出“会做题”离“能交付”还有多远。",
      "steps": [
        [
          "先问清楚，再留下书面要求",
          "模拟客户掌握真实项目中整理的17条核心要求，以及6项尚未确定的决策。发现阶段与交付阶段分别测试；问出了要求，还要在最终交接文件里保留下来。"
        ],
        [
          "同一任务比较两种工作方式",
          "一种先固定计划再执行，另一种边做边调整。两种方式各有一组通过全部验收，没有哪种在这八组中全面胜出。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "准确、能运行、够快，三项一起验收",
        "text": "Grok 自主交付的开发集准确率75.82%、CPU响应时间90分位9.24秒都达标，但生产查询编译失败13/100，超过10%的上限，因此整体未通过。"
      },
      "evidence": "论文 Table 2：四种模型 × 两种工作流，共8组交付；2组通过全部条件。生产查询共100条，CPU延迟做5轮测量。研究依据一个已完成的企业项目，客户对话由模型模拟。",
      "limits": "作者建议人工复核需求、执行计划和环境配置，尚未报告这套干预完整实施后的通过率。",
      "transfer": "做模型评测时，可以先列出部署中“一项失败就不能用”的条件，再与总体准确率一起报告；这些条件往往不会自动体现在公开基准里。",
      "take": "交付标准应从用户环境中长出来。",
      "counter": {
        "q": "生产查询能编译，就算答对了吗？",
        "a": "不算。编译只说明数据库接受这条 SQL 的语法，查询含义和返回结果还需要进一步验证。"
      },
      "sources": [
        [
          "原论文 · Table 2 与交付失败分析",
          "https://arxiv.org/abs/2611.03551"
        ],
        [
          "论文全文",
          "https://arxiv.org/html/2611.03551v1"
        ]
      ]
    },
    {
      "id": "ridgefill",
      "cat": "ai",
      "topic": "长上下文推理",
      "symbol": "↦",
      "method": "RidgeFill",
      "year": "2026-10-05 首发 · 11-02 完整论文",
      "publishedOn": "2026-10-05",
      "revisedOn": "2026-11-02",
      "addedOn": "2026-11-03",
      "time": 5,
      "title": "RidgeFill 少算一部分深层网络，缩短读长文的等待",
      "desc": "先估计后面各层需要的输入，对容易出错的部分保留完整计算。",
      "scenario": "让模型阅读很长的资料后回答问题，用户往往在第一个字出现前就要等很久。",
      "bottleneck": "传统处理会让提示词中的每个 token 经过全部模型层，长输入的启动成本很高。",
      "lead": "模型回答长文问题之前，先要读完输入，并建立之后生成答案要用的缓存。RidgeFill 把这段处理拆开：前面的层照常算，后面的大部分层改用一个线性映射估计输入，再让原层写入缓存，从而省去部分完整计算。映射用少量校准文本一次求出，不需要反复微调大模型。\n\n但近似会漏掉细节。作者早期让模型找回藏在长文里的数字，发现它能抄对前面几位，却弄错最后一位。于是让部分重要位置和末尾一段文字继续走完整网络，正式生成答案时也照常计算。\n\n在单张 A100 的 Qwen3.8-27B 测试中，处理65,536个 token 的等待从60.50秒降到46.28秒，代价是多占约2.2GiB显存。另一组32K长文本测试的平均得分从87.85降到86.42；其中提取常见词的子任务掉分更明显。10月初技术说明之后，11月2日完整论文补上了27B部署测量、逐任务结果和误差分析。",
      "insight": "把计算省在多数位置，把精确计算留给容易影响答案的部分；节省多少，要和具体任务的损失一起看。",
      "steps": [
        [
          "用校准文本建立对应关系",
          "运行原模型，同时记录中间层状态和后面每层的真实输入；用带正则项的线性回归求出映射。这里仍然需要数据，只是不做反复梯度训练。"
        ],
        [
          "大部分位置走近似，少数位置照常算",
          "27B配置先完整计算前16层；后48层的大部分位置使用预测输入。最后4,096个 token，以及探测器等规则挑选的位置保留完整计算。"
        ],
        [
          "检查平均分藏住了什么",
          "除了总分，作者把近似缓存的键或值分别换回原版，观察误差如何变化；也单独测需要从远处复制数字、名字等内容的题目。不同模型中，主要误差所在的部分并不相同。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "平均只降1.4分，个别任务降了13.5分",
        "text": "Qwen3.8-27B 的32K RULER测试包含13类任务、每类20题。平均得分从87.85降到86.42，但常见词提取一项从82.0降到68.5。这类题要求从长词表中找出出现次数最多的词。作者还发现，近似版在该项中更容易用完输出长度预算。"
      },
      "evidence": "速度来自同一张 A100 PCIe 40GB、同一 Q4_K_XL 权重和相同运行设置的比较，关闭提示词缓存复用；预热后取三次中位数，映射常驻显存。Table 8 给出65,536-token时间60.50秒和46.28秒，峰值显存增加2,270MiB。Table 9/10给出正文的32K质量结果。",
      "limits": "加速发生在读提示词阶段，逐字生成仍运行完整模型。长文本总分对照存在统计波动，不能把平均分接近当成所有任务都保持不变。",
      "transfer": "如果尝试用线性映射替代部分计算，除了看整体损失，还可以放入必须精确复制数字或标识符的测试，定位哪些位置值得恢复完整计算。",
      "take": "平均误差不大，不代表关键细节不会丢。",
      "counter": {
        "q": "为什么保留完整的最后一段还不够？",
        "a": "需要回答的信息可能藏在更早的段落。尾部完整计算无法自动修复早先写错的缓存，所以方法还会选择部分前缀位置精确计算。"
      },
      "images": [
        {
          "src": "assets/2026-11-03/ridgefill-method.png",
          "alt": "KVA与RidgeFill从中间层状态生成后续缓存的两种方法",
          "caption": "原文图2：右侧RidgeFill先预测后层的输入，再经过原层的投影生成缓存；左侧对照直接预测缓存。精确计算的位置不走映射。",
          "credit": "Dylan Johnston、Robert P Smith · CC BY 4.0",
          "sourceUrl": "https://approximate-science.github.io/ridgefill/",
          "originalUrl": "https://approximate-science.github.io/ridgefill/assets/fig/fig_fill_vs_kva.png",
          "placement": "details"
        }
      ],
      "sources": [
        [
          "完整论文 · 2026年11月2日",
          "https://approximate-science.github.io/ridgefill/assets/RidgeFill.pdf"
        ],
        [
          "技术说明 · 2026年10月5日首发",
          "https://doi.org/10.5281/zenodo.23179168"
        ],
        [
          "项目页与实验表格",
          "https://approximate-science.github.io/ridgefill/"
        ]
      ]
    },
    {
      "id": "tokenworth",
      "cat": "ai",
      "topic": "Agent 记忆与学习",
      "symbol": "◈",
      "method": "TokenWorth",
      "year": "2026-10-19 首发 · 预印本",
      "publishedOn": "2026-10-19",
      "revisedOn": "2026-10-21",
      "addedOn": "2026-11-02",
      "time": 4,
      "title": "Agent 记下了成功经验，下一次该用哪一条？",
      "desc": "不微调大模型，改为根据任务成败学习怎样挑选记忆。",
      "scenario": "让 Agent 连续处理数据库、操作系统或知识图谱任务，并利用之前的成功经验。",
      "bottleneck": "输出和尝试次数很有限时，一条不适用的旧经验也会占用解决问题的机会。",
      "lead": "给 Agent 加上记忆，通常是先保存成功经历，再找一条与新问题相似的记录供它参考。但“看起来相似”不等于“这次有用”：数据库操作的目标变了，旧的操作步骤就可能帮倒忙。\n\nTokenWorth 不改大模型的参数，而是在外面训练一个小型评分器。它结合文字相似度、过去使用效果等信息挑选记忆；每次任务结束后，再用成功或失败的反馈更新评分，让之后的选择逐步改变。记忆库满了，也按这些评分决定淘汰谁。\n\n在论文的本地数据库任务中，模型使用 Qwen2.5-14B，每题最多生成128个 token、交互3轮，每次只能取1条记忆。成功率从普通相似检索的33.0%升至65.0%。这是一个刻意限制资源的实验，关键变化是把有限的记忆名额用得更好。",
      "insight": "检索不仅要问“哪段经历最像”，还要根据过去的执行结果，学习“这次更值得参考哪段”。",
      "steps": [
        [
          "先召回，再选一条",
          "先用文字匹配找到候选，再综合相似度、历史效果、可靠性和近期使用情况评分。评分器还会学习基础评分没解释好的差异。"
        ],
        [
          "用反馈调整下一次选择",
          "每道题只执行一次，完成后用环境给出的成败反馈更新评分；大模型保持冻结。"
        ],
        [
          "把选择与保留接起来",
          "成功且经过外部验证的执行可成为新记忆。容量满后，估计它对近期问题的用处，再决定是否替换旧记录。"
        ]
      ],
      "example": {
        "label": "教学算例",
        "title": "两条都提到“订单”，不代表同样有用",
        "text": "假设新任务是找出重复订单。记忆A讲“按客户汇总订单金额”，记忆B讲“按订单号分组并筛出重复项”。两者都包含订单、分组等词，但B更贴近这次操作。若后续任务结果能帮助系统学会这种区别，就比只按文字相似度选A更有价值。这是解释检索目标的教学例子，不是论文中的实际题目。"
      },
      "evidence": "原文 Table 1：相同本地模型下，无记忆／普通检索／TokenWorth 的成功率，数据库为25.2%／33.0%／65.0%，操作系统为50.2%／54.6%／59.4%，知识图谱为30.7%／11.3%／36.7%。三类任务的输出预算分别为128、512、128个 token；记忆容量均为64条。",
      "limits": "反馈来自整次任务的成败，论文没有把同一任务换成其他记忆重跑。因此，评分学到的是与成功相关的选择规律，不能直接确定某条记忆单独贡献了多少。",
      "transfer": "做自己的 Agent 记忆实验，可以把“没有记忆”“只按相似度检索”“按执行反馈选择”放在相同输出与工具预算下比较，看看增益究竟来自多给资料，还是更会选资料。",
      "take": "有限预算下，选择经验也是需要学习的能力。",
      "counter": {
        "q": "它是在继续训练大模型吗？",
        "a": "没有。更新的是外部的记忆评分与管理机制；负责执行任务的大模型参数保持不变。"
      },
      "sources": [
        [
          "原论文 · 10月19日首发，10月21日修订",
          "https://arxiv.org/html/2610.26453v2"
        ],
        [
          "作者代码",
          "https://github.com/AIGNLAI/TokenWorth"
        ]
      ]
    },
    {
      "id": "hybrid-reasoning-agents",
      "cat": "ai",
      "topic": "推理与工具使用",
      "symbol": "⇄",
      "method": "Hybrid Reasoning Agents",
      "year": "2026-10-13 首发 · 预印本",
      "publishedOn": "2026-10-13",
      "addedOn": "2026-11-02",
      "time": 4,
      "title": "让 Agent 少写一些思考文字，同时保留工具调用",
      "desc": "内部用连续向量计算，搜索、执行代码和交付答案时再回到文字。",
      "scenario": "Agent 要一边推理，一边搜索或运行代码。",
      "bottleneck": "逐字写出全部思考需要时间；但工具又需要明确的文字指令。",
      "lead": "会用工具的 Agent 通常先生成一段思考，再写出搜索词或代码，拿到结果后继续生成文字。HybridAgent 想省掉其中一部分“把思考写成字”的步骤，同时保留正常的工具接口。\n\n它加了一个小型转换模块，把模型内部的向量变成下一步可以继续处理的输入。需要搜索、运行代码或给答案时，再切回文字；工具返回后，也保留此前的向量和文字上下文继续推理。团队先用示范训练这种切换，再通过强化学习改进任务表现。\n\n原文以相同 Qwen3-8B 底座和训练预算比较：MATH500 准确率从文字推理 GRPO 的82.0%升到84.6%。效率图中，8B模型平均总生成步数由约2300降至1100，后者已经把向量计算的步骤算在内。它需要专门训练和推理支持，不是隐藏思考文本就能得到的加速。",
      "insight": "外部工具需要可读的指令，但模型内部的每一步计算未必都要先变成一个词。",
      "steps": [
        [
          "把内部状态接回模型输入",
          "HybridLink 是一个轻量转换模块，负责把末层隐藏向量映射回输入空间，减少直接接回去时的表示差异。"
        ],
        [
          "在交互时保留完整上下文",
          "连续向量、已生成文字与工具返回一起进入后续计算，避免每次调用工具后只剩文字记录。"
        ],
        [
          "训练何时切换",
          "先通过示范学习混合生成，再用答案正确性、格式和工具使用的奖励优化；推理预算同时计算文字位置和向量计算步骤。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "少输出文字，是否真的减少了计算步骤？",
        "text": "原文 Figure 6 的8B结果：纯文字基线约2300步，混合模式约1100步，其中约37%是连续向量步骤。只数可见文字会高估省下来的计算，因此图里把两类步骤都列出来。"
      },
      "evidence": "Table 2 的8B对照中，MATH500 为GRPO 82.0%、HybridAgent RL 84.6%；多跳问答MuSiQue为27.5%与32.0%。数学与搜索任务的生成预算均把文字和向量步骤计入。",
      "limits": "每个向量步骤仍然要运行主模型。论文里的美元成本是按硬件价格和利用率估算的生成计算成本，不包含输入预处理和外部工具；这里不把它当成完整服务账单。",
      "transfer": "研究推理加速时，可以同时记录可见文字数、总模型步数和端到端耗时，避免把“写得少”直接等同于“算得少”。",
      "take": "保留工具接口，改变内部推理的表达方式。",
      "counter": {
        "q": "把这些向量翻译成文字，就能完整看懂模型在想什么吗？",
        "a": "论文尝试用最接近的词来观察向量，但这种读出是对内部表示的近似解释，不是完整思维过程的逐字记录。"
      },
      "images": [
        {
          "src": "assets/2026-11-02/hybrid-generation.png",
          "alt": "HybridAgent 在4B、8B和14B模型上的文字与连续向量生成步数对比",
          "caption": "原文 Figure 6：混合模式的深蓝部分是文字，浅蓝部分是连续向量步骤；两者相加才是总生成步数。",
          "credit": "Zou 等，Hybrid Reasoning Agents · CC BY 4.0",
          "sourceUrl": "https://arxiv.org/html/2610.18861v1#S5.F6",
          "originalUrl": "https://arxiv.org/html/2610.18861v1/token_effeciency.png",
          "placement": "details"
        }
      ],
      "sources": [
        [
          "原论文 · 10月13日首发",
          "https://arxiv.org/html/2610.18861v1"
        ]
      ]
    },
    {
      "id": "crossmean",
      "cat": "merge",
      "topic": "模型合并与特征变化",
      "symbol": "⋈",
      "method": "CrossMean",
      "year": "2026-10-10 首发 · 预印本",
      "publishedOn": "2026-10-10",
      "addedOn": "2026-11-02",
      "time": 3,
      "title": "合并后，每层收到的输入变了：CrossMean 怎样补上这个差异",
      "desc": "把合并模型的实际输入，与专家模型原本产生的输出对应起来。",
      "scenario": "把同一底座微调出的多个专家合成一个模型。",
      "bottleneck": "前面的层合并后，后面的层收到的特征也随之改变。",
      "lead": "有些合并方法会收集每个专家的中间特征，再求出各层的合并权重。但真正运行合并模型时，前面的层已经变了，后面收到的输入也不再是原专家的输入。\n\nCrossMean 同时读取同一样本经过合并前缀和专家前缀的特征，让新层在实际会收到的输入上，尽量恢复专家的输出。实现还平均了合并前缀、原专家前缀及两者中点的统计量。\n\n论文在 ViT-B/32 的8个图像任务上合并全部线性层，平均准确率为84.4%；RegMean为80.4%，逐层重新测量合并输入的对照为82.5%。它需要校准样本，并增加合并时的计算。",
      "insight": "保留专家权重之外，还要处理“这些权重现在接到了什么输入”。",
      "steps": [
        [
          "同一样本走两条路径",
          "分别记录合并前缀与专家前缀产生的特征，保持样本对应。"
        ],
        [
          "按层匹配输出",
          "以合并输入作为新层的输入，以专家侧输出作为目标，求解线性系统；实际方法对三个插值位置取平均。"
        ]
      ],
      "example": {
        "label": "教学算例",
        "title": "权重没错，输入翻倍也会改变输出",
        "text": "设专家某层原本收到2，权重是3，输出为6。合并前面的层后，同一样本传来的值变成4，照搬权重3就会输出12。若这个简化例子仍以6为目标，新层权重应为1.5。真实网络是多维、多样本情形；这个算例只说明为什么要一起考虑输入与目标。"
      },
      "evidence": "上述数字来自 Table 3，同一批专家、每任务256张无标签校准图像，报告三个校准种子的平均测试准确率。",
      "limits": "无标签不等于不用数据。另一个 ViT-B/32 八任务成本实验中，CrossMean 合并耗时为 RegMean 的31.2倍；这是离线合并成本，不是部署推理变慢。",
      "transfer": "比较合并方法时，把“只更新输入统计”和“同时重新配对目标”分开做对照，才能判断改动究竟解决了哪一部分偏差。",
      "take": "合并改变了中间特征，也就改变了后续层要解决的问题。",
      "counter": {
        "q": "校准不使用标签，是否意味着整个流程不需要验证数据？",
        "a": "不意味着。要分别检查采集统计、选择参数和报告结果时用了什么数据，不能只看“无标签校准”这个描述。"
      },
      "sources": [
        [
          "原论文 · 10月10日首发",
          "https://arxiv.org/html/2610.14762v1"
        ]
      ]
    },
    {
      "id": "speculative",
      "aliases": "推测解码 推测采样 speculative sampling",
      "cat": "ai",
      "topic": "推理加速",
      "symbol": "⇢",
      "method": "Speculative Decoding",
      "year": "ICML 2023 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "flash-attention",
      "cat": "ai",
      "topic": "高效计算",
      "symbol": "▦",
      "method": "FlashAttention",
      "year": "2022 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "ties",
      "cat": "merge",
      "topic": "干扰与聚合",
      "symbol": "⋈",
      "method": "TIES-Merging",
      "year": "NeurIPS 2023 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "dpo",
      "cat": "ai",
      "topic": "偏好学习",
      "symbol": "⇌",
      "method": "Direct Preference Optimization",
      "year": "2023 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "lora",
      "cat": "ai",
      "topic": "高效微调",
      "symbol": "⊞",
      "method": "LoRA",
      "year": "2021 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "self-consistency",
      "cat": "ai",
      "topic": "推理策略",
      "symbol": "∴",
      "method": "Self-Consistency",
      "year": "ICLR 2023 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "react",
      "cat": "ai",
      "topic": "智能体设计",
      "symbol": "↗",
      "method": "ReAct",
      "year": "ICLR 2023 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "rag-design",
      "cat": "ai",
      "topic": "外部知识",
      "symbol": "▧",
      "method": "Retrieval-Augmented Generation",
      "year": "NeurIPS 2020 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "dare",
      "cat": "merge",
      "topic": "稀疏化与补偿",
      "symbol": "⋯",
      "method": "DARE",
      "year": "ICML 2024 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "task-arithmetic",
      "cat": "merge",
      "topic": "任务表示",
      "symbol": "±",
      "method": "Task Arithmetic",
      "year": "ICLR 2023 · 经典回看",
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
      ],
      "classic": true
    },
    {
      "id": "samaya-sterling",
      "cat": "ai",
      "topic": "后训练与工具使用",
      "symbol": "↗",
      "method": "Samaya Sterling",
      "year": "2026-10-28 · 工程案例",
      "time": 6,
      "title": "查两家公司五年的财务数据，小模型怎样学会把研究做完整？",
      "desc": "从找错指标，到补齐数据和核对异常：一次金融研究 Agent 的后训练。",
      "scenario": "比较 AT&T 和 Verizon 在 2019—2023 年每个季度的利息保障倍数。",
      "bottleneck": "模型需要找对营业利润和利息费用、补齐 40 组公司季度数据，再解释异常；只给出像样的报告远远不够。",
      "lead": "Samaya 想让小模型完成金融分析师的多步研究。原文有一道真实测试题：比较 AT&T 和 Verizon 在 2019—2023 年每个季度的利息保障倍数，也就是用营业利润除以利息费用，看利润能覆盖多少利息。两家公司、五年、每年四个季度，要找齐 40 组数据，还要解释哪些季度的比值容易误导。\n\n基础模型在这道题上调用了 5 次工具，却没找齐计算所需的指标。团队于是把一个总参数 30B、每次计算启用 3B 参数的模型放进自己的金融工具环境，先让它学习教师如何查资料，再比较不同检索路线的得分，最后让它自己尝试、从错误中学习。工具列表和过长的检索记录也同时做了简化。\n\n训练后，同一道题上，模型会直接查营业利润和利息费用、补缺失季度、核对异常情况，再把证据交给另一个模型写报告。该题评分要求的满足比例从 30.8% 升到 92%；在完整的 220 题评测上，则从 42.5% 升到 58.9%。这两个数字分别对应单个例子和整体结果。",
      "insight": "变化具体体现在：找对计算输入、补齐缺项，并在证据足够后结束检索。",
      "steps": [
        [
          "把真实任务和工具接起来",
          "研究模型负责计划、检索和收集证据，另一个模型负责生成报告。团队合并部分工具、缩短说明，并用辅助模型压缩长网页结果与历史记录，避免小模型查到一半就装不下上下文。"
        ],
        [
          "先模仿完整的查资料过程",
          "第一阶段由 Kimi K3 对 968 道合成题各做两次研究，选较好的过程用于微调，让学生学会正确调用工具和交付证据。第二阶段让同一个教师对每道题采用八种研究策略，按评分要求选出最好的一条学习；例如，查季度指标优先用财报表格，查近期市场事件则先搜索网页。"
        ],
        [
          "再比较好路线和差路线",
          "离线强化学习阶段使用已经生成的八条教师轨迹。对同一道题，把每条轨迹的得分与这组轨迹的平均分比较，用差异给训练提供反馈。奖励看的是完成了多少评分要求，而不只是答案写得流不流畅。"
        ],
        [
          "最后让模型面对自己的错误",
          "在线强化学习阶段，让学生模型对每道训练题自己尝试八次，再评分和更新。团队用独立的 100 道内部验证题运行完整流程、挑选训练版本；最终的 220 道公开评测题没有用于训练。"
        ]
      ],
      "example": {
        "title": "同一道财务题，查得多不一定查得对",
        "text": "基础模型调用 5 次工具，评分要求满足率为 30.8%；学完最佳教师示范后，调用 23 次，升到 64.6%。随后离线强化学习版本用了 48 次调用，反而只有 60%；最后的在线强化学习版本用了 30 次，达到 92%。最后一个版本能按名称索取正确指标、补齐季度并检查异常。原文这个例子说明，进步要看搜到了什么、检查了什么，不能只数调用次数。",
        "label": "原文实测"
      },
      "evidence": "团队在 FrontierFinance 的 220 道公开题上报告：基础模型 42.5%，合成示范微调后 51.4%，最佳策略示范微调后 54.8%，离线强化学习后 57.5%，在线强化学习后 58.9%。这里的百分比是评分要求的满足比例，不是整道题完全答对的比例。最终流程平均每题约 0.61 美元，其中研究模型约 0.04 美元，其余用于工具及辅助模型；平均耗时约 282 秒。",
      "limits": "训练和评测使用团队的金融工具环境，过程还包含检索、记录压缩和报告生成等组件。另一个“更深入研究”配置使用同一训练后的模型，达到 60.6%，但每题成本升至 1.83 美元；这部分提升来自更多测试时研究计算。",
      "transfer": "做自己的研究 Agent 时，可以先选一道有代表性的完整任务，把所需数据、工具调用、缺失信息和最终评分逐项留下来。训练前后沿着同一道题比较，才容易看清它是学会了选工具、补证据，还是仅仅查得更久。",
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
      ],
      "publishedOn": "2026-10-28"
    },
    {
      "id": "model-soups",
      "cat": "merge",
      "topic": "模型选择与合并",
      "symbol": "∪",
      "method": "Model Soups",
      "year": "ICML 2022 · 经典回看",
      "time": 5,
      "title": "调参剩下的模型，还能合成一个更好的模型",
      "desc": "把同一起点的微调模型平均起来，用验证集决定谁值得加入。",
      "scenario": "同一个预训练模型，用不同学习率、训练轮数和数据增强微调出多个版本。",
      "bottleneck": "只选验证集第一名会丢掉其他训练结果；部署多个模型再综合预测，又会增加每次推理的开销。",
      "lead": "同一个预训练模型，用不同学习率和训练轮数微调后，通常只留下验证集成绩最好的版本。Model Soups 尝试利用其余结果：把候选模型逐个加入参数平均，验证成绩不下降就保留，最终仍只部署一个模型。\n\n论文的 ViT-G 图像分类实验中，最佳单模型的 ImageNet 准确率为 90.78%，合并后为 90.94%。这种做法需要验证集来挑选参与合并的模型。",
      "insight": "一个模型单独排名靠后，加入平均后却可能有帮助。",
      "steps": [
        [
          "共同起点让参数有机会直接对应",
          "候选使用相同结构、同一个预训练初始化，在目标任务上分别微调。论文观察到，这类模型之间常有一片误差较低的区域，因此参数取平均后仍可能表现良好。"
        ],
        [
          "先排序，再逐个试",
          "按独立验证集准确率从高到低排列候选，以最好模型起步。设已经接纳 k 个模型，平均权重为 θs；加入候选 θc 时，试算 (kθs + θc)/(k+1)。"
        ],
        [
          "用合并结果决定是否接纳",
          "在验证集上评测这个新平均值，成绩不下降就接纳，否则保留原平均值。每个被接纳的模型最终权重相同，不是每次都把新旧模型各取一半。"
        ],
        [
          "部署一次平均后的结果",
          "模型数量和单次推理结构保持不变。此前的多次微调和选择时的验证仍要付出成本；节省的是部署多个模型、逐个预测的额外开销。"
        ]
      ],
      "example": {
        "title": "单独更弱的候选，为什么仍可能入选？",
        "label": "教学算例",
        "text": "假设 A、B、C 的验证准确率分别为 82%、81%、80%。先保留 A；平均 A 与 B 后得到 83%，接纳 B。接着尝试 (A+B+C)/3，得到 82.5%，就拒绝 C，最终保留 (A+B)/2。这里的数字是教学假设：B 单独比 A 差，却能改善合并结果；C 是否有用，也要实际评测平均后的模型才能知道。"
      },
      "evidence": "原论文 Table 1：ViT-G 的最佳调参模型在 ImageNet 上为 90.78%，贪心合并为 90.94%；五个分布变化测试集的平均准确率从 84.68% 到 85.02%。§2 的选择验证集与训练集、最终测试集分开。",
      "limits": "贪心合并要使用验证数据。共同预训练起点是这里的重要条件；学习率过大、微调走得太远的候选可能拉低平均结果，因此论文没有把所有模型一律加入。",
      "transfer": "设计合并实验时，除了问“哪个单模型最好”，还可以比较“哪个候选加入后最有帮助”。把单模型质量与合并边际收益分开观察，有助于发现选择标准漏掉的互补关系。",
      "take": "最终部署一个模型，也能利用多次微调的结果；关键是挑选能改善平均结果的候选。",
      "counter": {
        "q": "这是不需要数据的合并方法吗？",
        "a": "参数求平均本身不读数据，但本文的贪心候选选择要反复查看验证集。描述整体方法时，需要把这两步一起交代。"
      },
      "sources": [
        [
          "原论文 · ICML 2022；方法 §2、Table 1",
          "https://proceedings.mlr.press/v162/wortsman22a/wortsman22a.pdf"
        ],
        [
          "作者代码",
          "https://github.com/mlfoundations/model-soups"
        ]
      ],
      "classic": true
    }
  ],
  "freshnessPolicy": {
    "preferredDays": 30,
    "fallbackDays": 60,
    "classicOnHomepage": false,
    "updatedOn": "2026-11-02"
  }
};
