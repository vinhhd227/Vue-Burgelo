<template>
    <div class="container-xxl mb-3" id="map_ctn">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d639.7021692218351!2d105.84744995282247!3d21.003138210516063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac742d3b83df%3A0x28772da31fb145b1!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIG5naOG7gSBCw6FjaCBLaG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1686998920741!5m2!1svi!2s"
            width="1920" height="900" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</template>

<script>
export default {
    name: 'MapComponent',
}
</script>

<style lang="scss" scoped>
#map_ctn iframe{
    width: 100%;
    min-height: 300px;
    max-height: 400px;
}
</style>