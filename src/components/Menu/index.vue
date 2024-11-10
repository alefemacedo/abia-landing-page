<template>
    <div class="menu">
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
    import { ref } from 'vue';
    import MenuItem from '../MenuItem';

    defineOptions({
        name: 'ui-menu',

        components: {
            'ui-menu-item': MenuItem
        }
    });

    const items = ref([
        {
            label: 'Início',
            page: '/#home',
            type: 'link',
            name: 'home'
        },
        {
            label: 'Sobre mim',
            page: '/#about',
            type: 'link',
            name: 'about'
        },
        {
            label: 'Cases',
            page: '/#cases',
            type: 'link',
            name: 'cases',
            submenus: [
                {
                    label: 'Trade+',
                    page: '/cases/trade-plus'
                },
                {
                    label: 'StartDev',
                    page: '/cases/start-dev'
                }
            ]
        },
        {
            label: 'Contato',
            page: '/contact',
            type: 'router',
            name: 'contact'
        },
    ]);
</script>

<style lang="stylus" scoped>
    @import './style';

</style>