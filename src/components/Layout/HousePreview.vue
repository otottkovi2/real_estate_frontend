<script setup>
import Card from './Card.vue'
import SubTitleText from "@/components/Pre-styled/SubTitleText.vue";
import {onMounted, ref, useTemplateRef} from "vue";

let element = useTemplateRef("preview-root")
let props = defineProps(["imgSrc", "title", "location", "price", "area", "roomCount"])
let imgSrc = props.imgSrc
let title = props.title
let location = props.location
let price = props.price
let area = props.area
let roomCount = props.roomCount
let displayTitle = ref(title)
function resizeTitle() {
  let bodyStyle = window.getComputedStyle(document.body)
  let fontWidth = parseInt(bodyStyle.fontSize.replace('px',''))
  let space = element.value.clientWidth
  let fitLength = Math.round(space / fontWidth)-3
  displayTitle.value = title.slice(0,fitLength-1)
  if(displayTitle.value.length < title.length) displayTitle.value += "..."
}
onMounted(resizeTitle)
window.addEventListener('resize',resizeTitle)
</script>

<template>
  <card>
    <template #default>
      <div class="grid grid-cols-4 grid-rows-5 max-h-60 mr-2 pl-0 p-2" ref="preview-root">
        <img :src="imgSrc" alt="előnézeti kép" class="col-start-1 col-end-1 row-start-1 row-span-5 max-h-full
        justify-self-center self-center">
        <SubTitleText class="col-start-2 col-span-3 row-start-1" :title="title">{{ displayTitle }}</SubTitleText>
        <i class="col-start-2 col-span-2 row-start-2 ml-2">{{ location }}</i>
        <div class="col-start-2 row-start-3 row-span-2 text-2xl font-semibold ml-2 tracking-wide">{{ price }} Ft</div>
        <hr class="border-2 border-secondary rounded-md col-start-2 col-span-3 row-start-4 ml-2 mb-2 self-end">
        <div class="col-start-2 row-start-5 mr-3/12 text-right my-auto text-lg font-thin">{{ area }} m<sup>2</sup></div>
        <div class="col-start-3 row-start-5 border-l-2 border-secondary rounded-md mx-auto"></div>
        <div class="col-start-4 row-start-5 my-auto ml-3/12 text-left text-lg font-thin">{{ roomCount }} szoba</div>
      </div>
    </template>
  </card>
</template>