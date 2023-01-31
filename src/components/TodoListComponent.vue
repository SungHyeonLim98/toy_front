<template>

  <h2>Todo List Component</h2>

  <div class="container">
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


    <v-btn class="addBtn" fab dark large color="indigo" location="center" @click="() => emits('moveAdd')">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>

  <div>
    <v-pagination
      v-model="pageNum"
      :length="9"
      rounded="circle"
      @click="() => emits(`movePageNoWatch`, pageNum)"
    ></v-pagination>
  </div>

</template>

<script setup>


import {getTodoList, putTodo} from "@/apis/TodoAPIS";
import {onMounted, ref, watch} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const emits = defineEmits(['moveDetails', 'moveAdd', 'pageNum', 'movePageNoWatch'])

const props = defineProps(['pNum', 'pSize', 'pageSize'])

const pageNum = ref(1)



/*
watch(pageNum,   () => {
  console.log(pageNum.value)

  emits('pageNum', pageNum.value)

})*/
let todoList = ref([])

const fetchGetList = async () => {

  console.log("pageNum: ", pageNum.value)


  pageNum.value = props.pNum

  const data = await getTodoList(pageNum.value, props.pSize);

  console.log(data)


  todoList.value = data.dtoList

}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

.container {


}

.addBtn {

  --v-layout-left: 50px
}

</style>
