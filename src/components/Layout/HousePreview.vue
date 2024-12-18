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
</script>

<template>
  <card>
    <template #default>
      <div class="flex flex-col content-center md:grid md:grid-cols-4 md:grid-rows-5 md:max-h-60 mr-2 pl-0 p-2"
           ref="preview-root">
        <img :src="imgSrc" alt="előnézeti kép" class="md:col-start-1 md:col-end-1 md:row-start-1 md:row-span-5
        max-h-full justify-self-center md:self-center">
        <SubTitleText class="md:col-start-2 md:col-span-3 md:row-start-1 mb-auto" :title="title">
          {{title}}
        </SubTitleText>
        <i class="md:col-start-2 md:col-span-2 row-start-2 ml-2">{{ location }}</i>
        <div class="md:col-start-2 md:row-start-3 md:row-span-2 text-2xl font-semibold ml-2 tracking-wide">
          {{ price }} Ft
        </div>
        <hr class="border-2 border-secondary rounded-md md:col-start-2 md:col-span-3 md:row-start-4 ml-2 mb-2
         md:self-end">
        <div class="md:col-start-2 md:row-start-5 md:mr-3/12 text-center md:text-right my-auto text-lg font-thin">
          {{ area }} m<sup>2</sup></div>
        <div class="md:col-start-3 md:row-start-5 border-t-2 min-h-2 w-full md:w-0 md:border-t-0 md:border-x-2
            border-secondary md:rounded-md ml-2 md:ml-auto mx-auto"></div>
        <div class="md:col-start-4 md:row-start-5 my-auto md:ml-3/12 text-center md:text-left text-lg font-thin">
          {{ roomCount }} szoba
        </div>
      </div>
    </template>
  </card>
</template>

<style scoped>
h2 {
  @apply text-nowrap truncate text-ellipsis text-lg md:text-2xl
}
</style>