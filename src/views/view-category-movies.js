customElements.define('view-category-movies', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="section-header">
        <h1 id="page-title"></h1>
      </div>
      <div class="grid" id="movie-list"></div>
    `
  }
})
