<template>
  <div>
    <header>
      <h1>VUE TODO WITH TYPESCRIPT</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem"></TodoInput>
    </main>
    <div>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    </div>


  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";


export default Vue.extend({
  name: "App",
  components: {
    TodoInput
  },
  data(){
    return{
      todoText : ''
    }
  },
  methods:{
    updateTodoText(value : string){
      this.todoText = value;
    },
    addTodoItem(){
      const value = this.todoText;
      localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    }
  }

});
</script>

<style>
</style>
