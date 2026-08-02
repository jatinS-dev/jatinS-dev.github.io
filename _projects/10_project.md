---
layout: project-jia
title: "Verifiable Preference Optimization for Reasoning LLMs"
description: "A verified reasoning-data pipeline and LoRA DPO study with careful validation of truncation and answer parsing."
img: assets/img/12.jpg
importance: 1
category: AI Systems
featured: true
portfolio_featured: true
year: 2026 - Present
metrics:
  - "1,800 reasoning traces"
  - "330 preference pairs"
  - "61–63 generated tokens/s"
stack:
  - Python
  - PyTorch
  - Hugging Face TRL
  - LoRA
  - Slurm
---

## Overview

Built an experiment pipeline for verifiable preference optimization on mathematical reasoning tasks. The work connects dataset construction, deterministic answer checking, LoRA-based DPO, and inference benchmarking on NVIDIA L4 GPUs.

## Dataset and training

| Stage | Output | Validation |
|---|---:|---|
| Reasoning generation | 1,800 traces | Completion and truncation checks |
| Answer verification | Verified final answers | Deterministic extraction |
| Preference construction | 330 pairs | Chosen/rejected consistency |
| LoRA DPO | Fine-tuned adapter | Held-out generation benchmark |

- Generated **1,800 reasoning traces** and verified final answers against GSM8K labels.
- Constructed **330 chosen/rejected preference pairs** for preference training.
- Fine-tuned with LoRA and Hugging Face TRL using DPO.
- Established an inference baseline of **61–63 generated tokens per second** on an NVIDIA L4.

## Evaluation lessons

Initial results exposed truncation and answer-parsing failures that could silently create noisy preference labels. I redesigned validation around explicit completion checks and deterministic answer extraction before comparing training outcomes.

This project treats preference optimization as a systems and measurement problem: reliable conclusions require trustworthy labels, reproducible generation, and performance-aware evaluation.

## Failure analysis

The first evaluation pass looked plausible but mixed truncated completions with answer-parsing failures. Separating those cases prevented invalid outputs from becoming preference labels and made subsequent DPO comparisons defensible.
