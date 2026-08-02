---
layout: home
title: home
permalink: /
subtitle: Machine learning engineer building retrieval, ranking, and evaluation systems.
---

<main class="minimal-home">
  <header class="minimal-hero">
    <a class="minimal-brand" href="/">✦ jatin salve</a>
    <nav class="minimal-nav" aria-label="Primary navigation">
      <a href="#about">about</a>
      <a href="#work">work</a>
      <a href="/cv/">résumé</a>
    </nav>

    <div class="hero-copy">
      <p>machine learning engineer · gainesville, florida</p>
      <h1>i build ml systems that work after the demo ends.</h1>
      <a href="#about" class="hero-cta">meet jatin <span>↓</span></a>
    </div>
  </header>

  <section class="minimal-about" id="about">
    <div class="about-portrait">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Jatin Salve">
      <p>jatin salve<br>ml engineer + researcher</p>
    </div>
    <div class="about-copy">
      <p class="section-kicker">01 / about</p>
      <h2>retrieval quality, latency, and trust belong in the same conversation.</h2>
      <p>
        I’m an M.S. computer science student at the University of Florida. My work spans visual search,
        recommendation systems, multimodal retrieval, and responsible AI evaluation.
      </p>
      <p>
        Before graduate school, I built personalization and ranking systems at ICICI Bank serving more
        than one million daily requests. I now research systems that make model quality and failure modes measurable.
      </p>
      <div class="about-links">
        <a href="mailto:jatin.salve@ufl.edu">email ↗</a>
        <a href="https://github.com/jatinS-dev">github ↗</a>
        <a href="https://www.linkedin.com/in/jatin-salve">linkedin ↗</a>
      </div>
    </div>
  </section>

  <section class="minimal-work" id="work">
    <div class="work-heading">
      <p class="section-kicker">02 / selected work</p>
      <h2>systems i’ve built and measured.</h2>
    </div>

    <a class="minimal-project" href="/projects/7_project/">
      <span class="project-index">01</span>
      <div>
        <h3>visual + multimodal retrieval</h3>
        <p>vision-text search over 1m+ vectors with faiss, learned reranking, and ray serve.</p>
      </div>
      <p class="project-metric">+8–12% recall@100<br>−15–20% p95 latency</p>
      <span class="project-arrow">↗</span>
    </a>

    <a class="minimal-project" href="/projects/6_project/">
      <span class="project-index">02</span>
      <div>
        <h3>personalization at icici bank</h3>
        <p>production ranking workflows serving more than one million requests each day.</p>
      </div>
      <p class="project-metric">+9% ctr<br>+12% relevance</p>
      <span class="project-arrow">↗</span>
    </a>

    <a class="minimal-project" href="/projects/2_project/">
      <span class="project-index">03</span>
      <div>
        <h3>multimodal clinical summarization</h3>
        <p>vision cross-attention and factual evaluation for clinical documents.</p>
      </div>
      <p class="project-metric">acl 2024<br>0.81 factual recall</p>
      <span class="project-arrow">↗</span>
    </a>

    <a class="all-work-link" href="/projects/">view all projects ↗</a>
  </section>

  <footer class="minimal-contact">
    <p class="section-kicker">03 / contact</p>
    <h2>working on search, ranking, or responsible ai?</h2>
    <a class="contact-cta" href="mailto:jatin.salve@ufl.edu">let’s talk <span>↗</span></a>
    <p class="footer-note">jatin salve · gainesville, florida · 2026</p>
  </footer>
</main>
