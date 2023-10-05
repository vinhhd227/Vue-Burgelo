<template>
    <nav class="navbar navbar-expand-lg position-sticky">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                <!-- <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
                <ul class="navbar-nav">
                    <li class="nav-item mx-3">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link class="nav-link" to="#about" v-scroll-to="'#about_ctn'">About</router-link>
                    </li>
                    <li class="nav-item active dropdown mx-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" aria-current="page">
                            Menu
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link class="nav-link" to="#delivery" v-scroll-to="'#delivery_ctn'">Delivery</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link class="nav-link" to="#contact" v-scroll-to="'#contact_ctn'">Contact</router-link>
                    </li>
                </ul>

            </div>
            <!-- <div class="col-2 d-none d-lg-block">
                <a href="">Login</a>
                <a href="">Carrt</a>
            </div> -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
}
</script>

<style lang="scss" scoped>
nav {
    font-size: 1.4rem;
    height: 4rem;

    .nav-link {
        letter-spacing: 0.2rem;
        font-weight: 300;
        text-transform: uppercase;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>