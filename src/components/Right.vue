<template>
  <aside class="sidebar right-sidebar sticky">
    <!-- archive -->
    <section class="widget archives">
      <div class="widget-icon">
        <Infinity class="icon"></Infinity>
      </div>
      <h2 class="widget-title section-title">归档</h2>
      <div class="widget-archive--list">
        <div class="archives-year">
          <a v-for="archive in archives" :key="archive" :href="'/archive/#' + archive.year">
            <span class="year">{{ archive.year }}</span>
            <span class="count">{{ archive.count }}</span>
          </a>
        </div>
      </div>
    </section>
    <!-- tag cloud -->
    <section class="widget tagCloud">
      <div class="widget-icon">
        <Star class="icon"></Star>
      </div>
      <h2 class="widget-title section-title">最新文章</h2>
      <div class="article-list--compact">
        <article v-for="article in articles" :key="article">
          <a :href="'/p/' + article.id">
            <div class="article-details">
              <h2 class="article-title">{{ article.title }}</h2>
              <footer class="article-time">
                <time class="article-time--published">{{ article.createTime }}</time>
              </footer>
            </div>
          </a>
        </article>
      </div>
    </section>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Star,
  Infinity
} from '@vicons/fa'
export default defineComponent({
  name: 'Right',
  components: { Star, Infinity },
  setup () {
    return {
      archives: [
        {
          year: 2020,
          count: 12
        },
        {
          year: 2021,
          count: 22
        }
      ],
      articles: [
        {
          id: 0,
          image: 'https://blog.wangjialei.xyz/images/2021-09-20.png',
          categoryId: 0,
          category: '开源项目',
          title: '个人博客项目开发完rtertetetreteyreyreye成',
          subtitle: 'SpringBoot + Vue 个人博客',
          createTime: 'Sep 20 2021',
          readTime: '2'
        },
        {
          id: 0,
          image: 'https://blog.wangjialei.xyz/images/2021-09-20.png',
          categoryId: 0,
          category: '开源项目',
          title: '个人博客项目开发完reeeeeeeeeeee成',
          subtitle: 'SpringBoot + Vue 个人博客',
          createTime: 'Sep 20 2021',
          readTime: '2'
        }
      ]
    }
  }
})
</script>

<style scoped>
.icon {
  color: #555
}
</style>
