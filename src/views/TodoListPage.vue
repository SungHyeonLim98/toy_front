<template>

  <ListLayout>

    <TodoListComponent
      @moveDetails="moveDetails"
      @moveAdd="moveAdd"
      @movePageNoWatch="movePageNoWatch"
      @clickSearch="clickSearch"
      :searchKeyword="searchKeyword"
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

const pSize = ref(route.query.size || 9)

const componentKey = ref(0)

const searchKeyword = ref({condition: 'total', keyword: ''})

const movePageNoWatch = (pageNum) => {
  router.push({ name: "TodoListPage",
    query: {
      keyword: searchKeyword.value.keyword,
      condition: searchKeyword.value.condition,
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

const clickSearch = (value) => {

  searchKeyword.value = value

  console.log(searchKeyword.value)

  router.push({name: "TodoListPage",
    query: {
      keyword: searchKeyword.value.keyword,
      condition: searchKeyword.value.condition,
      page: 1,
      size: pSize.value
    }})
}



router.beforeEach((to, from, next)=> {

  pSize.value = to.query.size
  pNum.value = +to.query.page

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
