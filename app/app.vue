<script setup lang="ts">
import FirstSectionComponent from "~/components/FirstSectionComponent.vue";
import ProjectSectionComponent from "~/components/ProjectSectionComponent.vue";
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <FirstSectionComponent />
    <ProjectSectionComponent />
    <MusicSectionComponent />
    <ContactSectionComponent />
  </div>
</template>
<style>
  @import url("~/assets/css/style.css");
</style>
