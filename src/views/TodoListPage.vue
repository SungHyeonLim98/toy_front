<template>

  <ListLayout>

    <TodoListComponent @moveDetails="moveDetails" @moveAdd="moveAdd"/>

  </ListLayout>

</template>

<script setup>
import ListLayout from "@/layouts/ListLayout.vue";
import TodoListComponent from "@/components/TodoListComponent.vue";
import {useRouter} from "vue-router";
import consts from "@/consts/consts";

const router = useRouter()

const moveDetails = (id) => {

  console.log("moveDetails: ", id)

  router.push({name: "DetailsPage", params: {id: id}})
}

const moveAdd = () => {

  router.push({ name: consts.TODO_ADD_PAGE })

}
</script>

<style scoped>

</style>
