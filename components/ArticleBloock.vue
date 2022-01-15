<template>
  <div>
    <nuxt-link :to="'/article/' + article.id"><span class="u-post-header-link" ><img alt="" width="350" height="350" :src="article.preview_image"></span></nuxt-link>
    <div>{{ article.shortDesc }}
    </div>
    <nuxt-link :to="'/article/' + article.id"><span class="u-blog-control
    u-border-2 u-border-palette-1-base u-btn u-btn-rectangle
    u-button-style u-none u-btn-1">Read More</span></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleBloock',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/Blog-Template.css';
@import '../assets/nicepage.css';
@import '../assets/styles.css';
</style>
