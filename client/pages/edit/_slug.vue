<template>
  <div class="content">
    <div v-if="!loading">
    <div>
      {{ article.id }}
      {{ article.title }}
      {{ article.body }}
      {{ article.thumbnailPath }}
    </div>
    <!-- <div v-else>
      <p>Oops...</p>
    </div> -->
    <p>{{ article }}</p>
    <form>
      <p>
        <label>Blog Title</label>
        <input v-model="article.title">
      </p>
      <p>
        <label>Blog Body</label>
        <input v-model="article.body">
      </p>
      <input type="submit" value="保存" @click="updateArticle">
    </form>
  </div>
  </div>
</template>

<script>
import getOneArticle from '../../api/getOneArticle';
import updateArticle from '../../api/updateArticle';
export default {
  data() {
    return {
      article: null,
      url: null,
      loading: true,
    }
  },
  created() {
   this.getArticle(`http://localhost:3000/api/articles/${this.$route.params.slug}`)
  },
  methods: {
    async getArticle(url) {
      this.article = await getOneArticle.getOneArticle(url)
      this.loading = false;
    },
    async updateArticle(url) {
      await updateArticle.updateArticle(url);
    }
  }
}
</script>