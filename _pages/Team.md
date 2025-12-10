---
layout: single
title: "Team"
permalink: /team/
author_profile: false
header: null
classes: wide team-page
---

<script>
function toggleDetails(cardId) {
  const details = document.getElementById(cardId);
  const btn = details.previousElementSibling.querySelector('.btn-read-more');
  if (details.classList.contains('expanded')) {
    details.classList.remove('expanded');
    btn.textContent = 'Read more';
  } else {
    // Close all other expanded cards
    document.querySelectorAll('.card-details.expanded').forEach(el => {
      el.classList.remove('expanded');
      el.previousElementSibling.querySelector('.btn-read-more').textContent = 'Read more';
    });
    details.classList.add('expanded');
    btn.textContent = 'Close';
  }
}
</script>

<!-- ======================= LAB DIRECTOR ======================= -->
<section class="team-section">
  <h2 class="section-title">Lab Director</h2>
  <div class="team-grid">
    <div class="team-card">
      <div class="card-photo">
        <img src="/images/assefa.jpeg" alt="Prof. Woldegeriel Assefa">
      </div>
      <div class="card-body">
        <p class="card-role">Lab Director</p>
        <button class="btn-read-more" onclick="toggleDetails('director-details')">Read more</button>
      </div>
      <div class="card-details" id="director-details">
        <h4 class="detail-name">Woldegeriel Assefa Woldegerima</h4>
        <p class="detail-title">Director of the DIMMS Lab | Assistant Professor</p>
        <p class="detail-bio">Prof. Woldegerima leads the DIMMS Lab with expertise in mathematical biology, disease modeling, and computational epidemiology. His research focuses on developing innovative mathematical frameworks for understanding complex disease dynamics.</p>
        <div class="detail-interests">
          <span class="interest-tag">Mathematical Biology</span>
          <span class="interest-tag">Disease Modeling</span>
          <span class="interest-tag">Computational Epidemiology</span>
        </div>
        <div class="detail-links">
          <a href="mailto:wassefaw@yorku.ca" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://scholar.google.com/citations?user=YOUR_ID" class="link-icon" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
        </div>
        <p class="detail-contact"><strong>Office:</strong> S614 Ross Building<br><strong>Phone:</strong> +1 (416) 736-2100 ext. 22889</p>
      </div>
    </div>
  </div>
</section>

<!-- ======================= POSTDOCTORAL RESEARCHERS ======================= -->
<section class="team-section">
  <h2 class="section-title">Postdoctoral Researchers</h2>
  <div class="team-grid">

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/qi.jpg" alt="Dr. Qi Deng">
      </div>
      <div class="card-body">
        <p class="card-role">Postdoctoral Researcher</p>
        <button class="btn-read-more" onclick="toggleDetails('qi-details')">Read more</button>
      </div>
      <div class="card-details" id="qi-details">
        <h4 class="detail-name">Dr. Qi Deng</h4>
        <p class="detail-title">Postdoctoral Researcher</p>
        <p class="detail-bio">Modeling sexually transmitted diseases, theoretical immunology, data-driven mathematical modeling, agent-based models, deep learning</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://scholar.google.com/" class="link-icon" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
        </div>
      </div>
    </div>

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/andrew.jpg" alt="Dr. Andrew Omame">
      </div>
      <div class="card-body">
        <p class="card-role">Postdoctoral Fellow</p>
        <button class="btn-read-more" onclick="toggleDetails('andrew-details')">Read more</button>
      </div>
      <div class="card-details" id="andrew-details">
        <h4 class="detail-name">Dr. Andrew Omame</h4>
        <p class="detail-title">Postdoctoral Research Fellow</p>
        <p class="detail-bio">Mathematical biology, nonlinear dynamical systems, mathematical models for public health policy and industrial applications</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://scholar.google.com/" class="link-icon" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
        </div>
      </div>
    </div>

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/chigozie.png" alt="Dr. Chigozie Ugwu">
      </div>
      <div class="card-body">
        <p class="card-role">Postdoctoral Fellow</p>
        <button class="btn-read-more" onclick="toggleDetails('chigozie-details')">Read more</button>
      </div>
      <div class="card-details" id="chigozie-details">
        <h4 class="detail-name">Dr. Chigozie L. J. Ugwu</h4>
        <p class="detail-title">Postdoctoral Fellow</p>
        <p class="detail-bio">Infectious disease modeling, spatial epidemiology, mathematical and statistical modeling, geospatial analysis, machine learning</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://scholar.google.com/" class="link-icon" title="Google Scholar"><i class="fas fa-graduation-cap"></i></a>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ======================= DOCTORAL STUDENTS ======================= -->
