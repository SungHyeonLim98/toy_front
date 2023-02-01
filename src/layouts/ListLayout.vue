<template>
  <v-app id="inspire">


    <AppBarComponent />

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>

import AppBarComponent from "@/components/AppBarComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  computed: {
    SearchComponent() {
      return SearchComponent
    }
  },
  components: {AppBarComponent},
  data: () => ({ drawer: null }),
}
</script>
