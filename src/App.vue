<template>
  <div>
    <h1>VUE TODO WITH TYPESCRIPT</h1>
    <TodoInput :item="todoText" @input="updateTodoText"></TodoInput>
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
    updateTodoText(value : any){
      this.todoText = value;
    }
  }

});
</script>

<style>
</style>
