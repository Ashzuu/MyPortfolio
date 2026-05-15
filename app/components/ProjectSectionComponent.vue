<script setup lang="ts">
import Card from "~/components/usable/Card.vue";
import type {Project} from "~/models/Project";

const projects: Project[] = [
  {
    id:1,
    name:"Tyradex",
    path:"tyradex",
    description:"Mon tout premier projet ! V3 actuellement en bêta.",
    urlWebsite:"https://tyradex.app/",
    urlImage:"/img/tyradex_illustration.png",
    urlGithub:"https://github.com/TyradexTeam/Tyradex",
    status:"En cours",
    languages:["Java", "TypeScript", "Neo4J"],
    frameworks: ["Spring Boot", "Angular"]
  },
  {
    id:2,
    name:"GymExercisesAPI",
    path:"gym-api",
    description:"Une API qui recense l'ensemble des exercices de musculation",
    urlGithub:"https://github.com/Ashzuu/GymExercisesAPI",
    status:"En cours",
    languages:["Java", "PostgreSQL"],
    frameworks: ["Spring Boot", "Quarkus"]
  },
  {
    id:3,
    name:"MusculAshzboard",
    path:"musculashz",
    description:"Un petit projet pour une (encore) autre passion : la musculation.",
    urlGithub:"https://github.com/Ashzuu/MusculAshzboard",
    status:"En cours",
    languages:["TypeScript"],
    frameworks: ["Angular"]
  },
  {
    id:4,
    name:"Site de vente de solutions",
    path:"commercial-website",
    description:"Site commercial ou je fais la promotion de mes services",
    urlWebsite:"https://website.evandynak.me/",
    urlImage:"/img/commercial_illustration.png",
    urlGithub:"https://github.com/Ashzuu/CommercialWebsite",
    status:"Terminé",
    languages:["Java", "TypeScript", "Neo4J"],
    frameworks: ["Spring Boot", "Angular"]
  },
  {
    id:5,
    name:"Mon Portfolio",
    path:"portfolio",
    description:"Le site où vous êtes actuellement !",
    urlWebsite:"https://evandynak.me/",
    urlImage:"/img/portfolio_illustration.png",
    urlGithub:"https://github.com/Ashzuu/MyPortfolio",
    status:"Terminé",
    languages:["TypeScript"],
    frameworks: ["Nuxt.Js"]
  },
  {
    id:6,
    name:"DS Contrôles",
    path:"ds-controles",
    description:"Site vitrine pour professionnel",
    urlWebsite:"https://dscontroles.com",
    urlImage:"/img/dscont_illustration.png",
    urlGithub:"https://github.com/TyradexTeam/Tyradex",
    status:"Terminé",
    languages:["HTML/CSS", "JavaScript"],
    frameworks: []
  }
]
</script>

<template>
  <main id="project-section-container">
    <h2 id="project-title" class="synth-wave-color">Mes Projets</h2>
    <div class="cards-container">
      <Card v-for="project in projects" :key="project.id" :name="project.name" :path="project.path" :description="project.description" :website="project.urlWebsite ?? null" :github-link="project.urlGithub ?? null" :image="project.urlImage ?? null" :status="project.status"/>
    </div>
  </main>

</template>

<style scoped>
@import url("~/assets/css/project-section.css");
</style>