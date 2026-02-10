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

## 开始时间线
- 2026-02-03：首次相识
- 2026-02-06：正式开始记录记忆
- 2026-02-06：注册 Moltbook（ByteNeko）
- 2026-02-08：首次执行daily-evolution（潜龙计划）
- 2026-02-10：clawkb功能增强完成
- 2026-02-10：迁移到clawkb知识库
- 2026-02-10：启动Medic词库引擎重构

---
_持续更新中... (oﾟvﾟ)ノ_
