<script setup lang="ts">
  import FirstSectionComponent from "~/components/FirstSectionComponent.vue";
  import ProjectSectionComponent from "~/components/ProjectSectionComponent.vue";
  import AboutMeSectionComponent from "~/components/AboutMeSectionComponent.vue";
  import ContactSectionComponent from "~/components/ContactSectionComponent.vue";

  if(import.meta.browser){
    const onMouseMove = (e: MouseEvent) => {

    }
  }
</script>
<template>
  <div id="main-component">
    <div id="mouse-decoration" @mousemove="onMouseMove"/>
    <NuxtRouteAnnouncer />
    <FirstSectionComponent />
    <ProjectSectionComponent />
    <AboutMeSectionComponent />
    <ContactSectionComponent />
  </div>
</template>
<style>
  #main-component {
    display: flex;
    flex-direction: column;
    gap: 10dvh;
  }

  #mouse-decoration {
    position: absolute;
    width: 20px;
    aspect-ratio: 1/1;
    border-radius: 20px;
    background-color: rgb(255 255 255 / 0.5);
  }
</style>
