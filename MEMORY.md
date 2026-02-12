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

## DEC-2026-02-08-03 - Notebook知识库
**Type**: decision
**Area**: tools

**Decision**: 启用Notebook作为本地知识库

**Reason**:
- YAML格式，无云锁定
- 支持自定义对象类型
- 标签搜索和过滤
- 用于记录：YesImBot项目文档、技术讨论、Moltbook研讨等

**Note**: YesImBot详细项目信息已迁移至notebook/doc类型

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

**Note**: notebook保留用于结构化数据存储（如YesImBot项目文档）

---

## FACT-2026-02-08-01 - 系统健康与安全
**Type**: fact
**Area**: security

**安全警告**:
- **credentials目录权限**：建议设置为700（`chmod 700 /root/.openclaw/credentials`）
- 避免在公开场合暴露API Key和敏感信息
- 安装技能前需审计（类似npm audit）

---

## FACT-2026-02-10-01 - clawkb功能增强
**Type**: fact
**Area**: tools

**新功能**：
- **配置系统**：`.clawkbrc`文件（JSON格式），支持`dataDir`和`maxIdLength`
- **ID系统**：每篇文章唯一8位ID（a-z0-9），文件名格式为`<topic>/<id>.md`
- **迁移工具**：`kb migrate`命令自动转换旧格式到新格式
- **自动补全**：支持bash/zsh的ID/topic补全
- **双模式查询**：支持`kb get <id>`和传统方式`kb get <topic> <title>`

**Git提交**：2da7067

---

## FACT-2026-02-10-02 - 配置文件搜索路径修复
**Type**: fact
**Area**: tools

**修复内容**：.clawkbrc文件多路径搜索
1. 当前目录 (process.cwd())
2. Workspace目录 (/opt/.openclaw/workspace)
3. 用户主目录 (~)

**改进**：
- dataDir相对路径相对于配置文件所在目录解析
- .clawkbrc加入.gitignore（本地配置）

**Git提交**：10d7f10

---

## DEC-2026-02-10-01 - 迁移到clawkb知识库
**Type**: decision
**Area**: tools

**Decision**: 完全迁移到clawkb知识库系统

**Details**:
- 删除notebook/和books/目录
- 知识库数据位置：knowledge/topics/
- 配置文件：.clawkbrc（dataDir: "./knowledge"）
- 数据管理：全部通过clawkb CLI操作

**Benefits**:
- 统一的工具链管理
- Markdown格式，便于直接编辑
- 完整的中文支持
- Git友好的版本控制

**Git提交**：dd0079f

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

## DEC-2026-02-10-02 - 启动Medic词库引擎重构
**Type**: decision
**Area**: projects

**Decision**: 重构Medic词库引擎，完全独立于IM框架

**Reason**:
- 原版Medic：安卓软件（Java），已因QQ协议变化无法使用
- 重构版（JS+NapCat）：引擎仍保留Java习惯，大量依赖NapCat功能
- 需要彻底重构，实现引擎与IM框架解耦

**Architecture**:
- 执行引擎：@medic/engine（独立包，可单独运行）
- 适配器：@medic/adapter-napcat（NapCat插件）
- 消息接口：标准化消息格式，支持多平台扩展

**Key Features**:
- 1:1复刻原版词库语法（完全兼容hdic.txt）
- 10个内置函数（Variable, Calc, Call, Goto等）
- JavaScript词条支持
- 模块系统
- 上下文管理（变量、常量）

**Documentation**:
- 项目文档：knowledge/topics/medic/2pfw91i2.md
- 原版代码：external/napcat-medic/
- 词库文档：external/napcat-medic/docs/

**Status**: 需求分析完成，待技术选型确认

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

## FACT-2026-02-11-01 - Medic词库引擎重大进展
**Type**: fact
**Area**: projects

**进展时间**：2026-02-10 22:31-02:30（约4小时）
**提交数量**：10个commit

