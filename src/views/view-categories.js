import { getCategories } from '../api.js'

customElements.define('view-categories', class extends HTMLElement {
  async connectedCallback() {
    const categories = await getCategories();

    this.innerHTML = `
      <div class="section-header">
        <h1 id="page-title">Catégories de films (${categories.length})</h1>
      </div>
      <div class="grid" id="category-list"></div>
    `
    const grid = this.querySelector('#category-list')

    categories.forEach(category => {
      grid.innerHTML += `<category-cover href="#categories/${category.id}" id="${category.id}" name="${category.name}" nbmovies="${category.count}" />`
    });
  }
})
