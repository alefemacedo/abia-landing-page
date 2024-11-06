<template>
    <div class="header-content">
        <div class="sidebar">
            <button class="sidebar-button" @click="emit('toggleNavbar', true)">
                <img src="@/assets/svg/menu_icon.svg" />
            </button>
        </div>

        <img class="logo" src="@/assets/img/logotipo.png" />

        <ui-menu />
    </div>
</template>

<script setup>
    import Menu from '@/components/Menu';

    defineOptions({
        name: 'ui-header',

        components: {
            'ui-menu': Menu,
        }
    })

    const emit = defineEmits(['toggleNavbar']);
</script>

<style lang="stylus" scoped>
    @import './style';

</style>