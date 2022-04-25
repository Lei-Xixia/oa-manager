<script>
export default {
  name: "App",
  mounted(){
    this.$storage.setItem('age', "18")
    this.$storage.clearItem('name')
    this.$storage.clearAll()
  }
};
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
