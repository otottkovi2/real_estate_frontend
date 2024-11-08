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
  <a id="title" :href="url">{{ itemName }}</a>
  <div id="expand-arrow" v-if="hasSuboptions" @click="isMenuOpen = !isMenuOpen" class="cursor-pointer">V</div>
  <Transition>
    <div v-if="isMenuOpen" class="border-2 border-black">
      <div id="submenu-dropdown" v-for="s in suboptions">
        <a :href="s.url">{{ s.title }}</a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-50%);
}
</style>