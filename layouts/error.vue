<template>
    <div class="g-bd">
        <p style="color:dimgray">在人生的路上，你误入了歧途。</p>
        <h1>「ERR<span>O</span>R」</h1>
        <p><span>{{error.statusCode}} <br> {{error.message}}</span></p>
        <nuxt-link to="/" class="link-back">走，回家</nuxt-link>
    </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // 你可以为错误页面指定自定义的布局
}
</script>
<style lang="less" scoped>
    .g-bd{
        text-align: center;
        padding-top: 80px;
        h1{
            font-size: 5em;
            display: block;
            -webkit-margin-before: 0.67em;
            -webkit-margin-after: 0.67em;
            -webkit-margin-start: 0px;
            -webkit-margin-end: 0px;
            font-weight: bold;
        }
        span{
            color:crimson;
        }
    }
    .link-back{
        display: block;
        padding-top:45px;
        text-decoration: none;
        color:#44ab24;
        font-size: 35px;
        transition:font-size 0.1s;
        -webkit-transition:font-size 0.1s;
        &:hover{
            font-size:38px;
        }
    }
</style>