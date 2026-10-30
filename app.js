(function () {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;
  const languageButton = document.querySelector("#language-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const getPath = (object, path) =>
    path.split(".").reduce((result, key) => (result ? result[key] : undefined), object);

  function renderProcess(items) {
    document.querySelector("#process-grid").innerHTML = items
      .map(
        (item, index) => `
          <article class="process-card reveal">
            <span>0${index + 1}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>`
      )
      .join("");
  }

  function renderProjects(data, labels) {
    document.querySelector("#project-list").innerHTML = data
      .map(
        (project) => `
          <article class="project-case">
            <div class="project-copy reveal">
              <div class="project-number">CASE ${escapeHtml(project.number)} <span>—</span> ${escapeHtml(project.displayUrl)}</div>
              <h3>${escapeHtml(project.title)}</h3>
              <p class="project-summary">${escapeHtml(project.summary)}</p>
              <div class="project-problem">
                <strong>${escapeHtml(labels.problemLabel)}</strong>
                <p>${escapeHtml(project.problem)}</p>
              </div>
              <ul class="project-outcomes">
                ${project.outcomes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
              <div class="tag-list">
                ${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
              </div>
              <a class="project-link" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">
                ${escapeHtml(labels.openLabel)} <span>↗</span>
              </a>
            </div>
            <div class="project-visual reveal">
              <div class="browser-frame">
                <div class="browser-bar">
                  <div class="browser-dots"><span>●</span><span>●</span><span>●</span></div>
                  <span>${escapeHtml(project.displayUrl)}</span>
                  <span class="browser-live">${escapeHtml(labels.liveLabel)}</span>
                </div>
                <div class="browser-viewport">
                  <iframe
                    src="${escapeHtml(project.url)}"
                    title="${escapeHtml(project.title)}"
                    loading="lazy"
                    referrerpolicy="strict-origin-when-cross-origin"
                  ></iframe>
                  <a class="browser-open" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">
                    ${escapeHtml(labels.openLabel)} ↗
                  </a>
                </div>
              </div>
              <p class="visual-note">${escapeHtml(project.visualNote)}</p>
            </div>
          </article>`
      )
      .join("");
  }

  function renderAiSteps(steps) {
    document.querySelector("#ai-steps").innerHTML = steps
      .map((step) => `<li><span><strong>${escapeHtml(step.strong)}</strong> — ${escapeHtml(step.text)}</span></li>`)
      .join("");
  }

  function renderTimeline(roles) {
    document.querySelector("#timeline").innerHTML = roles
      .map(
        (role) => `
          <article class="timeline-item reveal">
            <div class="timeline-year">${escapeHtml(role.dates)}</div>
            <div>
              <h3>${escapeHtml(role.title)}</h3>
              <h4>${escapeHtml(role.company)}</h4>
              <p>${escapeHtml(role.detail)}</p>
            </div>
          </article>`
      )
      .join("");
  }

  function renderRepositories(repositories) {
    document.querySelector("#repo-grid").innerHTML = repositories
      .map(
        (repository, index) => `
          <a class="repo-card reveal" href="${escapeHtml(repository.url)}" target="_blank" rel="noreferrer">
            <div class="section-index">0${index + 1} / GITHUB <span aria-hidden="true">↗</span></div>
            <h3>${escapeHtml(repository.title)}</h3>
            <p>${escapeHtml(repository.description)}</p>
            <div class="tag-list">${repository.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
          </a>`
      )
      .join("");
  }

  let currentLanguage = "en";
  let currentContent = content.en;
  let observer;

  function setupReveal() {
    if (observer) observer.disconnect();

    const items = document.querySelectorAll(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    items.forEach((item) => observer.observe(item));
  }

  function setLanguage(language) {
    currentLanguage = language;
    currentContent = content[language];
    document.documentElement.lang = language;
    document.title = currentContent.meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", currentContent.meta.description);

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const value = getPath(currentContent, node.dataset.i18n);
      if (typeof value === "string") node.textContent = value;
    });

    document.querySelectorAll("[data-lang-option]").forEach((option) => {
      option.classList.toggle("active", option.dataset.langOption === language);
    });

    renderProcess(currentContent.process);
    renderProjects(currentContent.projects, currentContent.work);
    renderAiSteps(currentContent.ai.steps);
    renderTimeline(currentContent.experience.roles);
    renderRepositories(currentContent.repositories);
    window.localStorage.setItem("portfolio-language", language);
    setupReveal();
  }

  languageButton.addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "th" : "en");
  });

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.style.display = open ? "none" : "flex";
    nav.style.flexDirection = "column";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        nav.style.display = "none";
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      nav.style.display = "flex";
      nav.style.flexDirection = "row";
      menuButton.setAttribute("aria-expanded", "false");
    } else if (menuButton.getAttribute("aria-expanded") !== "true") {
      nav.style.display = "none";
    }
  });

  document.querySelector("#year").textContent = new Date().getFullYear();

  const savedLanguage = window.localStorage.getItem("portfolio-language");
  const browserLanguage = navigator.language.toLowerCase().startsWith("th") ? "th" : "en";
  setLanguage(savedLanguage && content[savedLanguage] ? savedLanguage : browserLanguage);
})();
