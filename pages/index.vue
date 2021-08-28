<template>
  <div class="page">
    <Progressbar :count="todos.length" :max="max"/>
    <Form @todoAdded="newTodo" />
    <List :todos="todos"/>
  </div>
</template>

<script>
import List from '~/components/List.vue'
import Form from '~/components/Form.vue'
import Progressbar from '~/components/Progressbar.vue'

export default {
  components: {
    List,
    Form,
    Progressbar
  },
  data () {
    return {
      todos: ['TODOを作る'],
      max: 10,
    }
  },
  methods: {
    newTodo (todo) {
      this.todos.push(todo);
    }
  },
}
</script>
