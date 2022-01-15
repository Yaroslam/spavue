import Vue from 'vue';
import Vuex from 'vuex'
// import axiosInstance from '@/api/index';
import { ARTICLES, COMMENTS_TO_ARTICLE } from "../api/router";

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: {
    comments: [],
    articles: [],
    articlesWithPreview: [],
    pages: 0,
  },
  mutations: {
    setArticles(state, { articles }) {
      state.articles = articles;
    },

    setArticlesWithPreview(state, { articlesWithPreview }) {
      state.articlesWithPreview = articlesWithPreview;
    },

    setPages(state, pages) {
      state.pages = pages;
    },

    setCommentsForArticle(state, { commentsForArticle }) {
      state.comments = commentsForArticle;
    },

    setEmptyComments(state){
      state.comments.splice(0,state.comments.length);
    }

  },

  actions: {
    fetchArticles({commit}) {
      return  fetch(ARTICLES).then((res) => res.json())
          .then((data) => {
            commit('setArticles', { articles: data });
          });
    },

    fetchArticlesWithPreview({ commit }) {
      return fetch(ARTICLES).then((res) => res.json())
          .then((data) => {
            let art_slide = []
            console.log(data)
            data.forEach(function(i){
              if(i.slider) {
                art_slide.push(i);
              }
            });
            commit('setArticlesWithPreview', {articlesWithPreview: art_slide})
          });
    },

    fetchCommentsForArticle({ commit }, id) {
      return fetch(COMMENTS_TO_ARTICLE(id)).then((res) => res.json())
          .then((data) => {
            commit('setCommentsForArticle', {commentsForArticle: data});
           });
    },

    clearComments({commit}) {
      commit('setEmptyComments');
    }


  },
  getters: {
    getArticlesById: (state) => (id) => {
      const pageArticles = state.articles;
      if (pageArticles) {
        return pageArticles[id - 1];
      }
    },

    getArticlesByPage: (state) => (page) => state.articles[page],

    ArticlesById() {
      return this.$store.getters('getArticlesById');
    },

    getComments:( state ) => {
      console.log(state)
      console.log(state.articles)
      return state.comments;
    }

  },

});
