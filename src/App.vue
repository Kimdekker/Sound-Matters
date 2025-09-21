<script setup lang="ts">
  // Import global components or composables here if needed
  import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <main class="flex-1 w-full max-w-4xl p-4">
    <HelloWorld msg="You did it!" />

    <!-- Drop your components here -->
    <router-view />
  </main>

  <footer class="p-4 text-sm text-gray-500">
    © {{ new Date().getFullYear() }} Sound Matters by The Fusion Initiative
  </footer>
</template>
