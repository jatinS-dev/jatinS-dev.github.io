---
layout: page
title: "EDI-Summ: Multimodal Clinical Summarization"
description: "State-of-the-art multimodal summarization architecture for clinical documents"
img: assets/img/11.jpg
importance: 4
category: Research
featured: true
year: 2024
metrics:
  - "ACL 2024 long paper"
  - "0.81 factual recall"
  - "Vision cross-attention"
stack:
  - PyTorch
  - NLP
  - Multimodal AI
  - Evaluation
giscus_comments: true
related_publications: true
---

## Overview

Developed **EDI-Summ**, a groundbreaking multimodal summarization architecture that combines contextual and cross-attention mechanisms for clinical document summarization. This research achieved state-of-the-art performance, outperforming GPT-3.5 and GPT-4V on clinical summarization tasks.

## Research Impact

- **0.81 factual recall** and **3.51 clinical score** - exceeding current benchmarks
- **Outperformed GPT-3.5 & GPT-4V** on clinical summarization tasks
- **Published at ACL 2024** - premier venue for computational linguistics
- **Real-world applications** in healthcare documentation and medical decision support

## Technical Architecture

The EDI-Summ system integrates multiple advanced components:

### Multimodal Fusion
- **Contextual Attention**: Captures temporal dependencies in clinical dialogues
- **Cross-Attention**: Enables interaction between visual and textual modalities
- **BART Pipeline Enhancement**: Improved with multimodal fusion capabilities

### Performance Optimization
- **GPU-based Training**: Optimized for Linux cluster environments
- **Distributed Processing**: Scalable architecture for large-scale clinical datasets
- **Real-time Inference**: Efficient deployment for clinical workflows

## Key Innovations

1. **Multimodal Integration**: First system to effectively combine visual and textual clinical information
2. **Clinical-Specific Metrics**: Developed evaluation metrics tailored for medical accuracy
3. **Scalable Architecture**: Designed for production deployment in healthcare systems

## Technologies & Tools

- **Python** for core implementation
- **PyTorch** for deep learning framework
- **NLP Libraries** for text processing and analysis
- **Linux Clusters** for distributed training and experimentation
- **Clinical Datasets** including MeSum for evaluation

## Research Environment

Conducted at the **AI-ML-NLP Lab, IIT Patna** in collaboration with leading researchers in clinical NLP. The work involved extensive experimentation in Linux-based distributed research environments, ensuring reproducibility and scalability.

## Future Directions

- Integration with Electronic Health Records (EHR) systems
- Real-time clinical decision support applications
- Extension to other medical domains and languages
- Development of clinical-specific evaluation benchmarks

## Publication

This work was published at **ACL 2024** under the title "From Sights to Insights: Towards Summarization of Multimodal Clinical Documents" and represents a significant advancement in the field of clinical NLP and multimodal learning.
