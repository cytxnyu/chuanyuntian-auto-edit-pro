# Four cumulative gates

## Gate A — source and plan

No approval flags. Write `BRIEF.md`, `SOURCE_PROBE.json`, `STORYBOARD.md`, `storyboard.json`, and `input-manifest.json`. Record hashes, media properties, every SRT cue, caption mode, semantic structures, placement, evidence status, whole-stage scale/opacity/depth, observed gesture frames and subtitle handoffs, and risks. Do not build review visuals or render.

Show the plan to the user and stop. Approval must refer to this exact job.

## Gate B — composition inputs

Requires `--approve-gate-a --approve-gate-b`, which record approval of this job's Gate A plan and authorization to execute it, not two human checkpoints. Prepare the browser-compatible continuous source, props, and renderer project. By default, continue directly to Gate C once inputs are ready. Do not request a new approval at the B-to-C boundary. Add `--gate-b-only` only when the user explicitly requests input preparation alone. No final video.

## Gate C — review evidence

Runs automatically with `--approve-gate-a --approve-gate-b`; a separate `--approve-gate-c` is unnecessary (accepted for backward compatibility). Generate eight semantically distinct stills and a contact sheet from the real composition. A video with fewer than eight distinct structures fails Gate C. Review hierarchy, intentional person occlusion, gesture/matte alignment, subtitle/keyword continuity, evidence legibility, doodle meaning, and structural difference. Present the review evidence and stop before final export. No final MP4.

## Gate D — final export

Requires explicit final approval after Gate C review, represented by `--approve-gate-a --approve-gate-b --approve-gate-d --render`. Completing Gate B or Gate C never authorizes Gate D. The legacy C flag is optional. Render the final artifact, probe it, decode the entire file, detect black segments, extract eight representative frames, build a contact sheet, and write `RENDER_MANIFEST.json` with hashes and media facts.

Never describe an unrendered project, component gallery, or contact sheet as a delivered video.
