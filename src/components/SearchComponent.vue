<template>
  <div class="v-container" style="justify-content: center">
    <v-card class="container">
      <v-select
        style="max-width: 15%"
        v-model="selectSearchKeyword.condition"
        label="검색조건"
        :items="['total', 'title', 'writer']"
      ></v-select>
      <v-text-field
        style="max-width: 60%"
        v-model="selectSearchKeyword.keyword"
        label="Search"
        single-line
        hide-detail
      ></v-text-field>
      <div class="searchBtn">
        <v-btn
          @click="() => emits('clickSearch', selectSearchKeyword)"
          append-icon="mdi-magnify">
          search
        </v-btn>
      </div>
    </v-card>
  </div>

</template>

<script setup>

import {ref} from "vue";

const emits = defineEmits(['clickSearch'])

const selectSearchKeyword = ref({keyword: '', condition: 'total'})

</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
}

.searchBtn {
  margin: 10px;
}

</style>
