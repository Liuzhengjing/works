<template>
    <div class="singer-list">
        <ul class="singer-class-list">
            <li
            v-for="(item,index) in list1"
            :key="index"
            >
                <a>{{item.classname}}</a>
            </li>
        </ul>
        <ul class="singer-class-list">
            <li
            v-for="(item,index) in list2"
            :key="index"
            >
                <a>{{item.classname}}</a>
            </li>
        </ul>
        <ul class="singer-class-list">
            <li
            v-for="(item,index) in list3"
            :key="index"
            >
                <a>{{item.classname}}</a>
            </li>
        </ul>
        <ul class="singer-class-list">
            <li
            v-for="(item,index) in list4"
            :key="index"
            >
                <a>{{item.classname}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: []
    };
  },
  async created() {
    let data = await axios
      .get("/proxy/singer/class?json=true")
      .then(({ data }) => {
        // console.log(data.list);
        this.list1 = data.list.slice(0, 1);
        this.list2 = data.list.slice(1, 4);
        this.list3 = data.list.slice(4, 7);
        this.list4 = data.list.slice(7);
      });
  }
};
</script>
<style>
.singer-list {
  width: 100%;
  padding-top: 2rem;
}
.singer-class-list {
  margin: 1rem 0.7143rem 1.0714rem 0.7143rem;
  background: #fbfbfb;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  text-align: -webkit-match-parent;
  list-style-type: none;
}
.singer-class-list li{
        border-top: 1px solid #e4e4e4;
}
.singer-class-list a {
  padding: 0.7143rem;
  display: block;
  font-size: 1rem;
  color: #333;
}
</style>
