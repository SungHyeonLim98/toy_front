<template>

  <ListLayout>

    <SearchComponent
      @clickSearch="clickSearch"
    />

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
import SearchComponent from "@/components/SearchComponent.vue";

const router = useRouter()

const route = useRoute()

const pNum = ref(route.query.page || 1)

const pSize = ref(route.query.size || 10)

const componentKey = ref(0)

const searchKeyword = ref({ keyword: '', condition: 'total' })

const movePageNoWatch = (pageNum) => {

  pNum.value = pageNum

  router.push({ name: "TodoListPage",
    query: {
      ...searchKeyword.value,
      page: pNum.value,
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
  console.log("BeforeAddPage")

}

const clickSearch = (search) => {

  console.log(search)

  searchKeyword.value.keyword = search.keyword
  searchKeyword.value.condition = search.condition

  router.push({name: "TodoListPage",
    query: {
      keyword: searchKeyword.value.keyword,
      condition: searchKeyword.value.condition,
      page: 1,
      size: 10
    }})

}



router.beforeEach((to, from, next)=> {

  pSize.value = to.query.size
  pNum.value = to.query.page

  searchKeyword.value.keyword = to.query.keyword || ''
  searchKeyword.value.condition = to.query.condition || 'total'

  if(to.name == "TodoListPage") componentKey.value++

  next()
})

</script>

<style scoped>


</style>
