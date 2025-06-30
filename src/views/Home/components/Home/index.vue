<template>
    <div id="home" class="home">
        <div class="info">
            <div class="frame-image">
                <img src="@/assets/img/frame.png" />
            </div>

            <div class="text">
                <h1 class="w500">
                    Conheça a sua próxima Designer de Produto
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
        </div>


        <div class="scrolldown">
            <scroll-down-icon class="scroll-down-button" />
            <!-- <img src="@/assets/svg/scrolldown.svg" /> -->
        </div>
    </div>
</template>

<script setup>
    import ScrollDownIcon from '@/components/ScrollDownIcon.vue';

    defineOptions({
        name: 'ui-about',
        components: {
            ScrollDownIcon
        }
    })
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>