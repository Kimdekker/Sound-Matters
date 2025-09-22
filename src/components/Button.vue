<template>
  <button
    type="button"
    :class="buttonClasses"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    primary?: boolean
    size?: 'small' | 'medium' | 'large'
  }>(),
  { primary: false }
)

const emit = defineEmits<{
  (e: 'click', id: number): void
}>()

// Tailwind classes based on props
const buttonClasses = computed(() => {
  const base = 'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  // Primary / Secondary
  const variant = props.primary
    ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
    : 'bg-gray-300 text-black hover:bg-gray-400 focus:ring-gray-300'

  // Size
  const size = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[props.size || 'medium']

  return [base, variant, size].join(' ')
})


const onClick = () => {
  emit('click', 1)
}
</script>
