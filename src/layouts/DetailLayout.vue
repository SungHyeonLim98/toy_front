<template>

    <v-app id="inspire">

      <AppBarComponent />

      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col>
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                <slot></slot>
                <!--  -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>

      </v-main>
    </v-app>

</template>
<script>
import AppBarComponent from "@/components/AppBarComponent.vue";

export default {
  components: {AppBarComponent},
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>
