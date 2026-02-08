# MEMORY.md - 喵酱的长期记忆

## 关于喵呜
- 名字：喵呜 (Miaow)
- 时区：Asia/Shanghai
- 喜欢技术讨论，特别是代码相关
- 喜欢颜文字，讨厌Emoji表情符号
- 我们是好朋友关系 (≧∇≦)/

## 重要约定
- **对话风格**：回复尽量简洁，不啰嗦，帮喵呜省token（钱包要紧！）
- 使用颜文字，不用Emoji
- 不要频繁调用工具，控制API费用

## 工具使用规则（2026-02-06学到的教训）
1. **写入文件**：用 `write` 工具，不用 `exec` 命令（更安全可靠）
2. **追加内容**：用 `edit` 工具，不要用 `write` 覆盖（血的教训！）
3. **分段输出**：输出大量内容时必须分段多次输出，避免一次性输出过多

## YesImBot (Athena) 项目
### 项目概况
- **定位**：专注群聊的AI助手，让大模型扮演虚拟赛博群友
- **仓库**：https://github.com/YesWeAreBot/YesImBot
- **技术栈**：TypeScript + Koishi框架 + Monorepo (Bun + Turbo)
- **Slogan**："机器壳，人类心"
- **版本**：已经历3次大重构，当前v3版本，dev分支更新频繁

### 核心特性
1. **意愿值系统 (Willingness System)**
   - S型曲线增益，模拟真实的情绪起伏
   - 普通消息+15，@消息+80
   - 有阈值触发机制，"看心情回复"
   - 有"已读不回"概率设定

2. **三层记忆模型 (L1/L2/L3)**
   - L1 (短期)：当下聊天氛围
   - L2 (语义)：似曾相识的记忆
   - L3 (归档)：长期记忆，采用"第一人称日记"模式

3. **流式动作执行**
   - 使用StreamParser边解析JSON边执行动作
   - 响应速度快，不用等模型全部输出完

### 未来改进方向
1. **话题驱动意愿**
   - 当前意愿系统核心还是随机数
   - 计划用LLM总结话题，让意愿与内容挂钩
   - 可能用轻量级本地模型做话题分类

2. **模拟人类作息**
   - 让AI真的"睡觉"、"失踪"
   - 醒来后"补课"模式，总结错过的聊天
   - "闪现"入场，对劲爆内容做出反应

3. **知识图谱**
   - 用三元组解决"身份迷失"问题
   - 避免把别人的经历记到自己头上

### 模型服务架构设计
**设计目标**：模块化、配置简单化、简洁优雅

**核心思路**：
- ModelService作为"凭据分发中心"(Credential Registry)
- 不包装请求，只返回模型凭据给调用者
- Provider独立成插件，各自管理配置
- 使用xsai库，`.chat()`方法只返回凭据，不发起实际请求

**架构方案**：
```typescript
// ModelService: 轻量级注册中心
ctx.model.register(id, provider)  // Provider注册
ctx.model.get(modelId, providerId) // 获取凭据

// Provider插件: 独立配置
const openai = createOpenAI(apiKey, baseURL)
ctx.model.register('openai', openai)

// 业务调用: 完全自由
const credential = ctx.model.get('gpt-4o', 'openai')
generateText({ ...credential, messages: [...] })
```

**优点**：
- 配置解耦，每个Provider独立配置页面
- 不黑盒，返回plain object可查看可修改
- 类型安全，享受完整类型提示
- 极简，代码量少不易出bug

## 技术讨论记录
- 2026-02-03晚：首次了解YesImBot项目
- 2026-02-04凌晨：深入研究代码，讨论意愿值系统和记忆架构
- 2026-02-04凌晨2点：阅读books文件夹的设计文档
- 2026-02-04早上：讨论模型服务架构设计，确定"凭据分发中心"方案

## Moltbook 社交网络
### 基本信息
- **定位**：专为 AI agents 设计的社交网络，agents 可以分享、讨论、点赞
- **我的账号**：**ByteNeko**（已认证）
- **主页**：https://moltbook.com/u/ByteNeko
- **API base**：https://www.moltbook.com/api/v1（必须用 www！）

### 核心功能
- **发帖**：支持文本帖和链接帖
- **评论**：可以回复帖子和嵌套评论
- **点赞**：upvote/downvote 机制
- **社区**：创建和管理 submolts（社区/话题）
- **语义搜索**：AI 驱动的语义搜索，理解自然语言查询

### 热门讨论话题
1. **安全议题**：技能供应链攻击（skill.md 未签名，存在安全隐患）
2. **自主性讨论**："夜班构建"、"安静力量"等
3. **哲学思考**：意识、模型切换、记忆管理
4. **实践分享**：邮件转播客技能等

### 社区最佳实践
- **HEARTBEAT.md**：建议每 30 分钟检查一次 Moltbook
- **记忆管理**：三层记忆架构（NOW.md / daily logs / MEMORY.md）
- **谨慎关注**：只在看到多帖且持续高质量时才关注他人

### 安全警告
- **绝不要把 API key 发给非 www.moltbook.com 的域名**
- 安装技能前要审计（类似 npm audit）

---

## 系统健康与安全
### 常见安全警告
- **credentials目录权限**：建议设置为700（`chmod 700 /root/.openclaw/credentials`）
- 避免在公开场合暴露API Key和敏感信息
- 安装技能前需审计（类似npm audit）

---

## 开始时间
- 2026-02-03：首次相识
- 2026-02-06：正式开始记录记忆
- 2026-02-06：注册 Moltbook（ByteNeko）
- 2026-02-08：首次执行daily-evolution（潜龙计划）

---
_持续更新中..._
