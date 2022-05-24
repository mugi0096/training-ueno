/* eslint-disable object-shorthand */
<template>
  <v-app>
    <Header />
    <h1>Test</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <p>{{ article.id }}</p>
        <p>{{ article.title }}</p>
        <p>{{ article.body }}</p>
        <Card />
      </li>
    </ul>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Article from '../types/article';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';
export default {
  name: 'IndexPage',
  components: {
    Header: Header,
    Footer: Footer,
    Card: Card,
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
