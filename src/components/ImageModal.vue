<template>
    <Teleport to="body">
        <div v-if="modelValue" class="image-modal" @click="closeModal">
            <div class="modal-content" @click.stop>
                <button class="close-button" @click="closeModal">×</button>
                <div class="navigation-buttons">
                    <button 
                        v-if="images.length > 1"
                        class="nav-button prev" 
                        @click="prevImage"
                        :disabled="currentIndex === 0"
                    >
                        <font-awesome-icon :icon="['fas', 'chevron-left']" />
                    </button>
                    <button 
                        v-if="images.length > 1"
                        class="nav-button next" 
                        @click="nextImage"
                        :disabled="currentIndex === images.length - 1"
                    >
                        <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    </button>
                </div>
                <div class="image-container">
                    <img :src="currentImage" :alt="currentAlt" />
                </div>
                <div v-if="images.length > 1" class="image-counter">
                    {{ currentIndex + 1 }} / {{ images.length }}
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { watch, ref, computed } from 'vue';

const props = defineProps({
    modelValue: Boolean,
    images: {
        type: Array,
        default: () => []
    },
    initialIndex: {
        type: Number,
        default: 0
    },
    imageSrc: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue']);

const currentIndex = ref(props.initialIndex);

const currentImage = computed(() => {
    if (props.images.length > 0) {
        return props.images[currentIndex.value]?.src || '';
    }
    return props.imageSrc;
});

const currentAlt = computed(() => {
    if (props.images.length > 0) {
        return props.images[currentIndex.value]?.alt || '';
    }
    return props.alt;
});

const closeModal = () => {
    emit('update:modelValue', false);
};

const nextImage = () => {
    if (currentIndex.value < props.images.length - 1) {
        currentIndex.value++;
    }
};

const prevImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

// Reset index when modal opens
watch(() => props.modelValue, (newValue) => {
    if (newValue) {
        document.body.style.overflow = 'hidden';
        currentIndex.value = props.initialIndex;
    } else {
        document.body.style.overflow = '';
    }
});
</script>

<style lang="stylus">
.image-modal
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.8)
    display: flex
    justify-content: center
    align-items: center
    z-index: 1000

.modal-content
    position: relative
    max-width: 90vw
    max-height: 90vh
    background: white
    border-radius: 8px
    padding: 20px

.close-button
    position: absolute
    top: 10px
    right: 10px
    background: none
    border: none
    font-size: 24px
    color: #333
    cursor: pointer
    z-index: 1
    &:hover
        color: #666

.navigation-buttons
    position: absolute
    top: 50%
    left: 0
    right: 0
    transform: translateY(-50%)
    display: flex
    justify-content: space-between
    padding: 0 20px
    pointer-events: none

.nav-button
    background: rgba(255, 255, 255, 0.8)
    border: none
    border-radius: 50%
    width: 40px
    height: 40px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    pointer-events: auto
    transition: all 0.3s ease
    &:hover
        background: white
    &:disabled
        opacity: 0.5
        cursor: not-allowed
    i
        color: #333
        font-size: 18px

.image-container
    max-width: 100%
    max-height: calc(90vh - 80px)
    overflow: auto
    display: flex
    align-items: center
    justify-content: center
    img
        max-width: 200%
        height: auto
        display: block
        margin: auto

.image-counter
    position: absolute
    bottom: 10px
    left: 50%
    transform: translateX(-50%)
    background: rgba(0, 0, 0, 0.7)
    color: white
    padding: 5px 10px
    border-radius: 15px
    font-size: 14px
</style> 