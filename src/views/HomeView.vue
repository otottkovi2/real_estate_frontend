<script setup>
import {ref} from "vue";
import TitleText from "@/components/Pre-styled/TitleText.vue";
import SubTitleText from "@/components/Pre-styled/SubTitleText.vue";
import Card from "@/components/Layout/Card.vue"
import Button from "@/components/Controls/Button.vue"
import Checkbox from "@/components/Controls/Checkbox.vue";
import ImagePicker from "@/components/Controls/ImagePicker.vue";

let isBoxChecked = ref(false)
const uploadedFiles = ref([])
function toggleBox(id)  {
  if(id !== "1") return
  isBoxChecked.value = !isBoxChecked.value
}

function listUploadedFiles(paths) {
  console.log(paths)
  uploadedFiles.value = paths
}
</script>

<template>
  <TitleText>Control demos</TitleText>
  <div class="grid grid-cols-3">
    <Card>
      <template #card-header>
        <SubTitleText>Button</SubTitleText>
      </template>
      <template #default>
        <Button name="Button" :onClick="()=>{}"></Button>
      </template>
    </Card>
    <Card>
      <template #card-header>
        <SubTitleText>Checkbox</SubTitleText>
      </template>
      <template #default>
        <Checkbox label="Check this:" id="1" @box-checked="toggleBox"></Checkbox>
      </template>
      <template #card-footer>
        <div class="text-green-800" v-if="isBoxChecked">This box is checked!</div>
        <div class="text-red-700" v-else>This box is unchecked!</div>
      </template>
    </Card>
    <Card>
      <template #card-header>
        <SubTitleText>Image Picker</SubTitleText>
      </template>
      <template #default>
        <ImagePicker :showPreviews="false" @file-uploaded="listUploadedFiles"></ImagePicker>
      </template>
      <template #card-footer>
        <ul>
          <li v-for="path in uploadedFiles">{{path}}</li>
        </ul>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>