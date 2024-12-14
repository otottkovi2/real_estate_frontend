<script setup>
const props = defineProps({
  label: String,
  id: {
    type: String,
    default() {
      return '0'
    },
    validator(value, props) {
      return value !== '0'
    }
  }
})
const label = props.label
const checkId = props.id
</script>

<template>
  <label :for="'check' + checkId">
    {{label}}
    <input type="checkbox" :id="'check' + checkId" @change="$emit('boxChecked','1')"
    class="appearance-none relative size-5 border-2 border-primary align-bottom
     before:content-['✓'] before:relative before:-top-3 before:-right-0.5 before:text-xs before:origin-bottom
     before:invisible before:align-[-5px] checked:before:text-2xl checked:before:visible before:transition-all
     before:duration-100">
  </label>
</template>
