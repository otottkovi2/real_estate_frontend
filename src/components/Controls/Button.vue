<script setup>
const props = defineProps(["name","onClick"])
const name = props.name
const clickAction = props.onClick
</script>

<template>
  <button @click="clickAction" class="bg-secondary focus:bg-secondary hover:bg-primary active:bg-tertiary p-2 m-2
  rounded-md shadow-sm active:scale-90 active:transition active:duration-100 active:ease-in">{{name}}</button>
</template>

<style scoped>

</style>