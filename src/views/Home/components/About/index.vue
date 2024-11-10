<template>
    <div id="about" class="about">
        <div class="content">
            <img src="@/assets/svg/abilities.svg" class="abilities" />
            <img src="@/assets/svg/abilities_mobile.svg" class="abilities-mobile" />
    
            <div class="visual-identity">
                <img src="@/assets/img/abia_cover.png" class="background" />
                <img src="@/assets/svg/A_letter.svg" class="letter-A" />
                <img src="@/assets/svg/B_letter.svg" class="letter-B" />
            </div>
        </div>

        <div class="presentation">
            <div class="text">
                <div class="title w400">
                    <span class="hi">Hi,</span>
                    <img src="@/assets/svg/strap_cat.svg" style="width: 30.51px; margin-left: 11px;" />
                    <br />
                    <span class="iam">I'm Ábia Bognola</span>
                </div>

                <span class="resume">
                    UX Designer com mais de 3 anos de experiência, sou apaixonada por criar soluções que vão além
                    da estética e priorizam a acessibilidade e a inclusão. Minha jornada inclui mentorias em eventos
                    como o Space Apps Challenge e participações em hackathons, onde ajudo equipes a resolverem
                    problemas complexos e a transformarem ideias em experiências impactantes.
                    <br />
                    Com uma visão empática e uma abordagem centrada no ser humano, quero poder desenvolver soluções
                    inovadoras e inclusivas que respeitem a complexidade que é cada usuário.✨
                </span>

                <div class="buttons">
                    <a href="https://www.linkedin.com/in/%C3%A1bia-bognola-8a638288/" class="linkedin">
                        <img src="@/assets/svg/linkedin_icon.svg" />
                        Ver Linkedin
                    </a>

                    <a
                        :href="getAsset('public/files/resume.pdf')"
                        target="_blank"
                        class="resume-button"
                    >
                        <img src="@/assets/svg/resume_icon.svg" />
                        Ver Currículo
                    </a>
                </div>
            </div>
            <div class="border"></div>
        </div>
    </div>
</template>

<script setup>
    import helpers from '@/mixins/helpers';

    defineOptions({
        name: 'ui-about',

        mixins: [helpers]
    })
</script>

<style lang="stylus" scoped>
    @import './style.styl';
</style>