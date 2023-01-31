<template>

  <ListLayout>

    <TodoListComponent
      @moveDetails="moveDetails"
      @moveAdd="moveAdd"
      @movePageNoWatch="movePageNoWatch"
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

const router = useRouter()

const route = useRoute()

const pNum = ref(route.query.page || 1)

const pSize = ref(route.query.size || 10)

const componentKey = ref(0)

const movePageNoWatch = (pageNum) => {
  pNum.value = pageNum
  pSize.value = route.query.size
  router.push({ name: "TodoListPage",
    query: {
      page: pageNum,
      size: pSize.value
    }
  })

}

const moveDetails = (id) => {

  console.log("moveDetails: ", id)

  router.push({name: "DetailsPage", params: {id: id}})
}

const moveAdd = () => {

  router.push({ name: consts.TODO_ADD_PAGE })

}

router.beforeEach((to, from, next)=> {

  pNum.value = to.query.page

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
