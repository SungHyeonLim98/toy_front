<template>

  <div class="v-container">
    <v-form
      ref="form"
      lazy-validation
    >
      <div>
        <v-text-field
          v-model="todo.title"
          :counter="10"
          label="title"
          :value=todo.title
          required
        ></v-text-field>

        <v-text-field
          v-model="todo.writer"
          :counter="10"
          label="writer"
          :value=todo.writer
          required
        ></v-text-field>
      </div>

      <ul style="display: flex; list-style: none">
        <li v-for="image in images">
          <img class="img"
               @click="() => clickDeleteImg(image)"
               :src="'http://192.168.1.153:8080/api/files/' + consts.THUMBNAIL_PREFIX + image">
        </li>
      </ul>

      <div class="addCancel">
        <v-btn
          color="success"
          class="me-2"
          @click="clickPostTodo"
        >
          저장
        </v-btn>
        <v-btn
          color="success"
          class="me-4"
          @click="() => cancelAddTodo(images)"
        >
          취소
        </v-btn>
      </div>
    </v-form>
    <div class="buttons">
      <div>
        <v-btn
          prepend-icon="mdi-camera"
          @click="clickDialog"
        >
          Upload
        </v-btn>
      </div>

      <div class="text-center">
        <v-dialog
          v-model="dialog"
        >

          <UploadComponent @addImages="addImages" @clickDialog="clickDialog"/>

        </v-dialog>
      </div>

    </div>

  </div>

</template>

<script setup>

import {ref} from "vue";
import {deleteTodoImages, postTodo} from "@/apis/TodoAPIS";
import UploadComponent from "@/components/UploadComponent.vue";
import consts from "@/consts/consts";

const todo = ref({})
const emits = defineEmits(['moveTodoList'])

const images = ref([])

const dialog = ref(false)

const clickDeleteImg = async (img) => {

  await deleteTodoImages([img])

  images.value = images.value.filter(e => e !== img)

}

const addImages = (image) => {

  images.value.push(...image)

}

const clickPostTodo = async () => {

  const imgInfo = []

  images.value.map(img => {
    imgInfo.push({
      fname: img,
      isMain: false
    })
  })
  imgInfo[0].isMain = true

  console.log(imgInfo)

  const result = {todoDTO: todo.value, fileInfo: imgInfo}

  await postTodo(result)
  emits("moveTodoList")

}

const clickDialog = () => {

  dialog.value = !dialog.value
}

const cancelAddTodo = async (images) => {

  await deleteTodoImages(images)

  emits('moveTodoList')
}



</script>

<style scoped>

.v-container {

}

.buttons {

  display: flex;
  position: absolute;
  bottom: 5%;

}

.addCancel {
  position: absolute;
  right: 10%;
  bottom: 5%;
}

.img {
  margin: 5px;
  width: 100px;
  height: 100px;
}

</style>
