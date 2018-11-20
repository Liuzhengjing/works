<template>
    <div>
        <ul class="p-list">
            <li
            class="p-list-item"
            v-for="(item,index) in list"
            :key="index"
            >
            <a>
                <span>
                    <img :src="item.imgurl.replace(/\{size}/,400)">
                </span>
                <span class="p-list-name">
                    {{item.specialname}}
                </span>
            </a>
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
    async created(){
        let data = await axios ("/proxy/plist/index?json=true")
        // console.log(data.data.plist.list.info)
        this.list = data.data.plist.list.info
    }
}
</script>

<style>

.p-list-item{
    margin: 0.5 rem;
    border-bottom: 1px solid teal;
}
.p-list img{
    width: 6rem;
    height: 6rem;
}
.p-list-name{
    line-height: 1rem;
    font-size: 1.0714rem;
    color: #333;
    font-family: 'Microsoft Yahei';

}
</style>
