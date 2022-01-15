<template>
  <nav>
    <v-toolbar :color="'black'"
               dark>
      <div class="logo-wrapper">
      <v-img src="logo-100-100.jpg"
             :max-height="64"
             :max-width="64"
      ></v-img>
      </div>

      <div class="search-wrapper">
        <div class="search-field">
          <v-text-field
          solo
        ></v-text-field>
      </div>
        <div class="btn-search-wrapper">
        <v-btn><v-icon>mdi-magnify</v-icon></v-btn>
        </div>
      </div>

      <div class="group-btm-wrapper">
        <div class="btn-wrapper"><nuxt-link :to="'/'"><v-btn>Главная</v-btn></nuxt-link></div>
        <div class="btn-wrapper"><nuxt-link :to="'articlesList'"><v-btn>Статьи</v-btn></nuxt-link></div>
        <div class="btn-wrapper"><nuxt-link :to="'Gallery'"><v-btn>Галерея</v-btn></nuxt-link></div>
      </div>


    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped lang="scss">
@import '../assets/Blog-Template.css';
@import '../assets/nicepage.css';
@import '../assets/styles.css';
</style>
