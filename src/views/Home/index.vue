<template>
    <main-template>
        <div class="content">
            <section class="section-hidden">
                <ui-home />
                <ui-values />
                <ui-accessibility />
                <ui-cases />
                <ui-about />
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

    defineOptions({
        name: 'ui-main-home',

        components: {
            'ui-about': About,
            'ui-accessibility': Accessibility,
            'ui-cases': Cases,
            'ui-home': Home,
            'ui-values': Values,
            'main-template': MainTemplate
        }
    });
</script>

<style lang="stylus" scoped>
    @import './style.styl';
</style>