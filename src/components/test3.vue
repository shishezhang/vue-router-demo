<template>
  <h2>测试传参页面3</h2>
</template>

<script>
export default {
    name:'news',
    mounted(){
        console.log("接受到的params参数",this.$route.params);
        console.log("接受到的query参数",this.$route.query);
    }
}
</script>

<style>

</style>