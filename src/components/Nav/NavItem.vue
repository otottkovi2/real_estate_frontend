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
  <div class="flex flex-col justify-between w-max">
    <div class="bg-white flex z-50">
      <a class="relative" :href="url">{{ itemName }}</a>
      <div v-if="hasSuboptions" @click="isMenuOpen = !isMenuOpen" @focus="isMenuOpen = true"
           @blur="isMenuOpen = false" class="cursor-pointer ml-1">V</div>
    </div>
    <Transition>
      <div v-if="isMenuOpen" class="border border-gray-500 p-2 shadow-md relative z-10">
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
  transition: all 0.1s cubic-bezier(0, 0.55, 0.45, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-20%);
  box-shadow: inset 0 1px 0 gray;
}
</style>