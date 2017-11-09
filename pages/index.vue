<template>
  <div class="g-bd">
      <div class="g-top">
          <div class="m-info">
              <h1>Kinice`s BLOG</h1>
              <p>I'm free to be the GREATEST</p>
          </div>
      </div>
      <div class="g-inner">
          <div class="m-index" v-for="data in datas">
            <h2>        
                <a :href="'article/'+data._id">{{ data.title }}</a>
                <template v-if="isLogin">
                  <a :href="'remove/' + data._id"><i class="iconfont delete">&#xe611;</i></a>
                  <a :href="'edit/' + data._id"><i class="iconfont delete">&#xe601;</i></a>
                </template>
            </h2>
            <p class="info">
             {{ data.name }} · {{ data.time }} · 分类：<a :href="'/articleList/' + data.tag ">{{ data.tac }}</a>
                   · 标签：
                   <a href="/search?keyword=oasdasd" v-for="item in data.describe">{{ item }}</a>
            </p>
            <p class="info">
              <i class="iconfont delete">&#xe610;&nbsp;</i>{{ data.comment }}
            </p>
            <p class="pre">{{ data.prepost }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    let mockData = () => {
      let data = {
        title: '啊时间卡德纳斯呢大康就啊蛇年大吉卡萨卡德',
        _id: 'daknadnasd999123123',
        name: 'Kinice',
        time: '2017-10-23',
        describe: ['一个','两个','三个'],
        tag: 'work',
        tac: '工作日常',
        comment: 3,
        prepost: '啊时间卡德纳斯呢大康就啊蛇年大吉卡萨卡德纳斯呢大康就啊蛇年大吉卡萨卡德纳斯呢大康就啊蛇年大吉卡萨卡德纳斯呢大康就啊蛇年大吉卡萨卡德纳斯呢大康就啊蛇年大吉卡萨诺大家看世界大康那时刻记得那可是你打算觉得那是你的卡上'
      },finalData = [];
      for(let i = 0; i < 10; i++){
        finalData.push(data)
      }
      return finalData
    }
    return {
      isLogin: true,
      datas: mockData()
    }
  },
  components: {
    Logo
  },
  mounted() {
    new Promise((resolve, reject) => {
      let audio = document.createElement('audio')
      audio.src = 'http://mp3.baidu.com/asdsadasdas/asasdsd.mp3'
      resolve(audio)
    }).then((audio) => {
      console.log(audio)
    })
  }
}
</script>

<style>
.g-index{
  margin-bottom: 38px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
