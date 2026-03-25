customElements.define('movie-footer', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="footer-nav">
        <a href="#home">Accueil</a>
        <a href="#categories">Categories</a>
      </nav>
    `

    this.hashChange = this.hashChange.bind(this)
    window.addEventListener('hashchange', this.hashChange)
    this.hashChange()
  }

  hashChange() {
    const current = (window.location.hash || '#home').split('/')[0]
    this.querySelector('a.active')?.classList.remove('active')
    this.querySelector(`a[href="${current}"]`)?.classList.add('active')
  }
})
