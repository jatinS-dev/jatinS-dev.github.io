---
layout: project-jia
title: "EDI-Summ: Multimodal Clinical Summarization"
description: "Image-guided BART with decoder cross-attention for multimodal clinical document summarization."
img: assets/img/11.jpg
importance: 4
category: Research
featured: true
portfolio_featured: true
year: 2024
metrics:
  - "ACL 2024 long paper"
  - "3 clinical benchmarks"
  - "Beat GPT-4V"
stack:
  - PyTorch
  - BART
  - Multimodal AI
  - Evaluation
links:
  - label: ACL Anthology
    url: https://aclanthology.org/2024.acl-long.708/
  - label: Paper PDF
    url: https://aclanthology.org/2024.acl-long.708.pdf
---

## Overview

Co-authored **EDI-Summ**, an image-guided encoder-decoder model for multimodal clinical document summarization. The work was published as a long paper at ACL 2024.

## My contribution

- Implemented image cross-attention in BART’s decoder.
- Profiled ResNet, VGG, and ViT image encoders and multimodal fusion choices.
- Ran ablations and failure analysis across three clinical benchmarks.
- Contributed to evaluation using ROUGE, BLEU, METEOR, statistical analysis, and expert review.

## Architecture

`clinical text → modality-aware encoder → BART decoder + image cross-attention → grounded summary`

## Result

EDI-Summ outperformed BART, GPT-4V, and multimodal baselines across the three evaluated benchmarks. The important result was not only higher aggregate scores, but evidence that decoder-side image grounding contributed useful clinical information.

## Publication

**From Sights to Insights: Towards Summarization of Multimodal Clinical Documents**

Proceedings of ACL 2024, Volume 1: Long Papers, pages 13117–13129.
