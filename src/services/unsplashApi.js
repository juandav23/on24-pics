// services/unsplashApi.js
import axios from 'axios'

const AppId = '608432'
const ACCESS_KEY = 'tw_frqN_cF36-f2URssGkM51CjSZOspKX3I9J1XH-j4'
const SECRET_KEY = 'flGO3vz2w2FSBRx2UXMDujpF7hMtqSFa3Hth8ky39A8'
const baseURL = 'https://api.unsplash.com/'

const client = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
})

export const searchImages = async (query, perPage = 15, page = 1) => {
  try {
    const response = await client.get('search/photos', {
      params: {
        query,
        per_page: perPage,
        page
      }
    })
    return response.data
  } catch (error) {
    console.error('Error al realizar la búsqueda en Unsplash:', error)
    return null
  }
}
