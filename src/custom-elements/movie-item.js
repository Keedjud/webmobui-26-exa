customElements.define("movie-item", class extends HTMLElement {
    static observedAttributes = ['title', 'poster_url', 'description']

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback() {
        this.render()
    }

    render() {
        const title = this.getAttribute('title')
        const poster_url = this.getAttribute('poster_url')
        const description = this.getAttribute('description')

        this.innerHTML = `
        <article class="card movie-item">
          <a href="">
            <img class="poster" src="${poster_url}" />
          </a>
          <div class="card-body stack">
            <div>
              <h3>${title}}</h3>
              <p>${description}}</p>
            </div>
            <div class="section-header">
              <a class="primary-button" href="">Détails</a>
    
              <button class="favorite-button icon-button" aria-label="Favori">
                <span class="material-icons">thumb_up</span>
                <span class="material-icons">thumb_up_off_alt</span>
              </button>
            </div>
          </div>
      </article>
      `
    }
})
