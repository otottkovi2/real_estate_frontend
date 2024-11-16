<script setup>
import TitleText from "@/components/Pre-styled/TitleText.vue";
import SubTitleText from "@/components/Pre-styled/SubTitleText.vue";
import Card from "@/components/Layout/Card.vue"
import Button from "@/components/Controls/Button.vue"
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
    <Card>2</Card>
    <Card>3</Card>
  </div>
</template>

<style scoped>

</style>