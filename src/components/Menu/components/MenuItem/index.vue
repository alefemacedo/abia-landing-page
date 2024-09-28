<template>
    <div class="menu-item">
        <span class="w600">{{ label }}</span>
    </div>
</template>

<script setup>
    defineOptions({
        name: 'ui-menu-item'
    })

    const props = defineProps({
        label: {
            type: String,
            required: true
        },
        link: String
    })

    console.log(props)
</script>

<style lang="stylus">
    @import "./style";
</style>