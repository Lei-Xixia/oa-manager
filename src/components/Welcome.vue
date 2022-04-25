<template>
  <div class="welcome">
    <h2>欢迎页面{{ msg }}</h2>
  <router-link to="/login">去登录</router-link>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
defineProps({
  msg: String,
});
</script>

<style lang='scss'>
</style>
