const API_BASE_URL = 'https://webmobui26-946d68276cc8.herokuapp.com'

async function fetchJson(path) {
  const data = await fetch(`${API_BASE_URL}${path}`).then((response) => response.json())
  return data
}

export async function getCategories() {
  return await fetchJson('/api/categories')
}

export async function getMoviesByCategory(categoryId) {
  return await fetchJson(`/api/categories/${categoryId}/movies`)
}
