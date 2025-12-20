<script setup lang="ts">

import Badge from "~/components/usable/Badge.vue";
import Button from "~/components/usable/Button.vue";
</script>

<template>
  <section id="first-section-container">
    <div id="first-section-content">
      <div id="first-section-badge-container">
        <badge class="primary-color-override">Music</badge>  <badge class="secondary-color-override">Computer science</badge>
      </div>
      <h1>Découvrez mon<br><span class="synth-wave-color large">Portfolio</span></h1>
      <p class="description-content">Ce site a pour but de vous montrer mes différentes réalisations informatiques que j'ai pu réaliser tout au long de mon parcours,
      mais aussi parler un peu de moi et mes passions</p>
      <div id="buttons-section-container">
        <Button icon-name="weui:arrow-filled" variant="secondary" link-redirect="https://google.com/">Découvrir</Button>
        <Button icon-name="material-symbols:search" variant="primary" link-redirect="https://google.com/">Me contacter</Button>
      </div>
    </div>
  </section>


</template>

<style scoped>
@import url("~/assets/css/primary-section.css");
</style>