<template>
    <div id="cases" class="cases">
        <div class="title">
            <img class="lightning" src="@/assets/img/raio.png" />
            <div class="text">
                <span class="text-1 w900">Cases</span>
                <span class="text-2 w500">e trabalhos</span>
            </div>
        </div>

        <img src="@/assets/svg/heart.svg" class="heart" />

        <swiper
            :modules="[SwiperAutoplay, SwiperPagination]"
            :slides-per-view="1"
            :space-between="30"
            :centeredSlides="true"
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
            <swiper-slide v-for="(item, index) of cases" :key="index">
                <ui-card :value="item" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination } from 'swiper/modules';
    import Card from './components/Card';
    import 'swiper/css';
    import 'swiper/css/pagination';

    const SwiperAutoplay = Autoplay;
    const SwiperPagination = Pagination;

    const cases = [
        {
            logo: 'svg/trade_plus_logo.svg',
            type: 'UX Case',
            color: '#09A2B6',
            link: '/cases/trade-plus'
        },
        {
            logo: 'svg/start_dev_logo.svg',
            type: 'UX/UI Case',
            color: '#013CAA',
            link: '/cases/start-dev'
        }
    ];

    defineOptions({
        name: 'ui-cases',
        components: {
            'ui-card': Card,
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