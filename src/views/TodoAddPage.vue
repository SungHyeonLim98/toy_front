<template>
  <DetailLayout>
    <TodoAddComponent @moveTodoList="moveTodoList"></TodoAddComponent>
  </DetailLayout>
</template>

<script setup>
import TodoAddComponent from "@/components/TodoAddComponent.vue";
import DetailLayout from "@/layouts/DetailLayout.vue";
import {useRouter} from "vue-router";
import {deleteTodoImages} from "@/apis/TodoAPIS";

const router = useRouter()

const moveTodoList = async (images) => {

  await router.push({name: "TodoListPage"})
}


</script>

<style scoped>

</style>
