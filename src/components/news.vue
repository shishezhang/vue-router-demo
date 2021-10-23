<template>
  <h2>这是关于新闻资讯页面</h2>
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