<template>
    <div class="review-card">
        <div class="review-title">
            <img :src="getAsset(value.profile)" />

            <div class="info w400">
                <span class="name">{{ value.name }}</span>
                <br />
                <span class="titles">{{ t(`reviews.titles.${value.key}`) }}</span>
            </div>
        </div>

        <span class="review-content">
            <img src="@/assets/svg/quotes.svg" />
            <div class="review-text w400">{{ t(`reviews.texts.${value.key}`) }}</div>
        </span>
    </div>
</template>

<script setup>
    import helpers from '@/mixins/helpers';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();

    defineOptions({
        name: 'ui-review-card',

        mixins: [helpers]
    })

    defineProps({
        value: {
            type: Object,
            required: true
        }
    })
</script>

<style lang="stylus">
    @import './style.styl';

</style>