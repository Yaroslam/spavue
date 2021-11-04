<template>
  <div>
    <div>
    <v-card class="comment"  v-for="comment in comments"
            :key="comment.id">
      <v-card-title>
        {{comment.user_name}}
      </v-card-title>

      <v-card-text>
        {{comment.comment}}
      </v-card-text>

    </v-card>

  </div>
  </div>
</template>

<script>
export default {
  name: "CommentBlock",

  props: {
    comments: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
