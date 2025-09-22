<script setup lang="ts">
  import Button from './components/Button.vue'

</script>

<template>
  <main>

    <Button label="Button" primary size="medium" />
    <Button label="Secondary button" size="medium" />


  </main>

  <footer class="p-4 text-sm text-gray-500">
    © {{ new Date().getFullYear() }} Sound Matters by The Fusion Initiative
  </footer>
</template>
