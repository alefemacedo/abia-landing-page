<template>
    <div class="header-content">
        <div class="sidebar">
            <button class="sidebar-button" @click="emit('toggleNavbar', true)">
                <img src="@/assets/svg/menu_icon.svg" />
            </button>
        </div>

        <img class="logo" src="@/assets/img/logotipo.png" />

        <ui-language-switcher :theme="theme" />

        <ui-menu />
    </div>
</template>

<script setup>
    import Menu from '@/components/Menu';
    import LanguageSwitcher from '@/components/LanguageSwitcher';

    defineOptions({
        name: 'ui-header',

        components: {
            'ui-menu': Menu,
            'ui-language-switcher': LanguageSwitcher
        }
    })

    defineProps({
        theme: {
            type: String,
            required: false,
            default: 'dark',
        }
    })

    const emit = defineEmits(['toggleNavbar']);
</script>

<style lang="stylus" scoped>
    @import './style';

</style>