<template>
  <DetailLayout>
    <TodoAddComponent @moveTodoList="moveTodoList"></TodoAddComponent>
  </DetailLayout>
</template>

<script setup>
import TodoAddComponent from "@/components/TodoAddComponent.vue";
import DetailLayout from "@/layouts/DetailLayout.vue";
import {useRouter} from "vue-router";

const router = useRouter()

const moveTodoList = () => {

  router.push({ name: "TodoListPage" })
}


</script>

<style scoped>

</style>
