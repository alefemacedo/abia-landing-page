<template>
    <div class="body">
        <div class="content">
            <div class="title">
                <div class="frame-image">
                    <img src="@/assets/img/frame.png" />
                </div>
    
                <span class="label w700">
                    Opa, calma aí! Estamos quase lá...
                </span>
            </div>
    
            <div class="countdown">
                <div class="countdown-title w400">
                    contagem regressiva
                </div>
    
                <div class="countdown-timer">
                    <div class="timer w700">
                        <div class="days">
                            <span class="days-counter">{{ days }}</span>
                            <span class="days-label">dias</span>
                        </div>
        
                        <div class="hours">
                            <span class="hour-counter">{{ hours }}</span>
                            <span class="hour-label">horas</span>
                        </div>
        
                        <div class="minutes">
                            <span class="min-counter">{{ minutes }}</span>
                            <span class="min-label">minutos</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="images">
                <div class="cats">
                    <img src="@/assets/img/cats.png" />
                </div>
    
                <div class="cat">
                    <img src="@/assets/img/cat.png" />
                </div>
            </div>
        </div>
    
        <div class="footer">
            <div class="text">
                <span class="author w700">Ábia Bognola</span>
                <span class="quote w400">Transformando idéias em experiências (Inclusive as minhas)</span>
            </div>
    
            <div class="social-media">
                <a href="https://www.instagram.com/ux.abia/">
                    <img src="@/assets/img/instagram.png" />
                </a>
                <a href="https://www.linkedin.com/in/%C3%A1bia-bognola-8a638288/">
                    <img src="@/assets/img/linkedin.png" />
                </a>
                <a href="https://www.behance.net/abiavitoria">
                    <img src="@/assets/img/behance.png" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';

    defineOptions({
        name: 'ui-in-construction'
    })

    const endDate = new Date("09/30/2024 12:00:00");
    let timeDiff = ref(endDate.getTime() - new Date().getTime());

    setInterval(() => {
        timeDiff.value = endDate.getTime() - new Date().getTime();
    }, 1000);

    let days = computed(() => {
        return Math.floor(timeDiff.value / (1000 * 3600 * 24));
    })

    let hours = computed(() => {
        return Math.floor(timeDiff.value / (1000 * 3600)) - days.value * 24;
    })

    let minutes = computed(() => {
        return Math.floor(timeDiff.value / (1000 * 60)) - (days.value * 24 * 60 + hours.value * 60);
    })
</script>

<style lang="stylus" scoped>
    @import "./style.styl";

</style>