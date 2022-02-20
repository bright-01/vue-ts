<template>
  <div>
    <label for="todo-input">오늘 할일 : </label>
    <input type="text" id="todo-input" :value="item" @input="handleInput"/>
    <button @click="addTodo">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TodoInput",
  props:{
    item : {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput(event: InputEvent){
      // if(!event.target){
      //   return;
      // }
      // 이벤트의 타입을 정의

      const eventTarget = event.target as HTMLInputElement;
      this.$emit('input', eventTarget.value);
    },
    addTodo(){
      this.$emit("add")
    }
  }
})
</script>

<style scoped>

</style>