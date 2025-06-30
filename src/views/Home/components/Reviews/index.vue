<template>
    <div id="reviews" class="reviews">
        <div class="title">
            <img class="wave" src="@/assets/svg/wave.svg" />
            <div class="text">
                <span class="text-1 w400">O que as pessoas dizem sobre mim</span>
            </div>
        </div>

        <swiper
            :modules="[SwiperAutoplay, SwiperPagination]"
            :slides-per-view="1"
            :space-between="30"
            :loop="true"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: true,
            }"
            class="cards"
        >
            <swiper-slide v-for="(review, index) of reviews" :key="index">
                <ui-review-card :value="review" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination } from 'swiper/modules';
    import ReviewCard from './components/Card';
    import 'swiper/css';
    import 'swiper/css/pagination';

    const SwiperAutoplay = Autoplay;
    const SwiperPagination = Pagination;

    const reviews = [
        {
            profile: 'img/moises_profile.png',
            name: 'Moisés Nery dos Santos',
            key: "moises"
        },
        {
            profile: 'img/rodolfo_kato.jpeg',
            name: 'Rodolfo Eiji Kato',
            key: 'rodolfo'
        },
        {
            profile: 'img/andreia_marcatto.jpeg',
            name: 'Andréia Lopes Marcatto',
            key: 'andreia'
        },
        {
            profile: 'img/vitor_christoval.jpeg',
            name: 'Vitor Christoval',
            key: 'vitor'
        },
        {
            profile: 'img/rafael_menon_profile.jpg',
            name: 'Rafael Rodrigo Menon',
            key: 'rafael'
        }
    ];

    defineOptions({
        name: 'ui-reviews',
        components: {
            'ui-review-card': ReviewCard,
            Swiper,
            SwiperSlide
        }
    })
</script>

<style lang="stylus">
    @import './style.styl';
    @import 'swiper/swiper.css';
    @import 'swiper/modules/pagination/pagination.css';

    .swiper-slide
        display: flex;
        justify-content: center;
</style>