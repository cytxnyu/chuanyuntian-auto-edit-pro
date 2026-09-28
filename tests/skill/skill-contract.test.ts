import {existsSync, readFileSync} from 'node:fs';
import {describe, expect, it} from 'vitest';
import {SEMANTIC_STRUCTURES} from '../../packages/core/src/template-contracts';

const skill = readFileSync('SKILL.md', 'utf8').replace(/\r\n/g, '\n');
const readme = readFileSync('README.md', 'utf8');
const usage = readFileSync('docs/USAGE.md', 'utf8');

describe('public Skill contract', () => {
  it('contains every pressure-tested safety boundary', () => {
    for (const phrase of ['Gate A', 'burned-in', 'evidence', 'frame-driven', 'component gallery', 'line illustrations', 'Present the plan first', 'Do not continue until']) {
      expect(skill).toContain(phrase);
    }
  });

  it('uses the release Skill id and concise task-specific frontmatter', () => {
    expect(skill).toMatch(/^---\nname: chuanyuntian-auto-edit-pro\ndescription: /);
    const description = skill.match(/^description: (.+)$/m)?.[1] ?? '';
    expect(description.length).toBeGreaterThan(20);
    expect(description.length).toBeLessThan(250);
    expect(description).toContain('川云添');
    expect(description).toContain('口播');
    expect(description).toContain('SRT');
    expect(skill).toContain('# 川云添 · 自动剪辑 Pro');
    expect(skill).toContain('[NOTICE](NOTICE)');
  });

  it('teaches the original whole-screen visual language and source-preservation rules', () => {
    const normalized = skill.toLowerCase();
    for (const phrase of [
      'center-presenter',
      'whole screen is the stage',
      'keyword',
      'full-screen',
      '1.6–3.2 seconds',
      'semantic palettes',
      'programmatic line illustrations',
      'Do not continue until the user approves',
      'one continuous source video/audio track',
    ]) expect(normalized).toContain(phrase.toLowerCase());
  });

  it('uses bounded local render concurrency for 1080p talking-head footage', () => {
    const packagingScript = readFileSync('scripts/package-video.ts', 'utf8');
    expect(packagingScript).toContain("const renderConcurrency = typeof args.concurrency === 'string' ? args.concurrency : '2'");
    expect(packagingScript).toContain("'--concurrency', renderConcurrency");
  });

  it('defines blocking visual QA for content density and real review frames', () => {
    for (const phrase of [
      'translucent overlays',
      'content-fit',
      'partial or complete face/body coverage is valid',
      '72%',
      'manual frame review',
      'blocks Gate D',
    ]) expect(skill.toLowerCase()).toContain(phrase.toLowerCase());
    expect(skill).toContain('references/visual-quality-gates.md');
  });

  it('preserves all ten structures and A approval, automatic B-to-C, D approval', () => {
    for (const name of SEMANTIC_STRUCTURES) expect(skill).toContain(name);
    for (const flag of ['--approve-gate-a', '--approve-gate-b', '--approve-gate-c', '--approve-gate-d', '--gate-b-only']) {
      expect(skill).toContain(flag);
    }
    expect(skill).toContain('After explicit Gate A approval');
    expect(skill).toContain('automatically continue to Gate C');
    expect(skill).toContain('do not ask for another approval between B and C');
    expect(skill).toContain('After explicit Gate D approval');
    expect(skill).toContain('do not render the final video');
    expect(skill).toContain('source frames');
    expect(skill).toContain('transparent foreground person layer');
    expect(skill).toContain('Remotion by default');
    expect(skill).toContain('HyperFrames adapter');
  });

  it('teaches both input/output workflows and the missing-SRT confirmation step', () => {
    for (const phrase of [
      '前期素材准备',
      '不处理重读、漏读和气口',
      '视频 + SRT',
      '只提供 SRT',
      '透明 MOV',
      '直接合成 MP4',
      '--output-mode composite',
      '默认推荐',
      '等用户确认后再转写',
      '不内置自动抠像或自动手部跟踪',
    ]) expect(readme).toContain(phrase);
    expect(usage).toContain('--output-mode overlay');
    expect(usage).toContain('SRT-only 模式');
    expect(usage).toContain('八种不同语义结构');
  });

  it('explains subtitle modes without promising speech recognition', () => {
    for (const phrase of [
      '原视频已经带有字幕（字幕已固定在画面中）',
      '原视频没有字幕，希望 Skill 自动生成字幕',
      '原视频没有字幕，并且只需要动效、不需要字幕',
      '从已校对 SRT 生成',
    ]) expect(readme).toContain(phrase);
    expect(usage).toContain('不是识别语音');
  });

  it('ships the installation, attribution, and troubleshooting contract', () => {
    for (const file of ['NOTICE', 'LICENSE', 'docs/USAGE.md', 'docs/EXAMPLES.md', 'docs/TROUBLESHOOTING.md']) {
      expect(existsSync(file), file).toBe(true);
    }
    expect(readme).toContain('https://github.com/cytxnyu/chuanyuntian-auto-edit-pro');
    expect(readme).toContain('Nana AI');
    expect(readme).toContain('npm ci');
    expect(readme).toContain('$chuanyuntian-auto-edit-pro');
    expect(readme).toContain('4 秒');
  });
});
