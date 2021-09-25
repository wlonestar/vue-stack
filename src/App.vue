<template>
  <div class="container main-container flex on-phone--column extended">
    <Left></Left>
    <main class="main full-width">
      <router-view></router-view>
      <Footer></Footer>
    </main>
    <Right></Right>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Footer from '@/components/Footer.vue'
export default defineComponent({
  name: 'App',
  components: { Left, Right, Footer }
})
</script>

<style lang="scss">

</style>
