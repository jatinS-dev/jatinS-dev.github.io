---
layout: home
title: projects
permalink: /projects/
description: AI systems work spanning LLM inference, GPU profiling, clinical evaluation, and production ML.
nav: true
nav_order: 1
---

<main class="jia-copy archive-page">
  <header class="resume-nav">
    <a class="resume-brand" href="/"><span>↗</span> jatin salve</a>
    <nav aria-label="Project archive navigation">
      <a href="/#about">about</a>
      <a class="active" href="/projects/">work</a>
      <a href="/cv/">résumé</a>
    </nav>
  </header>

  <article class="archive-sheet">
    <header class="archive-intro">
      <p>work / selected systems</p>
      <h1>things i’ve built<br>and measured.</h1>
      <p>llm inference, production ml, multimodal research, and evaluation systems—with the constraints and trade-offs left visible.</p>
    </header>

    <section class="archive-list">
      {% assign all_projects = site.projects | where: 'portfolio_featured', true | sort: 'importance' %}
      {% for project in all_projects %}
        <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}">
          <span>{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
          <div><h2>{{ project.title | downcase }}</h2><p>{{ project.description }}</p></div>
          <div class="archive-meta"><span>{{ project.category }}</span><span>{{ project.year }}</span></div>
        </a>
      {% endfor %}
    </section>

    <footer class="resume-footer"><a href="/">← home</a><a href="mailto:jatin.salve@ufl.edu">let’s talk ↗</a></footer>
  </article>
</main>
