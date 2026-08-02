---
layout: home
title: home
permalink: /
subtitle: AI systems performance engineer focused on LLM inference, GPU profiling, and production ML.
---

<main class="jia-copy">
  <section class="cinema-hero" aria-label="Introduction">
    <video autoplay muted loop playsinline preload="auto" aria-hidden="true">
      <source src="{{ '/assets/video/hero-open-field.mp4' | relative_url }}" type="video/mp4">
    </video>
    <div class="cinema-shade" aria-hidden="true"></div>

    <a class="jia-brand" href="#about"><span class="seed-mark">↗</span> jatin salve</a>
    <nav class="jia-nav" aria-label="Primary navigation">
      <a href="#about">about</a>
      <a href="#work">work</a>
      <a href="/cv/">résumé</a>
    </nav>

  </section>

  <section class="opening-note copy-block" id="about">
    <p class="update-stamp">august updates, 8/2/26, gainesville:</p>
    <p>hey, i’m jatin, and i build ai systems to understand what actually makes them fast.</p>
    <p>
      i’m studying computer science at the university of florida. most days, i’m somewhere between
      implementing decoding algorithms, staring at cuda timelines, and asking whether fewer model calls
      really translate into lower wall-clock latency.
    </p>
    <p>
      my work sits at the intersection of llm inference, gpu performance, and reliable evaluation.
      i care about exactness first: correct sampling, reproducible runs, clean evidence, and measurements
      that survive beyond a good-looking benchmark.
    </p>
    <p>things i like: profilers, careful ablations, long walks, and systems that explain themselves.<br>
    things i don’t like: benchmark claims without bottleneck analysis.</p>
  </section>

  <section class="identity-block">
    <div class="identity-card">
      <img src="{{ '/assets/img/jatin-salve-portrait.jpeg' | relative_url }}" alt="Jatin Salve in a black suit">
      <h1>i’m jatin, an ai systems performance engineer based in gainesville, florida.</h1>
    </div>
    <div class="identity-copy">
      <div class="mini-links">
        <a href="mailto:jatin.salve@ufl.edu">email</a>
        <a href="https://github.com/jatinS-dev">github</a>
        <a href="https://www.linkedin.com/in/jatin-salve-b1001b1a2/">linkedin</a>
      </div>
      <p>
        i’m currently building reproducible clinical llm evaluation infrastructure at the university of
        florida college of medicine using slurm, apptainer, python, neo4j, and graphiti.
      </p>
      <p>
        i’m also studying latency-aware speculative decoding: a correctness-first engine with kv caching,
        rejection correction, draft-model distillation, and gpu-level profiling on nvidia l4s.
      </p>
      <p class="achievement-title">previous stuff i did</p>
      <ul class="achievement-list">
        <li><strong>evaluated agent memory against 1,682 facts</strong><span>built a six-stage verification pipeline for temporal clinical knowledge-graph memory.</span></li>
        <li><strong>published an acl 2024 long paper</strong><span>built and evaluated multimodal fusion for clinical document summarization.</span></li>
        <li><strong>served 1m+ daily ml inferences</strong><span>built production systems at icici bank and improved p95 serving latency by 5%.</span></li>
        <li><strong>increased click-through rate by 9%</strong><span>developed feature-store ranking and propensity workflows for banking products.</span></li>
        <li><strong>cut target-model passes from 64 to 22</strong><span>implemented a correctness-first speculative decoding engine reaching 2.91 tokens per target pass.</span></li>
        <li><strong>shipped into joomla 4 core</strong><span>built the guided tour feature for a cms used by more than 2m sites, then returned as a mentor.</span></li>
        <li><strong>won two national-level builds</strong><span>columbia × aws bedrock hackathon winner and smart india hackathon winner.</span></li>
      </ul>
      <div class="proof-strip">
        <span><strong>170/170</strong> gre quantitative</span>
        <span><strong>99.96%</strong> mh-cet percentile</span>
        <span><strong>3.89/4.00</strong> m.s. gpa</span>
        <span><strong>national gold</strong> kickboxing + thang-ta</span>
      </div>
    </div>
  </section>

  <section class="lower-panels" id="work">
    <div class="work-copy">
      <h2>selected work</h2>
      <a class="work-row" href="/projects/9_project/">
        <span>01</span><strong>latency-aware speculative decoding</strong><em>64 → 22 target passes</em>
      </a>
      <a class="work-row" href="/projects/11_project/">
        <span>02</span><strong>temporal knowledge-graph memory</strong><em>1,682 audited facts</em>
      </a>
      <a class="work-row" href="/projects/4_project/">
        <span>03</span><strong>structure-grounded medical qa</strong><em>acl 2026 submission</em>
      </a>
      <a class="work-row" href="/projects/12_project/">
        <span>04</span><strong>joomla 4 guided tour</strong><em>merged into core · 2m+ sites</em>
      </a>
    </div>

    <div class="question-panel" id="contact">
      <div><span>say hello</span><a href="/cv/">résumé</a></div>
      <p>i usually respond the same day.</p>
      <div class="contact-actions">
        <a href="mailto:jatin.salve@ufl.edu">jatin.salve@ufl.edu ↗</a>
        <button type="button" data-copy-email="jatin.salve@ufl.edu">copy email</button>
      </div>
    </div>
  </section>
</main>
