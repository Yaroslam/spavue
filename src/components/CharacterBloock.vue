<template>
  <div>
    <span @click="detailedInfo" class="u-post-header-link" ><img alt="" width="350" height="350" :src="character.preview_image"></span>
    <div>{{ character.shortDesc }}
    </div>
    <span @click="detailedInfo" class="u-blog-control
    u-border-2 u-border-palette-1-base u-btn u-btn-rectangle
    u-button-style u-none u-btn-1">Read More</span>
  </div>
</template>

<script>
export default {
  name: 'CharacterBloock',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    detailedInfo() {
      this.$router.push({ name: 'CharacterDetails', params: { id: this.character.id } });
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/Blog-Template.css';
@import '../assets/nicepage.css';
@import '../assets/styles.css';
</style>
