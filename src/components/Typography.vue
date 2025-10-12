<template>
  <component
    :is="tag"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Only prop: as
const props = withDefaults(
  defineProps<{
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  }>(),
  {
    as: 'h1'
  }
)

// Dynamic tag
const tag = computed(() => props.as)


</script>




