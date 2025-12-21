(function () {
  // Buscador que filtra por texto en chips + títulos de cards
  const input = document.querySelector('[data-search="input"]');
  const clearBtn = document.querySelector('[data-search="clear"]');
  const counter = document.querySelector('[data-search="counter"]');

  if (!input) return;

  const items = Array.from(document.querySelectorAll('[data-item]'));

  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // quita acentos
      .trim();
  }

  function applyFilter() {
    const q = normalize(input.value);
    let shown = 0;

    items.forEach((el) => {
      const text = normalize(el.getAttribute("data-item") || el.textContent);
      const ok = q === "" ? true : text.includes(q);
      el.classList.toggle("is-hidden", !ok);
      if (ok) shown++;
    });

    if (counter) counter.textContent = `${shown} resultado(s)`;
  }

  input.addEventListener("input", applyFilter);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      input.focus();
      applyFilter();
    });
  }

  // Atajo: Ctrl+K / Cmd+K para enfocar buscador
  window.addEventListener("keydown", (e) => {
    const isMac = navigator.platform.toLowerCase().includes("mac");
    const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;

    if (ctrlOrCmd && e.key.toLowerCase() === "k") {
      e.preventDefault();
      input.focus();
    }
    if (e.key === "Escape") {
      // Escape limpia
      if (document.activeElement === input && input.value.trim() !== "") {
        input.value = "";
        applyFilter();
      }
    }
  });

  // Inicial
  applyFilter();
})();
