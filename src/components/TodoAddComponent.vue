<template>
  <div>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="todo.title"
        :counter="10"
        label="title"
        :value=todo.title
        required
      ></v-text-field>

      <v-text-field
        v-model="todo.writer"
        :counter="10"
        label="writer"
        :value=todo.writer
        required
      ></v-text-field>

      <v-btn
        color="success"
        class="me-4"
        @click="clickPostTodo"
      >
        추가
      </v-btn>

    </v-form>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {postTodo} from "@/apis/TodoAPIS";

const todo = ref({})
const emits = defineEmits(['moveTodoList'])

const clickPostTodo= async () => {

  await postTodo(todo.value)
  emits("moveTodoList")

}

</script>

<style scoped>

</style>
