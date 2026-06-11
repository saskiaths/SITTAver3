async function loadTemplates() {
  const files = [
    "templates/stock-filter.html",
    "templates/stock-form.html",
    "templates/stock-table.html",
    "templates/stock-row.html",
    "templates/status-badge.html",
    "templates/app-modal.html",

    "templates/tracking-search.html",
    "templates/order-form.html",
    "templates/package-detail.html",
    "templates/progress-form.html",
    "templates/tracking-list.html",
    "templates/tracking-card.html",
    "templates/tracking-timeline.html",
  ];

  const container = document.createElement("div");

  container.id = "template-container";

  container.style.display = "none";

  document.body.appendChild(container);

  for (const file of files) {
    const response = await fetch(file);

    const html = await response.text();

    container.insertAdjacentHTML("beforeend", html);
  }
}
