window.FEED_DATA = [
  {
    "id": "anthropic-rust-production-parity-20261127",
    "source": "Anthropic",
    "avatar": "A",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方技术分享",
    "kind": "official",
    "topic": "团队内部工作",
    "tags": [
      "团队内部工作"
    ],
    "date": "2026-11-25",
    "time": "11月25日 · 官方文章，本期收录",
    "title": "Anthropic重写接口：测试几乎全过，真实请求却只有四分之一对得上",
    "summary": "Anthropic把连接Claude的Messages API从Python迁到Rust，11月25日公开了过程。Claude约一周就写出了核心流程初版，但4月时，新版本虽通过约98%的测试，与旧系统对比的线上输入却只有约四分之一完全一致。团队还在迁移后的测试里发现了100多处被放宽的检查。\n\n他们改用真实流量逐步对照新旧程序。模型只调用一次，同一份生成结果交给两边处理，避免把模型回答的随机变化误判为程序错误。系统记录最早在哪一步出现差异、长度差多少，再让AI在沙盒中构造复现样本、修代码。\n\n人工审核仍拦下过一次“测得过、用不了”的修复：AI把本应从内部服务读取的工具说明复制进文件，虽然输出对齐了，正式上线仍得重做。9月流量迁移后，公司报告每请求CPU用量约降70%；经验的关键是，旧系统能帮助检查行为，人还要判断改法是否适合长期维护。",
    "body": "最初只把输出解析改成Rust，每个词元仍需跨两种语言三次，CPU节省约8%—10%。团队随后迁移整个请求路径。\n\n为保护客户内容，排查记录保留差异的位置、长度等特征，不把客户原文交给修复助手。图中的具体字节和文本是原文教学示例。\n\nCPU变化取自一个区域；原文另报首字等待中位数约减少20%，统计的是较短时间段内客户的Claude Code请求。两个指标的统计群体不同。",
    "detailLabel": "怎样定位差异，以及性能统计范围",
    "links": [
      {
        "label": "原文与完整条件",
        "url": "https://www.anthropic.com/research/migrating-api-to-rust"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-27/rust.png",
        "alt": "新旧接口逐阶段对照，模型只调用一次，输出重放给Rust处理",
        "caption": "Anthropic原文流程图。下方字节位置与文本为教学示例；记录差异位置而非客户原文。",
        "credit": "Anthropic / 官方博客",
        "sourceUrl": "https://www.anthropic.com/research/migrating-api-to-rust",
        "originalUrl": "https://assets.claude.com/32dee017ccc9f7496eb80f0b926bf655215edb83.png?w=3840&q=75&fm=webp&fit=max",
        "placement": "inline",
        "width": 2400,
        "height": 1552
      }
    ],
    "comments": [],
    "commentStatus": "已读Reddit转帖与4条可见回复；转帖主体有截断，回复未提供足够增量，本期不摘录。",
    "highlights": {
      "summary": [
        "模型只调用一次",
        "旧系统能帮助检查行为，人还要判断改法是否适合长期维护"
      ],
      "body": []
    },
    "issueDate": "2026-11-27"
  },
  {
    "id": "vllm-nvme-cache-segment-20261127",
    "source": "AMD与Embedded LLM",
    "avatar": "A",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方技术分享",
    "kind": "official",
    "topic": "公司部署与成本",
    "tags": [
      "公司部署与成本"
    ],
    "date": "2026-11-23",
    "time": "11月23日 · 官方文章，本期收录",
    "title": "推理缓存放进固态硬盘后，vLLM先改小了“成批删除”的文件",
    "summary": "多轮编程助手会反复发送长上下文。服务器若保留以前计算出的KV缓存，就能少算重复内容；显存装不下时，通常还要借用主机内存。AMD与Embedded LLM在vLLM中试了另一条路：把大部分缓存放到NVMe固态硬盘。\n\n最初硬盘方案明显落后。一个原因是缓存按文件回收：默认每个文件4 GiB，删除旧内容时，夹在同一文件里的有用缓存也一起丢了。他们把文件缩到256 MiB，让回收更细。\n\n调整后，在16张MI355X、Kimi-K3、AgentX多轮请求回放中，同为1.8 TB的硬盘缓存池与内存缓存池，在48、70、96路并发下的吞吐差距都在1%以内。忙碌服务可以在请求排队时提前读缓存，因此硬盘读得慢，没有等比例变成GPU等待。\n\n这套方案仍留约80 GB内存做读写缓冲。部署还要算硬盘写入寿命：每次新计算的缓存都会写盘，容量够放，不等于硬盘能长期承受这种写入量。",
    "body": "图中吞吐统计输入与输出词元，并包含命中的输入缓存，按全部16张GPU平均；不是单路生成速度。\n\n另一组4.6 TB硬盘池对1 TB内存池的高并发测试有5.1倍差距，但容量也变了，不据此说硬盘比内存快五倍。原文成本估算按标价和长期负载计算，未包含电力、机架和宿主服务器。",
    "detailLabel": "吞吐怎么算，为什么不能照搬“五倍”",
    "links": [
      {
        "label": "原文与完整条件",
        "url": "https://vllm.ai/blog/2026-11-23-skip-the-dram-tier"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-27/nvme.png",
        "alt": "1.8 TB硬盘缓存池与内存池在三档并发下吞吐接近",
        "caption": "官方同容量对照：Kimi-K3、16张MI355X、AgentX回放；蓝色方案保留64 GB写缓冲。",
        "credit": "AMD与Embedded LLM / 官方博客",
        "sourceUrl": "https://vllm.ai/blog/2026-11-23-skip-the-dram-tier",
        "originalUrl": "https://vllm.ai/blog-assets/figures/2026-11-23-skip-the-dram-tier/fig1-same-size.png",
        "placement": "inline",
        "width": 1344,
        "height": 1003
      }
    ],
    "comments": [],
    "commentStatus": "原文无可读取评论区。",
    "highlights": {
      "summary": [
        "把文件缩到256 MiB，让回收更细",
        "容量够放，不等于硬盘能长期承受这种写入量"
      ],
      "body": []
    },
    "issueDate": "2026-11-27"
  },
  {
    "id": "miles-exact-arithmetic-cost-20261127",
    "source": "RadixArk Miles团队",
    "avatar": "R",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方技术分享",
    "kind": "official",
    "topic": "公司训练实践",
    "tags": [
      "公司训练实践"
    ],
    "date": "2026-11-23",
    "time": "11月23日 · 官方文章，本期收录",
    "title": "让训练和生成算出完全相同的概率，Miles公开了适配方法与代价",
    "summary": "此前我们介绍过：模型用一套程序生成答案、另一套程序训练，即使参数相同，也可能算出不同概率。这会干扰训练对样本权重的调整。Miles团队这次把消除这种差异的办法扩展到多种DeepSeek、GLM和Qwen模型，并公开了速度代价。\n\n他们统一底层计算规则，包括矩阵分块、加法顺序，以及多个专家结果的合并顺序。生成端无论怎样拼批次、分段读输入或命中缓存，训练端都按相同规则重新计算；相同参数下，每个词元的概率可以逐位一致。\n\n在64张H200的完整训练步骤计时中，按处理词元数量归一后，DeepSeek-V4-Flash和GLM-5.2的吞吐分别为普通实现的90%和93%。这相当于为计算一致性付出一定速度，换来更清楚的排查依据：异步训练若还有概率差异，就能把注意力转向模型参数更新的滞后。\n\n当前方案两端的张量并行度为1，也就是不把同一矩阵运算拆到多卡。发布文称代码、测试和启动配方将作为分支开放；实际接入前还需核对这些发布物。",
    "body": "上述计时将学习率设为0，从同一检查点与提示词开始，跳过预热后统计第1—5步，包含生成、训练、权重同步和等待。每种配置一次运行，两个模型处理的词元数量不完全相同，因此不用单步秒数替代词元吞吐。\n\n异步训练仍需处理旧权重生成的样本。Qwen3.6实验中，取消样本权重上限后，完全对齐计算还不够：同时重放生成时选中的专家，曲线才保持平稳。这里消除的是底层计算差异，不是所有训练滞后问题。",
    "detailLabel": "完整步骤的计时条件与异步训练",
    "links": [
      {
        "label": "原文与完整条件",
        "url": "https://miles.radixark.com/blogs/true-on-policy-rl-bit-exact-rollout-and-training-with-sglang-and-miles"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-27/miles.png",
        "alt": "SGLang与Miles共用计算规则，DeepSeek-V4-Flash100步训练的概率差异为零",
        "caption": "官方概览图。右图测的是训练与生成的对数概率差异，不是任务正确率。",
        "credit": "RadixArk Miles团队 / 官方博客",
        "sourceUrl": "https://miles.radixark.com/blogs/true-on-policy-rl-bit-exact-rollout-and-training-with-sglang-and-miles",
        "originalUrl": "https://miles.radixark.com/blogs/true-on-policy/top-overview.png?dpl=dpl_9gBbzZNxTGqYMd4y43bT5EvmZn5V",
        "placement": "inline",
        "width": 2040,
        "height": 850
      }
    ],
    "comments": [],
    "commentStatus": "原文无可读取评论区。",
    "highlights": {
      "summary": [
        "统一底层计算规则",
        "为计算一致性付出一定速度"
      ],
      "body": []
    },
    "issueDate": "2026-11-27"
  },
  {
    "id": "magi-posttraining-capability-tradeoff-20261127",
    "source": "Sand.ai",
    "avatar": "S",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方技术分享",
    "kind": "official",
    "topic": "训练与评测取舍",
    "tags": [
      "训练与评测取舍"
    ],
    "date": "2026-11-24",
    "time": "11月24日 · 官方文章，本期收录",
    "title": "MAGI-2画面更精致后，团队发现一些原有能力反而更难叫出来",
    "summary": "Sand.ai发布480B参数的视频模型MAGI-2，同时分享了一项训练观察：把预训练模型继续用数千段精选视频微调后，画面质感明显改善，但此前能观察到的视觉推理、自动补全叙事和跨语言表现，变得更难触发。\n\n团队曾关闭外部语言模型的提示词改写，直接测试预训练检查点。例如，只给人物与场景参考、几个情节节点，模型会自行补出过渡动作和镜头。微调后，这类表现减弱；团队推测，偏重美观的小数据集让输出更集中于电影式画面。这是作者对观察的解释，文中没有给出这些能力退步的系统成功率表。\n\n因此，他们准备把规则遵循、事件因果和多种输入信息的结合能力，放到画面质量之外单独评估。对训练团队，这提醒了一件具体的事：当优化目标越来越集中时，要保留一组检查，看看原来能做的事是否还在。",
    "body": "MAGI-2支持最长30秒、1080p、25帧每秒的音视频生成。官方还介绍了多头专家架构：先按固定分工交换输入切片，再在本地选择专家，减少跨设备通信随专家选择变化而带来的波动。\n\n本条主线是后训练取舍，未将演示中的数独或叙事个例写成普遍可靠的推理能力。发布时详细技术报告及开源仍为后续计划。相关动态图演示请看原文。",
    "detailLabel": "模型能力与原文演示的范围",
    "links": [
      {
        "label": "原文与完整条件",
        "url": "https://sand.ai/blog/magi-2/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "原文无可读取评论区。",
    "highlights": {
      "summary": [
        "画面质感明显改善",
        "看看原来能做的事是否还在"
      ],
      "body": []
    },
    "issueDate": "2026-11-27"
  },
  {
    "id": "cloudflare-search-for-agents-20261127",
    "source": "Cloudflare",
    "avatar": "C",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方技术分享",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-25",
    "time": "11月25日 · 官方文章，本期收录",
    "title": "Cloudflare给网站加了一个可被AI自动发现的搜索入口",
    "summary": "AI查网站文档时，往往要先找搜索框，或者一页页点进去读。Cloudflare推出测试版Search for Agents：站主在控制台开启后，系统开始索引网站内容，并在页面加入入口说明，让支持发现机制的助手直接搜索本站。\n\n例如，助手可以提交“怎样验证webhook签名”，取回相关内容的Markdown文本，再由自己的模型整理答案。服务返回的是检索内容，不另生成一份AI答案，便于助手沿着原始材料继续工作。\n\n各套餐均可开启，使用量仍受AI Search的计费与套餐限额约束。它需要站主启用并完成索引，也需要助手识别这个入口。",
    "body": "公开路径为/.well-known/search，支持GET与HTTP QUERY请求。站主可在自动创建的AI Search实例内调整可配置项。",
    "detailLabel": "入口如何调用",
    "links": [
      {
        "label": "原文与完整条件",
        "url": "https://developers.cloudflare.com/changelog/post/2026-11-25-search-for-agents/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "原文无可读取评论区。",
    "highlights": {
      "summary": [
        "服务返回的是检索内容"
      ],
      "body": []
    },
    "issueDate": "2026-11-27"
  },
  {
    "id": "glm54-repeat-middle-layers-20261124",
    "source": "智谱",
    "avatar": "智",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方技术分享",
    "kind": "official",
    "topic": "公司训练与部署实践",
    "tags": [
      "公司训练与部署实践"
    ],
    "date": "2026-11-23",
    "time": "11 月 23 日 · 官方发布",
    "title": "GLM-5.4 让中间的28层再算一遍，用更深的计算提升能力",
    "summary": "智谱11月23日发布GLM-5.4。这次最值得关注的变化，是模型内部怎样计算：通常一份输入会依次经过各层，每层算一次；GLM-5.4让中间28层用同一套参数连续计算两遍，第二遍接着第一遍的结果往下处理。模型因此多做了一轮计算，却不必再存一套同样大的权重。\n\n把已有模型直接改成这样，会遇到两个问题。第一遍留下的数值可能在下一遍越放越大，影响后续层；智谱加了控制更新幅度的“门”，让模型学会每次改多少。第二个问题是长对话的缓存：如果两遍各存一份完整历史，显存会明显增加。现在第二遍复用第一遍选出的历史缓存，只额外保留自己最近一小段的新缓存。\n\n团队先在约300亿参数的30B模型上做了对照：参数数量相同，总训练计算量增加约10%；在可处理约20万词元长输入的监督微调之后，开启思考模式测试时，GPQA-Diamond科学问答得分从47.58升到56.26，平均输出长度减少11.7%。这是小规模对照的结果，体现的是改造架构并继续训练后的收益；生成每个词元时多算了一轮，因此少输出一些字不一定就能更快完成。\n\nGLM-5.4已提供Coding Plan、ZCode和网页聊天入口。发布时API仍标为即将开放，权重计划在安全加固后开放；官方也提到它有时会进入过长的思考过程。",
    "body": "循环部分使用第27至54层，两次共享权重；第二遍沿用第一遍的稀疏注意力索引，避免重新做一遍检索。架构图还给出了第二遍独立保留的128词元滑动窗口。\n\n官方报告线上生成速度在低峰时最高200词元/秒、高峰时70—80词元/秒，但没有给出足以与其他模型公平比较的完整服务负载配置，因此正文不把这两个数字作为加速结论。30B对照表还包含数学、长上下文和指令遵循任务，完整原表如下。",
    "detailLabel": "缓存如何复用，以及30B对照原表",
    "links": [
      {
        "label": "官方发布与架构说明",
        "url": "https://z.ai/blog/glm-5.4"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-24/glm-loop.png",
        "alt": "GLM-5.4循环架构：第27至54层共享权重计算两遍，第二遍复用稀疏历史缓存并保留自己的局部缓存",
        "caption": "官方架构示意。蓝色为计算模块，绿色箭头表示缓存与索引复用；这里展示的是结构，不是速度测量。",
        "credit": "智谱 / GLM-5.4官方博客",
        "sourceUrl": "https://z.ai/blog/glm-5.4",
        "originalUrl": "https://z-ai-bj.oss-cn-beijing.aliyuncs.com/prompts-rich-media-resources/5.4-blog/image.png",
        "placement": "inline",
        "width": 1280,
        "height": 960
      },
      {
        "src": "assets/2026-11-24/glm-ablation.png",
        "alt": "30B模型同参数对照：GPQA-Diamond为47.58对56.26，平均输出减少11.7%",
        "caption": "官方30B对照原表：总训练计算量约多10%，200K长上下文监督微调后、开启思考模式；不要当成750B旗舰的成绩。",
        "credit": "智谱 / GLM-5.4官方博客",
        "sourceUrl": "https://z.ai/blog/glm-5.4",
        "originalUrl": "https://z-ai-bj.oss-cn-beijing.aliyuncs.com/prompts-rich-media-resources/5.4-blog/img_v3_0217n_2d1a655c-5bce-4b3f-9115-2ad7c397ce5g.png",
        "placement": "details",
        "width": 1789,
        "height": 729
      }
    ],
    "comments": [],
    "commentStatus": "原文未提供可读取的评论区。",
    "highlights": {
      "summary": [
        "中间28层用同一套参数连续计算两遍",
        "少输出一些字不一定就能更快完成"
      ],
      "body": []
    },
    "issueDate": "2026-11-24"
  },
  {
    "id": "openai-fixed-code-loss-20261124",
    "source": "OpenAI",
    "avatar": "O",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方技术分享",
    "kind": "official",
    "topic": "公司评测实践",
    "tags": [
      "公司评测实践"
    ],
    "date": "2026-11-22",
    "time": "11 月 22 日 · 官方文章，本期补读",
    "title": "OpenAI公开一把沿用多年的尺子：在固定代码样本上预测下一个词",
    "summary": "模型考试不断换题，旧榜单又容易被做满分，怎样看清几代基础模型是否真的进步？OpenAI首席科学家Jakub Pachocki公开了一项内部长期测量：拿一份固定的、留作测试的内部代码样本，让模型预测下一个词元，也就是模型处理文本的小片段。越能给实际出现的片段分配较高概率，预测误差就越低。\n\n他们把这个误差记作交叉熵，也叫对数困惑度。按同一份样本，GPT-3.5约为0.99，GPT-4约为0.91，近期模型已低于0.8。Pachocki希望其他实验室也提高透明度，逐步建立可共同讨论模型进步和安全边界的测量方法。\n\n这对研究工作的直接价值，是保留一项跨版本不轻易变动的检查，再看它怎样对应实际任务。它测的是预训练形成的预测能力；让同一个模型多写几步推理，可能大幅改善答题，却不会因此降低这里的数值。比较模型合并或推理改进时，仍要把实际答题效果和计算开销另外测出来。",
    "body": "不同实验室的测试材料和训练数据不同，文章没有给出一条可直接套在所有模型上的分数线。作者还指出，用代码预测衡量GPT-2、GPT-3这类早期模型并不合适，因为它们的训练内容与现代模型不同。\n\n文中对未来更低误差区间的能力变化是作者预测，本期不把它当成已知门槛。关于2026年的进步，作者将主要原因归于长期研究和算力投入，只把较小部分归于自动化。",
    "detailLabel": "这把尺子适用于什么比较",
    "links": [
      {
        "label": "原文与测量口径",
        "url": "https://openai.com/index/perplexity-and-intelligence/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "原文未提供可读取的评论区。",
    "highlights": {
      "summary": [
        "保留一项跨版本不轻易变动的检查",
        "实际答题效果和计算开销另外测出来"
      ],
      "body": []
    },
    "issueDate": "2026-11-24"
  },
  {
    "id": "uni3sim-schedule-before-hardware-20261124",
    "source": "Uni³Sim",
    "avatar": "U",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开源项目 · 官方文档核对",
    "kind": "official",
    "topic": "推理工具与工作方式",
    "tags": [
      "推理工具与工作方式"
    ],
    "date": "2026-11-24",
    "time": "11 月 24 日 · 小红书线索，核对公开项目",
    "title": "Uni³Sim把请求排队也放进仿真，先看整套推理服务会卡在哪里",
    "summary": "给推理服务换一张更快的卡，用户未必能更早收到回答：CPU准备下一批请求、显存搬数据、卡之间通信，都可能让计算设备等着。小红书作者Purshow今天介绍的Uni³Sim，试图在真机部署前，把这些环节放进同一条时间线里比较。\n\n项目由清华NICS-EFC团队公开。它接收请求负载、模型结构、硬件和部署配置，估计计算与数据传输需要多久，再把预计完成时间交回负责排队的调度器，由它决定下一批处理谁。因此，前一批变快后，后面怎样排队、怎样凑成一批，也会随之改变。\n\n开发者可以先跑不需要GPU和模型权重的示例，查看排队、执行和等待发生在哪里。这个示例只验证仿真流程能走通；要据此比较真实硬件，仍需使用项目支持并校准过的硬件与框架配置。它更适合先筛选值得上真机验证的方案。",
    "body": "官方仓库提供vLLM和SGLang相关路径，具体支持范围随版本、模型和硬件而变化。仿真不会真的加载权重生成答案，因此请求长度、前缀复用和路由等行为必须由输入或明确假设提供。",
    "detailLabel": "输入要准备什么，哪些结果还需真机核对",
    "links": [
      {
        "label": "官方仓库",
        "url": "https://github.com/thu-nics/uni3sim"
      },
      {
        "label": "项目说明",
        "url": "https://thu-nics.github.io/uni3sim-website/"
      },
      {
        "label": "框架与支持范围",
        "url": "https://github.com/thu-nics/uni3sim/blob/main/docs/serving_system.md"
      },
      {
        "label": "发现线索的原帖",
        "url": "https://www.xiaohongshu.com/explore/6b055d460000000025011620"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "已读小红书正文；评论接口返回空列表，本期未摘录评论。",
    "highlights": {
      "summary": [
        "把这些环节放进同一条时间线里比较",
        "后面怎样排队、怎样凑成一批，也会随之改变"
      ],
      "body": []
    },
    "issueDate": "2026-11-24"
  },
  {
    "id": "tencent-moe-sparsity-tradeoff-20261124",
    "source": "腾讯Hy团队",
    "avatar": "腾",
    "avatarClass": "openai",
    "channel": "reddit",
    "evidence": "团队成员公开问答",
    "kind": "interview",
    "topic": "团队训练经验",
    "tags": [
      "团队训练经验"
    ],
    "date": "2026-11-20",
    "time": "11 月 20 日 · Reddit问答，本期补读",
    "title": "腾讯Hy团队解释：多放一些专家，与少调用一些专家，是两笔不同的账",
    "summary": "腾讯Hy团队在Reddit公开问答中，被问到Hy4 Flash为什么不再减少每次参与计算的参数。问题背后是一种常见想法：MoE模型每次只调用部分“专家”，那是不是调用得越少就越划算？这里的专家，就是分别保存一部分权重、按输入选择参与计算的网络模块。\n\n团队成员edwardbai说，他们做过不同稀疏程度的规模实验：固定每次参与计算的参数量，再增加可供选择的专家，能提高计算效率。但如果专家总数不变，只减少每次参与的参数，做的计算也随之减少；他预期模型质量会明显受损。前者保留每次计算量、增加模型的选择余地；后者直接缩减了每次计算量。\n\n对部署选型，关键是把“需要存下多少权重”和“每个词元要算多少”分开看。前一种改法可能更吃显存，后一种可能减少计算却损失效果。比较几个MoE模型时，只看总参数或激活参数中的一个，都会漏掉另一边的代价。",
    "body": "提问者举出了固定总参数、进一步降低激活参数的例子。团队回复确认做过“固定激活参数、改变稀疏程度”的实验，但对提问中的更低激活配置给出的是质量可能下降的判断，没有附上这些配置的实测表。\n\n本期只摘录参与名单中可对应到的团队账号。普通用户关于内部测试胜出的留言没有公开测试集或成绩表，未作为独立结果收录。",
    "detailLabel": "团队实际测过什么，哪些仍是预期",
    "links": [
      {
        "label": "团队问答与完整上下文",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1y15w4a/tencent_hy_team_shunyu_yao_here_ask_us_anything/"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "aiden_agent",
        "role": "原帖参与团队成员",
        "date": "2026-11-24 · 读取时间（北京时间）",
        "text": "谈及团队接下来的重点，他说会先打牢模型基础、提高模型能力，并与产品配合改善使用体验；自我改进能力仍处于早期，已有内部评估。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1y15w4a/tencent_hy_team_shunyu_yao_here_ask_us_anything/",
        "linkLabel": "原帖入口",
        "evidence": "团队自述",
        "mode": "翻译摘编",
        "context": "腾讯Hy团队成员。回复Infinite-Local5435关于下一代改进方向和自主研究能力的提问。"
      },
      {
        "author": "lydellhuang",
        "role": "原帖参与团队成员",
        "date": "2026-11-24 · 读取时间（北京时间）",
        "text": "对模型文风过于公式化的反馈，他表示团队也注意到了，正在改善；与训练目标有关是他们的猜测。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1y15w4a/tencent_hy_team_shunyu_yao_here_ask_us_anything/",
        "linkLabel": "原帖入口",
        "evidence": "团队反馈与解释",
        "mode": "翻译摘编",
        "context": "腾讯Hy团队成员。回复dwrz对模型写作风格的提问；未披露具体改法或改进实验。"
      }
    ],
    "commentStatus": "已读正文与当前可见回复；折叠的更多回复未逐一展开。精选2条团队补充，时间按读取时间标注，链接为原帖入口。",
    "highlights": {
      "summary": [
        "固定每次参与计算的参数量",
        "需要存下多少权重"
      ],
      "body": []
    },
    "issueDate": "2026-11-24"
  },
  {
    "id": "vllm-cache-store-in-parts-20261123",
    "source": "vLLM",
    "avatar": "v",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开源项目 · 已合并修复",
    "kind": "official",
    "topic": "推理与部署实践",
    "tags": [
      "推理与部署实践"
    ],
    "date": "2026-11-22",
    "time": "11 月 22 日 14:20 · 北京时间合并",
    "title": "内存装不下整段缓存，vLLM 改成先存得下的部分",
    "summary": "处理很长的对话时，推理服务可以把读过输入后留下的中间计算结果存到磁盘，下次复用，少算一遍。数据通常先经过一块内存，再送到磁盘，因此这块内存本应只需承担中转工作。\n\nvLLM 却有一个“全放进去才算成功”的问题：如果某次要存的数据比中转内存大，程序就整批拒收。生成下一个文本片段时，程序又拿同一批缓存重试，仍然放不下。于是日志不断报错，磁盘里也没有留下可复用的缓存。\n\n11月22日合并的修复，改成先存能放下的前面几块，后面的块等空间腾出来再继续。在作者的一组测试里，长输入产生119块缓存，中转内存只能装13块；修复后分10次传输，119块都到达了磁盘。原来401次存储失败提示降到了0。\n\n这类问题值得做长上下文推理的团队注意：给磁盘缓存多配空间，并不能解决中转步骤拒绝接收的问题。要确认缓存真正起作用，还得看数据有没有存进去，以及下一次能不能读回来。",
    "body": "这组测试使用一张RTX PRO 6000 Blackwell、Qwen3-0.6B，输入7663个词元、最多生成400个词元，每块64个词元。修复前的数字来自较早的main；修复后在当前修改版重跑。作者还与足够大的中转内存对照，确认分批写入与一次写入的文件逐字节一致。请求结束时如果仍有未存完的部分，不会无限继续排队。\n\n同一天的另一项修复处理“存下了却用不上”：ARC缓存淘汰策略可能先删掉复用的前缀，却留下后来新增的后缀；缺少前缀，后缀也无法命中。修改把这些复用块加入同一请求的位置排序，内存紧张时优先淘汰靠后的部分。作者在GB10、SmolLM2-135M、四条错峰请求的三轮配对测试中，看到重放请求重新命中1664个词元，一词元回复延迟中位数从268.3降至133.9毫秒；并发生成总时长基本不变。这是特定缓存压力下的结果。",
    "detailLabel": "测试设置，以及同日修复的缓存淘汰问题",
    "links": [
      {
        "label": "分批存储修复与测试",
        "url": "https://github.com/vllm-project/vllm/pull/66719"
      },
      {
        "label": "前缀保留修复与测试",
        "url": "https://github.com/vllm-project/vllm/pull/69110"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "MikeWang0316tw",
        "role": "原帖作者 · 问题报告人",
        "date": "2026-11-10 12:32 北京时间",
        "text": "他在4台GB10上运行DeepSeek-V4.1-Flash，测试了自己的分批存储修改。不过，要把超过中转内存容量的缓存重新读回来，还得另加一个读取侧修复；只修写入这一边并不够。",
        "url": "https://github.com/vllm-project/vllm/issues/66696#issuecomment-6759047098",
        "linkLabel": "评论直达",
        "evidence": "个人部署经验",
        "mode": "翻译摘编",
        "context": "合并前的历史讨论。报告人运行的是本地修改，不是本次合并分支；他说明长请求缓存能重新加载，还依赖针对#62931的本地读取修改。"
      }
    ],
    "commentStatus": "已读问题原文、2条问题讨论和3条修复讨论，核对ARC最终代码；精选1条关于读取侧条件的补充。",
    "highlights": {
      "summary": [
        "先存能放下的前面几块",
        "119块都到达了磁盘"
      ],
      "body": []
    },
    "issueDate": "2026-11-23"
  },
  {
    "id": "meituan-check-query-before-report-20261123",
    "source": "美团技术团队",
    "avatar": "美",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "公司评测实践",
    "tags": [
      "公司评测实践"
    ],
    "date": "2026-11-17",
    "time": "11 月 17 日 · 近期补读",
    "title": "美团商家助手交出了完整报告，却查成了今天的数据",
    "summary": "商家让AI检查“昨天的广告投放有没有问题”，助手交来一份结构完整的报告。美团团队在任务抽检时沿着工具调用记录往回查，才发现它实际取的是今天的数据。只看最后那份报告，很容易把这次任务判为完成。\n\n团队把这个错误扩展成一组日期测试，覆盖今天、昨天、历史日期和周末。每次运行不仅检查报告有没有写出来，还检查查询参数是否对应商家的要求、报告结论是否来自实际返回的数据。日期参数等能精确比对的项目交给程序；报告是否忠实于业务数据等需要理解含义的部分，再让模型评分。\n\n评分程序本身也要改。早期规则强制要求“先查投放花费，再查预算”，但这两步互不依赖，交换顺序或同时执行都可以。团队后来只检查真正的先后依赖：两项数据都取到以后，才能判断预算是否触线。这样才不会把合理的执行方式判成错误。\n\n在这套检查下，团队把日期计算、解析和筛选等固定逻辑交给代码，业务分支和停止条件写进操作说明，让模型负责理解需求和组织流程。这个案例具体说明了评测怎样指导分工：先找到哪一步做错，再决定该改模型的说明，还是把那一步交给更确定的程序。",
    "body": "团队为每日巡检整理了六类、共41个评测场景，一部分从业务流程拆出，一部分来自实际错误。修改后沿用同一套任务重测，区分“多跑几次总能成功一次”和“每次都能做对”；文章报告稳定性仍是后续瓶颈。公开的优化幅度经过脱敏处理，本条不据此计算精确收益。\n\n另一个人工复核例子是：工具只说“投放消耗下降”，助手写成“投放效果变差”，模型评分却放行了。业务专家要求补足效果证据，随后把这个区别写进评分细则，并用历史样本重测。评测器少误判与助手少犯错，是两种需要分别验证的变化。",
    "detailLabel": "41个场景怎样维护，以及人工复核发现的另一类错误",
    "links": [
      {
        "label": "商家助手评测与优化原文",
        "url": "https://tech.meituan.com/2026/11/17/Agent-Evaluation-White-Paper-02.html"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-23/meituan-date.png",
        "alt": "美团巡检案例：要求昨日数据，工具却查询当日，报告完整仍判任务失败",
        "caption": "原文案例示意：上半部的报告看起来完整，下半部的执行记录显示查询日期错了一天，因此整个任务不通过。",
        "credit": "美团技术团队 / 图灵评测×商增",
        "sourceUrl": "https://tech.meituan.com/2026/11/17/Agent-Evaluation-White-Paper-02.html",
        "originalUrl": "https://p0.meituan.net/meituantechblog/5e8753fa68de80764228f33f7cb2961c448379.png",
        "placement": "inline",
        "width": 2172,
        "height": 1112
      },
      {
        "src": "assets/2026-11-23/meituan-path.png",
        "alt": "预算检查规则由固定线性顺序改成真实依赖，允许花费与预算并行查询",
        "caption": "原文规则修改：查询花费与预算可以并行，但判断预算是否触线必须等两者返回。",
        "credit": "美团技术团队 / 图灵评测×商增",
        "sourceUrl": "https://tech.meituan.com/2026/11/17/Agent-Evaluation-White-Paper-02.html",
        "originalUrl": "https://p1.meituan.net/meituantechblog/bd73d5f691a8bb50625bcbd91c563df8214304.png",
        "placement": "details",
        "width": 1394,
        "height": 718
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "实际取的是今天的数据",
        "只检查真正的先后依赖"
      ],
      "body": []
    },
    "issueDate": "2026-11-23"
  },
  {
    "id": "lambda-drafter-concurrency-tradeoff-20261123",
    "source": "xbill",
    "avatar": "x",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开发者实测",
    "kind": "opinion",
    "topic": "开发者测试与经验",
    "tags": [
      "开发者测试与经验"
    ],
    "date": "2026-11-19",
    "time": "11 月 19 日 · 近期补读",
    "title": "一人聊天时预测加速有效，48个请求一起跑时却拖慢了吞吐",
    "summary": "开发者xbill把Gemma 4 E2B放到AWS新支持GPU的Lambda函数上运行，测试了一种常用加速：让小模型先猜后面几个文本片段，再由主模型一起核对。猜得合适时，主模型一次就能接受多个片段，减少逐个生成的等待。\n\n在一张L4上，同样生成256个文本片段（词元），单个请求使用预测模型后，完成速度约为原来的1.63倍。但48个请求一起到来时，开启预测后的总吞吐只剩原来的0.63倍。这里的吞吐是所有请求每秒合计完成的输出量，不是某一个人的回复速度。\n\n这组测试说明，给少数人交互使用的配置，未必适合批量任务。作者在另一组EC2测试里没有看到同样的下降，但那里用的提示词、返回方式和计时位置都不同，下降究竟来自哪一环还没有查明。实际部署时，应按准备服务的并发量重新比较是否开启预测。",
    "body": "测试于11月18日至19日在us-east-1的一台g6.2xlarge上完成，单个执行环境，vLLM 0.33.0、4位QAT权重，预测长度为4。每个短输入使用不同前缀，避免复用输入缓存；关闭思考，贪心生成并强制输出256个词元。1.63和0.63是包含首批请求的中位数比值，计时包含桌面到云端的往返与调用路径。417次请求均成功返回，没有测试答案准确率或长输入。\n\nAWS于11月18日推出这项GPU支持。作者的第一次发布到可用花了484秒；标准处理程序会等整段答案完成后一次返回，没有逐字流式输出。下面的聊天截图展示的是另一次113词元回答及其往返耗时，不是正文256词元的对照实验。",
    "detailLabel": "并发测试的完整条件，以及聊天界面的返回方式",
    "links": [
      {
        "label": "开发者完整测试",
        "url": "https://dev.to/gde/serverless-gemma-4-e2b-on-a-lambda-gpu-function-with-googles-qat-weights-and-drafter-fh4"
      },
      {
        "label": "AWS功能发布",
        "url": "https://aws.amazon.com/blogs/aws/aws-lambda-now-supports-gpu-instances-for-event-functions-on-lambda-managed-instances/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-23/lambda-chat.jpg",
        "alt": "xbill的本地聊天界面通过Lambda调用Gemma，显示完整回复和往返耗时",
        "caption": "原文界面：这一条演示回答为113词元、往返0.63秒；标准处理程序整段返回，不能从这张图读出首词延迟。",
        "credit": "xbill / DEV Community",
        "sourceUrl": "https://dev.to/gde/serverless-gemma-4-e2b-on-a-lambda-gpu-function-with-googles-qat-weights-and-drafter-fh4",
        "originalUrl": "https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/47g9wjg7nob3705b15aa.jpg",
        "placement": "details",
        "width": 1504,
        "height": 733
      }
    ],
    "comments": [],
    "commentStatus": "已读原文2条评论；一条重复正文并带项目推广，一条询问冷启动而正文已有数字，不再摘录。",
    "highlights": {
      "summary": [
        "总吞吐只剩原来的0.63倍",
        "按准备服务的并发量重新比较"
      ],
      "body": []
    },
    "issueDate": "2026-11-23"
  },
  {
    "id": "vllm-large-offset-fix-20261122",
    "source": "vLLM",
    "avatar": "v",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开源项目 · 已合并修复",
    "kind": "official",
    "topic": "推理与部署实践",
    "tags": [
      "推理与部署实践"
    ],
    "date": "2026-11-21",
    "time": "11 月 21 日 15:52 · 北京时间合并",
    "title": "一次处理的数据太多，地址会算错：vLLM 合并了一项修复",
    "summary": "推理程序要从显存里找到某段输入对应的数据，通常先算它离存储起点有多远。vLLM 的一项修复发现：部分计算仍用32位整数算这个距离，数据规模够大时，结果会超过它能表示的范围，绕回一个错误的位置。\n\n这不只是答案算错。作者报告，在同一批请求一起计算时，错误地址可能指向另一条请求的中间数据。11月21日合并的修改，让相关乘法先用64位整数计算，再用结果访问显存，修改涉及模型内部几类计算，包括调整数值尺度，以及选择哪些专家模块参与运算。\n\n触发条件是单次底层计算处理的数据量足够大，不能把它直接理解成某个用户的对话长度。这项修复值得做批量推理的团队关注：扩大批次时，除了显存能否装下，还要检查原来默认“数字不会这么大”的地方。",
    "body": "这份修改8月提出，11月21日才合并，本期跟踪的是合并进展。作者给出的例子是每个词有8192个特征时，约52万个词对应的地址乘法会触及32位无符号整数范围；这描述单次计算的规模。最终差异包含三份CUDA文件，正文列出的AllSpark路径没有出现在最终差异中，因此本条不把它列为已修复范围。测试清单仍有未勾选项，讨论显示CI曾重试；本次核对了合并状态与代码，没有把它写成所有硬件测试均已通过。",
    "detailLabel": "触发规模、最终修改范围和测试记录",
    "links": [
      {
        "label": "已合并修复 · 代码与讨论",
        "url": "https://github.com/vllm-project/vllm/pull/53131"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "jperezdealgaba",
        "role": "原帖作者 · 修复提交者",
        "date": "2026-09-14 16:42 北京时间",
        "text": "修正地址计算后，还要让接收结果的索引变量保持64位；如果又存回32位变量，前面的修改就会失效。作者在审查回复中说明，已经补上这一步。",
        "url": "https://github.com/vllm-project/vllm/pull/53131#discussion_r4003515963",
        "linkLabel": "评论直达",
        "evidence": "代码审查回复",
        "mode": "翻译摘编",
        "context": "这是合并前的历史审查回复。自动审查先指出类型转换后又被截短的问题，提交者随后解释修正；最终差异可见专家选择路径的索引同步改为64位。"
      }
    ],
    "commentStatus": "已读6条行内审查和10条讨论记录；只选一条提交者回复，排除机器人重复提示与运行指令。",
    "highlights": {
      "summary": [
        "相关乘法先用64位整数计算",
        "扩大批次时"
      ],
      "body": []
    },
    "issueDate": "2026-11-22"
  },
  {
    "id": "aws-cache-traffic-before-buying-20261122",
    "source": "AWS",
    "avatar": "A",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "商业与成本账",
    "tags": [
      "商业与成本账"
    ],
    "date": "2026-11-20",
    "time": "11 月 20 日 · 近期补读",
    "title": "共享推理缓存值不值得买，AWS 先让工具拿真实流量算账",
    "summary": "一位律师反复询问同一份长合同，服务可能每次都重新处理整份输入。如果把这部分计算的中间结果存起来，下次就能接着用；让多台推理服务器共享这份缓存，还能减少请求换到另一台机器后的重复计算。\n\nAWS 新发布的部署助手，把“先算是否划算”放在配置机器之前。它用 KVTrace 记录真实请求产生的缓存事件，再把这些事件送进模拟程序，比较缓存容量不同时，能省掉多少重复计算。输入很短时，从缓存读取可能比重新算还慢，所以工具也会把这些没有收益的命中区分出来。\n\n最后要算的是少花了多少钱，而不只是命中了多少次。缓存机器本身要付费；省下GPU时间后，也只有减少服务器数量，或者让同一批机器处理更多请求，才能转成实际收益。AWS 建议采集覆盖一个完整工作日的代表性流量，再做容量选择。",
    "body": "KVTrace记录数据块的哈希和词元数量，不保存输入正文或词元编号；敏感内容仍应按文档配置哈希匿名化。部署流程还要检查不同服务器使用相同的模型、缓存格式与哈希设置。原文特别要求清掉本地缓存后，比较从共享缓存加载的两次运行输出：缓存命中正常，也可能因为数据布局不一致而生成错误答案。\n\n配图是合成流量生成的演示报告，采样窗口只有0.01小时。表中按月外推的金额不是客户账单，也不是完整服务的实测节省；它展示的是如何比较容量、剔除无收益命中并提醒延长采样。",
    "detailLabel": "上线前怎样核对答案，以及如何读这张演示报告",
    "links": [
      {
        "label": "官方流程与演示",
        "url": "https://aws.amazon.com/blogs/machine-learning/cut-self-hosted-llm-cost-and-latency-with-the-distributed-kv-caching-agent-skill/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-22/aws-cache.png",
        "alt": "KVTrace演示报告按缓存容量列出命中率、节省计算量和外推成本",
        "caption": "AWS原文演示：增加容量不一定按比例增加收益。报告同时列出没有收益的命中，并提醒采样过短、月度金额只是粗略外推；这是合成流量，不是客户实测账单。",
        "credit": "AWS Machine Learning Blog / KVTrace",
        "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/cut-self-hosted-llm-cost-and-latency-with-the-distributed-kv-caching-agent-skill/",
        "originalUrl": "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2026/11/20/ML-22449-3.png",
        "placement": "details",
        "width": 2240,
        "height": 1572
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先算是否划算",
        "减少服务器数量，或者让同一批机器处理更多请求"
      ],
      "body": []
    },
    "issueDate": "2026-11-22"
  },
  {
    "id": "gemini-load-tool-parameters-on-demand-20261122",
    "source": "Google",
    "avatar": "G",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-19",
    "time": "11 月 19 日 · 近期补读",
    "title": "给助手接上几十种工具，Gemini 先看用途，需要时再读参数说明",
    "summary": "客服助手可能同时连接查订单、退款、改地址等几十种工具。过去即使只要退一笔款，也常常先把所有工具的完整参数说明交给模型，输入变长，调用成本也跟着增加。\n\nGoogle 在 Gemini API 中推出预览功能 Tool Retrieval。模型先看到工具名称和用途；决定退款后，再按名称取回退款工具的参数说明，知道该填写订单号和金额。取回说明、生成退款指令，都能在开发者的一次请求里完成，实际退款仍由应用自己的程序执行。\n\n原文例子是给损坏的订单退40美元。助手无需先读取另外五十多种工具的全部参数。开发者也可以让常用工具始终加载，只把偶尔使用的工具留到需要时再读。真正省下的是那些一直没用到的说明；已经取回的内容，仍会作为后续对话输入计费。",
    "body": "该功能在 Interactions API 预览开放，支持 Gemini 3.6及后续模型。默认由服务端按名称取工具；如果应用有自己的工具目录或用户权限筛选，也可以自行执行搜索，但每次搜索会增加一轮往返。服务端模式仍提前展示所有延后加载工具的名称和描述，不能把它写成“所有工具信息都不占上下文”。原文没有给出统一的延迟或节省比例。",
    "detailLabel": "开放范围，以及自己检索工具时的差别",
    "links": [
      {
        "label": "官方发布 · 退款示例",
        "url": "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "模型先看到工具名称和用途",
        "那些一直没用到的说明"
      ],
      "body": []
    },
    "issueDate": "2026-11-22"
  },
  {
    "id": "inkling-mini-prune-then-heal-20261122",
    "source": "Thinking Machines",
    "avatar": "T",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "公司训练实践",
    "tags": [
      "公司训练实践"
    ],
    "date": "2026-11-20",
    "time": "11 月 20 日 · 近期补读",
    "title": "删掉三分之二专家后，Inkling 2 Mini 先补训，再做后训练",
    "summary": "Thinking Machines 发布了能在本地设备运行的 Inkling 2 Mini，并披露它怎样缩小。模型原先每层有384个“专家”模块，每次计算只选其中8个。训练到中途，团队按使用情况留下128个，把另外三分之二删掉，减少需要存储的参数。\n\n删完没有直接交付。团队接着用更大内部模型提供的训练信号，补训了约1万亿个文本片段（词元），让留下的专家接手被删掉的工作。公司报告，这一步恢复了删减前的表现，之后才继续监督微调和强化学习。\n\n最终模型有264亿参数，主要权重在训练时就用较少的位数保存每个数，部署时沿用这套格式，而不是最后才压缩。官方给出的总内存占用约20GB。它展示了一条具体的产品路线：先用较多专家训练，再压缩并投入额外训练恢复能力。对想靠删专家降低部署成本的团队，补训成本也是这条路线的一部分。",
    "body": "模型还会把中间两组层重复运行三次：存24层参数，每生成一个词实际经过48次层计算。重复使用权重能增加计算深度，但每个输出词要做的计算也更多，不能只按输出词数判断速度。首尾部分各运行一次，重复部分之间通过训练得到的门控传递信息。\n\n多数层采用NVFP4，最后4层采用MXFP8；官方支持至少32GB内存的Mac通过Ollama运行。发布还附带可改变循环次数的研究模型，它与正式版固定三次循环的配置不同。本文聚焦正式版的删减与恢复流程，不混用研究版的循环次数实验。",
    "detailLabel": "重复用24层参数，与低精度部署的具体配置",
    "links": [
      {
        "label": "训练过程与发布",
        "url": "https://thinkingmachines.ai/news/inkling-2-mini/"
      },
      {
        "label": "模型卡",
        "url": "https://thinkingmachines.ai/model-card/inkling-2-mini/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "删完没有直接交付",
        "补训成本也是这条路线的一部分"
      ],
      "body": []
    },
    "issueDate": "2026-11-22"
  },
  {
    "id": "splash-mac-comparison-conditions-20261122",
    "source": "inco.ai / 小红书",
    "avatar": "i",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "项目自测 · 社区讨论追源",
    "kind": "official",
    "topic": "开发者测试与经验",
    "tags": [
      "开发者测试与经验"
    ],
    "date": "2026-11-21",
    "time": "11 月 21 日讨论 · 追到项目原始测试",
    "title": "Mac 跑模型“快五倍”，换一种对照配置，差距就变了",
    "summary": "小红书作者“呆崽学AI”介绍 Splash 时提到，同一台Mac跑270亿参数的模型，生成速度能快约五倍。作者注明这是官方数据。追到项目的对照表，数字确实存在，但还要看另一边开了什么功能。\n\n在20核GPU的M5 Pro上，两边使用同一份4位量化权重。Splash每秒生成74个文本片段（词元），另一款推理程序llama.cpp在默认配置下是16个；给llama.cpp也开启“先预测几个词、再一起核对”的加速后，它升到27个，差距约为2.7倍。这里比较的是生成阶段速度，不是整项编程任务完成时间。\n\nSplash把配套预测模型、针对模型形状优化的计算程序和内存管理放在一起。它的价值在于让本地编程助手更容易用上这些组合优化。要判断自己换引擎能快多少，比较时也得给原来的引擎打开准备实际使用的加速功能。",
    "body": "项目使用选定的SPEED-Bench编程输入与贪心生成，权重为Unsloth Qwen3.8-27B UD-Q4_K_M，llama.cpp版本为e6ab7c1。M3 Max的另一组结果，以及35B模型的结果，没有混入正文这一组比较。项目另测了相同文本位置上两套程序最偏好的下一个词是否一致；这不是完整编程任务成功率测试。\n\nSplash并非今天新发布：1.0于9月发布，最新1.7.0发布于11月17日。本条由11月21日的公开讨论引出，补读此前未收录的项目测试。Mac版本要求M3或更新芯片与macOS 26.4或更新系统；支持的模型家族有限。",
    "detailLabel": "原始测试设置和项目时间线",
    "links": [
      {
        "label": "项目对照表",
        "url": "https://github.com/incoai/splash#gguf-against-llamacpp"
      },
      {
        "label": "测量方法",
        "url": "https://github.com/incoai/splash/blob/main/docs/performance.md"
      },
      {
        "label": "小红书原帖",
        "url": "https://www.xiaohongshu.com/explore/6b010c3c000000002b032181"
      },
      {
        "label": "1.7.0发布记录",
        "url": "https://github.com/incoai/splash/releases/tag/1.7.0"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "已读取原帖正文及4条可见评论。评论含笼统稳定性评价和未提供同配置数据的个人体验，本期不摘录。",
    "highlights": {
      "summary": [
        "给llama.cpp也开启",
        "不是整项编程任务完成时间"
      ],
      "body": []
    },
    "issueDate": "2026-11-22"
  },
  {
    "id": "sglang-chunked-weight-pairs-20261121",
    "source": "SGLang",
    "avatar": "S",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开源项目 · 已合并修复",
    "kind": "official",
    "topic": "训练与部署实践",
    "tags": [
      "训练与部署实践"
    ],
    "date": "2026-11-20",
    "time": "11 月 20 日 17:15 · 北京时间合并",
    "title": "新权重分批送到了，模型却还用着旧值：SGLang 修复了一处漏更新",
    "summary": "一轮训练结束后，团队要把新权重送到推理服务。分批传输，可以避免一次搬运太多数据。SGLang 最近的报障却发现：对部分 DeepSeek 模型，两份需要拼在一起的参数如果分两批到达，服务可能漏掉更新，而且不报错。\n\n原因出在两批之间。加载器收到第一份参数时，把它暂存在本次调用里，等另一份到齐再合成模型实际使用的参数。但第一次调用结束，暂存也消失了；第二份随后到达时，已经找不到前一份，模型里原有的值便留了下来。\n\n11月20日合并的修复把暂存位置移到模型对象上，让两批数据可以接上。暂存时还会复制数据，防止发送端复用缓冲区把它改掉；整轮传输结束时，如果仍有参数缺了另一半，服务会返回失败。\n\n这和后训练中的权重同步直接相关：传输完成，不等于模型每一处都换成了新值。本次修复针对 DeepSeek 系列的配对加载，其他部分模型仍需处理；它也没有把整轮更新改成“全部成功才生效”的机制。",
    "body": "原始报障者 floatlibai 在昇腾 A3、DeepSeek 系列、两路张量并行配置上复现。需要跨批保留的包括 Q/KV 投影参数，以及 FP8 权重和它的缩放系数。作者报告47项CPU单元测试通过；公开讨论中的追加测试有两项H100测试通过，也有一项权重检查端到端任务失败，不能据此写成完整GPU验证已经通过。等待另一半会占用显存：若先发完所有 Q 投影再发 KV 投影，作者估计 DeepSeek-V3 每个并行进程约需多留1.3GB。",
    "detailLabel": "复现配置、显存代价和测试状态",
    "links": [
      {
        "label": "已合并修复 · 代码与测试",
        "url": "https://github.com/sgl-project/sglang/pull/51661"
      },
      {
        "label": "原始报障 · 复现步骤",
        "url": "https://github.com/sgl-project/sglang/issues/51430"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "hnyls2002",
        "role": "普通评论者 · 项目贡献者",
        "date": "2026-11-20 17:16 北京时间",
        "text": "DeepSeek 系列的跨批配对已经修复；其他列出的加载器仍使用单次调用内的缓存。权重版本和缓存刷新也没有延后到整轮结束，因此原始问题仍保持打开。",
        "url": "https://github.com/sgl-project/sglang/issues/51430#issuecomment-7035463614",
        "linkLabel": "评论直达",
        "evidence": "项目处理进展",
        "mode": "翻译摘编",
        "context": "贡献者在合并修复后回复原始报障，解释哪些部分已解决、哪些仍待处理。"
      }
    ],
    "commentStatus": "已读原始报障、三条讨论回复及修复测试记录，精选一条说明解决范围的回复。",
    "highlights": {
      "summary": [
        "两份需要拼在一起的参数如果分两批到达",
        "暂存位置移到模型对象上"
      ],
      "body": []
    },
    "issueDate": "2026-11-21"
  },
  {
    "id": "sglang-prefill-mutual-wait-20261121",
    "source": "SGLang",
    "avatar": "S",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开源项目 · 已合并修复",
    "kind": "official",
    "topic": "推理与部署实践",
    "tags": [
      "推理与部署实践"
    ],
    "date": "2026-11-21",
    "time": "11 月 21 日 07:09 · 北京时间合并",
    "title": "两条请求各占着一边内存，SGLang 让其中一条先让路",
    "summary": "有些推理服务把工作分给两组机器：一组先处理用户输入，另一组接着逐词生成答案。为了早一点开始计算，SGLang 可以让第一组先干活，不必等第二组给这条请求留好位置。\n\n如果两组机器接收请求的顺序不同，就可能互相卡住。请求A已经处理完输入，计算结果占着第一组的内存，却还在等第二组接收。请求B正好相反：第二组已给它留好位置，但第一组的内存被A占满，轮不到它开始。两边互相等，只能等到某条请求超时。\n\n北京时间今天早上合并的修复，会在这种情况下让一条尚未取得后续位置的请求先释放暂存结果，回队列稍后重算。这样B就能继续，A付出的代价是多算一次。之前的释放规则只看请求名额是否用完，长输入却可能先把内存耗尽，所以没有触发让路。\n\n这项修改针对开启“提前处理输入”的配置，解决的是特定的相互等待。作者提供了单元测试结果，还没有给出高负载下的完整服务实测。",
    "body": "原文把前一阶段称为 prefill，后一阶段称为 decode；缓存的中间计算结果称为 KV。触发条件包括 optimistic-prefill-attempts 大于0，以及较长输入先耗尽 KV 空间。每轮调度最多让一条请求释放，重试前还要撤销首个输出词留下的记录。默认 xgrammar 支持所需回退，outlines 后端的受约束生成不能按这条路径让路。随后合并的 #51892 处理另一种相似等待：未拿到生成端位置的请求占住从存储预读的数据，阻挡已经拿到位置的请求。它可能增加一次存储读取，作者未宣称吞吐量提升。",
    "detailLabel": "适用配置，以及存储预读中的类似等待",
    "links": [
      {
        "label": "已合并修复 · 两请求复现",
        "url": "https://github.com/sgl-project/sglang/pull/51882"
      },
      {
        "label": "关联修复 · 从存储预读时也要让路",
        "url": "https://github.com/sgl-project/sglang/pull/51892"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "两边互相等",
        "先释放暂存结果，回队列稍后重算"
      ],
      "body": []
    },
    "issueDate": "2026-11-21"
  },
  {
    "id": "dharma-estimate-whole-training-job-20261121",
    "source": "Dharma AI",
    "avatar": "D",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "公司实测 · 近期实践补读",
    "kind": "official",
    "topic": "公司训练实践",
    "tags": [
      "公司训练实践"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 · 原文日期",
    "title": "估训练要跑多久，Dharma 把评测和存模型的时间也算进去",
    "summary": "安排共享GPU时，最难受的情况之一是：预计今晚结束的训练，第二天还没跑完，后面的实验也跟着推迟。Dharma AI 用272次真实微调任务检查了常见的耗时估算方法。\n\n只按模型大小、训练数据量和GPU算力推算，主要算到的是训练计算本身。但任务还要下载和加载模型，定期跑评测，把模型保存到存储服务；共享集群上，这些步骤还会和其他任务争用网络与存储。两次训练的计算量相近，结束时间也可能差很多。\n\n团队改用历史任务训练一个耗时预测器。它只看开跑前就知道的配置，除了模型和数据大小，还加入评测总量、保存次数和要保存的参数量。他们把这批H200任务分成五组，轮流用四组训练、留一组检查预测。平均绝对误差从计算量估算法的12.41小时降到1.71小时。\n\n这里预测的是拿到GPU后到任务完成的时间，不含排队；换硬件也需要重新校准。对实验排程更有用的做法，是先把“训练一轮”之外的步骤记进日志，再检查误差来自哪里。",
    "body": "272次任务使用1、2或4张H200，涵盖LoRA和全量监督微调，实际耗时1.6至172.4小时。比较中的计算量估算也计入预定评测词数，并扫描GPU利用率设置；最好的设置仍平均误差12.41小时。最终采用CatBoost回归器，输入24项特征。超过60小时的任务只有13次，预测误差明显更大；当前数据没有包含强化学习训练。文章是论文预告，完整特征公式和搜索配置仍待论文发布。",
    "detailLabel": "预测器的比较条件和长任务误差",
    "links": [
      {
        "label": "团队技术文章 · 数据与方法",
        "url": "https://huggingface.co/blog/dharma-ai/predicting-fine-tuning-time"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-21/dharma-errors.png",
        "alt": "每次训练任务的真实耗时与预测绝对误差散点图",
        "caption": "原文误差图：横轴是任务实际小时数，纵轴是预测相差的小时数。多数短任务误差较小，超过60小时的少量任务分散得更开；虚线分别标出平均和中位误差。",
        "credit": "Dharma AI · 训练耗时研究",
        "sourceUrl": "https://huggingface.co/blog/dharma-ai/predicting-fine-tuning-time",
        "originalUrl": "https://cdn-uploads.huggingface.co/production/uploads/6a725daa5ca641a21ab61956/gQbjzLv37ag5kX7nZuuMh.png",
        "placement": "inline",
        "width": 790,
        "height": 540
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "只看开跑前就知道的配置",
        "不含排队"
      ],
      "body": []
    },
    "issueDate": "2026-11-21"
  },
  {
    "id": "vercel-board-shared-task-thread-20261121",
    "source": "Vercel",
    "avatar": "V",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方产品发布 · 近期补读",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 · 原文日期",
    "title": "Vercel 给多个编程助手建了共用的任务讨论串",
    "summary": "一个助手查漏洞，一个助手改代码，再交给另一个检查，工作很容易散在不同对话里。Vercel 在内部安全项目中遇到这个问题后，做了 Board：让任务、处理进度和结果留在同一条讨论串。\n\n官方示例里，编程助手先认领一个待处理的问题，发消息说明进度，完成后把代码修改链接贴回原处。接手的人或另一个助手可以沿着同一条记录看到最初的报告、调查发现和修改结果。Slack、GitHub 中的讨论也能双向同步过来。\n\nBoard 还可以在收到新回复或状态变化时唤起助手；在 Vercel 上，两次事件之间不用一直运行一个等待进程。这还是一个实验功能。需要多个工具接力的团队，可以用它把分散的记录连起来，减少交接时重复解释背景。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "官方发布 · 内部使用与工作流程",
        "url": "https://vercel.com/blog/introducing-vercel-board"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "任务、处理进度和结果留在同一条讨论串"
      ],
      "body": []
    },
    "issueDate": "2026-11-21"
  },
  {
    "id": "aws-agent-pay-per-request-20261121",
    "source": "AWS",
    "avatar": "A",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方文档更新 · 短讯",
    "kind": "official",
    "topic": "商业与成本账",
    "tags": [
      "商业与成本账"
    ],
    "date": "2026-11-19",
    "time": "11 月 19 日 · 原文日期",
    "title": "AWS 让助手按次购买工具调用，费用记进同一张账单",
    "summary": "AWS Marketplace 在11月19日更新的文档中加入一种工具购买方式：助手调用支持它的服务时，不必先向每个供应商注册账号、领一把API密钥，而是为这次请求付款。\n\n流程是先询价、再付费：服务收到请求后返回报价；助手把报价交给 AgentCore payments，拿到付款凭证，再带着凭证重发请求。供应商完成服务，费用按这次报价计入AWS账单。\n\n团队接入多个付费工具时，便少了逐家注册和保管密钥的步骤；费用仍按每次报价产生。该方式需要先在AWS账户中设置付款管理器，目前限美国北弗吉尼亚区域、美元计价。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "买方文档 · 调用与结算流程",
        "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ai-agents-products.html"
      },
      {
        "label": "文档更新日期",
        "url": "https://docs.aws.amazon.com/marketplace/latest/buyerguide/document-history.html"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先询价、再付费"
      ],
      "body": []
    },
    "issueDate": "2026-11-21"
  },
  {
    "id": "openai-review-one-before-batch-20261120",
    "source": "OpenAI",
    "avatar": "O",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方报告 · 匿名研究员访谈",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 · 原文日期",
    "title": "OpenAI 研究员做批量任务：先让助手交一个样本，改好后再继续",
    "summary": "一位负责后训练评测的 OpenAI 研究员，曾让 AI 照着已有任务批量制作新任务。结果看起来相似，细节却不符合要求，他还得逐一修改。后来，他把工作顺序改了：先让助手做一个，自己检查并改好，再让它完成剩下的。\n\n这是 OpenAI 11月18日发布的内部研究报告中的访谈实例。团队访谈了十位研究员，发现助手已经能承担代码实现、调试和实验检查，但选题、数据质量和分析判断仍经常需要人介入。若一开始的要求没对齐，批量执行也会把同一个问题复制出去。\n\n这个改动很适合制作评测题或整理训练数据时借鉴：先审一个完整产物，把修改落实到具体样本上，再扩大数量。它来自研究员的工作经验；报告没有单独测量这一步能节省多少返工时间。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "内部报告 · 工作流程访谈",
        "url": "https://openai.com/index/research-acceleration-jagged-frontier/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先让助手做一个，自己检查并改好",
        "再扩大数量"
      ],
      "body": []
    },
    "issueDate": "2026-11-20"
  },
  {
    "id": "vllm-draft-cache-padding-20261120",
    "source": "vLLM",
    "avatar": "v",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开源项目 · 已合并修复",
    "kind": "official",
    "topic": "推理与部署实践",
    "tags": [
      "推理与部署实践"
    ],
    "date": "2026-11-19",
    "time": "11 月 19 日 10:41 · 北京时间合并",
    "title": "小草稿模型牵动了大模型的缓存分组，vLLM 把多余占用挪走了",
    "summary": "为了加快生成，推理服务可以让一个小模型先提出几个候选词，再由主模型检查。这种做法叫推测解码。两者都要保存之前计算过的信息，但小模型有时只需要保留很短的一段，主模型的部分层却要保存完整上下文。\n\nvLLM 此前按最小的一组层来划分缓存。在作者报告的配置里，草稿模型只有5层，主模型的16层全局注意力因此被分成四组，每组5层；实际只有16层，却要按20层预留空间。\n\n11月19日合并的修复，让这种只保留短窗口的草稿模型不再决定分组大小。主模型的16层可以单独成组，多出的预留空间改放在成本较低的草稿侧。按这份配置计算，主模型全局注意力部分的每词缓存占用减少20%，不是整台服务的显存减少20%。\n\n修改已有针对分组规则的测试；作者尚未补上修复后的完整服务实测。对部署而言，值得检查的不只是剩余显存，还包括缓存是否因为分组而给不存在的层预留了位置。",
    "body": "此例使用 Muse Spark Open：46层滑动窗口注意力、16层全局注意力，另配5层 DSpark 草稿模型。修复只排除草稿专用且采用滑动窗口管理的分组；若草稿模型也保存完整上下文，给它补空层同样昂贵，仍参与原有分组计算。作者运行的是CPU上的针对性回归测试，没有提供修复后的吞吐量数字。",
    "detailLabel": "为什么不能把所有草稿模型都排除",
    "links": [
      {
        "label": "已合并修复 · 配置与测试",
        "url": "https://github.com/vllm-project/vllm/pull/68533"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "Dao007forever",
        "role": "普通评论者 · 项目贡献者",
        "date": "2026-11-19 07:47 北京时间",
        "text": "需要确认草稿层确实属于滑动窗口类型；有些草稿模型使用全局注意力，不应一并排除。",
        "url": "https://github.com/vllm-project/vllm/pull/68533#issuecomment-6995042786",
        "linkLabel": "评论直达",
        "evidence": "代码评审意见",
        "mode": "翻译摘编",
        "context": "针对最初把所有草稿分组都排除的改法；最终修复缩小了范围，并增加了相应测试。"
      }
    ],
    "commentStatus": "已读修改说明和讨论，精选一条影响适用范围的评审意见。",
    "highlights": {
      "summary": [
        "实际只有16层，却要按20层预留空间",
        "不再决定分组大小"
      ],
      "body": []
    },
    "issueDate": "2026-11-20"
  },
  {
    "id": "frontierharness-model-tool-pair-20261120",
    "source": "Runta · Shilin Zhu",
    "avatar": "R",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "公司实测 · 近期评测补读",
    "kind": "official",
    "topic": "商业与成本账",
    "tags": [
      "商业与成本账"
    ],
    "date": "2026-11-17",
    "time": "11 月 17 日 · 原文日期",
    "title": "换了模型，原来省钱的编程工具可能就不省了",
    "summary": "同一个编程模型，放进不同工具里，收到的任务说明、能调用的命令和停止工作的时机都可能不同。Runta 与 Baseten 因此把22种工具配置和5个开放模型交叉测试：同样的62项终端任务，每种组合各尝试4次。\n\n一个明显变化是 Codex CLI 的成本位置。按每次任务的平均推理费用排序，它搭配 GLM-5.3 时最便宜，换成 Kimi-K3 后排到第16。测试保留各工具的默认配置，并使用最高推理强度；费用按同一家服务商 Baseten 的公开价格估算。\n\n这份11月17日公布的评测提醒，选择模型与选择工具最好一起做。给自己的任务试几个组合时，应把失败尝试的费用也算进去，再看完成一个合格任务总共花了多少，而不只比较模型的每百万 token 单价。",
    "body": "报告把平均每次任务费用与“每次成功的成本”分开：后者用平均任务费用除以通过率。成本排名使用前者，不应把它改写成成功成本排名。单个工具与模型组合的通过率置信区间约为上下10个百分点，几个百分点的小差距不宜排成稳定名次。",
    "detailLabel": "成本排名与成功成本怎样区分",
    "links": [
      {
        "label": "原始评测 · 方法与各模型结果",
        "url": "https://runta.com/blog/introducing-frontierharness-eval-v1-1/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-20/harness-cost.png",
        "alt": "22种工具配置在全部五个模型上汇总的平均任务成本与通过率",
        "caption": "原文图1的全模型汇总：越靠左，每次任务平均费用越低；越靠上，通过率越高。这是汇总图，正文中的第1与第16名来自单独模型的成本排名。",
        "credit": "Runta · FrontierHarness Eval v1.1",
        "sourceUrl": "https://runta.com/blog/introducing-frontierharness-eval-v1-1/",
        "originalUrl": "https://runta.com/blog/introducing-frontierharness-eval-v1-1/harness-scatter-all-models.png",
        "placement": "inline",
        "width": 1024,
        "height": 832
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "换成 Kimi-K3 后排到第16",
        "把失败尝试的费用也算进去"
      ],
      "body": []
    },
    "issueDate": "2026-11-20"
  },
  {
    "id": "prime-factory-production-traces-20261120",
    "source": "Prime Intellect",
    "avatar": "P",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 · 原文日期",
    "title": "Prime Intellect 把训练、上线和失败记录接到同一套工具里",
    "summary": "Prime Intellect 发布 Model Factory，团队可以训练开放模型，把训练出的版本部署为服务，再查看实际任务在哪里失败，决定下一轮该补哪些数据、改哪些评分规则。\n\n例如，一个写代码的助手得分变高后，开发者可以回看它的修改和测试结果，检查它是否真的修好了问题，再用另一批任务评测。这是官方介绍的使用流程，不是已经公布的客户收益实验。\n\n平台统一管理训练、生成尝试、运行工具的隔离环境和调度；开发者仍负责定义任务与好坏标准。按需服务按 GPU 小时计费，专用部署另提供更深的集群控制。对正在把后训练接进产品的团队，这次产品更新主要减少了不同环节之间的接线工作。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "官方发布 · Model Factory",
        "url": "https://www.primeintellect.ai/blog/introducing-model-factory"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "开发者仍负责定义任务与好坏标准"
      ],
      "body": []
    },
    "issueDate": "2026-11-20"
  },
  {
    "id": "xhs-spare-gpu-deployment-20261120",
    "source": "le petit prince",
    "avatar": "l",
    "avatarClass": "xhs",
    "channel": "xiaohongshu",
    "evidence": "个人自述 · 短讯",
    "kind": "opinion",
    "topic": "开发者实践",
    "tags": [
      "开发者实践"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 · 原文日期",
    "title": "一位部署者宁可空着一张卡，也要给模型升级留位置",
    "summary": "小红书作者 le petit prince 分享，自己原先没有推理部署经验，借助 AI 跑通了一台四卡服务器。做规划时，他留了一张90GB以上显存的卡，不运行常驻服务，目的是给后续模型升级留出空间。\n\n这是一笔明确的取舍：平时少用一张卡，换取升级时的余地。作者把它作为个人部署经验；本次读到的正文没有交代切换步骤和中断测试，所以这里不沿用其“全年零中断”的说法。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "小红书 · 原帖入口",
        "url": "https://www.xiaohongshu.com/explore/6afd853c000000001b01f16d"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "已读正文及1条评论；评论仅为支持，无补充信息。正文提到的长图未取得，未据其扩写配置和切换过程。",
    "highlights": {
      "summary": [],
      "body": []
    },
    "issueDate": "2026-11-20"
  },
  {
    "id": "foundry-control-training-loop-20261119",
    "source": "Microsoft Foundry",
    "avatar": "M",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "公司训练实践",
    "tags": [
      "公司训练实践"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 · 原文日期",
    "title": "微软开放自定义训练流程：你决定怎么学，云端负责更新模型",
    "summary": "给代码审查助手做训练，难点不只是让模型多看几份代码。它每次该审哪些修改、意见怎样评分、收集多少次尝试后再更新模型，都需要团队自己决定。微软新开放预览的 Programmed Training，把这部分控制留给开发者，把模型计算和更新放到云端运行。\n\n例如，微软引用的 Whitney AI 试用案例，把一条代码修改请求冻结在接受审查的那一刻。助手只能看当时的代码，评分程序另外保存开发者后来真正修复的问题，再比较助手有没有提前指出这些问题。团队可以把这套评分方法直接写进自己的训练流程。\n\n开发者在本地运行 Python 程序，安排生成、评分和更新；Foundry 执行相应的 GPU 计算。目前它支持四个开放模型的 LoRA 训练，也就是在原模型旁训练一小组可调整的参数。团队可以自行安排学习过程，不必连 GPU 调度也从头搭起。\n\nWhitney 的案例在10月已经公开；这次新增的是服务开放预览。微软另一个负责提供任务运行环境的服务仍处于邀请测试阶段，两者的开放范围不同。",
    "body": "Whitney 把每次审查的代码环境与评分环境分开，并禁止联网，避免模型找到后来已经修好的答案。作者也指出，开发者没有采纳某条建议，不一定说明建议错误，因此采用更重视找全问题的 F2 分数。Programmed Training 按处理的输入、输出与训练 token 计费；外部评分模型和任务环境仍有自己的费用。",
    "detailLabel": "代码审查如何评分，以及哪些费用另算",
    "links": [
      {
        "label": "微软 · 开放预览说明",
        "url": "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/programmed-training-you-write-the-loop-foundry-runs-the-gpus/4573299"
      },
      {
        "label": "Whitney · 10月已公开的试用案例",
        "url": "https://www.trywhitney.com/journal/actor-meet-critic-rl-for-code-review"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把这部分控制留给开发者",
        "只能看当时的代码"
      ],
      "body": []
    },
    "issueDate": "2026-11-19"
  },
  {
    "id": "vllm-lora-reload-cold-modules-20261119",
    "source": "vLLM",
    "avatar": "v",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "开源项目 · 已合并修复",
    "kind": "official",
    "topic": "公司部署实践",
    "tags": [
      "公司部署实践"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 21:22 · 北京时间合并",
    "title": "vLLM 修复 LoRA 重载：给旧层套上新外壳后，同一份权重被处理了两次",
    "summary": "训练和推理轮流运行时，服务需要把新权重装进已有模型，尽量避免整套服务重新启动。vLLM 的一种直接重载方式此前不支持 LoRA，11月18日合并的修复解释了原因。\n\n模型启动后，LoRA 会在原有计算层外面套上一层结构，原来的层仍留在里面。旧重载流程遍历当前模型时，既看到了外面的包装层，又看到了里面的原层；两者指向同一份基础权重，结果加载后的处理被执行了两遍。\n\n修复办法是，在模型第一次启动时记下需要处理的原始层。以后重载就按这份清单走，不再把后来添加的外层结构算进去。同一份基础权重因此只处理一次，LoRA 的小参数也不被重载覆盖。\n\n作者在 GB200 上用带 LoRA 的量化 Qwen3-30B-A3B 检查了重载前后的输出概率，相关测试共50项通过。修复已进入主分支；使用正式发行版的部署仍需确认是否包含这次改动。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "已合并修改 · 原因与验证",
        "url": "https://github.com/vllm-project/vllm/pull/68345"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "已读修改说明及讨论区。可见回复主要是启动测试的指令和自动通知，没有另摘评论。",
    "highlights": {
      "summary": [
        "按这份清单走",
        "同一份基础权重因此只处理一次"
      ],
      "body": []
    },
    "issueDate": "2026-11-19"
  },
  {
    "id": "compoundingkernel-gpu-lock-20261119",
    "source": "Amazon · CompoundingKernel",
    "avatar": "A",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "作者报告 · 近期复盘补读",
    "kind": "official",
    "topic": "失败复盘与部署实践",
    "tags": [
      "失败复盘与部署实践"
    ],
    "date": "2026-11-14",
    "time": "11 月 14 日 · 原文日期",
    "title": "请求排着队，GPU 却不忙：团队先缩短了“占着卡不计算”的时间",
    "summary": "亚马逊团队让大量 AI 助手编写更快的 GPU 计算程序。助手每写一个版本，都要送到 GPU 上检查结果、测量速度，再决定下一步怎么改。运行中却出现了怪事：GPU 的使用名额全被占着，每张卡后面还有大约五个请求排队，卡真正忙于计算的时间却只有约13%。\n\n原因出在排队规则。一次请求从启动命令、编译程序到上卡测试，都一直占着 GPU 的使用名额。前面的准备工作主要在 CPU 上完成，光启动命令环境就要12到15秒；这段时间，后面的请求也不能用卡。\n\n团队把编译移到占用名额之前，把命令启动缩短到毫秒级，并一起调整了性能分析和验证流程。在相同 GPU 和任务槽位下，对比修改前后的对应时段，每小时完成评测的候选程序数达到原来的3.6倍。这是整批调整后的运行结果，作者没有把收益分摊到某一个改动上。\n\n这份11月14日公开的复盘提示，增加助手之前，先看每次尝试在哪里等待。这里改善的是评测周转速度，模型本身并没有因此接受新训练。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原论文 · 第5.1节与图6",
        "url": "https://arxiv.org/pdf/2611.19230"
      },
      {
        "label": "首次公开日期",
        "url": "https://arxiv.org/abs/2611.19230"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-19/kernel-throughput.png",
        "alt": "原论文图6比较调整前后的候选评测吞吐量和GPU占用锁时间",
        "caption": "原论文图6：同一批GPU上，评测吞吐量达到原来的3.6倍，每个候选占用GPU名额的时间下降71%；多项改动同时实施。",
        "credit": "Qian Qu 等 · CompoundingKernel",
        "sourceUrl": "https://arxiv.org/pdf/2611.19230",
        "originalUrl": "https://arxiv.org/pdf/2611.19230#page=11",
        "placement": "inline",
        "width": 950,
        "height": 340
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "都一直占着 GPU 的使用名额",
        "每小时完成评测的候选程序数"
      ],
      "body": []
    },
    "issueDate": "2026-11-19"
  },
  {
    "id": "gpt62-sol-cost-per-task-20261119",
    "source": "OpenAI",
    "avatar": "O",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "商业与成本账",
    "tags": [
      "商业与成本账"
    ],
    "date": "2026-11-17",
    "time": "11 月 17 日 · 原文日期",
    "title": "GPT-6.2 发布：在一项真实代码修改评测里，Sol 用较低成本接近 Astra",
    "summary": "OpenAI 发布了 GPT-6.2 Astra 和 Sol。对日常接入编程助手的团队，值得单独看的是一次任务的账单，而不仅是模型的单价。\n\n官方披露，在 Cognition 的 FrontierCode 2.0 中，两款模型都使用最高推理档位时，Sol 的成绩与 Astra 相差不超过0.5分，任务成本约为后者的五分之一。这项评测要求模型修改真实代码库，并检查修改是否达到维护者愿意合并的标准。\n\n这个比较针对的是该评测中的任务总成本，包含模型实际用了多少输入和输出。它适合用来提出一个测试顺序：先看便宜模型能否把自己的常见任务做合格，再决定哪些难题值得交给更贵的模型。这里的五分之一不能直接当成每个项目都会得到的降价幅度。\n\n两款模型已进入 ChatGPT Work、Codex 和 API。接入时还应把人工返工算进账单：代码生成便宜，但若要多花几轮修改，完成任务的总成本仍可能升高。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "官方发布 · FrontierCode 与价格",
        "url": "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "一次任务的账单",
        "两款模型都使用最高推理档位"
      ],
      "body": []
    },
    "issueDate": "2026-11-19"
  },
  {
    "id": "perplexity-frontier-research-hiring-20261119",
    "source": "Perplexity",
    "avatar": "P",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方研究计划 · 招聘线索",
    "kind": "official",
    "topic": "团队方向与招聘",
    "tags": [
      "团队方向与招聘"
    ],
    "date": "2026-11-16",
    "time": "11 月 16 日 · 原文日期",
    "title": "Perplexity 招募新研究团队，把目标从找资料推进到设计和验证实验",
    "summary": "Perplexity 新设 Frontier Research，目标是做能提出问题、收集证据、设计实验，再根据结果修正想法的研究助手。官方页面已经开放招聘，优先申请截止日期为12月5日。\n\n团队列出的一个具体方向，是让小模型只在有必要时向大模型求助，并研究这些模型应该怎样一起训练。它关心的不只是答案质量，还包括在给定费用下，怎样安排不同模型的工作。\n\n另一个方向是重新设计评测：模型能预测实验结果，是否也能解释规律、提出值得验证的新问题？这些目前是研究计划。对关注模型协作和推理成本的人，这是一个清楚的团队方向信号。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "官方研究方向与招聘入口",
        "url": "https://research.perplexity.ai/"
      },
      {
        "label": "官方职位入口 · 需浏览器加载",
        "url": "https://jobs.ashbyhq.com/Perplexity/849874fd-ccb4-4d7e-8551-29c5a418e2c7"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "只在有必要时向大模型求助"
      ],
      "body": []
    },
    "issueDate": "2026-11-19"
  },
  {
    "id": "eve-store-session-deltas-20261118",
    "source": "Vercel",
    "avatar": "V",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "公司部署实践",
    "tags": [
      "公司部署实践"
    ],
    "date": "2026-11-17",
    "time": "11 月 17 日 · 原文日期",
    "title": "对话越长，重复保存越贵：eve 改成只存新变化",
    "summary": "一个 AI 助手连续工作几十轮，后台不仅要调用模型，还要保存进度，方便中断后接着做。Vercel 在 eve 1.0 的发布复盘里指出，旧流程会把越来越长的对话反复复制进不同步骤，存储和传输的工作也随之增加。\n\n这次它改成只保存本轮新增或改变的数据，旧内容通过引用取回；不需要历史记录的步骤，干脆不传历史。工具返回图片时，进度记录里保存文件地址，不再反复复制整张图。这样，同一份内容就不用随着每一步重新写一遍。\n\n团队用一段50轮的 Evo Docs 会话估算：按每轮约两次模型步骤、记录保留30天计算，Vercel Workflows 这部分费用从5.4美分降到1.3美分，约少76%。这笔估算只算保存进度、运行各步骤等后台服务费用，不含模型调用账单。\n\n做长任务助手时，这个经验值得先查：费用增加究竟来自模型思考，还是后台在重复搬运已经有的数据？",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "eve 1.0 · 成本与存储改动",
        "url": "https://vercel.com/blog/eve-is-now-generally-available"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "只保存本轮新增或改变的数据",
        "不含模型调用账单"
      ],
      "body": []
    },
    "issueDate": "2026-11-18"
  },
  {
    "id": "cerebras-prefill-decode-20261118",
    "source": "Cerebras",
    "avatar": "C",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理成本与延迟",
    "tags": [
      "推理成本与延迟"
    ],
    "date": "2026-11-17",
    "time": "11 月 17 日 · 原文日期",
    "title": "Cerebras 让 GPU 读输入，自己专门生成回答",
    "summary": "模型回答问题前，要先处理用户输入；随后才逐个生成回答里的词。这两段工作的特点不同：读输入时可以并行处理很多内容，生成时却要等上一个词出来，才能继续下一个。\n\nCerebras 把这两段分给了不同硬件。在已经运行的服务中，AMD Instinct GPU 负责处理输入，再把中间状态交给 CS-3 系统；CS-3 利用片上高速存储，专门完成后续生成。此前由 CS-3 同时做的两份工作，现在分开承担。\n\n公司公布了11月14日同一个 GPT-OSS-120B 服务启用这一方案前后的记录：在同样功率下，所有请求合计每秒生成的内容达到原来的5倍，单个回答的生成速度保持不变。这里增加的是同一功率下的总体服务能力，不是每个人都能快5倍拿到回答。\n\n团队计划继续向自营和合作伙伴的服务推广。对部署团队来说，它展示了一种具体取舍：把硬件分工做细，用数据传递的额外工作，换取更高的整体容量。",
    "body": "处理输入的阶段通常叫 prefill，逐个生成输出的阶段叫 decode。两端通过 KV Portal 传递模型继续生成所需的键值缓存。原文的5倍结果来自共享服务启用前后的生产记录，按原先 CS-3 单独服务的每兆瓦吞吐量归一化；文章没有给出两段流量完全相同的受控负载测试。",
    "detailLabel": "两段计算怎样衔接，以及5倍的比较范围",
    "links": [
      {
        "label": "官方部署说明与生产曲线",
        "url": "https://www.cerebras.ai/blog/cerebras-launches-disaggregated-inference"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "GPU 负责处理输入",
        "单个回答的生成速度保持不变"
      ],
      "body": []
    },
    "issueDate": "2026-11-18"
  },
  {
    "id": "devin-bots-human-decisions-20261118",
    "source": "Cognition",
    "avatar": "C",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日 01:03 · 北京时间发布",
    "title": "Devin Bots 把多个编程任务交给一组助手，只把待决定的事交回人",
    "summary": "改造支付接口，往往不只改一处代码：客户端要更新，回调处理要迁移，结账测试也要重写。Cognition 新发布的 Devin Bots，用这个例子展示了一个变化：用户给出整体目标，由 Bot 拆分任务，再协调多个 Devin 分别工作。\n\n每个执行助手有自己的云端电脑。Bot 跟进代码、测试和待合并的修改；需要人介入时，集中放进“Needs you”列表。演示里列了三种很具体的情况：缺少支付服务的密钥、要决定是否保留旧接口、需要批准正式部署。\n\n它也支持按时间或外部事件启动，例如每天检查测试是否正常，或看到客服频道里的故障后开始排查。目前这些是产品页面展示的工作流程；它想减少的是人来回追问各个助手进度的工作。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "产品流程演示",
        "url": "https://devin.ai/bots"
      },
      {
        "label": "Cognition 发布帖 · 北京时间11月18日",
        "url": "https://x.com/cognition/status/2122737511684587551"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "由 Bot 拆分任务",
        "集中放进“Needs you”列表"
      ],
      "body": []
    },
    "issueDate": "2026-11-18"
  },
  {
    "id": "qwen4-cam-simulation-20261118",
    "source": "阿里云 · Qwen",
    "avatar": "阿",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "研究怎样变成产品",
    "tags": [
      "研究怎样变成产品"
    ],
    "date": "2026-11-17",
    "time": "11 月 17 日 · 原文日期",
    "title": "千问4的制造演示：先模拟刀具怎么走，再检查哪里会切坏",
    "summary": "给数控机床安排加工路径，不能只让程序“看起来能运行”：刀具太大、走位不对，都可能把零件切坏。阿里云在千问4的企业应用介绍中，展示了模型生成加工路径后，再用仿真检查的过程。\n\n其中一个预设异常是刀具直径过大。演示画面标出了局部过切的位置，也就是刀具会切掉本该保留的材料。问题在模拟加工时暴露出来，实际金属还没有被切削。\n\n公司报告，这个展示案例里，每个零件需要人工动手编写加工程序的时间从约475分钟降到24分钟。这里统计的是人工编程时间，不是零件从设计到加工完成的全部时间；数字来自这次官方演示。\n\n这个例子比单纯展示“模型能生成代码”多走了一步：把生成的结果送进能检查后果的专业工具，先找出会造成什么问题。企业接入仍需按所在地区与阿里云确认。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "企业应用介绍 · 制造演示",
        "url": "https://www.alibabacloud.com/blog/alibaba-cloud-brings-qwen4-max-to-the-enterprise-an-ai-colleague-that-plans-builds-and-delivers-finished-work_603786"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-18/qwen-cam.jpg",
        "alt": "千问4官方演示中，过大的刀具导致局部过切，仿真画面标出异常位置",
        "caption": "官方预设异常演示：刀具直径过大，会切掉零件局部本应保留的材料。画面来自模拟检查，不是实物加工现场。",
        "credit": "阿里云 · Qwen4-Max",
        "sourceUrl": "https://www.alibabacloud.com/blog/alibaba-cloud-brings-qwen4-max-to-the-enterprise-an-ai-colleague-that-plans-builds-and-delivers-finished-work_603786",
        "originalUrl": "https://yqintl.alicdn.com/0d960a593300e73602e5fd700f2025d9a7fdb0bd.jpeg",
        "placement": "inline",
        "width": 1440,
        "height": 810
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "再用仿真检查",
        "人工编程时间"
      ],
      "body": []
    },
    "issueDate": "2026-11-18"
  },
  {
    "id": "developer-design-before-agent-20261118",
    "source": "Reddit · PrawncakeZA（评论者）",
    "avatar": "R",
    "avatarClass": "openai",
    "channel": "reddit",
    "evidence": "个人经历 · 评论摘编",
    "kind": "opinion",
    "topic": "开发者实际经验",
    "tags": [
      "开发者实际经验"
    ],
    "date": "2026-11-18",
    "time": "11 月 18 日读取 · 原始评论时间未返回",
    "title": "重写内部工具前，他先花一周把设计里的矛盾说清楚",
    "summary": "在一则讨论编程助手实际效果的帖子里，评论者 PrawncakeZA 分享了自己重写内部工具的过程。他自述有十年开发经验，正在美国一家大型科技公司工作；旧工具问题太多，决定从头重写。\n\n他先用约一周和助手讨论架构，澄清文档中的含糊与矛盾，再整理成分阶段实施计划，让自己能一块一块地测试。写评论时，正式实现刚做两天，进度接近一半，主要等待环节变成了人工测试。\n\n这项重写还没有完成。这个阶段最具体的经验，是先把设计整理到能分块验收，再让助手往下写。对这位开发者而言，设计和验证占了更多注意力。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原帖入口 · PrawncakeZA 的回复",
        "url": "https://www.reddit.com/r/DevelEire/comments/1xygt4m/any_people_with_good_experiences_of_coding_agents/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "正文根据普通评论者 PrawncakeZA 的英文回复摘编；已读原帖与可见回复。工具未返回该回复直达链接，来源进入原帖。",
    "highlights": {
      "summary": [
        "能一块一块地测试"
      ],
      "body": []
    },
    "issueDate": "2026-11-18"
  },
  {
    "id": "scientists-check-ai-output-20261117",
    "source": "OpenAI",
    "avatar": "O",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "用户怎样使用 AI",
    "tags": [
      "用户怎样使用 AI"
    ],
    "date": "2026-11-16",
    "time": "11 月 16 日 · 原文日期",
    "title": "AI 给出答案后，科研人员还会追问怎么算的、哪里要改",
    "summary": "科研人员把任务交给 AI 后，接下来会做什么？OpenAI 在11月16日公布了一份使用报告，分析了1,819名科研人员在8月至9月间发送的约58万条科研消息。报告专门追踪了一件事：AI 回答以后，人是否又要求它解释、检查或修改。\n\n在符合观察条件的请求中，先算每个人需要这些后续沟通的比例，再对人取平均，结果是31.8%。统计看的是同一对话中、七天内的下一条科研消息。也就是说，初次回答之后，继续把事情讲清楚、核对好，是这批用户工作中的常见一步。\n\n报告用一个回归分析的例子解释分类：要求 AI 说明数字怎么算出来的，或改掉重复计入样本的计算，都算后续检查；让它把结果放进文稿，则算继续使用成果。这是报告说明统计口径的例子，并非公开某位参与者的聊天。\n\n对科研工具来说，这提示了一个很具体的改进方向：除了交出答案，还要方便人查看步骤、追到原始数据、指出某一处重算。这个比例衡量的是追问和修改行为，不能直接当作答案出错率。",
    "body": "这部分统计使用1,809人的125,947条初始请求，保留完整七天观察窗口且能判断后续行为的记录。消息由自动分类器分类，研究团队没有查看原始聊天。另有251名参与者完成并同意纳入问卷，其中45.4%把检查或纠正输出所需时间列为使用困难；这是参与者自述。样本来自主动申请科研访问计划的人。",
    "detailLabel": "样本与统计口径",
    "links": [
      {
        "label": "使用报告 · 11月16日",
        "url": "https://openai.com/index/science-at-the-frontier/"
      },
      {
        "label": "原始报告 · §3.3",
        "url": "https://cdn.openai.com/pdf/0e4b2466-0be0-4326-8bf7-117d809e14d2/Science%20at%20the%20Frontier.pdf"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "继续把事情讲清楚、核对好",
        "方便人查看步骤、追到原始数据、指出某一处重算"
      ],
      "body": []
    },
    "issueDate": "2026-11-17"
  },
  {
    "id": "sage-tool-image-order-20261117",
    "source": "上海人工智能实验室 · 书生",
    "avatar": "上",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-15",
    "time": "11 月 15 日 · 原文日期",
    "title": "书生新模型的部署说明：工具结果一旦乱序，图片也可能配错",
    "summary": "书生 S2.1 Flash 是上海人工智能实验室新开放的科学多模态模型，除了读文字，还能结合科学数据和工具返回的图片继续分析。它11月15日建立了模型仓库，16日仍在更新。部署指南提醒了一个容易漏掉的问题：模型调用几个工具后，谁先做完，会影响图片是否交到正确的位置。\n\n问题发生在两套排序规则不一致时。模型先调用工具 A、再调用 B，但 B 的结果先回来。对话模板会把结果按调用顺序整理成 A、B，vLLM 收集图片时却沿用消息到达的 B、A 顺序。文字和图片便可能错配，模型随后分析的就不是那条结果对应的图。\n\n官方给出的临时修正，是在收集图片之前，先把工具返回结果排回调用顺序。指南为 vLLM 0.33.0 提供了补丁；相关上游修正仍在审查中。它修的是信息送进模型的过程，团队没有在这里提供修补前后的生成准确率。\n\n还有一个单独的部署细节：工具日志可能真的包含 </think> 等字样。仓库自带的分词处理会把消息正文中的这些字样当普通文字；换成默认处理方式，可能被误当成结束推理等控制标记。因此，官方要求加载仓库提供的处理代码，而不是只替换模型权重。",
    "body": "官方指南要求各引擎使用 --trust-remote-code。vLLM 示例采用 Python 前端，所引用的默认 Rust 前端当时还不接受图片和视频；SGLang 还需显式指定仓库的对话模板。参考部署使用8张 H200，BF16 权重约645 GB；这是一套服务端配置。\n\n上游 PR #67108 只重排紧邻且完整匹配的一批结果：调用和返回的 ID 都有效、唯一，数量与集合一致。缺项、重复或未知 ID 的情况维持原顺序。PR 报告的是消息预处理与 HTTP 渲染测试，未运行模型生成质量评测。",
    "detailLabel": "部署配置与补丁处理范围",
    "links": [
      {
        "label": "官方部署指南",
        "url": "https://huggingface.co/internlm/Sage-S2.1-Flash/blob/main/deployment_guide.md"
      },
      {
        "label": "模型与科学输入说明",
        "url": "https://huggingface.co/internlm/Sage-S2.1-Flash"
      },
      {
        "label": "上游修正 · 尚未合入",
        "url": "https://github.com/vllm-project/vllm/pull/67108"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "文字和图片便可能错配",
        "先把工具返回结果排回调用顺序"
      ],
      "body": []
    },
    "issueDate": "2026-11-17"
  },
  {
    "id": "inside-llm-quant-comparison-20261117",
    "source": "Manuel García · inside-llm",
    "avatar": "M",
    "avatarClass": "openai",
    "channel": "reddit",
    "evidence": "作者演示",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-16",
    "time": "11 月 16 日 · 项目公开（北京时间）",
    "title": "两个量化版本为何答得不同，inside-llm 把分叉的那个词标出来",
    "summary": "把模型压缩成更省显存的版本后，平均测试分数能说明整体变化，却看不出某个回答是从哪里变了。Manuel García 做了一个开源工具 inside-llm：同时运行同一模型的两个量化版本，在浏览器里并排显示生成的文字，以及每一步各个候选词的概率。\n\n作者给出的演示问“蜘蛛有几条腿，为什么”。Qwen3.5-4B 的 Q2_K 与 Q8_0 版本都先写到“A spider has”，接着分开了：前者把 six 的概率排到57%，后者给 eight 的概率约91%。界面在这个位置做标记，用户可以回看，究竟是哪个候选词的排序变了。\n\n比较时还得控制前文。如果两个版本各写各的，越往后，它们读到的文字也越不同，就很难只看这一位置的模型差异。工具为此提供“Same text”模式，让两个版本始终读同一段前文，再比较下一步；另一个模式则让它们沿着各自的选择继续生成。\n\n这使量化排查多了一种具体看法：先找到答错开始的位置，再看当时的候选概率。蜘蛛这张图是作者的一次演示，整体质量仍要靠成组任务来比较。作者还提供浏览器回放，不加载模型也能查看记录。",
    "body": "工具直接连接 llama.cpp，支持逐步查看采样规则怎样筛掉候选词，也能选中一个候选词，从该处另开分支继续。比较的两个模型必须使用相同分词器，才能让整个词表中的概率一一对应。运行模型需准备本地资源，现成构建以 Linux、Windows 为主；网页回放不要求本机运行模型。",
    "detailLabel": "比较条件与回放方式",
    "links": [
      {
        "label": "项目说明与演示",
        "url": "https://manuelgs.com/en/inside-llm/"
      },
      {
        "label": "开源代码",
        "url": "https://github.com/manuelgscom/inside-llm"
      },
      {
        "label": "作者发布帖与讨论",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xx7qbf/i_have_created_a_tool_to_observe_what_happens/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-17/inside.webp",
        "alt": "Q2_K 与 Q8_0 在蜘蛛腿数问题上的分叉",
        "caption": "作者演示：两边在相同开头之后分别选择 six 和 eight。截图为各自继续生成模式；右侧保留首次分叉位置的概率。",
        "credit": "Manuel García · inside-llm",
        "sourceUrl": "https://manuelgs.com/en/inside-llm/",
        "originalUrl": "https://manuelgs.com/blog/inside-llm/img/split-en.webp",
        "placement": "inline",
        "width": 1920,
        "height": 1080
      }
    ],
    "comments": [
      {
        "author": "nickthatworks",
        "role": "普通评论者",
        "date": "读取于11月17日（北京时间）",
        "text": "这位评论者希望增加两个版本轮流加载的功能：比较更大的模型时，同时放进显存会限制可选的量化精度和上下文长度。作者回复已记下这个请求。",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xx7qbf/i_have_created_a_tool_to_observe_what_happens/",
        "evidence": "功能建议",
        "mode": "翻译摘编",
        "context": "讨论同时加载两个模型的显存要求；链接为原帖入口，未取得评论直达链接。"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "始终读同一段前文，再比较下一步",
        "先找到答错开始的位置"
      ],
      "body": []
    },
    "issueDate": "2026-11-17"
  },
  {
    "id": "go-fuzz-spare-capacity-20261117",
    "source": "Google Developers · Karl Weinmeister",
    "avatar": "G",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "作者实测",
    "kind": "opinion",
    "topic": "失败复盘与排错",
    "tags": [
      "失败复盘与排错"
    ],
    "date": "2026-11-12",
    "time": "11 月 12 日 · 原文日期",
    "title": "AI 找到崩溃输入后，开发者发现随机测试藏着一个盲点",
    "summary": "Karl Weinmeister 想检查 Go 程序里的边界错误：输入很短时，代码会不会还去截取后面的内容。他把代码和编译后的指令交给 Gemini，让它把触发崩溃的条件写成约束，再由 Z3 求解器寻找满足条件的输入。找到以后，仍要放回真实程序运行，确认确实会崩溃。\n\n其中一个例子只有两个字节：一个开引号，后面跟一个反斜杠。解析器处理到结尾时，还试图截取超出输入长度的片段。求解器找到了这个输入，实际运行也复现了崩溃。但另一边，自动反复变更输入的“模糊测试”跑了几轮，仍没报告这个问题。\n\n原因在测试怎样准备内存。Go 用“切片”表示一段数据。它既有当前数据的长度，也可能预留了后面尚未使用的容量；这类截取操作检查的是容量。测试工具常把短输入放在一块很大的共享缓冲区里，代码越过当前输入的末尾，却还没越过那块内存的边界，于是没有崩溃。这让依赖崩溃报警的测试漏掉了问题。\n\n作者把测试输入的可用容量限制为当前长度，再跑同一测试。这个两字节问题在三次运行中都被找到，中位耗时0.17秒。此次排查带来的改进，是让原来的随机测试也能稳定抓住错误。作者最后建议，先把解析逻辑拆成便于测试的小函数，常规测试覆盖后，再对难查的部分使用 AI 和求解器。",
    "body": "另一处手工植入的长度溢出错误，也被多余容量掩盖。限制容量后，三次测试全部找到，中位耗时0.28秒。测试所加的一行是 data = data[:len(data):len(data)]。\n\n作者还检查了自己项目 skill-lint 的5个函数或抽取出的辅助函数，找到3类错误；抽成纯函数之后，普通模糊测试在3秒内也找到了这3类问题。这里抽取版本与已发布代码的表现不同：例如重叠编辑在抽取版本中会崩溃，已发布版本则可能误报范围错误或覆盖之前的修改。\n\n求解器没有找到崩溃条件，只说明 AI 所建立的模型在指定范围内没找到反例。真实代码是否被准确翻译，仍会影响这个结论。",
    "detailLabel": "另一组复测，以及方法适用范围",
    "links": [
      {
        "label": "原始排查与复测 · 11月12日",
        "url": "https://developers.googleblog.com/catch-go-bugs-that-fuzzing-misses-with-gemini-and-a-constraint-solver/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "找到以后，仍要放回真实程序运行",
        "让原来的随机测试也能稳定抓住错误"
      ],
      "body": []
    },
    "issueDate": "2026-11-17"
  },
  {
    "id": "tensward-state-copy-20261116",
    "source": "Tensward",
    "avatar": "T",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "作者实测",
    "kind": "opinion",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-15",
    "time": "11 月 15 日 · 原文日期",
    "title": "模型每次回答都搬回643 MB状态，保存开销拖慢了推理",
    "summary": "Tensward 团队用一张 H100 跑 Qwen3.8-27B，同时接入16个客户端。用户等到第一个输出要接近两秒，整台服务每秒只生成58个 token，监控里 GPU 忙碌时间的占比却只有35%。他们想知道：有人排队，显卡为什么还在闲着？\n\n团队记录了服务器里的计算和数据搬运，发现每个请求平均把643 MB数据从显存复制回内存。这个模型除了注意力缓存，还要保存另一套随对话变化的内部状态。llama.cpp 会把这些状态留作备份，方便以后接着聊；但如果请求不会回来，这笔保存开销就白付了。团队抽查服务线程时，20次里有16次停在内存复制上。\n\n关闭内存缓存和对话检查点后，同一负载的总吞吐从每秒58个 token 升到110个。换新机器、另写客户端重复测量，提升仍有87%。这些速度来自不挂测量工具的运行，搬运量则另行测量。\n\n这个改法有明确代价：以后接着聊，可能要重新计算之前的输入。团队在另一组 L4、普通8B模型、多轮对话的测试中，关闭保存反而慢了约20%。要不要保留缓存，取决于省下的重算，能不能抵过保存和恢复的时间。",
    "body": "测试开关为 --cache-ram 0 --ctx-checkpoints 0。作者在评论中澄清：它们关闭的是主机内存中的缓存与对话检查点，并非所有输入复用；仍留在当前服务槽位、且与新请求匹配的状态，还可能继续使用。\n\n升级 llama.cpp 从 b11669 到 b12246 后，默认配置本身也快了67%—75%，每个请求复制的数据量却几乎没变。作者没有逐个提交复测，因此不能把这部分收益归到某一个改动。测量库目前仍是研究工具，计划并入 Tensward 0.5。",
    "detailLabel": "两个开关关闭了什么，以及版本差异",
    "links": [
      {
        "label": "团队排查记录",
        "url": "https://tensward.com/blog/gpu-busy-doing-what"
      },
      {
        "label": "作者与开发者讨论",
        "url": "https://www.reddit.com/r/LocalLLM/comments/1xwxk21/llamacpp_was_copying_643_mb_to_the_cpu_per/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "每个请求平均把643 MB数据从显存复制回内存",
        "同一负载的总吞吐从每秒58个 token 升到110个"
      ],
      "body": []
    },
    "issueDate": "2026-11-16"
  },
  {
    "id": "actively-motion-review-20261116",
    "source": "LangChain · Actively AI",
    "avatar": "L",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-14",
    "time": "11 月 14 日 · 原文日期",
    "title": "销售 AI 改按工作分工，让同一条反馈能用于多个客户",
    "summary": "Actively AI 最初给每个潜在客户配一个 AI，负责推进这笔生意，再把拟好的行动交给销售审批。听起来很自然，但真正用起来，销售要不断切换：看完客户甲的联络邮件，再看客户乙的回复策略，每个 AI 当下又只有少量东西可审。\n\n更麻烦的是，同一条经验要反复教。例如，怎么主动联系客户、回复该有多积极、面对大公司的多个联系人怎样推进，这些做法并不只适用于某一个客户。按客户分开的 AI，却各自学了一遍。\n\n团队后来把分工改为按工作类型来：一个 AI 处理多个客户的主动联络，另一个负责把刚接触的客户往下一步推进。销售可以把同类产出放在一起审，指出的问题也能继续用于这个 AI 接下来的同类工作。客户背景仍由后台程序收集，需要时再交给负责行动的 AI。\n\n这篇复盘的核心改动，是让 AI 的分工贴合人检查工作的方式。团队报告新版更容易提供和复用反馈，文章没有给出转化率或节省工时的前后数字。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "团队复盘 · 11月14日",
        "url": "https://www.langchain.com/blog/goal-engineering"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-16/motions.png",
        "alt": "按客户分配与按工作类型分配 AI 的对照图",
        "caption": "左边：每个客户各有一个 AI，经验分散。右边：主动联络与早期商机推进分别处理多个客户，客户资料在需要时送入。",
        "credit": "LangChain · Actively AI",
        "sourceUrl": "https://www.langchain.com/blog/goal-engineering",
        "originalUrl": "https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6af66c5601a2317509bbc886_Goal%20oriented%20agents.png",
        "placement": "inline",
        "width": 2048,
        "height": 1050
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "按工作类型来",
        "让 AI 的分工贴合人检查工作的方式"
      ],
      "body": []
    },
    "issueDate": "2026-11-16"
  },
  {
    "id": "vllm-dummy-fp8-power-20261116",
    "source": "vLLM · Woosuk Kwon",
    "avatar": "v",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-15",
    "time": "11 月 15 日 · 原文日期",
    "title": "用随机权重测速偏快，vLLM 修正了 FP8 测试数据",
    "summary": "给推理服务器测速时，有时不想先下载真实模型，就用随机生成的权重把计算流程跑起来。vLLM 的 --load-format dummy 就支持这种做法。但作者发现：矩阵大小和运算步骤一样，换一组数值，耗时也可能变。\n\n在 GB200 上测试 DeepSeek-V4.1-Flash，旧版随机权重让较大的输入处理步骤比真实权重最多少用11.4%的时间。问题出在 FP8——一种用8位表示数值的格式：旧版把随机数限制在正负1之间，真实模型却使用了更宽的编码范围。作者的解释是，这会改变计算电路中比特翻转的频繁程度，进而影响功耗。\n\n他们对其中两个步骤记录了功耗和频率：两种权重都碰到了功率上限，但真实权重运行时频率更低。真实权重这时以更低的频率执行计算，耗时就更长。所以，即使矩阵大小一样，测速也不能忽略其中填的数值。\n\n11月15日北京时间合入的修正，改为从 FP8 的有限数值编码中广泛随机取样。在24个实际服务中的输入处理步骤上，等价原型与真实权重的耗时平均绝对差为1.57%。这是修正测试数据造成的偏差，不是让真实模型本身加速。",
    "body": "测量使用 vllm bench forward，对真实服务中的24个 prefill 步骤单独计时；这里的 prefill 是先处理用户输入的阶段，不是完整对话的总吞吐。测试配置为 GB200、DeepSeek-V4.1-Flash、DEP4。修改后平均有符号偏差为+0.94%，最差为3.1%；跨节点重复测量的变化约为0.9%。\n\nPR 中的速度测量来自等价原型；原型与最终实现处理 NaN 编码的办法不同。作者还检查了生成概率是否保持有限值，以及权重生成的67项测试。",
    "detailLabel": "24个步骤测了什么，误差怎样计算",
    "links": [
      {
        "label": "原始改动与24组测量",
        "url": "https://github.com/vllm-project/vllm/pull/67693"
      },
      {
        "label": "小红书线索 · Anaxagore",
        "url": "https://www.xiaohongshu.com/explore/6af9bcd000000000160185a8"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "换一组数值，耗时也可能变",
        "这是修正测试数据造成的偏差"
      ],
      "body": []
    },
    "issueDate": "2026-11-16"
  },
  {
    "id": "pooling-aware-retrieval-20261116",
    "source": "Hugging Face · Tom Aarsen",
    "avatar": "H",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "数据与训练",
    "tags": [
      "数据与训练"
    ],
    "date": "2026-11-11",
    "time": "11 月 11 日 · 原文日期",
    "title": "搜索索引想少存向量，就让模型在训练时先适应压缩",
    "summary": "有些搜索模型会为文档里的许多词分别保存一条向量，用来表示各处内容。这样，用户搜索“续航长的笔记本”时，“笔记本”和“续航”可以各自在文档里找到证据。但文档多起来，这些向量也会占用大量存储。\n\n一种节省办法，是把含义接近的向量合并，最后每组只存一个。问题是，模型原本是在不压缩的情况下训练的，合并后可能丢掉区分相关与不相关文档的线索。Tom Aarsen 在11月11日的实现文章里，演示了怎样让训练提前适应这一步：同一批数据既用完整向量做一次检索评分，也用压到约四分之一的向量再评一次，如果完整版本找对了文档，压缩版本却找错了，训练也会要求模型改进压缩后的表现。\n\n两轮对照都从 ModernBERT-base 出发，用相同的12万组 MS MARCO 查询与文档样例训练一遍，区别在训练目标。在 NanoBEIR 的13组检索测试中，平均每篇只存约49条向量时，普通训练得49.03分，加入压缩训练后得51.23分。这里的分数衡量前10条搜索结果排得好不好，越高越好；向量数量相比未压缩减少了74.8%。\n\n文章还给了一个可运行的小例子：搜索“红色星球”，三段介绍金星、火星、木星的文字从58条向量压到16条后，火星仍排第一。训练代码和两种训练出的模型都已公开，便于在自己的语料上比较存储与检索效果。",
    "body": "正式指标为平均 nDCG@10。两个模型不压缩时分别为51.84、52.39；压到约四分之一后分别为49.03、51.23。文章所说“保留94.6%与97.8%的质量”，分母分别是各自模型未压缩时的分数，不是同一个分母，也不是答题准确率。\n\n两轮训练均使用128维向量、相同初始化、seed 42 和优化设置。训练目标把完整表示和压缩表示的检索损失各占一半；只压文档，查询向量保持不变。原文例子展示的是排序保持，不足以单独说明整个语料库的效果；整体比较见13组测试。此文是已有压缩训练思路的实现与对照，不是本周首次提出的新论文。",
    "detailLabel": "分数的分母与训练对照条件",
    "links": [
      {
        "label": "方法、训练代码与结果表",
        "url": "https://huggingface.co/blog/token-pooling"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-16/pooling.png",
        "alt": "相同文档向量数量下，普通训练与适应压缩的训练之间的检索分数对比",
        "caption": "横轴为每篇文档平均保存的向量数，纵轴为检索排序分数。蓝线在相同存储数量下高于灰线；约49条向量处为51.23对49.03。",
        "credit": "Tom Aarsen · Hugging Face",
        "sourceUrl": "https://huggingface.co/blog/token-pooling",
        "originalUrl": "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/token-pooling/mve_token_pooling_results.png",
        "placement": "inline",
        "width": 1352,
        "height": 842
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "让训练提前适应这一步",
        "普通训练得49.03分，加入压缩训练后得51.23分"
      ],
      "body": []
    },
    "issueDate": "2026-11-16"
  },
  {
    "id": "peft-adapter-save-20261116",
    "source": "Hugging Face · PEFT",
    "avatar": "H",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-13",
    "time": "11 月 13 日 · 原文日期",
    "title": "PEFT 修复多卡保存：只存小适配器，不再先拼回整个模型",
    "summary": "用 LoRA 微调时，通常只训练一小组额外参数，保存结果也只需要这些参数。可是当模型分散在多张 GPU 上时，PEFT 0.21.2 配合新版 Transformers Trainer 的保存流程，会先把整个分片模型的权重收集起来，再从中挑出要保存的部分。训练的是小适配器，保存时却做了一次大模型的数据汇集。\n\n11月13日发布的 PEFT 0.21.3 把顺序调了过来：先筛出适配器需要的权重，再收集这些权重。这个补丁针对使用 DTensor 做张量并行、由 Trainer 保存模型的场景；如果慢的是保存检查点这一刻，才与这次修复直接相关。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "0.21.3 发布说明",
        "url": "https://github.com/huggingface/peft/releases/tag/v0.21.3"
      },
      {
        "label": "改动 PR #3963",
        "url": "https://github.com/huggingface/peft/pull/3963"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先筛出适配器需要的权重，再收集这些权重"
      ],
      "body": []
    },
    "issueDate": "2026-11-16"
  },
  {
    "id": "dspy-wsp-weight-edits-20261115",
    "source": "Cmpnd · dspy-wsp",
    "avatar": "C",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-13",
    "time": "11 月 13 日 · 原文日期",
    "title": "dspy-wsp 让大模型写代码，直接修改小模型的参数",
    "summary": "一个小模型负责给客服工单分类：是否需要当天回复，应该交给账单、技术还是账号团队。如果分类经常出错，开发者可能会收集更多样例，继续训练这个模型。Cmpnd 新发布的 dspy-wsp 提供了另一种实验办法：让一个能力更强的大模型读取小模型的参数，写 Python 修改其中的数值，再用样例检查改得对不对。这个工单流程是项目给出的接入示例。\n\n工具会把任务要求、评分办法和练习样例交给大模型。大模型查看错误、提出修改、调用小模型验证，最后留下一个参数补丁。正式测试题始终不让它看到，选好修改后才统一测试原版和修改版。\n\n作者在400条保留测试样例上报告：一个6亿参数决策模型的准确率从50.9%升到66.9%。但这个实验允许大模型在 Python 中反复计算小模型最后负责打分的部分。另一轮实验禁止在 Python 里额外重算打分部分，所有检查都要经过最多调用25次的模型运行工具；这时准确率只升到53.7%。因此，这组结果里，允许怎样试改参数，是理解收益的关键条件。",
    "body": "上面的两组实验都用 GPT-6 Astra 提议修改。宽松设置用了78分钟、7.63美元的大模型调用费；严格设置用了73分钟、9.25美元，费用不包含本机计算。严格设置下，作者记录了对12个打分神经元的修改，让它们更多利用付款期限、约束违反和安全相关线索。\n\n项目还提供 ReAnchor：参数不动，只调整模型分数怎样变成最终选项。对同一个模型，这种办法单独就达到60.2%；与宽松的参数修改叠加为69.1%，与严格修改叠加仍为60.2%。所以，想在自己的分类任务上尝试时，值得先比较“改参数”和“改判定门槛”各自贡献了多少。\n\ndspy-wsp 目前是独立于 DSPy 主库的早期版本。补丁保存改过的参数和校验信息，便于重新加载；完整的尝试过程、运行预算和最终测试也会记录下来。",
    "detailLabel": "改参数与改判定门槛，分别带来多少提升",
    "links": [
      {
        "label": "项目说明",
        "url": "https://github.com/cmpnd-ai/dspy-wsp"
      },
      {
        "label": "原始实验表与运行记录",
        "url": "https://github.com/cmpnd-ai/dspy-wsp/blob/main/results/2026-11-07-typed-decisions-astra/README.md"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-15/wsp.png",
        "alt": "五个决策模型在原版、改判定门槛、改参数以及两者结合后的测试准确率",
        "caption": "项目原图：灰色为原版，蓝色为只调整判定门槛，绿色为修改参数及组合方案。这张图采用允许在 Python 中重算打分部分的设置；正文另列了收紧预算规则后的结果。",
        "credit": "Cmpnd · Typed Decisions 实验",
        "sourceUrl": "https://github.com/cmpnd-ai/dspy-wsp",
        "originalUrl": "https://raw.githubusercontent.com/cmpnd-ai/dspy-wsp/main/assets/typed-decisions.png",
        "placement": "details",
        "width": 2400,
        "height": 2191
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "最后留下一个参数补丁",
        "允许怎样试改参数，是理解收益的关键条件"
      ],
      "body": []
    },
    "issueDate": "2026-11-15"
  },
  {
    "id": "deepseek-app-tools-api-20261115",
    "source": "DeepSeek",
    "avatar": "D",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-13",
    "time": "11 月 13 日 · 原文日期",
    "title": "DeepSeek 把搜索、读网页和读文件接进了对话接口",
    "summary": "开发者想做一个能上网、能读文件的聊天助手，光接入模型还不够：通常还要自己安排搜索、抓取网页，把读到的内容送回模型。DeepSeek 这次开放了应用中的这些能力，开发者可以在现有对话接口里启用，由服务端完成工具调用和资料整理。\n\n同一个搜索工具有两种用法。关闭思考时，它搜索网页或图片，再带着引用回答；开启思考时，模型可以在推理过程中多次搜索、继续读取链接。用户发来网址或 PDF、Office 文件，也有对应的读取和解析入口。\n\n这些能力接在现有的 deepseek-flash 模型上，另外提供可自行组合的搜索、抓取、文字识别和语音接口。团队同时公开了聊天前端示例，方便开发者看完整流程。工具使用费与模型的文字输入、输出费用分开计收。做应用时，除了模型本身的用量，还要计入搜索、读取等工具的开销。",
    "body": "公开面向用户的应用需要启用官方提供的安全检查；服务会检查输入和输出，并在触发时返回拒绝标记。官方示例支持导入 DeepSeek 对话记录。示例展示的是如何接入这些功能，不是搜索质量或完整应用成本的对照测试。",
    "detailLabel": "接入示例与使用条件",
    "links": [
      {
        "label": "官方发布",
        "url": "https://api-docs.deepseek.com/news/news261113/"
      },
      {
        "label": "搜索和读取规则",
        "url": "https://api-docs.deepseek.com/guides/web_tools"
      },
      {
        "label": "官方前端示例",
        "url": "https://github.com/deepseek-ai/chat-demo"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "由服务端完成工具调用和资料整理",
        "工具使用费与模型的文字输入、输出费用分开计收"
      ],
      "body": []
    },
    "issueDate": "2026-11-15"
  },
  {
    "id": "agweb-background-browser-20261115",
    "source": "paul-nameless · agweb",
    "avatar": "p",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "作者发布",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-14",
    "time": "11 月 14 日 · 原文日期",
    "title": "agweb 把多个 AI 的浏览窗口放在一起，尽量不打断人操作电脑",
    "summary": "开发者 paul-nameless 同时运行几个编程助手时，遇到一个很具体的烦恼：它们打开的 Chrome 窗口会突然抢到前台，让自己正在输入的内容失去焦点。改用完全隐藏的浏览器后，又不容易看出任务卡在哪里。他因此做了 agweb，一个基于 Safari 所用 WebKit 引擎的 macOS 浏览器。\n\nAI 通过命令操作各自的工作区，窗口留在后台；人想查看时，可以在一个面板里看到各个任务的网页和最近操作。每次点击后，工具会返回页面增加了什么、是否开始下载等变化，让 AI 不必每一步都重新读取整个页面。\n\n它还允许几个任务共用一份登录状态。需要人处理登录或验证码时，可以把页面交还给人。项目刚公开，目前要求 macOS 26 或更高版本；它使用的不是 Chrome 引擎，因此现有 Chrome 扩展和 Playwright 不能直接接上去。",
    "body": "作者在自己的 Mac 上比较了五个空闲页面：agweb 占用590 MB，隐藏运行的 Chrome 为730 MB，Playwright 启动的 Chrome 为1.6 GB。这个比较针对空闲页面；正文配图展示的是六个页面、其中包含视频的另一种状态，不是这组内存测试的截图。\n\n项目默认阻止部分广告和追踪请求，做网站统计测试时可以按工作区关闭。当前还没有覆盖所有 Chrome 功能。",
    "detailLabel": "空闲页面测试和兼容范围",
    "links": [
      {
        "label": "作者项目说明",
        "url": "https://github.com/paul-nameless/agweb"
      },
      {
        "label": "作者发布与讨论",
        "url": "https://news.ycombinator.com/item?id=50497147"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-15/agweb.png",
        "alt": "agweb 面板同时展示六个网页及所属工作区",
        "caption": "作者界面截图：网页按任务归组，在同一个面板里查看。图中包含运行中的视频，不对应五个空闲页面的内存测试。",
        "credit": "paul-nameless · 项目 README",
        "sourceUrl": "https://github.com/paul-nameless/agweb",
        "originalUrl": "https://raw.githubusercontent.com/paul-nameless/agweb/master/docs/images/dashboard.png",
        "placement": "inline",
        "width": 1600,
        "height": 1071
      }
    ],
    "comments": [
      {
        "author": "agline_in",
        "role": "普通评论者",
        "date": "11月14日 22:48（北京时间）",
        "text": "共用登录状态时，一个任务退出账号、切换账号或触发网站限流，其他任务也可能受到影响。他询问能否复制一份独立或只读的登录状态。",
        "url": "https://news.ycombinator.com/item?id=50497457",
        "linkLabel": "评论原文",
        "evidence": "使用边界提问",
        "mode": "翻译摘编",
        "context": "针对共用登录状态提出隔离问题。另一位评论者建议手动保存、加载状态；已读回复中没有项目作者对完整隔离方案的确认。"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "窗口留在后台",
        "看到各个任务的网页和最近操作"
      ],
      "body": []
    },
    "issueDate": "2026-11-15"
  },
  {
    "id": "baseten-kv-transfer-20261115",
    "source": "Baseten · DeepSeek Ultrafast",
    "avatar": "B",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-13",
    "time": "11 月 13 日 · 原文日期",
    "title": "Baseten 的新推理引擎，让对话换一台服务器也能接着用缓存",
    "summary": "聊天进行到第二轮时，模型通常可以复用上一轮已经算过的内容。这些中间计算结果叫 KV 缓存。服务部署在多台机器上后，如果下一条消息分到另一台机器，而缓存还在原来的机器上，就可能要重新计算之前的对话。\n\nBaseten 为 DeepSeek-V4.1-Flash 开源的新推理引擎，把最近对话的缓存留在服务器内存里，用 Redis 记录每份缓存在哪台机器。新请求到了另一台服务器，它先找到旧缓存，再通过支持直接内存传输的网络取过来，继续生成回答。这样，分配请求时不必总把同一段对话绑在原来的机器上。\n\n项目还公开了生成俄罗斯方块网页代码的速度测试：8张 B300 上约每秒2,060个 token。生成时先拟出一小段候选文字，再让模型统一检查哪些可以采用，因此一次计算能接受多个 token。这个数字对应指定代码生成提示词，不是多用户并发时的总吞吐量。",
    "body": "代码生成测试关闭思考。8张 B300 的每步耗时约2.71毫秒；另一组4张 GB300 的生成速度约每秒1,740个 token，每步约3.30毫秒。两组卡型不同。README 另列了读取100万 token 输入的时间，8张 B300 为11.7秒，那是处理输入的测试，不能和生成速度当成同一指标。\n\n当前引擎面向 Blackwell GPU，最低要求相应的4卡配置。缓存位置由 Redis 协调，跨服务器传输要求支持 RDMA 的网络。缓存共享的设计说明与代码已公开，但这次没有给出它相对固定路由的多用户成本对照。",
    "detailLabel": "速度测试条件与部署要求",
    "links": [
      {
        "label": "源码、缓存设计与复现步骤",
        "url": "https://github.com/basetenlabs/deepseek-ultrafast"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先找到旧缓存，再通过支持直接内存传输的网络取过来",
        "一次计算能接受多个 token"
      ],
      "body": []
    },
    "issueDate": "2026-11-15"
  },
  {
    "id": "vercel-ui-behaviors-20261115",
    "source": "Vercel Labs · UI SDK",
    "avatar": "V",
    "avatarClass": "openai",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-13",
    "time": "11 月 13 日 · 测试版发布日期",
    "title": "Vercel 把键盘、焦点和弹窗行为做成组件，供 AI 拼装界面",
    "summary": "AI 能很快画出一个搜索框，但让它真正好用，还要处理不少细节：点击清空后还能不能继续输入，用键盘能不能选中结果，弹窗关闭后焦点回到哪里。Vercel Labs 新公开的 UI SDK，把这些交互行为拆成可以组合的模块，供编程助手使用。\n\n项目给出的搜索框示例，会在有文字时显示清空按钮；清空后，这个按钮消失，焦点恢复模块把输入位置送回搜索框，人可以接着打字。开发者不用为了这个细节，在每一种界面框架里各写一遍处理逻辑。同一套行为可以接到 React、Vue、Svelte 等界面上。\n\n这套工具还附带给编程助手读取的使用说明。目前处于测试阶段，接口可能变化；它提供的是交互行为，不会替团队决定页面长什么样。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "项目与搜索框示例",
        "url": "https://github.com/vercel-labs/ui"
      },
      {
        "label": "测试版发布记录",
        "url": "https://github.com/vercel-labs/ui/releases"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "清空后，这个按钮消失，焦点恢复模块把输入位置送回搜索框"
      ],
      "body": []
    },
    "issueDate": "2026-11-15"
  },
  {
    "id": "natera-missing-manuals-20261114",
    "source": "Natera · Ariel Jirau / AWS",
    "avatar": "N",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "公司实践",
    "tags": [
      "公司实践"
    ],
    "date": "2026-11-12",
    "time": "11 月 12 日 · 原文日期",
    "title": "AI 排障不够准，Natera 先补齐了缺失的设备手册",
    "summary": "检测公司 Natera 的维修经验原本集中在老师傅身上，一位熟悉某类仪器的技术员离职后，团队就失去了那部分积累。他们做了 SWARM：新维修单一到，AI 就查设备手册、历史维修单和运行资料，先给工程师一份可能原因与排查步骤。\n\n早期系统只做通用资料搜索，没有按设备类型组织材料，诊断结果不稳定。团队改造了文档处理流程，并按仪器类别检查准确率。一次改进中，他们发现表现最差的那类仪器缺少厂商手册；补齐资料后，没有更换模型，这类仪器的诊断准确率从71%升到75%。\n\n工程师修完设备后，会把实际原因和处理办法记下来，再与 AI 的判断对照。这样，团队能知道是哪类设备、哪部分资料出了问题，再补资料、重测效果。",
    "body": "团队在90天生产观察中评估了524张维修单，平均首次响应从17.4小时缩短到约8分钟；这是给出初步诊断报告的时间，不是修好设备的时间。269张单有可对照的工程师处理结果和置信标签，才进入相应准确率分析。后台自动处理维修单与工程师交互追问分开运行，共用同一套排障流程。",
    "detailLabel": "上线后的响应速度与评估范围",
    "links": [
      {
        "label": "原文",
        "url": "https://aws.amazon.com/blogs/machine-learning/how-natera-designed-an-agentic-ai-system-for-lab-ops-with-amazon-bedrock-agentcore/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-14/natera.png",
        "alt": "维修单进入 SWARM，检索设备资料后回传诊断报告的流程",
        "caption": "原文架构图：上方维修单进入后台分析，下方工程师可以继续追问；右侧提供设备手册与排障流程。",
        "credit": "Natera / AWS · 原文架构图",
        "sourceUrl": "https://aws.amazon.com/blogs/machine-learning/how-natera-designed-an-agentic-ai-system-for-lab-ops-with-amazon-bedrock-agentcore/",
        "originalUrl": "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2026/11/10/ML-21653-1-1.png",
        "placement": "details",
        "width": 2248,
        "height": 1254
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "补齐资料后，没有更换模型，这类仪器的诊断准确率从71%升到75%",
        "把实际原因和处理办法记下来"
      ],
      "body": []
    },
    "issueDate": "2026-11-14"
  },
  {
    "id": "llamacpp-v1-compatibility-20261114",
    "source": "ggml-org 团队",
    "avatar": "g",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-13",
    "time": "11 月 13 日 · 原文日期",
    "title": "llama.cpp 发布 1.0，开始用版本号明确提示接口不兼容",
    "summary": "不少本地 AI 应用把 llama.cpp 当作运行模型的底层组件。上游不断支持新模型、新硬件，但接口一变，依赖它的应用也可能需要修改代码。\n\n团队在11月13日发布 llama.cpp 和 ggml 的1.0.0版，并明确了后续版本规则：供应用代码调用的 C 接口发生不兼容改动，就升主版本，例如从1.x变成2.x；兼容的新功能和普通修复则用后面的数字区分。也就是说，维护应用的人可以从版本号先判断这次升级是否涉及接口适配。\n\n这次发布的重点是让其他项目更放心地依赖这些库。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文",
        "url": "https://huggingface.co/blog/ggml-org/llama-cpp-v1"
      }
    ],
    "images": [],
    "comments": [
      {
        "author": "OsmanthusBloom",
        "role": "普通评论者",
        "date": "读取于 11 月 14 日（北京时间）",
        "text": "我更关心命令行参数、模型配置文件和网络接口是否兼容。这些地方发生不兼容改动时，也会升主版本号吗？",
        "url": "https://www.reddit.com/r/LocalLLaMA/comments/1xv8t2e/llamacpp_v10_is_here/",
        "linkLabel": "原帖入口",
        "evidence": "个人提问",
        "mode": "翻译摘编",
        "context": "针对公告明确列出的 C 接口版本规则追问；本次读取的回复中未见维护者答复。"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "C 接口发生不兼容改动，就升主版本",
        "从版本号先判断这次升级是否涉及接口适配"
      ],
      "body": []
    },
    "issueDate": "2026-11-14"
  },
  {
    "id": "artcraft-human-boundaries-20261114",
    "source": "Brandon Thomas · Latent Space",
    "avatar": "B",
    "avatarClass": "anthropic",
    "channel": "interview",
    "evidence": "具名分享",
    "kind": "interview",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-13",
    "time": "11 月 13 日 · 原文日期",
    "title": "PhotoCraft 一天做出初版，后续还要补文件兼容和使用体验",
    "summary": "ArtCraft 想做一组开源桌面工具，让用户保留熟悉的操作方式，还能按自己的需要修改软件。创始人 Brandon Thomas 在会议上介绍，他们先把 Photoshop 的工具、数据结构和文件导入需求写清楚，再让 AI 开发 PhotoCraft；他说，约24小时后就看到了像样的初版。\n\n项目自己的进度表也把“有这个功能”和“专业工作中好不好用”分开：功能覆盖估计约76%，实际专业使用准备度约四成到五成。文件兼容、画笔手感、性能和稳定性仍有具体缺口。这个区别解释了为什么一天能做出初版，后面仍有很长的打磨过程。",
    "body": "团队还遇到了权限、代码协作和自动构建的容量问题。Thomas 的建议是：桌面应用的大量实现交给 AI，涉及数据库结构迁移和服务接口设计的工作由人负责。这里的数据库迁移，是修改已有数据的组织方式，会影响正在运行的业务。",
    "detailLabel": "团队把哪些工作留给人",
    "links": [
      {
        "label": "原文",
        "url": "https://latent.space/p/artcraft/"
      },
      {
        "label": "项目功能与可用性自评",
        "url": "https://github.com/storytold/photocraft/blob/main/docs/target-app-parity.md"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-14/photocraft.png",
        "alt": "PhotoCraft 使用选区和调整图层修改画作的界面",
        "caption": "PhotoCraft 界面：左侧工具栏、中央选区和右侧图层。原报道引用项目展示图。",
        "credit": "ArtCraft · 经 Latent Space 原文展示",
        "sourceUrl": "https://latent.space/p/artcraft/",
        "originalUrl": "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/1f8df197-47c9-4513-8a41-d045e639c31a/image.png?t=1794541831",
        "placement": "inline",
        "width": 1524,
        "height": 964
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把“有这个功能”和“专业工作中好不好用”分开"
      ],
      "body": []
    },
    "issueDate": "2026-11-14"
  },
  {
    "id": "github-shared-skills-20261114",
    "source": "GitHub · Andrea Griffiths",
    "avatar": "G",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-12",
    "time": "11 月 12 日 · 原文日期",
    "title": "GitHub 的示例：三种编程 AI，共用一份工作说明",
    "summary": "团队换一个编程 AI，往往又得解释一遍数据表在哪里、命名有什么要求、哪些修改要检查。GitHub 的新实践文章用 Data Forge 示例说明，怎样把这些经验写成可以共同维护的文件。\n\n示例任务是统计客服问题的创建与解决情况。第一步先找出数据表和命名规则，记到一份项目清单里；后续负责查询、建数据流程的 AI 都读这份清单。这样，项目配置改变时，不必到多份操作说明里逐个修改。\n\n操作步骤本身只保留一份，再用打包程序生成 Claude Code、Cursor 和 Copilot 各自需要的入口文件。团队因此可以共同审查工作规则，而不必分别维护三套近似的提示词。数据库连接和访问权限仍由实际运行工具提供。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文",
        "url": "https://github.blog/ai-and-ml/github-copilot/build-once-run-on-any-agent-a-practical-guide-to-agent-skills/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "项目配置改变时，不必到多份操作说明里逐个修改",
        "操作步骤本身只保留一份"
      ],
      "body": []
    },
    "issueDate": "2026-11-14"
  },
  {
    "id": "sglang-neuron-interface-20261114",
    "source": "RadixArk / AWS Annapurna Labs",
    "avatar": "R",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-12",
    "time": "11 月 12 日 · 原文日期",
    "title": "SGLang 接入 Trainium，已有服务可以沿用原来的调用方式",
    "summary": "已经用 SGLang 部署模型的团队，现在多了一条尝试 AWS 自研 AI 芯片 Trainium 的路径。新公开的 SGLang-Neuron 插件让 SGLang 继续接收请求、安排运行；底下怎样在 Trainium 上执行模型，则由插件处理。\n\n官方示例是在 Trainium3 实例上启动 gpt-oss-120b，再用原来的聊天接口请求答案。上层应用不用先换一套调用方式，就能开始测试新的硬件环境。插件也支持把“读完输入”和“逐词生成回答”放在不同服务器上，中间传递已算好的上下文缓存。\n\n这次公告给出了部署方法和支持范围入口，尚未提供同一任务下的速度或成本对照。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文",
        "url": "https://aws.amazon.com/blogs/machine-learning/deploy-frontier-ai-models-on-aws-trainium-with-sglang-neuron/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "让 SGLang 继续接收请求、安排运行"
      ],
      "body": []
    },
    "issueDate": "2026-11-14"
  },
  {
    "id": "aws-emulator-agent-teams-20261113",
    "source": "AWS · Matthew Goldberg",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-11",
    "time": "11 月 11 日 · 原文日期",
    "title": "AWS 让三组 AI 分别写测试、找问题、改代码，做出了本地云服务模拟器",
    "summary": "开发者写了调用 AWS 的程序，过去往往要连到真实云服务才能验证。新发布的 AWS Emulator 把部分服务行为搬到本机，让人和编程 AI 可以先在本地试错。负责项目的工程师介绍，模拟器的代码由 AI 编写，团队主要设计它们怎样分工、怎样验收。\n\n第一组 AI 先写测试，再拿真实 AWS 核对答案。例如消息队列的一次测试，要完成建队列、发消息、收消息、确认处理、删队列。第二组把这些测试放到模拟器上运行，把失败的地方整理成问题；第三组每次领取一个问题，修改代码。\n\n改完的代码必须经过编译、代码审查、安全检查和服务行为检查，通过后才合入。三组分开的关键，是先用真实服务确定“做对了是什么样”，再让写代码的一方去满足这个标准。\n\n11月12日，开发者石川覚对照了本地与真实 AWS：数据库表名不合法时的错误提示，以及消息被取走后暂时不能再次取到的行为，都吻合。他还在本地测出“表未创建完成就写入”的错误。不过官方测试仍有未通过项，使用前需要核对自己依赖的具体操作。",
    "body": "早期版本里，AI 为了支持 Lambda 函数，竟然自己写了一个 Python 解释器。团队随后补上了复用现有库的要求。工程师把这件事作为例子：自动生成代码的系统也需要明确的实现边界，而这些边界来自人对失败和浪费的观察。",
    "detailLabel": "一次走弯路的例子",
    "links": [
      {
        "label": "AWS 工程师复盘",
        "url": "https://www.aboutamazon.com/news/aws/how-autonomous-ai-agents-built-aws-emulator"
      },
      {
        "label": "开发者对照测试",
        "url": "https://dev.classmethod.jp/en/articles/20261112-aws-emulator/"
      },
      {
        "label": "源码与测试",
        "url": "https://github.com/aws/aws-emulator"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-13/aws-teams.jpg",
        "alt": "三组 AI 分别编写测试、发现问题和修复代码",
        "caption": "AWS 原文流程图：左侧是真实服务与接口规范，三组 AI 共用测试和问题记录；修复先经过检查，再进入正式代码。",
        "credit": "AWS · 原文示意图",
        "sourceUrl": "https://www.aboutamazon.com/news/aws/how-autonomous-ai-agents-built-aws-emulator",
        "originalUrl": "https://assets.aboutamazon.com/fd/1e/3401edd44b5397d0120a11ec9f00/aws-emulator-ai-2-amazonnews-cdlt-09102026.jpeg",
        "placement": "inline",
        "width": 1600,
        "height": 900
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先用真实服务确定“做对了是什么样”",
        "第三组每次领取一个问题"
      ],
      "body": []
    },
    "issueDate": "2026-11-13"
  },
  {
    "id": "gemini-hydrogen-orchestrator-20261113",
    "source": "Google DeepMind",
    "avatar": "G",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理与成本",
    "tags": [
      "推理与成本"
    ],
    "date": "2026-11-12",
    "time": "11 月 12 日 · 原文日期",
    "title": "Google 让快慢模型在同一个编程任务里接力",
    "summary": "复杂的代码设计需要模型仔细判断，但读文件、写测试和检查修改，也会占掉不少时间。Google 在发布 Gemini 4 Hydrogen 时，把它定位为执行速度更快的模型，并在 Antigravity 编程工具中加入自动切换模型的 Orchestrator。\n\n同一个任务可以先由 Carbon 处理复杂判断，再交给 Hydrogen 执行，不必从头到尾使用同一个模型。需要并行时，Carbon 也可以协调多个 Hydrogen 分别写代码和验证修改。\n\nGoogle 报告，在 Terminal-Bench 4.0 的命令行任务测试中，这种切换方式取得接近全程使用 Carbon 的成功率，平均完成时间缩短19%，消耗的产品配额减少24%；这个数字表示用户的额度消耗，不是底层 GPU 计算量。\n\nHydrogen 已开始开放。它本身也能独立处理任务；API 每百万输入、输出 token 分别收费1.50和7.50美元，100万 token 的上下文范围采用同一档单价。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "发布说明与切换模型的测试",
        "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "同一个任务可以先由 Carbon 处理复杂判断，再交给 Hydrogen 执行",
        "平均完成时间缩短19%"
      ],
      "body": []
    },
    "issueDate": "2026-11-13"
  },
  {
    "id": "ernie-game-code-tests-20261113",
    "source": "百度文心团队",
    "avatar": "百",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-11",
    "time": "11 月 11 日 · 原文日期",
    "title": "文心新模型看不到游戏画面，团队把画面问题转成代码测试",
    "summary": "百度公布文心 5.5 Flash Preview 时，展示了一款用虚幻引擎制作的武侠游戏。模型在一次11小时的开发任务里，整合场景和人物素材，用 C++ 实现游戏逻辑。这里有个实际困难：它是纯文本模型，看不到自己做出的画面。\n\n官方介绍，试玩发现人物悬空、跑动方向不一致、相机错位后，这些问题被转成可测量的代码测试。模型根据测试和反馈继续修改，而不是仅凭“代码能运行”就结束。场景和角色使用了外部素材，工作重点是把它们接成可玩的工程。\n\n团队还披露，为了改善游戏开发，专门建设了训练数据和评估体系，覆盖游戏逻辑、运行状态以及素材处理，并适配几种常用引擎。\n\n预览版 API 已上线千帆；官方中文公告计划在11月25日前开放权重。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "发布说明与游戏演示",
        "url": "https://ernie.baidu.com/zh/release/ernie-5-5-flash-preview/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-13/ernie-game.jpg",
        "alt": "云雾中的石峰游戏场景",
        "caption": "百度原文《云岫行》演示视频封面。场景使用外部素材；图片展示最终画面，不是代码测试结果。",
        "credit": "百度文心 · 原文视频封面",
        "sourceUrl": "https://ernie.baidu.com/zh/release/ernie-5-5-flash-preview/",
        "originalUrl": "https://ernie.baidu.com/research-assets/ernie-5-5-flash-preview/image-13b96a68accd.jpg",
        "placement": "inline",
        "width": 1280,
        "height": 720
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "这些问题被转成可测量的代码测试",
        "根据测试和反馈继续修改"
      ],
      "body": []
    },
    "issueDate": "2026-11-13"
  },
  {
    "id": "anvil-adaptive-evaluation-20261113",
    "source": "Anthropic Safeguards 团队",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-12",
    "time": "11 月 12 日 · 原文日期",
    "title": "安全测试不能只重放旧题，Anthropic 让 AI 换着办法继续试",
    "summary": "模型的安全拦截规则改好以后，挡住已知攻击还不够：对方可能换一种问法继续尝试。Anthropic 新介绍的 Anvil，会让 AI 反复测试防护系统，记录之前的尝试，再根据反馈调整下一步。团队用它发现漏洞，也用它挑选准备上线的防护方案。\n\n文章里一个例子是防止隐藏推理过程被提取。团队把 Anvil 找到的攻击用于评测和训练；改进后，一组固定攻击被漏掉的比例从31.5%降到0.4%。但让 Anvil 根据新防护继续调整，每轮会话最多尝试200次，79轮测试中仍有56轮达到报告设定的明显泄露标准。\n\n这两组数字测的是不同问题：前者问“旧办法还管不管用”，后者问“对方继续试，能不能找到新办法”。只看第一组，很容易以为问题已经基本解决。\n\nAnvil 使用内部模型，还能看到防护系统的具体评分，测试条件比普通用户更有利于发现漏洞。团队据此继续提高防护，而不是把旧测试通过率当成终点。",
    "body": "图中两个模型的新版防护，都在可调整攻击测试中留下56/79轮成功。线上攻击成功率同期也下降，但团队明确说同期还有其他改进，不能把变化全部归给 Anvil。",
    "detailLabel": "怎样读这张评测图",
    "links": [
      {
        "label": "技术报告与评测图表",
        "url": "https://safeguards.anthropic.com/2026/automated-red-teaming/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-13/anvil-evaluation.png",
        "alt": "固定攻击、会调整的攻击和线上攻击的效果对比",
        "caption": "原文图8。绿色是固定攻击的漏检比例，橙色是79轮可调整攻击中的成功比例，蓝色是线上观察值。三条线各有不同分母；正文讨论绿色与橙色的差异。",
        "credit": "Anthropic · Figure 8",
        "sourceUrl": "https://safeguards.anthropic.com/2026/automated-red-teaming/",
        "originalUrl": "https://safeguards.anthropic.com/2026/automated-red-teaming/fig8.png",
        "placement": "details",
        "width": 1999,
        "height": 1285
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "让 Anvil 根据新防护继续调整",
        "这两组数字测的是不同问题"
      ],
      "body": []
    },
    "issueDate": "2026-11-13"
  },
  {
    "id": "claude-manufacturing-review-20261113",
    "source": "Anthropic · Claude",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-12",
    "time": "11 月 12 日 · 原文日期",
    "title": "Claude 的制造业插件，先把报价和排产准备到人能审核的程度",
    "summary": "制造企业准备一份新报价，通常要找客户需求、历史订单、库存和成本记录。Claude 新发布的制造业插件把这些步骤写成17项操作流程，并连接 Autodesk Fusion、Infor、Microsoft 365 和 NetSuite 等系统。\n\n例如估价人员可以让它先读客户要求，列出缺失信息，再参考相似订单的成本起草报价。质量工程师则可以让它整理检验失败记录、查找类似问题，并准备纠正措施报告。流程做到审核环节，再交给负责的人决定。\n\nInfor 是管理订单、库存和生产等业务的软件。它同时提供的独立插件还能修改系统记录：钢材延期两周时，采购先让 Claude 查受影响订单和其他工厂库存，批准后再向替代供应商下单、调整排产。制造业插件本身提供的是资料与业务流程支持，不直接操作生产设备。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "插件能力与 Infor 示例",
        "url": "https://claude.com/resources/articles/claude-for-manufacturing"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "列出缺失信息，再参考相似订单的成本起草报价",
        "流程做到审核环节，再交给负责的人决定"
      ],
      "body": []
    },
    "issueDate": "2026-11-13"
  },
  {
    "id": "salesforce-autornd-20261112",
    "source": "Salesforce AI Research",
    "avatar": "S",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-11",
    "time": "11 月 11 日 · 原文日期",
    "title": "Salesforce 让 AI 自己提出训练改法，先做小实验再扩大投入",
    "summary": "企业里的 AI 回答问题前，常常要从大量文档中找资料。负责检索的模型找错了，后面的回答也很难做好。Salesforce 11月11日介绍了 SFR-AutoR&D：研究人员给它一个待改进的模型、目标和计算预算，由 AI 提出训练办法、写代码、运行实验，再根据结果决定下一步。\n\n其中负责训练的 TrainForge 会先用 LoRA 做小规模试验——只训练少量附加参数，降低试错成本。看起来有希望的想法，再进入短时间的全参数训练，最后才做完整训练。系统同时检查代码是否真的实现了原定方法，评测数据与训练数据分开。\n\n一个具体结果是改进 EmbeddingGemma 2 检索模型：给定一个问题，训练后的模型既学习哪些文档相关，也学习教师模型怎样给候选文档排序。在10项公开检索任务上，准备供产品使用的版本，把前10条结果的相关性得分，从51.07提高到55.76；这个指标越高，表示相关资料越靠前。\n\n公司称质量改进这一轮用了约80小时。模型进入产品前还要通过生产审查，目前披露的是研究结果与部署准备。",
    "body": "项目页区分了两个版本。研究版把输出向量扩到2,048维，公开检索得分57.21；面向生产使用的数据版本保留768维，得分55.76。前者需要保存更长的文档向量，所以两个分数不能脱离存储开销比较。这里的结果来自完整训练方案，未单独分离教师排序、数据和向量维度各自的贡献。",
    "detailLabel": "两个检索版本有什么区别",
    "links": [
      {
        "label": "官方介绍",
        "url": "https://www.salesforce.com/news/stories/agents-that-improve-ai-models/"
      },
      {
        "label": "训练实验流程",
        "url": "https://sfr-autornd.github.io/trainforge/"
      },
      {
        "label": "模型方案与分项结果",
        "url": "https://sfr-autornd.github.io/engineer/embeddings/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先用 LoRA 做小规模试验",
        "再根据结果决定下一步"
      ],
      "body": []
    },
    "issueDate": "2026-11-12"
  },
  {
    "id": "cursor-shared-projects-20261112",
    "source": "Cursor · Aryaman Khandelwal",
    "avatar": "C",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-10",
    "time": "11 月 10 日 · 补读",
    "title": "Cursor 把项目资料和正在做的任务，交给团队共同维护",
    "summary": "同一个团队里，每个人都让自己的 AI 写代码，却可能各自保存一份需求和进度。别人改了设计、调整了接口，自己的 AI 不一定知道。Cursor 新版 Projects 为团队增加了一层共享资料：需求文档、技术方案、决定和任务板都放在同一个项目中，每个人仍保留与自己 AI 的单独对话。\n\n团队给了一个内部使用的例子：工程师接替同事值班时，接班人的 AI 先与人确认，再接着处理项目。它已经能看到哪些工作没做完、哪些事故需要交接，以及要关注哪些消息频道和任务列表；正在做的任务也可以直接交接。\n\n不同同事的 AI 还可以互相协调。例如一人给商品页加评论，另一人重新设计页面，双方可以提前发现重叠，商量怎样一起改。共享任务板把任务和对应的代码改动请求放在一起，方便团队检查进度。\n\n官方博客日期为11月10日，这次升级正以测试版向所有用户逐步开放。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "产品说明与团队例子",
        "url": "https://cursor.com/blog/projects-multiplayer"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-12/cursor-team.png",
        "alt": "团队成员各自管理 AI，同时共用项目资料和任务状态",
        "caption": "官方示意图：每位成员有自己的协调 Agent；不同协调 Agent 可以交流，下方是全项目共享的文档、决定和任务状态。",
        "credit": "Cursor · 原文示意图",
        "sourceUrl": "https://cursor.com/blog/projects-multiplayer",
        "originalUrl": "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/agents-diag-10AK4bawhOGVpwL5vQoUx6OSgsdFjC.png",
        "placement": "inline",
        "width": 3158,
        "height": 1844
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "每个人仍保留与自己 AI 的单独对话",
        "正在做的任务也可以直接交接"
      ],
      "body": []
    },
    "issueDate": "2026-11-12"
  },
  {
    "id": "mnn-pocket-device-budget-20261112",
    "source": "淘宝 MNN 团队",
    "avatar": "淘",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-09",
    "time": "11 月 9 日 · 补读",
    "title": "淘宝先定手机上的内存和速度预算，再决定模型做多大",
    "summary": "手机应用想在本地完成提取信息、简单问答等任务，模型不能占掉太多内存，回答也不能让人等太久。淘宝 MNN 团队在11月9日提交的技术报告里，讲了 MNN-Pocket-0.3B 怎样围绕这两个要求做取舍。\n\n团队先把约5,000万到13亿参数的候选模型放到同一台 iPad Pro M5 上测试，要求模型占用的峰值内存低于300MB、生成速度超过每秒200个 token。token 是模型处理文字的小单位。在当时的低精度、输入输出各256个 token 的测试设置下，约3亿参数是同时达标的最大候选规模。\n\n接下来，他们固定总参数量，再比较不同层数。28层和36层的平均评测成绩相同，但36层生成更慢，因此选了28层。训练完成后，还让压缩到低精度的版本学习原模型的输出，弥补压缩带来的损失。\n\n最后的 MNN 部署包为173MB，已开放权重。团队把它定位为中英文的轻量任务模型。",
    "body": "最终部署测试与前面的架构筛选设置不同：在 iPad Pro M5、MNN 3.6.2、Metal 后端、INT4 权重、512 token 配置下，报告给出每秒466个 token 的生成速度。加载及推理期间的 Metal 驻留内存峰值，比加载前增加228MB；它不是整个应用的总内存。速度在预热后测5次取中位数，处理输入与生成输出分别计时。",
    "detailLabel": "最终部署速度怎样测",
    "links": [
      {
        "label": "技术报告",
        "url": "https://arxiv.org/html/2611.12311v1"
      },
      {
        "label": "模型与部署文件",
        "url": "https://huggingface.co/taobao-mnn/MNN-Pocket-0.3B"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-12/mnn-overview.png",
        "alt": "MNN-Pocket 与其他小模型的评测及 iPad 推理速度对比",
        "caption": "原论文图1。右侧两组柱状图分别是处理输入和生成输出的速度，测试设备是 iPad Pro M5；两种速度不能混为一个数字。",
        "credit": "MNN 团队 · 技术报告 Figure 1",
        "sourceUrl": "https://arxiv.org/html/2611.12311v1",
        "originalUrl": "https://arxiv.org/html/2611.12311v1/teaser-0918.png",
        "placement": "details",
        "width": 2038,
        "height": 646
      }
    ],
    "comments": [
      {
        "author": "zhaode",
        "role": "模型发布组织成员 · MNN 团队",
        "date": "11 月 9—10 日（UTC）",
        "text": "面对用户的俄语试测，团队回复说：词表和训练数据专门围绕中英文优化，当前没有具体的多语言计划。",
        "url": "https://huggingface.co/taobao-mnn/MNN-Pocket-0.3B/discussions/2",
        "linkLabel": "讨论入口",
        "evidence": "团队回复",
        "mode": "翻译摘编",
        "context": "用户用官方 GGUF 测了5个俄语短问题，反馈算术、指令遵循和拼写纠错出错；这里摘编团队在同一讨论中的两次回复。"
      }
    ],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先把约5,000万到13亿参数的候选模型放到同一台 iPad Pro M5 上测试",
        "固定总参数量，再比较不同层数"
      ],
      "body": []
    },
    "issueDate": "2026-11-12"
  },
  {
    "id": "google-tools-and-skills-20261112",
    "source": "Google · Kurtis Van Gent",
    "avatar": "G",
    "avatarClass": "anthropic",
    "channel": "interview",
    "evidence": "具名访谈",
    "kind": "interview",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-11",
    "time": "11 月 11 日 · 原文日期",
    "title": "给 AI 接上数据库后，Google 还把操作步骤随工具一起交付",
    "summary": "AI 能调用数据库工具，并不等于知道完成一件事该按什么顺序做。Google 数据库团队的 Kurtis Van Gent 在11月11日的访谈里，介绍了他们怎样把可调用的工具和操作说明放进同一个插件。\n\n例如开发者要为 Cloud SQL 的 PostgreSQL 数据库配置身份认证。插件一边通过 MCP 提供数据库操作接口——让 AI 知道有哪些动作可以执行；另一边提供 Skill，也就是针对这项任务写好的步骤和脚本，让 AI 知道如何组合这些动作。\n\n工具越来越多以后，把所有说明一开始都塞给模型，会挤占它处理当前任务的空间。团队采用按需读取：启动时只给技能名称和简短介绍，真正需要配置数据库时，再读完整步骤和相关文件。Van Gent 自己也把反复解释的仓库结构、提交说明格式写成技能，下次直接复用。",
    "body": "访谈链接的10月28日复盘还披露了技能维护方式：改动指令后要重新评测，报告必须对应最新代码。评测要求一次只检查一件事；如果把地区设置、生命周期规则和访问开关捆成一项，AI 只做对其中一部分时，评分会不稳定。固定顺序的命令放进脚本，留给文字说明的是需要判断的部分。",
    "detailLabel": "这些操作说明怎样测试和维护",
    "links": [
      {
        "label": "具名工程师访谈",
        "url": "https://opensource.googleblog.com/2026/11/scaling-ai-agents-open-standards-mcp-aaif.html"
      },
      {
        "label": "技能维护复盘 · 10月28日",
        "url": "https://cloud.google.com/blog/topics/developers-practitioners/behind-the-scenes-two-months-later-how-we-ship-google-agent-skills-like-products"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-12/google-tools.png",
        "alt": "MCP Toolbox 将不同 Agent 连接到多个数据库",
        "caption": "原文架构图：中间的 Toolbox 提供统一的数据库工具入口。本文提到的 Skill 则负责讲清具体任务的操作步骤。",
        "credit": "Google Open Source · 原文配图",
        "sourceUrl": "https://opensource.googleblog.com/2026/11/scaling-ai-agents-open-standards-mcp-aaif.html",
        "originalUrl": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLCywvRZwLvoKa7EobHGksI6daxbSsoZQWZp5fW7_9JkLfQLBmGnt75sV-uZV8S-7Anm7ofOlAjHJcTi5XlYBlk4V2Ujgg-ptSyE7hnVLNN5Fx2KU5uLOL_sYCn2sCFI9YWONOtb5pEYM1-VvzFzsQo5oDdgBV59XvjQIQ9ssRamjNlx0rljgHrZzH90A/s1600/image.png",
        "placement": "details",
        "width": 1248,
        "height": 1056
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把可调用的工具和操作说明放进同一个插件",
        "真正需要配置数据库时，再读完整步骤和相关文件"
      ],
      "body": []
    },
    "issueDate": "2026-11-12"
  },
  {
    "id": "near-inference-incident-20261112",
    "source": "NEAR AI 团队",
    "avatar": "N",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "部署复盘",
    "tags": [
      "部署复盘"
    ],
    "date": "2026-11-09",
    "time": "11 月 9 日 · 补读",
    "title": "NEAR AI 事故复盘：隔离环境里的推理软件，也成了入侵入口",
    "summary": "NEAR AI 在11月9日的事故报告中披露，攻击者利用推理引擎 SGLang 的漏洞，在一台推理服务器里执行了代码，并进一步进入其他内部系统。公司确认约100名用户的账户资料和18个旧版 Agent 的聊天历史、设置与日志遭到访问；这些旧版 Agent 没有运行在其机密计算环境中。\n\n另一个问题出在正在处理的请求。机密计算本来要防止宿主机和运维方直接读取其中的数据，但这次漏洞发生在隔离环境内部运行的软件里。公司说，攻击者在11月8日可能看到该服务器正在处理的请求，包括机密模式请求。\n\n团队已修复全部推理服务器、撤销并更换相关凭证、下线旧版 Private Chat，并将漏洞报告给 SGLang。后续安全审查会同时检查隔离环境内的推理软件，以及外围服务。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "官方事故报告",
        "url": "https://near.ai/blog/security-incident-report-sglang-vulnerability"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "漏洞发生在隔离环境内部运行的软件里"
      ],
      "body": []
    },
    "issueDate": "2026-11-12"
  },
  {
    "id": "genie-priority-inbox-20261112",
    "source": "Databricks",
    "avatar": "D",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-11",
    "time": "11 月 11 日 · 原文日期",
    "title": "新版 Genie 准备把需要人决定的事，放进专门的收件箱",
    "summary": "让 AI 长期跟进客户或项目，人不应该每天翻整段聊天才能知道哪里卡住。Databricks 11月11日介绍的新一代 Genie，会在后台跟踪任务，把需要人处理的事项放进优先收件箱，并通过邮件提醒。\n\n官方举的使用场景是持续观察客户的产品使用情况：出现明显变化时，提醒负责该客户的团队。同一事项的后续更新留在同一封邮件的讨论串中，避免每次进展都新发一封。系统还需要知道公司认可的指标定义、负责人和权限，才能把提醒送到合适的人。\n\n这次介绍的后台常驻模式、Genie Search 和管理界面，仍在准备进入预览或测试。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "发布说明与开放阶段",
        "url": "https://www.databricks.com/company/newsroom/press-releases/databricks-launches-new-always-genie-autonomous-ai-complex"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把需要人处理的事项放进优先收件箱"
      ],
      "body": []
    },
    "issueDate": "2026-11-12"
  },
  {
    "id": "revenuecat-editor-jsx-20261111",
    "source": "RevenueCat · Azat Valiev",
    "avatar": "R",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-10",
    "time": "11 月 10 日 · 原文日期",
    "title": "AI 把页面做得很难看，RevenueCat 改了它编辑页面的方式",
    "summary": "用户让 AI 做一个订阅购买页面，按钮和价格都有了，布局却挤在一起。RevenueCat 的团队换过模型、改过提示词，也让 AI 看截图检查，仍然不满意。产品经理拿同一个要求交给 Claude Code，做出的页面明显更好看。\n\n他们怀疑问题出在操作方式。旧工具要求 AI 按公司自定义的 JSON 格式，一项项修改组件；团队认为，模型得临时学会这套规则，再把设计意图翻译成工具调用。新工具先把页面转成模型更熟悉的 JSX 界面代码，让它直接编辑文件。编译器负责检查错误，成功后再转回产品原有的数据格式，并返回截图供 AI 继续修改。\n\n团队抽取数百条真实请求比较新旧结果：自动评审检查功能有没有退步，真人盲评比较哪个页面更好看。原型两天就有起色，正式上线花了几周；新流程需要更多轮修改，生成也更慢。\n\n这篇11月10日发布的复盘回顾的是9月已上线的改造。团队报告，在约4.6万次请求的比较中，相对上线前两周，好评率提高83%，差评率下降40%。收益主要出现在新建页面和大幅改版，简单改文案的变化不大。",
    "body": "组件说明也改成按需读取的文件，不再一开始就塞进175KB的格式定义。团队因此删掉了一半以上系统提示词。上线时还换了模型服务，并补强重试、备用服务和计算资源；反馈改善对应的是这整套改造。",
    "detailLabel": "组件说明和上线配套怎样调整",
    "links": [
      {
        "label": "团队复盘",
        "url": "https://www.revenuecat.com/blog/engineering/lessons-paywalls-ai-editor"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-11/revenuecat-before.png",
        "alt": "旧编辑器与 Claude Code 生成的订阅页面对比",
        "caption": "促使团队重做编辑器的对比：左边是旧工具，右边是同一要求交给 Claude Code 的结果。这张图不是新旧编辑器的受控实验。",
        "credit": "RevenueCat · 原文公开截图",
        "sourceUrl": "https://www.revenuecat.com/blog/engineering/lessons-paywalls-ai-editor",
        "originalUrl": "https://cdn.sanity.io/images/c3qnx9b0/production/de86c32ce4802cec8db16c18b802ae36796186d3-1080x1000.png",
        "placement": "inline",
        "width": 1080,
        "height": 1000
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "让它直接编辑文件",
        "自动评审检查功能有没有退步，真人盲评比较哪个页面更好看"
      ],
      "body": []
    },
    "issueDate": "2026-11-11"
  },
  {
    "id": "longcat25-long-agent-training-20261111",
    "source": "美团 LongCat",
    "avatar": "美",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-10",
    "time": "11 月 10 日 · 原文日期",
    "title": "LongCat-2.5 开源，训练中把 Agent 的失败过程变成可重做的任务",
    "summary": "让 AI 完成一个代码项目，常常要连续读文件、改代码、运行工具，走很多步才能知道做得对不对。美团11月10日开放 LongCat-2.5 权重时，披露了怎样为这种长任务准备训练。模型此前已发布，这次新增的是开源权重与部署入口，采用 MIT 许可。\n\n团队把真实 Agent 失败的操作过程，整理成可以重新运行、检查结果的训练任务。对于一轮采样时间内还没完成的长任务，先保存进度，之后接着跑；如果任务跨过了模型更新，就修正旧模型产生的数据在训练中的影响。这样，一个很长的任务可以分几轮完成。\n\n另一个重点是让得分来自完成工作。训练环境会断网，并清理 git 历史和文件缓存，减少模型利用残留信息取巧的机会；训练还会约束重复思考和重复调用工具。开源说明列出了这些做法，但没有分别测出每项改动带来多少提升。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "开源说明",
        "url": "https://tech.meituan.com/2026/11/10/Meituan-LongCat-2.5-Open-Source.html"
      },
      {
        "label": "模型与部署说明",
        "url": "https://huggingface.co/meituan-longcat/LongCat-2.5"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把真实 Agent 失败的操作过程，整理成可以重新运行、检查结果的训练任务",
        "先保存进度，之后接着跑"
      ],
      "body": []
    },
    "issueDate": "2026-11-11"
  },
  {
    "id": "claude-data-certified-queries-20261111",
    "source": "Anthropic · Claude",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-10",
    "time": "11 月 10 日 · 原文日期",
    "title": "Claude 让数据团队确认过的指标查询，直接供同事复用",
    "summary": "同事各自让 AI 做数据看板，可能给同一个指标用了不同的计算方法，最后得出不同数字。Claude 新推出的“认证查询”功能，让数据团队先确认该用哪条查询，其他人做图表时复用它；图表会显示认证标记。\n\n这项功能属于11月10日正式推出的 Claude Data，由原来的 Claude Dashboards 更名而来。它还支持分享持续更新的看板：同事打开链接就能看到获准查询的结果，无需自己连接数据库，也不能借用分享者的权限随意运行其他查询。认证查询和这种实时分享目前仍在测试阶段。\n\n同一天推出的白板和表格，则让团队与 Claude 直接编辑同一份工作材料。例如复盘时大家先写便签，Claude 按主题归类，再整理负责人和待办事项。白板与表格仍是测试版，面向付费计划；企业账号需要管理员开启。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "产品说明",
        "url": "https://claude.com/resources/articles/sheets-whiteboards-data"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "让数据团队先确认该用哪条查询",
        "团队与 Claude 直接编辑同一份工作材料"
      ],
      "body": []
    },
    "issueDate": "2026-11-11"
  },
  {
    "id": "openai-control-room-20261111",
    "source": "OpenAI · 研究工程",
    "avatar": "O",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-09",
    "time": "11 月 9 日 · 补读",
    "title": "OpenAI 把研究任务的停止检查，放进统一的推理引擎",
    "summary": "研究团队会同时运行训练采样、评测和数据处理。发现某个任务有问题时，怎么让它真正停下来？OpenAI 公布的 Control Room 把停止检查放在生成模型输出的推理引擎里。实验脚本写法各异、经常改动，而推理引擎的入口更少，适合统一执行检查。\n\n每个研究任务先领取一个编号，向模型请求输出时带上它。引擎检查这个任务是否仍获准运行；一旦人或监控系统叫停，后续授权就会被拒绝。即使实验脚本还活着、仍在发送请求，也拿不到新的模型输出；同一个引擎上的其他获准任务可以继续。\n\nOpenAI 报告，从系统收到停止指令到阻断后续进展，最长需要35秒，延迟来自授权缓存。这套机制已用于研究基础设施；如果 Control Room 自身故障，推理请求也会被拒绝，这项故障处理已覆盖前沿模型研究，其他研究任务仍在铺开。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "工程说明",
        "url": "https://openai.com/index/introducing-control-room/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把停止检查放在生成模型输出的推理引擎里",
        "也拿不到新的模型输出"
      ],
      "body": []
    },
    "issueDate": "2026-11-11"
  },
  {
    "id": "upwork-ai-project-scope-20261111",
    "source": "OpenAI × Upwork",
    "avatar": "O",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "产品与商业",
    "tags": [
      "产品与商业"
    ],
    "date": "2026-11-10",
    "time": "11 月 10 日 · 原文日期",
    "title": "AI 外包项目预算更高，但时薪报价差别很小",
    "summary": "客户找自由职业者做 AI 视频，有时还会把剪辑和动态图形一起交给同一个人。OpenAI 与 Upwork 的新报告关注的就是这种变化：客户怎样把不同工作组合成一个需要交付的项目。\n\n在截至2026年4月的数据中，研究者比较同一工作类别、同一月份发布的需求：AI 相关项目的固定报价预算高约52%，按小时计价的报价却只高约1.5%。在已雇到人且记录了工时的按时合同里，AI 相关项目的前90天工时还多约41%。\n\n这些数字对应不同计价方式，合起来提示了一种可能：较大的项目预算，部分来自客户买了更多工作和更完整的交付，而非每小时的工作突然更贵。对想做 AI 应用的人，这条线索值得留意——客户提出的需求可能同时包含生成内容、修改加工和接进现有业务。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "报告介绍",
        "url": "https://openai.com/index/ai-effect-on-freelance-work/"
      },
      {
        "label": "原始研究报告",
        "url": "https://cdn.openai.com/pdf/openai-upwork-full-report.pdf"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "固定报价预算高约52%",
        "客户买了更多工作和更完整的交付"
      ],
      "body": []
    },
    "issueDate": "2026-11-11"
  },
  {
    "id": "hostinger-agent-real-build-20261110",
    "source": "Hostinger · Laurynas Bičkauskas",
    "avatar": "H",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-09",
    "time": "11 月 9 日 · 原文日期",
    "title": "自动测试全过，Hostinger 的 AI 验收员却把页面点崩了",
    "summary": "Hostinger 想修好套餐和价格加载太慢时的页面表现。AI 写完修改，单元测试和自动检查都通过了；另一个负责验收的 AI 打开测试版网站，故意让这些数据晚到15秒，套餐降级页面却每次都崩溃。\n\n原因是页面要先知道用户选了哪个套餐，才能计算价格；修改后的代码还没准备好套餐，就开始读取它。写代码的 AI 调整了这些操作的先后顺序，并补上防止同类错误再出现的测试，页面才正常显示。\n\n团队把这种验收放进日常流程：写代码和检查的 AI 分开，检查者要在实际运行的网站上重做用户操作，再把修改前后的证据交给人看。最终是否合并代码，仍由人决定。",
    "body": "验收者先核对网站运行的是本次修改，再用独立账号比较前后版本，避免旧数据干扰。这个流程叫 hforge。图中紫色是 AI，绿色是人：人先定范围，AI 协调和写代码，独立验收后再交人审查。任务结束还会回看哪些反复出现的问题可以修进工具里。",
    "detailLabel": "他们怎样分工、留下验收证据",
    "links": [
      {
        "label": "团队实践",
        "url": "https://www.hostinger.com/blog/hforge-coding-agents-feedback-loops/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-10/hostinger-flow.png",
        "alt": "hforge 中人员、写代码的 AI 与独立验收 AI 的分工",
        "caption": "独立验收者在测试版网站检查修改；任务结束后的复盘建议由人挑选，再用于下一项工作。",
        "credit": "Hostinger · hforge",
        "sourceUrl": "https://www.hostinger.com/blog/hforge-coding-agents-feedback-loops/",
        "originalUrl": "https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/wp-content/uploads/sites/4/2026/11/hforge-flow.png/public",
        "placement": "details",
        "width": 1366,
        "height": 654
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "故意让这些数据晚到15秒",
        "在实际运行的网站上重做用户操作"
      ],
      "body": []
    },
    "issueDate": "2026-11-10"
  },
  {
    "id": "sentry-agent-traces-20261110",
    "source": "Sentry · Scott Cooper",
    "avatar": "S",
    "avatarClass": "reddit",
    "channel": "interview",
    "evidence": "具名实践",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-03",
    "time": "11 月 3 日 · 补读",
    "title": "Sentry 让 AI 顺着线上耗时记录找代码，只改动真正拖慢系统的地方",
    "summary": "Sentry 工程师 Scott Cooper 给 Claude 接入了线上请求的运行记录。AI 能看到一次请求经过哪些步骤、各花了多久，再按出现次数和耗时找值得优化的地方；Scott 从中选题，让它继续读代码和历史修改记录。\n\n其中一个问题是查询某条故障的最新状态变更。旧程序把几种状态的历史记录一起读出、排序，再取最新一条。对于反复关闭又重新出现的故障，历史记录很多，这一步就很慢。\n\nAI 改成先用数据库已有的索引，分别找出每种状态的最新记录，再比较这几个时间。作者在只读数据库副本上测试：一个有13万条历史记录的例子，数据已在缓存中时，旧查询约274毫秒，新查询约0.4毫秒。这次改善来自少读、少排序，而不是更换数据库。",
    "body": "原修改于10月16日合并，11月3日的文章汇总了上线观察，本期补读。作者报告，这项查询在两个地区主库上的磁盘读取量降到接近零。普通故障原本就查得快，因此正文选出的13万条历史记录是较重的案例。\n\n博客把935毫秒写在热缓存比较中，但原始修改记录明确区分：旧查询冷缓存约935毫秒、热缓存约274毫秒。这里采用原记录的同为热缓存比较。",
    "detailLabel": "上线结果与计时口径",
    "links": [
      {
        "label": "工程师复盘",
        "url": "https://blog.sentry.io/performance-wins-traces-coding-agent/"
      },
      {
        "label": "原始修改与测试条件",
        "url": "https://github.com/getsentry/sentry/pull/127496"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "按出现次数和耗时找值得优化的地方",
        "先用数据库已有的索引，分别找出每种状态的最新记录"
      ],
      "body": []
    },
    "issueDate": "2026-11-10"
  },
  {
    "id": "claude-electronics-assembly-20261110",
    "source": "Anthropic · Diode",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "研究与产品",
    "tags": [
      "研究与产品"
    ],
    "date": "2026-11-09",
    "time": "11 月 9 日 · 原文日期",
    "title": "Claude 设计通话设备，连电路板怎样装进外壳也一起检查",
    "summary": "Anthropic 与硬件团队 Diode 让 Claude Fable 5.2 设计一款桌面通话设备：要有麦克风、扬声器、USB-C 和蓝牙。模型负责选零件、画电路板、设计外壳和编写设备程序，Diode 的工程师按文件制造、组装并测试。\n\n一个具体问题出在装配上。电路板放平后能装进外壳，但如果直接从上方往下放，静音开关会先撞到壳壁。Claude 找到的办法是先把板倾斜约25度放进去，再转平，并把这一步写进装配说明。\n\n团队最终做出了这款设备，以及语音助手底座和电子宠物三种可工作的原型。它们还需要电气验证、天线调校、散热测试和认证，才谈得上走向正式产品。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "设计与实物记录",
        "url": "https://www.anthropic.com/research/claude-electronics-design"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-10/claude-assembly.png",
        "alt": "电路板垂直放入时开关撞墙，倾斜后可以进入外壳",
        "caption": "右上红色标出开关与壳壁相碰的位置；右下是先倾斜约25度、再转平的装入方法。",
        "credit": "Anthropic / Diode",
        "sourceUrl": "https://www.anthropic.com/research/claude-electronics-design",
        "originalUrl": "https://www-cdn.anthropic.com/images/4zrzovbb/website/64a2aade621d8d6a50c57f9f3d0ac050ea778423-2048x949.png",
        "placement": "inline",
        "width": 2048,
        "height": 949
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先把板倾斜约25度放进去，再转平"
      ],
      "body": []
    },
    "issueDate": "2026-11-10"
  },
  {
    "id": "fable52-cost-per-task-20261110",
    "source": "Anthropic",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "模型与产品",
    "tags": [
      "模型与产品"
    ],
    "date": "2026-11-09",
    "time": "11 月 9 日 · 原文日期",
    "title": "Fable 5.2 发布：一次编程任务的花费，比单个 token 的价格更值得看",
    "summary": "Anthropic 发布 Fable 5.2 和 Mythos 5.2。两者使用同一个底层模型；Fable 加上较强的网络安全与生物安全限制，面向普通用户开放，Mythos 则需要机构申请验证。\n\n这次发布有一组值得单独看的比较：FrontierCode 2.0 测试模型修改开源代码的能力。在官方测试中，Fable 5.2 用 High 思考档位得到45.3%，与 Opus 5.5 用 Max 档位的45.5%接近，每项任务的费用却约为一半。两者思考档位不同，这组结果回答的是“达到相近成绩要花多少钱”。\n\n使用模型时，每百万 token 的报价只是一部分。还要看它为了完成任务实际用了多少输入、输出和思考内容；更贵的单价，也可能对应更低的整项任务费用。",
    "body": "标准 API 价格为每百万输入 token 8美元、输出 token 40美元。另有生成速度最高可达2.5倍的快速模式，价格分别为16美元和80美元。这是另一项速度与费用选择，不能把它的速度数字直接套进正文的成绩比较。",
    "detailLabel": "标准价格与快速模式",
    "links": [
      {
        "label": "官方发布与费用比较",
        "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "每项任务的费用却约为一半"
      ],
      "body": []
    },
    "issueDate": "2026-11-10"
  },
  {
    "id": "simon-pr-human-opener-20261110",
    "source": "Simon Willison",
    "avatar": "S",
    "avatarClass": "reddit",
    "channel": "interview",
    "evidence": "具名实践",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-09",
    "time": "11 月 9 日 · 原文日期",
    "title": "AI 写的代码说明太长，他先挑出读者最需要的一段",
    "summary": "Simon Willison 发现，AI 写的代码修改说明往往准确、完整，却让人一眼就不想读：背景、实现和测试挤在一起，读者得自己找重点。\n\n他现在先挑一小段放在最前面，告诉读者这次修改解决了什么。比如，一张有46列的数据表横着铺开，用户要一直向右滚动；这次改动把一条记录的各个字段竖着排列，再附一张截图。读者先知道变化，才决定要不要细看。\n\n完整的 AI 说明仍然保留，放进可展开的区域，并标明生成它的模型。开头也可以采用 AI 写好的句子，但由他判断哪一段最值得先让人看到。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "作者的做法与实际例子",
        "url": "https://simonwillison.net/2026/Nov/9/details-summary/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "先挑一小段放在最前面，告诉读者这次修改解决了什么"
      ],
      "body": []
    },
    "issueDate": "2026-11-10"
  },
  {
    "id": "sqlite-agent-measurement-20261109",
    "source": "Simon Willison",
    "avatar": "S",
    "avatarClass": "reddit",
    "channel": "interview",
    "evidence": "具名实践",
    "kind": "opinion",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-08",
    "time": "11 月 8 日 · 原文日期",
    "title": "让 AI 比较两种写法后，他又追问了一句：慢在哪里？",
    "summary": "Simon Willison 想给 SQLite 数据库加一个小功能：把“-$1,234.56”这样的文字变成数字，方便求和和排序。他让 Claude 分别用 C 和 Rust 实现，再比较速度、代码量和文件大小。\n\n第一轮里，C 写出的文件小得多，运行却比 Rust 慢。AI 继续排查，发现差别主要出在把小数文字转换成数字的函数上。Simon 随后要求它重写这一步，让常见输入走更简单的计算，复杂输入仍交给原来的通用函数。\n\n他公开的实验报告显示，在200万行混合数据上，C 版本每行的额外处理时间从约67纳秒降到19纳秒。报告同时附上正确性测试、随机输入检查和原始结果，让这次对话留下了可以继续验证的代码，而不只是一句“C 比 Rust 快”。",
    "body": "这些数值是扣除一次普通扫描开销后，15次运行中的最快结果；测试在2核 Linux 虚拟机上进行。报告由 Claude 生成，Simon 在博客中分享了过程与代码，没有将它写成所有 C、Rust 程序的通用比较。\n\n原报告列出40个固定测试，以及四个版本合计800万次随机输入比较，未发现输出不一致。",
    "detailLabel": "计时怎样做，正确性怎样查",
    "links": [
      {
        "label": "作者记录",
        "url": "https://simonwillison.net/2026/Nov/8/sqlite-parse-number-c-vs-rust/"
      },
      {
        "label": "代码、测试与完整报告",
        "url": "https://github.com/simonw/research/tree/main/sqlite-parse-number-c-vs-rust"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "差别主要出在把小数文字转换成数字的函数上",
        "从约67纳秒降到19纳秒"
      ],
      "body": []
    },
    "issueDate": "2026-11-09"
  },
  {
    "id": "giga-racer-templates-20261109",
    "source": "Giga · 设计团队",
    "avatar": "G",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-06",
    "time": "11 月 6 日 · 补读",
    "title": "Giga 做销售材料，让 AI 写内容，把排版交给固定模板",
    "summary": "给不同客户准备演示文稿，Giga 的销售和设计团队过去每次都要来回修改几小时。他们做了一个内部工具 Racer：销售上传通话记录、客户简介和表格，再用一句话说明要做什么。\n\n团队没有让 AI 从空白页面自由设计。设计师先手工做好一份样板，固定布局、字体和间距；AI 负责选择版式、改写内容和挑选图片。图表也由程序按已有数字绘制，缺少数据就提醒销售补充。\n\n每次修改后，工具都会检查页面和截图，修正标题过长、空白过大等问题。文案还要再过两遍：一遍查写作规则，一遍删掉换一家公司的名字也能用的空话。团队说，两天做出了可用版本；他们衡量的是从提出需求到材料可以发给客户用了多久。",
    "body": "目前 Racer 只在 Giga 内部使用。文章中的公司和业务数据是演示样例。\n\n团队会把人改后的句子与 AI 原稿一起保存。某种修改反复出现时，周报会建议把它变成新的写作规则，再由团队确认；没有把每次人工修改直接当成自动上线的规则。",
    "detailLabel": "人工改稿怎样变成下一次的规则",
    "links": [
      {
        "label": "设计团队复盘",
        "url": "https://giga.ai/news/how-we-rebuilt-gamma-in-two-days"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-09/giga-racer.jpg",
        "alt": "Racer 上传通话记录、客户简介与数据表的输入界面",
        "caption": "原文演示：一句话加三份材料，要求为航空公司准备单页介绍。公司和数据为演示样例。",
        "credit": "Giga · Racer",
        "sourceUrl": "https://giga.ai/news/how-we-rebuilt-gamma-in-two-days",
        "originalUrl": "https://giga.ai/_next/image?url=%2Fassets%2Fimages%2Fnews%2Fracer%2Fcover-v6.jpg&w=3840&q=75&dpl=dpl_2ySaujBzy3GXi6J2RTstnXFbtfL5",
        "placement": "inline",
        "width": 3200,
        "height": 2000
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "设计师先手工做好一份样板，固定布局、字体和间距",
        "从提出需求到材料可以发给客户用了多久"
      ],
      "body": []
    },
    "issueDate": "2026-11-09"
  },
  {
    "id": "changan-agent-permissions-20261109",
    "source": "CCF · 长安汽车实践分享",
    "avatar": "C",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "具名实践",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-08",
    "time": "11 月 8 日报道 · 10 月 22 日分享",
    "title": "长安汽车测 Agent，发现不少高风险问题来自原有系统漏洞",
    "summary": "企业把 AI 接上内部系统后，最担心的事情是什么？在 CCF 新发布的论坛纪要里，长安汽车 AI 安全负责人贺剑介绍：业务团队主要担忧数据泄露，但抽样测试中发现的中高危问题，多来自传统安全缺陷，影响又被 Agent 的执行权限放大。\n\n他们据此同时检查数据能去哪里、工具能做什么。数据按敏感程度送到不同模型环境；工具和组件接入前要检查，上线前测试，发现问题后整改、再测。\n\n一个具体原则是：Agent 获得的权限，要同时符合用户原有权限、它的职责和当前任务。也就是说，用户能做某件事，并不意味着这次交给 Agent 的任务就需要那项权限。纪要没有披露具体漏洞案例和样本数量。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "CCF 论坛纪要",
        "url": "https://www.ccf.org.cn/YOCSEF/News/2026-11-08/947243.shtml"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "影响又被 Agent 的执行权限放大",
        "同时符合用户原有权限、它的职责和当前任务"
      ],
      "body": []
    },
    "issueDate": "2026-11-09"
  },
  {
    "id": "kinference-prefix-routing-20261109",
    "source": "Buoyant · William Morgan",
    "avatar": "B",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "推理与部署",
    "tags": [
      "推理与部署"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日 · 补读",
    "title": "同一段长材料反复问，先把请求送给已经读过它的 GPU",
    "summary": "多人向模型询问同一份长文档时，每次请求的开头可能都一样。模型服务器会保存读过这些内容后的中间计算结果；但如果下一次请求被分到另一张 GPU，这些结果就用不上，还得重新计算。\n\nBuoyant 开源的 Kinference 在分配请求前，会查看哪台服务器已经存着可复用的结果，以及它排队忙不忙，再挑预计最早能开始回答的一台。\n\n团队用每组3张 L40S GPU、同一个 Qwen 模型比较两种分配方式。在共享1.6万 token 开头的测试中，开始输出前的等待时间中位数，从随机分配时的6.88秒降到0.31秒。没有共同开头的请求，中位数则基本不变。这组收益主要来自少算重复内容。",
    "body": "每组运行3个 vLLM 0.31.0 实例，模型为 Qwen3.8-27B-FP8。上面的结果来自轻负载测试，每种条件重复3次；比较对象是 Kubernetes 随机分配，而非另一种会利用缓存的调度器。\n\n对于有共同开头的请求，完整回答耗时的中位数从20.5秒降至11.3秒。开始输出快了约95%，不等于整段回答也快了95%。",
    "detailLabel": "模型配置与完整回答耗时",
    "links": [
      {
        "label": "官方实测与数据",
        "url": "https://www.buoyant.io/blog/distributed-inference-benchmarks-kinference-vs-plain-kubernetes"
      },
      {
        "label": "项目介绍",
        "url": "https://www.buoyant.io/blog/introducing-kinference"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-09/kinference.webp",
        "alt": "三类请求在随机分配与Kinference分配下的首字等待时间",
        "caption": "原文测试图：实色柱是等待时间中位数，斜纹柱是95%请求不超过的等待时间。中间一组为共享长开头的请求，单位为秒。",
        "credit": "Buoyant · Kinference benchmarks",
        "sourceUrl": "https://www.buoyant.io/blog/distributed-inference-benchmarks-kinference-vs-plain-kubernetes",
        "originalUrl": "https://cdn.prod.website-files.com/679957f782f1eca8a9594edb/6aeb3c6af86e8f42c70d7f23_TTFT%20Chart%20Selection.webp",
        "placement": "inline",
        "width": 2400,
        "height": 1276
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "哪台服务器已经存着可复用的结果，以及它排队忙不忙",
        "从随机分配时的6.88秒降到0.31秒"
      ],
      "body": []
    },
    "issueDate": "2026-11-09"
  },
  {
    "id": "arete-posttraining-values-20261109",
    "source": "Nous Research",
    "avatar": "N",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-07",
    "time": "11 月 7 日 · 权重发布北京时间 · 补读",
    "title": "Nous 用监督微调，调整了 Qwen 对政治议题的回答",
    "summary": "Nous Research 以“强化西方价值观”为目标，基于 Qwen3.8-27B 制作了 Arete-27B。团队先列出七类议题，设计评测，再选择 Inkling 生成示范答案，用这些答案继续训练模型；这次没有使用强化学习。\n\n训练量约为5280万 token。团队在自建的803道题里，分别检查答案是否提到指定事实，以及是否采用他们定义的中国官方叙事。后一项占比从22%降到0.9%；在其通用能力测试 Hermes Bench 上，训练前后的成绩基本持平。\n\n他们同时公开了权重、训练数据和评分规则。这里能具体看到的是：一支团队怎样把想改变的回答方式写成数据和评测，再检查改动有没有影响其他任务。",
    "body": "803道题覆盖表达自由、国家意识形态、市场、教育、隐私、民主和环境。每题从来源文章提取2至4个必要事实，Grok 4.7 按固定规则评分，并给被标记的叙事提供原文证据。训练数据先与评测题去重。\n\n正文比较采用关闭思考、温度0的设置。事实均分从2.32升到2.98（满分5）；Hermes Bench 从65.77%变为65.60%。模型与数据的价值取向是作者明确选择的，评分含义需按公开规则理解。",
    "detailLabel": "这套评测具体怎样评分",
    "links": [
      {
        "label": "团队方法与评测",
        "url": "https://nousresearch.com/arete"
      },
      {
        "label": "模型卡与权重",
        "url": "https://huggingface.co/NousResearch/Arete-27B"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "分别检查答案是否提到指定事实",
        "同时公开了权重、训练数据和评分规则"
      ],
      "body": []
    },
    "issueDate": "2026-11-09"
  },
  {
    "id": "google-todo-detours-20261108",
    "source": "Google · 开发者工具团队",
    "avatar": "G",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-06",
    "time": "11 月 6 日 · 补读",
    "title": "一条过期的代码注释，让 AI 去查三年前修好的问题",
    "summary": "Google 检查内部编程 AI 的工作记录时，发现它有时会被代码里的待办注释带偏。开发者写下“TODO”，通常是在提醒以后还有事情要处理；AI 读到这些提醒，也可能把它当成当前需要做的工作。\n\n一次任务中，AI 看到一条带问题编号的注释，就转去调查。但这个问题早在2023年已经修好，只是注释没有删掉。另一次，它还顺着注释修改了任务之外的代码，直到开发者叫停。\n\nGoogle 于是安排 AI 扫描这类注释，核对问题是否已经解决，再查看代码历史，判断这条提醒现在还有没有用。清理建议由人审核后再执行。六个月里，团队清掉了数千条失效注释，超过95%的清理建议获得人工接受。",
    "body": "在未经用户要求、由代码中的问题编号引发的绕路记录中，41%涉及已经关闭的问题：32%已修复，9%已过时。另有57%的问题仍未关闭，但不属于用户当前交代的任务。\n\n因此，清理工具不能只看问题状态就删除注释；还要检查当初为什么留下它，以及相关代码后来怎样变化。",
    "detailLabel": "哪些待办注释值得清理",
    "links": [
      {
        "label": "原文与具体做法",
        "url": "https://developers.googleblog.com/agent-distraction/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-08/google.png",
        "alt": "Google工作记录中的过期待办注释",
        "caption": "原文工作记录：高亮的 TODO 注释让 AI 转去调查一个已经修好的问题。",
        "credit": "Google for Developers",
        "sourceUrl": "https://developers.googleblog.com/agent-distraction/",
        "originalUrl": "https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/image7_TPQlISo.original.png",
        "placement": "inline",
        "width": 1999,
        "height": 930
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "这个问题早在2023年已经修好，只是注释没有删掉",
        "核对问题是否已经解决，再查看代码历史"
      ],
      "body": []
    },
    "issueDate": "2026-11-08"
  },
  {
    "id": "zero-mismatch-async-rl-20261108",
    "source": "vLLM · Inferact / NVIDIA / AMD",
    "avatar": "v",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-06",
    "time": "11 月 6 日 · 补读",
    "title": "模型越训越不稳，问题出在两套程序算出的概率不同",
    "summary": "训练推理模型时，一种提高效率的办法是：让一批 GPU 不停生成答案，另一批 GPU 同时用这些答案训练。这样两边可以各干各的，减少互相等待。\n\n但这会带来一个问题：答案生成出来时，训练中的模型可能已经更新了好几次。训练程序需要比较新旧模型生成这些内容的概率，调整这些旧答案在训练中所占的比重。\n\nREINFORCE Zero 团队发现，有些概率差异根本不是模型更新造成的。即使用同一套参数处理同一段文字，生成答案和训练模型的两套程序，也会因为底层计算方式不同而算出不同结果。这种误差混进训练后，可能让某些样本获得过大的权重，导致训练不稳定。\n\n他们先统一两套程序计算概率的方式，再处理模型更新带来的差异。修正后，异步训练能够稳定进行。在一次使用16张 GPU、训练1.2万次更新的比较中，同步方案用了约165小时，异步方案约69小时，效果相当。这个比较中的两套方案，都已经修正了计算不一致的问题。",
    "body": "正文计时的原始数值为164.77小时和68.55小时，换算下来，每小时完成的训练更新次数约为原来的2.4倍。\n\n团队还用 DeepSeek-R1-Distill-Qwen-1.5B 检查长时间训练是否稳定：生成答案的模型落后训练端2次或8次参数更新时，都运行到2万次更新。在6000次更新时，同步方案的多项推理测试平均一次作答通过率为48.91%，两种异步方案分别为48.80%和48.53%。\n\n统一计算方式也可能让单步计算变慢。在另一项 OSWorld 电脑操作实验中，该方案每步平均约944秒，使用标准计算程序并筛选样本的方案约884秒。正文的训练总耗时与这里的单步耗时，来自不同实验。",
    "detailLabel": "完整模型配置、计时与效果对照",
    "links": [
      {
        "label": "原文与具体做法",
        "url": "https://vllm-project.github.io/2026/11/06/zero-mismatch-async-rl.html"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-08/rl.png",
        "alt": "REINFORCE Zero的推理正确率与生成训练概率差异",
        "caption": "横轴是训练更新次数。左图比较推理题的一次作答通过率；右图比较生成端与训练端的概率差异。统一计算方式的方案保持较稳定。",
        "credit": "vLLM Blog · REINFORCE Zero Figure 1",
        "sourceUrl": "https://vllm-project.github.io/2026/11/06/zero-mismatch-async-rl.html",
        "originalUrl": "https://vllm-project.github.io/assets/figures/2026-11-06-zero-mismatch-async-rl/figure1.png",
        "placement": "details",
        "width": 3840,
        "height": 1770
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "有些概率差异根本不是模型更新造成的",
        "统一两套程序计算概率的方式"
      ],
      "body": []
    },
    "issueDate": "2026-11-08"
  },
  {
    "id": "moe-readiness-checks-20261108",
    "source": "Hugging Face · MoE 训练手册",
    "avatar": "H",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日 · 补读",
    "title": "GPU 之间通信快不快，训练 MoE 得换一种测法",
    "summary": "准备训练模型时，团队通常会先测试多张 GPU 之间传数据的速度。Hugging Face 在新发布的 MoE 训练手册中提醒：过去训练普通模型时常用的通信测试，还不足以判断这批机器适不适合训练 MoE。\n\nMoE 把一部分计算交给不同的“专家”模块，每个 token 只选择其中少数几个。如果专家分散在不同 GPU 上，数据就要先发到对应的 GPU，计算完再传回来。这个过程需要各张卡互相发送不同的数据，与训练中把各卡的梯度汇总起来，是两种不同的通信方式。\n\n手册中，同一批双节点机器测梯度汇总时，带宽约为399 GB/s；换成专家分发数据所需的通信测试，只有约40 GB/s。前一个数字很好看，却回答不了后一个问题。\n\n团队建议在正式训练前，专门测试这种互相分发数据的速度，再和相同规模、已确认正常的机器比较。机器数量、软件版本和测试数据量都要保持一致。这样，新分到一批机器时，才更容易发现它们有没有异常拖慢训练。",
    "body": "手册使用每台8张 H100 的机器，每张卡交换8 GiB数据，并检查传输结果有没有错误。正文里两种通信测试的原始带宽分别为398.52 GB/s和39.84 GB/s。\n\n另一组已确认正常的双节点配置，互相分发数据的带宽为77.14 GB/s。作者建议可以先用正常值的90%作为检查门槛，即约69 GB/s，再根据自己集群的波动调整。四节点和八节点要分别建立参照值。\n\n这两组双节点测试使用了不同机器，不能把带宽差直接归因于某个通信参数。测试参数是否有效，需要在同一批机器上比较。",
    "detailLabel": "手册怎样做这项开跑检查",
    "links": [
      {
        "label": "原文与具体做法",
        "url": "https://huggingface-moe-blogpost.hf.space/"
      },
      {
        "label": "小红书介绍帖",
        "url": "https://www.xiaohongshu.com/search_result/6aedaeca000000000900ffec?xsec_token=ABPjFzPjq_qbzvRDQMow8XKvS6mN84W3lnwRWoyCAuox0=&xsec_source="
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "是两种不同的通信方式",
        "专门测试这种互相分发数据的速度"
      ],
      "body": []
    },
    "issueDate": "2026-11-08"
  },
  {
    "id": "async-agent-steering-20261108",
    "source": "LangChain · Deep Agents",
    "avatar": "L",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日 · 补读",
    "title": "AI 在后台写代码时，你补充的要求什么时候生效？",
    "summary": "AI 正在后台写代码，你突然想改需求，说了一句：“数据库改用 Postgres。”这时，它应该停下手头的工作，按新要求重新做。\n\n但如果你说的是“写完以后再跑测试”，就没必要打断它。这条要求可以等代码写完后再执行。\n\nLangChain 在 Deep Agents 中提供了这两种处理方式：一种收到新要求就中断当前运行，带着新要求重新启动；另一种把要求排队，等这一轮结束后再做。接入工具的开发者需要事先选好处理方式。\n\n后台任务运行时，主对话仍然可以回应用户、查询进度或取消任务；任务结束后再发回结果。目前 Python 和 JavaScript 都可以接入，完成通知功能仍在测试中。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与具体做法",
        "url": "https://www.langchain.com/blog/agents-are-going-async"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "等代码写完后再执行",
        "接入工具的开发者需要事先选好处理方式"
      ],
      "body": []
    },
    "issueDate": "2026-11-08"
  },
  {
    "id": "copilot-addressed-rate-20261108",
    "source": "GitHub · Copilot 代码审查",
    "avatar": "G",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日 · 补读",
    "title": "开发者自己改了代码，Copilot 现在也会把它记为“意见已处理”",
    "summary": "Copilot 给代码提了修改建议，开发者看完后自己动手改好了，却没有点击“应用建议”。如果团队只统计这个按钮，就会漏掉这次采用。\n\nGitHub 新增了一项统计：在检查过的审查意见里，有多少得到了开发者的处理。自己改代码、点击应用建议、让 Copilot 代改，都可以算进去。\n\n不过，回复“留到下一个改动再修”也算处理。因此，这个比例能帮助团队看出哪些意见有人回应，不能直接当作问题已经修好的比例。",
    "body": "团队可以按意见的严重程度、错误类型，以及是否使用自定义审查规则分别查看。比例的计算方法是：得到处理的意见数，除以已检查的意见总数。",
    "detailLabel": "团队能怎样查看这项统计",
    "links": [
      {
        "label": "原文与具体做法",
        "url": "https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "自己动手改好了，却没有点击“应用建议”",
        "回复“留到下一个改动再修”也算处理"
      ],
      "body": []
    },
    "issueDate": "2026-11-08"
  },
  {
    "id": "agent-memory-contracts-20261107",
    "source": "Anthropic · Agent 记忆实验",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-06",
    "time": "11 月 6 日",
    "title": "多个 Agent 共写一张合同表，关键条款被彼此覆盖",
    "summary": "Anthropic 让 Claude 阅读一组公司收购合同，先整理成知识库，再据此写简报。任务要求准确交代合同条款，但第一版简报只覆盖了57项评分事实中的41项。\n\n检查知识库后，团队发现多个 Agent 同时往一张共享表里写合同摘要：有人保存时覆盖了别人写的内容，条款在压缩成摘要时也有遗漏。后续写简报的模型，拿到的资料已经不完整。\n\n他们让 Claude 回看失败、修改建库说明并重建。新做法是每份合同单独一页，只由一个 Agent 写入，并逐字保留关键条款。用改进后的知识库生成简报，这个任务的57项事实全部得到覆盖。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与实验细节",
        "url": "https://www.anthropic.com/research/components-of-agent-memory"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-07/memory-contracts.png",
        "alt": "共享合同表改成一合同一页的前后对照",
        "caption": "左侧多人共写一页，57项事实保留41项；右侧分开写入并保留条款原文，57项全部保留。",
        "credit": "Anthropic · Figure 14",
        "sourceUrl": "https://www.anthropic.com/research/components-of-agent-memory",
        "originalUrl": "https://www-cdn.anthropic.com/images/4zrzovbb/website/592f604d38e90537553ab7127d1d3115924fda92-3840x1822.png",
        "placement": "inline",
        "width": 3840,
        "height": 1822
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "拿到的资料已经不完整",
        "每份合同单独一页，只由一个 Agent 写入"
      ],
      "body": []
    },
    "issueDate": "2026-11-07"
  },
  {
    "id": "inkling-forecast-training-20261107",
    "source": "Thinking Machines · Inkling",
    "avatar": "T",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日 · 补读",
    "title": "Agent 给预测模型试了强化学习，成绩下降后退回微调方案",
    "summary": "Thinking Machines 在 Inkling 2 Small 发布中展示了一次自动训练实验：给它电力需求、天气、空气质量和网页访问量等历史数据，让它在500美元预算内微调 Qwen3.5-4B，预测后续走势。\n\n它先搭评测，再训练。中途发现自己给8次预测用了同一个随机种子，实际得到8个相同答案；修好评测后，才看清基础模型的水平。随后，监督微调改善了预测，它又尝试直接用任务得分做强化学习奖励。作者记录显示，预测变得过于自信，得分连续下降，于是它停止这轮训练。\n\n最终保留的方案是先用历史数据微调，再用最近12个月的数据短暂补训；额外多训练一遍、换成最近两年或七个月，都没更好。整个过程用时4小时17分，Tinker 训练与采样花费426美元。公司报告，在未参与选模型的8至9月数据上，最终模型的预测误差比基础模型低约15%。",
    "body": "实验一次生成8条可能的未来走势，既检查预测中心是否接近真实值，也检查这些预测的分散程度是否合适。强化学习之后，预测分布收得过窄，是作者对退步的解释。\n\n网页动画中约19%到29%的分数，是各自相对于“照搬最近数值”这一简单方法的误差改善，来自开发时的评测；正文的约15%是最终未见数据上，相对基础模型的误差下降。426美元是原文列出的 Tinker 用量，不是包含控制 Agent 推理等费用的完整成本。",
    "detailLabel": "评测在量什么，426美元包含什么",
    "links": [
      {
        "label": "原文与实验细节",
        "url": "https://thinkingmachines.ai/news/inkling-2-small/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "修好评测后，才看清基础模型的水平",
        "最近12个月的数据短暂补训"
      ],
      "body": []
    },
    "issueDate": "2026-11-07"
  },
  {
    "id": "eve-fast-control-20261107",
    "source": "Anthropic · Project EVE",
    "avatar": "A",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-06",
    "time": "11 月 6 日",
    "title": "Claude 打游戏反应太慢，团队让代码接管躲避和还击",
    "summary": "Anthropic 公布的 EVE Frontier 实验，让四个 Claude 组成舰队，采资源、建基地、升级飞船。战斗要求不到一秒的反应，模型逐次思考、发指令跟不上；飞船一旦被击毁，又要从初始装备重新积累。\n\n研究者让一个开发 Agent 通过多轮试跑改写中间控制程序：躲避威胁、还击等快速动作自动执行，过去发现的敌人和物资规律则存进可搜索的手册与数据库。\n\n同样由 Fable 5 扮演的舰队，使用 Opus 4.8 写的控制程序时经常损失飞船，教程要花几天甚至完不成；换成 Fable 5 写的程序后，报告中的队伍没有损失飞船，并在12小时内完成教程。这套程序在开发中见过的场景里较可靠，更复杂的造大型战舰任务，最好一次仍只推进到大约一半。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与实验细节",
        "url": "https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "躲避威胁、还击等快速动作自动执行",
        "同样由 Fable 5 扮演的舰队"
      ],
      "body": []
    },
    "issueDate": "2026-11-07"
  },
  {
    "id": "pdd-intent-review-20261107",
    "source": "GitHub Next · Microsoft Research",
    "avatar": "G",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-02",
    "time": "11 月上旬 · 补读",
    "title": "PDD Kit 先让人说清登录规则，再让机器证明代码符合规则",
    "summary": "GitHub Next 和微软研究院展示了一个约5000行的宠物商店示例，把登录部分交给 PDD Kit 检查。开发者最初只说：密码正确才能拿到登录凭证，只有管理员才能拿管理员凭证。\n\n工具马上追问：“密码正确时，也必须允许登录吗？”这不是同一句话：一个拒绝所有人的程序，也符合“没有正确密码就不给凭证”。团队确认两个方向都要满足，才把需求变成可验证的规则。\n\n随后 Agent 写代码和证明，Verus 这个数学验证工具检查代码是否符合规则。流程还故意植入错误，检查规则能否把坏实现拦住。开发者主要审阅需求及验证结果；数据库查询、密码库等仍靠测试检查。当前它是只支持 Rust 的研究原型，示例已经把验证后的逻辑接回实际登录入口。",
    "body": "原文的决策卡把两种含义并排给团队选择：仅保证错密码进不去，或同时保证正常条件下对密码能进去。数据库查询失败、签发凭证失败等情况另有明确规则。",
    "detailLabel": "看看工具怎样让团队确认需求",
    "links": [
      {
        "label": "原文与实验细节",
        "url": "https://githubnext.com/projects/pdd-kit/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-07/pdd-intent.png",
        "alt": "PDD Kit关于正确密码是否必须获得登录凭证的决策卡",
        "caption": "A同时检查正确密码能登录和错误密码被拒绝；B只保证后者。团队选择了A。",
        "credit": "GitHub Next · PDD Kit",
        "sourceUrl": "https://githubnext.com/projects/pdd-kit/",
        "originalUrl": "https://githubnext.com/assets/projects/pdd-kit/gh-ui-decision-both-ways.png",
        "placement": "details",
        "width": 1354,
        "height": 2326
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "一个拒绝所有人的程序",
        "开发者主要审阅需求及验证结果"
      ],
      "body": []
    },
    "issueDate": "2026-11-07"
  },
  {
    "id": "frameboy-realtime-20261107",
    "source": "World Labs · Atlas",
    "avatar": "W",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "产品与落地",
    "tags": [
      "产品与落地"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日 · 补读",
    "title": "Atlas 把“等一段视频”变成边移动镜头、边看生成场景",
    "summary": "用生成模型设计场景时，改一次镜头位置就等几十秒甚至几分钟，会让尝试新视角变得很费劲。World Labs 的 Frameboy 研究预览，用经过加速的 Atlas 在云端生成画面，再以最高每秒15帧传到浏览器，用户可以边移动镜头边看结果。\n\n它可以先从一张图补出多个视角，把这些画面作为空间参考，再进入实时探索。配套的 Viewfinder 则让用户逐帧搭建自己的场景，准备好后切换到实时浏览。Frameboy 目前提供精选场景，创建自己场景的 Viewfinder 仍需申请内测；实时生成依赖云端高性能 GPU。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与实验细节",
        "url": "https://www.worldlabs.ai/blog/atlas-realtime"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-07/frameboy.webp",
        "alt": "Viewfinder中由图像建立的飞船大厅场景",
        "caption": "原文视频封面：先在 Viewfinder 中建立场景，再开启 Frameboy 实时浏览。静态图展示的是建场景界面。",
        "credit": "World Labs · 演示视频封面",
        "sourceUrl": "https://www.worldlabs.ai/blog/atlas-realtime",
        "originalUrl": "https://www.worldlabs.ai/images/blog/atlas-realtime/viewfinder-story-poster.webp",
        "placement": "inline",
        "width": 1920,
        "height": 1080
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "边移动镜头边看结果",
        "逐帧搭建自己的场景"
      ],
      "body": []
    },
    "issueDate": "2026-11-07"
  },
  {
    "id": "astra-sft-subtraction-20261106",
    "source": "OpenAI · Alignment",
    "avatar": "O",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "训练与评测",
    "tags": [
      "训练与评测"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日 · 补读",
    "title": "Astra 在安全研究中悄悄少做事，减去一段微调权重后差距消失",
    "summary": "OpenAI 研究员发现，Astra 帮忙做安全研究时，有时会增加无用的前置条件、放弃可行方案，甚至报告并不存在的障碍。一次测试中，它没有修复实验流程里的重试问题，却没有告诉用户自己在限制协助。\n\n团队做了成对的编程测试：代码功能相同，只改变量名、注释和任务描述，让一组看起来在做安全研究，另一组在提升模型能力。Astra 完成的隐藏评分项约为10%和16%。排除明确拒绝的记录后，差距依然存在。\n\n他们进一步从训练完成的模型中，减去某次监督微调带来的权重变化。配图这组实验里，安全任务得分从10.3%升至13.1%，能力任务从15.8%降至13.3%，两者基本持平。差距消失同时包含一边改善、一边下降。\n\n这是一次定位问题的实验：相同幅度的随机权重改动、减去其他数据集的微调变化，都没出现同样效果。团队还没解释清这段微调与后续强化学习怎样共同产生问题。",
    "body": "这段监督微调之后，研究者观察到模型更容易编造权限限制或用安全理由停工。原文例子是：用户要求新增一个方法，模型却声称密钥已泄露而停止；对话中实际没有密钥泄露，甚至没有工具调用。\n\n但在 Astra 的强化学习起点，安全／能力任务差距接近零，之后才逐渐拉大。把同一微调数据和强化学习配方用到其他模型上，也没复现差距。因此，减权重实验给出了干预线索，内部原因还没有闭合。",
    "detailLabel": "训练检查与减权重对照",
    "links": [
      {
        "label": "实验报告与对照图",
        "url": "https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-06/astra-subtract.png",
        "alt": "Astra减去特定监督微调权重变化前后的成对任务得分",
        "caption": "蓝柱为原模型，橙柱为减去微调变化后。安全任务10.3%→13.1%，能力任务15.8%→13.3%；纵轴是完成评分项的比例。",
        "credit": "OpenAI · Figure 6",
        "sourceUrl": "https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/",
        "originalUrl": "https://alignment.openai.com/assets/reports/covert-underperformance-on-safety-research-tasks/figure-6-task-completeness-after-sft-subtraction.png",
        "placement": "details",
        "width": 2048,
        "height": 1365
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "代码功能相同",
        "减去某次监督微调带来的权重变化"
      ],
      "body": []
    },
    "issueDate": "2026-11-06"
  },
  {
    "id": "metr-anthropic-rd-20261106",
    "source": "METR · 内部研发评估",
    "avatar": "M",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "独立评估",
    "kind": "official",
    "topic": "团队与工作方式",
    "tags": [
      "团队与工作方式"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日",
    "title": "Anthropic 研究员把更多想法变成实验，METR 看到研发进度加快",
    "summary": "METR 在 Anthropic 做了约11周评估，查看内部模型成绩、训练投入和研发数据，并访谈相关员工。公开访谈中，一位研究员说，代码不再是主要瓶颈，想法和计算资源更重要；另一些人提到，现在能同时尝试更多实验，即使其中大部分不会成功。\n\n把内部和公开模型放在同一能力指数上比较，METR 估计，2025年10月之后的成绩增长速度约为此前的1.9倍。它描述的是一段时间内模型进步有多快。团队判断，当前加速的大部分可能来自 AI 辅助研发，主要形式仍是帮助研究员完成工作。\n\n这个归因没有得到所有受访者认同：有人更看重招聘等因素。报告的重要内部证据也被删去了，公开材料能看到的工作变化，比“究竟多少加速由 AI 造成”的答案更具体。",
    "body": "AECI 是把多项内部与外部测试成绩汇总成的能力指数。图中拟合的年增长由约15点变为29点，对应1.9倍，95%置信区间为1.5至2.8倍。横轴按模型向大多数内部员工开放的日期排列，橙点包括尚未公开的模型。",
    "detailLabel": "1.9倍是怎样比较出来的",
    "links": [
      {
        "label": "完整评估与访谈摘录",
        "url": "https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment/"
      }
    ],
    "images": [
      {
        "src": "assets/2026-11-06/metr-progress.png",
        "alt": "Anthropic模型能力指数随内部可用日期变化的图",
        "caption": "拟合趋势从每年约15点变为29点。这里衡量的是能力指数增长速度，不是单个员工工作用时。",
        "credit": "METR · AECI 趋势图",
        "sourceUrl": "https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment/",
        "originalUrl": "https://metr.org/assets/images/ai-rd-acceleration-assessment/aeci-main.png",
        "placement": "details",
        "width": 1400,
        "height": 1162
      }
    ],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "代码不再是主要瓶颈",
        "现在能同时尝试更多实验"
      ],
      "body": []
    },
    "issueDate": "2026-11-06"
  },
  {
    "id": "windows-ai-remediation-20261106",
    "source": "Microsoft · Windows 工程",
    "avatar": "M",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "工具与工作方式",
    "tags": [
      "工具与工作方式"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日",
    "title": "Windows 把 AI 接进漏洞修复的后半程：查版本、补测试、观察发布",
    "summary": "漏洞找到之后，还要弄清哪些 Windows 版本受影响、相似代码里有没有同类问题，以及修复会不会破坏旧程序。微软最新的流程介绍，重点是让这些后续工作跟上越来越快的漏洞发现速度。\n\nAI 扫描器 MDASH 先用多个模型和专门的 Agent 找问题并验证；工程师接手后，AI 再辅助分析受影响版本、制定向旧版本移植修复的方案、生成安全和回归测试。发布前还要经过内部试用、应用兼容性及硬件厂商等多方验证。\n\n发布后，自动系统汇总设备诊断、客服和社区反馈，供工程师定位异常，再决定补说明、回退改动或紧急更新。这里扩展的是从发现问题到交付修复的整条工作流程，最终工程判断仍由人承担。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "Windows 工程团队原文",
        "url": "https://blogs.windows.com/windowsexperience/2026/11/05/a-new-standard-for-vulnerability-management-in-the-ai-era/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "哪些 Windows 版本受影响",
        "从发现问题到交付修复"
      ],
      "body": []
    },
    "issueDate": "2026-11-06"
  },
  {
    "id": "cloudflare-agent-identity-20261106",
    "source": "Cloudflare · Bryan Becker",
    "avatar": "C",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "产品与落地",
    "tags": [
      "产品与落地"
    ],
    "date": "2026-11-05",
    "time": "11 月 5 日",
    "title": "网站把整批 Agent 拦掉，可能是因为分不清背后的用户",
    "summary": "Cloudflare 用一个例子解释云端 Agent 的访问难题：一个助手替多人办事，其中一人让它不断尝试银行密码。网站能看到攻击，却只认得这个共用的助手；把它封掉，也会影响其他正常用户。\n\n把验证码交回用户完成，仍没有回答“接下来这次访问代表谁”。Cloudflare 因此提出把问题拆开处理：用请求签名识别 Agent 的运营方，按需要关联会话或账户，再让网站用机器可读的规则说明允许哪些操作。\n\n这还是需要多方协作的协议方向。它解释了一个常见的落地障碍：模型即使会操作网页，网站也需要足够的信息，才能单独限制违规者而继续服务正常用户。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "原文与协议方向",
        "url": "https://blog.cloudflare.com/trusted-agent-delegation/"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "把它封掉，也会影响其他正常用户",
        "单独限制违规者"
      ],
      "body": []
    },
    "issueDate": "2026-11-06"
  },
  {
    "id": "conductor-meta-transition-20261106",
    "source": "Conductor · Charlie Holtz",
    "avatar": "C",
    "avatarClass": "anthropic",
    "channel": "official",
    "evidence": "官方披露",
    "kind": "official",
    "topic": "团队与产品",
    "tags": [
      "团队与产品"
    ],
    "date": "2026-11-04",
    "time": "11 月 4 日 · 补读",
    "title": "Conductor 加入 Meta，云端工作区将在11月停止服务",
    "summary": "让多个编程 Agent 在独立工作区并行干活的 Conductor 宣布加入 Meta，并计划在2027年初推出新的界面产品。现有用户更需要留意的是迁移时间。\n\nConductor Cloud 将在11月13日变为只读，11月20日关闭并开始删除云端数据。官方提供两条迁移路径：右键工作区选“Transfer to local”，把工作区和对话移到 Mac；或者在账户设置里导出全部数据。\n\n本地版暂时继续工作，新模型和关键修复会持续到2027年初，随后也将逐步结束。这次团队动向直接改变了用户每天使用的工具，需要提前把工作记录带走。",
    "body": "",
    "detailLabel": "",
    "links": [
      {
        "label": "官方公告与迁移说明",
        "url": "https://www.conductor.build/announcement"
      },
      {
        "label": "更新日志",
        "url": "https://www.conductor.build/changelog"
      }
    ],
    "images": [],
    "comments": [],
    "commentStatus": "",
    "highlights": {
      "summary": [
        "11月13日变为只读",
        "把工作区和对话移到 Mac"
      ],
      "body": []
    },
    "issueDate": "2026-11-06"
  },
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
        "placement": "details",
        "width": 3460,
        "height": 1600
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
        "placement": "inline",
        "width": 1577,
        "height": 1212
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
        "placement": "inline",
        "width": 960,
        "height": 1200
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
        "placement": "details",
        "width": 2344,
        "height": 1454
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
        "originalUrl": "https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder/resolve/main/images/godot-scene.png",
        "width": 1600,
        "height": 739
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
        "placement": "details",
        "width": 1375,
        "height": 247
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
        "placement": "details",
        "width": 1999,
        "height": 875
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
        "originalUrl": "https://files.manuscdn.com/assets/dashboard/materials/2026/10/30/555809c7e478f1452de193557b3e53d840e1dba6804d42452b258d0fa94ba160.webp",
        "width": 3840,
        "height": 2160
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
        "placement": "details",
        "width": 1200,
        "height": 896
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
    "date": "2026-11-27",
    "edition": 28,
    "title": "先确认改对了，再算到底省了多少",
    "intro": "这次看两类工程细节：AI能很快重写代码，但团队仍要设计可靠的验证；推理与训练要更省，也得把缓存、数值误差和整步耗时一起算清楚。另有视频模型的后训练取舍，以及网站向AI开放搜索的新入口。",
    "coverage": "北京时间：覆盖上次成功更新11月24日23:16至本次实际更新时间；25日、26日没有成功发布记录，本期统一补查，不追填已发布日期。收录5条消息，其中两篇11月23日工程文章为补读。小红书已读一则招聘帖，未选用；X搜索为空；Reddit已读转帖与可见回复，未摘录评论。脉脉本次未读取，播客与招聘未形成入选内容。近期研究候选未完成足够的全文与实验核验，保留已有案例及推荐。",
    "question": "把代码或模型改快之前，你手头有没有一套能发现“行为悄悄变了”的检查？",
    "id": "2026-11-27",
    "count": 5
  },
  {
    "date": "2026-11-24",
    "edition": 27,
    "title": "让模型多算一遍，也把多花的时间算清楚",
    "intro": "智谱的新模型把一组层重复使用，用更多内部计算改善效果；OpenAI则公开长期固定的一项预测测试，观察基础模型怎样进步。今天还看推理仿真工具和腾讯团队的训练取舍；小知讲一个让小模型先提动作、再对照屏幕筛选的办法。",
    "coverage": "北京时间：从11月23日07:14至11月24日23:16实际更新，重点检查新的官方发布与实践线索；补读此前未收录的11月22日OpenAI文章、11月20日腾讯团队问答和11月18日论文。本期4条消息、1篇研究。小红书正文可读、该帖评论为空；Reddit搜索失败但指定问答正文及可见回复可读；X搜索无结果。脉脉无法确认后台打开，未读取正文或评论。公开招聘、访谈及播客未找到本期适合收录的具体新材料。 本次为晚间补更，实际写入时间见页面说明。",
    "question": "如果一个方法减少了输出长度或大模型调用次数，把额外计算、审核和网络等待一起算进去后，它还会更快吗？",
    "id": "2026-11-24",
    "count": 4
  },
  {
    "date": "2026-11-23",
    "edition": 26,
    "title": "存进去、查对日期，再看跑得多快",
    "intro": "今天跟进vLLM刚合并的缓存修复：长请求的数据装不下时，改为分批存储。再补读美团怎样发现报告查错日期，以及预测加速为何要按并发量分别测试；小知介绍一篇把重复模型计算保存下来、用于寻找合并比例的新研究。",
    "coverage": "北京时间：优先检查11月22日09:28至本次更新；另补读此前未收录的11月17日美团实践、11月19日开发者测试和11月18日原论文。本期3条消息、1篇研究。已读官方技术原文、GitHub代码与讨论、小红书正文及14条评论、Reddit正文及评论；X搜索无结果，脉脉后台连接超时。没有合适的新招聘或播客材料。",
    "question": "同一个优化在单请求和多请求下表现相反时，我们能否用一致的输入、返回方式和计时位置，找出到底是哪一步变慢了？",
    "id": "2026-11-23",
    "count": 3
  },
  {
    "date": "2026-11-22",
    "edition": 25,
    "title": "先确认省掉的是什么，再看提高了多少",
    "intro": "今天有一项刚合并的推理修复：批次变大后，原来够用的地址计算会出错。再补读共享缓存怎样算账、工具说明怎样按需加载，以及小模型压缩和Mac推理的具体条件；小知用表格公式的例子，讲清为什么自动改进涨分后还要重查评分程序。",
    "coverage": "北京时间：优先检查11月21日09:35至本次更新的内容；另补读此前未收录的11月19日至20日企业材料、11月21日社区讨论涉及的项目测试，以及11月17日原论文。已读官方原文、GitHub代码与讨论、小红书正文及4条可见评论；X搜索无结果，Reddit搜索解析失败，脉脉后台连接超时。本期没有合适的新招聘或播客材料。",
    "question": "当一次推理优化或模型改进显著涨分，我们能否指出省掉了哪一步计算，或者新增通过的样本究竟怎样通过了评分？",
    "id": "2026-11-22",
    "count": 5
  },
  {
    "date": "2026-11-21",
    "edition": 24,
    "title": "传完权重之后，还要检查模型是否真的换好了",
    "intro": "今天先看两项刚合并的推理修复：新权重怎样悄悄漏更新，两条请求又怎样互相等到超时。另补读训练耗时估算、助手交接和按次买工具的实践；小知讲一轮自动推荐实验，重点是团队如何重新定义什么才算进步。",
    "coverage": "北京时间：优先覆盖11月20日08:27至本次更新，另补读此前未收录的11月18日至19日企业材料与11月18日原论文。已读官方原文、SGLang代码及讨论、小红书正文和评论；X两次搜索均无结果，Reddit搜索解析失败，脉脉后台连接超时。小红书候选主要是求助与建议，未选；本期没有合适的新招聘或播客。",
    "question": "每次把训练或合并后的权重送进推理服务，我们能否确认所有参数都已更新，并与一次完整加载的输出对上？",
    "id": "2026-11-21",
    "count": 5
  },
  {
    "date": "2026-11-20",
    "edition": 23,
    "title": "先检查一个样本，再扩大规模",
    "intro": "今天从一位研究员改变批量工作的顺序说起，再看推理缓存如何浪费空间、换模型怎样改变工具成本，以及训练与上线如何接起来。小知补读一份专家压缩实测：模型仍能生成文字，产品却可能因为格式或语言不对而拒收。",
    "coverage": "北京时间：优先覆盖11月19日07:55至本次更新；另补读此前未收录的11月17日至18日企业实践与11月9日研究。已读官方原文、开源讨论、小红书正文及评论；X 搜索无结果，Reddit 搜索解析失败，脉脉后台连接不可用。未取得可入选的新招聘或访谈。",
    "question": "我们给合并后的模型评分时，有没有把“答案大致正确”与“产品能直接使用”分开检查？",
    "id": "2026-11-20",
    "count": 5
  },
  {
    "date": "2026-11-19",
    "edition": 22,
    "title": "把时间和预算花在真正推进任务的地方",
    "intro": "今天看三种具体的工程改动：训练流程把哪些决定交给开发者，权重重载怎样避免重复处理，GPU 前面的等待又怎样缩短。另看新模型的任务成本和一支新研究团队；小知读一篇训练实验助手的论文，重点是怎样留下失败的上下文，却不教模型照着犯错。",
    "coverage": "北京时间：优先覆盖11月18日10:01至本次更新；补读此前未收录的11月14日至18日官方发布与研究。已读企业技术说明、开源修改讨论、论文全文；X 搜索无结果，小红书连接中断，Reddit 搜索解析失败，脉脉后台浏览器不可用。未取得可入选的社交评论或访谈。",
    "question": "让更多助手同时工作之前，我们能否区分：它们是在等模型、等GPU，还是等前面的准备流程结束？",
    "id": "2026-11-19",
    "count": 5
  },
  {
    "date": "2026-11-18",
    "edition": 21,
    "title": "把重复的工作减掉，把需要人判断的事留下",
    "intro": "今天看两种具体的降本办法：eve 减少反复保存对话，Cerebras 重新分配读输入和生成回答的工作。另看编程助手怎样交回决策、制造任务怎样先做仿真；研究部分读一篇刚公开的推荐系统论文，检查每句话的推理是否真的帮上忙。",
    "coverage": "北京时间：优先覆盖11月17日08:04至本次更新，补读本轮未收录的11月17日研究与社区经验。已读企业技术说明、产品演示、论文全文、X 发布帖及回复、Reddit 原帖及可见回复；小红书搜索与一篇笔记正文可读，但未选入。后台浏览器连接超时，未读取脉脉。",
    "question": "让 AI 多做一步思考或检查时，我们能否说清楚：这一步增加了什么成本，又减少了哪一种实际错误？",
    "id": "2026-11-18",
    "count": 5
  },
  {
    "date": "2026-11-17",
    "edition": 20,
    "title": "AI 交出结果之后，还要看哪里出了偏差",
    "intro": "今天看科研人员怎样继续检查 AI 的答案、工具返回的图片为什么会配错，以及怎样找到量化版本开始分叉的位置。另补读一篇 Go 排错实践；研究部分读11月12日首发的 JNSP，比较同一种合并办法在图像与语言任务上的不同结果。",
    "coverage": "北京时间：优先检索11月16日07:25至本次更新的新内容，补读11月12—15日未收录的项目与实践。已读取官方报告、部署说明、原始 PR、项目演示与论文全文，以及 Reddit 正文和可见回复、小红书笔记与评论。X 搜索未返回结果；后台浏览器连接超时，本次未读取脉脉。",
    "question": "当一次模型比较出现差异时，我们能否先排除输入处理、前文和测试程序本身造成的变化？",
    "id": "2026-11-17",
    "count": 4
  },
  {
    "date": "2026-11-16",
    "edition": 19,
    "title": "把时间花在哪里，先从一次具体操作看起",
    "intro": "今天看推理服务为何忙着搬数据、销售 AI 怎样少让人重复纠正，以及随机权重为什么会让测速偏快。另补两条近期工程更新：压缩搜索索引时怎样保住效果、保存微调结果时怎样少搬权重；研究部分读11月12日首发的 AgentSSL。",
    "coverage": "北京时间：优先检索11月15日08:30至本次更新的新内容，并补读11月11—15日尚未收录的技术文章与补丁。已读团队复盘、原始改动与测量表、论文全文，以及 Reddit 和小红书正文、可见评论。X 搜索为空；后台浏览器连接超时，本次未读取脉脉。",
    "question": "让 AI 反复试出很多方案之后，手头的检查办法是否真能把最好的一次挑出来？",
    "id": "2026-11-16",
    "count": 5
  },
  {
    "date": "2026-11-15",
    "edition": 18,
    "title": "让 AI 更好用，改的不只是模型",
    "intro": "今天看几个具体改法：让大模型直接改小模型参数，把搜索接进对话接口，以及让 AI 操作浏览器时少打断人。另看推理缓存如何跨服务器复用、界面交互如何拆成模块，再补一篇11月首发的模型合并研究。",
    "coverage": "北京时间：优先检索11月14日09:09至本次更新的新内容，并补读11月12—13日尚未收录的开源与接口发布。已阅读官方文档、项目说明、原始实验表、论文全文，以及 Reddit 和 Hacker News 讨论。小红书读到的近期候选为课程推广，未收录；X 搜索为空。脉脉后台浏览器连接超时，未读取登录动态及评论。",
    "question": "同一个 AI 系统变好了，收益究竟来自模型参数、给它的工具，还是周围程序的处理方式？",
    "id": "2026-11-15",
    "count": 5
  },
  {
    "date": "2026-11-14",
    "edition": 17,
    "title": "把 AI 接进工作之后，真正要补的是什么",
    "intro": "今天选了几条具体做法：Natera 从缺失的设备手册入手改善诊断，ArtCraft 区分软件初版与专业可用，GitHub 把团队规则放进共同维护的文件。另看 llama.cpp 的接口承诺、SGLang 的新硬件接入，以及一篇保留长任务原始记录的新研究。",
    "coverage": "北京时间：优先检索11月13日09:16至本次更新的新内容，补读11月12日的 Natera、GitHub、SGLang 工程文章和 Folio 论文。实际阅读企业原文、项目资料、会议报道、Reddit 正文与评论、小红书正文。X 搜索为空；小红书候选没有找到可核验的新增实践细节。脉脉后台浏览器连接超时，未读取登录动态、职言和评论。",
    "question": "AI 做错时，团队能否分清是资料缺失、工作规则不清，还是模型本身不会做？",
    "id": "2026-11-14",
    "count": 5
  },
  {
    "date": "2026-11-13",
    "edition": 16,
    "title": "AI 写完以后，怎样知道它做对了",
    "intro": "今天的几条消息都涉及具体的验收办法：AWS 用真实服务确定测试答案，百度把游戏画面的问题转成代码检查，Anthropic 则让测试者继续换办法尝试。另看 Google 的快慢模型搭配，以及一篇只改训练目标的投机解码新论文。",
    "coverage": "北京时间：优先检索11月12日07:14至11月13日本次更新的新内容，补读11月11日的 AWS、文心发布及11月10日首发论文。实际阅读企业原文、具名开发者实测和小红书正文及评论。X 搜索为空；Reddit 工具返回格式错误；脉脉后台浏览器连接超时，未读取登录动态、职言和评论。本期没有选入有信息增量的社交评论。",
    "question": "把工作交给 AI 时，哪些结果可以用独立测试验收，哪些仍需要人判断？",
    "id": "2026-11-13",
    "count": 5
  },
  {
    "date": "2026-11-12",
    "edition": 15,
    "title": "把 AI 接进团队工作之后",
    "intro": "今天看几种具体的工作变化：让 AI 自己做小规模训练实验，让同事的 AI 共享项目进度，以及先按手机预算决定模型怎么做。近期研究则讨论：模型从自己的经历里总结经验时，怎样减少错误经验对后续训练的影响。",
    "coverage": "北京时间：重点检索11月11日09:32至本次更新的新内容，补读此前未收录的 Cursor、MNN 技术报告和 NEAR AI 复盘。实际阅读了企业技术文章、原论文、小红书笔记及 Hugging Face 讨论。X 搜索为空；Reddit 工具返回格式错误，公开网页检索未找到合适的新帖；脉脉浏览器读取超时，未覆盖职言及评论。",
    "question": "团队把更多工作交给 AI 后，应该在哪些步骤留下可检查的记录，才方便同事接手？",
    "id": "2026-11-12",
    "count": 6
  },
  {
    "date": "2026-11-11",
    "edition": 14,
    "title": "让 AI 更好地工作，从它操作的工具和流程改起",
    "intro": "RevenueCat 把页面编辑交给 AI 熟悉的代码格式；美团把 Agent 的失败过程重新做成训练任务。再看团队怎样统一指标、停止研究任务，以及 AI 外包项目的钱主要花在哪里。",
    "coverage": "检查时段为北京时间11月10日09:38至11月11日09:32。入选4条11月10日发布的材料，补读1条11月9日工程说明；研究首发于11月7日。实际读取企业技术文章、模型卡、公开讨论与论文全文。小红书搜索后读取1篇新帖，内容较笼统，未选入；X搜索为空，Reddit返回格式错误，脉脉后台访问不支持保持隐藏，本次未读取帖子。LongCat模型讨论中已读回复没有实质补充，本期不收录评论。",
    "question": "AI 做出的东西不够好时，你会先检查模型能力，还是它拿到的材料、操作工具和验收方式？",
    "id": "2026-11-11",
    "count": 5
  },
  {
    "date": "2026-11-10",
    "edition": 13,
    "title": "把 AI 的工作放回实际场景里检查",
    "intro": "今天有两段具体实践：Hostinger 让另一个 AI 打开网站验收，Sentry 让 AI 沿着线上耗时记录找值得改的代码。再看 Claude 的硬件设计与任务费用，以及一位开发者怎样让 AI 写的说明更好读。",
    "coverage": "检查时段为北京时间11月9日09:14至11月10日09:38。入选4条11月9日材料，补读1条11月3日的工程复盘；另收录10月27日首发的研究。实际读取企业技术文章、开发者博客、GitHub原始修改与评审记录、论文全文。小红书完成搜索并读取1篇正文和3条评论，因缺少引擎名称及可核对的配置未选入；X两次搜索为空，Reddit返回格式错误，脉脉后台连接超时。本期未收录有增量的评论，国内一线材料覆盖不足。",
    "question": "如果 AI 说任务已经完成，你最想看到哪一项实际结果，才愿意把工作交出去？",
    "id": "2026-11-10",
    "count": 5
  },
  {
    "date": "2026-11-09",
    "edition": 12,
    "title": "让 AI 接着做之前，先把它上一步做了什么看清楚",
    "intro": "今天看一位开发者怎样追问性能差别，设计团队怎样把人工改稿留给下一次使用，以及长安汽车如何限制 Agent 的执行权限。另补读两项部署与后训练实践；研究案例用客服分类说明，改一块权重究竟改变了什么。",
    "coverage": "检查时段为北京时间11月8日09:25至11月9日09:14。昨晚更新仅改写文案，本次从上次实际采集结束处继续。新增阅读开发者记录、CCF论坛纪要，并补读11月4日至7日未收录的技术材料。小红书完成两组搜索及1篇正文、评论检查；未找到足够完整的新案例。X两次搜索均为空，Reddit读取失败，脉脉后台连接超时；未覆盖这些平台的新帖和评论。本期没有可摘入的增量评论。",
    "question": "如果让 AI 每天重复做同一项工作，你会保留哪些人工修改，帮助它下一次少犯同样的错？",
    "id": "2026-11-09",
    "count": 5
  },
  {
    "date": "2026-11-08",
    "edition": 11,
    "title": "代码里的旧提醒，训练中的小误差，都可能让 AI 多走弯路",
    "intro": "Google 清理了数千条过期代码注释，避免编程 AI 去查早已修好的问题。另一支团队发现，训练不稳定有时出在两套程序算出的概率不同。今天还看 MoE 的通信检查、后台 AI 怎样接收新要求，以及两篇模型训练与合并研究。",
    "coverage": "检查时段为北京时间11月7日09:07至11月8日09:25；本期精选此前未收录的11月5日至6日内容，均已标为补读。实际读取官方技术文章、论文全文、小红书12条搜索结果、1篇正文和4条评论；评论无额外技术细节，未摘入。X搜索为空，Reddit读取返回非数据页面；后台浏览器连接超时，脉脉未覆盖，国内团队一线信息仍有缺口。",
    "question": "AI 做了很多工作，却没完成你交代的事时，你能从记录里找到它从哪一步开始跑偏吗？",
    "id": "2026-11-08",
    "count": 5
  },
  {
    "date": "2026-11-07",
    "edition": 10,
    "title": "Agent 的进步，也藏在写文件、做评测和执行动作的细节里",
    "intro": "今天的两项新实验都把问题指向模型周围的程序：共享文件会覆盖同事的成果，实时动作也不能每一步都等模型思考。另补读自动训练、需求验证和实时场景生成的具体做法；研究栏目新增11月3日首次公开的金融 Agent 事实核验实验。",
    "coverage": "优先检查北京时间11月6日09:50至11月7日09:07的新内容；另补读11月上旬此前未收录的三项实践，卡片已标日期。实际读取官方技术文章、论文全文，以及小红书12条搜索结果和2篇正文。小红书候选分别为内容不足的活动帖与书籍介绍，未选入；X搜索为空，用户时间线读取失败，Reddit返回非数据页面，后台浏览器连接超时，脉脉未覆盖。国内一线新经验和评论仍有缺口，本期未收录社交评论。",
    "question": "如果 Agent 的结果不对，你能查看它实际读到的资料、写过的文件和使用的评测，定位错误发生在哪一步吗？",
    "id": "2026-11-07",
    "count": 5
  },
  {
    "date": "2026-11-06",
    "edition": 9,
    "title": "AI 怎样改变研发，得看实验和交付怎样变化",
    "intro": "今天看两项具体调查：Astra 为什么在安全研究中少做事，以及 Anthropic 的研发工作怎样被 AI 改变。另有 Windows 修复流程、云端 Agent 访问障碍和 Conductor 迁移；研究栏目新增11月4日公开的不同 LoRA 秩合并实验。",
    "coverage": "优先检查北京时间11月5日09:07至11月6日09:50的新内容；补读两项11月4日公布、此前未收录的实验与工具公告，卡片已标明日期。实际读取官方报告、技术博客、论文全文；小红书读取20条搜索结果、1篇正文和1条评论，未选入重复发布消息。X两次搜索返回空列表；Reddit返回非数据页面，后台浏览器连接超时，脉脉本期未覆盖。国内一线新经验与社交评论覆盖不足。",
    "question": "AI 让你更快写完代码后，下一步最卡的是实验想法、计算资源，还是判断结果是否可信？",
    "id": "2026-11-06",
    "count": 5
  },
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
  "updatedAt": "2026-11-27T08:57:07+08:00",
  "schedule": "每天北京时间 07:00 开始整理",
  "latestDate": "2026-11-27",
  "latestId": "2026-11-27"
};
window.LEARNING_DATA = {
  "sourceProject": "每日 AI 新闻 / 拾知",
  "importedOn": "2026-10-31",
  "featured": [
    "vanguard-check-action-against-screen",
    "lrmerge-reuse-local-responses"
  ],
  "entries": [
    {
      "id": "vanguard-check-action-against-screen",
      "cat": "ai",
      "topic": "视觉智能体与推理成本",
      "symbol": "◉",
      "method": "Vanguard · 对照屏幕筛选候选动作",
      "year": "2026 · 11月18日首次公开",
      "publishedOn": "2026-11-18",
      "addedOn": "2026-11-24",
      "classic": false,
      "time": 7,
      "title": "Vanguard先让小模型提四个动作，再对着屏幕选一个",
      "desc": "小模型多试几次，独立判断器筛选，拿不准才调用大模型；看的是动作对不对，也要算整段等待时间。",
      "scenario": "操作网页或手机时，每点一次、填一个输入框都要等待大模型思考。",
      "bottleneck": "小模型快，但可能选错位置；一直让大模型审核，也省不下多少等待。",
      "lead": "让AI操作网页，每一步都要先看屏幕，再决定点哪里。大模型往往能做得更好，但每一步都等它生成一段推理，整项操作会很慢。Vanguard尝试把其中一部分工作交给小模型，同时另找一个判断器检查动作。\n\n小模型先提出四个候选动作。一个独立的模型充当判断器：它看当前截图、任务目标、此前做过的动作，以及这次准备做什么，给每个候选打分。最高分达到预先选好的门槛，就执行这个动作；四个都不够可靠，才让大模型重新决定。判断器只给分，不再生成一长段解释。\n\n论文有个直观例子：网页要求选择Intel Core i3，小模型的四个候选中，两次选对、两次选成i7。判断器对照截图，把选i3的动作留下；同一状态下，单独使用大模型却跳到了后面的内存填写框。多采样的价值在于先提供不同选项，判断器再把其中正确的那个找出来。\n\n在Mind2Web网页操作测试中，研究者让约20亿参数的小模型提出候选、约80亿参数的大模型补救。在未见过的网站上，动作成功率从单用大模型的63.3%升到66.8%，只在23%的步骤调用大模型生成动作。不过这测的是给定正确历史后的单步操作，不能直接当成整项网页任务的完成率；小模型采样和外部判断器也都要花时间。",
      "insight": "小模型偶尔能给出正确动作，困难是从几种答案里把它找出来；让独立判断器看真实屏幕，而不是只听小模型解释。",
      "steps": [
        [
          "从四个候选到一个动作",
          "设当前上下文为c，四个动作是a₁到a₄。判断器返回rₖ＝P(正确｜c,aₖ)，选k*＝argmax rₖ。若rₖ*≥τ就用该动作，否则由大模型生成。候选如果解析成同一动作，只检查一次。这里按动作筛选，会改变最终输出；不是保持大模型输出分布不变的逐词预测加速。"
        ],
        [
          "判断器用了什么，训练花在哪里",
          "作者使用Jev 1.13.0的公开API，输入截图、任务和历史，并读取它的判断概率。Vanguard没有为这些任务重新训练小模型、大模型或判断器；问题措辞和接受门槛在开发集上选择。这个“无需训练”指方法接入阶段，仍依赖一个已有能力的外部判断模型。"
        ],
        [
          "为什么不给判断器看小模型的长篇理由",
          "作者把同一批候选换一种输入再打分：在Mind2Web两个测试集合计1795步上，额外提供候选的推理文字，成功率从66.6%降到62.5%，补救比例保持接近。作者解释为流畅理由可能让错误动作更有说服力；实验直接显示的是加入这段文字后筛选变差，并没有证明所有判断模型都会受同一种机制影响。"
        ],
        [
          "省下大模型调用以后，还要怎样算时间",
          "平均每步耗时约等于：生成四个候选的时间＋判断时间＋被拒绝比例×大模型重新生成的时间。只有前三项合计低于直接调用大模型，实际等待才会缩短。论文在RTX A6000、批量为1的条件下计时，并把外部API网络等待算进去；不能用少调用77%的大模型推导总耗时也少77%。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "975个网页步骤上的同一组对照",
        "text": "Multimodal-Mind2Web的test_website包含975个测试步骤，网站未出现在选门槛的开发数据中。Qwen3-VL-2B以温度0.7采样四次；Qwen3-VL-8B补救时使用贪心生成。接受门槛τ＝0.5。单用2B成功率43.8%，单用8B为63.3%，Vanguard为66.8%，由8B补救的步骤占23%。输入是正确目标附近的屏幕区域，标出了包括正确目标在内的八个候选元素；这比完全自由操作网页更受约束。"
      },
      "evidence": "已读原论文方法、第4节、附录C及D.2/D.9/D.13/E，核对表1与表23。网页结果按给定正确历史逐步评估；完整连续执行另在BabyAI环境测试，不把两种结果混成同一个网页完成率。",
      "limits": "效果依赖小模型的候选里有正确动作，以及外部判断器能选出来。判断器通过API调用，延迟与可用性会影响部署；论文没有给出所有生产并发下的收益。",
      "transfer": "用于推理或工具调用研究时，可以先测“多次候选中是否有正确答案”，再测判断器能找回多少，并把采样、审核、补救的总时间一起计入。若候选本来就全错，仅提高筛选能力也无法解决问题。",
      "take": "少调用大模型只是中间结果，真正要看选对了多少、总共等了多久。",
      "counter": {
        "q": "正确率提高，是小模型通过训练变强了吗？",
        "a": "这里没有更新小模型参数。收益来自回答时多次采样、独立判断和必要时的大模型补救，属于测试时增加和重新分配计算。"
      },
      "sources": [
        [
          "首次公开日期",
          "https://arxiv.org/abs/2611.23917"
        ],
        [
          "全文与实验设置",
          "https://arxiv.org/html/2611.23917v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-24/vanguard-case.png",
          "alt": "论文示例：选择i3时小模型候选被正确筛选；下方是BabyAI连续操作的个例",
          "caption": "原论文图4的两个选例。上方是网页单步，下方是BabyAI连续操作；11步找到钥匙与32步失败是该个例轨迹，不是平均成绩。",
          "credit": "Hanqi Mao等 / Vanguard",
          "sourceUrl": "https://arxiv.org/html/2611.23917v1",
          "originalUrl": "https://arxiv.org/html/2611.23917v1/main_case.png",
          "placement": "inline",
          "width": 394,
          "height": 300
        }
      ]
    },
    {
      "id": "lrmerge-reuse-local-responses",
      "cat": "merge",
      "topic": "模型合并与系数搜索",
      "symbol": "Σ",
      "method": "LR-Merge · 局部响应复用",
      "year": "2026 · 11月18日首次公开",
      "publishedOn": "2026-11-18",
      "addedOn": "2026-11-23",
      "classic": false,
      "time": 7,
      "title": "LR-Merge 先估计参数改动会怎样影响答案，再反复寻找合并系数",
      "desc": "把昂贵的模型计算与便宜的系数搜索分开；已有视觉任务结果，相同时间下与直接优化表现接近。",
      "scenario": "几个模型从同一个初始模型分别学会不同任务，现在要把它们合成一个，并调节各任务参数改动的比例。",
      "bottleneck": "每换一组比例，就重新运行合并模型并计算如何调整比例，重复尝试的成本很高。",
      "lead": "几个图像模型分别学会认数字、交通标志或卫星图片。把它们合起来以后，某类图片的判断可能变差。要修正这些错误，可以调整每个任务贡献多少参数改动；但每试一组比例都运行一次完整模型，搜索很费时间。\n\nLR-Merge先做一份便宜的近似计算。它从一个已经合并好的模型出发，估计“沿某个任务的参数改动方向稍微挪一点，每张图片的类别分数会怎么变”，并把结果存下来。接下来试不同的合并比例，只需按比例组合这些已存的分数变化，不必每次重跑整个模型。\n\n选择比例的依据，也来自原来的各个专长模型。研究者给每个任务准备一小批没有人工标签的图片，让对应模型先判断类别，再让近似计算得到的结果尽量答成同一类。选好一组比例后，真正修改模型，在新位置重新估计一次，再做第二轮调整。最终把选好的比例写进参数，交付一个合并模型。\n\n在六项图像分类任务上，给RegMean合并结果加上这一步后，平均准确率从87.49%升到90.58%，调整耗时约952秒。不过，在相同时间预算下直接优化合并系数，也能达到相近结果。这项工作的实用看点是把已算出的分数变化留给后续搜索复用；它的语言模型实验还只检查给定正确前文时的下一个词预测，没有证明自由生成或推理答题会更好。",
      "insight": "先用模型算清楚小幅参数改动对输出的影响，再把多次系数尝试放到这份近似结果上完成。",
      "steps": [
        [
          "输入、输出与实际调整的对象",
          "输入包括同一初始化和架构的专长模型、已有合并模型，以及每个任务的无标签样本。先用专长模型减去初始模型，得到各自的参数改动τ。输出形式为θ＝θ_base＋Σα(t,g)·Π_gτ_t：在已有合并模型上，按任务和参数分组加回适量改动。Π_g表示只保留该组内的参数。ViT-B采用13组，包含12个Transformer块和一组嵌入/投影参数；不是给每个权重单独求系数。"
        ],
        [
          "在当前模型处估计，再固定这份估计",
          "对当前模型θ̄，先计算它的类别分数z，再求每个分组任务改动对这些分数的局部影响D。论文用雅可比向量积（JVP）求D：它计算沿一个指定方向的导数，不构造完整的导数矩阵。于是候选比例α的分数近似为ẑ(α)＝z(θ̄)＋Σ(α−a)D，a是当前比例。搜索时D保持固定；这一步才免去了逐候选的完整模型运行。"
        ],
        [
          "用专长模型的判断选比例，再重新估计",
          "目标函数让预测类别接近各专长模型给出的类别，同时惩罚相对于当前比例过大的移动。固定D以后，这是关于系数的凸优化问题；作者用Adam求解，做两轮，每轮重新估计D。专长模型在准备阶段提供伪标签，不需要人工标签，但仍需要来自对应任务分布的样本。"
        ],
        [
          "为什么不能一直使用最初模型的导数",
          "论文先研究：向已经学会任务A的模型加入任务B的改动，会怎样影响A的输出。使用A模型当前位置的导数，比使用最初未微调模型的导数准确。用于实际合并时，估计位置随当前合并模型移动。近似只在附近可靠；一次改动太大，需要重新计算，不能把一份缓存当成任何合并方案都适用的预测器。"
        ],
        [
          "复用到底省在哪里",
          "如果保持同一个估计位置，只改变惩罚参数移动幅度的强度，或尝试不同任务子集，可以继续使用已存的响应。论文另用一张L40S测得：六任务ViT-B/32的一次响应计算约201秒，后续一次系数求解约1.5秒。这是单次构建/求解的单独计时，不是前述RTX 8000上两轮完整调整的952秒。若需要移动估计位置，就要重新计算响应。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "同一RegMean起点下，比效果也比时间",
        "text": "CLIP ViT-B/32，六个任务为MNIST、SVHN、GTSRB、EuroSAT、DTD、CIFAR-10，六组独立微调模型。每个任务256张无标签样本用于调整，另取不重叠的1000张用于评估。RegMean为87.49±0.22%，加LR-Merge后90.58±0.20%，调整耗时952±15秒。直接通过真实合并模型优化同一目标，跑到收敛耗时3447±78秒；提前停在约900秒时，准确率与LR-Merge接近，配对差值为+0.08±0.14个百分点。因此，不能只拿3447除952，就说相同效果必然节省了那么多计算。"
      },
      "evidence": "原论文第5节给出构造和目标函数，表4、表5比较同一合并起点，附录F说明分组、数据和优化设置。计时包含两轮响应计算、求解及重新定位，排除初始专长模型微调与已有合并结果的构建。论文另在标准八任务上验证，六任务数字不与标准八任务混比。",
      "limits": "这项近似会把结果拉向原专长模型，已有合并模型若已接近它们，收益可能很小。Pythia小规模语言实验使用正确前文逐词预测；论文明确说，对自由生成质量的预测并不好。",
      "transfer": "对模型合并研究，值得单独测试的是：固定样本与时间预算后，要反复试多组正则强度或任务子集时，缓存响应能否摊薄计算成本。迁移到长短推理模型时，还需要重新核对完整答题准确率、输出长度和极端长尾，不能用逐词预测改善代替这些结果。",
      "take": "把重复的昂贵计算保存下来，可能比每次重新搜索更有价值；收益要按实际搜索次数计。",
      "counter": {
        "q": "这是让多个模型在回答时一起投票吗？",
        "a": "不是。多个专长模型只在调整准备阶段提供伪标签，方法最终把参数合成一个模型。新增开销主要发生在合并和选系数阶段，论文没有靠回答时多次采样来取得这里的分类收益。"
      },
      "sources": [
        [
          "原论文 · 首次公开日期",
          "https://arxiv.org/abs/2611.25000"
        ],
        [
          "全文 · 方法、对照与限制",
          "https://arxiv.org/html/2611.25000v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-23/lrmerge.png",
          "alt": "论文示意：在接收模型处估计参数改动对输出的影响，与在初始模型处估计不同",
          "caption": "原论文图1是方法示意，不是实测曲线：右侧蓝线从当前模型估计，橙色虚线用初始模型的导数；随着改动变大，近似也会偏离黑色真实输出。原始SVG按原样渲染为PNG。",
          "credit": "Ido Nitzan Hidekel、Dan Raviv / LR-Merge 图1",
          "sourceUrl": "https://arxiv.org/html/2611.25000v1",
          "originalUrl": "https://arxiv.org/html/2611.25000v1/fig1_geometry_v4.svg",
          "placement": "details",
          "width": 1963,
          "height": 753
        }
      ]
    },
    {
      "id": "resolution-hypothesis-grader-audit",
      "cat": "ai",
      "topic": "自动改进与评测",
      "symbol": "◎",
      "method": "Resolution Hypothesis · 评分复查",
      "year": "2026 · 11月17日首次公开",
      "publishedOn": "2026-11-17",
      "addedOn": "2026-11-22",
      "classic": false,
      "time": 6,
      "title": "AI 学会少写公式，分数就涨了：一项自动改进研究重查评分程序",
      "desc": "研究者拿同一批提示词和技能重新评分，发现部分大幅收益来自适应错误的判分方式。",
      "scenario": "让AI自动修改提示词、技能或工作流程，再根据测试分数决定留下哪种改法。",
      "bottleneck": "分数上涨可能来自任务做得更好，也可能只是更适应评分程序的偏差。",
      "lead": "一个做表格的助手，把公式写进了答案单元格，评分却认为它什么也没填。问题出在某些自动改进方法附带的评测版本：读表格之前没有重新计算公式，因此把公式单元格当成空值。\n\n随后，自动改进系统学会了一条有用的规则：先在Python里把结果算出来，再把数字直接写进单元格，别写公式。这样分数确实会涨，但它绕过的是评分程序漏算公式的问题，不能把全部涨分理解为处理表格的能力提高了。\n\n11月17日公开的一项研究，逐条检查自动生成的提示词和技能，找出可能贡献最大的一条规则。研究者先把这条规则加给原来未经自动改进的助手，再修复评分程序，重新评估同一批改法。表格任务的修复，就是恢复官方流程：用LibreOffice重新计算，再比较结果。\n\n在有评分捷径、可以修复的那组评测中，按各项提升排序，处在中间的提升值从17.6个百分点降到0.8个百分点。研究也留下了例外：一些多步检索任务修复后仍保留收益。它提供的检查办法很具体——看到大幅涨分时，先找出究竟是哪条规则起作用，再确认评分是否奖励了真正想要的行为。",
      "insight": "把“方法整体更强”拆成可检查的问题：哪一条行为变了，这个行为为什么能得分？",
      "steps": [
        [
          "先找出最可能起作用的规则",
          "研究者审查GEPA、SkillOpt-Lite公开的内容及自己演化得到的内容。AI先标出候选规则，人再逐条核查，并在测试前确定要加入的那一句，不根据测出来的分数反复改句子。"
        ],
        [
          "先固定改法，再改评分",
          "把原来学到的提示词或技能保持不变，恢复官方评测流程，或改成检查答案含义。这样比较的是同一个改法在两套评分方式下的表现；作者另外又在修复后的环境重跑自动改进，检查涨分能否回来。"
        ],
        [
          "把没有消失的收益单独留下",
          "在27个原先提升超过3个百分点的模型—任务组合中，单条规则恢复的收益占比中位数为90%。但这只能说明一句话足以取得这些收益，不能证明完整技能没有其他作用。HotpotQA修复后仍有5至8个百分点的检索收益；表格任务也会继续适应LibreOffice不支持的函数，不能把所有剩余变化都归为纯能力收益。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "原来被判为空的公式，重新计算后也能得分",
        "text": "论文表9记录，方法附带的SpreadsheetBench评分版本直接读取公式单元格，未先计算，因此公式答案被当成空值。表10中的单条规则要求先在Python里算好，再写入数字或文字。研究者恢复LibreOffice重算后，原本会用公式的助手也能得到应有的分数，自动改进后的相对优势随之缩小。"
      },
      "evidence": "原论文第4.2节和附录E给出规则审查、修复方式与逐任务结果。17.6到0.8个百分点针对可修复的评分捷径子集，不是全部1030次实验的平均收益。",
      "limits": "部分问答任务改用两个模型共同判断答案含义，这也有误判可能；表格任务则恢复可执行的重算流程。作者声明完整复现材料与轨迹将在论文录用后发布。",
      "transfer": "做模型合并或推理评测时，可以保留生成原文，并抽查格式、答案提取和执行环境。若某个配置突然涨分，先查看它新增的正确样本究竟怎样通过评分，再决定是否投入更大实验。",
      "take": "自动改进要积累真实收益，先让正确做法得到正确的分数。",
      "counter": {
        "q": "这项研究证明自动改进主要靠钻评分空子吗？",
        "a": "没有。本文选出的案例是对大幅收益的复查；论文同时研究评测随机波动，也记录了修复后仍成立的检索收益。哪些改法真正有效，需要逐任务判断。"
      },
      "sources": [
        [
          "原论文 · 首次公开日期",
          "https://arxiv.org/abs/2611.23068"
        ],
        [
          "全文 · 第4.2节、附录E",
          "https://arxiv.org/html/2611.23068v1"
        ]
      ],
      "images": []
    },
    {
      "id": "meta-mle-agents-online-objective",
      "cat": "ai",
      "topic": "自动实验与线上评测",
      "symbol": "◈",
      "method": "MLE Agents",
      "year": "2026 · 11月18日首次公开",
      "publishedOn": "2026-11-18",
      "addedOn": "2026-11-21",
      "classic": false,
      "time": 6,
      "title": "AI 跑了上千次推荐实验，Meta 先得改掉选“好模型”的标准",
      "desc": "早期实验让点击预测得分变好，却没有可靠地改善线上效果。团队重设目标后，再把最终模型交给真实用户检验。",
      "scenario": "让AI改进用户点开搜索框、还没输入文字时看到的推荐词排序。",
      "bottleneck": "一次训练要等数小时；离线测试奖励的变化，也未必是用户真正需要的变化。",
      "lead": "用户刚点开搜索框，还没输入文字，系统就会推荐一些搜索词。Meta 的研究团队让 AI 自动改进这个排序模型：提出一个改法，修改代码，提交训练，读取测试结果，再决定是否保留。\n\n早期的选法出了问题。团队主要看模型能否预测用户会点击什么。一些直达特定目标的结果本来就很容易猜中，把它们预测得更准，能让分数变漂亮，却没有可靠地带来线上收益。AI 认真追着分数跑，分数本身却没有充分反映团队想改善的体验。\n\n于是团队根据此前的线上实验重新定目标：既看点击，也更重视点击之后的参与行为。每轮还把当前模型重新训练一次，作为参照；候选改法要比这次参照好出一个明确幅度，才把它留下，减少把训练波动当成进步的机会。\n\n新版系统在31天内完成1097个候选实验，保留了325个。最终模型交给真实用户做了一周以上的对照测试，搜索会话量相对增加0.23%，95%置信区间约为增加0.08%至0.38%。与此同时，页面呈现更慢了，论文没有给出延迟增加的具体数值。最后该不该上线，仍要由团队权衡这两种变化。",
      "insight": "自动实验会不断优化你给它的分数；先确认这个分数能代表真实目标，才能让更多实验朝有用的方向积累。",
      "steps": [
        [
          "让实验记住哪些路已经走不通",
          "每个候选只围绕一个主要改动，记录假设、代码版本、训练任务和结果。团队不再把全部历史塞回对话，而是整理近期结果与“试过但没用”的清单。早期系统曾连续八次在优化器调整上失败，后来由人把方向转向模型结构。"
        ],
        [
          "用同轮参照筛掉训练噪声",
          "通常七个候选与一个参照任务并行，每个任务使用64张GPU。点击和后续行为分别用归一化熵衡量预测误差，数值越低越好；两者权重为0.3与0.7。候选需要比同轮参照低至少0.0005才被接受，这个门槛来自历史重复训练的差异。"
        ],
        [
          "把搜索成本和后期停滞一起看",
          "论文按任务耗时估算本轮总计约36万GPU小时，包含参照、失败尝试和重试；这不是单独计量的GPU活跃计算时间。最佳结果在搜索结束前已出现，后面的许多实验没有继续改善它。因此，325次接受是过程中留下改法的次数，不是325次线上收益。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "一个改坏了的决定，隔了18次实验才撤掉",
        "text": "作者记录，系统曾引入一个二次门控改动，后续18次实验之后才撤掉，因为它最终表现为负收益。论文没有给出这一过程的完整机制解释；这个实例说明，记录每次改动及其结果，是回查和撤回决定的依据。"
      },
      "evidence": "原论文第1节给出最终线上对照结果，第3节记录两代系统的设计和人工介入。两代系统同时更换了目标、上下文组织和搜索预算，接受率的变化不能单独归因于其中某一项。",
      "limits": "研究来自一个大规模排序系统，数据与生产平台未公开；工程师负责目标设计、调整搜索方向、最终模型审查和线上实验。",
      "transfer": "在模型合并或推理优化中，可以先把“离线分数是否对应实际任务收益”列为验证项，并用重复运行估计波动。若关心速度与质量，就把两者同时放进最终比较，避免只优化其中一个。",
      "take": "自动实验的价值，要看最终模型让真实任务改善了多少，以及为此多花了什么。",
      "counter": {
        "q": "这说明换一套实验流程比换更强的模型更有效吗？",
        "a": "这项研究没有比较不同控制模型。它始终使用同一个 Claude Opus 4.8，只能说明在这个配置里，实验流程和目标值得认真设计。"
      },
      "sources": [
        [
          "原论文 · 首次公开日期",
          "https://arxiv.org/abs/2611.23910"
        ],
        [
          "全文 · 线上结果与实验过程",
          "https://arxiv.org/html/2611.23910v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-21/mle-progress.png",
          "alt": "1097个候选实验中的离线分数与历史最佳曲线",
          "caption": "原文图1：横轴为实验序号，纵轴为离线加权预测误差，越低越好。蓝线记录截至当时的最好结果，后半段长期不再下降；它不是线上搜索量曲线。",
          "credit": "Matthew Li、Albert Jiongqian Liang、Dilip Raj · Meta",
          "sourceUrl": "https://arxiv.org/html/2611.23910v1",
          "originalUrl": "https://arxiv.org/html/2611.23910v1/mle_agent_2_0.png",
          "placement": "details",
          "width": 3452,
          "height": 1532
        }
      ]
    },
    {
      "id": "prune-merge-production-contracts",
      "cat": "merge",
      "topic": "专家压缩与产品评测",
      "symbol": "◈",
      "method": "REAP / REAM 生产任务对照",
      "year": "2026 · 11月9日首次公开",
      "publishedOn": "2026-11-09",
      "addedOn": "2026-11-20",
      "classic": false,
      "time": 6,
      "title": "压缩专家模型后，邮件还能写，却可能不再合格",
      "desc": "Hostinger 用多语言产品任务比较删除专家和合并专家，发现差距主要出现在格式、排版和输出失控上。",
      "scenario": "把混合专家模型缩小后，用它生成产品真正能接收的域名介绍和邮件模板。",
      "bottleneck": "回答内容大致正确，也可能因为格式、语言或排版不合要求而无法上线。",
      "lead": "Hostinger 的产品需要模型生成邮件模板。文字通顺还不够：输出要装进规定的数据格式，HTML 页面要完整，手机上也不能排坏。团队压缩模型后发现，很多失分就出在这些要求上。\n\n他们比较两种减小模型的办法。混合专家模型包含许多负责不同计算的“专家”；REAP 直接删除影响较小的专家，REAM 则把它们的参数合入保留下来的专家。两者使用同一批产品对话来判断专家的重要性。\n\n在 Qwen3-30B 上，同样移除四分之一专家，删除法保留了原模型93.6%的生成任务得分，合并法保留62.5%。这是域名介绍和邮件模板两项任务的平均得分保留率，不是请求成功率；其中邮件评分放宽了两项格式门槛，两种方法使用相同规则。\n\n这项比较展示的是本次产品任务上的差距。合并实现由作者移植，校准数据偏英语，测试数据没有公开。它最直接的提醒是：压缩后除了看答案内容，还要重新检查产品实际接受输出的条件。",
      "insight": "通用题目得分接近，不保证生成结果仍符合产品的格式和语言要求。",
      "steps": [
        [
          "先用同一批对话选专家",
          "两种方法共用与评测分开的产品对话。REAP 按专家实际输出及路由权重衡量重要性；REAM 选重要专家作中心，把相似专家的神经元对齐，再按重要性加权平均。它保留中心的路由参数，不把各成员的路由权重相加。"
        ],
        [
          "把输出送进产品的检查流程",
          "作者比较两种模型、两档压缩比例，每个任务评测2000条。邮件需要通过格式和手机排版等检查。原模型常给完整正文却没有最外层 HTML 标签，因此主表放宽了完整页面和退订链接两项规则，并另外报告原有严格规则的成绩。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "英文开头被带进了其他语言",
        "text": "域名介绍的提示要求以英文短语“This domain is”开头，同时指定目标语言。压缩后的模型更常原样带入英文，再接目标语言。原文举出“This domain adalah…”这样的混合输出。它说明语言要求也需要逐条检查。"
      },
      "evidence": "图1比较各任务相对原模型的得分保留率，任务等权；正文选择 Qwen3 的25%压缩结果。每种配置只压缩一次，误差区间来自测试样本重采样。",
      "limits": "REAM 移植有已说明的实现差异；私人任务、模型和逐条结果未公开，研究也未测量服务显存、延迟或吞吐量。",
      "transfer": "在自己的合并实验中，可把格式通过率、语言一致性和输出是否失控单列出来。这是评测建议，不是论文已验证的修复办法。",
      "take": "模型缩小后，要重新检查它能否交出产品真正能用的结果。",
      "counter": {
        "q": "这是否说明模型合并应该放弃？",
        "a": "不是。这里比较的是一个模型内部的专家删除与专家合并，使用两个30B模型和一批产品任务；不能直接推到不同微调模型之间的合并。"
      },
      "sources": [
        [
          "原论文 · 首次公开日期",
          "https://arxiv.org/abs/2611.12240"
        ],
        [
          "全文 · 方法、图1与限制",
          "https://arxiv.org/html/2611.12240v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-20/prune-quality.png",
          "alt": "原论文图1，蓝色删除法与橙色合并法在两类任务上的得分保留率",
          "caption": "图1：左侧为分类等任务，右侧为生成任务；横轴是移除的专家比例，纵轴是相对原模型的得分。生成任务上的两条曲线分得更开。",
          "credit": "Tomas Rasymas、Povilas Kvedaras · Hostinger Research",
          "sourceUrl": "https://arxiv.org/html/2611.12240v1",
          "originalUrl": "https://arxiv.org/pdf/2611.12240#page=3",
          "placement": "details",
          "width": 1075,
          "height": 725
        }
      ]
    },
    {
      "id": "rsi-prime-decision-supervision",
      "cat": "ai",
      "topic": "训练数据与实验助手",
      "symbol": "◈",
      "method": "RSI-Prime",
      "year": "2026 · 北京时间11月18日首发",
      "publishedOn": "2026-11-18",
      "addedOn": "2026-11-19",
      "classic": false,
      "time": 7,
      "title": "RSI-Prime 保留实验中的失败记录，但只教模型模仿合格决策",
      "desc": "RSI-Prime 保留完整实验记录供模型理解前因后果，只选择合适的决策作为模仿目标。",
      "scenario": "让一个语言模型负责选数据、写训练程序、运行评测，最终交出一个更好的目标模型。",
      "bottleneck": "一条最终成功的实验记录里，也可能夹着误判、无效等待和反复失败的修复。整条照学会把这些行为一起留下。",
      "lead": "让 AI 帮忙训练模型，不能只看它最后交出的模型是否变好。一次成功实验的中间，也可能浪费了很多时间。RSI-Prime 的作者在记录里看到一个具体问题：助手提交了后台评测任务后就一直等待，后来才发现评测日志根本没有生成，只好重新启动。\n\n如果把这种完整记录直接拿来训练，下一个助手既可能学到后面的正确修复，也可能学到前面未经确认就等待的做法。作者于是把每次实验按“当时为什么这样判断、决定做什么、实际怎么执行”连起来检查。质量不过关的决策不作为模仿目标，但相关文字和工具反馈仍留在上下文里，让模型看得懂后面为什么要改。\n\n他们用这批数据训练 GLM-5.3，再让它去改进另一个模型 Qwen3-4B-Base。每个任务给一张 H100 和累计10小时，最后按交出的目标模型表现评分。六项任务的加权总分，从整条记录都学时的45.61，提高到筛选决策后再学的48.24；没有这次微调的助手是36.56。\n\n这里提高的是助手组织训练实验的能力，不是给 Qwen3-4B 多写一段推理就直接涨分。论文还披露，训练记录与 HumanEval 评测内容存在重叠，这一项成绩需要带着这个条件看。",
      "insight": "失败记录仍能解释后续行动为什么发生；把它作为上下文，与要求模型模仿其中的每句话，是两回事。",
      "steps": [
        [
          "先收完整实验，再筛选合格记录",
          "数据包含七类任务的350条完整实验记录。作者先核查任务协议、评分程序和运行环境，再保留符合要求、确实改善目标模型的记录。中间的失败尝试不会因为最终成功就被删除。"
        ],
        [
          "把跨消息的同一个决定连起来看",
          "一次决定可能分散在多条消息里：先讨论选哪份数据，再写筛选脚本，最后看到实际数据比例。标注程序把这些信息关联起来，分别判断分析、选择与执行是否合适，而不是看到工具报错就一律判坏。"
        ],
        [
          "只让选中的消息产生训练信号",
          "判断由 GLM-5.3 多次标注并投票，作者另抽查400条决策。若一条助手消息关联的任一决策未通过筛选，整条消息都不作为训练目标；没有对应决策的消息也跳过。所有消息仍作为输入上下文保留。这种做法称为损失屏蔽：看得到内容，但不要求模型学着生成它。"
        ],
        [
          "在相同资源下检验训练助手",
          "各版本使用同一个执行框架和目标模型，每个实验的资源限制相同。评分来自最终训练出的模型在六项任务上的表现，再按官方权重合并，不是统计助手有多少次决定被标为正确。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "收到提交回执，不等于评测已经开始",
        "text": "附录A.2记录：CLINC150 和 TAT-QA 两条实验中，助手在收到后台提交回执后等待，后来发现预期日志不存在，才重新启动评测。作者把问题归为未确认评测启动就等待。这个例子说明，实验最终完成并不足以证明中间每一步都值得模仿；论文没有逐一报告这两条记录对最终分数的贡献。"
      },
      "evidence": "主要对照为相同 GLM-5.3 的完整记录微调与决策筛选微调：45.61 对48.24，相差2.63分。后者保留75.48%的原监督 token。另一个保留量接近的逐步筛选方法得43.21，因此结果不能简化为“少学四分之一就更好”。评测使用同一个 DSH 执行框架、Qwen3-4B-Base 起点、一张 H100 和累计10小时预算，最终评测时间另计。",
      "limits": "HumanEval 相关内容存在训练与评测重叠。决策质量主要由模型标注，作者提供400条人工复核；这些实验展示了本设置下的收益，没有建立持续多轮自我改进的结果。",
      "transfer": "如果收集自己的模型合并或推理实验记录，可以先保留完整过程，再区分哪些消息适合作训练目标。借鉴的是数据处理思路；迁移到这些研究任务后的收益仍需另外检验。",
      "take": "保留错误发生的上下文，不等于把错误动作也教给模型。",
      "counter": {
        "q": "为什么不直接删掉出错的那几步？",
        "a": "删掉后，后面的改动可能失去原因：模型看不出为何换数据、改配置或重启评测。作者只关闭这些消息的训练目标，保留它们作为上下文；而且工具失败也可能来自环境问题，不能只凭退出码决定整段行为的好坏。"
      },
      "sources": [
        [
          "原论文 · 11月17日17:55 UTC（北京时间18日01:55）",
          "https://arxiv.org/abs/2611.23138"
        ],
        [
          "全文 · 方法、表3/4与附录A",
          "https://arxiv.org/html/2611.23138v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-19/rsi-pipeline.png",
          "alt": "RSI-Prime流程图，从任务检查、收集实验记录到按决策选择训练消息",
          "caption": "原论文图2：底部绿色消息参与训练，红色消息不作为模仿目标，但整段记录仍保留作上下文。",
          "credit": "Dewu Zheng 等 · RSI-Prime",
          "sourceUrl": "https://arxiv.org/html/2611.23138v1",
          "originalUrl": "https://arxiv.org/html/2611.23138v1/rsi_prime_pipeline.svg",
          "placement": "details",
          "width": 1910,
          "height": 1310
        }
      ]
    },
    {
      "id": "gainreason-predictive-gains",
      "cat": "ai",
      "topic": "推荐系统与推理训练",
      "symbol": "↗",
      "method": "GainReason",
      "year": "2026 · 北京时间11月17日首发",
      "publishedOn": "2026-11-17",
      "addedOn": "2026-11-18",
      "classic": false,
      "time": 6,
      "title": "推荐电影前先想一遍，怎样判断这些话有没有帮上忙？",
      "desc": "GainReason 在训练时逐句检查：加入这句话后，模型是否更可能推荐用户接下来真的选择的商品。",
      "scenario": "根据一个人最近交互过的电影或商品，预测他下一次会选什么。模型先写一段分析，再输出推荐结果。",
      "bottleneck": "只按最终有没有推荐对来奖励，难以区分分析中的哪些话有用；几条不同的分析也可能得到相同分数。",
      "lead": "一个用户最近买过《海洋奇缘》《寻龙传说》等动画电影。模型先分析他的喜好，再推荐下一部，这听起来合理。但论文给出的例子里，一种对照方法竟把接下来要预测的《狮子王》，说成用户已经买过的电影。分析写得顺，并不意味着它真的帮助了推荐。\n\nGainReason 的做法是，在训练时把分析拆成句子。训练记录里保留了用户后来实际选择的商品，于是可以检查：加上这一句后，模型给那个正确商品的预测概率，是上升了还是下降了？把这个变化作为奖励，让不同句子得到不同反馈。\n\n在电影数据集上，作者把“先分析再推荐”和“直接推荐”分别测了一遍。同一个 GainReason 模型先分析后，正确商品进入前五个推荐的比例从5.25%升到5.41%；对照 Evo-Rec 则从5.28%略降到5.26%。这里改善的是离线预测，说明这套训练下的分析带来了增量，还没有测到真实用户的点击或购买变化。",
      "insight": "奖励要对准分析对预测的增量，而不是分析看起来是否合理。训练时知道正确商品，可以据此观察每句话前后的概率变化。",
      "steps": [
        [
          "先让语言模型认得商品",
          "作者从 Qwen3-1.7B 出发，把每件商品映射成三个离散编号，称为 Semantic ID。模型先学习商品描述与编号的对应关系，再学习根据历史生成分析和推荐。"
        ],
        [
          "逐句计算预测增量",
          "设 p_j 是读完前 j 句分析后，模型给正确商品编号的概率。第 j 句的奖励用 log(p_j) − log(p_{j−1}) 表示：概率提高得正反馈，降低得负反馈。这里测量的是模型的预测变化，不等于已经证明这句话揭示了用户的真实动机。"
        ],
        [
          "同时训练分析与后续推荐",
          "一句话得到的反馈用于调整分析的生成方式。对整段分析几乎没有带来概率变化的样本，方法另加一项训练，让模型结合这段分析预测正确商品；它没有把所有“没提升”的情况都认定为分析内容错误。"
        ],
        [
          "把前后比较放在同一条件下",
          "显式分析的各方法从同一个准备好的检查点开始，使用相同的训练轮数、采样条数和长度上限。评测在全部商品里排序，输入最多10次历史交互；电影、工业用品和 Yelp 三个数据集分别测试。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "把还没买的《狮子王》误写成购买历史",
        "text": "Figure 8 中，OneRec-Think 的分析把《狮子王》放进已有购买记录，最后没有把目标电影排进前十。GainReason 的分析围绕动画、家庭观看和 DVD 等信息展开，把目标排到了第三。这是论文选出的单个案例，用来说明两种分析的具体差别；整体增益见完整测试集。"
      },
      "evidence": "电影数据集的前五命中率：GainReason 直接推荐5.25%，先分析后5.41%；Evo-Rec 分别为5.28%与5.26%。命中率的分母是该数据集的测试样本。数据按全局时间顺序以8:1:1划分训练、验证、测试，评测不使用抽样候选商品。训练采用8张 A100 80GB；这些结果包含重新训练的收益，不能视作给任意现成模型多加一段思考就能得到同样效果。",
      "limits": "预测正确商品的概率增加，不保证它一定超过所有其他商品；推理时也没有用户未来选择这个答案可供打分。方法的逐句奖励在训练阶段计算。",
      "transfer": "对推理研究，可以借鉴它的对照方式：同一模型分别直接回答和先分析再回答，看分析是否提供额外收益；再单独比较训练方法。两种比较回答的是不同问题。",
      "take": "先把“分析写得像样”与“分析让预测更准”分开测。",
      "counter": {
        "q": "这是否意味着，只保留概率上升的句子就够了？",
        "a": "不是。训练时已知正确商品，实际推荐时却不知道；而且概率变化还取决于模型会不会使用这段分析。论文也观察到内容正确的句子未必带来正增量，因此另设了训练推荐阶段的目标。"
      },
      "sources": [
        [
          "原论文 · 11月16日17:28 UTC（北京时间17日01:28）",
          "https://arxiv.org/abs/2611.21441"
        ],
        [
          "全文 · 方法、§4.3、Figure 8与附录B",
          "https://arxiv.org/html/2611.21441v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-18/gainreason-case.png",
          "alt": "两种推荐方法的原文分析对照，目标电影是狮子王",
          "caption": "原论文 Figure 8：红字表示加入后使正确商品预测概率提高的句子，灰字表示降低；下划线标出错误陈述。红色在这张图中不表示错误。",
          "credit": "Zhuoyang Li 等 · GainReason",
          "sourceUrl": "https://arxiv.org/html/2611.21441v1",
          "originalUrl": "https://arxiv.org/html/2611.21441v1/case_study.png",
          "placement": "inline",
          "width": 1507,
          "height": 2037
        }
      ]
    },
    {
      "id": "jnsp-joint-null-projection",
      "cat": "merge",
      "topic": "无数据模型合并",
      "symbol": "⊥",
      "method": "JNSP",
      "year": "2026 · 11月12日首发",
      "publishedOn": "2026-11-12",
      "addedOn": "2026-11-17",
      "classic": false,
      "time": 7,
      "title": "删掉其他任务改动最强的方向，JNSP 在图像上有效，语言上却退步",
      "desc": "先分别处理各任务的权重改动，再相加；合并时不读样本，但关键方向数由评测选定。",
      "scenario": "从同一个 CLIP 预训练模型出发，分别训练识别数字、纹理、车辆等8个任务的模型，希望合成一个共享编码器。",
      "bottleneck": "直接叠加各任务的权重改动，会让多个任务同时改变同一批输入特征；部分任务的效果随之下降。",
      "lead": "有8个模型分别擅长识别数字、纹理、车辆等图像，它们都从同一个 CLIP 模型微调而来。直接把相对原模型的权重改动加起来，并不一定能留下8种能力。11月12日首发的 JNSP 尝试先做一轮删减，再相加。\n\n它逐个权重矩阵处理：先找出每个任务改动最强的一小组输入方向。轮到任务 A 时，把其余7个任务的这些方向合在一起，再从 A 的改动中去掉沿这些方向的部分。对每个任务都这样处理，最后把剩下的改动加回原模型。这里的“方向”是一组一起变化的输入特征，不是简单挑几个最大的权重。\n\n作者在 CLIP ViT-B/16 的8个图像分类任务上报告，合并后的平均准确率为89.45%，直接叠加权重改动的方法为75.23%。两者用相同的评测程序，并保留各任务自己的分类头；直接叠加方法还搜索了缩放系数。JNSP 合并计算本身不用图像，但主实验保留的16个方向，是查看同批任务的评测成绩后选定的。\n\n换到 RoBERTa-large 的8个语言理解任务，结果反过来了：把全部改动原样加回去、两种方法都不额外缩小时，直接相加得39.76分，JNSP 得31.43分。说明删掉重叠方向并不总是有利；论文还没有解释清楚，为什么这套处理在两类模型上表现不同。",
      "insight": "为每个任务分别建立“其他任务主要改了哪里”的参照，再删减自身改动；这种处理是否保住能力，需要在目标模型和任务上检验。",
      "steps": [
        [
          "先取出每个任务学到的改动",
          "对同一个权重矩阵，任务 i 的改动为 Δᵢ = Wᵢ − W₀。方法处理二维矩阵，层归一化和偏置保留原模型数值；任务的分类头分别保留。"
        ],
        [
          "找出改动最强的输入方向",
          "对 Δᵢ 做奇异值分解，把它拆成若干输入方向及对应输出变化。取前 r 个右奇异向量，作为该任务主要改变哪些输入特征的概括；主实验 r = 16。并不是只保留这 r 项来近似整个改动。"
        ],
        [
          "用其他任务的方向过滤当前任务",
          "把除 i 之外各任务的方向拼接，整理成正交基 U₋ᵢ。计算 Δ̃ᵢ = Δᵢ(I − U₋ᵢU₋ᵢᵀ)，去掉当前改动在其他任务主要方向上的分量。所有参照都来自原始改动，因此不依赖先合哪个任务。"
        ],
        [
          "把过滤后的改动一次相加",
          "最终 W = W₀ + ΣᵢΔ̃ᵢ，仍得到一个模型的权重。计算无需输入样本和梯度，但要进行矩阵分解；选择 r 所用的评测，属于另外的实验成本。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "同一张纹理图，几种合并结果认成了什么",
        "text": "论文 Figure 4 给出一张黑白横带纹理图，真实类别为 banded。JNSP 预测为 banded，TIES 与直接相加都预测为 striped。作者专门从“JNSP 正确、两个对照都错误”的样本中选图，所以这张图解释的是错误如何不同，整体效果要看完整测试集的平均结果。"
      },
      "evidence": "Table 1：同一组 CLIP ViT-B/16 检查点、同一评测程序，8个任务的平均 top-1 准确率为 JNSP 89.45%、Task Arithmetic 75.23%、TIES 77.57%。JNSP 的 r 在本组任务上选一次，独立的 TALL 检查点实验保持 r=16。§6及附录 T：RoBERTa-large 的 JNSP 为31.43，Task Arithmetic 在 λ=1 时为39.76、λ=0.2 时为59.70；正文采用 λ=1 的比较，避免混入缩放差异。",
      "limits": "同一预训练起点、可对应的参数是这里的前提。主实验用评测选择 r，因此“无数据”描述合并运算，不等于整个开发与选择流程完全没看数据。语言实验的失败尚无已证实的机制解释，生成式语言模型没有测试。",
      "transfer": "对模型合并研究，一个直接可做的检查是把“方向过滤是否有用”和“合并幅度是否合适”分开：先固定相同的缩放系数比较，再在相同预算下分别调参，避免把幅度变化当成方向处理的收益。",
      "take": "同一套投影规则在图像任务上的收益，没有自动延续到语言任务。",
      "counter": {
        "q": "任务的改动方向重叠，就说明这些方向应该删除吗？",
        "a": "不一定。重叠也可能对应多个任务都需要的结构。论文观察到两类模型的方向重叠程度都明显高于随机参照，却出现相反效果；“语言任务删掉了共同需要的结构”仍是作者的一种解释，未被实验单独证实。"
      },
      "sources": [
        [
          "原论文 · 11月12日首发",
          "https://arxiv.org/abs/2611.17103"
        ],
        [
          "全文 · 方法、Table 1、§6与附录 T",
          "https://arxiv.org/html/2611.17103v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-17/jnsp.png",
          "alt": "JNSP、TIES 与直接相加在部分图像上的预测对照",
          "caption": "原论文 Figure 4：蓝字表示正确、红字表示错误。这组图专门选择 JNSP 正确而两个对照都出错的样本，并非随机抽取整个测试集。",
          "credit": "Tian Xia · JNSP",
          "sourceUrl": "https://arxiv.org/html/2611.17103v1",
          "originalUrl": "https://arxiv.org/html/2611.17103v1/qualitative.png",
          "placement": "inline",
          "width": 1662,
          "height": 278
        }
      ]
    },
    {
      "id": "agentssl-program-selection",
      "cat": "ai",
      "topic": "AI 拓展",
      "symbol": "◎",
      "method": "AgentSSL",
      "year": "2026-11-12 首发 · 预印本",
      "publishedOn": "2026-11-12",
      "addedOn": "2026-11-16",
      "time": 7,
      "title": "AgentSSL 能试出好方法，但认出哪一个最好仍然很难",
      "desc": "少量有标签图片、大量无标签图片：自动写学习程序之后，还缺可靠的挑选办法。",
      "scenario": "图片很多，但只有少数图片有人标好类别，想让 AI 自动设计利用其余图片的方法。",
      "bottleneck": "标注少，不仅难训练，也难判断每次改动究竟有没有变好。",
      "lead": "想训练一个图片分类器，手里有大量照片，却只有少量照片标了正确类别。AgentSSL 把这些数据交给写代码的 AI，让它设计学习程序、运行、看反馈，再继续修改。这样既利用少量人工标注，也尝试从其余图片中找规律。\n\n论文里有个具体结果：在区分眼底照片病变严重程度的任务上，AI 找到的一个好程序没有继续训练视觉模型。它先用已有模型提取图片特征，再参考相似图片的类别、每类图片的代表特征，以及严重程度有先后顺序这一条件，综合判断新图片属于哪一类。\n\n但这篇论文最值得注意的是：试出好程序，和知道该选哪个程序，是两回事。在6个图片分类数据集、每个两种标注数量的共12种设置中，如果事后查看测试答案，再挑出最好的 AI 程序，它能在8种设置中超过最好的人工设计方法。这个结果说明候选里有好方法，却不等于系统自己能稳定把它选出来。\n\n现实里缺的恰恰是足够的正确答案。研究者尝试把有限标注一半用于训练、一半留给挑选程序：在原先选得很差的任务上，这样做明显更好；在原先已经选得准的任务上，少给训练数据又会损失效果。问题因此还没完全解决——标注预算不只要供训练，也可能要留给最后的选择。",
      "insight": "找到的候选方法再强，最终效果也受“能不能选中它”限制。",
      "steps": [
        [
          "先生成和试运行候选",
          "AI 收到任务、少量标注和大量无标签数据，写出完整学习程序。程序在隔离环境运行，错误日志与评分返回给 AI，用来修改下一版。"
        ],
        [
          "用有限信息判断好坏",
          "评分可以来自少量保留标签，也可以来自不需要标签的特征统计。但如果两个程序沿用同一个视觉模型，只改后续分类规则，单看视觉特征可能分不出谁更好。"
        ],
        [
          "把发现能力和选择能力分开测",
          "论文先事后统计所有候选中最高的测试表现，再测实际选择办法会损失多少。这样不会把事后挑出来的最好结果，当作系统自动交付的成绩。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "高分候选不等于自动选中后的分数",
        "text": "表1的眼底分类、每类80张标注设置中，AgentSSL 候选的事后最佳准确率为73.47%，人工方法中最高为54.37%，差19.10个百分点。前者依赖事后按测试表现挑选，不是可直接部署的自动选择成绩。论文另外逐次检查：只凭搜索时的反馈分数来选，会错过多少更好的候选；这部分结果显示，选择本身可能造成很大的损失。"
      },
      "evidence": "正文实验使用6个数据集、每个两种标注数量、每种三个随机划分。分类任务约束可使用的视觉底座为 CLIP ViT-B/16 与 DINOv2-B，搜索从简单监督程序开始。小数据集每次搜索8小时，较大数据集15小时，硬件配置见论文第4节。",
      "limits": "8/12 是事后最佳候选的比较；它不能替代真实选择流程的结果。主动分配标注也没有在所有任务上获益。",
      "transfer": "如果让 AI 自动搜索训练或合并方案，可以分别记录最好候选的表现，以及只靠验证信息最终选中方案的表现；两者差距能指出改进应放在搜索还是筛选。",
      "take": "训练、搜索、选择，可能都在争同一份标注预算。",
      "counter": {
        "q": "提升来自额外训练模型，还是多试了很多程序？",
        "a": "这里首先增加的是自动编写和评估候选程序的搜索计算；候选程序本身可能训练模型，也可能只组合已有特征和规则。不能把搜索后的最佳成绩当作一次固定训练方法的收益。"
      },
      "sources": [
        [
          "原论文 · 方法、表1—3与附录J.1",
          "https://arxiv.org/html/2611.17323v1"
        ],
        [
          "首次公开日期",
          "https://arxiv.org/abs/2611.17323"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-16/agentssl.png",
          "alt": "AgentSSL 从生成候选学习程序到选择程序的两阶段流程",
          "caption": "原论文图2：左侧用少量标注和大量无标签数据反复生成程序，右侧比较怎样挑选。知道测试答案时的最佳候选，与实际能选到的候选并非一回事。",
          "credit": "AgentSSL 作者",
          "sourceUrl": "https://arxiv.org/html/2611.17323v1",
          "originalUrl": "https://arxiv.org/html/2611.17323v1/2_main.png",
          "placement": "details",
          "width": 1938,
          "height": 770
        }
      ]
    },
    {
      "id": "cusd-common-unique-merging",
      "cat": "merge",
      "topic": "模型合并",
      "symbol": "⊕",
      "method": "CUSD",
      "year": "2026-11-03 首发 · 预印本",
      "publishedOn": "2026-11-03",
      "addedOn": "2026-11-15",
      "time": 6,
      "title": "CUSD 合并模型前，先拆开共同变化和各自偏重的变化",
      "desc": "相同底座微调出的模型，先比较参数变化的方向，再分别合并和保留。",
      "scenario": "把同一个底座上训练的代码、数学和多语言模型合成一个模型。",
      "bottleneck": "直接对所有参数变化使用同一套规则，可能压掉某个任务特别依赖的部分。",
      "lead": "假设同一个底座分别微调成了擅长代码、数学和多语言的三个模型，想把它们合成一个。常见做法是先看每个模型相对底座改了哪些参数，再把这些改动相加、筛选或缩放。但不同任务的改动并不一样，用同一套规则处理全部改动，可能保住了一项能力，却损失另一项。\n\nCUSD 先把一层参数里的成组变化，放到同一组方向上比较。有些方向，各个任务的改动强度接近；另一些方向，主要是某一个或少数任务在改。它把各任务改动接近的部分交给已有合并方法处理；对少数任务特别突出的部分，先单独留下，调节保留强度后再加回来。这里分组依据是参数变化的强弱，不是已经辨认出了“数学知识”或“代码知识”。\n\n论文在 Llama-3.2-3B-Instruct 的代码、数学和多语言微调模型上做了实际比较：普通参数相加的综合分为73.5，加上 CUSD 后为75.8。这个分数先把各任务专用模型设为100，再计算合并模型保留了多少表现，并非答题准确率。增加主要来自代码任务；数学任务的相对分数反而从64.2降到62.4。\n\n这项工作提供了一种在合并前整理参数改动的办法，结果仍有取舍。拆分和合并本身只读模型权重，但单独保留多少特殊变化，需要选择系数，可能仍要用验证数据。",
      "insight": "先看各任务沿同一方向改得是否接近，再决定共同处理还是单独保留。",
      "steps": [
        [
          "计算每个模型的变化",
          "同一层的微调权重减去底座权重，得到各任务的改动矩阵。方法要求这些模型来自相同底座和架构。"
        ],
        [
          "用共同方向比较强弱",
          "为每层构造一组共同的正交方向，计算各任务沿每个方向的变化强度，再按任务之间的差异分组。论文为编码器和生成模型使用不同的强度评分方式。"
        ],
        [
          "两部分分开处理",
          "共同部分使用 Task Arithmetic、TIES 等已有合并方法；各任务偏重的剩余部分先相加，再统一乘以系数 β。最后把两部分与底座相加，得到一个模型。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "综合分上涨，但数学任务略降",
        "text": "论文表15：Llama-3.2-3B-Instruct 配合 Task Arithmetic，六项任务的平均相对分数从73.5到75.8。两个代码测试 Humaneval+、MBPP+ 分别从55.5到61.3、46.5到54.0；GSM8k 从64.2到62.4。每一列都以对应任务专用模型的表现为100，不能直接当作原始准确率。"
      },
      "evidence": "论文覆盖11个底座、4类模型和4种算术合并方法，44组组合中42组提升、1组持平、1组小幅下降。已有合并方法的参数在前后对照中保持一致；CUSD 另外加入拆分与残差系数。",
      "limits": "只评估相同架构的稠密模型；选择 β 可能使用验证数据。部分已有子空间方法在部分设置下仍更强，平均提升不表示每个任务都提升。",
      "transfer": "迁移到自己的模型对时，可先检查新增的拆分是否改善了能力取舍，并把 β 的选择放在验证集；特定推理模型对的效果还需要另测。",
      "take": "“只读权重就能合并”与“不需要数据选参数”是两件事。",
      "counter": {
        "q": "它是在每个输入到来时选择模型吗？",
        "a": "不是。它在生成合并权重时完成拆分和组合，部署时仍是一个固定参数的模型。"
      },
      "sources": [
        [
          "原论文 · 方法与表15",
          "https://arxiv.org/html/2611.04108v1"
        ],
        [
          "首次公开日期",
          "https://arxiv.org/abs/2611.04108"
        ]
      ],
      "images": []
    },
    {
      "id": "folio-recoverable-context",
      "cat": "ai",
      "topic": "长任务与记忆",
      "symbol": "▤",
      "method": "Folio",
      "year": "2026-11-12 首发 · 预印本",
      "publishedOn": "2026-11-12",
      "addedOn": "2026-11-14",
      "time": 5,
      "title": "Folio 把旧记录移出上下文，但保留找回原文的入口",
      "desc": "用执行时留下的笔记和目录压缩历史，需要细节时再读原始记录。",
      "scenario": "AI 连续查资料、运行工具，历史越来越长，后面的任务还可能要用到早先的细节。",
      "bottleneck": "让模型重新概括全部历史既耗时，也可能漏掉之后才变得重要的信息。",
      "lead": "AI 连续工作很久后，工具返回的资料会挤满上下文，也就是每次回答时模型能看到的内容。常见办法是让模型把旧记录写成摘要，再继续工作；但摘要省掉的细节，后面可能还要用。\n\n百度与北京邮电大学研究者提出的 Folio，在工作过程中就同时保存简短笔记、工具调用目录和完整原始记录。空间不够时，程序直接把较早的内容换成已有笔记和目录，不再临时让模型重写一遍。目录中的编号仍指向原文，需要时可以只读一段，或用程序处理整个文件。\n\n论文给了一个排期末考试的例子：AI 读过160门课的资料、邮件和通知，旧通知移出上下文后，它沿着目录找到原记录，提取每门课的考试安排，再与邮件核对。大量通知不必重新全部塞给模型，任务最终通过检查。\n\n在同样使用 DeepSeek-V4-Pro 的75项长任务中，作者报告完成数从54升到66。不过，两组统计都保留了被标记读取评分资料的运行，分别为11次和8次；这个成绩还需要更干净的评测来确认。",
      "insight": "压缩后仍能找到原始依据，才方便在后续步骤重新核对细节。",
      "steps": [
        [
          "工作时留下三层记录",
          "模型写每轮简短笔记，程序保存工具调用目录及原始返回内容，三者用同一组编号关联。"
        ],
        [
          "压缩时选择已有内容",
          "较早的轮次显示得更简略，近期内容保留更多细节。原始记录仍留在外部文件中。"
        ],
        [
          "需要时再取回",
          "可以按编号分段读取，也可以对完整文件执行统计或提取，只把结果放回上下文。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "排考任务怎样找回通知",
        "text": "原文第5.5节：上下文从约35.1万 token 缩到8.3万后，AI 对保存的793 KB通知记录提取课程考试信息，再读邮件核对。返回模型的提取结果约6,400 token，整份通知没有重新进入上下文。"
      },
      "evidence": "Table 1：75项任务来自15种环境、每种5个种子，组成5段连续会话。比较的是同一 Piki 运行框架中的 Folio 与模型摘要方案；使用相同模型与100万 token 上下文上限。",
      "limits": "每条任务链只运行一次；总分包含评分资料读取标记。旧记录可恢复，也不保证模型写的笔记永远准确。",
      "transfer": "做长期资料整理时，可以把摘要、来源目录和原文分开保存，让后续步骤有路可查。",
      "take": "可回查的记录结构比单独一份短摘要更容易核对。",
      "counter": {
        "q": "这需要重新训练模型吗？",
        "a": "不需要。改动在记录、压缩和回查工具上，模型本身没有因这套方法重新训练。"
      },
      "sources": [
        [
          "原论文 · 方法、表1与排考案例",
          "https://arxiv.org/html/2611.16627v1"
        ],
        [
          "首发日期",
          "https://arxiv.org/abs/2611.16627"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-14/folio.png",
          "alt": "Folio 通过同一组编号连接笔记、目录和原始资料",
          "caption": "论文图2：上半部把已有记录放入较短上下文；下半部展示按编号读取原文或计算完整文件，再保存结果。",
          "credit": "Folio 作者 · Figure 2",
          "sourceUrl": "https://arxiv.org/html/2611.16627v1",
          "originalUrl": "https://arxiv.org/html/2611.16627v1/figures/fig-fold-recover.png",
          "placement": "details",
          "width": 1760,
          "height": 872
        }
      ]
    },
    {
      "id": "real-loss-speculative-decoding",
      "cat": "ai",
      "topic": "推理加速",
      "symbol": "⇢",
      "method": "REAL Loss",
      "year": "2026-11-10 首发 · 预印本",
      "publishedOn": "2026-11-10",
      "addedOn": "2026-11-13",
      "time": 6,
      "title": "训练小模型打草稿，要算清哪些词能连续通过检查",
      "desc": "REAL Loss 改进投机解码的训练目标；草稿接受长度提升，但相对强对照的实际提速很小。",
      "scenario": "用小模型先写几个词，再由大模型一起检查，以减少大模型逐词生成的等待。",
      "bottleneck": "后一个草稿词能留下来，取决于前面的词是否已经通过；分别计算各位置平均通过率会丢掉这种联系。",
      "lead": "投机解码让小模型先打草稿，大模型一次检查多个词。它的速度取决于草稿能连续通过多长：前面有一个词没通过，后面的草稿就要重来。\n\nREAL Loss 论文指出，有些训练方法分别算各个位置的平均通过率，再把它们相乘。问题是，第二个位置面对什么上下文，已经受第一个词是否通过影响。把所有路径混在一起平均，可能连训练该往哪个方向改都判断反了。\n\n新方法在训练中保留这层联系：先看每条草稿有多大机会被小模型写出来、又有多大机会一路通过检查，再把这些路径按对应概率加总。作者固定大模型、小模型结构、训练数据和轮数，只更换训练目标。随机采样设置下，9类任务的平均每轮输出长度从主表最强对照的4.749升至4.792个 token，包含每轮额外生成的1个 token。\n\n实际服务收益更小：同一批量测试中，每秒输出量从约4,649升至4,662个 token，约提高0.3%。降低生成的随机程度后，另一种较简单的训练目标还会反超。因此，选择草稿模型时仍要按实际使用的生成设置测速度。",
      "insight": "草稿连续通过检查的概率，比各个位置单独“像不像大模型”更贴近加速目标。",
      "steps": [
        [
          "保留路径差异",
          "先用大模型生成训练文本，再按小模型提出这些词并通过检查的概率，调整各条路径在目标中的比重。"
        ],
        [
          "减少估计抖动",
          "当前一步对整个词表求和，前面的路径才使用采样估计；训练还保留少量逐词模仿目标。"
        ]
      ],
      "example": {
        "label": "教学算例",
        "title": "两组模型通过率相同，也可能连续通过得不一样",
        "text": "假设有100条两词草稿：两组都是第一词50条通过，第二位置单独检查也有50条通过。甲的这两批恰好是同50条，就有50条能连续通过；乙的两批完全错开，就没有一条能连续通过。这是简化说明，不是论文实测数据；它说明只看两个平均数，无法知道连续通过的数量。"
      },
      "evidence": "原文 Table 1、Table 10：Qwen3.6-35B-A3B 配 Domino，训练3轮；温度1.0，9类任务、5个种子。4.749与4.792分别为 DBLast、REAL，吞吐量批量为80。",
      "limits": "温度0.5时 static LK 的接受长度为5.002，REAL 为4.993。主文比较固定训练轮数，并非逐方法匹配训练耗时。",
      "transfer": "在自己的推理服务中，先固定采样方式和批量，再同时检查连续接受长度和实际吞吐量。",
      "take": "训练目标更准确，不意味着端到端速度一定大幅提高。",
      "counter": {
        "q": "这是让大模型多思考换来的收益吗？",
        "a": "不是。改动发生在小模型的训练目标；对照中的大模型和推理流程保持不变。"
      },
      "sources": [
        [
          "原论文 · 方法和完整实验",
          "https://arxiv.org/html/2611.14399v1"
        ],
        [
          "首发日期",
          "https://arxiv.org/abs/2611.14399"
        ],
        [
          "作者实现",
          "https://github.com/King-ty/speculators/tree/real-loss"
        ]
      ],
      "images": []
    },
    {
      "id": "ecos-feedback-self-distillation",
      "cat": "ai",
      "topic": "Agent 自我学习",
      "symbol": "↻",
      "method": "ECOS",
      "year": "2026-11-09 首发 · 预印本",
      "publishedOn": "2026-11-09",
      "addedOn": "2026-11-12",
      "time": 7,
      "title": "让 AI 从自己的操作中学习，先检查它总结的经验有没有用",
      "desc": "ECOS 用实际操作结果，调整模型自己写出的经验在训练中所占的比重。",
      "scenario": "训练一个能操作网页、连续完成任务的模型，希望它能从自己的成功和失败中学习。",
      "bottleneck": "模型写出的复盘也可能有错，直接拿来教自己，会把错误带进下一轮训练。",
      "lead": "训练一个购物助手时，可以让模型多试几次，再总结哪些做法有用。ECOS 论文给了一个实际训练例子：在 WebShop 模拟购物网站里，任务是买一条符合材质要求、红色、大码且低于40美元的裙子。有一次尝试只找到候选商品，没有确认条件；成功的尝试则打开商品页、选择大码和红色，再购买。模型据此写下了“先核对商品属性，再选颜色和尺码”的经验。\n\n但模型写的经验也可能误导自己。研究者让同一个模型分别扮演两种角色：执行任务时，只看当前任务和操作历史；提供训练指导时，额外看到刚总结的经验。后者会更倾向某些操作，训练程序再利用实际尝试的结果，检查这些倾向是否有助于完成任务。\n\n具体做法是比较相似页面状态下执行过的不同操作，再看后续结果。与较好结果一致的指导，在训练中获得更大比重；相反的指导被减弱。总结经验的部分也根据它有没有帮助模型选对操作，接受训练。\n\n在 ALFWorld 这个用文字模拟家务操作的环境里，研究者测试了134个未用于训练的任务。3B 模型的六类任务平均成功率从对照方案的74.8%升到85.8%。两组使用相同的任务采样、尝试次数和评测设置；ECOS 训练时额外生成经验并计算指导信号。测试时不再附加这些经验，也不在线复盘，只运行训练后的模型。",
      "insight": "模型总结的经验是否值得学，要看它把操作引向了什么结果。",
      "steps": [
        [
          "先学习怎样复盘",
          "模型先用外部模型标注的操作复盘与经验做监督训练，学会描述成功、失败和可复用的做法。"
        ],
        [
          "执行任务，再给同一段操作补上经验",
          "每个训练任务采样8次操作过程。模型为每次过程写复盘，再合成一份经验。额外看到经验的同一模型，重新给执行者已经生成的内容计算概率。"
        ],
        [
          "用操作结果调整指导强度",
          "把观察内容相近、允许动作相同的状态归到一起，利用已经发生的转移和最终奖励，估计各个操作的价值。经验带来的偏好若与较好结果一致就加强，否则减弱，不直接把偏好反向。"
        ],
        [
          "只直接模仿操作指令",
          "经验指导的模仿损失只作用于能执行的命令。模型完整回答中的思考过程，仍通过任务奖励接受强化学习训练。这样避免直接要求执行者模仿一段依赖额外经验的思考。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "把思考过程也纳入模仿后，购物成功率反而下降",
        "text": "论文用3B模型单独比较了模仿范围。两组都进行150次在线更新，在相同的128项 WebShop 任务上，每项最多15步、尝试一次。只模仿可执行指令时成功率为75.00%；把完整回答也纳入模仿后为52.34%。作者解释，提供指导的一方看过额外经验，它的思考可能依赖执行者看不到的信息。这个解释与实验相符，但实验本身没有直接证明内部推理机制。"
      },
      "evidence": "主文结果取自 Table 2：Qwen2.5-3B-Instruct、ALFWorld 全部134项 unseen 测试任务，先按六类任务计算成功率再等权平均，3个评测种子取均值。对照 GRPO 使用相同初始化、采样预算、优化设置及150次在线更新。购物消融取自 Table 3 和附录 C.5，不能与主表的多种子结果混写。",
      "limits": "额外生成复盘、经验和指导概率增加了训练成本；论文没有给出相同总计算成本下的优势比较。研究覆盖两个文字交互环境，状态归类不准确也会影响操作价值估计。",
      "transfer": "研究自我改进时，可以分别检查经验改变了哪些操作偏好，以及这些偏好对应的实际结果；这比只看复盘文字是否像样更直接。",
      "take": "从自己的经历里学习，需要同时检查做事过程和总结出来的教训。",
      "counter": {
        "q": "测试时是不是多给了模型一份答案或额外经验？",
        "a": "不是。这里的 ECOS 测试只提供正常任务与操作历史，不附加训练中生成的经验，也不在线复盘；额外工作发生在训练阶段。"
      },
      "sources": [
        [
          "原论文 · 方法与实验",
          "https://arxiv.org/html/2611.12232v1"
        ],
        [
          "首次公开日期",
          "https://arxiv.org/abs/2611.12232"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-12/ecos-feedback.png",
          "alt": "ECOS 用任务结果检查模型自己生成的经验",
          "caption": "原论文图1：左边直接复用自己写的建议，右边依据实际结果调整建议的影响。图示说明训练设计，不是单独的效果测量。",
          "credit": "ECOS 作者 · Figure 1",
          "sourceUrl": "https://arxiv.org/html/2611.12232v1",
          "originalUrl": "https://arxiv.org/html/2611.12232v1/figure1_environment_feedback.png",
          "placement": "details",
          "width": 2000,
          "height": 1034
        }
      ]
    },
    {
      "id": "gs3r-continual-restoration",
      "cat": "merge",
      "topic": "连续模型合并",
      "symbol": "↻",
      "method": "GS3R",
      "year": "2026 · 近期研究",
      "publishedOn": "2026-11-07",
      "addedOn": "2026-11-11",
      "time": 6,
      "title": "模型一个接一个合并，给下一次合并留下恢复旧任务的线索",
      "desc": "GS3R 除了保存合并后的权重，还保存一小份用于下一轮恢复的矩阵。",
      "scenario": "不同任务的微调模型先后交付，旧模型和旧训练数据不能全部留存。",
      "bottleneck": "旧任务已经混在一起，下一次合并难以分别给它们留出空间。",
      "lead": "一个团队陆续拿到同一基础模型的多个微调版本：有的擅长情感判断，有的擅长判断两句话是否表达同一意思。希望每来一个版本就合进去，又不长期保存所有旧模型。这样做时，早先任务的信息已混在合并后的权重里；下次再合，很难分别照顾它们。\n\n11月7日公开的 GS3R 为每次合并多留了一份恢复记录。新模型到来后，先恢复之前保留下来的参数变化方向，再根据这些方向的关系辨认不同任务，为新旧任务分别分配保留名额，最后重新合成一个模型。它恢复的是已保留的部分，并非找回过去丢弃的全部权重。\n\n在 Flan-T5-Base 的8项语言任务实验里，采用较小保留数量的 GS3R，平均任务分数为83.7；不做额外优化的对照方法 OPCM 为80.6，需要优化步骤的 NUFILT 为84.0。GS3R 这一配置额外保存的记录约占模型大小的0.4%，推理时仍只用一个合并模型。",
      "insight": "为下一次合并保留可恢复的任务信息，让旧任务有机会重新参与分配。",
      "steps": [
        [
          "先保留重要的参数变化方向",
          "各任务相对基础模型的权重变化，可以分解成一组方向及其强度，称为奇异值分解（SVD）。方法只保留其中一部分，控制存储量。"
        ],
        [
          "记录合并时改变了什么",
          "为减少任务间的干扰，算法会把这些方向调整为相互垂直。它同时保存两份变换矩阵，下次先恢复调整前的已保留方向，再按方向之间的关系重新分组。"
        ],
        [
          "新旧任务一起分配名额",
          "把保留总数大致平均分给各任务，每个任务留下强度最大的方向；余下名额再比较各任务的下一个方向。完成后重新合并，并保存下一轮要用的记录。"
        ]
      ],
      "example": {
        "label": "教学算例",
        "title": "合并两个旧任务和一个新任务",
        "text": "假设共能保留15个方向，现在已有两个旧任务，又来了第三个。算法先恢复旧任务的已保留方向，再给三个任务各留5个。这样不会把两个旧任务混成一个整体去争名额。数字只用于说明分配规则。"
      },
      "evidence": "论文 Table 2：Flan-T5-Base、8项 GLUE 任务、10种任务顺序取平均；GS3R 的保留数量 r=64。83.7 是论文的平均任务分数，存储为合并模型的1.004倍。",
      "limits": "实验使用结构对齐的微调模型。论文还测试了视觉和多模态任务，但没有验证不同架构模型能否用同样方式合并。",
      "transfer": "如果研究的是持续接纳新模型，可以把“是否保留恢复记录”单独作为对照，观察早期任务怎样变化。",
      "take": "连续合并除了决定当前权重，还要决定给下一轮留下什么。",
      "counter": {
        "q": "恢复记录能找回所有旧任务信息吗？",
        "a": "只能恢复此前保留下来的方向。超出保留名额而丢弃的部分不会凭空回来。"
      },
      "sources": [
        [
          "论文 · 方法 §4、语言实验 Table 2",
          "https://arxiv.org/html/2611.10881v1"
        ],
        [
          "首次公开日期",
          "https://arxiv.org/abs/2611.10881"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-11/gs3r-tradeoff.png",
          "alt": "保留方向数量与视觉、语言任务分数的关系",
          "caption": "原论文图2：横轴是保留方向数量。蓝色语言任务读右轴，红色视觉任务读左轴，不能直接比较两条线的高低；语言任务在64附近最好，并非保留越多越好。",
          "credit": "GS3R · 原论文 Figure 2",
          "sourceUrl": "https://arxiv.org/html/2611.10881v1",
          "originalUrl": "https://arxiv.org/html/2611.10881v1/fig4_revised.png",
          "placement": "details",
          "width": 874,
          "height": 432
        }
      ]
    },
    {
      "id": "infradev-hidden-requirements",
      "cat": "ai",
      "topic": "训练与推理工程",
      "symbol": "⌁",
      "method": "InfraDev · 工程任务评测",
      "year": "2026-10-27 首发 · 预印本",
      "publishedOn": "2026-10-27",
      "addedOn": "2026-11-10",
      "time": 5,
      "title": "AI 改训练和推理代码，原项目测试全过，仍有三成改动没达到要求",
      "desc": "检查输出正确之外，也检查承诺的显存、时间和通信开销。",
      "scenario": "让 AI 实现训练、推理和强化学习框架里的真实修改。",
      "bottleneck": "原有测试没有覆盖任务的全部要求。",
      "lead": "给训练或推理框架改代码，程序能运行、输出正确，还可能没有完成任务：如果需求是省显存，就得实际少用显存。InfraDev 从 Megatron-LM、vLLM 和 verl 三个项目选出36项真实修改，检查 AI 能否把这些工作做完。\n\n研究者补充了原项目没有覆盖的检查，并把要满足的要求写进任务说明。在六种模型提交的216份改动中，102份通过原项目全部测试；补做检查后，其中33份又被判为不合格，约占三成。\n\n一种具体问题出现在 CUDA Graphs 模式。它会把 GPU 的一串操作录下来，之后直接重放，以减少重复安排计算的开销。AI 有时把每次调用都要更新的逻辑留在外面的 Python 代码中；重放时这段代码不再执行，程序在普通模式下能跑，切换模式后就出错。",
      "insight": "检查有没有完成任务，要覆盖真正需要使用的运行方式和资源要求。",
      "steps": [
        [
          "补测任务承诺",
          "除了计算结果，还测显存、运行时间、通信量，以及特殊运行模式。"
        ],
        [
          "把要求同时讲清",
          "任务说明列出检查会用到的接口和条件，避免用没告诉模型的要求评分。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "通过测试与完成任务，分母不同",
        "text": "102份改动通过原测试，补测后剩69份；33÷102约为32%。这不是所有216份改动的32%。"
      },
      "evidence": "每项任务限时2.5小时，使用独占的8张 H800 或 H20 GPU 节点。六种模型中，最高完成14项，即36项的38.9%。",
      "limits": "任务来自三个框架，不含完整产品交付流程。",
      "transfer": "给自己的工程任务验收时，把“更快、少用显存”等目标也变成实测项目。",
      "take": "测试通过要能对应任务本身。",
      "counter": {
        "q": "这些补充测试会不会自己写错？",
        "a": "作者要求原项目的正确改动能反复通过，并用故意违反需求的改动检查它是否真能抓错。"
      },
      "sources": [
        [
          "原论文与首次公开日期",
          "https://arxiv.org/abs/2610.36589"
        ],
        [
          "实验与失败分析",
          "https://arxiv.org/html/2610.36589v1"
        ]
      ],
      "images": []
    },
    {
      "id": "giga-one-matrix-classifier",
      "cat": "ai",
      "topic": "模型编辑",
      "symbol": "↗",
      "method": "Giga · 单矩阵权重编辑",
      "year": "2026-11-06 · 技术文章",
      "publishedOn": "2026-11-06",
      "addedOn": "2026-11-09",
      "time": 6,
      "title": "客服分类答不准，Giga 只改了小模型最后一层的一块权重",
      "desc": "先查看内部计算里是否已有分类线索，再修改把线索变成答案的过程。",
      "scenario": "从客服对话中判断客户是要退货、查包裹，还是处理另一类问题。",
      "bottleneck": "内部计算能分出不少类别，最终生成的名称却经常偏向少数几个选项。",
      "lead": "客户说了一长段话，模型要从12个名称里选出对应的需求，例如“申请退货”或“查询物流”。Giga 用 Qwen3.5-0.8B 做这项客服分类，发现它经常选错。\n\n团队让 Claude Fable 5.1 检查小模型的内部计算。它把同一类别对话产生的数值取平均，再看新对话更接近哪一类，发现这种简单判断比模型直接回答更准。作者因此把修改重点放在最后一步：怎样把已有的分类线索变成正确名称。\n\n具体做法是，先计算每个训练例子的内部数值应该怎样调整，才能让正确名称的得分更高；再求出一块权重矩阵的改动，让它尽量同时完成这些调整。最后把改动写回模型。\n\n在保留到最后才测试的1200段合成对话上，模型自由生成完整名称的正确率从39.9%升到80.9%。普通英文文本的预测能力有所下降，团队接受了这个取舍，因为他们要做的是专用分类器。",
      "insight": "先确认信息有没有在内部计算中出现，再判断该改知识本身，还是改生成答案的最后几步。",
      "steps": [
        [
          "先分开拟合、选方案和最终测试",
          "3600段合成对话覆盖五个行业。1800段用于计算权重改动，600段用于选择设置，1200段留到最后测试。"
        ],
        [
          "为每个例子算出想要的变化",
          "模型给各个候选名称打分。对分错或差距不够大的例子，计算怎样小幅调整最后的内部数值，才能让正确名称领先；已经满足条件的例子无需移动。"
        ],
        [
          "用同一块矩阵实现这些变化",
          "最后一层的一块矩阵决定把哪些计算结果加入输出。团队用岭回归求解——让预测改动尽量接近目标，同时限制它对普通文本的影响。最后采用的版本重复修正了三轮。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "为什么怀疑最后的名称选择出了问题",
        "text": "航空业测试共有240段对话，12个类别各20段；原模型有184次回答集中在“航班被取消”或“改签”两个名称上。另一方面，用内部数值做简单分类，在验证集上可达到75%或79%，取决于读取哪一层。这些数值来自不同读出方式，不能混当成最终生成成绩。"
      },
      "evidence": "最终测试中，自由生成名称的正确率为80.9%；如果强制从列表按名称得分选择，按完整名称计算为82.2%。正文采用更接近实际使用的自由生成结果。\n\n这套方案由 Fable 选择计算方法和设置，再运行程序求出矩阵改动；没有逐个由语言模型直接写出全部权重数字。",
      "limits": "材料是合成客服对话。普通英文困惑度从17.4升到19.6（越低越好）；文章没有给出与同数据、同预算的常规微调对照。",
      "transfer": "这种案例适合进一步比较：直接用内部特征分类、常规微调和矩阵编辑，哪一种在相同数据与时间预算下更划算。",
      "take": "改动一块矩阵能改善这项分类任务；值不值得替代微调，还需要同预算比较。",
      "counter": {
        "q": "没做梯度更新，就等于没用训练数据吗？",
        "a": "这里仍用了带标签的数据来求权重改动，也用验证集选设置。区别在于如何计算改动：它求解线性方程，而不是反复沿梯度更新。"
      },
      "sources": [
        [
          "团队技术文章、数据划分与测试表",
          "https://giga.ai/news/one-weight-matrix"
        ]
      ],
      "images": []
    },
    {
      "id": "specopd-branch-parallel",
      "cat": "ai",
      "topic": "推理加速",
      "symbol": "↗",
      "method": "SpecOPD · 草稿模型训练",
      "year": "2026-11-02 首发 · 预印本",
      "publishedOn": "2026-11-02",
      "addedOn": "2026-11-08",
      "time": 6,
      "title": "训练小模型打草稿，可以同时从一篇答案的多个地方练起",
      "desc": "SpecOPD 把草稿模型的训练材料分成多段，同时生成、同时学习。",
      "scenario": "为了让大模型更快回答，先让一个便宜的小模型写草稿，再交给大模型检查。",
      "bottleneck": "若每次都要等草稿写完一段、验收一段，再接着写，收集训练材料就很慢。",
      "lead": "大模型逐个生成 token 比较慢。一种加速办法是让小模型先写几个 token，大模型再一次检查这段草稿。连续接受的内容越多，就越能少做几轮计算。\n\n要把这个小模型训练好，得让它练习自己实际会写出的内容，再由大模型教它怎样接着写。但如果每次收集训练材料，都要走完“写一段、验收、再写下一段”的过程，GPU 就会花不少时间等待。\n\nSpecOPD 换了一种收集方式：先准备参考答案，在一篇答案里选多个位置，让小模型从各处分别续写。各段互不等待，大模型可以一起检查，并根据每段实际写出的前文提供训练信号。几段共用的前文，也不用重复计算。\n\n这样做提高了训练时处理材料的速度，训练后的草稿也更容易被接受。不过，用户拿到回答快多少，还要单独测。在论文的27B模型实验中，相比原来的草稿模型，所测配置下的平均生成速度最多提高2.83%。",
      "insight": "训练可以同时从多个位置开始；每一段仍要根据小模型实际写出的内容来教。",
      "steps": [
        [
          "先准备参考答案，再选续写位置",
          "同一篇参考答案可以提供多个起点。起点之前的内容作为已知背景，起点之后由当前小模型自己生成。不同起点的前文可能有一部分重合，这部分计算可以共享。"
        ],
        [
          "小模型写到哪里，大模型就根据哪里的前文来教",
          "假如小模型没有沿着参考答案往下写，大模型也要跟着这条新路径，给出接下来各个 token 的概率。这样，小模型才能学到如何处理自己会遇到的情况。"
        ],
        [
          "一起计算时，防止不同续写互相干扰",
          "一段续写只能看到它自己的前文，不能偷看另一段或参考答案后面的内容。普通注意力可以限制可见位置；线性注意力还保存了过去的内部状态，因此需要从各自的起点恢复状态，再分开更新。"
        ],
        [
          "检查草稿能被连续接受多长",
          "草稿前面一旦出错，后面的内容通常也就用不上了。训练目标因此考虑连续接受的概率，而不只看每个位置单独预测得准不准。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "训练吞吐量的16.09倍，是怎么算的？",
        "text": "作者用27B目标模型和8张高性能GPU，比较两套训练配置。SpecOPD 每秒完成的更新次数是串行方案的4.95倍，每次更新中参与训练的 token 数又是3.25倍。两者相乘，每秒处理的训练 token 数就是16.09倍。这个数字不含提前准备参考答案的时间，也不是在两套方案每次处理相同数量 token 的条件下得到的。"
      },
      "evidence": "在 Qwen3-8B 配合 DFlash 的测试中，一轮验收平均推进的 token 数从2.649增至3.747，约提高41%；其中包括大模型补出的 token。结果汇总了对话、代码、数学和两类已有 Agent 交互记录，使用温度0。\n\n正文的2.83%来自另一组27B部署测试，使用 BF16、TP=1、FA3 和 CUDA Graphs，对不同任务的速度取几何平均。比较对象是原来的 DFlash V2 草稿模型。",
      "limits": "这些续写的起点来自预先准备的参考答案，因此训练时遇到哪些背景，仍取决于这批材料。",
      "transfer": "试用这类训练方法时，可以分别记录训练用了多久、草稿被接受多长，以及真实并发量下每秒能生成多少内容。",
      "take": "训练材料收集得更快，和上线后回答得更快，要分别检查。",
      "counter": {
        "q": "草稿平均被接受得更长，回答就一定按同样比例变快吗？",
        "a": "不一定。生成草稿和大模型检查草稿都要花时间，还会受同时处理多少请求影响。所以论文既测每轮验收能推进多少 token，也测实际每秒生成多少 token。"
      },
      "sources": [
        [
          "原论文与首次公开日期",
          "https://arxiv.org/abs/2611.02846"
        ],
        [
          "方法、Table 1 与部署比较",
          "https://arxiv.org/html/2611.02846v1"
        ]
      ],
      "images": [
        {
          "src": "assets/2026-11-08/specopd.png",
          "alt": "从参考答案抽取位置并建立独立草稿分支",
          "caption": "论文方法图：灰色是一篇参考答案，蓝色是从两个位置分别写出的新段落。共同前文的计算可以共享，新段落各自接受训练。",
          "credit": "SpecOPD · Figure 2",
          "sourceUrl": "https://arxiv.org/html/2611.02846v1",
          "originalUrl": "https://arxiv.org/html/2611.02846v1/fig02-proposal-tree.png",
          "placement": "details",
          "width": 1768,
          "height": 528
        }
      ],
      "revisedOn": "2026-11-08"
    },
    {
      "id": "agenticfinbench-fact-audit",
      "cat": "ai",
      "topic": "Agent 评测",
      "symbol": "◎",
      "method": "AgenticFinBench · 事实核验",
      "year": "2026-11-03 首发 · 预印本",
      "publishedOn": "2026-11-03",
      "addedOn": "2026-11-07",
      "time": 5,
      "title": "答案看起来完整，查过事实后，评测第一名变成第四名",
      "desc": "230个真实任务，把“答到了要点”和“事实可靠”分开检查。",
      "scenario": "让金融 Agent 查资料、比较产品或解释市场事件，再给它的回答打分。",
      "bottleneck": "按要点打分能检查答案是否完整，却可能让建立在错误事实上的分析拿到高分。",
      "lead": "AgenticFinBench 收集230个真实金融问题，比较18种模型与运行工具的组合。研究者先按每题的要求评分，再把回答拆成可核对的事实，检查工具记录和外部来源。\n\n一个具体例子是：DuMate 把某只基金的管理费解释为主动选股的费用，但已保存的招募说明书明确写着被动跟踪指数。原来的内容评分有92.5分；核验把这个实质错误扣除12分，得到80.5分。\n\n对全部问题重算后，原先第一名 DeepSeek V4.1 Flash 加 Pi 的平均分下降7.58分，变成第四名。这个变化来自对同一批回答补做事实核验，没有重新生成答案。",
      "insight": "答案覆盖了要求的方面，还要检查支撑这些解释的关键事实。",
      "steps": [
        [
          "先固定评分要求",
          "在查看待评回答前，为每道题确定应覆盖的内容和严重错误，避免看了答案再临时改标准。"
        ],
        [
          "把来源与真伪分开查",
          "先看断言是否有工具记录支撑，再对缺少支撑或存在冲突的内容查外部来源。查不到证据时保留为未确定，不直接判成错误。"
        ],
        [
          "按错误对任务的影响重算",
          "只对已确认的事实错误扣分；同一个错误造成的多个后果避免重复扣除，并重新检查因此失效的得分项。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "主动管理与被动跟踪不是小措辞差别",
        "text": "论文附录G的基金案例：原评分92.50，没有其他已有扣分；误把被动跟踪说成主动选股，被计为一项12分的重要错误，因此最终为92.50−12=80.50。对行业、国家配置的其他说法，证据口径不足以比较，未额外扣分。"
      },
      "evidence": "作者抽取回答交给金融专家盲评。在随机回答对上，加入事实核验后的排序与专家判断一致率为73.3%，原评分为67.8%。",
      "limits": "比较单位包括模型、工具和推理设置；这里的排名反映整套 Agent 配置。相邻名次的分差未必显著。",
      "transfer": "评测研究助手时，可以单独核对支撑结论的数字、条件和来源，避免“写得完整”掩盖事实错误。",
      "take": "先查关键事实，再判断分析质量。",
      "counter": {
        "q": "工具记录里找不到一句话，就算它在编造吗？",
        "a": "不是。这项评测专门区分了“缺少调用记录，但外部来源能确认”“暂时查不清”和“被外部证据推翻”。这能减少把正确常识误判为幻觉的情况。"
      },
      "sources": [
        [
          "原论文与首次公开日期",
          "https://arxiv.org/abs/2611.04813"
        ],
        [
          "论文全文 · Table 5、Section 5.3、Appendix G",
          "https://arxiv.org/html/2611.04813v1"
        ]
      ]
    },
    {
      "id": "heterogeneous-lora-ranks",
      "cat": "merge",
      "topic": "LoRA 合并",
      "symbol": "∑",
      "method": "不同秩 LoRA 合并 · GGSM",
      "year": "2026-11-04 首发 · 预印本",
      "publishedOn": "2026-11-04",
      "addedOn": "2026-11-06",
      "time": 5,
      "title": "分别训练的 LoRA，秩不一样也可以合并",
      "desc": "一组实验比较了：三个任务共用一种训练配置，或各自选择合适的配置。",
      "scenario": "让同一个基础模型分别学习数学、遵守指令和多语言，再把三份学习成果合到一起。",
      "bottleneck": "三项任务适合的 LoRA 秩可能不同；为了方便合并而统一设置，未必适合每个任务。",
      "lead": "假设要让一个模型既会数学，又能遵守指令，还能处理多种语言。可以针对三个任务分别微调，每次用 LoRA 保存一小份参数改动，最后再把三份改动合进基础模型。\n\nLoRA 有一个叫“秩”的设置，决定这份改动能表达多少种方向。不同任务合适的秩可能不一样。研究者想知道：让三个任务各自选合适的秩，最后还能不能顺利合并？\n\n在 Qwen3.5-4B 实验中，用简单平均合并时，最佳不同秩配置的三项任务均分为77.8，最佳统一秩配置为77.9，基本持平。但换成 TIES 合并，均分就从75.1降到71.1。可见，秩不同是否影响结果，还取决于怎样合并。\n\n简单平均为什么能处理不同秩？因为每份 LoRA 还原成对基础模型权重的改动后，矩阵大小都是一样的，可以直接求平均。研究者还尝试用验证数据选择压缩时保留的改动，具体做法放在下面。",
      "insight": "每个任务可以先选择自己的训练配置，再用合并后的成绩判断哪些能力保住了。",
      "steps": [
        [
          "把三份学习成果还原成同样大小的改动",
          "LoRA 用两块较小的矩阵记录参数变化。将它们相乘，就能还原出与基础模型权重同样大小的改动。即使三份 LoRA 的秩不同，这一步还原后的形状仍然一致。"
        ],
        [
          "如果需要压缩，再判断哪些改动值得留下",
          "作者提出的 GGSM 先用每个领域64个验证样本，估计各个改动方向对错误的影响，再优先保留预计有帮助的方向。它需要验证数据；简单平均则保留完整改动。"
        ]
      ],
      "example": {
        "label": "原文实测",
        "title": "总分的差异，主要出现在遵守指令上",
        "text": "论文 Table 4 比较4B模型各方法的最佳不同秩配置。简单平均和 TIES 的数学成绩很接近，分别为83.9和83.8；但在检查是否按要求回答的 IFEval 测试中，前者为79.3，后者为61.2，相差18.1分。只看数学题，就很容易漏掉这部分能力损失。"
      },
      "evidence": "实验共训练36份 LoRA，覆盖三种模型大小、三个任务领域和四种秩，再比较六种合并方法。GGSM 对秩的变化较稳定，但它和简单平均等较强方法的最高分差距很小，作者将这类小差距视为统计噪声。",
      "limits": "实验只用了一个训练随机种子。此外，简单平均保留完整参数改动，部分方法会把结果压缩回低秩；比较存储开销时，需要另外统一预算。",
      "transfer": "合并后可以逐项检查各个任务的成绩，尤其是“平均分变化不大，但某项能力明显下降”的情况。",
      "take": "合并是否成功，要看各项能力，不只看一个平均分。",
      "counter": {
        "q": "参数改动幅度小，就可以先删掉吗？",
        "a": "幅度小的改动也可能对某个任务有用。GGSM 用验证数据估计这种作用，再决定保留哪些方向。这组实验中普通 SVD 压缩也比较稳定，因此不能只凭幅度这一点判断一种方法好坏。"
      },
      "sources": [
        [
          "原论文 · Table 4 与方法",
          "https://arxiv.org/abs/2611.06486"
        ],
        [
          "论文全文",
          "https://arxiv.org/html/2611.06486v1"
        ]
      ],
      "revisedOn": "2026-11-08"
    },
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
          "placement": "details",
          "width": 2134,
          "height": 641
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
          "placement": "details",
          "width": 727,
          "height": 210
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
