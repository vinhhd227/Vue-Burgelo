<template>
    <div class="container-xxl mb-3 row position-relative" id="delivery_ctn">
        <!---->
        <div
            class="col-lg d-flex align-items-center justify-content-center flex-column pt-5 pt-lg-1 ps-lg-1 pb-lg-5 my-1 my-lg-0">
            <img class="" src="@/assets/images/choose.png" alt="">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex align-items-center my-3">
                    <h3>CHOOSE</h3>
                    <img src="@/assets/images/delivery1.svg" alt="">
                </div>
                <p class="text-center text-lg-start p-0 px-lg-5">Select food, which you want now the most and don’t
                    forget about drinks</p>
            </div>
        </div>
        <!---->
        <div class="col-lg py-5 d-flex flex-column align-items-lg-end align-items-center my-1 my-lg-0">
            <div class="">
                <div class="d-flex align-items-center justify-content-center">
                    <h3>MAKE AN ORDER</h3>
                    <img src="@/assets/images/delivery2.svg" alt="">
                </div>
                <p class="text-center text-lg-start p-0 px-lg-5">Contact us and provide our agent with correct
                    information about your order</p>
            </div>
            <img src="@/assets/images/order.png" alt="">
        </div>
        <!---->
        <div class="col-lg position-relative pe-0 d-flex flex-column align-items-lg-end align-items-center my-1 my-lg-0">
            <img class="" src="@/assets/images/receive.png" alt="">
            <div>
                <div class="d-flex align-items-center justify-content-center">
                    <h3>RECEIVE</h3>
                    <img src="@/assets/images/delivery3.svg" alt="">
                </div>
                <p class="text-center text-lg-start p-0 px-lg-5">Get your order as quickly as possible and enjoy
                    your
                    meal</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeliveryComponent'
}
</script>

<style lang="scss" scoped>
#delivery_ctn .col-lg {
    background-color: #f6f7f9;
}

#delivery_ctn>img {
    position: absolute;
    z-index: 3;
    width: 270px;
    max-height: 400px;
    left: 20%;
    top: 125px;
}

#delivery_ctn>img:nth-child(2) {
    width: 200px;
    max-height: 400px;
    left: 61%;
    top: 75px;
}

#delivery_ctn .col-lg>img {
    width: 90%;
}

#delivery_ctn h3 {
    color: #333333;
    font-family: "Oswald", Sans-serif;
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
    font-style: normal;
    line-height: 0.8em;
    letter-spacing: 3.4px;
    margin-bottom: 0;
}

#delivery_ctn p {
    text-align: left;
    color: #333333;
    font-family: var(--sub-font);
    font-size: 14px;
    font-weight: 300;
    text-transform: none;
    font-style: normal;
    line-height: 2em;
    letter-spacing: 1.3px;
}
</style>