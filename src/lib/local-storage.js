const LIKES_KEY = 'likes'

// Helpers pour l'intéraction avec le localstorage en JSON
const setItem = (id, value) => localStorage.setItem(id, JSON.stringify(value))

const getItem = (id) => localStorage.getItem(id) && JSON.parse(localStorage.getItem(id))


export function getLikes() {
  return []
}

export function isLiked(movie) {
  return false
}

export function addLike(movie) {
}

export function removeLike(movie) {
}
