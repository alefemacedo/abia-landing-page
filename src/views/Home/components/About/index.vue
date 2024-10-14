<template>
    <div class="about">
        <div class="content">
            <img src="@/assets/svg/abilities.svg" class="abilities" />
    
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
                    Formada em Marketing e Cursando pós em Design Centrado no futuro,
                    minha jornada é impulsionada pela paixão em criar soluções centradas no usuário e
                    transforma-las em experiências extraordinárias ✨
                </span>

                <div class="buttons">
                    <a href="https://www.linkedin.com/in/%C3%A1bia-bognola-8a638288/" class="linkedin">
                        <img src="@/assets/svg/linkedin_icon.svg" />
                        Ver Linkedin
                    </a>

                    <button class="resume-button">
                        <img src="@/assets/svg/resume_icon.svg" />
                        Ver Currículo
                    </button>
                </div>
            </div>
            <div class="border"></div>
        </div>

        <div class="people-reviews">
            <div class="title">
                <span>O que as pessoas dizem sobre mim</span>
                <img src="@/assets/img/wave.png" class="w400" />
            </div>

            <ui-review-card
                v-for="(review, index) of reviews"
                :value="review"
                :key="index"
            />
        </div>
    </div>
</template>

<script setup>
    import ReviewCard from './components/ReviewCard';

    defineOptions({
        name: 'ui-about',
        components: {
            'ui-review-card': ReviewCard
        }
    })

    const reviews = [{
        profile: 'img/moises_profile.png',
        name: 'Moisés Nery dos Santos',
        titles: 'Partner and Independent Board Member & Advisor Board |IT Director | CTO',
        review: `Uma profissional super talentosa, com uma capacidade de aprendizagem rápida,
        consegue entender e capitar as necessidades de forma clara e eficaz .Uma profissional
        de fácil adaptação e gestão, com uma dedicação exemplar. Recomendo ela como uma
        excelente profissional.`
    }]
</script>

<style lang="stylus" scoped>
    @import './style.styl';
</style>