<template>
  <div class="p-2 my-2 mx-auto rounded-md shadow-md border-2 border-gray-500 ">
    <card-header v-if="$slots['card-header']">
      <slot name="card-header"></slot>
    </card-header>
    <card-body>
      <slot></slot>
    </card-body>
    <card-footer v-if="$slots['card-footer']">
      <slot name="card-footer"></slot>
    </card-footer>
  </div>
</template>
