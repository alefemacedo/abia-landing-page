<template>
    <div class="header">
        <ui-header />
    </div>

    <div class="body">
        <slot></slot>

        <ui-footer />
    </div>
</template>

<script setup>
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';

    defineOptions({
        name: 'main-template',

        components: {
            'ui-header': Header,
            'ui-footer': Footer
        }
    })
</script>

<style lang="stylus">
    @import './style.styl';

</style>