<script setup>

import NavItem from "@/components/Nav/NavItem.vue";
</script>

<template>
<nav class="grid grid-cols-4 w-8/12 mt-4">
  <div>
    logo goes here
  </div>
  <ul class="flex flex-row justify-around col-span-3 col-start-2">
    <li>
      <NavItem title="Home" url="https://localhost:5173/" :options="[{title:'hello',url:'https://www.aaa.com'},
      {title: 'hello 2',url: 'https://service.neptun.u-szeged.hu'},{title: 'hello 3', url: 'https://www.alma.io'}]">
      </NavItem>
    </li>
    <li><NavItem title="Option 1" url="https://localhost:5173" :options="[]"></NavItem></li>
    <li><NavItem title="Option 3" url="https://localhost:5173" :options="[]"></NavItem></li>
    <li><NavItem title="Option 4" url="https://localhost:5173" :options="[]"></NavItem></li>
  </ul>
</nav>
</template>
