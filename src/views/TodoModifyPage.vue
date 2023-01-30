<template>

  <DetailLayout>

    <TodoModifyComponent :tid="tid" @dialog="onDialogEvent"/>

  </DetailLayout>
</template>

<script setup>

import DetailLayout from "@/layouts/DetailLayout.vue";
import TodoModifyComponent from "@/components/TodoModifyComponent.vue";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import TodoListPage from "@/views/TodoListPage.vue";

const route = useRoute()
const router = useRouter()

const onDialogEvent = () => {

  console.log("onDialogEvent")
  router.push({name: "TodoListPage"})
}

const tid = route.params.id

</script>

<style scoped>

</style>
