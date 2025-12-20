<script setup lang="ts">
  defineProps({
    iconName: {
      type:String,
      default:""
    },
    linkRedirect: {
      type:String,
      required:true
    },
    variant: {
      type:String,
      default:""
    }
  })
</script>

<template>
  <a class="button" :href="linkRedirect" >
    <span class="button-content" :class="variant">
      <slot/>
      <Icon v-if="iconName" :name="iconName" class="btn-icon"/>
    </span>
  </a>
</template>

<style scoped>
@import url("~/assets/css/components/button.css");
</style>