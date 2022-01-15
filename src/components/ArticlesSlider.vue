<template>
  <div>
  <v-carousel>
    <v-carousel-item
        v-for="article in articlesWithPreview"
        :key="article.id"
        :src="article.preview_image">
    </v-carousel-item>
  </v-carousel>

  </div>
</template>

<script>
export default {
  name: "ArticlesSlider",
  created() {
    this.articles = this.$store.dispatch('fetchArticlesWithPreview');
  },

  computed: {
    articlesWithPreview() {
      console.log(this.$store.state.articlesWithPreview)
      return this.$store.state.articlesWithPreview;
    }
  },

}
</script>

<style scoped>

</style>
