<template>
  <li>{{ todoItem }}</li>
</template>

<script>

export default {
  name: "TodoListItem",
  props:{
    todoItem:String
  }
};
</script>

<style scoped>

</style>