<section class="team-section">
  <h2 class="section-title">Doctoral Students</h2>
  <div class="team-grid">

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/Farah.jpg" alt="Farah Al Hashimi">
      </div>
      <div class="card-body">
        <p class="card-role">PhD Candidate</p>
        <button class="btn-read-more" onclick="toggleDetails('farah-details')">Read more</button>
      </div>
      <div class="card-details" id="farah-details">
        <h4 class="detail-name">Farah Al Hashimi</h4>
        <p class="detail-title">PhD Candidate in Applied Mathematics</p>
        <p class="detail-bio">Mathematical modeling in epidemiology, stochastic optimization, vaccination strategy optimization, infectious disease dynamics</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

    <div class="team-card">
      <div class="card-photo card-photo-placeholder">
        <i class="fas fa-user"></i>
      </div>
      <div class="card-body">
        <p class="card-role">PhD Student</p>
        <button class="btn-read-more" onclick="toggleDetails('atiqa-details')">Read more</button>
      </div>
      <div class="card-details" id="atiqa-details">
        <h4 class="detail-name">Atiqa Naeem Alam Din</h4>
        <p class="detail-title">PhD Student | Research & Teaching Assistant</p>
        <p class="detail-bio">Disease modeling, ODEs, neural networks, artificial neural networks for epidemiology, deep learning theory</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/joe.jpg" alt="Joe Tran">
      </div>
      <div class="card-body">
        <p class="card-role">PhD Student</p>
        <button class="btn-read-more" onclick="toggleDetails('joe-details')">Read more</button>
      </div>
      <div class="card-details" id="joe-details">
        <h4 class="detail-name">Joe Tran</h4>
        <p class="detail-title">PhD Student in Applied Mathematics</p>
        <p class="detail-bio">Mathematical modeling, computational approaches to epidemiology and public health</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://doi.org/10.1016/j.chaos.2025.116209" class="link-icon" title="Publication"><i class="fas fa-file-alt"></i></a>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ======================= MASTER'S STUDENTS ======================= -->
<section class="team-section">
  <h2 class="section-title">Master's Students</h2>
  <div class="team-grid">

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/Tue.jpg" alt="Tue Dao">
      </div>
      <div class="card-body">
        <p class="card-role">MA Student</p>
        <button class="btn-read-more" onclick="toggleDetails('tue-details')">Read more</button>
      </div>
      <div class="card-details" id="tue-details">
        <h4 class="detail-name">Tue Dao</h4>
        <p class="detail-title">MA Student</p>
        <p class="detail-bio">Mathematical modeling of immune system-dengue virus interactions, infectious disease dynamics, immune response modeling</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ======================= UNDERGRADUATE STUDENTS ======================= -->
<section class="team-section">
  <h2 class="section-title">Undergraduate Students</h2>
  <div class="team-grid">

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/manav.jpg" alt="Manav Pundir">
      </div>
      <div class="card-body">
        <p class="card-role">Undergraduate Researcher</p>
        <button class="btn-read-more" onclick="toggleDetails('manav-details')">Read more</button>
      </div>
      <div class="card-details" id="manav-details">
        <h4 class="detail-name">Manav Pundir</h4>
        <p class="detail-title">Third-year Psychology Student</p>
        <p class="detail-bio">Human and microbolomic immunodynamics, mathematical modeling</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/Chuchu.jpg" alt="Chu Chu">
      </div>
      <div class="card-body">
        <p class="card-role">Undergraduate Researcher</p>
        <button class="btn-read-more" onclick="toggleDetails('chuchu-details')">Read more</button>
      </div>
      <div class="card-details" id="chuchu-details">
        <h4 class="detail-name">Chu Chu</h4>
        <p class="detail-title">Fourth-year Pure Mathematics Student</p>
        <p class="detail-bio">Algebraic number theory, partial differential equations (PDEs), graph theory</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

    <div class="team-card">
      <div class="card-photo">
        <img src="/images/Khue.jpg" alt="Khue Bui">
      </div>
      <div class="card-body">
        <p class="card-role">Undergraduate Researcher</p>
        <button class="btn-read-more" onclick="toggleDetails('khue-details')">Read more</button>
      </div>
      <div class="card-details" id="khue-details">
        <h4 class="detail-name">Duc Anh Khue Bui</h4>
        <p class="detail-title">Undergraduate Researcher</p>
        <p class="detail-bio">Parasite-immune system interaction modeling, ODEs and PDEs for biological systems</p>
        <div class="detail-links">
          <a href="mailto:" class="link-icon" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ======================= INTERNATIONAL COLLABORATIONS ======================= -->
