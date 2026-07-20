const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

if (menuButton && menu) {
  const closeMenu = () => {
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  };

  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      closeMenu();
      menuButton.focus();
    }
  });

  const desktopNavigation = window.matchMedia("(min-width: 1051px)");
  desktopNavigation.addEventListener("change", ({ matches }) => {
    if (matches) closeMenu();
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((item) => {
    const siblings = [...item.parentElement.children].filter((child) => child.classList.contains("reveal"));
    if (siblings.length > 1) {
      item.style.setProperty("--stagger", `${Math.min(siblings.indexOf(item) * 70, 350)}ms`);
    }
    observer.observe(item);
  });
} else {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("visible"));
}

const progressBar = document.querySelector(".scroll-progress");
if (progressBar) {
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progressBar.style.setProperty("--scroll-progress", progress.toFixed(4));
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

const scrollSkies = [...document.querySelectorAll("[data-scroll-sky]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (scrollSkies.length) {
  let cloudFrame;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateClouds = () => {
    cloudFrame = undefined;
    const viewportHeight = window.innerHeight;

    scrollSkies.forEach((sky, index) => {
      const rect = sky.getBoundingClientRect();
      if (rect.bottom < -180 || rect.top > viewportHeight + 180) return;

      const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);
      const phase = progress - .5;
      const direction = index % 2 === 0 ? 1 : -1;
      const motionScale = reducedMotion.matches ? .2 : 1;
      sky.style.setProperty("--cloud-field-x", `${(phase * 240 * direction * motionScale).toFixed(1)}px`);
      sky.style.setProperty("--cloud-field-y", `${(phase * 600 * motionScale).toFixed(1)}px`);
    });
  };

  const requestCloudUpdate = () => {
    if (cloudFrame === undefined) cloudFrame = requestAnimationFrame(updateClouds);
  };

  window.addEventListener("scroll", requestCloudUpdate, { passive: true });
  window.addEventListener("resize", requestCloudUpdate);
  if ("addEventListener" in reducedMotion) reducedMotion.addEventListener("change", requestCloudUpdate);
  updateClouds();
}

const copyButton = document.querySelector(".copy-email");
if (copyButton && navigator.clipboard) {
  const status = document.querySelector(".copy-email__status");
  copyButton.parentElement.classList.add("available");
  let statusTimer;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      status.textContent = "Copied";
    } catch {
      status.textContent = "Copy failed";
    }
    status.classList.add("shown");
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => {
      status.classList.remove("shown");
      status.textContent = "";
    }, 2400);
  });
}

const searchForm = document.querySelector("[data-search-form]");
if (searchForm) {
  const searchInput = searchForm.querySelector("[data-search-input]");
  const resultsContainer = document.querySelector("[data-search-results]");
  const status = document.querySelector("[data-search-status]");
  const emptyState = document.querySelector("[data-search-empty]");
  const resultItems = [...document.querySelectorAll("[data-search-result]")];

  const normalize = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9&]+/g, " ")
      .trim();

  const runSearch = (rawQuery, { updateUrl = true } = {}) => {
    const query = rawQuery.trim();
    const normalizedQuery = normalize(query);
    const terms = normalizedQuery.split(/\s+/).filter(Boolean);

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (query) url.searchParams.set("q", query);
      else url.searchParams.delete("q");
      window.history.replaceState({}, "", url);
    }

    if (!terms.length) {
      resultItems.forEach((item) => {
        item.hidden = true;
      });
      emptyState.hidden = false;
      status.textContent = "Enter a word or phrase above to begin.";
      return;
    }

    const matches = resultItems
      .map((item) => {
        const title = normalize(item.dataset.searchTitle);
        const description = normalize(item.dataset.searchDescription);
        const text = normalize(item.dataset.searchText);
        if (!terms.every((term) => text.includes(term))) return null;

        let score = title === normalizedQuery ? 300 : title.startsWith(normalizedQuery) ? 180 : 0;
        terms.forEach((term) => {
          if (title.includes(term)) score += 60;
          if (description.includes(term)) score += 20;
          if (text.includes(term)) score += 5;
        });
        return { item, score, title };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

    resultItems.forEach((item) => {
      item.hidden = true;
    });
    matches.forEach(({ item }) => {
      item.hidden = false;
      resultsContainer.append(item);
    });

    emptyState.hidden = matches.length > 0;
    status.textContent = matches.length
      ? `${matches.length} ${matches.length === 1 ? "result" : "results"} for “${query}”`
      : `No results for “${query}”. Try a broader term or browse the sitemap.`;
  };

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    runSearch(searchInput.value);
  });

  document.querySelectorAll("[data-search-query]").forEach((button) => {
    button.addEventListener("click", () => {
      searchInput.value = button.dataset.searchQuery;
      runSearch(searchInput.value);
      resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const initialQuery = new URLSearchParams(window.location.search).get("q") ?? "";
  searchInput.value = initialQuery;
  runSearch(initialQuery, { updateUrl: false });
}

const passwordToggle = document.querySelector("[data-password-toggle]");
if (passwordToggle) {
  const passwordInput = document.querySelector("#login-password");
  passwordToggle.addEventListener("click", () => {
    const show = passwordInput.type === "password";
    passwordInput.type = show ? "text" : "password";
    passwordToggle.textContent = show ? "Hide" : "Show";
    passwordToggle.setAttribute("aria-label", show ? "Hide password" : "Show password");
    passwordToggle.setAttribute("aria-pressed", String(show));
    passwordInput.focus();
  });
}

const loginForm = document.querySelector("[data-login-form]");
if (loginForm) {
  const status = document.querySelector("[data-login-status]");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!loginForm.reportValidity()) return;

    loginForm.querySelector("#login-password").value = "";
    status.hidden = false;
    status.textContent = "Secure account access is not connected yet. Contact Hartnett Capital for portal assistance.";
    status.focus?.();
  });
}
