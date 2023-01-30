<template>
  <v-app id="inspire">
    <AppBarComponent />

    <v-main>

      <slot></slot>

    </v-main>
  </v-app>
</template>

<script>
import {defineComponent} from "vue";
import AppBarComponent from "@/components/AppBarComponent.vue";

export default defineComponent({
  components: {AppBarComponent}
})


</script>
