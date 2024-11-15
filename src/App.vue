<script setup>
import "./style.css"
import NavBar from "@/components/Nav/NavBar.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="main-wrapper flex items-center flex-col">
    <nav-bar></nav-bar>
    <main class="min-h-screen w-10/12">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>
