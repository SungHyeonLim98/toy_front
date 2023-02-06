<template>

  <div class="container">
    <v-container>
      <v-row>
        <v-col
          v-for="todo in todoList"
          :key="todo.id"
          cols="4"
        >
          <v-card height="200" @click="() => emits('moveDetails', todo.id)">
            Id: {{ todo.id }} <br>
            Title: {{ todo.title }} <br>
            Writer: {{ todo.writer }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div>
      <v-pagination
        v-model="pageNum"
        :length="totalPageSize"
        rounded="circle"
        @click="() => emits(`movePageNoWatch`, pageNum)"
      ></v-pagination>
    </div>

    <v-btn class="addBtn" fab dark large color="indigo" @click="() => emits('moveAdd')">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>

</template>

<script setup>


import {getTodoSearch} from "@/apis/TodoAPIS";
import {onMounted, ref} from "vue";

const emits = defineEmits(['moveDetails', 'movePageNoWatch', 'clickSearch', 'moveAdd'])

const props = defineProps(['pNum', 'pSize', 'pageSize', 'searchKeyword'])

const pageNum = ref(1)

const todoList = ref([])

const totalPageSize = ref()

const fetchGetList = async () => {

  console.log("Fetch")

  pageNum.value = parseInt(props.pNum)

  const data = await getTodoSearch(props.searchKeyword, pageNum.value, props.pSize);

  console.log(data)


  todoList.value = data.dtoList

  totalPageSize.value = data.end
}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

.container {

  position: relative;
}

.addBtn {

  z-index: 1;
  position: fixed;

  right: 5%;
  bottom: 10%;

  border-radius: 46%;
  font-size: 25px;
}
</style>
