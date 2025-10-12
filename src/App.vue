<script setup lang="ts">
  import Button from './components/Button.vue'
  import Typography from './components/Typography.vue'

</script>

<template>
  <main>

    <Button label="Button" primary size="medium" />
    <Button label="Secondary button" size="medium" />

    <Typography as="h1">Heading 1</Typography>
    <Typography as="h2">Heading 2</Typography>
    <Typography as="h3">Heading 3</Typography>
    <Typography as="h4">Heading 4</Typography>
    <Typography as="h5">Heading 5</Typography>
    <Typography as="h6">Heading 6</Typography>
    <Typography as="p">Paragraph</Typography>
    <Typography as="span">Span</Typography>

  </main>

  <footer class="p-4 text-sm text-gray-500">
    © {{ new Date().getFullYear() }} Sound Matters by The Fusion Initiative
  </footer>
</template>
