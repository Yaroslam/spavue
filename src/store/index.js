import Vue from 'vue';
import Vuex from 'vuex'
// import axiosInstance from '@/api/index';
import { ARTICLES, COMMENTS_TO_ARTICLE } from "@/api/router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: [],
    characters: [],
    charactersWithPreview: [],
    pages: 0,
  },
  mutations: {
    setCharacters(state, { characters }) {
      state.characters = characters;
    },

    setCharactersWithPreview(state, { charactersWithPreview }) {
      state.charactersWithPreview.push(charactersWithPreview);
    },

    setPages(state, pages) {
      state.pages = pages;
    },

    setCommentsForArticle(state, { commentsForArticle }) {
      state.comments.push(commentsForArticle);
    },

    setEmptyComments(state){
      state.comments.splice(0,state.comments.length);
    }

  },

  actions: {
    fetchCharacters({commit}) {
      return  fetch(ARTICLES).then((res) => res.json())
          .then((data) => {
            commit('setCharacters', { characters: data });
            console.log(data);
          });
    },

    fetchCharactersWithPreview({ commit }) {
      return fetch(ARTICLES).then((res) => res.json())
          .then((data) => {
            data.forEach(function(i){
              if(i.slider) {
                commit('setCharactersWithPreview', {charactersWithPreview: i});
              }
            });
          });
    },

    fetchCommentsForArticle({ commit }, id) {
      return fetch(COMMENTS_TO_ARTICLE(id)).then((res) => res.json())
          .then((data) => {
            data.forEach(function(i){
              if(i.article_id === id) {
                commit('setCommentsForArticle', {commentsForArticle: i});
              }
            });
           });
    },

    clearComments({commit}) {
      commit('setEmptyComments');
    }


  },
  getters: {
    getCharactersById: (state) => (id) => {
      const pageCharacters = state.characters;
      if (pageCharacters) {
        return pageCharacters[id - 1];
      }
    },

    getCharactersByPage: (state) => (page) => state.characters[page],

    characterById() {
      return this.$store.getters('getCharactersById');
    },

    getComments:( state ) => {
      const pageComments = state.comments;
      return pageComments;
    }

  },

});
