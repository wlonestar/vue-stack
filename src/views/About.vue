<template>
  <section class="article-page">
    <article class="main-article">
      <header class="article-header">
        <div class="article-details">
          <h2 class="article-title">
            <a href="#">关于</a>
          </h2>
        </div>
      </header>
      <section class="article-content">
        <p>👨‍💻</p>
        <ul>
          <li>半个技术宅😎</li>
          <li>喜欢尝试新事物，想法很多</li>
          <li>计算机专业在读</li>
          <li>目前对后端开发感兴趣</li>
          <li>Java 在学</li>
          <li>为了构建完整 web 应用还准备学前端™</li>
          <li>审美在线，偶尔画画</li>
          <li>不想成为穿格子衫的程序员😙</li>
        </ul>
        <p>Github：<a class="link" href="https://github.com/wjl-lab" target="_blank" rel="noopener">wjl-lab</a></p>
      </section>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'About',
  setup () {
    return {
      about: ''
    }
  }
})
</script>
