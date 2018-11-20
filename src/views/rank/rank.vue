<template>
    <div>
        <ul class="rank-list">
            <li
            class="rank-list-item"
            v-for="(item,index) in list" 
            :key="index"
            >
            <img :src="item.imgurl.replace(/\{size}/,400)">
            <span class="rankname">
                {{item.rankname}}
            </span>
            </li>
        </ul>
    </div>
</template>



<script>

import axios from "axios";
export default {
    data(){
        return{
            list:[]
        }
    },
     async created() {
        let data = await axios("/proxy/rank/list?json=true")
        console.log(data.data.rank.list)
        this.list = data.data.rank.list
    }
}
</script>


<style>

.rank-list-item{
    margin: 0.5 rem;
    border-bottom: 1px solid teal;
}
.rank-list img{
    width: 6rem;
    height: 6rem;
}
.rankname{
    line-height: 1rem;
    font-size: 1.0714rem;
    color: #333;
    font-family: 'Microsoft Yahei';

}
</style>
