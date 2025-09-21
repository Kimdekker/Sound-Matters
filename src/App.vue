<script setup lang="ts">
  // Import global components or composables here if needed
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col items-center justify-center">
    <header class="p-4 text-xl font-bold">My Vue + TypeScript App</header>

    <main class="flex-1 w-full max-w-4xl p-4">
      <!-- Drop your components here -->
      <router-view />
    </main>

    <footer class="p-4 text-sm text-gray-500">© {{ new Date().getFullYear() }} My App</footer>
  </div>
</template>
