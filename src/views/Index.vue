<template>
  <div><el-button type="primary">HelloWorld</el-button></div>
</template>

<script>
export default {
  name:"Index",
  setup(){
    const ENV = import.meta.env
    console.log('ENV',ENV);//获取环境变量
  }
}
</script>