---
layout: page
title: projects
permalink: /projects/
description: Selected ML systems and research projects, with emphasis on retrieval quality, ranking, grounding, and deployment trade-offs.
nav: true
nav_order: 1
---

<section class="section-intro">
  <p class="eyebrow">Selected work</p>
  <h2>ML projects with the messy parts left in: data, latency, evaluation, and deployment.</h2>
  <p>
    These are the projects I would talk through in an interview. Each one has a concrete
    technical problem, a measurable result, and a set of trade-offs that shaped the design.
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
  <h2>Earlier work</h2>
  <p>
    Older projects stay here when they show a useful research thread, system constraint, or implementation habit.
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
