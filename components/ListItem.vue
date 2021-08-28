<template>
  <div @click="$emit('deleteTodo')">
    <slot />
    <button>delete</button>
  </div>
</template>