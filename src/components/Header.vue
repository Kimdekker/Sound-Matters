<script setup lang="ts">
  import Typography from '../components/Typography.vue'


  import { ref } from 'vue'

  const sliderValue = ref(3) // default position

</script>

<template class="flex flex-col">
    <Typography as="h1" class="order-2 text-center flex flex-wrap justify-center" alt="Sound Matters">
      <div>
        <span>S</span>
        <span>o</span>
        <span>u</span>
        <span>n</span>
        <span>d</span>
      </div>
      <div>
        <span class="pl-10">M</span>
        <span class="ml-3">a</span>
        <span class="-ml-3">t</span>
        <span class="-ml-3">t</span>
        <span>e</span>
        <span>r</span>
        <span class="pr-10">s</span>
      </div>
    </Typography>

    <Typography as="h3" class="order-3 box-border p-2 text-center w-lg">
        On a Journey to Protect Our Ears and Celebrate the Joy of Sound
    </Typography>

    <Typography as="span" class="order-1 text-center">
        the Fusion Initiative
    </Typography>
    

      <div class="q-pa-lg">
    <q-slider
      v-model="sliderValue"
      color="orange"
      thumb-color="purple"
      markers
      :min="0"
      :max="6"
      vertical
      class="slider-with-s"
    />
  </div>

</template>


<style>
  h1 > div > span {
    font-family: 'Sixtyfour', sans-serif;
    font-weight: 100;
    font-size: 6.875rem;
    text-shadow: var(--color-shadow) .05em 0 20px;;
    text-transform: uppercase;
    display: inline;
  }

  .slider-with-s .q-slider__thumb::after {
    content: 'S';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    h1 > div > span {
      font-size: 5rem !important;
      padding: 0 !important;
    }
  }


    @media (max-width: 540px) {
    h1 > div > span {
      font-size: 3.3rem !important;
    }
    h3 {
      width: 100% !important;
    }
  }
</style>