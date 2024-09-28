<template>
    <div class="home">
        <div class="frame-image">
            <img src="@/assets/img/frame.png" />
        </div>

        <div class="info">
            <h1 class="w500">
                Conheça a sua próxima UX Designer
            </h1>
        </div>

        <div class="cat-images">
            <div class="cats">
                <img src="@/assets/img/cats.png" />
            </div>

            <div class="cat">
                <img src="@/assets/img/cat.png" />
            </div>
        </div>

        <div class="scrolldown">
            <img src="@/assets/svg/scrolldown.svg" />
        </div>
    </div>
</template>

<script setup>
    defineOptions({
        name: 'ui-about'
    })
</script>

<style lang="stylus">
    @import './style.styl';
</style>