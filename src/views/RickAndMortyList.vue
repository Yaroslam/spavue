<template>

  <div class="home">
    <v-container v-for="(character, index) in characters"
                 :key="character.id">
            <v-row v-if="character.id % 3 === 1">
              <v-col>
                <v-card class="image-wrapper">
                  <characterBloock  :character="characters[characters.length - (characters.length - index)]"/>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="image-wrapper">
                  <characterBloock  :character="characters[characters.length - (characters.length - index)+1]"/>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="image-wrapper">
                  <characterBloock  :character="characters[characters.length - (characters.length - index)+2]"/>
                </v-card>
              </v-col>
            </v-row>
          </v-container>


        </div>
      </template>

      <script>
      import CharacterBloock from '@/components/CharacterBloock.vue';

      export default {
        name: 'RickAndMortyList',
        components: { CharacterBloock },
        data() {
          return {
            currentPage: 1,
          };
        },
        created() {
          this.$store.dispatch('fetchCharacters');
        },

        computed: {
          characters() {
            return this.$store.state.characters;
          },
        },
      };
      </script>

<style scoped lang="scss">
@import '../assets/Blog-Template.css';
@import '../assets/nicepage.css';
@import '../assets/styles.css';
</style>
