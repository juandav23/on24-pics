import axios from 'axios'

const API_KEY = 'MMJrfF4vFbehT22AiXv44KFwGqB9iSeeM3r6LD6dyU1R8RCsMGJvie21'
const baseURL = 'https://api.pexels.com/v1/'

const client = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: API_KEY
  }
})

export const searchImages = async (query, perPage = 15, page = 1) => {
  try {
    const response = await client.get(`search`, {
      params: {
        query,
        per_page: perPage,
        page
      }
    })
    return response.data
  } catch (error) {
    console.error('Error al realizar la búsqueda en Pexels:', error)
    return null
  }
}
