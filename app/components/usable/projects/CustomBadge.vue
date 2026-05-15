<script setup lang="ts">
  defineProps({
    content: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      required: false,
      default: 'base'
    }
  });
</script>

<template>
  <div class="custom-badge-container" :class="style">
    <span class="text-badge">{{content}}</span>
  </div>
</template>

<style scoped>
@import url(~/assets/css/components/custom-badge.css);
</style>