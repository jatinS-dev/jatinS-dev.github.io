---
layout: home
permalink: /cv/
title: résumé
nav: true
nav_order: 5
cv_pdf: jatin_salve_resume.pdf
description: Resume and selected experience in LLM inference, GPU performance, distributed experimentation, and production ML systems.
---

<main class="jia-copy resume-page">
  <header class="resume-nav">
    <a class="resume-brand" href="/"><span>↗</span> jatin salve</a>
    <nav aria-label="Résumé navigation">
      <a href="/#about">about</a>
      <a href="/#work">work</a>
      <a class="active" href="/cv/">résumé</a>
    </nav>
  </header>

  <article class="resume-sheet">
    <header class="resume-intro">
      <p>résumé / 2026</p>
      <h1>jatin avinash salve</h1>
      <p class="resume-label">ai systems performance engineer · llm inference · gpu profiling & optimization</p>
      <div class="resume-links">
        <a href="mailto:jatin.salve@ufl.edu">email</a>
        <a href="https://github.com/jatinS-dev">github</a>
        <a href="https://www.linkedin.com/in/jatin-salve-b1001b1a2/">linkedin</a>
        {% if page.cv_pdf %}<a href="{{ '/assets/pdf/' | append: page.cv_pdf | relative_url }}">pdf ↓</a>{% endif %}
      </div>
      <p class="resume-summary">{{ site.data.resume.basics.summary }}</p>
      <div class="proof-strip resume-proof">
        <span><strong>170/170</strong> GRE quantitative</span>
        <span><strong>99.96%</strong> MH-CET percentile</span>
        <span><strong>3.89/4.00</strong> M.S. GPA</span>
        <span><strong>national gold</strong> kickboxing + Thang-Ta</span>
      </div>
    </header>

    <section class="resume-section">
      <h2>experience</h2>
      {% for role in site.data.resume.work %}
        <div class="resume-entry">
          <div><span>{{ role.startDate | slice: 0, 4 }}</span><span>{% if role.endDate == 'Present' %}now{% else %}{{ role.endDate | slice: 0, 4 }}{% endif %}</span></div>
          <div>
            <h3>{{ role.position }}</h3>
            <p class="resume-place">{{ role.name }}</p>
            <p>{{ role.summary }}</p>
            <ul>{% for item in role.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
          </div>
        </div>
      {% endfor %}
    </section>

    <section class="resume-section">
      <h2>selected systems work</h2>
      {% for project in site.data.resume.projects %}
        <div class="resume-entry">
          <div><span>{{ project.startDate | slice: 0, 4 }}</span><span>{% if project.endDate == 'Present' %}now{% else %}{{ project.endDate | slice: 0, 4 }}{% endif %}</span></div>
          <div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.summary }}</p>
            <ul>{% for item in project.highlights %}<li>{{ item }}</li>{% endfor %}</ul>
          </div>
        </div>
      {% endfor %}
    </section>

    <section class="resume-section resume-two-col">
      <div>
        <h2>education</h2>
        {% for item in site.data.resume.education %}
          <h3>{{ item.studyType }} in {{ item.area }}</h3>
          <p>{{ item.institution }} · {{ item.score }}</p>
          <p>{{ item.startDate | slice: 0, 4 }}–{{ item.endDate | slice: 0, 4 }}</p>
        {% endfor %}
      </div>
      <div>
        <h2>publications</h2>
        {% for item in site.data.resume.publications %}
          <h3>{{ item.name }}</h3>
          <p>{{ item.publisher }}</p>
        {% endfor %}
      </div>
    </section>

    <section class="resume-section">
      <h2>technical skills</h2>
      <div class="resume-skills">
        {% for group in site.data.resume.skills %}
          <div><h3>{{ group.name }}</h3><p>{{ group.keywords | join: ', ' }}</p></div>
        {% endfor %}
      </div>
    </section>

    <footer class="resume-footer">
      <a href="/">← back home</a>
      <a href="mailto:jatin.salve@ufl.edu">let’s talk ↗</a>
    </footer>
  </article>
</main>
