<!--Header.vue-->
<template>
  <div class="header">
    <div class="left">
      <i
        v-if="hasBack"
        class="el-icon-back"
        style="margin-right: 10px"
        @click="back"
      ></i>

      <span style="font-size: 20px">{{ name }}</span>
    </div>
    <!-- <div class="right">右</div> -->
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Header",
  setup() {
    const router = useRouter();
    const state =reactive({
      name:'dashboard',
      hasBack:false
    })
    router.afterEach((to) => {
      const { id } = to.query;
      state.name = to.meta.title;
      console.log(to.name);
      state.hasBack = ["level2", "level3"].includes(to.name);
    });
    const back = () => {
      router.back();
    };
    return {
      ...toRefs(state),
      back,
    };
  },
};
</script>

<style scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>