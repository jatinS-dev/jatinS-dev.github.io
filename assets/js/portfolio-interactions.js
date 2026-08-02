(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll('.opening-note > *, .identity-card, .identity-copy > *, .work-copy > *, .question-panel, .resume-intro > *, .resume-entry, .resume-two-col > div, .resume-skills > div, .project-intro > *, .project-body > *, .archive-intro > *, .archive-list > a');

  if (!reducedMotion && 'IntersectionObserver' in window) {
    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 45}ms`);
    });
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealTargets.forEach((element) => observer.observe(element));
  }

  const hero = document.querySelector('.cinema-hero');
  const video = hero?.querySelector('video');
  if (hero && video && !reducedMotion) {
    hero.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      video.style.setProperty('--hero-x', `${(event.clientX / hero.clientWidth - 0.5) * -10}px`);
      video.style.setProperty('--hero-y', `${(event.clientY / hero.clientHeight - 0.5) * -7}px`);
    });
    hero.addEventListener('pointerleave', () => {
      video.style.setProperty('--hero-x', '0px');
      video.style.setProperty('--hero-y', '0px');
    });
  }

  const sceneButtons = [...document.querySelectorAll('[data-scene]')];
  const scenePanels = [...document.querySelectorAll('[data-scene-panel]')];
  sceneButtons.forEach((button) => button.addEventListener('click', () => {
    const scene = button.dataset.scene;
    sceneButtons.forEach((item) => item.classList.toggle('scene-active', item === button));
    scenePanels.forEach((panel) => panel.classList.toggle('is-active', panel.dataset.scenePanel === scene));
    if (video) {
      video.classList.toggle('is-hidden', scene !== '1');
      if (scene === '1') video.play().catch(() => {});
      else video.pause();
    }
  }));

  document.querySelectorAll('[data-copy-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      button.textContent = 'copied';
      window.setTimeout(() => { button.textContent = 'copy email'; }, 1800);
      try {
        await navigator.clipboard.writeText(button.dataset.copyEmail);
      } catch (_) {
        const temporary = document.createElement('textarea');
        temporary.value = button.dataset.copyEmail;
        temporary.style.position = 'fixed';
        temporary.style.opacity = '0';
        document.body.appendChild(temporary);
        temporary.select();
        document.execCommand('copy');
        temporary.remove();
      }
    });
  });
})();
