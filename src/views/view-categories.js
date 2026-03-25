import { getCategories } from '../api.js'

customElements.define('view-categories', class extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = `
      <div class="section-header">
        <h1 id="page-title">Catégories</h1>
      </div>
      <div class="grid" id="category-list"></div>
    `
    const grid = this.querySelector('#category-list')

    const categories = await getCategories();

    categories.forEach(category => {
      grid.innerHTML += `<category-cover href="#categories/${category.id}" name="${category.name}" nbmovies="${category.count}" />`
    });
  }
})
