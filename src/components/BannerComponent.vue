<template>
    <div class="container-xxl mb-3" id="banner_ctn">
        <div class="container position-relative">
            <img class="position-relative" src="@/assets/images/food.svg" alt="">
            <h1>DELIVERY</h1>
            <p>We’re proud to have our burger’s history
                being as long as 25 years!</p>
            <div class="btn_ctn">
                <a class="rounded-pill btn btn-primary" asp-controller="menu" asp-action="index">
                    <span>ORDER NOW</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent'
}
</script>

<style lang="scss" scoped>
@import '@/styles/global';
#banner_ctn {
    background-image: url(@/assets/images/banner-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 120px 0px 190px 135px;
}

#banner_ctn img {
    top: 60px;
    left: -50px;
}

#banner_ctn h1 {
    color: $white;
    font-size: 64px;
    font-weight: 400;
    text-transform: uppercase;
    font-style: normal;
    letter-spacing: 12.8px;
}

#banner_ctn p {
    color: #ffffff;
    font-family: var(--sub-font);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.8em;
    letter-spacing: 0px;
    max-width: 300px;
}
</style>