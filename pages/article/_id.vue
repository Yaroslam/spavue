<template>
  <div>
    <NavigationBar/>
    <SingleArticleBlock v-if="article" :article="article" />
    <comments-input :article_idef="article.id" @review-submitted="addComment"></comments-input>
    <CommentBlock :comments="comments"/>
  </div>
</template>

<script>

import SingleArticleBlock from '../../components/SingleArticleBlock';
import CommentBlock from "../../components/CommentBlock";
import commentsInput from "../../components/commentsInput";
import { COMMENTS_TO_ARTICLE } from "../../api/router";
import NavigationBar from "../../components/NavigationBar";


export default {
  name: 'ArticleMain',
  components: {
    commentsInput,
    SingleArticleBlock,
    CommentBlock,
    NavigationBar,
  },
  data() {
    return {
      article: null,
      comments: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch('fetchCommentsForArticle', id);
    console.log(this.article);
    if (id) {
      this.article = this.$store.getters.getArticlesById(id);
      this.comments = this.$store.getters.getComments;
    }
    // this.$store.dispatch('clearComments',)
  },




  methods: {
    addComment(commentData) {
      this.comments.push(commentData)
      fetch(COMMENTS_TO_ARTICLE(commentData.article_id), {
        method: 'POST',
        body: JSON.stringify(commentData)
      }).then(res => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })

    }
  }
};
</script>

<style scoped>
</style>
