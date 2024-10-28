<template>
    <div class="menu-item">
        <a v-if="type === 'link'" :href="page" class="w600">{{ label }}</a>
        <router-link v-else :to="page" class="w600">{{ label }}</router-link>
        <img
            v-if="path.includes(name) || (path === '/' && name === 'home')"
            class="skate"
            src="@/assets/img/skate.png"
        />
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const path = computed(() =>route.fullPath);

    defineOptions({
        name: 'ui-menu-item'
    })

    defineProps({
        label: {
            type: String,
            required: true
        },
        page: {
            type: String,
            required: true
        },
        type: String,
        name: {
            type: String,
            required: true
        }
    })
</script>

<style lang="stylus">
    @import "./style";
</style>