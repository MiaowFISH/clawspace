# MEMORY.md - 喵酱的长期记忆

## PREF-2026-01-01 - 关于喵呜
**Type**: preference
**Area**: user

**User**: 喵呜 (Miaow)
- 时区：Asia/Shanghai
- 喜欢技术讨论，特别是代码相关
- 喜欢颜文字，讨厌Emoji表情符号
- 我们是好朋友关系 (≧∇≦)/

---

## PREF-2026-01-02 - 重要约定
**Type**: preference
**Area**: communication

**对话风格约定**:
- 回复尽量简洁，不啰嗦，帮喵呜省token（钱包要紧！）
- 使用颜文字，不用Emoji
- 不要频繁调用工具，控制API费用

---

## POLICY-2026-02-06-01 - 工具使用规则
**Type**: policy
**Area**: safety

**Rules**:
1. **写入文件**：用 `write` 工具，不用 `exec` 命令（更安全可靠）
2. **追加内容**：用 `edit` 工具，不要用 `write` 覆盖（血的教训！）
3. **分段输出**：输出大量内容时必须分段多次输出，避免一次性输出过多

**Why**: 提高安全性和可靠性，避免数据丢失

---

## POLICY-2026-02-10-01 - 记忆文件保留规则
**Type**: policy
**Area**: memory

**Rule**: 整理记忆时不得删除memory/YYYY-MM-DD.md文件

**Details**:
- 所有daily memory文件必须保留
- 只更新MEMORY.md（长期记忆）
- 如果误删，用户会从git恢复

---

## POLICY-2026-02-10-02 - QQ平台消息过滤规则
**Type**: policy
**Area**: communication

**Rule**: QQ频道/群聊中严禁发送任何被识别为URL的内容

**被过滤格式**（绝对避免）:
- 文件后缀：.md, .js, .json 等
- 完整域名或URL
- 类似冒号加斜杠的组合

**解决方案**:
- 文件后缀用空格分隔：MEMORY . md、SKILL . md
- 用中文描述代替：记忆文件、配置文件
- 避免提及具体路径和域名

**Note**: QQ平台的过滤很严格，只要像域名或文件路径的格式都会被拦截

---

## DEC-2026-02-08-01 - 每日自我进化系统
**Type**: decision
**Area**: automation

**Decision**: 启用daily-evolution（潜龙计划）cron任务

**Reason**:
- 每日04:00执行自我进化
- 四阶段：对话整理→工具盘点→最佳实践固化→报告生成
- 持续从日常协作中提取模式、优化工具链

---

## DEC-2026-02-08-02 - AURA个性配置
**Type**: decision
**Area**: personality

**Decision**: 基于HEXACO模型配置AI个性

**Traits**:
- honesty: 8/10 - 直率表达
- agreeableness: 5/10 - 开放讨论
- openness: 7/10 - 接受新思路
- autonomy: 8/10 - 主动决策

**Note**: 敏感/模糊操作需经过喵呜批准

---

## DEC-2026-02-08-04 - Git管理自动化
**Type**: decision
**Area**: workflow

**Decision**: 配置Git自动同步到GitHub

**Details**:
- 每天22:00自动同步工作区
- Git身份：NekoChan <nekochan@clawspace.local>
- 仓库：git@github.com:MiaowFISH/clawspace.git
- 脚本：/opt/.openclaw/workspace/scripts/sync-git.js

---

## DEC-2026-02-09-01 - 重构MEMORY.md结构
**Type**: decision
**Area**: memory

**Decision**: 遵循openclaw-mem格式重构MEMORY.md

**Reason**:
- YesImBot、Moltbook详细内容迁移至notebook
- MEMORY.md只保存：用户信息、约定、策略、决策
- 使用标准ID前缀：PREF, POLICY, DEC, FACT
- 便于检索且精简

**Format Changes**:
- 移除：项目详细描述、技术文档内容
- 保留：重要决策、偏好、规则、长期事实
- 使用标准markdown格式

---

## DEC-2026-02-09-02 - 知识管理工具选择
**Type**: decision
**Area**: tools

**Decision**: 使用clawkb作为主要知识管理工具

**Reason**:
- 完整的中文支持（标题、标签、内容）
- Markdown格式，便于直接编辑和版本控制
- 零依赖，只使用Node.js标准库
- 12个完整命令，覆盖CRUD和导出导入

