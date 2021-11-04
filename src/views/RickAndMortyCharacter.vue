<template>
  <div>
 <SingleCharacterBlock v-if="character" :character="character"/>
  <comments-input :article_idef="character.id"  @review-submitted="addComment"></comments-input>
  <CommentBlock :comments="comments"/>
  </div>
</template>

<script>

import SingleCharacterBlock from '@/components/SingleCharacterBlock';
import CommentBlock from "@/components/CommentBlock";
import commentsInput from "@/components/commentsInput";
import { COMMENTS_TO_ARTICLE } from "@/api/router";


export default {
  name: 'RickAndMortyCharacter',
  components: {
    commentsInput,
    SingleCharacterBlock,
    CommentBlock,
  },
  data() {
    return {
      character: null,
      comments: [],
    };
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch('fetchCommentsForArticle', id);
    if (id) {
      this.character = this.$store.getters.getCharactersById(id);
      this.comments = this.$store.getters.getComments;
    }
    this.$store.dispatch('clearComments',)
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
