---
permalink: /
title: "DIMMS Lab"
excerpt: "Disease-Informed Modelling, Methods, and Systems Laboratory"
author_profile: true
classes: wide
header: null
redirect_from:
  - /about/
  - /about.html
---

<!-- ======================= HERO SECTION ======================= -->
<section class="homepage-hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title">DIMMS Lab</h1>
      <p class="hero-subtitle">Disease-Informed Modelling, Methods &amp; Systems</p>
      <p class="hero-tagline">Advancing mathematical biology through innovative computational frameworks to understand disease dynamics and develop effective intervention strategies.</p>
      <div class="hero-cta">
        <a href="/research/" class="btn btn-primary">View Our Research</a>
        <a href="/team/" class="btn btn-secondary">Meet the Team</a>
      </div>
      <p class="hero-affiliation">York University &bull; Department of Mathematics &amp; Statistics</p>
    </div>
    <div class="hero-graphic">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" style="stop-color:#64ffda;stop-opacity:1" />
            <stop offset="40%" style="stop-color:#00bcd4;stop-opacity:0.9" />
            <stop offset="80%" style="stop-color:#0097a7;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#006064;stop-opacity:1" />
          </radialGradient>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#c9a227;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#d4b23d;stop-opacity:1" />
          </linearGradient>
          <filter id="quantumGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="dataGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g transform="translate(200,140)">
          <circle cx="0" cy="0" r="50" fill="url(#sphereGrad)" filter="url(#quantumGlow)" opacity="0.9"/>
          <ellipse cx="0" cy="0" rx="80" ry="22" fill="none" stroke="url(#orbitGrad)" stroke-width="3" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="0" cy="0" rx="80" ry="22" fill="none" stroke="url(#orbitGrad)" stroke-width="2" opacity="0.6" transform="rotate(60)">
            <animateTransform attributeName="transform" type="rotate" values="60;420" dur="10s" repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx="0" cy="0" rx="80" ry="22" fill="none" stroke="url(#orbitGrad)" stroke-width="2" opacity="0.6" transform="rotate(120)">
            <animateTransform attributeName="transform" type="rotate" values="120;480" dur="12s" repeatCount="indefinite"/>
          </ellipse>
          <g>
            <circle cx="80" cy="0" r="4" fill="#c9a227" filter="url(#dataGlow)">
              <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
            </circle>
          </g>
          <g transform="rotate(60)">
            <circle cx="80" cy="0" r="3" fill="#d4b23d" filter="url(#dataGlow)">
              <animateTransform attributeName="transform" type="rotate" values="0;360" dur="10s" repeatCount="indefinite"/>
            </circle>
          </g>
          <g transform="rotate(120)">
            <circle cx="80" cy="0" r="2.5" fill="#c9a227" filter="url(#dataGlow)">
              <animateTransform attributeName="transform" type="rotate" values="0;360" dur="12s" repeatCount="indefinite"/>
            </circle>
          </g>
          <g opacity="0.95">
            <text x="0" y="-12" text-anchor="middle" fill="#ffffff" font-family="serif" font-size="18" font-weight="bold">∑</text>
            <text x="-18" y="8" text-anchor="middle" fill="#ffffff" font-family="serif" font-size="14">∂</text>
            <text x="18" y="8" text-anchor="middle" fill="#ffffff" font-family="serif" font-size="14">∫</text>
          </g>
          <g opacity="0.5">
            <circle cx="-95" cy="-35" r="2" fill="#64ffda">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="95" cy="-45" r="1.5" fill="#00bcd4">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="-100" cy="50" r="1.8" fill="#0097a7">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="100" cy="55" r="1.5" fill="#006064">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
            </circle>
          </g>
          <g opacity="0.6">
            <text x="-100" y="-55" fill="#1e3a5f" font-family="serif" font-size="9" opacity="0.7">dI/dt = βSI</text>
            <text x="65" y="-55" fill="#1e3a5f" font-family="serif" font-size="9" opacity="0.7">R₀ = β/γ</text>
            <text x="-100" y="80" fill="#1e3a5f" font-family="serif" font-size="9" opacity="0.7">∇·F = ρ</text>
            <text x="75" y="80" fill="#1e3a5f" font-family="serif" font-size="9" opacity="0.7">λ₁,λ₂...</text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</section>

