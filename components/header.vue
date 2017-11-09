<template>
    <header>
        <div class="m-logo">
            <a href="/" title="回到首页"><h1>Kinice的个人博客</h1></a>
            <i class="iconfont menu">&#xe606;</i>
            <div class="mobile-menu">
                <form action="/search" method="GET">
                   <input type="text" placeholder="search" name="keyword">
                </form>
                <nav>
                    <ul>
                        <li><nuxt-link to="/">主页</nuxt-link></li>
                        <li><nuxt-link to="/aboutme.html">关于我</nuxt-link></li>
                        <li><nuxt-link to="/articleList/all">文章列表</nuxt-link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="iconfont pin">&#xe60f;</div>
        <div class="m-input">
            <form action="/search" method="GET">
                <input type="text" placeholder="search" name="keyword"/>
                <input type="submit" value=""/>
            </form>
        </div>
        <nav class="out-nav">
            <ul>
                <li><nuxt-link to="/">主页</nuxt-link></li>
                <li>
                    <a href="/impress/aboutme.html">关于我</a>
                    <ul class="li-inside">
                        <li><a href="https://github.com/Kinice/" class="iconfont" target="_blank">&#xe600;</a></li>
                    </ul>
                </li>
                <li>
                    <nuxt-link to="/articleList/all">文章列表</nuxt-link>
                    <ul class="li-inside">
                        <li><nuxt-link to="/articleList/about-code">工作日常</nuxt-link></li>
                        <li><nuxt-link to="/articleList/brain-hole">脑洞钻孔</nuxt-link></li>
                        <li><nuxt-link to="/articleList/niu-b">牛B网文</nuxt-link></li>
                        <li><a href="http://i.youku.com/kinicepro" target="_blank">自导视频</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default{

    }
</script>
<style lang="less">
    
</style>