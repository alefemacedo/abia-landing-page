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
        />
    </div>
</template>

<script setup>
    import MenuItem from '../MenuItem';

    import { ref } from 'vue';

    defineOptions({
        name: 'ui-navbar-menu',

        components: {
            'ui-menu-item': MenuItem
        }
    })

    const emit = defineEmits(['toggleNavbar']);

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
            name: 'cases'
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
    @import './style.styl';

</style>