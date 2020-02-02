<template>
    <div class="tool-icon">
        <svg width="15" height="15" view-box="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.4868 6.58275C1.62719 6.24058 1.65327 5.01496 2.52665 4.70966L14.0769 0.672222C14.8612 0.398074 15.6184 1.14442 15.3555 1.93256L11.5076 13.4712C11.2154 14.3477 9.99264 14.3929 9.63635 13.5405L7.73683 8.99596C7.63313 8.74785 7.43386 8.55196 7.18402 8.45251L2.4868 6.58275Z"
                  transform="translate(16) scale(-1 1)"
                  :fill="this.isActive ? '#141414' : '#A2A7AD'"
            ></path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'Selector',
        props: ['isActive'],
        data() {
            return {
                a: null
            }
        },
        beforeCreate () {
        },
        mounted() {
        },
        methods: {
        },
    }
</script>
<style scoped lang="less">
    .tool-icon {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

