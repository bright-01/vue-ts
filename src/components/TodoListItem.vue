<template>
  <li>
    <span
      class="item"
      :class="todoItemClass"
      @click="toggleItem"
      >{{ todoItem.title }}</span
    >
    <button @click="removeTodo">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from "../App.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "TodoListItem",
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  computed:{
    todoItemClass(): string | null {
      return this.todoItem.done ? 'complete' : null;
    }
  },
  methods: {
    removeTodo() {
      this.$emit("deleteTodo", this.index);
    },
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
