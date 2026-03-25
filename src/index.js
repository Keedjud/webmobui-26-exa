import './custom-elements/movie-footer.js'
import './custom-elements/category-cover.js'

import './views/view-categories.js'
import './views/view-category-movies.js'

const main = document.querySelector('main')

function router() {
  const hash = window.location.hash || '#home'
  const parts = hash.split('/')

  if (parts[0] == '#home')
    main.innerHTML = '<view-home><h1>Home</h1></view-home>'

  else if (parts[0] == '#categories' && !parts[1])
    main.innerHTML = `<view-categories />`

  else if (parts[0] == '#categories' && parts[1])
    main.innerHTML = `<view-category-movies category-id="${parts[1]}" />`

}

window.addEventListener('hashchange', router)
router()
