<template>
    <div class="cases">
        <div class="title">
            <img class="lightning" src="@/assets/img/raio.png" />
            <div class="text">
                <span class="text-1 w900">Cases</span>
                <span class="text-2 w500">e trabalhos</span>
            </div>
        </div>

        <img src="@/assets/svg/heart.svg" class="heart" />

        <div class="cards">
            <ui-card
                v-for="(item, index) of cases"
                :key="index"
                :value="item"
            />
        </div>
    </div>
</template>

<script setup>
    import Card from './components/Card';
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
            'ui-card': Card
        }
    })
</script>

<style lang="stylus">
    @import './style.styl';

</style>