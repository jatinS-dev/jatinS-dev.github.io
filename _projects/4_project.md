---
layout: project-jia
title: "Structure-Grounded Medical QA"
description: "RDF and SPARQL retrieval with claim-level verification for faithful medical question answering."
img: assets/img/9.jpg
importance: 2
category: Research
featured: true
portfolio_featured: true
year: 2026
metrics:
  - "ACL 2026 submission"
  - "Claim-level verification"
  - "RDF + SPARQL grounding"
stack:
  - Python
  - RDFLib
  - SPARQL
  - RAG
---

## Overview

Built a medical question-answering pipeline that retrieves structured evidence from RDF graphs and verifies generated claims against that evidence. I am second author on the associated ACL 2026 SURGeLLM workshop submission.

## System path

`question → entity resolution → SPARQL retrieval → evidence assembly → answer generation → claim verification`

## What I built

- Structured retrieval over medical RDF data using SPARQL.
- Deterministic conversion of query results into evidence objects with provenance.
- Claim-level checks that separate supported, unsupported, and conflicting statements.
- Evaluation plumbing for comparing answer faithfulness against retrieved evidence.

## Why structure matters

Text retrieval can return semantically related passages without making relationships explicit. RDF triples preserve entities and relations, allowing each generated claim to be checked against a concrete evidence path.

## Research status

Submitted to the ACL 2026 SURGeLLM Workshop as **“Structure-Grounded Medical QA: RDF Retrieval and Claim-Level Verification for Faithful Answering.”**
