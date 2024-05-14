<script setup>
//MMJrfF4vFbehT22AiXv44KFwGqB9iSeeM3r6LD6dyU1R8RCsMGJvie21
</script>

<template>
  <main class="flex">
    <div class="w-1/2 px-7">
      <!-- Contenido de pixels -->
      <PexelsTest />
    </div>
    <div class="w-1/2">
      <UnsplashTest />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
