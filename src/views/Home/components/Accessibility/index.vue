<template>
    <div class="accessibility">
        <span class="info w500">
            {{ t("accessibility.text") }}
        </span>

        <div class="icons">
            <img src="@/assets/svg/vision.svg" />
            <img src="@/assets/svg/hearing.svg" />
            <img src="@/assets/svg/touch.svg" />
        </div>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();

    defineOptions({
        name: 'ui-accessibility'
    })
</script>

<style lang="stylus" scoped>
   @import './style.styl';

</style>