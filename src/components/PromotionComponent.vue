<template>
    <div class="container-xxl mt-3 py-5" id="promotion_ctn">
        <div class="d-block d-xl-none my-2">
            <a class="text-decoration-none">
                <div class="promotion__main d-flex justify-content-center align-items-center">
                    <div class="main__content text-center">
                        <h3>
                            <span>SPECIAL OFFER</span>
                            <br>
                            BUY 2 GET 3
                        </h3>
                        <p class="mt-5">Use Our Special Offer Quicker!</p>
                    </div>
                </div>
            </a>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-xl-3 my-2">
                <a class="text-decoration-none">
                    <div class="promotion__left d-flex justify-content-center align-items-end">
                        <div class="left__content text-center mb-5">
                            <img class="mt-5" src="@/assets/images/happy.svg" alt="happy">
                            <h4>HOURS</h4>
                            <p>Mon - Fri 1 P.M. - 3 P.M.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-6 d-none d-xl-block my-2">
                <a class="text-decoration-none">
                    <div class="promotion__main d-flex justify-content-center align-items-center">
                        <div class="main__content text-center">
                            <h3>
                                <span>SPECIAL OFFER</span>
                                <br>
                                BUY 2 GET 3
                            </h3>
                            <p class="mt-5">Use Our Special Offer Quicker!</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-6 col-xl-3 my-2">
                <a class="text-decoration-none">
                    <div class="promotion__right">
                        <div class="right__content text-center">
                            <img class="mt-5" src="@/assets/images/15-off.svg" alt="">
                            <h4>FIRST ORDER</h4>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromotionComponent',
}
</script>

<style lang="scss" scoped>
@import '@/styles/global';
#promotion_ctn .promotion__left,
#promotion_ctn .promotion__main,
#promotion_ctn .promotion__right {
    color: initial;
    height: 560px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    &:hover{
        color: $primary;
    }
}

#promotion_ctn .promotion__left {
    background-image: url(@/assets/images/promo-left.png);
}

#promotion_ctn .promotion__main {
    background-image: url(@/assets/images/promo-main.png);

}

#promotion_ctn .promotion__right {
    background-image: url(@/assets/images/promo-right.png);
}

.promotion__main,
.promotion__left,
.promotion__right {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
}

#promotion_ctn h3 {
    font-size: 72px;
    text-transform: uppercase;
    line-height: 1em;
    letter-spacing: 0px;
    font-weight: initial;
}

#promotion_ctn h3 span {
    font-size: 40px;
    letter-spacing: 8px;
}

#promotion_ctn h3+p {
    font-family: var(--sub-font);
    font-weight: 300;
}

#promotion_ctn h4 {
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 6.8px;
    font-weight: initial;
}

#promotion_ctn h4+p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
}


#promotion_ctn .right_col h4 {
    order: 1;
    text-align: center;
    color: #333333;
    font-family: "Oswald", Sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    font-style: normal;
    letter-spacing: 5.9px;
    white-space: nowrap;
}
</style>