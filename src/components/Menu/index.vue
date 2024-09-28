<template>
    <div class="menu">
        <ui-menu-item
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
        />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import MenuItem from './components/MenuItem';

    defineOptions({
        name: 'ui-menu',

        components: {
            'ui-menu-item': MenuItem
        }
    });

    let items = ref([
        {
            label: 'Início',
        },
        {
            label: 'Sobre mim',
        },
        {
            label: 'Cases',
        },
        {
            label: 'Contato',
        },
    ]);
</script>

<style lang="stylus">
    @import './style';
</style>