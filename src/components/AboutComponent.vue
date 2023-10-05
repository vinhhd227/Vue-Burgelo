<template>
    <!--About-->
    <div class="container-xxl row mb-3" id="about">
        <div class="col-12 col-lg-6 text-center" id="about__image">
            <img class="" src="@/assets/images/about.png" alt="">
        </div>
        <div class="d-flex flex-column justify-content-around col-12 col-lg-6" id="about__content">
            <h2>Best prise always</h2>
            <div class="stars_ctn">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon class="mx-5" icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-solid fa-star" />
            </div>
            <p>
                The perfect place to enjoy the life & delicious food with your
                friends!
                <!-- <br />  -->
                Our family has been in the restaurant business for a very
                long time.
                <!-- <br />  -->
                Nowadays we can proudly boast our reputation for a
                well known restaurant in our area. We are famous for the fabulous
                authentic cuisine, professional chef and dedicated staff….
            </p>
            <div class="row">
                <div class="col text-center">
                    <img src="@/assets/images/about1.svg" alt="">
                    <h3 class="py-2">good food</h3>
                </div>
                <div class="col text-center">
                    <img src="@/assets/images/about2.svg" alt="">
                    <h3 class="py-1">fast delivery</h3>
                </div>
                <div class="col text-center">
                    <img src="@/assets/images/about3.svg" alt="">
                    <h3 class="py-2">nice prise</h3>
                </div>
                <div class="col-xl-3 col-xxl-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',
}
</script>

<style lang="scss" scoped>
@import '@/styles/global';


#about__image {
    padding: 6.8rem 1.2rem 0 0;

    img {
        width: 100%;
    }
}

#about__content {
    padding: 16.3rem 0 0 0;

    .stars_ctn {
        color: $primary ;
    }

    h2,
    p,
    .stars_ctn,
    .row {
        padding-left: 50px;
    }

    h2 {
        font-size: 4.8rem;
        font-weight: 400;
        text-transform: uppercase;
        font-style: normal;
        letter-spacing: 0.48rem;
    }

    p {
        font-family: $font-family-sub;
        font-size: 1.4rem;
        font-weight: 300;
        text-transform: none;
        font-style: normal;
        line-height: 3rem;
        letter-spacing: 0.14rem;
        text-align: justify;
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 300;
        text-transform: uppercase;
        font-style: normal;
        line-height: 2.5rem;
        letter-spacing: 0.14rem;
    }
}
</style>