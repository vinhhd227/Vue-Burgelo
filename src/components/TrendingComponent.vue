<template>
    <div class="container-xxl" id="trending_ctn">
        <div class="row g-3">
            <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column">
                <div class="price_block">
                    From
                    <span class="price">17</span>
                    <span class="currency">$</span>
                </div>
                <div class="info_block">
                    <div class="name">
                        <h3>BEEF CLASSIC</h3>
                        <h2>BURGERS</h2>
                    </div>
                    <p class="desc text--subfont">Try this delicious burger containing of two fried parts of a whole-grain
                        bun, a
                        juicy
                        piece of beef,
                        cheese and lettuce</p>
                    <div class="btn_ctn"><a asp-controller="cart" asp-action="AddToCart" asp-route-productid="1"
                            class="rounded-circle btn--yellow btn--hover btn__a flex justify-content-center align-items-center"><span><i
                                    class="fa-sharp fa-light fa-plus"></i></span></a></div>
                </div>
                <img class="mt-3" src="../assets/images/beef_classic_burger.png" alt="">
            </div>

            <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column flex-md-column-reverse">
                <div class="info_block">
                    <div class="price_block">
                        From
                        <span class="price">12.00</span>
                        <span class="currency">$</span>
                    </div>
                    <div class="name">
                        <h3>THE BEST PASTA</h3>
                    </div>
                    <p class="desc text--subfont">Our pasta with seafood is mixed perfectly with a glass of white wine</p>
                    <div class="btn_ctn"><a asp-controller="cart" asp-action="AddToCart" asp-route-productid="28"
                            class="rounded-circle btn--yellow btn--hover btn__a flex justify-content-center align-items-center"><span><i
                                    class="fa-sharp fa-light fa-plus"></i></span></a></div>
                </div>
                <img src="../assets/images/the_best_pasta.png" alt="">
            </div>

            <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column">
                <div class="price_block">
                    From
                    <span class="price">13.50</span>
                    <span class="currency">$</span>
                </div>
                <div class="info_block">
                    <div class="name">
                        <h3>SEASON SOUP</h3>
                    </div>
                    <p class="desc text--subfont">We offer you a special dish – our season soup containing season vegetables
                    </p>
                    <div class="btn_ctn"><a asp-controller="cart" asp-action="AddToCart" asp-route-productid="38"
                            class="rounded-circle btn--yellow btn--hover btn__a flex justify-content-center align-items-center"><span><i
                                    class="fa-sharp fa-light fa-plus"></i></span></a></div>
                </div>
                <img src="../assets/images/season_soup.png" alt="">
            </div>

            <div class="col-12 col-sm-6 col-lg-4 d-flex flex-column flex-md-column-reverse d-lg-none">
                <div class="info_block">
                    <div class="price_block">
                        From
                        <span class="price">11.00</span>
                        <span class="currency">$</span>
                    </div>
                    <div class="name">
                        <h3>PHILADELPHIA MAKI</h3>
                    </div>
                    <p class="desc text--subfont">A type of sushi prepared with mangoes, avocadoes, cucumber, kani/crab
                        sticks then rolled with nori sheets inside out then coated with a layer of masago</p>
                    <div class="btn_ctn"><a asp-controller="cart" asp-action="AddToCart" asp-route-productid="56"
                            class="rounded-circle btn--yellow btn--hover btn__a flex justify-content-center align-items-center"><span><i
                                    class="fa-sharp fa-light fa-plus"></i></span></a></div>
                </div>
                <img src="../assets/images/califonia_maki.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrendingComponent',
}
</script>

<style lang="scss" scoped>
/*Recommend*/
.btn_add {
    display: block;
    width: 40px;
    height: 40px;
    padding: 12px 12px;
    font-family: var(--sub-font);
    text-transform: uppercase;
    line-height: 1rem;
    letter-spacing: 2.4px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #ffc139;
    font-size: 24px;
    font-weight: 300;
    text-transform: none;
    font-style: normal;
}

.btn_add:hover {
    background-color: #333333;
    color: #ffc139;
}

#trending_ctn img {
    width: 85%;
}

#trending_ctn .price_block {
    color: #333333;
    font-family: "Oswald", Sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: none;
    font-style: normal;
    letter-spacing: 2px;
}

.price_block .price,
.price_block .currency {
    font-size: 36px;
    color: #FFC139;
}

#trending_ctn .name h3 {
    color: #333333;
    font-family: "Oswald", Sans-serif;
    font-size: 36px;
    font-weight: 400;
    text-transform: uppercase;
    font-style: normal;
    letter-spacing: 3.6px;
}

#trending_ctn .name h2 {
    color: #333333;
    font-family: "Oswald", Sans-serif;
    font-size: 4.5rem;
    font-weight: 400;
    text-transform: uppercase;
    font-style: normal;
    letter-spacing: 6px;
}

.card-text {
    color: var(--dark);
    font-family: var(--sub-font);
    font-size: 14px;
    font-weight: 300;
    text-transform: none;
    font-style: normal;
    line-height: 2em;
    letter-spacing: 1.3px;
}

#trending_ctn .btn_ctn {
    width: 40px;
    height: 40px;
}

#trending_ctn .btn_ctn .btn__a span {
    font-family: var(--sub-font);
    font-size: 30px;
    font-weight: 300;
}
</style>