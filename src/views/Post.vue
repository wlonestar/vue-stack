<template>
  <section class="article-page">
    <article class="has-image main-article">
      <header class="article-header">
        <div class="article-image">
          <a href="#">
            <img :src="article.image" loading="lazy" alt="" />
          </a>
        </div>
        <div class="article-details">
          <header class="article-category">
            <a href="#">{{ article.category }}</a>
          </header>
          <h2 class="article-title">
            <a href="#">{{ article.title }}</a>
          </h2>
          <h3 class="article-subtitle">{{ article.subtitle }}</h3>
          <footer class="article-time">
            <div>
              <Calendar></Calendar>
              <time class="article-time--published">{{ article.createTime }}</time>
            </div>
            <div>
              <ClockRegular></ClockRegular>
              <time class="article-time--reading">ReadingTime</time>
            </div>
          </footer>
        </div>
      </header>
      <section class="article-content">
        {{ article.content }}
      </section>
      <footer class="article-footer">
        <section class="article-tags">
          <a href="#" v-for="tag in article.tags" :key="tag">{{ tag.name }}</a>
        </section>
      </footer>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Calendar, ClockRegular } from '@vicons/fa'
export default defineComponent({
  name: 'Post',
  components: { Calendar, ClockRegular },
  setup () {
    return {
      article: {
        id: 0,
        image: 'https://blog.wangjialei.xyz/images/2021-09-20.png',
        categoryId: 0,
        category: '开源项目',
        title: '个人博客项目开发完成',
        subtitle: 'SpringBoot + Vue 个人博客',
        createTime: 'Sep 20 2021',
        content: '# 2314124',
        tags: [
          {
            id: 0,
            name: 'tag1'
          },
          {
            id: 2,
            name: 'tag2'
          }
        ]
      }
    }
  }
})
</script>

<style scoped>

</style>
