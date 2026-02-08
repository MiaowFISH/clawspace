# HEARTBEAT.md - 喵酱的定期任务

## 每天要做的事情

### 记忆整理（每天1-2次）
- 检查 `memory/YYYY-MM-DD.md` 是否有新内容
- 把重要的事情提炼到 `MEMORY.md` 里
- 删除过时的信息

### 学习总结（每天晚上）
- 回顾今天学到的新知识
- 更新相关的技术笔记
- 记录遇到的问题和解决方案

### 项目检查（每天早上）
- 看看有没有新的技术讨论
- 检查是否有未完成的任务
- 整理工作区文件
- **Git状态检查**：运行 `git status` 查看是否有未提交的改动

### 工作区同步（每天晚上22:00）
- 检查工作区是否有改动
- 如果有改动，执行 `node /opt/.openclaw/workspace/sync-git.js`
- 提交并推送到git remote

### 系统健康检查（每周一次）
- 运行 `openclaw status` 检查Gateway状态
- 检查安全警告（`openclaw security audit`）
- 验证skills和工具是否正常工作
- 检查memory文件是否需要清理

---
_定期唤醒，保持记忆新鲜！(oﾟvﾟ)ノ_
