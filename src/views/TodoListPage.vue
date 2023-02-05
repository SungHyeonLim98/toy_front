<template>

  <ListLayout>

    <TodoListComponent
      @moveDetails="moveDetails"
      @moveAdd="moveAdd"
      @movePageNoWatch="movePageNoWatch"
      @clickSearch="clickSearch"
      :searchKeyword="searchKeyworda"
      :pNum="pNum"
      :pSize="pSize"
      :key="componentKey"
    />

  </ListLayout>

</template>

<script setup>
import ListLayout from "@/layouts/ListLayout.vue";
import TodoListComponent from "@/components/TodoListComponent.vue";
import {useRoute, useRouter} from "vue-router";
import consts from "@/consts/consts";
import {ref} from "vue";
import {getTodoSearch} from "@/apis/TodoAPIS";

const router = useRouter()

const route = useRoute()

const pNum = ref(route.query.page || 1)

const pSize = ref(route.query.size || 10)

const componentKey = ref(0)

const searchKeyworda = ref({ keyword: '', condition: 'total' })

const movePageNoWatch = (pageNum) => {
  router.push({ name: "TodoListPage",
    query: {
      page: pageNum,
      size: pSize.value
    }
  })

}

const moveDetails = (id) => {

  console.log("moveDetails: ", id)

  router.push({name: "DetailsPage", params: {id: id}, query: {page: pNum.value}})
}

const moveAdd = () => {

  router.push({ name: consts.TODO_ADD_PAGE })

}

const clickSearch = (searchKeyword) => {

  searchKeyworda.value = searchKeyword

  router.push({name: "TodoListPage",
    query: {
      ...searchKeyword,
      page: 1,
      size: 10
    }})

  /*const data = await getTodoSearch(searchKeyword.value, pageNum.value, props.pSize)

  console.log(data)

  todoList.value = data.dtoList

  totalPageSize.value = data.end*/
}



router.beforeEach((to, from, next)=> {

  pSize.value = to.query.size
  pNum.value = +to.query.page

  console.log(to.query)

  componentKey.value++

  next()
})


/*
const movePage = (pageNum) => {

  pNum.value = pageNum

  router.push({ name: "TodoListPage", params: {page: pageNum}})

  componentKey.value++
}
*/
</script>

<style scoped>

</style>
