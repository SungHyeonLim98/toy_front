<template>

  <DetailLayout>

    <DetailsComponent :tid="tid" @moveModify="moveModify" @deleteDialog="deleteDialog"/>

  </DetailLayout>

</template>

<script setup>
import DetailLayout from "@/layouts/DetailLayout.vue";
import DetailsComponent from "@/components/DetailsComponent.vue";
import {useRoute, useRouter} from "vue-router";


const route = useRoute()

const router = useRouter()

const tid = route.params.id


const moveModify = (id) => {

  router.push({name: "TodoModifyPage"})
}

const deleteDialog = () => {

  router.push({ name: "TodoListPage" })

}

</script>

<style scoped>

</style>
