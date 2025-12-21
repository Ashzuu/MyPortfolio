<script setup lang="ts">

import Field from "~/components/usable/Field.vue";
</script>

<template>
  <section id="music-section-container">
    <h2 class="synth-wave-color">Evan DYNAK</h2>
    <p class="secret-text">(Désolé ça fait très égocentrique mais c'est pour le référencement)</p>
    <div class="about-me-section-container">
      <div class="about-me-info-part">
        <Field titre="BUT Informatique" description="IUT de Dijon" icon-name="prime-book" color="secondary"/>
        <Field titre="Mes langages favoris" description="TypeScript, Java" icon-name="humbleicons:code" color="secondary"/>
        <Field titre="Spécialités" description="Création de site web (vitrines, gestion)" icon-name="fluent-mdl2:live-site" color="secondary"/>
      </div>
      <hr>
      <div class="about-me-music-part">
        <Field titre="Contrebasse" description="Instrument principal" icon-name="mdi:music-clef-bass" color="primary"/>
        <Field titre="Autres instruments" description="Accordéon, basse électrique" icon-name="streamline-freehand:modern-music-bass-guitar" color="primary"/>
        <Field titre="Stock, Oblique" description="Les orchestres où je joue" icon-name="arcticons:symfonium-note" color="primary"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("~/assets/css/about-section.css");
</style>