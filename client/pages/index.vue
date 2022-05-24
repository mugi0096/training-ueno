/* eslint-disable object-shorthand */
<template>
  <div>
    <Footer />
    <h1>Test</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <p>{{ article.id }}</p>
        <p>{{ article.title }}</p>
        <p>{{ article.body }}</p>
        <p>{{ article.thumbnailPath }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Article from '../types/article';
import Footer from '../components/Footer.vue';
export default {
  name: 'IndexPage',
  components: {
    Footer: Footer
  },
  data(): {
    articles: Article[],
  } {
    return {
      articles: [
        {
          id: 1,
          title: "Blog",
          body: "blog content",
          thumbnailPath: "/aaa/a",
          isDist: true,
        }
      ]
    }
  },
}
</script>
