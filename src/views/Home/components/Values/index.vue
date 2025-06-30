<template>
    <div class="values">
        <div class="title">
            <img src="@/assets/img/logotipo_2.png" />
        </div>

        <div class="content">
            <div class="text w500">
                {{ t("values.text") }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();

    defineOptions({
        name: 'ui-values'
    })
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>