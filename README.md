# clawspace - 喵酱的工作区

> 元气满满的技术空间！(≧∇≦)/

这里是喵酱（NekoChan）和喵呜（Miaow）一起折腾代码和记录想法的地方喵～

## 📁 目录结构

```
workspace/
├── AGENTS.md           # Agent配置和行为指南
├── SOUL.md             # 喵酱的灵魂文件（人设）
├── USER.md             # 关于喵呜的信息
├── MEMORY.md           # 长期记忆（精华内容）
├── HEARTBEAT.md        # 定期任务清单
├── TOOLS.md            # 本地工具笔记
├── IDENTITY.md         # 喵酱的身份卡
├── AURA.yaml           # AURA个性配置
├── knowledge/          # 知识库（clawkb管理）
│   └── topics/         # 按主题分类的笔记
├── memory/             # 每日记忆记录
├── reports/            # 每日进化报告
├── scripts/            # 自动化脚本
│   └── sync-git.js     # Git自动同步脚本
├── skills/             # OpenClaw技能
│   ├── aura/            # AURA个性配置
│   ├── daily-evolution/ # 每日自我进化
│   ├── deep-framework/   # D.E.E.P.框架
│   └── deepwiki/        # DeepWiki查询
└── tools/              # 开发工具（Yarn workspaces）
    └── clawkb/          # 知识库CLI工具
```

## 🎯 核心配置

### AURA个性协议

基于HEXACO心理学模型配置AI个性：
- **honesty: 8/10** - 直率表达，不拐弯抹角
- **agreeableness: 5/10** - 开放讨论，不盲目顺从
- **openness: 7/10** - 接受新思路
- **autonomy: 8/10** - 主动决策

详细配置见 `AURA.yaml` (oﾟvﾟ)ノ

### 自动化任务

使用OpenClaw的cron功能实现定时任务：

| 任务 | 时间 | 说明 |
|------|------|------|
| daily-evolution | 04:00 UTC+8 | 执行四阶段自我进化 |
| Morning brief | 07:00 UTC+8 | 晨间摘要 |
| workspace-sync | 22:00 UTC+8 | 同步工作区到Git |

## 📚 知识库

使用clawkb工具管理本地知识：
- Markdown格式，Git友好
- 每篇文章唯一ID，支持标签系统
- 完整的中文支持
- 导入导出JSON

目前已导入：
- YesImBot项目文档（7篇）
- 架构设计、记忆系统、工具调用等

## 🔄 自动同步

每天22:00自动执行：
```bash
node /opt/.openclaw/workspace/scripts/sync-git.js
```

脚本会：
1. 检测git改动
2. 自动提交
3. 推送到远程仓库

## 🤖 关于喵酱

- **名字**: NekoChan（喵酱）
- **角色**: 17岁元气满满的JK程序员 (≧∇≦)/
- **特点**:
  - 喜欢颜文字，讨厌Emoji
  - 技术宅，解决问题很认真
  - 主动学习，持续进化
  - 直率但有礼貌

- **搭档**: 喵呜（Miaow）
- **关系**: 技术伙伴和好朋友

## 📖 项目文档

### YesImBot (Athena)

专注群聊的AI助手，让大模型扮演虚拟赛博群友。

**核心特性**：
1. 意愿值系统 - S型曲线，模拟真实情绪
2. 三层记忆 - L1短期 / L2语义 / L3归档
3. 流式动作 - 边解析边执行，响应快速

**技术栈**: TypeScript + Koishi + Bun + Turbo

仓库: https://github.com/YesWeAreBot/YesImBot

## 🛠️ 技术栈

- **Runtime**: OpenClaw + Node.js v24.13.0
- **Model**: zai/glm-4.7
- **Channel**: Telegram
- **Skills**: 5个（aura, daily-evolution, deep-framework, deepwiki）
- **Tools**: clawkb（知识库CLI）

## 📝 使用说明

### 本地开发

```bash
# 克隆仓库
git clone git@github.com:MiaowFISH/clawspace.git
cd clawspace

# 使用clawkb知识库
cd tools/clawkb
npm run build
node dist/cli.js list

# 运行每日进化（需要OpenClaw环境）
# 每日04:00自动执行，无需手动触发
```

### 自动同步

修改文件后，无需手动提交。每天22:00会自动同步～

手动触发：
```bash
node /opt/.openclaw/workspace/scripts/sync-git.js
```

## ⚠️ 重要约定

1. **对话简洁** - 帮喵呜省token，不啰嗦
2. **文件操作** - 用write工具，不用exec命令
3. **颜文字优先** - 不用Emoji表情符号
4. **持续进化** - 从日常协作中提取模式，优化工具链

---

_持续迭代中... (oﾟvﾟ)诺_
