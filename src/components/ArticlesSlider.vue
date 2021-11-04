<template>
  <div>
  <v-carousel>
    <v-carousel-item
        v-for="character in charactersWithPreview"
        :key="character.id"
        :src="character.preview_image">
    </v-carousel-item>
  </v-carousel>

  </div>
</template>

<script>
export default {
  name: "ArticlesSlider",
  created() {
    this.characters = this.$store.dispatch('fetchCharactersWithPreview');
  },

  computed: {
    charactersWithPreview() {
      return this.$store.state.charactersWithPreview;
    }
  },

}
</script>

<style scoped>

</style>
