<template>
  <h3>登录页面</h3>
  <!-- <el-button>回首页</el-button> -->
  <!-- <router-link to="/welcome">回 首页</router-link> -->
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
import Welcome from "./Welcome.vue";
export default {
  name: "Login",
  // components: {
  //   Welcome,
  // },
  mounted() {
    // this.$request({
    //   methods: 'get',
    //   url: '/login',
    //   data: {
    //     name:'leilei'
    //   }
    // }).then((res) => {
    //   console.log(res);
    // })
    this.$request
      .get("/login", { name: "leieli" }, { mock: true, loading: true })
      .then((res) => {
        console.log(res);
      });
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
