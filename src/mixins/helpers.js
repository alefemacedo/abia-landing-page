export default {
    methods: {
        getAsset(asset) {
            console.log(asset)
            return new URL(`/src/assets/${asset}`, import.meta.url).href
        }
    }
}