<template>
  <div class="layout">
    <el-container class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
            <span>vue3 Lab</span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          class="el-menu-vertical-demo"
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/"><i class="el-icon-data-line" />首页</el-menu-item>
          <el-submenu index="2">
            <template #title>
              <i class="el-icon-location"></i>
              <span>Lab</span>
            </template>
            <el-menu-item-group>
              <!-- <template #title>分组一</template> -->
              <el-menu-item index="/echars"><i class="el-icon-data-line" />Echars</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #fff;
}
.container {
  height: 100vh;
}
.aside {
  width: 200px !important;
  background-color: #545c64;
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: #fff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height:calc(100vh - 100px) ;
  overflow: auto;
  padding: 10px;
}
</style>
<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px !important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
</style>
