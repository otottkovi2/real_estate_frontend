<script setup>
import {ref} from 'vue'
import {RouterLink} from "vue-router";

const parameters = defineProps(["title", "url", "options"])
const itemName = parameters.title
const url = parameters.url
let isMenuOpen = ref(false)

const keyboardOpenMenu = (ev) => {
  const key = ev.key
  if(!(key === "Enter" || key === " ")) return
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="flex flex-col justify-between w-max">
    <div class="bg-white flex justify-between gap-x-1 z-50 border-2 border-gray-500 rounded-md p-2 shadow-lg
    hover:bg-gray-100 active:bg-gray-300 focus:bg-gray-300">  <!--FIXME:weird sizing-->
      <RouterLink class="relative" :to="url">{{ itemName }}</RouterLink>
      <div v-if="$slots.length !== 0" @click="isMenuOpen = !isMenuOpen" @keydown="keyboardOpenMenu"
           class="cursor-pointer" tabindex="0" role="button">V</div>
    </div>
    <Transition>
      <div v-if="isMenuOpen" class="border border-t-0 border-gray-500 rounded-b-md p-2 shadow-md relative z-10">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s cubic-bezier(0.85, 0, 0.15, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-45%);
  box-shadow: inset 0 1px 0 gray;
}
</style>