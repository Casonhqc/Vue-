<template>
  <div class="hello">
    
      <Header/>
      <el-container class="content">
      <Menu/>
      <el-container>
        <el-main>
          <Breadcrumb/>
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer/></el-footer>
      </el-container>
      </el-container>
    
  </div>
</template>

<script>
import Header from './common/Header.vue'
import Menu from './common/Menu.vue'
import Footer from './common/Footer.vue'

import Breadcrumb from './common/Breadcrumb.vue'
export default {
  name: 'HelloWorld',
  components: {
    Header,
    Footer,
    Menu,
    Breadcrumb
},
  data() {
    return {}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.hello {
  width: 100%;
  height: 100%;
  // background: yellow;

  .content{
    position: absolute;
    width: 100%;
    top:60px;
    bottom:0;
  }
  .cont{
    margin: 20px 0;
  }

}
</style>
