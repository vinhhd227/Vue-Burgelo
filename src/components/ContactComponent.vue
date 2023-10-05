<template>
    <section class="container-xxl mb-3 pt-5 row" id="contact">
        <div class="col-12 col-sm-6 col-lg my-md-0 my-2" id="contact__subcribe">
            <h3>Sign up for our update</h3>
            <div class="mt-2 d-flex flex-column justify-content-between">
                <p>To stay up-to-date on our promotions,<br>
                    discounts, sales, special offers and more.</p>
                <div class="position-relative" id="subcribe_form_ctn">
                    <form method="post" class="border rounded-pill py-3 px-4 d-flex justify-content-between">
                        <input class="border-0" v-model="inputEmail" type="email" name="email" id="email" placeholder="Enter your email"
                            required>
                        <button type="submit" class="border-0">
                            <font-awesome-icon icon="fa-solid fa-paper-plane" />
                        </button>
                    </form>
                </div>
                <div class="social_links ms-lg-2 mt-5">
                    <a class="px-2" href=""><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                    <a class="px-2" href=""><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
                    <a class="px-2" href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                    <font-awesome-icon icon="fa-regular fa-clock" />
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-lg my-md-0 my-2" id="contact__info">
            <h3>Contact us</h3>
            <div class="d-flex flex-column justify-content-beetween align-items-start ps-3">
                <div class="address mt-2 d-flex align-items-center">
                    <a class="text-decoration-none d-flex align-items-center" :href="address.link" target="_blank">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                        <span class="ps-4">{{ address.string }}</span>
                    </a>
                </div>
                <div class="phone_number mt-2">
                    <a class="text-decoration-none d-flex align-items-center" :href="`tel:${phoneNumber}`">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-phone" /></span>
                        <span class="ps-3" id="contact__phoneNumber">{{ phoneNumber }}</span>
                    </a>
                </div>
                <div class="opening_time mt-2 d-flex align-items-center">
                    <p class="d-flex align-items-center">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-clock" /></span>
                        <span class="d-inline-block ps-3"> Monday-Friday: 9:00 am - 6:00 pm <br>
                            Saturday: 9:00 am - 4:00 pm</span>
                    </p>
                </div>
                <div class="send_email mt-2">
                    <a class="text-decoration-none d-flex align-items-center" :href="`mailto:${email}`">
                        <span class="icon"><font-awesome-icon icon="fa-solid fa-envelope" /></span>
                        <span class="ps-3">Send us an email</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg my-md-0 my-2 py-2" id="contact__social">
            <h3>Instagram</h3>
            <div class="row row-cols-4 g-4">
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/coke.png" alt=""></a>
                </div>
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/chicken_burger.png" alt=""></a>
                </div>
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/burger_combo.png" alt=""></a>
                </div>
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/chicken_pasta.png" alt=""></a>
                </div>
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/lemon_tea.png" alt=""></a>
                </div>
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/philadelphia_maki.png" alt=""></a>
                </div>
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/sausage_pizza.png" alt=""></a>
                </div>
                <div class="col img_ctn"><a href="https://www.instagram.com/" target="_blank"><img class="img-fluid"
                            src="@/assets/images/season_soup.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContactComponent',
    data() {
        return {
            phoneNumber: '+1 (800) 312-2121',
            address: { string: '172 14th Street, Office 503, NY', link: 'https://goo.gl/maps/j1jB3gpFdMBbycoi7' },
            email: 'vinhhd227@gmail.com',
            inputEmail: '',
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/global';

#contact {
    h3 {
        font-size: 2.4rem;
        font-weight: 400;
        text-transform: uppercase;
        font-style: normal;
        letter-spacing: 0.24rem;
    }

    p,
    span {
        font-family: $font-family-sub;
        font-size: 14px;
        font-weight: 300;
        line-height: 2em;
        letter-spacing: 1.2px;
    }

    #contact__subcribe {
        p {
            padding: 3rem 0 0 0.2rem;
            margin: 0;
        }

        .social_links {
            a {
                color: $dark;
                font-size: 2.2rem;
                margin: 0 0.5rem;

                &:hover {
                    color: $primary;
                }
            }


        }
    }

    #contact__info {
        a {
            color: initial;

            &:hover {
                color: $primary;
            }
        }

        .icon {
            font-size: 2.5rem;
            color: $primary;
        }

        #contact__phoneNumber {
            font-size: 2.4rem;
            font-weight: 500;
            font-style: normal;
            line-height: 1rem;
            letter-spacing: 0.28rem;
        }
    }




}


#contact_ctn .send_email:hover a span {
    color: #FFC139;
}

#contact_ctn .phone_number a>span {
    font-size: 24px;
    font-weight: 500;
    text-transform: none;
    font-style: normal;
    line-height: 1em;
    letter-spacing: 2.8px;
}

#contact_ctn #sub input:focus {
    box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
    outline: none;
}

input.focus--shadow {
    width: 100%;
    font-family: var(--sub-font);
    font-weight: 300;
    line-height: 2em;
    letter-spacing: 1.2px;
}

input.focus--shadow:focus {
    box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
    outline: none;
}

#contact_ctn #sub input {
    width: 100%;
    height: 100%;
    font-family: var(--sub-font);
    font-weight: 300;
    line-height: 2em;
    letter-spacing: 1.2px;
}

#contact_ctn #sub button {
    right: 20px;
    background-color: transparent;
    font-size: 20px;
}

#contact_ctn #sub button:hover {
    color: #ffc139;
}
</style>