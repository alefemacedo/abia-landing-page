<template>
    <div class="content">
        <section class="section-hidden">
            <ui-home />
            <ui-values />
        </section>
    </div>
</template>

<script setup>
    import About from './components/About';
    import Home from './components/Home';
    import Values from './components/Values';

    defineOptions({
        name: 'ui-content',
        components: {
            'ui-about': About,
            'ui-home': Home,
            'ui-values': Values
        }
    });
</script>

<style lang="stylus" scoped>
    @import './style.styl';
</style>