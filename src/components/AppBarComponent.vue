<template>

  <v-navigation-drawer
    v-model="drawer"
    expand-on-hover
    rail
  >

    <v-list
      density="compact"
      nav
    >
      <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" @click="() => movePage('HomePage')"></v-list-item>
      <v-list-item prepend-icon="mdi-forum" title="TodoList" value="todoList" @click="() => movePage('TodoListPage')"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="Login" value="login" @click="() => movePage('LoginPage')"></v-list-item>
    </v-list>

  </v-navigation-drawer>

  <v-app-bar>

    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>


  </v-app-bar>

</template>

<script setup>


import {ref} from "vue";
import {useRouter} from "vue-router";

const drawer = ref(null)

const router = useRouter()

const movePage = (page) => {

  console.log("movePage: ", page)

  router.push({name: page})
}

</script>

<style scoped>

</style>
