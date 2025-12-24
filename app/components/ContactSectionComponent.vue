<script setup lang="ts">

</script>

<template>
  <section id="contact-section-container">
    <h2 class="synth-wave-color">Besoin de me contacter ?</h2>
    <div class="service-proposal">
      <p class="main-text">
        Vous avez un projet de site web ? Une idée à développer ou simplement une question ?
      </p>
      <div class="coming-soon-box">
        <span class="info-icon"><Icon name="material-symbols:info-outline"/></span>
        <p>
          Un site dédié à mes services de conception web sera bientôt en ligne pour plus de détails.
          <br>En attendant, n'hésitez pas à me solliciter directement !
        </p>
      </div>
    </div>

    <div class="contact-grid">
      <a href="mailto:evan.dynak@bbox.fr" class="contact-card primary-glow">
        <Icon name="ic:outline-email" class="card-icon"/>
        <div class="card-text">
          <h3>Email</h3>
        </div>
      </a>

      <a href="https://discord.com/users/982284761961754664" target="_blank" class="contact-card secondary-glow">
        <Icon name="ic:baseline-discord" class="card-icon"/>
        <div class="card-text">
          <h3>Discord</h3>
        </div>
      </a>

      <a href="https://instagram.com/dyn.evan" target="_blank" class="contact-card secondary-glow">
        <Icon name="mdi:instagram" class="card-icon"/>
        <div class="card-text">
          <h3>Instagram</h3>
        </div>
      </a>
    </div>

    <div class="references-section">
      <p>Retrouvez les sites des orchestres dans lesquels je joue</p>
      <div class="ref-links">
        <a href="https://www.oblique-orchestre.com/" target="_blank" class="ref-link">Orchestre Oblique <Icon name="material-symbols:arrow-outward"/></a>
        <a href="https://stock-orchestre.fr/" target="_blank" class="ref-link">Orchestre STOCK <Icon name="material-symbols:arrow-outward"/></a>
      </div>
    </div>

  </section>
  <a class="legal-mentions" href="/legals">Mentions légales</a>
</template>

<style scoped>
@import url("~/assets/css/contact-section.css");
</style>