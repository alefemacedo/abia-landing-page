<template>
    <div class="header-content">
        <img src="@/assets/img/logotipo.png" />
        <ui-menu />
    </div>
</template>

<script setup>
    import Menu from '@/components/Menu';

    defineOptions({
        name: 'ui-header',
        components: {
            'ui-menu': Menu
        }
    })
</script>

<style lang="stylus">
    @import './style';
</style>