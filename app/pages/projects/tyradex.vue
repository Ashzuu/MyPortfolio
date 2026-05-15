<script setup lang="ts">
  import BaseComponent from "~/components/projects/BaseComponent.vue";
  import {ProjectService} from "~/services/ProjectService";
  import Caroussel from "~/components/usable/Caroussel.vue";

  const service: ProjectService = new ProjectService();
  const imgs:string[] = ["/img/tyradex/img.png","/img/tyradex/img_1.png", "/img/tyradex/img_2.png", "/img/tyradex/img_3.png"];
</script>

<template>
  <BaseComponent :project="service.specificProject(1)">
    <template #language-description/>
    <template #framework-description/>
    <template #detailled-description/>
    <template #caroussel>
      <Caroussel :images="imgs"/>
    </template>
  </BaseComponent>
</template>

<style scoped>

</style>