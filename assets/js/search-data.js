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
          description: "Selected ML systems and research projects, with emphasis on retrieval quality, ranking, grounding, and deployment trade-offs.",
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
        },{id: "nav-resume",
          title: "resume",
          description: "Resume and selected experience in machine learning, visual search, responsible AI, and production ML systems.",
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
          section: "News",},{id: "projects-gestural-ai-real-time-asl-interpreter",
          title: 'Gestural AI – Real-Time ASL Interpreter',
          description: "Video-based ASL recognition with MediaPipe features, temporal models, and a real-time Streamlit demo.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-edi-summ-multimodal-clinical-summarization",
          title: 'EDI-Summ: Multimodal Clinical Summarization',
          description: "ACL 2024 clinical summarization work combining text context with visual grounding and factual evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-climate-decision-support-system",
          title: 'Climate Decision Support System',
          description: "Real-time data analysis platform for climate and water management across 30 cities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-verified-medical-nlp-rdf-grounded-jamba-rag",
          title: 'Verified Medical NLP – RDF-Grounded Jamba RAG',
          description: "Medical QA pipeline that grounds generated answers in RDF triples and checks claims against retrieved evidence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-clinical-summarization-with-prophetnet",
          title: 'Clinical Summarization with ProphetNet',
          description: "Fine-tuning ProphetNet for improved clinical dialogue summarization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-icici-bank-personalization-amp-ranking-platform",
          title: 'ICICI Bank Personalization &amp;amp; Ranking Platform',
          description: "Production ranking and personalization workflows for banking surfaces, measured through CTR, relevance, and deployment speed.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-visual-amp-multimodal-retrieval-system",
          title: 'Visual &amp;amp; Multimodal Retrieval System',
          description: "Vision-text retrieval pipeline with FAISS indexing, learned reranking, Ray Serve batching, and failure-mode evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-user-behavior-segmentation-amp-predictive-profiling",
          title: 'User Behavior Segmentation &amp;amp; Predictive Profiling',
          description: "Behavior modeling pipeline for recommender systems with clustering, sequence classification, and drift checks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
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
