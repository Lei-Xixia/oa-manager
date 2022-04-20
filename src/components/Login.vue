<template>
  <h3>登录页面</h3>
  <!-- <el-button>回首页</el-button> -->
  <!-- <router-link to="/welcome">回 首页</router-link> -->
  <Welcome msg="jack" />
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
import Welcome from "./Welcome.vue";
export default {
  name: "Login",
  components: {
    Welcome,
  },
  methods: {
    goHome() {
      this.$router.push("/welcome");
    },
  },
};
</script>

<script setup>
// import { useRouter } from "vue-router";
// const router = useRouter();
// const goHome = () => {
//   router.push("/welcome");
// };
</script>

<style></style>
