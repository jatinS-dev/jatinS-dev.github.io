---
layout: project-jia
title: "Temporal Knowledge-Graph Memory"
description: "Graphiti and Neo4j memory for clinical LLM agents, evaluated with a six-stage verification pipeline."
img: assets/img/9.jpg
importance: 2
category: AI Systems
featured: true
portfolio_featured: true
year: 2025 - Present
metrics:
  - "1,682 audited facts"
  - "6-stage verification"
  - "Graphiti + Neo4j"
stack:
  - Python
  - Slurm
  - Apptainer
  - Neo4j
  - Graphiti
---

## Overview

Built a temporal knowledge-graph memory layer for clinical LLM agents using Graphiti and Neo4j. The system emphasizes persistent memory, time-aware retrieval, and evidence that can be traced back to the source record.

## Benchmarking

Evaluated memory behavior against **1,682 hand-audited atomic facts** using a six-stage verification pipeline.

| Verification stage | Question |
|---|---|
| Atomic-fact extraction | Is each claim independently testable? |
| Entity and time alignment | Does the fact refer to the correct patient state and period? |
| Graph retrieval | Can the relevant memory be recovered? |
| Evidence matching | Does retrieved evidence support the claim? |
| Conflict detection | Is newer or contradictory evidence present? |
| Final adjudication | Is the memory supported, stale, missing, or incorrect? |

## Infrastructure and provenance

- Operationalized experiments with Python, Slurm, and Apptainer.
- Used Neo4j and Graphiti for persistent graph memory and connectivity.
- Built deterministic evidence curation, temporal checks, and provenance tracking around hand-audited atomic facts.
- Contributed to a permission-aware React, TypeScript, and FastAPI application with retrieval, validation, structured logging, Docker, ECS, and CloudWatch.

The result is an evaluation environment where model outputs can be compared against the evidence, configuration, and temporal context that produced them.
