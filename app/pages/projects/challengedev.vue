<script setup lang="ts">
  import { ProjectService } from "~/services/ProjectService";
  import type {Project} from "~/models/Project";

  const service: ProjectService = new ProjectService();
  const project: Project = service.specificProject(8)!;
</script>

<template>
  <ProjectsBaseComponent :project="project" />
</template>

<style scoped>

</style>