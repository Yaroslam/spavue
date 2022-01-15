<template>
    <div class="u-body">
      <NavigationBar/>
    <section class="u-clearfix u-valign-bottom-sm u-section-1" id="carousel_fcdc">
      <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div class="u-gutter-0 u-layout">
          <div class="u-layout-row">
            <div class="u-align-left u-container-style u-image
            u-layout-cell u-left-cell u-size-25
             u-size-60-md u-image-1" data-image-width="1600" data-image-height="907">
              <div class="u-container-layout u-container-layout-1"></div>
            </div>
            <div class="u-align-center-sm u-align-center-xs u-align-left-lg
            u-align-left-md u-align-left-xl u-container-style u-layout-cell
             u-size-11-sm u-size-11-xs u-size-12-lg u-size-12-xl u-size-60-md u-layout-cell-2">
              <div class="u-container-layout u-valign-middle u-container-layout-2">
                <div alt="" class="u-image u-image-circle u-image-2"
                     data-image-width="1000" data-image-height="1000"></div>
              </div>
            </div>
            <div class="u-align-center-md u-align-center-sm u-align-center-xs
            u-align-left-lg u-align-left-xl u-container-style u-layout-cell
            u-right-cell u-size-23-lg u-size-23-xl u-size-24-sm u-size-24-xs u-size-60-md
            u-layout-cell-3">
              <div class="u-container-layout u-valign-middle-lg u-valign-top-md
              u-valign-top-sm u-valign-top-xs u-container-layout-3">
                <h2 class="u-custom-font u-font-ubuntu
                u-text u-text-1">Приветствуем вас на нашем новостном сайте</h2>
                <router-link to="/articles"
                   class="u-border-2 u-border-active-grey-90 u-border-black u-border-hover-grey-90
                   u-btn u-button-style u-none u-text-active-grey-90 u-text-black
                    u-text-hover-grey-90 u-btn-1">Articles</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <ArticlesSlider/>
    </div>
</template>

<script>
import ArticlesSlider from '@/components/ArticlesSlider'
import NavigationBar from '@/components/NavigationBar'

export default {
  name: 'HelloPage',
  components: {
    ArticlesSlider,
    NavigationBar,
  }
};
</script>

<style>
@import '../assets/HelloPage.css';
@import '../assets/nicepage.css';
@import '../assets/styles.css';
</style>
