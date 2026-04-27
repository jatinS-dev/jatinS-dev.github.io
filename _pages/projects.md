---
layout: page
title: projects
permalink: /projects/
description: Applied ML systems across visual search, responsible AI, personalization, and multimodal reasoning.
nav: true
nav_order: 1
---

<section class="section-intro">
  <p class="eyebrow">Selected systems</p>
  <h2>Projects that connect model quality with real deployment constraints.</h2>
  <p>
    My strongest work sits at the intersection of retrieval, ranking, multimodal modeling,
    responsible AI evaluation, and production ML infrastructure. These projects emphasize
    measurable impact: relevance, latency, faithfulness, robustness, and user-facing outcomes.
  </p>
</section>

<div class="project-grid">
  {% assign featured_projects = site.projects | where: 'featured', true | sort: 'importance' %}
  {% for project in featured_projects %}
    <article class="project-card">
      <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}">
        {% if project.img %}
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }} preview">
        {% endif %}
        <div class="project-card-body">
          <div class="project-card-meta">
            <span>{{ project.category }}</span>
            {% if project.year %}
              <span>{{ project.year }}</span>
            {% endif %}
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          {% if project.metrics %}
            <ul class="project-metrics">
              {% for metric in project.metrics %}
                <li>{{ metric }}</li>
              {% endfor %}
            </ul>
          {% endif %}
          {% if project.stack %}
            <div class="tag-list">
              {% for tag in project.stack %}
                <span>{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </a>
    </article>
  {% endfor %}
</div>

<section class="section-intro compact">
  <h2>Earlier research and engineering</h2>
  <p>
    I also keep older work on clinical summarization, accessibility, climate decision support,
    and open-source software because it shaped how I think about rigorous evaluation and practical systems.
  </p>
</section>

<div class="project-list">
  {% assign other_projects = site.projects | sort: 'importance' %}
  {% for project in other_projects %}
    {% unless project.featured == true %}
      <a class="project-row" href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}">
        <span>{{ project.title }}</span>
        <small>{{ project.category }}</small>
      </a>
    {% endunless %}
  {% endfor %}
</div>
