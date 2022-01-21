<template>

  <div class="home">
    <NavigationBar/>
    <v-container v-for="(article, index) in articles"
                 :key="article.id">
      <v-row v-if="article.id % 3 === 1">
        <v-col>
          <v-card class="image-wrapper">
            <SoloPic  :article="articles[articles.length - (articles.length - index)]"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="image-wrapper">
            <SoloPic  :article="articles[articles.length - (articles.length - index)+1]"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="image-wrapper">
            <SoloPic :article="articles[articles.length - (articles.length - index)+2]"/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue';
import SoloPic from "../components/SoloPic.vue";

export default {
  name: 'Gallery',
  components: { SoloPic,
    NavigationBar},
  data() {
    return {
      currentPage: 1,
    };
  },
  created() {
    this.$store.dispatch('fetchArticles');
  },

  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/Blog-Template.css';
@import '../assets/nicepage.css';
@import '../assets/styles.css';
</style>