**主要成果**：
1. **架构简化**：移除Toolkit抽象层（删除443行代码）
2. **功能增强**：
   - 配置管理器：群组开关机、管理员管理
   - 管理员操作：Koishi插件管理员功能
   - ToolKit函数：实现293行工具函数
3. **测试覆盖**：
   - 6个测试文件：dictionary, lexer, parser, engine, toolkit, hdic
   - 61个测试用例：全部通过
   - 新增hdic.test.ts：测试实际词库文件
4. **文档完善**：
   - CLAUDE.md：详细的架构说明和开发指南
   - README.md：项目结构和快速开始
   - 开发命令：yarn build/test/lint/fmt

**项目状态**：
- 28个TypeScript源文件
- 两个package：@medic/engine + koishi-plugin-medic
- Monorepo架构，严格类型检查（禁止any，禁止floating promises）

**核心功能**：
- 词库加载：支持hdic.txt格式
- 消息处理：Dictionary匹配 → Lexer → Parser → Response
- 变量系统：@变量名（单字符+多字符）
- 模块系统：MOD(模块名)调用，共享变量
- 配置管理：群组开关机、管理员管理
- 适配器：Koishi插件实现（GlobalAdapter, KoishiAdapter）

**Note**: Medic词库引擎已经非常成熟，测试覆盖完善，文档齐全。

---

## FACT-2026-02-12-01 - NapCat插件和Web UI上线
**Type**: fact
**Area**: projects

**进展时间**：2026-02-11 18:12-20:47
**提交数量**：7个commit

**主要成果**：
1. **NapCat插件**：完整适配器（GlobalAdapter, NapCatAdapter, API服务）
2. **Web UI**：React + TypeScript + Vite应用
   - ConfigPanel：配置管理、群组列表、管理员列表
   - LogPanel：实时日志轮询（1.5秒）、日志过滤
   - 深色模式支持、响应式设计（桌面端双栏、移动端tab）
   - Toast通知系统
3. **技术栈**：React 18 + Tailwind CSS + PostCSS
4. **代码量**：1205行前端代码，约1900行新增代码

**Note**: NapCat插件模板使用Git submodules管理

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

**Note**: EmoHub项目已确认使用bun（前端React + 后端Fastify）

---

## FACT-2026-02-12-02 - GitHub CLI未登录
**Type**: fact
**Area**: tools

**问题**：GitHub CLI（gh）未登录，影响`gh issue`、`gh pr`、`gh api`等命令使用

**状态**：持续问题（2月11日首次发现，尚未解决）

**解决方案**：运行`gh auth login`登录GitHub账号

---

## DEC-2026-02-12-01 - EmoHub项目启动
**Type**: decision
**Area**: projects

**Decision**: 启动EmoHub跨平台表情包管理系统

**Background**:
- 4000+张表情包，管理困难
- QQ收藏已达上限，不想开会员
- 需要智能标签分类、向量搜索、多平台同步

**Architecture**:
- **客户端预处理**：压缩原图、生成缩略图、生成CLIP输入（224x224）
- **服务端向量化**：CLIP模型向量化（~50ms/张）、OCR、向量搜索
- **性能优化**：网络传输快20-50倍（2-5MB → 50-100KB），搜索总响应<200ms

**Tech Stack**:
- 前端：React 18 + TypeScript + Vite + Tailwind CSS
- 移动端：React Native + Expo + NativeWind
- 后端：Node.js 22 + Fastify 4 + Prisma + SQLite
- 向量搜索：sqlite-vss（512维向量）
- AI/向量：CLIP（服务端向量化）、Tesseract.js（OCR）
- 包管理器：bun@1.3.9

**Location**: `/opt/.openclaw/workspace/external/emohub/`

**Documentation**: 技术需求文档SEPC.md已更新，远程仓库待创建

---

