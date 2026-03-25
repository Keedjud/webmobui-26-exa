customElements.define("category-cover", class extends HTMLElement {
    static observedAttributes = ['href', 'name', 'nbmovies']

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback() {
        this.render()
    }

    render() {
      this.innerHTML = `
      <article class="card category-card ">
        <a class="card" href="${this.getAttribute("href")}">
          <div class="card-body">
            <span class="tag">Catégorie</span>
            <h3>${this.getAttribute("name")}</h3>
            <p>${this.getAttribute("nbmovies")} film(s)</p>
          </div>
        </a>
      </article>
      `
    }
})
