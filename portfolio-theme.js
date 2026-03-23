(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var KEY = "zk-portfolio-theme";
  var stored = localStorage.getItem(KEY);

  if (stored !== "dark" && stored !== "light") {
    stored = "light";
    localStorage.setItem(KEY, "light");
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  apply(stored);

  if (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
    });
  }
})();
