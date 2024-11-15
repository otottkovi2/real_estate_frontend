<script setup>
import {ref} from 'vue'

const parameters = defineProps(["title", "url", "options"])
const itemName = parameters.title
const url = parameters.url
const suboptions = parameters.options
const hasSuboptions = suboptions.length !== 0
let isMenuOpen = ref(false)
</script>

<template>
  <div class="flex flex-col justify-between">
    <div class="bg-white flex justify-between gap-x-1 z-50 border-2 border-gray-500 rounded-md p-2 shadow-lg hover:bg-gray-100 active:bg-gray-300">
      <a class="relative" :href="url">{{ itemName }}</a>
      <div v-if="hasSuboptions" @click="isMenuOpen = !isMenuOpen" @focus="isMenuOpen = true"
           @blur="isMenuOpen = false" class="cursor-pointer">V</div>
    </div>
    <Transition>
      <div v-if="isMenuOpen" class="border border-t-0 border-gray-500 rounded-b-md p-2 shadow-md relative z-10">
        <div v-for="s in suboptions">
          <a :href="s.url">{{ s.title }}</a>
        </div>
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