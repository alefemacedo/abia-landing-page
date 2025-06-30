<template>
    <div class="menu">
        <ui-menu-item
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
            :page="item.page"
            :type="item.type"
            :name="item.name"
        />
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import MenuItem from '../MenuItem';
    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()

    defineOptions({
        name: 'ui-menu',

        components: {
            'ui-menu-item': MenuItem
        }
    });

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
            name: 'cases'
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
    @import './style';

</style>