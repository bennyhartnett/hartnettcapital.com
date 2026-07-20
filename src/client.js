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
