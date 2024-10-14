<template>
    <div class="footer">
        <div class="contact-info">
            <img src="@/assets/svg/cats.svg" class="cats" />

            <div class="info">
                <div class="title w400">
                    <span>Vamos trabalhar juntos </span>
                    <span>em seu próximo produto.</span>
                </div>

                <div class="contact">
                    <div class="email w600">
                        <img src="@/assets/svg/email_icon.svg" />

                        <div class="address">
                            Email
                            <br />
                            <br />
                            <br />
                            <span>abia.bognola@uxabia.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="social-media">
            <a href="https://www.instagram.com/ux.abia/">
                <img src="@/assets/img/instagram.png" />
            </a>

            <a href="https://www.linkedin.com/in/%C3%A1bia-bognola-8a638288/">
                <img src="@/assets/img/linkedin.png" />
            </a>
        </div>

        <div class="quote">
            <div class="text">
                <span class="author w700">Ábia Bognola</span>
                <span class="quote w400">
                    Transformando Ideias em Experiências (inclusive as minhas)
                </span>
                <span class="copyright w400">
                    <img src="@/assets/svg/copyright.svg" />
                    2024
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineOptions({
        name: 'ui-footer'
    })
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>