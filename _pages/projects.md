---
layout: page
title: projects
permalink: /projects/
description: Applied ML systems across visual search, responsible AI, personalization, and multimodal reasoning.
nav: true
nav_order: 3
---

## Visual & Multimodal Retrieval System with Responsible-AI Evaluation

Multimodal retrieval system that combines vision and text encoders with dense FAISS indexing over **1M+ vectors**. The system is designed around retrieval quality, serving latency, and model accountability rather than accuracy alone.

**What I built**
- Vision-text embedding pipeline with transformer-based visual encoders, dense retrieval, and learned reranking.
- GPU-optimized Ray Serve batching that reduced p95 latency by **15-20%**.
- Responsible AI evaluation harnesses for claim-level faithfulness, retrieval failure modes, and latency/quality trade-offs.

**Impact**
- **8-12% Recall@100** gains across retrieval variants.
- Clearer failure analysis for multimodal ranking and grounding behavior.

**Stack**
- Python, PyTorch, FAISS, Hugging Face, Ray Serve

---

## User Behavior Segmentation & Predictive Profiling Pipeline

User understanding pipeline for personalization and recommender systems. The project models behavioral patterns with supervised and unsupervised ML while tracking drift, latency, and deployment constraints.

**What I built**
- Temporal feature engineering for behavioral event streams.
- Clustering, anomaly detection, sequence classification, and predictive profiling models.
- Benchmarks comparing XGBoost, transformer, and LSTM architectures across accuracy and serving constraints.

**Impact**
- Production-oriented profiling workflow applicable to ranking, recommendations, and user understanding systems.
- Drift-detection harnesses to catch changing behavioral distributions before model quality degrades.

**Stack**
- Python, scikit-learn, PyTorch, XGBoost, Hugging Face

---

## Verified Medical NLP - RDF-Grounded Jamba RAG

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

## ICICI Bank Personalization & Ranking Platform

Production ML platform for personalization, recommendation, and ranking workflows serving **1M+ daily requests**.

**What I built**
- Transformer-based ranking and recommendation workflows on GPU infrastructure.
- User segmentation models using supervised learning, sequence modeling, clustering, and anomaly detection.
- End-to-end Python training, serving, and experimentation workflows with FastAPI, Docker, AWS ECS, and A/B testing.

**Impact**
- **9% CTR lift** and **12% recommendation relevance improvement** over production baselines.
- Faster experimentation loop for model prototyping, evaluation, and deployment.

**Stack**
- Python, FastAPI, Docker, AWS ECS, GPU inference, A/B testing

---

## Gestural AI - Real-Time ASL Interpreter

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
