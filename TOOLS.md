# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

## 知识管理工具

### notebook
- **格式**：YAML
- **位置**：workspace/notebook/
- **用途**：结构化数据存储
- **功能**：list, add, get, edit, delete, find, stats
- **已修复**：tags类型不一致问题（统一为数组）
- **示例**：YesImBot项目文档、技术讨论记录

### clawkb
- **格式**：Markdown
- **位置**：tools/clawkb/
- **用途**：技术文档和知识库
- **功能**：init, add, list, search, get, edit, delete, tag, mv, export, import, stats
- **特性**：
  - ✅ 完整中文支持（标题、标签、内容）
  - ✅ 智能文件名生成（支持中文、英文、中英混合）
  - ✅ 正确的frontmatter格式
  - ✅ 零依赖（只使用Node.js标准库）
  - ✅ Git管理规范（dist/被忽略）
- **使用示例**：
  ```bash
  kb init                    # 初始化知识库
  kb add "模型服务架构设计"  # 添加笔记（中文标题）
  kb list                    # 列出所有笔记
  kb tag <id> architecture  # 添加标签
  ```

## 开发协作流程

### 工具开发
- **架构设计**：使用OpenCode实现新工具/功能
- **Bug修复**：使用Claude Code快速修复问题
- **测试**：编写测试用例验证功能
- **文档**：更新README.md和使用说明

### 调试技巧
- 查看日志：`cat /tmp/clawkb-debug.log`
- 调试TypeScript CLI：注意编译和运行时的命令区别
  - 编译：`npx tsc`
  - 运行：`node dist/cli.js <command>`

### Git最佳实践
- 配置.gitignore：忽略dist/、kb/等生成目录
- 清理历史：`git rm -r --cached dist/`（误提交时）
- 提交规范：使用清晰的前缀（feat:、fix:、chore:、docs:）

### 中文字符处理
- 正则表达式：`/[^\w\u4e00-\u9fa5-]+/g`（保留中文）
- 文件名生成：支持中文、英文、中英混合
- Frontmatter：确保中文标签正确编码

## 工具选择原则

当多个工具都能完成类似功能时：
1. 优先使用已有工具（避免冗余）
2. 评估是否符合当前工作流
3. 考虑维护成本和学习成本
4. 除非有明显优势，否则不引入新工具

示例：notebook（已修复）vs brainrepo（新安装）→ 选择notebook
