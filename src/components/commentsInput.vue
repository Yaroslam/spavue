<template>
<div>
  <form class="review-form" @submit.prevent="onSubmit">
    <input v-model="user_name"  placeholder="name">
    <input v-model="comment" placeholder="comment">
    <input type="submit" value="Submit">
  </form>
</div>
</template>

<script>
export default {
  name: "commentsInput",

  props: {
    article_idef: {
      type: Number,
      required: true,
    }
  },

  data() {
    return {
      user_name: null,
      comment: null,
      article_id: null,
    }
  },

  methods: {
    onSubmit() {
      let commentData = {
        user_name: this.user_name,
        comment: this.comment,
        article_id: this.article_idef,
      }
      this.$emit('review-submitted', commentData)
      this.user_name = null
      this.comment = null
      this.article_id = null
    },
  }

}
</script>

<style scoped>

</style>
