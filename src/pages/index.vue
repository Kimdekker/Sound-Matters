<script setup lang="ts">
  import Header from '../components/Header.vue'


</script>

<template>
  <main class="flex flex-col justify-center items-center h-screen">

    <Header />

  </main>

</template>


<style>
  h1 > div > span {
    font-family: 'Sixtyfour', sans-serif;
    font-weight: 100;
    font-size: 6.875rem;
    text-shadow: var(--color-shadow) .05em 0 20px;;
    text-transform: uppercase;
  }
</style>