# 川云添 · 自动剪辑 Pro 1.0.0 — 发布检查

检查日期：2026-09-28。

## 本版内容

- Skill 调用名：`chuanyuntian-auto-edit-pro`；显示名称：川云添 · 自动剪辑 Pro。
- 新增品牌横幅、图标、中文安装说明、可复制提示词与三份使用文档。
- 保留原 Skill 的视觉系统、渲染逻辑与 Gate A 批准 → B 自动进入 C → Gate D 批准流程。
- 发布包仅包含代码、说明、测试和合成 SRT；不包含私人视频、真人示例、联系二维码、缓存或本地工程。
- 原 MIT 许可和 Nana AI 版权已保留，派生说明见 [NOTICE](NOTICE)。
- Node.js 最低版本设为 24，CI 同步使用 Node 24 并安装中文字体。
- 锁文件中 `fast-uri` 从 3.1.5 更新至 3.1.8，`js-yaml` 从 4.3.1 更新至 4.3.2；其他运行库版本不变。
- 文本统一为 LF 并整理末尾空行，使 Git 提交文件与 [SHA256SUMS.txt](SHA256SUMS.txt) 一致。
- 修正一项测试中的 Windows 路径硬编码，使用 `node:path.join` 生成预期路径；不改变运行时输出逻辑。

## 本地实测

| 检查 | 实测结果 |
|---|---|
| 原安装基线 `npm test -- --reporter=dot` | 20 文件、153 项通过 |
| 隔离目录 `npm ci` | 成功，未复用原 node_modules |
| 新安装 `npm test -- --reporter=dot` | 20 文件、155 项通过 |
| 新安装 TypeScript 与 Remotion 构建 | 成功，找到 VideoPackaging composition |
| `npm run make:synthetic` | 生成 4 秒测试图形与音调素材 |
| `npm run example:synthetic` | Gate A 成功；没有运行后续审批阶段 |
| Skill frontmatter 验证 | 通过 |
| 公开候选文件扫描 | 通过 |
| `npm audit --omit=dev` | 0 项生产依赖漏洞 |
| 本地入口回滚测试 | 独立副本恢复原入口，品牌发布副本保持不变 |

构建测试使用已安装的 Chrome Headless Shell；全新机器首次构建可能需要下载浏览器。开发依赖完整审计仍有 2 项 moderate 提示，本版未进行强制跨大版本升级。

## 已知限制

- 此发行版是品牌和发布整理，不宣称新增自动抠像、手势跟踪、语音识别或基础剪辑能力。
- CLI 的 Gate C 仍要求八种不同结构；短片若无法产生这些结构，应在方案阶段指出冲突并约定项目级审核策略，不靠扩写台词凑数。
- 默认媒体流程可能重编码音频；保留原声内容不等于音频文件逐字节相同。
- 本次合成自测只证明 Gate A 可运行；没有把它包装成真人成片案例或完整 A–D 渲染验收。
- Linux 中文渲染需要可用中文字体。HyperFrames 可选适配器的动画脚本需要网络。
- 可选的手动测试脚本 `packages/remotion-renderer/test/make-stage-fixture.py` 沿用 Windows 字体位置，不属于默认测试或正常 Skill 运行入口；其他平台需按实际字体调整后使用。

GitHub 的提交记录与 CI 运行状态以仓库实际页面为准。
