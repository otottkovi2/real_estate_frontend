<script setup>
import {ref} from 'vue'
import Button from "@/components/Controls/Button.vue";

const props = defineProps(["showPreviews"])
const events = defineEmits(["fileUploaded"])
const showPreviews = props.showPreviews === undefined ? true : props.showPreviews
const fileUploadedEvent = events[0]
const imgPaths = ref([])

function filesToPaths(files) {
  const filePaths = []
  for (const file of files) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = (ev) => {
      imgPaths.value.push(ev.target.result)
    }
    filePaths.push(file.name)
  }
  events('fileUploaded',filePaths)
}

const dropToPicker = (ev) => {
  ev.preventDefault()
  const files = ev.dataTransfer.files
  filesToPaths(files);
}

const clickOnFilePicker = () => {
  let filePicker = document.querySelector("input[type=file]")
  filePicker.click()
}

const submitFromPicker = (ev) => {
  const files = ev.target.files
  filesToPaths(files)
}

const keyboardOpenPicker = (ev) => {
  const key = ev.key
  if (!(key === "Enter" || key === " ")) return
  clickOnFilePicker()
}

const resetImages = (_) => {
  imgPaths.value = []
}

const doNothing = (ev) => {
  ev.preventDefault()
  ev.stopPropagation()
}
</script>

<template>
  <div>
    <div class="border-2 my-2 border-dashed border-grey-300 cursor-pointer" @drop="dropToPicker"
         @click="clickOnFilePicker()" @dragover="doNothing" @dragenter="doNothing" @dragleave="doNothing"
         @keydown="keyboardOpenPicker" tabindex="0">
      <div class="text-center my-6/12 w-max mx-2 text-gray-300">Drag images here or click to upload files</div>
    </div>
    <input type="file" tabindex="-1" class="hidden" multiple @change="submitFromPicker">
    <Button v-if="imgPaths.length > 0" :on-click="resetImages" name="Reset"></Button>
    <div v-if="showPreviews" class="grid grid-cols-3 gap-1 justify-items-center">
      <img v-for="path in imgPaths" :src="path" :alt="'uploaded image ' + imgPaths.indexOf(path)"
           class="aspect-square max-h-full">
    </div>
  </div>
</template>