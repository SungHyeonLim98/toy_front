<template>
  <v-container
    class="mx-auto"
    max-width="1000"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>{{todo.title}}</div>

      <div>{{todo.writer}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" @click="() => emits('moveModify', tid)">
        수정
      </v-btn>

      <v-btn color="orange"
      @click="clickDialogBtn">
        삭제
      </v-btn>
    </v-card-actions>
  </v-container>

  <!-- dialog -->
  <div class="text-center">
    <v-dialog
      v-model="deleteDialog"
    >

      <v-card>
        <v-card-text
        align="center">
          삭제하시겠습니까?
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="deleteDialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>


import {deleteTodo, getTodo} from "@/apis/TodoAPIS";
import {onMounted, ref, watch} from "vue";

const props = defineProps(['tid'])

const emits = defineEmits(['moveModify', 'deleteDialog'])

const deleteDialog = ref(false)


const todo = ref({id: null, title: null, writer: null})

const fetchGetTodo = async () => {

  const res = await getTodo(props.tid)
  todo.value = res

}

onMounted(() => {
  fetchGetTodo()
})

watch(deleteDialog, async () => {

  console.log(deleteDialog.value)

  if(!deleteDialog.value) {
    await deleteTodo(props.tid)
    emits('deleteDialog')
  }

})

const clickDialogBtn = () => {

  deleteDialog.value = true

}

</script>

<style scoped>

</style>
