<script setup lang="ts">
import FirstSectionComponent from "~/components/FirstSectionComponent.vue";
import ProjectSectionComponent from "~/components/ProjectSectionComponent.vue";
import AboutMeSectionComponent from "~/components/AboutMeSectionComponent.vue";
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <FirstSectionComponent />
    <ProjectSectionComponent />
    <AboutMeSectionComponent />
    <ContactSectionComponent />
  </div>
</template>
<style>
  @import url("~/assets/css/style.css");
</style>
