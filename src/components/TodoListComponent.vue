<template>

  <h2>Todo List Component</h2>


  <div>
      <v-card class="container">
        <v-select
          style="max-width: 15%"
          v-model="selectSearchKeyword.condition"
          label="검색조건"
          :items="['total', 'title', 'writer']"
        ></v-select>
          <v-text-field
            style="max-width: 60%"
            v-model="selectSearchKeyword.keyword"
            label="Search"
            single-line
            hide-detail
          ></v-text-field>
        <div class="searchBtn">
        <v-btn
          @click="() => emits('clickSearch', selectSearchKeyword)"
          append-icon="mdi-magnify">
            search
        </v-btn>
        </div>
      </v-card>
  </div>
  <div class="container">
    <v-container style="justify-content: center">
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
  </div>

  <div>
  <v-btn class="addBtn" fab dark large color="indigo" location="center" @click="() => emits('moveAdd')">
    <v-icon dark>mdi-plus</v-icon>
  </v-btn>

  <div>
    <v-pagination
      v-model="pageNum"
      :length="totalPageSize"
      rounded="circle"
      @click="() => emits(`movePageNoWatch`, pageNum)"
    ></v-pagination>
  </div>
  </div>

</template>

<script setup>


import {getTodoList, getTodoSearch, putTodo} from "@/apis/TodoAPIS";
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {da} from "vuetify/locale";

const emits = defineEmits(['moveDetails', 'moveAdd', 'pageNum', 'movePageNoWatch', 'clickSearch'])

const props = defineProps(['pNum', 'pSize', 'searchKeyword'])

const pageNum = ref(1)

const selectSearchKeyword = ref({ keyword: '', condition: 'total' })

const todoList = ref([])

const totalPageSize = ref()

const test = ref({})

const fetchGetList = async () => {

  console.log(props.searchKeyword)

  selectSearchKeyword.value = props.searchKeyword

  const data = await getTodoSearch(props.searchKeyword, props.pNum, props.pSize);

  console.log(data)

  todoList.value = data.dtoList

  totalPageSize.value = Math.ceil(data.total/9)

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

.container{
  display: flex;
  justify-content: center;
}
.searchBtn{
  margin: 10px;
}

</style>
