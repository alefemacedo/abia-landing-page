<template>
    <div class="menu">
        <div class="close">
            <span @click="emit('toggleNavbar', false)">
                X
            </span>
        </div>

        <ui-menu-item
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
            :page="item.page"
            :type="item.type"
            :name="item.name"
            :submenus="item.submenus"
        />
    </div>
</template>

<script setup>
    import MenuItem from '../MenuItem';

    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n'

    defineOptions({
        name: 'ui-navbar-menu',

        components: {
            'ui-menu-item': MenuItem
        }
    })

    const emit = defineEmits(['toggleNavbar']);
    const { t } = useI18n()

    const items = computed(() => [
        {
            label: t('nav.home'),
            page: '/#home',
            type: 'link',
            name: 'home'
        },
        {
            label: t('nav.about_me'),
            page: '/#about',
            type: 'link',
            name: 'about'
        },
        {
            label: t('nav.cases'),
            page: '/#cases',
            type: 'link',
            name: 'cases',
            submenus: [
                {
                    label: t('nav.trade_plus'),
                    page: '/cases/trade-plus'
                },
                {
                    label: t('nav.start_dev'),
                    page: '/cases/start-dev'
                }
            ]
        },
        {
            label: t('nav.contact'),
            page: '/contact',
            type: 'router',
            name: 'contact'
        },
    ]);
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>