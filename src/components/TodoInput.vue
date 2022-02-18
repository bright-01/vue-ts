<template>
  <div>
    <label for="todo-input"></label>
    <input type="text" id="todo-input" :value="item" @input="handleInput"/>
    <button @click="addTodo">add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TodoInput",
  props:['item'],
  methods: {
    addTodo(){
      console.log('add');
    },
    handleInput(event: any){
      this.$emit('input', event.target.value);
    }
  }
})
</script>

<style scoped>

</style>