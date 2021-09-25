<template>
  <section class="article-list">
    <article class="has-image" v-for="article in articles" :key="article">
      <a :href="'/p/' + article.id">
        <div class="article-image">
          <img :src="article.image" loading="lazy" alt=""/>
        </div>
      </a>
      <div class="article-details">
        <header class="article-category">
          <a href="#">{{article.category }}</a>
        </header>
        <h2 class="article-title">
          <a :href="'/p/' + article.id">{{ article.title }}</a>
        </h2>
        <h3 class="article-subtitle">{{ article.subtitle }}</h3>
        <footer class="article-time">
          <div>
            <Calendar></Calendar>
            <time class="article-time--published">{{ article.createTime }}</time>
          </div>
          <div>
            <ClockRegular></ClockRegular>
            <time class="article-time--reading">阅读时长：{{ article.readTime }} 分钟</time>
          </div>
        </footer>
      </div>
    </article>
  </section>
  <n-pagination class="pagination" v-model:page="page" :page-count="num" default-page-size="size" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Calendar, ClockRegular } from '@vicons/fa'
export default defineComponent({
  name: 'Home',
  components: { Calendar, ClockRegular },
  setup () {
    return {
      page: ref(1),
      num: 10,
      size: 2,
      articles: [
        {
          id: 0,
          image: 'https://blog.wangjialei.xyz/images/2021-09-20.png',
          categoryId: 0,
          category: '开源项目',
          title: '个人博客项目开发完成',
          subtitle: 'SpringBoot + Vue 个人博客',
          createTime: 'Sep 20 2021',
          readTime: '2'
        },
        {
          id: 0,
          image: 'https://blog.wangjialei.xyz/images/2021-09-20.png',
          categoryId: 0,
          category: '开源项目',
          title: '个人博客项目开发完成',
          subtitle: 'SpringBoot + Vue 个人博客',
          createTime: 'Sep 20 2021',
          readTime: '2'
        }
      ]
    }
  }
})
</script>

<style scoped lang="scss">

</style>
