<template>
    <div>
    <ul class="contents">
      <li v-for="article in articles" :key="article.id">
        <p>{{ article.id }}</p>
        <p>{{ article.title }}</p>
        <p>{{ article.body }}</p>
        <p>{{ article.thumbnailPath }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import getAllArticles from '../../api/getAllArticles';
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: null,
      loading: true
    }
  },
  created() {
    this.getAllArticles("http://localhost:3000/api/articles/")
  },
  methods: {
    async getAllArticles(url) {
      this.articles = await getAllArticles.getAllArticles(url);
      this.loading = false;
    }
  }
}
</script>
