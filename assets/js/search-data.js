// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "AI systems work spanning LLM inference, GPU profiling, clinical evaluation, and production ML.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed and submitted research in multimodal AI, faithful generation, and privacy-preserving machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Selected GitHub work and open-source projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-writing",
          title: "writing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-résumé",
          title: "résumé",
          description: "Resume and selected experience in LLM inference, GPU performance, distributed experimentation, and production ML systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-published-from-sights-to-insights-towards-summarization-of-multimodal-clinical-documents-at-acl-2024-with-contributions-to-the-vision-cross-attention-fusion-module-and-grounding-ablations",
          title: 'Published “From Sights to Insights: Towards Summarization of Multimodal Clinical Documents” at ACL...',
          description: "",
          section: "News",},{id: "news-started-research-assistant-work-at-the-university-of-florida-on-computer-vision-multimodal-retrieval-responsible-ai-evaluation-and-agentic-ml-systems",
          title: 'Started research assistant work at the University of Florida on computer vision, multimodal...',
          description: "",
          section: "News",},{id: "news-submitted-structured-medical-qa-work-to-the-acl-2026-surgellm-workshop-focusing-on-rdf-retrieval-claim-level-verification-and-faithful-generative-ai-evaluation",
          title: 'Submitted structured medical QA work to the ACL 2026 SURGeLLM workshop, focusing on...',
          description: "",
          section: "News",},{id: "projects-verifiable-preference-optimization-for-reasoning-llms",
          title: 'Verifiable Preference Optimization for Reasoning LLMs',
          description: "A verified reasoning-data pipeline and LoRA DPO study with careful validation of truncation and answer parsing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-temporal-knowledge-graph-memory",
          title: 'Temporal Knowledge-Graph Memory',
          description: "Graphiti and Neo4j memory for clinical LLM agents, evaluated with a six-stage verification pipeline.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-joomla-4-guided-tour",
          title: 'Joomla 4 Guided Tour',
          description: "An MVC component and plugin shipped into Joomla 4 core through Google Summer of Code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-unifyai-ivy-numerical-core",
          title: 'UnifyAI / Ivy Numerical Core',
          description: "Cross-backend numerical primitives for PaddlePaddle and PyTorch, including a BLAS/LAPACK-backed dot implementation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-edi-summ-multimodal-clinical-summarization",
          title: 'EDI-Summ: Multimodal Clinical Summarization',
          description: "Image-guided BART with decoder cross-attention for multimodal clinical document summarization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-structure-grounded-medical-qa",
          title: 'Structure-Grounded Medical QA',
          description: "RDF and SPARQL retrieval with claim-level verification for faithful medical question answering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-icici-bank-personalization-amp-ranking-platform",
          title: 'ICICI Bank Personalization &amp;amp; Ranking Platform',
          description: "Production ranking and personalization workflows for banking surfaces, measured through CTR, relevance, and deployment speed.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-latency-aware-speculative-decoding",
          title: 'Latency-Aware Speculative Decoding',
          description: "A correct speculative decoding engine, benchmark harness, and GPU profiling study for Qwen language models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%74%69%6E.%73%61%6C%76%65@%75%66%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jatinS-dev", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jatin-salve", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@aizen-ai", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oCWVZvYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
