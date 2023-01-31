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

const route = useRoute()
const router = useRouter()

const pNum = route.query.page

const onDialogEvent = () => {

  console.log("onDialogEvent")
  router.push({name: "TodoListPage", query: {page: pNum}})
}

const tid = route.params.id

</script>

<style scoped>

</style>
