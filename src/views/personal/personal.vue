<template>
    <div class="personal-list">
        <ul class="personal-class-list">
            <li>
                <a>我的收藏</a>
            </li>
            <li>
                <a>本地音乐</a>
            </li>
            <li>
                <a>最近播放</a>
            </li>
        </ul>
    </div>
</template>


<style>
.personal-list {
  width: 100%;
  padding-top: 2rem;
}
.personal-class-list {
  margin: 1rem 0.7143rem 1.0714rem 0.7143rem;
  background: #fbfbfb;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  text-align: -webkit-match-parent;
  list-style-type: none;
}
.personal-class-list li{
        border-top: 1px solid #e4e4e4;
}
.personal-class-list a {
  padding: 0.7143rem;
  display: block;
  font-size: 1rem;
  color: #333;
}
</style>
