<template>
  <div>
    <form @submit.prevent="todoAdd">
      <div>{{ doing }}</div>
      <input v-model="todo">
      <button type="submit">add</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      doing: "やること",
      todo: '',
    }
  },
  methods: {
    todoAdd() {
      this.$emit('todoAdded', this.todo);
      this.todo = '';
    }
  }
}
</script>