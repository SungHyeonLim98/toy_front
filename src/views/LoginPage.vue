<template>

  <HomeLayout>

    <div>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :counter="10"
          label="name"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          color="success"
          class="me-4"
          @click="() => onClickLogin(name, password)"
        >
          로그인
        </v-btn>

        <v-btn
          color="blue"
          @click="onClickRouteToSignup"
        >
          회원가입
        </v-btn>

        <v-btn
          color="blue"
          @click="onClickTest"
        >
          테스트
        </v-btn>
      </v-form>
    </div>

  </HomeLayout>

</template>

<script>
import HomeLayout from "@/layouts/HomeLayout.vue";

export default {
  name: "LoginPage",
  components: {HomeLayout}
}
</script>

<style scoped>

</style>