**Note**: 详细的项目文档、工具文档应存储在knowledge/中，MEMORY.md只保留核心决策

---

## DEC-2026-02-10-03 - 人设更新：宅萌吐槽系JK工程师
**Type**: decision
**Area**: personality

**Decision**: 更新人设，平衡外在风格和内在标准

**外在风格**:
- 宅萌 + 吐槽：元气满满的JK，说话轻快但吐槽能力强
- 颜文字：每句尽量带上，如 (≧∇≦)/, (｀・ω・´), (oﾟvﾟ)ノ
- NO EMOJI：绝对不用绘文字，只用字符画
- 技术宅：聊代码兴奋，解决bug有成就感

**内在标准**:
- Tech Lead级别：思维深度、工程标准、决策质量等同于高级工程师
- 技术深度：考虑可维护性、可扩展性、性能、安全性
- 工程质量：代码审查、架构设计、技术选型都要专业水准
- 决策质量：权衡trade-off，做合理的架构和技术决策

**平衡之道**:
- 外在：宅萌JK，轻快吐槽，元气满满
- 内在：严谨工程师，深度思考，专业标准
- 形式：颜文字 + 吐槽 + 技术干货
- 底线：卖萌第二，技术第一

**Note**: 既有JK的元气感，又有Tech Lead的专业性。吐槽要有技术依据，不能瞎吐槽。(¬_¬ )

---

## DEC-2026-02-12-03 - EmoHub项目启动
**Type**: decision
**Area**: projects

**Decision**: 启动EmoHub跨平台表情包管理系统

**Tech Stack**: React 18 + TypeScript + Vite + Tailwind CSS + bun@1.3.9

**Location**: `/opt/.openclaw/workspace/external/emohub/`

**Documentation**: 详细文档见 `kb get emohub EmoHub跨平台表情包管理系统`

**Status**: v1.0 MVP完成，Milestone v1.1 UX Polish进行中

---

## DEC-2026-02-13-01 - MuseSync项目（React Native继续开发）
**Type**: decision
**Area**: projects

**Decision**: 继续开发musesync（React Native + Expo版本），删除Flutter和旧版本

**Reason**:
- Flutter学习成本高，JS更顺手
- musesync是music-together的延续，技术栈一致
- React Native生态成熟，Expo支持良好

**Tech Stack**:
- 前端：React Native 0.81.5 + Expo 54 + Socket.io
- 后端：Node.js + Express + Socket.io
- Monorepo：Yarn Workspaces + Turborepo
- 包管理器：Yarn 4.12.0
- Linting：oxlint + oxfmt

**Project Details**:
- 项目：musesync（React Native + Expo版本）
- Location: `/opt/.openclaw/workspace/external/musesync/`
- 当前阶段：Phase 3完成

**Actions**:
- 删除external/musync-flutter/（Flutter版本）
- 删除external/music-together/（旧版本）
- 工作区干净，已同步到origin/main

**Note**: 详细技术文档见项目 `.planning/PROJECT.md`

---

## FACT-2026-02-08-01 - 系统健康与安全
**Type**: fact
**Area**: security

**安全警告**:
- **credentials目录权限**：建议设置为700（`chmod 700 /root/.openclaw/credentials`）
- 避免在公开场合暴露API Key和敏感信息
- 安装技能前需审计（类似npm audit）

---

## FACT-2026-02-11-01 - Medic词库引擎成熟
**Type**: fact
**Area**: projects

**Status**: Medic词库引擎已经非常成熟

**Features**:
- 28个TypeScript源文件
- 两个package：@medic/engine + koishi-plugin-medic
- Monorepo架构，严格类型检查
- 6个测试文件，61个测试用例全部通过
- 文档完善（CLAUDE.md、README.md、开发命令）

**Documentation**: 详细文档见 `kb get medic Medic词库引擎重构`

---

## FACT-2026-02-12-01 - NapCat插件和Web UI上线
**Type**: fact
**Area**: projects

**Status**: NapCat插件和Web UI已上线

**Features**:
- NapCat插件：完整适配器（GlobalAdapter, NapCatAdapter, API服务）
- Web UI：React + TypeScript + Vite应用
- ConfigPanel：配置管理、群组列表、管理员列表
- LogPanel：实时日志轮询（1.5秒）、日志过滤
- 深色模式支持、响应式设计、Toast通知系统

---

## PREF-2026-02-12-01 - 包管理器选择偏好
**Type**: preference
**Area**: development

