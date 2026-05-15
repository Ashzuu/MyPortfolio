<script setup lang="ts">
  import BaseComponent from "~/components/projects/BaseComponent.vue";
  import {ProjectService} from "~/services/ProjectService";
  import Caroussel from "~/components/usable/Caroussel.vue";

  const service: ProjectService = new ProjectService();
  const imgs = [];
</script>

<template>
  <BaseComponent :project="service.specificProject(2)">
    <template #language-description>
      <p>La gestion rigoureuse des données est au cœur de cette API :</p>
      <ul>
        <li>Java : Assure le traitement logique et la sécurité de l'application côté serveur.</li>
        <li>PostgreSQL : Une base de données relationnelle extrêmement puissante, idéale pour structurer de manière cohérente des centaines d'exercices, de groupes musculaires et d'équipements sportifs.</li>
      </ul>
    </template>
    <template #framework-description>
      <p>Côté serveur, l'accent a été mis sur l'optimisation et la modernité :</p>
      <ul>
        <li>Spring Boot : Facilite grandement la configuration et le déploiement de l'architecture REST.</li>
        <li>Quarkus : Un framework Java de nouvelle génération, conçu pour le Cloud. Il offre des temps de démarrage ultra-rapides et une consommation de mémoire minimale, ce qui est parfait pour ce type de microservice.</li>
      </ul>
    </template>
    <template #detailled-description>
      <p>L'API GymExercises est née d'un besoin de centraliser et de distribuer des données fiables sur la musculation. Elle recense de manière exhaustive les exercices de fitness et de musculation existants.</p>
      <p>C'est un outil qui se destine à être le "moteur" en arrière-plan d'applications tierces (comme des planificateurs d'entraînement ou des tableaux de bord). Elle permet de filtrer facilement les exercices par muscle ciblé, par difficulté ou par matériel requis.</p>
    </template>
    <template #caroussel>
      <Caroussel :images="imgs"/>
    </template>
  </BaseComponent>
</template>

<style scoped>

</style>