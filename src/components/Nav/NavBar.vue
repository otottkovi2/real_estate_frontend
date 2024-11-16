<script setup>

import NavItem from "@/components/Nav/NavItem.vue";
</script>

<template>
<nav class="grid grid-cols-4 w-7/12 p-4 mb-4 sticky top-0 bg-white bg-opacity-75 rounded-md">
  <div>
    logo goes here
  </div>
  <ul class="flex flex-row justify-between shrink-0 col-span-3 col-start-2">
    <li><NavItem title="Home" url="/"></NavItem></li>
    <li><NavItem title="Option 1" url="/">
      <ul>
        <li><NavItem title="Suboption 1" url="/somewhere_else"></NavItem></li>
        <li><NavItem title="Suboption 2" url="/"></NavItem></li>
        <li><NavItem title="Suboption 3"></NavItem></li>
      </ul>
    </NavItem></li>
    <li><NavItem title="Option 3" url="/"></NavItem></li>
    <li><NavItem title="Option 4" url="/"></NavItem></li>
  </ul>
</nav>
</template>