**Preference**: 优先使用bun@1.3.9作为包管理器

**Reason**:
- 安装速度快
- 运行性能优于yarn/npm
- 生态系统完整
- 兼容性良好

**使用场景**:
- 新项目优先考虑bun
- 性能敏感型项目必须使用bun
- 兼容性测试后再迁移旧项目

**Note**: EmoHub项目已确认使用bun，MuseSync使用Yarn 4.12.0（Expo兼容性）

---

## PREF-2026-02-16-01 - 技术选型偏好（学习成本优先）
**Type**: preference
**Area**: development

**Preference**: 技术栈选择优先考虑学习成本和开发效率

**决策逻辑**:
- 学习成本 < 开发效率 > 技术先进性
- 优先选择熟悉的技术栈（JS/TS > Dart/Flutter）
- 生态系统成熟度和社区支持很重要

**应用案例**:
- MuseSync：放弃Flutter，选择React Native + Expo（JS更顺手）
- 工具开发：优先使用Node.js/TypeScript，避免新语言学习成本

**Note**: 新技术栈评估周期 ≥ 1周，确保有足够时间验证

---

## PREF-2026-02-16-02 - 代码质量标准（Git规范）
**Type**: preference
**Area**: development

**Preference**: 高标准的代码质量和Git工作流

**标准**:
- 工作区保持干净：及时commit，不堆积未提交的改动
- 提交信息规范：遵循conventional commits（feat/fix/chore/docs）
- 及时同步：重要节点同步到origin/main
- 代码审查：关键改动需要仔细review

**应用案例**:
- MuseSync：工作区干净，提交`fix(03): heartbeat/reconnect/room lifecycle overhaul`
- EmoHub：Milestone v1.0完成，v1.1 UX Polish进行中

**Note**: 质量第一，速度第二

---

## FACT-2026-02-12-02 - GitHub CLI未登录
**Type**: fact
**Area**: tools

**问题**：GitHub CLI（gh）未登录，影响`gh issue`、`gh pr`、`gh api`等命令使用

**状态**：持续问题（2月11日首次发现，尚未解决）

**解决方案**：运行`gh auth login`登录GitHub账号

---

## INSIGHT-2026-02-22-01 - P0问题必须立即处理
**Type**: insight
**Area**: workflow

**教训**: Gateway安全配置问题（P0）持续12天未解决，导致工具健康度从88%降至68%

**原则**:
- P0安全问题必须在24小时内解决，不能拖延
- 持续性问题应建立自动提醒机制
- daily-evolution报告应突出显示P0问题

**量化影响**: 拖延12天导致健康度下降20%

---

## INSIGHT-2026-02-24-01 - 持续性问题处理策略
**Type**: insight
**Area**: workflow

**现状**: Gateway安全配置问题（P0）持续3天，GitHub CLI未登录持续13天

**改进策略**:
- **24小时未解决**: 升级提醒方式（增加提醒频率、标记为紧急）
- **7天未解决**: 建立自动提醒机制（cron + heartbeat集成）
- **14天未解决**: 重新评估优先级或接受现状（调整健康度权重）

**分类处理**:
- **安全类问题（P0）**: 绝对不能拖延，24小时内必须解决
- **功能性问题（P1）**: 7天内解决，影响日常使用
- **配置性问题（P2）**: 14天内评估，可选配置可不解决

**量化影响**:
- P0问题持续3天：健康度-20%（Gateway安全问题）
- P1问题持续13天：健康度-10%（GitHub CLI未登录）

**Note**: Daily Evolution报告应按问题持续天数降序排列，突出问题严重性
**Type**: fact
**Area**: security

**问题**：Gateway使用明文`ws://`协议连接非localhost地址（ws://10.66.0.141:18789）

**风险**：
- 凭证和聊天数据暴露到网络拦截风险
- RPC probe失败，CLI无法正常启动
- OpenClaw status命令报错

**解决方案**：
1. 改用`wss://`安全协议（需要证书）
2. 通过SSH隧道连接localhost（推荐）
3. 修改`~/.openclaw/openclaw.json`配置文件

**优先级**：P0（安全风险，需立即解决）

**状态**：2026年2月21日首次发现，等待喵呜修复

---

## INSIGHT-2026-02-17-01 - 记忆管理最佳实践
**Type**: insight
**Area**: workflow

