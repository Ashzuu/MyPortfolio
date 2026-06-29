<script setup lang="ts">
  import FirstSectionComponent from "~/components/FirstSectionComponent.vue";
  import ProjectSectionComponent from "~/components/ProjectSectionComponent.vue";
  import AboutMeSectionComponent from "~/components/AboutMeSectionComponent.vue";
  import ContactSectionComponent from "~/components/ContactSectionComponent.vue";
</script>
<template>
  <div id="main-component">
    <div id="mouse-decoration">
      <div class="little-effect"/>
    </div>
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
    cursor: none;
  }

  #mouse-decoration {
    z-index: 100;
    pointer-events: none;
    position: absolute;
    visibility: hidden;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: rgb(170 0 255 / 0.8);


    .little-effect {
      opacity: 1;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      box-shadow: 0 0 20px 20px rgb(247 0 255 / 0.3);
      animation: haloAnimation 2.2s ease-in-out infinite alternate;
    }
  }

  @keyframes haloAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
</style>
