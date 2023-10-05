<template>
    <div class="row" id="top-header">
        <div class="col-3 d-flex justify-content-center align-items-center">
            <a class="text-decoration-none link" :href="'tel:' + phoneNumber">
                <font-awesome-icon icon="fa-solid fa-phone" class="icon"/>
                <span class="ps-2">{{ phoneNumber }}</span>
            </a>
        </div>
        <div class="col-6">
            <router-link class="nav-link text-center" to="/"><img :src="require(`@/${logo.url}`)" :alt="logo.name"></router-link>
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
            <a class="text-decoration-none link" :href="address.link" target="blank">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
                <span class="ps-3">{{ address.string }}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopHeader',
    data() {
        return {
            phoneNumber: '+1 (800) 312-2121',
            address: { string: '172 14th Street, Office 503, NY', link: 'https://goo.gl/maps/j1jB3gpFdMBbycoi7' },
            logo: {name: 'Burgelo Logo',url:'assets/images/logo.svg'}
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

#top-header {
    height: 7.6rem;
}

.link {
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    color: #000;
    padding: 3rem auto;

    &:hover {
        color: $primary;
    }
}
.icon{
    color: $primary;
}
</style>