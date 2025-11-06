---
layout: page
title: projects
permalink: /projects/
description: A snapshot of the applied AI systems I am building.
nav: true
nav_order: 3
---

## Verified Medical NLP — RDF-Grounded Jamba RAG

Building a fact-checked medical question answering pipeline that combines RDF knowledge graphs, retrieval-augmented generation, and the Jamba-1.5 Mixture-of-Experts model. Every answer is backed by structured biomedical evidence, cutting hallucinations without sacrificing coverage.

**What I built**
- Deterministic `result_to_summary()` and `result_to_sources()` utilities that transform SPARQL outputs into human-readable context and DocSource evidence objects.
- Hallucination evaluation module that scores factual consistency, retrieval coverage, and hallucination rate (H) across PubMedQA, MedQA (USMLE), and Med-HALT.
- Zero-hallucination benchmarking harness to compare RDF-grounded vs. vanilla LLM generations using ROUGE-L/F1, retrieval precision@k, and latency.

**Impact**
- 36–50% reduction in hallucination rate versus baseline LLaMA-3 and RAG-only systems.
- Consistent F1 gains (0.79 with Jamba + RDF) while keeping inference under 3.1 seconds per query.
- Fully auditable evidence trail for each response, enabling clinical review and compliance.

**Stack**
- Python, SPARQL, RDFLib, FAISS
- Jamba-1.5, LLaMA-3-8B, retrieval-augmented pipelines
- Datasets: PubMedQA, MedQA, Med-HALT
- UF HiPerGator HPC (CUDA 12.1, Apptainer containers)

---

## Gestural AI — Real-Time ASL Interpreter

Real-time American Sign Language interpreter that achieves 94 % accuracy on a 20k+ video dataset. Designed for accessibility scenarios where latency and reliability are critical.

**Highlights**
- Multimodal inference pipeline combining I3D for temporal motion, ResNet for spatial cues, and MobileNet for edge deployment.
- MediaPipe-powered pose tracking with low-latency preprocessing in OpenCV.
- Streamlit UI and Dockerized deployment for rapid demos on Linux servers.

**Impact**
- Enables live ASL-to-text interpretation for classrooms and telehealth.
- Modular architecture ready for additional sign languages and downstream speech synthesis.

**Stack**
- Python, TensorFlow, OpenCV, MediaPipe
- Streamlit front end, Docker deployment
- Real-time inference optimizations for GPU and CPU targets
