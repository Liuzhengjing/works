<template>
 <div>
    <div class="Navbar" >
      
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">
            <router-link to="/newsong">
            新歌
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="2" >
            <router-link to="/rank">
                排行
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="3" >
            <router-link to="/plist">
                歌单
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="4" >
            <router-link to="/singer">
                歌手
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="5" >
            <router-link to="/personal">
                个人中心
            </router-link>
        </mt-tab-item>
     </mt-navbar>
    </div>
 </div>

</template>

<script>


  export default {
      data(){
          return{
              selected:0
          }
      }
    
  }
</script>

<style>
.page-part {
    margin-bottom: 15px;
    box-sizing: border-box;
    font-size: 14px;
        font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
}
.mint-navbar {
    background-color: #fff;
    display: flex;
    text-align: center;
}
.mint-navbar .mint-tab-item {
    padding: 17px 0;
    font-size: 15px;
        box-sizing: border-box;
}
.mint-tab-item {
    display: block;
    -webkit-box-flex: 1;
    flex: 1;
    text-decoration: none;
}
a {
    color: inherit;
}
.mint-navbar{
    text-align: center;
}



</style>