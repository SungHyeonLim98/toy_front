<template>

  <h2>Todo List Component</h2>

  <v-container>
    <v-row>
      <v-col
        v-for="todo in todoList"
        :key="todo.id"
        cols="4"
      >
        <v-card height="200" @click="() => emits('moveDetails', todo.id)">
          Id: {{todo.id}} <br>
          Title: {{ todo.title }} <br>
          Writer: {{todo.writer}}
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-btn @click="() => emits('moveAdd')">ADD</v-btn>

</template>

<script setup>


import {getTodoList} from "@/apis/TodoAPIS";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const emits = defineEmits(['moveDetails', 'moveAdd'])

let todoList = ref([])

const fetchGetList = async () => {

  const data = await getTodoList();

  todoList.value = data

}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

</style>
