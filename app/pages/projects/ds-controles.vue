<script setup lang="ts">
  import BaseComponent from "~/components/projects/BaseComponent.vue";
  import {ProjectService} from "~/services/ProjectService";

  const service: ProjectService = new ProjectService();
</script>

<template>
  <BaseComponent :project="service.specificProject(6)">
    <template #language-description>
      <p>Le choix HTML/CSS & JavaScript, donc web "natif" s'est porté sur le fait que :</p>

      <ol>
        <li>Le client possédait déjà un hébergement web standard, avec serveur sans framework ni interpréteur / compilateur d'autres langages. Si nous voulions changer, il aurait fallu aussi se renseigner sur la façon de changer l'hébergement, potentiellement le coût d'hébergement, or la solution HTML / CSS & JS pour un site vitrine convenait parfaitement.</li>
        <li>Pas de nécessité à des opérations complexes : s'agissant d'un site vitrine avec peu d'animation, pas de logique métier particulière, aucune rétention d'informations, que ce soit sur la fréquentation ou l'utilisateur du site, il n'était pas nécessaire de partir sur un framework / autres langages.</li>
      </ol>
    </template>
    <template #detailled-description>
      <p>DS Contrôles est un organisme d'inspection des installations électriques & thermographie infrarouge. L'objectif de ce site est de promouvoir son activité et d'accroitre sa clientèle.</p>

      <p>Pour se faire, nous sommes partis sur plusieurs axes primordiaux à respecter :</p>
      <ul>
        <li>Le site se devait responsive, c'est à dire accessible pour tous types d'écrans et d'appareils</li>
        <li>Il devait être bien référencé, que ce soit pour les mots clés ou la région de recherce, sur les moteurs de recherches traditionnels tels que Google / Bing.</li>
        <li>Il devait être simple d'utilisation, fluide, et correspondre à l'identité de l'entreprise.</li>
      </ul>
    </template>
  </BaseComponent>
</template>

<style scoped>

</style>