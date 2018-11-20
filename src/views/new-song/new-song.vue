
<template>
    <div v-if="no">
        <div class="top-banner">
            <mt-swipe :auto="3000">
                <mt-swipe-item
                v-for="(item,index) in banner"
                :key="index"
                >
                <img :src="item.imgurl">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div>
            <ul>
                <li
                v-for="(item,index) in songlist"
                :key="index"
                class="songlist"
                >
                {{item.filename}}
                <div class="downicon"><img src="../../assets/下载.png"></div>
                </li>
                
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      banner: [],
      songlist: [],
      no: false
    };
  },
  async created() {
    let data = await axios("/proxy/?json=true");
    // console.log(data.data.data);
    this.banner = data.data.banner;
    this.songlist = data.data.data;
    this.no = true;
  }
};
</script>

<style>
.top-banner {
  height: 170px;
  margin-top: 3px;
}
.top-banner img {
  width: 100%;
}
.page-swipe .mint-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  position: relative;
}
.mint-swipe-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
}
.mint-swipe-indicator {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
  margin: 0 3px;
  box-sizing: border-box;
}
.songlist {
  font-size: 1rem;
  padding-left: 0.3571rem;
  padding-right: 1rem;
  font-family: "Microsoft Yahei";
  height: 80px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid teal;
}
.downicon{
  margin-top: 1.5rem;
  float: right;
}
.downicon img{
  width: 2rem;
  height: 2rem;
}
</style>

