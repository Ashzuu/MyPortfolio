<script setup lang="ts">
defineProps({
  titre: {
    type:String,
    required:true
  },
  description: {
    type:String,
    required:true
  },
  iconName: {
    type:String,
    required: true
  },
  color: {
    type:String,
    required:true
  }
})
</script>

<template>
  <div class="field-container " :class="color">
    <div class="icon-container">
      <Icon class="field-icon" :name="iconName"/>
    </div>
    <div class="field-content">
      <h4>{{titre}}</h4>
      <p>{{description}}</p>
    </div>

  </div>
</template>

<style scoped>
@import url("~/assets/css/components/field.css");
</style>