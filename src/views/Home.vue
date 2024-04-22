<template>
  <div>
    <Intro />
    <!-- <hr /> -->
    <TimeLine />
    <!-- <hr /> -->
    <ProjectsComp />
    <!-- <hr /> -->
    <Ending />
  </div>
</template>

<script setup>
import Intro from '../components/Intro.vue';
import TimeLine from '../components/TimeLine.vue';
import Ending from '../components/Ending.vue';
import ProjectsComp from '../components/ProjectsComp.vue';
</script>

<style>
.full {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Title {
  font-size: 50px;
  font-weight: bold;
  color: #333;
  text-align: center;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
