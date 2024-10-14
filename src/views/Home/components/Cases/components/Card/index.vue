<template>
    <div class="card">
        <div class="markdown">
            <img src="@/assets/img/abia_profile.png" />
        </div>
    
        <div class="logo">
            <img :src="getAsset(value.logo)" />
            <span :style="{ color: value.color }" class="w500">
                {{ value.type }}
            </span>
        </div>
    
        <button @click="router.push(value.link)" class="w400">
            Ver mais
            <img src="@/assets/svg/click_icon.svg" />
        </button>
    </div>
</template>

<script setup>
    import helpers from '@/mixins/helpers';
    import router from '@/router';

    defineOptions({
        name: 'ui-card',

        mixins: [helpers]
    })

    defineProps({
        value: {
            type: Object,
            required: true,
            default() {
                return {}
            }
        }
    });
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>