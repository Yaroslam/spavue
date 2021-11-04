<template>
<div>
  <section>
    <div>
      <div>
        <div>
          <img class="image" :alt="character.name" :src="`../${character.full_image}`">
          <h2>{{ character.name }}</h2>
            <div class="date">{{ character.date }}</div>
          <div>
            {{ character.desc }}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'SingleCharacterBlock',
  props: {
    character: {
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
