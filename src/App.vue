<template>
  <header>
    <top-header></top-header>
    <navbar-component></navbar-component>
  </header>
  <router-view />
  <contact-component></contact-component>
  <map-component></map-component>
  <footer-component></footer-component>

</template>

<script>
import TopHeader from '@/components/TopHeader.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import MapComponent from '@/components/MapComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: { TopHeader, NavbarComponent, ContactComponent, MapComponent, FooterComponent},
}
</script>
<style lang="scss" scoped>
@import '@/styles/global';

</style>
