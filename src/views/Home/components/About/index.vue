<template>
    <div id="about" class="about">
        <div class="content">
            <img src="@/assets/svg/abilities.svg" class="abilities" />
            <img src="@/assets/svg/abilities_mobile.svg" class="abilities-mobile" />
    
            <div class="visual-identity">
                <img src="@/assets/img/abia_cover.png" class="background" />
                <img src="@/assets/svg/A_letter.svg" class="letter-A" />
                <img src="@/assets/svg/B_letter.svg" class="letter-B" />
            </div>
        </div>

        <div class="presentation">
            <div class="text">
                <div class="title w400">
                    <span class="hi">Hi,</span>
                    <img src="@/assets/svg/strap_cat.svg" style="width: 30.51px; margin-left: 11px;" />
                    <br />
                    <span class="iam">I'm Ábia Bognola</span>
                </div>

                <span class="resume">
                    {{ t("about.resume1") }}
                    <br />
                    {{ t("about.resume2") }}✨
                </span>

                <div class="buttons">
                    <a href="https://www.linkedin.com/in/%C3%A1bia-bognola-8a638288/" class="linkedin">
                        <img src="@/assets/svg/linkedin_icon.svg" />
                        {{ t("about.linkedin") }}
                    </a>

                    <a
                        :href="getAsset('public/files/resume.pdf')"
                        target="_blank"
                        class="resume-button"
                    >
                        <img src="@/assets/svg/resume_icon.svg" />
                        {{ t("about.resume_button") }}
                    </a>
                </div>
            </div>
            <div class="border"></div>
        </div>
    </div>
</template>

<script setup>
    import helpers from '@/mixins/helpers';
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n()

    defineOptions({
        name: 'ui-about',

        mixins: [helpers]
    })
</script>

<style lang="stylus" scoped>
    @import './style.styl';
</style>