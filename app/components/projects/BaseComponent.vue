<script setup lang="ts">
  import type {Project} from "~/models/Project";
  import CustomBadge from "~/components/usable/projects/CustomBadge.vue";
  import Button from "~/components/usable/Button.vue";

  const props = defineProps<{project: Project}>();

  function getRadomStyleBadge(){
    const allStyles = ["green", "red", "orange", "blue", "purple", "aqua"];
    const randomIndex = Math.floor(Math.random() * allStyles.length);
    return allStyles[randomIndex];
  }
</script>

<template>
  <div id="project-container">
    <div id="left-side" class="part-side">
      <header class="first-part-container">
        <h2>{{props.project.name.toUpperCase()}}</h2>
        <p>{{props.project.description}}</p>
        <div class="buttons-container">
          <Button v-if="props.project.urlGithub" :link-redirect="props.project.urlGithub" icon-name="mdi:github" variant="primary">Github</Button>
          <Button v-if="props.project.urlWebsite" :link-redirect="props.project.urlWebsite" icon-name="dashicons:admin-site-alt3" variant="secondary">Site Internet</Button>
        </div>
      </header>
      <div id="languages-container" class="containers">
        <h3>Languages</h3>
        <div class="languages">
          <CustomBadge v-for="language in props.project.languages" :key="language" :content="language" :style="getRadomStyleBadge()"/>
        </div>
        <div class="content">
          <slot name="language-description"/>
        </div>
      </div>
      <div v-if="project.frameworks.length > 0" id="frameworks-container" class="containers">
        <h3>Frameworks</h3>
        <div class="framework">
          <CustomBadge v-for="framework in props.project.frameworks" :key="framework" :content="framework" :style="getRadomStyleBadge()"/>
        </div>
        <div class="content">
          <slot name="framework-description"/>
        </div>
      </div>
    </div>
    <div id="right-side" class="part-side">
      <div id="image-container" class="first-part-container">
        <img v-if="props.project.urlImage" :src="props.project.urlImage" alt="Image du projet" class="project-image">
      </div>
      <div>
        <h3>Description Détaillée</h3>
        <div class="content">
          <slot name="detailled-description"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('~/assets/css/projects/project-base-page.css');
</style>