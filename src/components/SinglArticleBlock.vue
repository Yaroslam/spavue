<template>
<div>
  <section>
    <div>
      <div>
        <div>
          <img class="image" :alt="article.name" :src="`../${article.full_image}`">
          <h2>{{ article.name }}</h2>
            <div class="date">{{ article.date }}</div>
          <div>
            {{ article.desc }}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'SingleArticleBlock',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.date {
  margin-bottom: 10px;
}

.image {
  width: 80%;
  height: 250px;
}
</style>
