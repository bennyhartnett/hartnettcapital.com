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

  const desktopNavigation = window.matchMedia("(min-width: 1261px)");
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

if (scrollSkies.length && !reducedMotion.matches) {
  let cloudFrame;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateClouds = () => {
    cloudFrame = undefined;
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    scrollSkies.forEach((sky) => {
      const rect = sky.getBoundingClientRect();
      if (rect.bottom < -180 || rect.top > viewportHeight + 180) return;

      const sectionCenter = rect.top + rect.height / 2;
      const distance = viewportCenter - sectionCenter;
      const setCloudPosition = (name, xSpeed, ySpeed, maxX, maxY) => {
        sky.style.setProperty(`--cloud-${name}-x`, `${clamp(distance * xSpeed, -maxX, maxX).toFixed(1)}px`);
        sky.style.setProperty(`--cloud-${name}-y`, `${clamp(distance * ySpeed, -maxY, maxY).toFixed(1)}px`);
      };

      setCloudPosition("one", .15, -.035, 150, 42);
      setCloudPosition("two", -.1, .045, 120, 52);
      setCloudPosition("three", .07, -.025, 90, 34);
      setCloudPosition("four", -.045, .02, 62, 26);
    });
  };

  const requestCloudUpdate = () => {
    if (cloudFrame === undefined) cloudFrame = requestAnimationFrame(updateClouds);
  };

  window.addEventListener("scroll", requestCloudUpdate, { passive: true });
  window.addEventListener("resize", requestCloudUpdate);
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

document.querySelectorAll("[data-intake-form]").forEach((form) => {
  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector('button[type="submit"]');
  const submitLabel = submitButton.innerHTML;
  const endpoint = form.dataset.endpoint;
  const mailto = form.action.startsWith("mailto:") ? form.action : null;

  const showStatus = (html, isError) => {
    status.hidden = false;
    status.innerHTML = html;
    status.classList.toggle("is-error", Boolean(isError));
  };

  const labeledValues = () =>
    [...form.querySelectorAll(".form-field")]
      .map((field) => {
        const label = field.querySelector("label");
        const control = field.querySelector("input, textarea, select");
        if (!control || !control.value) return null;
        return `${label.textContent.replace(/\s*·\s*optional\s*$/i, "").trim()}: ${control.value}`;
      })
      .filter(Boolean)
      .join("\n");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (form.querySelector('[name="_gotcha"]').value) {
      form.classList.add("is-sent");
      showStatus("Thank you. Your note has been received.");
      return;
    }

    if (!endpoint) {
      const subject = encodeURIComponent(form.dataset.subject);
      const body = encodeURIComponent(labeledValues());
      window.location.href = `${mailto}?subject=${subject}&body=${body}`;
      showStatus("Your email application should open with your message prepared. If it does not, email us directly and we will pick it up from there.");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.classList.add("is-sent");
      showStatus("Thank you. Your note has been received and will be reviewed directly.");
    } catch {
      submitButton.disabled = false;
      submitButton.innerHTML = submitLabel;
      showStatus(
        'Something went wrong sending your note. Please try again, or email <a href="mailto:inquiries@hartnettcapital.com">inquiries@hartnettcapital.com</a> directly.',
        true,
      );
    }
  });
});
