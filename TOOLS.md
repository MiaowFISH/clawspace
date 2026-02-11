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

### clawkb（主要工具）
- **格式**：Markdown
- **位置**：tools/clawkb/
- **用途**：技术文档和知识库
- **功能**：init, add, list, search, get, edit, delete, tag, mv, export, import, stats
- **配置系统**：
  - `.clawkbrc`文件（JSON格式）
  - 支持参数：`dataDir`（数据目录）、`maxIdLength`（ID长度）
  - 搜索路径：当前目录 → workspace → ~（优先级从高到低）
  - dataDir相对路径相对于配置文件所在目录解析
  - 环境变量覆盖：`CLAWKB_DATA_DIR`、`CLAWKB_MAX_ID_LENGTH`
- **ID系统**：
  - 8位字符唯一ID（a-z0-9）
  - 文件名格式：`<topic>/<id>.md`
  - 支持双模式查询：`kb get <id>` 和传统方式
  - `kb migrate`命令自动转换旧格式
- **自动补全**：
  - 支持bash/zsh
  - 可补全topic、id、标题
  - 安装：`kb completion install bash` / `kb completion install zsh`
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
  kb get bnwis6t2            # 通过ID查询
  kb tag bnwis6t2 arch      # 添加标签
  kb migrate                 # 迁移旧格式
  kb completion install bash # 安装自动补全
  ```
- **CLI调用方式**：
  - 未全局安装时：`node dist/cli.js <command>`
  - 示例：`node /opt/.openclaw/workspace/tools/clawkb/dist/cli.js stats`

## 工具开发最佳实践

### 协作模式
- **架构设计**：使用OpenCode实现新工具/功能
  - 适合从零开始构建、架构设计
  - 负责整体方案和技术选型
- **Bug修复**：使用Claude Code快速修复问题
  - 适合调试、快速迭代、定位问题
  - 可以准确修复具体bug
- **分工明确**：OpenCode负责骨架，Claude Code负责细节

### 开发流程
1. **需求分析**：明确功能、边界、技术选型
2. **架构设计**：OpenCode设计整体结构
3. **编码实现**：OpenCode实现核心功能
4. **测试验证**：编写测试用例，手动验证关键功能
5. **Bug修复**：Claude Code修复发现的问题
6. **文档完善**：更新README.md、使用说明

### TypeScript CLI开发
- **编译**：`npx tsc`（在工具目录下）
- **运行**：`node dist/cli.js <command>`（注意：不需要工具前缀）
- **调试技巧**：
  - 查看日志：`cat /tmp/<tool>-debug.log`
  - 添加console.log调试参数解析
  - 检查编译后的dist/目录

### Git最佳实践
- **.gitignore配置**：
  - 忽略dist/（build artifacts）
  - 忽略数据目录（kb/、knowledge/等）
  - 忽略配置文件（.clawkbrc等本地配置）
- **清理历史**：
  - 误提交时：`git rm -r --cached dist/`
  - 清理后添加到.gitignore
- **提交规范**：
  - feat: 新功能
  - fix: Bug修复
  - chore: 杂项（配置、构建）
  - docs: 文档

### 中文字符处理
- **正则表达式**：`/[^\w\u4e00-\u9fa5-]+/g`（保留中文）
- **文件名生成**：支持中文、英文、中英混合
- **Frontmatter**：确保中文标签正确编码，注意换行

### 工具评估与选择
- **避免冗余**：评估后选最优方案，不重复安装相似工具
- **工具选择原则**：
  1. 优先使用已有工具
  2. 评估是否符合当前工作流
  3. 考虑维护成本和学习成本
  4. 除非有明显优势，否则不引入新工具
- **教训**：未评估就安装brainrepo，后删除（浪费时间）

### 包管理器选择
- **默认**：bun@1.3.9（性能优于yarn/npm）
- **使用场景**：
  - EmoHub项目：前端React + 后端Fastify
  - 新项目优先考虑bun
  - 性能敏感型项目优先使用bun
- **优势**：安装速度快、运行性能好、生态系统完整
- **注意**：兼容性测试后再迁移旧项目
