<template>
    <div class="header">
        <ui-header />
    </div>

    <div class="body">
        <ui-content />

        <ui-footer />
    </div>
    <!-- <ui-in-construction /> -->
</template>

<script setup>
    import Header from '@/components/Header';
    import Content from '@/components/Content';
    import Footer from '@/components/Footer';
    import InConstruction from '@/components/InConstruction';

    defineOptions({
        components: {
            'ui-header': Header,
            'ui-content': Content,
            'ui-footer': Footer,
            'ui-in-construction': InConstruction
        }
    })
</script>

<style lang="stylus">
    .header
        grid-area: hd;
        position: fixed;
        grid-area: hd;
        min-width: 100vw;
        z-index: 1000;
        height: 120px;

    .body
        grid-area: bd;
        overflow: hidden auto;
        margin-top: 120px;

    .body::-webkit-scrollbar
        display: none;

</style>
