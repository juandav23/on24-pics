<template>
  <div>
    <h1 class="text-3xl font-bold">Unsplash Test</h1>
    <div class="mx-auto flex justify-between">
      <input
        v-model="searchQuery"
        placeholder="Search..."
        class="form-input w-full p-2 border border-gray-300 rounded mr-5"
      />
      <button @click="search" class="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
    </div>

    <div class="mt-4">
      <button
        @click="uploadSelectedImages"
        class="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Send to Server
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-4">
      <div v-for="result in photos.results" :key="result.id">
        <img :src="result.urls.small" :alt="result.alt_description" class="rounded shadow" />
        <div class="flex items-center mt-2">
          <input type="checkbox" v-model="selectedPhotos" :value="result" class="form-checkbox" />
          <span class="ml-2 text-gray-700">{{ result.alt_description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { searchImages } from './../services/unsplashApi'

export default {
  setup() {
    const searchQuery = ref('')
    const photos = ref([])
    const selectedPhotos = ref([])

    const search = async () => {
      const data = await searchImages(searchQuery.value)
      photos.value = data ? data : []
    }

    async function uploadSelectedImages() {
      for (let photo of selectedPhotos.value) {
        const response = await fetch(photo.urls.full)
        const imageBlob = await response.blob()

        console.info(imageBlob)
      }
    }

    return {
      searchQuery,
      photos,
      search,
      selectedPhotos,
      uploadSelectedImages
    }
  }
}
</script>
