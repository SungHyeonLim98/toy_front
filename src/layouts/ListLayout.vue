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

export default {
  components: {AppBarComponent},
  data: () => ({ drawer: null }),
}
</script>
