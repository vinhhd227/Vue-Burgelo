<template>
    <footer>
        <div class="container-fluid mb-3" id="footer_ctn">
            <a href="https://www.facebook.com/vinhhoangdong" target="_blank">Vinh Hoang</a> ©. All rights reserved.
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
/*Footer*/
#footer_ctn {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.6;
    font-family: Montserrat, sans-serif;
    letter-spacing: 0px;
    text-align: left;
    color: #333333;
}

#footer_ctn a {
    font-family: inherit;
    color: #FFC139;
    text-decoration: none;
}

#footer_ctn a:hover {
    color: #333333;
}
</style>