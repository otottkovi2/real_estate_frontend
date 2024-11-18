<script setup>

import NavItem from "@/components/Nav/NavItem.vue";
</script>

<template>
<nav class="inline-flex flex-row sticky gap-2 text-left w-full flex justify-between">
  <div class="ml-48">
    <RouterLink to="/">Logo</RouterLink>
  </div>
  <ul class="inline-flex flex-row   col-span-3 col-start-2  flex justify-end gap-2 mr-48">
  
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
