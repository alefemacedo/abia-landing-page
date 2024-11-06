<template>
    <main-template>
        <div class="content">
            <section class="section-hidden">
                <ui-home />
                <ui-about />
                <ui-values />
                <ui-accessibility />
                <ui-cases />
                <ui-reviews />
            </section>
        </div>
    </main-template>
</template>

<script setup>
    import MainTemplate from '@/templates/MainTemplate';
    import About from './components/About';
    import Accessibility from './components/Accessibility';
    import Cases from './components/Cases';
    import Home from './components/Home';
    import Values from './components/Values';
    import Reviews from './components/Reviews';

    defineOptions({
        name: 'ui-main-home',

        components: {
            'ui-about': About,
            'ui-accessibility': Accessibility,
            'ui-cases': Cases,
            'ui-home': Home,
            'ui-values': Values,
            'ui-reviews': Reviews,
            'main-template': MainTemplate
        }
    });
</script>

<style lang="stylus" scoped>
    @import './style.styl';
</style>