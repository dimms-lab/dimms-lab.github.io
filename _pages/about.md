---
permalink: /
title: "Disease-Informed Modelling, Methods, and Systems (DIMMS) Lab"
excerpt: "Disease-Informed Modelling, Methods, and Systems Laboratory"
author_profile: true
classes: wide
header: null
redirect_from:
  - /about/
  - /about.html
---

The DIMMS Lab at York University encompasses a broad scope of research, including mathematical biology, statistics, machine learning, spatial analysis, disease and immunity modelling, and multi-timescale analysis. Our research integrates diverse methodological approaches to address complex challenges in understanding disease dynamics and developing effective intervention strategies through innovative mathematical and computational frameworks.

<div style="text-align: center; margin: 30px auto; max-width: 600px;">
<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
  <defs>
    <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" style="stop-color:#64ffda;stop-opacity:1" />
      <stop offset="40%" style="stop-color:#00bcd4;stop-opacity:0.9" />
      <stop offset="80%" style="stop-color:#0097a7;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#006064;stop-opacity:1" />
    </radialGradient>
    <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffc107;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff8f00;stop-opacity:1" />
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
  
  <!-- Central Data Sphere -->
  <g transform="translate(200,120)">
    <!-- Main Sphere -->
    <circle cx="0" cy="0" r="45" fill="url(#sphereGrad)" filter="url(#quantumGlow)" opacity="0.9"/>
    
    <!-- Orbital Rings -->
    <ellipse cx="0" cy="0" rx="70" ry="20" fill="none" stroke="url(#orbitGrad)" stroke-width="3" opacity="0.8" transform="rotate(0)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="0" cy="0" rx="70" ry="20" fill="none" stroke="url(#orbitGrad)" stroke-width="2" opacity="0.6" transform="rotate(60)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="60;420" dur="10s" repeatCount="indefinite"/>
    </ellipse>
    <ellipse cx="0" cy="0" rx="70" ry="20" fill="none" stroke="url(#orbitGrad)" stroke-width="2" opacity="0.6" transform="rotate(120)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="120;480" dur="12s" repeatCount="indefinite"/>
    </ellipse>
    
    <!-- Data Particles on Orbits -->
    <g transform="rotate(0)">
      <circle cx="70" cy="0" r="3" fill="#ffc107" filter="url(#dataGlow)">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
      </circle>
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
    </g>
    <g transform="rotate(60)">
      <circle cx="70" cy="0" r="2.5" fill="#ff8f00" filter="url(#dataGlow)">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="10s" repeatCount="indefinite"/>
      </circle>
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="60;420" dur="10s" repeatCount="indefinite"/>
    </g>
    <g transform="rotate(120)">
      <circle cx="70" cy="0" r="2" fill="#ffb300" filter="url(#dataGlow)">
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0;360" dur="12s" repeatCount="indefinite"/>
      </circle>
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="120;480" dur="12s" repeatCount="indefinite"/>
    </g>
    
    <!-- Inner Mathematical Core -->
    <g opacity="0.9">
      <text x="0" y="-10" text-anchor="middle" fill="#ffffff" font-family="serif" font-size="16" font-weight="bold">∑</text>
      <text x="-15" y="8" text-anchor="middle" fill="#ffffff" font-family="serif" font-size="12">∂</text>
      <text x="15" y="8" text-anchor="middle" fill="#ffffff" font-family="serif" font-size="12">∫</text>
      <text x="0" y="25" text-anchor="middle" fill="#ffffff" font-family="serif" font-size="10">DIMMS</text>
    </g>
    
    <!-- Quantum Field Effects -->
    <g opacity="0.4">
      <circle cx="-80" cy="-30" r="1.5" fill="#64ffda">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="80" cy="-40" r="1" fill="#00bcd4">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="-90" cy="40" r="1.2" fill="#0097a7">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="85" cy="45" r="1" fill="#006064">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </g>
    
    <!-- Data Streams -->
    <g opacity="0.7">
      <path d="M -100,-20 Q -70,-10 -50,0" stroke="#64ffda" stroke-width="1.5" fill="none">
        <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0" dur="4s" repeatCount="indefinite"/>
      </path>
      <path d="M 100,-20 Q 70,-10 50,0" stroke="#64ffda" stroke-width="1.5" fill="none">
        <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0" dur="4s" begin="1s" repeatCount="indefinite"/>
      </path>
      <path d="M -100,40 Q -70,30 -50,20" stroke="#00bcd4" stroke-width="1.5" fill="none">
        <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0" dur="4s" begin="2s" repeatCount="indefinite"/>
      </path>
      <path d="M 100,40 Q 70,30 50,20" stroke="#00bcd4" stroke-width="1.5" fill="none">
        <animate attributeName="stroke-dasharray" values="0,50;25,25;50,0" dur="4s" begin="3s" repeatCount="indefinite"/>
      </path>
    </g>
    
    <!-- Floating Equations -->
    <text x="-110" y="-15" fill="#333" font-family="serif" font-size="10" opacity="0.8">dI/dt = βSI</text>
    <text x="75" y="-15" fill="#333" font-family="serif" font-size="10" opacity="0.8">R₀ = β/γ</text>
    <text x="-110" y="60" fill="#333" font-family="serif" font-size="10" opacity="0.8">∇·F = ρ</text>
    <text x="85" y="60" fill="#333" font-family="serif" font-size="10" opacity="0.8">λ₁,λ₂...</text>
  </g>
  
  <!-- Lab Name -->
  <text x="200" y="220" text-anchor="middle" fill="#1a1a1a" font-family="Arial, sans-serif" font-size="24" font-weight="bold">DIMMS LAB</text>
  <text x="200" y="240" text-anchor="middle" fill="#666666" font-family="Arial, sans-serif" font-size="10" letter-spacing="2px">DISEASE-INFORMED MODELLING, METHODS & SYSTEMS</text>
  
  <!-- Corner Accent Elements -->
  <g opacity="0.3">
    <path d="M 20,20 Q 30,25 40,20 Q 35,30 40,40" stroke="#00bcd4" stroke-width="2" fill="none"/>
    <path d="M 360,20 Q 350,25 340,20 Q 345,30 340,40" stroke="#00bcd4" stroke-width="2" fill="none"/>
    <path d="M 20,260 Q 30,255 40,260 Q 35,250 40,240" stroke="#00bcd4" stroke-width="2" fill="none"/>
    <path d="M 360,260 Q 350,255 340,260 Q 345,250 340,240" stroke="#00bcd4" stroke-width="2" fill="none"/>
  </g>
</svg>
</div>
## Research Areas

<div class="research-areas">
  <div class="research-card">
    <h3>Mathematical Biology and Disease Modeling</h3>
    <p>Our lab specializes in developing mathematical models to understand biological processes and disease dynamics. We focus on creating robust frameworks that can predict and analyze disease behavior across different populations and environments.</p>
  </div>
  
  <div class="research-card">
    <h3>Machine Learning and Neural Networks</h3>
    <p>We pioneer the development of disease-informed neural networks that combine epidemiological principles with deep learning architectures. These hybrid models enhance prediction accuracy by incorporating domain knowledge into machine learning frameworks.</p>
  </div>
  
  <div class="research-card">
    <h3>Statistical Methods and Data Analysis</h3>
    <p>We employ advanced statistical frameworks including Bayesian inference, MCMC methods, time series analysis, and spatial statistics to analyze complex disease data and extract meaningful patterns from epidemiological datasets.</p>
  </div>
  
  <div class="research-card">
    <h3>Multi-timescale Analysis</h3>
    <p>Our research analyzes disease processes across multiple temporal scales—from rapid molecular interactions to long-term population dynamics. This integrated approach helps us understand how phenomena at different scales influence overall disease patterns.</p>
  </div>
  
  <div class="research-card">
    <h3>Spatial Epidemiology</h3>
    <p>We examine how geographical and socioeconomic factors influence disease transmission and outcomes, integrating spatial statistics with epidemiological models to identify risk factors and predict disease spread patterns.</p>
  </div>
  
  <div class="research-card">
    <h3>Immunity Modeling</h3>
    <p>We develop sophisticated models of immune response dynamics to understand how pathogens interact with host immunity, encompassing antibody responses, T-cell dynamics, and cytokine signaling networks.</p>
  </div>
</div>

## Recent Highlights

<div class="highlight-box">
  <h3>🏆 Latest Achievements</h3>
  <p>Our lab continues to push the boundaries of disease modeling and computational biology through groundbreaking research and innovative methodologies.</p>
</div>

<div class="content-card">
  <h3>🦆 Avian Influenza Prediction</h3>
  <p>Breakthrough neural network model for predicting avian influenza spread using advanced machine learning techniques and epidemiological data integration.</p>
</div>

<div class="content-card">
  <h3>🔬 Mpox Research</h3>
  <p>Comprehensive analysis of geographical and socioeconomic factors in Mpox transmission in Ontario, providing crucial insights for public health policy.</p>
</div>

<div class="content-card">
  <h3>🦠 Dengue Immunodynamics</h3>
  <p>Innovative work on immune system interactions with dengue virus, exploring complex host-pathogen dynamics and immunity modeling.</p>
</div>

<div class="content-card">
  <h3>📚 Computational Biology Publications</h3>
  <p>Recent publications in high-impact journals including PLoS Computational Biology, advancing the field through rigorous research and methodology.</p>
</div>

## Lab Director

<div class="content-card">
  <h3>👨‍🔬 Prof. Woldegeriel Assefa Woldegerima</h3>
  <p><strong>Assistant Professor in the Professional stream</strong><br>
  Department of Mathematics and Statistics, York University</p>
  
  <p>Director of the DIMMS Lab at York University with expertise in mathematical biology, disease modeling, and computational epidemiology. Research focuses on developing innovative mathematical frameworks for understanding complex disease dynamics.</p>
  
  <p><strong>Contact:</strong> <a href="mailto:wassefaw@yorku.ca">wassefaw@yorku.ca</a></p>
  
  <p><strong>Research Interests:</strong></p>
  <ul>
    <li>Mathematical Biology & Disease Modeling</li>
    <li>Computational Epidemiology</li>
    <li>Machine Learning in Healthcare</li>
    <li>Multi-scale Analysis</li>
    <li>Spatial Statistics</li>
  </ul>
</div>
