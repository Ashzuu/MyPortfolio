<script setup lang="ts">
import Button from "~/components/usable/Button.vue";
</script>

<template>
  <section id="legal-section-container">
    <h2 class="synth-wave-color">Mentions légales</h2>
    <Button link-redirect="/" variant="secondary" icon-name="material-symbols-light:home-rounded">Accueil</Button>
    <div class="legal-content">
      <h3>Éditeur du site</h3>
      <p>
        Nom / Raison sociale : <strong>Evan DYNAK</strong><br>
        Adresse : <strong>Magny-Sur-Tille</strong><br>
        Email : <a href="mailto:evan.dynak@bbox.fr">evan.dynak@bbox.fr</a>
      </p>

      <h3>Directeur de la publication</h3>
      <p>
        <strong>Evan DYNAK</strong>
      </p>

      <h3>Hébergeur</h3>
      <p>
        Hébergeur : <strong>Hébergé localement</strong>
      </p>

      <h3>Propriété intellectuelle</h3>
      <p>
        L'ensemble des contenus (textes, images, logos, vidéos, sons, etc.) publiés sur ce site est protégé par le droit d'auteur et la propriété intellectuelle. Toute reproduction, représentation, modification, adaptation ou exploitation partielle ou totale des contenus est interdite sans autorisation écrite préalable de l'éditeur.
      </p>

      <h3>Données personnelles & vie privée</h3>
      <p>
        Les données personnelles collectées via les formulaires du site sont utilisées uniquement pour répondre aux demandes et ne seront pas conservées au-delà de la durée nécessaire. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ces droits, contactez : <a href="mailto:evan.dynak@bbox.fr">evan.dynak@bbox.fr</a>.
      </p>

      <h3>Responsabilité</h3>
      <p>
        L'éditeur met en œuvre tous les moyens raisonnables pour assurer l'exactitude des informations publiées, mais ne saurait garantir l'exhaustivité ni l'absence d'erreurs. L'éditeur décline toute responsabilité en cas d'erreur ou d'interprétation des informations disponibles sur le site.
      </p>

      <h3>Liens externes</h3>
      <p>
        Le site peut contenir des liens vers des sites externes. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
      </p>

      <h3>Contact</h3>
      <p>
        Pour toute question relative aux mentions légales, contactez : <a href="mailto:evan.dynak@bbox.fr">evan.dynak@bbox.fr</a>
      </p>

      <p class="note">Dernière mise à jour : <strong>21/12/25</strong></p>
    </div>
  </section>
</template>

<style scoped>
@import url("~/assets/css/mentions-legales.css");
</style>

