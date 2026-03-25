customElements.define('view-categories', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="section-header">
        <h1 id="page-title">Catégories</h1>
      </div>
      <div class="grid" id="category-list"></div>
    `
  }
})
