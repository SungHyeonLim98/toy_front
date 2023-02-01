<template>

  <h2>mod</h2>
  <div>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="todo.title"
        :counter="10"
        label="title"
        :value=todo.title
        required
      ></v-text-field>

      <v-btn
        color="success"
        class="me-4"
        @click="clickDialogBtn"
      >
        수정
      </v-btn>

    </v-form>
  </div>

  <!-- dialog -->
  <div class="text-center">
    <v-dialog
      v-model="dialog"
    >

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</template>

<script setup>


import {getTodo, putTodo} from "@/apis/TodoAPIS";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const props = defineProps(['tid'])

const emits = defineEmits(['dialog'])

const dialog = ref(false)

const todo = ref({title: null, writer: null, tno: null})

watch(dialog,  async () => {

  console.log(dialog.value)

  if(!dialog.value) {


    console.log(todo.value)
    await putTodo(todo.value)

    emits('dialog')
  }

})
const clickDialogBtn = () => {

  dialog.value = true

}

const fetchGetTodo = async () => {

  const res = await getTodo(props.tid)
  todo.value = res

}

onMounted(() => {
  fetchGetTodo()
})



</script>

<style scoped>

</style>
