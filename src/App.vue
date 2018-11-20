<template>
  <div id="app">
    <mt-header title="小太阳的音乐库">
    <mt-button 
    
     icon="back"
      slot="left"
      >返回</mt-button>
    <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view name="nav" :num="num"></router-view>
    <router-view></router-view>
  </div>
</template>



<script>
export default {
  name: "APP",
  data() {
    return {
      num: 0
    };
  }
};
</script>


<style>
body {
  user-select: none;
  font-family: Helvetica Neue, Helvetica, STHeiTi, Arial, sans-serif;
}
.mint-header {
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(219, 87, 10);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 14px;
  height: 40px;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
}
.page-header-main > * {
  margin-bottom: 15px;
}
</style>

