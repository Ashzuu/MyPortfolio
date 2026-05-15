<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: () => []
  }
});

const currentIndex = ref(0);

const nextSlide = () => {
  if (currentIndex.value === props.images.length - 1) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = props.images.length - 1;
  } else {
    currentIndex.value--;
  }
};

const getSlideClass = (index:any) => {
  const total = props.images.length;
  let state:string = 'hidden';

  if (index === currentIndex.value) {
    state = 'active';
  }

  if (index === currentIndex.value - 1 || (currentIndex.value === 0 && index === total - 1)) {
    state = 'prev';
  }

  if (index === currentIndex.value + 1 || (currentIndex.value === total - 1 && index === 0)) {
    state = 'next';
  }

  return state;
};
</script>

<template>
  <div class="carousel-container">
    <button class="carousel-btn left" @click="prevSlide">❮</button>

    <div class="carousel-track">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-slide"
          :class="getSlideClass(index)">
        <img :src="image" alt="Image du carrousel">
      </div>
    </div>

    <button class="carousel-btn right" @click="nextSlide">❯</button>
  </div>
</template>

<style scoped>
  @import url('~/assets/css/components/caroussel.css');
</style>