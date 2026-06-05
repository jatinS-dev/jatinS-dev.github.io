---
layout: page
title: "Visual & Multimodal Retrieval System"
description: "Vision-text retrieval pipeline with FAISS indexing, learned reranking, Ray Serve batching, and failure-mode evaluation."
img: assets/img/3.jpg
importance: 0
category: AI/ML
featured: true
year: 2025 - Present
metrics:
  - "1M+ vectors indexed"
  - "8-12% Recall@100 gain"
  - "15-20% lower p95 latency"
stack:
  - PyTorch
  - FAISS
  - Ray Serve
  - Hugging Face
---

## Overview

Built a multimodal retrieval system that combines visual and textual encoders with dense FAISS indexing over **1M+ vectors**. The system is designed for visual search workflows where relevance, latency, and grounded failure analysis all matter.

## Key Work

- Designed a vision-text embedding pipeline with transformer-based visual encoders, dense retrieval, and learned reranking.
- Improved retrieval quality by **8-12% Recall@100** through encoder and reranking experiments.
- Reduced p95 latency by **15-20%** with GPU-optimized Ray Serve batching.
- Integrated claim-level faithfulness checks and responsible AI evaluation harnesses to compare quality, latency, and failure modes across model variants.

## Stack

- Python, PyTorch, Hugging Face Transformers
- FAISS / ANN indexing, multimodal embeddings, ranking and reranking
- Ray Serve, GPU batching, evaluation pipelines

## Impact

The project connects core visual search techniques with production-facing constraints: reliable retrieval, measurable ranking quality, fast serving, and responsible evaluation.