<section class="team-section">
  <h2 class="section-title">International Collaborations</h2>
  <div class="collaborations-box">
    <p class="collab-intro">Our lab benefits from extensive international partnerships:</p>
    <div class="collab-grid">
      <div class="collab-item"><span class="flag">&#127464;&#127462;</span> <strong>Canada</strong> - York University</div>
      <div class="collab-item"><span class="flag">&#127470;&#127481;</span> <strong>Italy</strong> - University of L'Aquila</div>
      <div class="collab-item"><span class="flag">&#127475;&#127468;</span> <strong>Nigeria</strong> - Federal Univ. of Technology Owerri</div>
      <div class="collab-item"><span class="flag">&#127477;&#127472;</span> <strong>Pakistan</strong> - Abdus Salam School</div>
      <div class="collab-item"><span class="flag">&#127487;&#127462;</span> <strong>South Africa</strong> - Univ. of KwaZulu-Natal</div>
      <div class="collab-item"><span class="flag">&#127470;&#127478;</span> <strong>Iraq</strong> - Univ. of Al-Qadisiyah</div>
      <div class="collab-item"><span class="flag">&#127463;&#127469;</span> <strong>Bahrain</strong> - University of Bahrain</div>
      <div class="collab-item"><span class="flag">&#127482;&#127480;</span> <strong>United States</strong> - Miami University</div>
    </div>
  </div>
</section>

<!-- ======================= ALUMNI ======================= -->
<section class="team-section">
  <h2 class="section-title">Alumni</h2>
  <p class="alumni-note"><em>This section will be updated as students graduate and move on to new positions.</em></p>
</section>

<!-- ======================= JOIN OUR TEAM ======================= -->
<section class="team-section join-section">
  <h2 class="section-title">Join Our Team</h2>
  <div class="join-intro">
    <p>We're always looking for passionate researchers to join our team in disease modeling and computational biology research.</p>
  </div>
  <div class="opportunities-grid">
    <div class="opportunity-card">
      <div class="opp-icon"><i class="fas fa-user-graduate"></i></div>
      <h4>Graduate Students</h4>
      <p>MSc and PhD programs with full funding opportunities available.</p>
    </div>
    <div class="opportunity-card">
      <div class="opp-icon"><i class="fas fa-flask"></i></div>
      <h4>Undergraduates</h4>
      <p>NSERC USRA positions and volunteer research opportunities.</p>
    </div>
    <div class="opportunity-card">
      <div class="opp-icon"><i class="fas fa-microscope"></i></div>
      <h4>Postdocs</h4>
      <p>Competitive fellowships for recent PhD graduates.</p>
    </div>
    <div class="opportunity-card">
      <div class="opp-icon"><i class="fas fa-globe"></i></div>
      <h4>Visitors</h4>
      <p>Short-term and sabbatical positions available.</p>
    </div>
  </div>
  <div class="apply-box">
    <h4>How to Apply</h4>
    <p>Send your CV and research interests to:</p>
    <p class="apply-contact">
      <strong>Prof. Woldegeriel Assefa Woldegerima</strong><br>
      <a href="mailto:wassefaw@yorku.ca">wassefaw@yorku.ca</a>
    </p>
    <p class="apply-note"><em>We welcome applications from candidates of all backgrounds.</em></p>
  </div>
</section>
