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
        <SubTitleText class="col-start-2 col-span-3 row-start-1" :title="title">{{ displayTitle }}</SubTitleText>
          {{title}}
      </div>
    </template>
  </card>
</template>

<style scoped>
h2 {
  @apply text-nowrap truncate text-ellipsis text-lg md:text-2xl
}
</style>