<script setup>

import TitleText from "@/components/Pre-styled/TitleText.vue";
</script>


<template>
  <div class="h-96 border-2 border-primary rounded-md shadow-md flex justify-center items-center bg-no-repeat bg-cover
  background">
    <TitleText class="text-secondary">Hero/Welcome image</TitleText>
  </div>
</template>


<style scoped>
div.background {
 background-image: url("/hero.jpg");
}
</style>