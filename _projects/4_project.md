---
layout: page
title: "Verified Medical NLP – RDF-Grounded Jamba RAG"
description: "Medical QA pipeline that grounds generated answers in RDF triples and checks claims against retrieved evidence."
img: assets/img/9.jpg
importance: 3
category: Research
featured: true
year: 2025 - Present
metrics:
  - "14% lower hallucination rate"
  - "Claim-level verification"
  - "Auditable RDF grounding"
stack:
  - RDFLib
  - SPARQL
  - RAG
  - Jamba
giscus_comments: true
---

## Overview

This project combines RDF knowledge graphs, retrieval-augmented generation, and the **Jamba-1.5 Mixture-of-Experts** architecture for medical question answering. The goal is simple: make every generated answer traceable to biomedical evidence.

I led design and implementation of the **evaluation and verification subsystem**, translating RDF query outputs into structured, human-readable summaries and evidence objects that drive fully auditable AI decisions.

## Key Features

| Component | Description |
|-----------|-------------|
| RDF-Grounded RAG | Retrieves factual triples (disease–treatment–drug, etc.) from Bio2RDF, UMLS, and Wikidata Medical before generation. |
| Jamba Integration | Leverages Jamba-1.5 MoE for efficient long-context reasoning that blends retrieved biomedical evidence with prompt context. |
| Hallucination Evaluation Module | Implements deterministic checkers for factual consistency, retrieval coverage, and hallucination rate (H). |
| RDF Result Summarizer | Converts `rdflib.query.Result` objects into natural summaries or structured DocSource payloads. |
| Zero-Hallucination Pipeline | Benchmarks RDF-grounded vs. vanilla LLM outputs on PubMedQA, MedQA (USMLE), and Med-HALT datasets. |

## Core Components I Built

### 1. `result_to_summary()`

- Handles all SPARQL query forms (SELECT, ASK, CONSTRUCT, DESCRIBE).
- Produces concise, human-readable narratives summarizing RDF answers.
- Automatically infers medical entities (disease, drug, gene, symptom) from triples.
- Fully deterministic — no downstream ML/LLM inference required.

**Sample output**

```
Found 3 result(s).
Variables: disease, treatment

Showing first 3 result(s):
  1. disease: Diabetes, treatment: Insulin
  2. disease: Hypertension, treatment: Atenolol
  3. disease: Influenza, treatment: Oseltamivir

Extracted Medical Entities:
  - Disease: Diabetes, Hypertension, Influenza
  - Drug: Atenolol, Insulin, Oseltamivir
```

### 2. `result_to_sources()`

- Transforms RDF query results into `DocSource` objects for provenance tracking.
- Supports SELECT, ASK, CONSTRUCT, and DESCRIBE outputs with schema-specific adapters.

**Example**

Input rows:

| uri | label | abstract |
|-----|-------|----------|
| http://bio2rdf.org/drugbank:DB001 | Aspirin | Used to treat pain and fever. |

Output:

```python
[
  DocSource(
      id="drugbank:DB001",
      title="Aspirin",
      content="Used to treat pain and fever.",
      source_type="SPARQL_SELECT"
  )
]
```

## Benchmarking

**Datasets**

- PubMedQA (labeled biomedical QA)
- MedQA (USMLE clinical reasoning)
- Med-HALT (hallucination stress test)

**Metrics**

| Metric | Purpose |
|--------|---------|
| Hallucination Rate (H) | Share of unsupported or contradictory statements |
| Factual Precision / Recall | Alignment of claims with RDF ground truth |
| ROUGE-L / F1 | Overlap with reference clinical answers |
| Retrieval Precision@k | Accuracy of top-k triple retrieval |
| Latency | Response time per query |

**Results**

| Model | RDF Grounding | Hallucination ↓ | F1 ↑ | Latency (s) ↓ |
|-------|---------------|-----------------|------|---------------|
| LLaMA-3-8B-Instruct | ✗ | 0.45 | 0.61 | 1.2 |
| RAG-Text | ✗ | 0.36 | 0.68 | 2.3 |
| RDF-RAG | ✓ | 0.28 | 0.75 | 2.9 |
| Jamba + RDF | ✓ | **0.22** | **0.79** | 3.1 |

→ **36–50% reduction in hallucination rate** while maintaining high factual accuracy.

## Stack

- **Languages**: Python, SPARQL, RDFLib
- **LLMs & Frameworks**: Jamba-1.5, LLaMA-3-8B, FAISS-powered RAG
- **Libraries**: `rdflib`, `datasets`, `jsonlines`, `pandas`, `matplotlib`
- **Datasets**: PubMedQA, MedQA, Med-HALT
- **Infrastructure**: UF HiPerGator HPC (CUDA 12.1, Apptainer containers)
