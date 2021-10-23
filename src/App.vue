<template>
  <div id="app">
    <h1> Vue Router 主页 </h1>
    <nav>
      <h2>router-link 导航</h2>
      <router-link class="navItem" to="/news" active-class="active" replace  tag="button" append>资讯页面</router-link>
      <router-link class="navItem" to="/about" active-class="active" >关于我们</router-link>
    </nav>

    <nav>
      <h2>编程式导航</h2>
      <div class="navItem" @click="btn1">资讯页面</div>
      <div class="navItem" @click="btn2">关于我们</div>
      <div class="navItem" @click="btn3">go</div>
      <div class="navItem" @click="btn4">back</div>
      <div class="navItem" @click="btn5">forward</div>
      <router-link class="navItem" :to="{path: 'about'}" active-class="active" >关于我们</router-link>
    </nav>

    <nav>
      <h2>参数传递:打开开发者面板进行查看</h2>
      <div class="navItem" @click="btn6">query</div>
      <div class="navItem" @click="btn7">params</div>
      <div class="navItem" @click="btn8">占位符</div>
    </nav>
    
    <hr/>
    <!-- 路由出口 -->
    <router-view ></router-view>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    btn1(){
      // 传字符串
      this.$router.push('news')
      // 传对象
      // this.$router.push({
      //   path: 'news'
      // })
    },
    btn2(){
      // replace
      this.$router.replace('about')
    },
    btn3(){
      //  后退一步
      this.$router.go(-1)
      //  向前两步
      // this.$router.go(2)
    },
    btn4(){
      // 后退一步
      this.$router.back()
    },
    btn5(){
      // 前进一步
      this.$router.forward()
    },
    btn6(){
      // query 传递参数
      this.$router.push({
        path: 'test1',
        query:{id:'123456'}
      })
    },
    btn7(){
      // params 传递参数
      this.$router.push({
        name: 'test2',
        params:{id:'123456'}
      })
    },
    btn8(){
      // 占位符传递参数
      this.$router.push({
        path: 'test3/123456'      
      })
    }
  }
}
</script>

<style>
body{
  margin:20px
}
nav{
  margin: 10px;
}
.navItem{
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border: 1px rgb(167, 167, 255) solid;
}
.active{
  background: rgb(144, 144, 252);
}
</style>
