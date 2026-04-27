---
layout: default
permalink: /blog/
title: writing
nav: true
nav_order: 4
---

<section class="medium-blog container py-4">
  <header class="mb-4">
    <h1 class="text-capitalize">{{ page.title }}</h1>
    <p>
      Longer notes and essays live on
      <a href="https://aizen-ai.medium.com/" target="_blank" rel="noopener">Medium</a>.
      I write about applied ML, multimodal systems, research workflows, and the engineering details that make AI systems useful outside notebooks.
    </p>
  </header>

  <div id="medium-widget"></div>

  <noscript>
    JavaScript is required to load the Medium feed. You can read my work directly at
    <a href="https://aizen-ai.medium.com/">aizen-ai.medium.com</a>.
  </noscript>
</section>

<script src="https://medium-widget.pixelpoint.io/widget.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    if (window.MediumWidget && document.getElementById('medium-widget')) {
      MediumWidget.Init({
        renderTo: '#medium-widget',
        params: {
          resource: 'https://aizen-ai.medium.com/',
          postsPerLine: 3,
          limit: 9,
          picture: 'big',
          fields: ['description', 'author', 'publishAt'],
          ratio: 'landscape'
        }
      });
    }
  });
</script>
