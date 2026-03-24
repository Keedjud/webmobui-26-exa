customElements.define('view-categories', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="section-header">
        <h1 id="page-title"></h1>
      </div>
      <div class="grid" id="genre-list"></div>
    `
  }
})
