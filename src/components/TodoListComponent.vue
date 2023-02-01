<template>

  <div class="list">

      <v-btn
        elevation="8"
        class="addBtn" fab color="indigo" @click="() => emits('moveAdd')">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

    <div class="container">
      <v-container style="justify-content: center">
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
    </div>

    <v-pagination
      v-model="pageNum"
      :length="totalPageSize"
      rounded="circle"
      @click="() => emits(`movePageNoWatch`, pageNum)"
    ></v-pagination>

  </div>



</template>

<script setup>


import {getTodoList, getTodoSearch, putTodo} from "@/apis/TodoAPIS";
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {da} from "vuetify/locale";
import SearchComponent from "@/components/SearchComponent.vue";

const emits = defineEmits(['moveDetails', 'moveAdd', 'pageNum', 'movePageNoWatch'])

const props = defineProps(['pNum', 'pSize', 'searchKeyword'])

const pageNum = ref(1)

const todoList = ref([])

const totalPageSize = ref()

const fetchGetList = async () => {

  console.log(props.searchKeyword)

  //selectSearchKeyword.value = props.searchKeyword

  const data = await getTodoSearch(props.searchKeyword, props.pNum, props.pSize);

  console.log(data)

  todoList.value = data.dtoList

  totalPageSize.value = Math.ceil(data.total / 10)

  console.log("total: ", totalPageSize.value)

  pageNum.value = +props.pNum || 1
}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>asx
.search {

}

.container {
  display: flex;
  justify-content: center;
}

.addBtn {
  position: fixed;


  margin: 20px;

  bottom: 0;

  left: 90%;

  height: 60px;
  width: 50px;

  font-size: 25px;

  border-radius: 50%;

  z-index: 1;

}

</style>
