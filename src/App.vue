<template>
    <router-view />
    <!-- <ui-in-construction /> -->
</template>

<script setup>
    import InConstruction from '@/components/InConstruction';

    defineOptions({
        components: {
            'ui-in-construction': InConstruction
        }
    })
</script>
