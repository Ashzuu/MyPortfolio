<script setup lang="ts">
  import BaseComponent from "~/components/projects/BaseComponent.vue";
  import {ProjectService} from "~/services/ProjectService";

  const service: ProjectService = new ProjectService();
</script>

<template>
  <BaseComponent :project="service.specificProject(6)">
    <template #language-description>
    </template>
    <template #framework-description/>
    <template #detailled-description/>
  </BaseComponent>
</template>

<style scoped>

</style>