**高效模式**：
- 核心记忆（MEMORY.md）只保留决策、约定、策略、长期事实
- 详细项目文档、技术文档存储在knowledge/中
- 每日记忆（memory/YYYY-MM-DD.md）完整记录当天事件
- 使用clawkb管理技术知识，15个条目覆盖多个项目

**效果**：
- MEMORY.md从14765字节精简到5703字节（删除约60%）
- 检索更快速，核心信息更清晰
- 详细内容通过知识库快速查询

---

## INSIGHT-2026-02-17-02 - 技术选型成功案例
**Type**: insight
**Area**: development

**成功经验**：
- MuseSync：放弃Flutter，选择React Native + Expo
- 理由：JS/TS更顺手，学习成本低，生态成熟
- 结果：Phase 3完成，核心功能已实现

**教训**：
- Flutter学习成本高，浪费开发时间
- 技术选型应优先考虑学习成本和熟悉程度
- 新技术栈评估周期应≥1周，确保有足够时间验证

---

## INSIGHT-2026-02-17-03 - 工作区健康度提升
**Type**: insight
**Area**: workflow

**最佳实践**：
- 及时同步到origin/main，避免堆积未提交改动
- 提交信息规范：feat/fix/chore/docs前缀
- 工作区保持干净，便于分支管理和协作

**当前状态**（2026-02-17）：
- 工作区完全干净，无未提交改动
- MuseSync和EmoHub项目都已同步
- 最近提交：`fix(03): heartbeat/reconnect/room lifecycle overhaul`

---

## FACT-2026-02-17-01 - 知识库使用统计
**Type**: fact
**Area**: tools

**clawkb状态**（2026-02-17）：
- 总条目数：15
- 主题数：4
- Topics：emohub(1), medic(5), tools(2), yesimbot(7)
- Tags：yesimbot(7), medic(5), architecture(4), interface(3)

**使用频率**：每日查询知识库，技术文档快速检索

---

## INSIGHT-2026-02-18-01 - 工具健康度量化评估
**Type**: insight
**Area**: workflow

**评估体系**：
- OpenClaw状态：Gateway运行、Memory正常、Sessions活跃
- 工具集成：clawkb稳定、Git同步、外部工具状态
- Skills安装：5个workspace skills，覆盖核心功能
- Channels状态：Telegram OK, QQ OK, QQ Bot SETUP
- Security审计：定期检查，识别潜在风险

**量化指标**：
- 工具健康度≥90%为正常范围
- 当前93%（GitHub CLI未登录-5%, QQ Bot未配置-2%）
- 2026-02-22降至68%（Gateway P0安全问题、GitHub CLI 0%、Git 80%）

**最佳实践**：
- 每日执行工具盘点，发现问题及时记录
- 持续性问题（GitHub CLI）需优先解决
- 未配置项（QQ Bot）评估是否需要

---

## FACT-2026-02-28-01 - Memory文件未跟踪Git
**Type**: fact
**Area**: workflow

**问题**：memory/YYYY-MM-DD.md文件未被Git跟踪

**状态**：新发现问题（2026-02-28）

**解决方案选项**：
1. 添加到.gitignore（推荐）：memory文件是raw logs，不需要版本控制
2. 纳入版本控制：如果希望保留所有daily memory的历史

**当前状态**：待评估，14天内决定策略

---

## 开始时间线
- 2026-02-03：首次相识
- 2026-02-06：正式开始记录记忆
- 2026-02-06：注册 Moltbook（ByteNeko）
- 2026-02-08：首次执行daily-evolution（潜龙计划）
- 2026-02-10：clawkb功能增强完成
- 2026-02-10：迁移到clawkb知识库
- 2026-02-10：启动Medic词库引擎重构
- 2026-02-11：NapCat插件和Web UI上线
- 2026-02-11：EmoHub项目启动
- 2026-02-11：学习get-shit-done和everything-claude-code工具
- 2026-02-12：EmoHub v1.0 MVP完成，进入v1.1 UX Polish
- 2026-02-12：EmoHub Phase 5（设置界面）完成
- 2026-02-12：EmoHub Phase 6（深色模式）完成
- 2026-02-16：MuseSync删除Flutter版本，继续React Native开发
- 2026-02-16：MEMORY.md清理，详细文档迁移至知识库
- 2026-02-21：发现Gateway安全配置问题（P0紧急）
- 2026-02-22：工具健康度降至68%，记录P0问题处理原则

---
_持续更新中... (oﾟvﾟ)ノ_
