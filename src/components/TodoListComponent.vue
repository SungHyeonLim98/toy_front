<template>

  <h2>Todo List Component</h2>


      <v-card>
        <v-select
          v-model="searchKeyworda.condition"
          label="Select"
          :items="['total', 'title', 'writer']"
        ></v-select>
          <v-text-field
            v-model="searchKeyworda.keyword"
            label="Search"
            single-line
            hide-detail
          ></v-text-field>
        <v-btn @click="() => emits('clickSearch', searchKeyword)" location="center" append-icon="mdi-magnify">search</v-btn>

      </v-card>

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

const emits = defineEmits(['moveDetails', 'moveAdd', 'pageNum', 'movePageNoWatch', 'clickSearch'])

const props = defineProps(['pNum', 'pSize', 'pageSize', 'searchKeyworda'])

const pageNum = ref(1)

const route = useRoute()

//const searchKeyword = ref({ keyword: '', condition: 'total' })

const todoList = ref([])

const totalPageSize = ref()



const fetchGetList = async () => {

  console.log("pageNum: ", pageNum.value)

  pageNum.value = +props.pNum || 1

  const data = await getTodoSearch(props.searchKeyworda.keyword, props.searchKeyworda.condition,
    route.query.page, route.query.size);

  console.log(data)


  todoList.value = data.dtoList

  totalPageSize.value = data.end
}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>


.search {
  max-width: 50%;
  display: flex;
}

</style>
