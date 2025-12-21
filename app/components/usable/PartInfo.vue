<script setup lang="ts">
defineProps({
  nameIcon: {
    type: String,
    required:true
  },
  libelle: {
    type:String,
    required:true
  }
})
</script>

<template>
  <div class="about-me-items">
    <div class="item-container">
      <Icon class="item" :name="nameIcon"/>
      <p>{{libelle}}</p>
    </div>
    <div class="about-me-info-content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/components/part-info.css");
</style>