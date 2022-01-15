<template>
  <div>
    <span class="u-post-header-link" ><img alt="" width="350" height="350" :src="article.preview_image"></span>
    <div>
      это изображение о том то о сем то
    </div>
  </div>
</template>

<script>
export default {
  name: "SoloPic",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
