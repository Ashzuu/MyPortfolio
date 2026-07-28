<script setup lang="ts">

import Button from "~/components/usable/Button.vue";
</script>

<template>
  <div id="wip-container">
    <div id="wip-content">
      <NuxtImg id="wip-image" src="/img/illustrations/build.svg" alt="Page en construction"></NuxtImg>
      <h1 class="synth-wave-color">Page en construction...</h1>
      <p>Mince, il semblerait bien que cette page ne soit pas encore développée... N'hésitez pas à solliciter ce cher développeur pour qu'il travaille un peu plus !</p>
      <Button link-redirect="/" variant="primary">Retour à l'accueil</Button>
    </div>

  </div>
</template>

<style scoped>
  @import url("~/assets/css/home-page/projects/wip.css");
</style>