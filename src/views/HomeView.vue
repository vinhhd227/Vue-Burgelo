<template>
  <div class="home">
    <banner-component></banner-component>
    <about-component></about-component>
    <trending-component></trending-component>
    <promotion-component></promotion-component>
    <food-component></food-component>
    <delivery-component></delivery-component>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerComponent from '@/components/BannerComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import TrendingComponent from '@/components/TrendingComponent.vue';
import PromotionComponent from '@/components/PromotionComponent';
import FoodComponent from '@/components/FoodComponent.vue';
import DeliveryComponent from '@/components/DeliveryComponent.vue';

export default {
  name: 'HomeView',
  components: {
    BannerComponent, AboutComponent, TrendingComponent, PromotionComponent, FoodComponent, DeliveryComponent
  }
}
</script>
