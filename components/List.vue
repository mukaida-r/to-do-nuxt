<template>
  <div>
    <ListItem v-for="todo in todos" :key="todo" 
              @deleteTodo="todos.splice(index, 1)"
    >
      {{ todo }}
    </ListItem>
  </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue'

export default {
  components: {
    ListItem
  },
  props: ['todos'],
  methods: {
    deleteTodo (index) {
      this.$emit('deleted', index)
    }
  }
}
</script>
