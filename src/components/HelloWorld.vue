<script setup lang="ts">
  import { ref } from 'vue';
  defineProps<{ msg: string }>();

  const count = ref(0);
</script>

<template>
  <h1 class="text-3xl font-bold mb-6">{{ msg }}</h1>

  <div class="bg-white shadow-lg rounded-2xl p-6 max-w-sm mx-auto text-center">
    <button
      type="button"
      @click="count++"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
    >
      count is {{ count }}
    </button>
  </div>
</template>
