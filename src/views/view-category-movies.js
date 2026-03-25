import { getCategories, getMoviesByCategory } from '../api.js'

customElements.define('view-category-movies', class extends HTMLElement {
  static observedAttributes = ['category-id']

  async connectedCallback() {
    const categoryId = this.getAttribute('category-id')
    const movies = await getMoviesByCategory(categoryId)

    this.innerHTML = `
      <div class="section-header">
        <h1 id="page-title">[Nom de la catégorie] (${movies.length})</h1>
      </div>
      <div class="grid" id="movie-list"></div>
    `

    const grid = this.querySelector('#movie-list')

    movies.forEach(movie => {
      const movieItem = document.createElement('movie-item')
      movieItem.setAttribute('title', movie.title)
      movieItem.setAttribute('poster_url', movie.poster_url)
      movieItem.setAttribute('description', movie.description)
      grid.append(movieItem)
    });
  }
})
