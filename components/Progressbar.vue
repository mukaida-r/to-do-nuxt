<template>
  <div>
    {{ count }} / {{ max }}
  </div>
</template>

<script>
export default {
  props: ['count', 'max']
}
</script>