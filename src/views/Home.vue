<template>
  <div class="home">
    <HelloWorld msg="Vue Template" />
    <div class="rem-test">rem-test</div>
    <van-button type="primary" class="btn-vant">vant</van-button>
    <el-button type="primary">element</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="stylus">
.rem-test {
  font-size: 32px;
  margin: 15px;
}

.btn-vant {
  margin-right: 20px;
}
</style>