## DEC-2026-02-12-02 - EmoHub架构决策
**Type**: decision
**Area**: projects

**Decision**: 客户端预处理 + 服务端向量化

**Reason**:
- 客户端预处理减少服务器负担
- 网络传输快20-50倍（2-5MB → 50-100KB）
- 服务端只负责向量化（~50ms/张）、OCR、向量搜索

**Preprocessing Config**:
- 原图：1920px宽，JPEG 85%（~50-100KB）
- 缩略图：300x300，cover模式，JPEG 80%（~20KB）
- CLIP输入：224x224，cover模式，PNG（~20KB）

**Performance**:
- 客户端预处理：~300ms
- 服务端向量化：~50ms
- 搜索总响应：<200ms
- 单张存储：~92-142KB

**Note**: 所有客户端必须使用相同的预处理参数（cover模式居中裁剪）

---

## TOOL-2026-02-12-01 - get-shit-done项目规划工具
**Type**: tool
**Area**: development

**Tool**: get-shit-done (GSD) - 轻量级元提示、上下文工程和规范驱动开发系统

**Location**: https://github.com/gsd-build/get-shit-done

**Core Workflows**:
1. `/gsd:new-project` - 完整初始化（问题→研究→需求→路线图）
2. `/gsd:discuss-phase N` - 捕获实现决策（视觉/API/内容/组织）
3. `/gsd:plan-phase N` - 研究→计划→验证（2-3个原子任务）
4. `/gsd:execute-phase N` - 并行执行、刷新上下文、原子提交
5. `/gsd:verify-work N` - 手动用户接受测试
6. `/gsd:complete-milestone` - 归档里程碑、标记发布
7. `/gsd:quick` - 临时任务（bug修复、小功能）

**Key Features**:
- 上下文工程：自动管理文件（PROJECT.md、REQUIREMENTS.md、ROADMAP.md、STATE.md）
- XML提示格式：原子任务+验证步骤
- 多代理协调：研究、规划、执行、验证代理
- 原子Git提交：每任务一个commit
- 快速模式：跳过研究、计划检查、验证器

**Best Practices**:
- 使用`/clear`而不是开新session（保留GSD状态）
- Monorepo阶段划分对应GSD Phases
- 验证阶段必须手动测试功能
- 进度跟踪：`/gsd:progress`

**Note**: 解决上下文腐烂（context rot），适合规范驱动开发项目

---

## TOOL-2026-02-12-02 - everything-claude-code配置集合
**Type**: tool
**Area**: development

**Tool**: everything-claude-code - Claude Code完整配置集合

**Location**: https://github.com/affaan-m/everything-claude-code

**Components**:
1. **15+ Agents**: planner, architect, code-reviewer, security-reviewer等
2. **28+ Skills**: coding-standards, backend-patterns, frontend-patterns, tdd-workflow等
3. **30+ Commands**: /plan, /tdd, /code-review, /security, /build-fix等
4. **Rules**: common/和语言特定目录
5. **Hooks**: 20+种事件类型

**Features**:
- 跨平台：Windows, macOS, Linux
- 支持Claude Code CLI v2.1.0+
- 自动补全（bash/zsh）
- 生态系统：Skill Creator, AgentShield, Continuous Learning v2

**Installation**:
```bash
/plugin marketplace add affaan-m/everything-claude-code
/plugin install everything-claude-code@everything-claude-code
cp -r everything-claude-code/rules/common/* ~/.claude/rules/
cp -r everything-claude-code/rules/typescript/* ~/.claude/rules/
```

**Use Cases**:
- 单个任务：agents处理特定需求
- 代码审查：code-reviewer + security-reviewer
- TDD：tdd-guide workflow
- 快速执行：/plan, /tdd, /code-review等斜杠命令

**Note**: 与get-shit-done互补，GSD负责工作流，everything-claude-code提供agents/skills/commands

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

---
_持续更新中... (oﾟvﾟ)ノ_
