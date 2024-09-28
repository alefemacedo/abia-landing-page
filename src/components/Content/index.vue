<template>
    <div class="content">
        <section class="section-hidden">
            <ui-about />
        </section>
    </div>
</template>

<script setup>
    import About from './components/About';

    defineOptions({
        name: 'ui-content',
        components: {
            'ui-about': About
        }
    });
</script>

<style lang="stylus" scoped>
    @import './style.styl';
</style>