---
layout: project-jia
title: "Latency-Aware Speculative Decoding"
description: "A correct speculative decoding engine, benchmark harness, and GPU profiling study for Qwen language models."
img: assets/img/3.jpg
importance: 0
category: AI Systems
featured: true
portfolio_featured: true
year: 2026 - Present
metrics:
  - "64 → 22 target passes"
  - "2.91 tokens / target pass"
  - "0.79x–1.09x vs. greedy"
stack:
  - Python
  - C++
  - PyTorch
  - CUDA
  - Slurm
---

## Overview

Built a correctness-first speculative decoding engine for Qwen2.5 and Qwen3 models, then profiled the full pipeline to understand when fewer target-model calls translate into real wall-clock gains.

## What I built

- Implemented drafting, target verification, rejection correction, bonus-token sampling, and KV caching.
- Verified exact equivalence with greedy decoding under deterministic settings.
- Built a repeatable benchmark harness for latency, throughput, token acceptance, target-pass efficiency, and GPU time.
- Ran experiments on NVIDIA L4 GPUs through Slurm.

## Performance findings

| Measurement | Baseline | Result |
|---|---:|---:|
| Target-model passes | 64 | 22 |
| Tokens per target pass | 1.00 | 2.91 |
| Cached greedy throughput | 92.96 tok/s | 102.06 tok/s |
| End-to-end speed vs. greedy | 1.00x | 0.79x–1.09x |

- Reduced **64 target passes to 22 verification passes**, reaching **2.91 generated tokens per target pass**.
- Measured end-to-end performance from **0.79x to 1.09x** relative to cached greedy decoding.
- CUDA profiling showed that the draft model consumed **62% of GPU time**, identifying draft cost as the primary bottleneck.
- Improved cached greedy throughput from **92.96 to 102.06 tokens/second**.

## Distillation experiments

Compared Forward KL, Reverse KL, Jensen–Shannon, and cross-entropy objectives for draft-model distillation. The best experiments improved token acceptance by **5% on GSM8K** and **4% on CNN/DailyMail**.

The central lesson was systems-oriented: reducing expensive target passes is necessary, but total speedup depends on draft cost, cache behavior, kernel overhead, and workload shape.

## System path

`prompt → draft tokens → target verification → accept/reject → correction → KV-cache update`

CUDA profiling showed that draft generation consumed **62% of total GPU time**. That result redirected optimization work from target-pass count alone toward draft cost and cache efficiency.