<!-- ======================= WHAT WE DO SECTION ======================= -->
<section class="what-we-do">
  <h2>What We Do</h2>
  <p class="section-intro">Our interdisciplinary research integrates mathematical modeling, machine learning, and statistical analysis to tackle complex challenges in disease dynamics and public health.</p>

  <div class="research-grid">
    <div class="research-item">
      <div class="research-icon">🧬</div>
      <h3>Disease Modeling</h3>
      <p>Developing mathematical frameworks to understand and predict disease transmission dynamics across populations.</p>
    </div>
    <div class="research-item">
      <div class="research-icon">🤖</div>
      <h3>Machine Learning</h3>
      <p>Pioneering disease-informed neural networks that combine epidemiological principles with deep learning.</p>
    </div>
    <div class="research-item">
      <div class="research-icon">📊</div>
      <h3>Statistical Analysis</h3>
      <p>Employing Bayesian inference, MCMC methods, and spatial statistics for complex data analysis.</p>
    </div>
    <div class="research-item">
      <div class="research-icon">⏱️</div>
      <h3>Multi-scale Analysis</h3>
      <p>Analyzing disease processes from molecular interactions to population-level dynamics.</p>
    </div>
    <div class="research-item">
      <div class="research-icon">🗺️</div>
      <h3>Spatial Epidemiology</h3>
      <p>Examining geographical and socioeconomic factors in disease transmission patterns.</p>
    </div>
    <div class="research-item">
      <div class="research-icon">🛡️</div>
      <h3>Immunity Modeling</h3>
      <p>Modeling immune response dynamics and host-pathogen interactions.</p>
    </div>
  </div>

  <div class="section-cta">
    <a href="/research/" class="btn btn-outline">Explore All Research Areas</a>
  </div>
</section>

<!-- ======================= LATEST NEWS SECTION ======================= -->
<section class="latest-news">
  <h2>Latest News</h2>

  <div class="news-grid">
    <article class="news-card news-featured">
      <span class="news-date">October 2025</span>
      <h3>Upcoming Seminar: Sherif Shuaib</h3>
      <p>Join us October 17 for a research presentation on stage-structured models for fisheries management. Ross Building, Room N638.</p>
      <a href="/news/" class="news-link">Learn more →</a>
    </article>

    <article class="news-card">
      <span class="news-date">August 2025</span>
      <h3>SIAM/CAIMS Conference</h3>
      <p>Dr. Andrew Omame and Dr. Qi Deng represented DIMMS Lab at the Joint SIAM/CAIMS Annual Meetings in Montreal.</p>
      <a href="/news/" class="news-link">Read more →</a>
    </article>

    <article class="news-card">
      <span class="news-date">May 2025</span>
      <h3>New Publication in PLoS Computational Biology</h3>
      <p>Dr. Qi Deng published significant research advancing computational biology methodologies.</p>
      <a href="/news/" class="news-link">Read more →</a>
    </article>
  </div>

  <div class="section-cta">
    <a href="/news/" class="btn btn-outline">View All News</a>
  </div>
</section>

<!-- ======================= RECENT PUBLICATIONS SECTION ======================= -->
<section class="recent-publications">
  <h2>Recent Publications</h2>

  <div class="publications-list">
    <article class="publication-item">
      <span class="pub-year">2025</span>
      <div class="pub-content">
        <h4>Deep neural networks with application in predicting the spread of avian influenza</h4>
        <p class="pub-authors">Golooba N., Woldegerima W.A.</p>
        <p class="pub-journal">Big Data and Information Analytics</p>
      </div>
      <a href="https://doi.org/10.3934/bdia.2025001" class="pub-link" target="_blank">DOI</a>
    </article>

    <article class="publication-item">
      <span class="pub-year">2025</span>
      <div class="pub-content">
        <h4>Geographical distribution and socio-environmental indicators of Mpox in Ontario</h4>
        <p class="pub-authors">Ugwu C.L., Woldegerima W.A., et al.</p>
        <p class="pub-journal">PLOS ONE</p>
      </div>
      <a href="https://doi.org/10.1371/journal.pone.0306681" class="pub-link" target="_blank">DOI</a>
    </article>

    <article class="publication-item">
      <span class="pub-year">2025</span>
      <div class="pub-content">
        <h4>Risk factors associated with human Mpox infection: systematic review</h4>
        <p class="pub-authors">Ugwu C.L., Woldegerima W.A., et al.</p>
        <p class="pub-journal">BMJ Global Health</p>
      </div>
      <a href="https://gh.bmj.com/content/10/2/e016937" class="pub-link" target="_blank">DOI</a>
    </article>
  </div>

  <div class="section-cta">
    <a href="/publications/" class="btn btn-outline">View All Publications</a>
  </div>
</section>

<!-- ======================= LAB DIRECTOR SECTION ======================= -->
<section class="lab-director">
  <h2>Lab Director</h2>

  <div class="director-card">
    <div class="director-info">
      <h3>Prof. Woldegeriel Assefa Woldegerima</h3>
      <p class="director-title">Assistant Professor &bull; Department of Mathematics and Statistics</p>
      <p class="director-bio">Director of the DIMMS Lab at York University with expertise in mathematical biology, disease modeling, and computational epidemiology. Research focuses on developing innovative mathematical frameworks for understanding complex disease dynamics.</p>
      <div class="director-interests">
        <span class="interest-tag">Mathematical Biology</span>
        <span class="interest-tag">Disease Modeling</span>
        <span class="interest-tag">Computational Epidemiology</span>
        <span class="interest-tag">Machine Learning</span>
        <span class="interest-tag">Multi-scale Analysis</span>
      </div>
      <a href="mailto:wassefaw@yorku.ca" class="director-contact">wassefaw@yorku.ca</a>
    </div>
  </div>
</section>
