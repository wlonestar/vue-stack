<template>
  <aside class="sidebar left-sidebar sticky">
    <button class="hamburger hamburger--spin" type="button" id="toggle-menu" aria-label="">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
    <header class="site-info">
      <figure class="site-avatar">
        <img :src="info.avatar" class="site-logo" loading="lazy" alt="Avatar">
        <span class="emoji">3</span>
      </figure>
      <h1 class="site-name"><a href="#">{{ info.nickname }}</a></h1>
      <h2 class="site-description">{{ info.slogan }}</h2>
    </header>
    <ol class="menu" id="main-menu">
      <li>
        <router-link to="/">
          <Home class="icon"></Home><span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/archive">
          <Archive class="icon"></Archive><span>归档</span>
        </router-link>
      </li>
      <li>
        <router-link to="/category">
          <Bookmark class="icon"></Bookmark><span>分类</span>
        </router-link>
      </li>
      <li>
        <router-link to="/link">
          <Link class="icon"></Link><span>友链</span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <User class="icon"></User><span>关于</span>
        </router-link>
      </li>
    </ol>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Home,
  Archive,
  Bookmark,
  Link,
  User
} from '@vicons/fa'

export default defineComponent({
  name: 'Left',
  components: {
    Home,
    Archive,
    Bookmark,
    Link,
    User
  },
  setup () {
    return {
      info: {
        avatar: 'https://blog.wangjialei.xyz/img/avatar_hud2f63dea884dfc84ed96fda9ff62e373_105884_300x0_resize_q75_box.jpg',
        nickname: 'LoneStar',
        slogan: 'do what you love'
      }
    }
  }
})
</script>

<style scoped>
.icon {
  color: #555
}
</style>
