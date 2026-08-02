---
layout: home
title: home
permalink: /
subtitle: Machine learning engineer building retrieval, ranking, and evaluation systems.
---

<main class="jia-copy">
  <a class="jia-brand" href="/" aria-label="Jatin Salve home"><span class="seed-mark">✦</span> jatin salve</a>
  <nav class="jia-nav" aria-label="Primary navigation">
    <a href="#about">about</a>
    <a href="/projects/">work</a>
    <a href="/blog/">writing</a>
  </nav>

  <section class="cinema-hero" aria-label="Introduction">
    <video autoplay muted loop playsinline poster="{{ '/assets/img/1.jpg' | relative_url }}">
      <source src="{{ '/assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4' | relative_url }}" type="video/mp4">
    </video>
    <div class="cinema-shade"></div>
    <div class="scene-switcher" aria-label="Scene label">
      <span class="scene-active"><b>1</b><em>systems that survive the demo</em></span>
      <span><b>2</b><em>retrieval, ranking, evaluation</em></span>
      <span><b>3</b><em>gainesville, florida</em></span>
      <span><b>4</b><em>always measuring</em></span>
    </div>
  </section>

  <section class="copy-block opening-note" id="about">
    <p>august updates, 8/2/26, gainesville:</p>
    <p>hey, i’m jatin, and i build machine learning systems that have to keep working after the demo ends.</p>
    <p>
      if i could introduce myself through the limited medium of a website, i’d tell you that i spend a lot of
      time thinking about what happens between a promising model and a dependable product: the retrieval errors
      nobody notices, the latency hidden by averages, and the confidence score that looks more certain than it is.
      i like work where quality, speed, and trust all have to be measured together.
    </p>
    <p>
      right now, that means visual search, recommendation systems, multimodal retrieval, and responsible ai.
      before graduate school, i built ranking and personalization workflows at icici bank serving more than one
      million requests every day. now i research retrieval and grounded generation at the university of florida.
    </p>
    <p>things i like: clear evaluation, useful abstractions, long walks, and systems that explain their failures.</p>
    <p>things i don’t like: impressive demos with no baseline.</p>
  </section>

  <section class="identity-block">
    <div class="identity-card">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Jatin Salve">
      <h1>i’m jatin, an ml engineer and computer science graduate student from india, currently in florida.</h1>
    </div>
    <div class="identity-copy">
      <div class="mini-links">
        <a href="mailto:jatin.salve@ufl.edu" aria-label="Email">email</a>
        <a href="https://github.com/jatinS-dev">github</a>
        <a href="https://www.linkedin.com/in/jatin-salve">linkedin</a>
      </div>
      <p>
        i’m currently an m.s. computer science student on the machine learning track at the university of florida.
        my research lives around computer vision, multimodal ai, retrieval, and responsible evaluation.
      </p>
      <p>
        i’m currently building a vision-text retrieval system over <span>1m+ vectors</span>. reranking experiments
        improved recall@100 by <span>8–12%</span>, and gpu batching reduced p95 latency by <span>15–20%</span>.
      </p>
      <p>my acl 2024 work studied multimodal clinical summarization and factual grounding.</p>
      <details open id="past-work">
        <summary>previous stuff i did</summary>
        <ul>
          <li>built personalization systems serving 1m+ daily requests</li>
          <li>improved production click-through rate by 9%</li>
          <li>built dense retrieval over 500k+ documents</li>
          <li>trained sequence models over 10m+ data points</li>
          <li>published multimodal nlp research at acl 2024</li>
          <li>selected as a mitacs globalink research fellow</li>
        </ul>
      </details>
    </div>
  </section>

  <section class="ascii-moment" aria-label="Personal motto">
    <pre aria-hidden="true">        .     .
         \   /
      .---\ /---.
     /     Y     \
    /      |      \
          / \
         /   \
        /_____\</pre>
    <p>i aspire to build things that stay useful</p>
  </section>

  <section class="photo-story">
    <div>
      <p>
        i like projects where the benchmark and the real system disagree. that gap usually contains the most
        interesting engineering: data quality, batching, drift, failure analysis, and product decisions.
      </p>
      <img src="{{ '/assets/img/3.jpg' | relative_url }}" alt="Multimodal retrieval project visual" loading="lazy">
      <p>retrieval quality is not one number. i keep looking for better ways to make its failures visible.</p>
    </div>
    <img src="{{ '/assets/img/prof_pic_color.png' | relative_url }}" alt="Jatin Salve outdoors" loading="lazy">
  </section>

  <section class="lower-panels">
    <div class="thought-panel">
      <p>current thoughts</p>
      <div class="thought-scroll">
        <article><p>august 2nd, 2026</p><p>redesigning this place to feel more like a person and less like a résumé template.</p></article>
        <article><p>july 30th, 2026</p><p>evaluation is a product feature. if the team cannot see the failure mode, it cannot improve the model.</p></article>
        <article><p>july 24th, 2026</p><p>working through gpu batching trade-offs for multimodal retrieval.</p></article>
        <article><p>july 18th, 2026</p><p>reading about learned sparse retrieval again. dense versus sparse is still the wrong argument.</p></article>
        <article><p>july 11th, 2026</p><p>the best latency optimization is sometimes returning less.</p></article>
        <article><p>july 3rd, 2026</p><p>building claim-level checks for medical qa. provenance should be inspectable, not decorative.</p></article>
      </div>
    </div>

    <div class="question-panel">
      <div><span>questions</span><a href="mailto:jatin.salve@ufl.edu">send by email</a></div>
      <p>i usually respond the same day.</p>
      <form action="mailto:jatin.salve@ufl.edu" method="get">
        <input name="body" aria-label="Question" placeholder="ask me about ml systems, research, or work">
        <button type="submit">ask</button>
      </form>
      <p class="empty-question">no questions yet</p>
    </div>
  </section>
</main>
