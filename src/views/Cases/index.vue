<template>
    <main-template>
        <router-view />
    </main-template>
</template>

<script setup>
    import MainTemplate from '@/templates/MainTemplate';

    defineOptions({
        name: 'ui-cases',

        components: [MainTemplate]
    })
</script>
