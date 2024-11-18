<script setup>
import {ref} from 'vue'

const events = defineEmits(["fileUploaded"])
const fileUploadedEvent = events[0]
const imgPath = ref()
  const hello = (ev) => {
    ev.preventDefault()
    const files = ev.dataTransfer.files
    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onloadend = (ev) => {
       imgPath.value= ev.target.result
    }
  }

  const clickOnFilePicker = () => {
    let filePicker = document.querySelector("input[type=file]")
    filePicker.click()
  }

const keyboardOpenPicker = (ev) => {
  const key = ev.key
  if(!(key === "Enter" || key === " ")) return
  clickOnFilePicker()
}

  const doNothing = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
  }
</script>

<template>
  <div>
    <div class="m-2 border-2 border-dashed border-grey-300 cursor-pointer" @drop="hello"
         @click="clickOnFilePicker()" @dragover="doNothing" @dragenter="doNothing" @dragleave="doNothing"
         @keydown="keyboardOpenPicker" tabindex="0">
      <div class="text-center my-6/12 w-max mx-2 text-gray-300">Drag images here or click to upload files</div>
    </div>
    <input type="file" tabindex="-1" class="hidden">
    <img :src="imgPath" alt="a image">
  </div>
</template>