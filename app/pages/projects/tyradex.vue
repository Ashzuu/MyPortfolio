<script setup lang="ts">
  import BaseComponent from "~/components/projects/BaseComponent.vue";
  import {ProjectService} from "~/services/ProjectService";
  import Caroussel from "~/components/usable/Caroussel.vue";

  const service: ProjectService = new ProjectService();
  const imgs:string[] = ["/img/tyradex/img.png","/img/tyradex/img_1.png", "/img/tyradex/img_2.png", "/img/tyradex/img_3.png"];
</script>

<template>
  <BaseComponent :project="service.specificProject(1)">
    <template #language-description>
      <p>Pour ce projet, un éventail technologique complet a été utilisé pour répondre aux différents besoins de l'API :</p>
      <ul>
        <li>Java : Choisi pour sa robustesse, sa performance et sa fiabilité dans la création du back-end.</li>
        <li>TypeScript : Utilisé pour garantir un code typé et structuré, limitant les erreurs lors du développement et facilitant la maintenance</li>
        <li>Neo4J : Une base de données orientée graphes, parfaitement adaptée pour gérer les relations complexes de l'univers Pokémon (évolutions, faiblesses, types multiples).</li>
      </ul>
    </template>
    <template #framework-description>
      <p>Deux frameworks majeurs structurent Tyradex :</p>
      <ul>
        <li>Spring Boot : Le standard industriel en Java pour créer rapidement une API REST solide, performante et sécurisée.</li>
        <li>Angular : Un framework front-end complet qui offre une architecture robuste pour la documentation et l'interface utilisateur du site.</li>
      </ul>
    </template>
    <template #detailled-description>
      <p>Tyradex est une API Pokémon complète et gratuite, entièrement en français. Elle s'adresse aux développeurs souhaitant intégrer des données Pokémon dans leurs propres applications sans avoir à traduire ou adapter des sources anglophones.</p>
      <p>Créée en collaboration avec Yarkis, l'API permet de récupérer facilement des fiches détaillées, des formes régionales ou des listes par générations. Les données, très riches, sont issues de sources fiables telles que Poképédia et Serebii. L'outil s'accompagne d'un Pokédex interactif et d'une documentation claire pour faciliter son utilisation au maximum.</p>
    </template>
    <template #caroussel>
      <Caroussel :images="imgs"/>
    </template>
  </BaseComponent>
</template>

<style scoped>

</style>