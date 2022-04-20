<template>
  <h2>欢迎页面{{ msg }}</h2>
  <!-- <el-button>去登录</el-button> -->
  <router-link to="/login">去登录</router-link>
</template>

<script setup>
import { defineProps, reactive } from "vue";
defineProps({
  msg: String,
});
</script>

<style></style>
