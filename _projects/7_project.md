---
layout: page
title: "Visual & Multimodal Retrieval System"
description: "Vision-text retrieval with FAISS, learned reranking, Ray Serve latency optimization, and responsible AI evaluation"
importance: 0
category: AI/ML
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
