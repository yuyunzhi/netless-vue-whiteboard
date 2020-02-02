<template>
    <div class="tool-icon">
        <svg width="17" height="16" view-box="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.968 1.41667C10.1704 0.637358 8.88965 0.660726 8.1211 1.46861L0.651229 9.32083C0.285744 9.70502 0.283692 10.3077 0.646551 10.6944L3.352 13.5774C3.54103 13.7788 3.80496 13.8931 4.0812 13.8931H5.86992C6.14522 13.8931 6.40834 13.7796 6.59727 13.5793L13.316 6.45851C14.0646 5.66504 14.0393 4.41798 13.2591 3.65553L10.968 1.41667Z"
                    transform="translate(1 0.711777)"
                    :stroke="this.isActive ? '#141414' : '#A2A7AD'">

            </path>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.90193 2.35191C6.03948 1.07145 8.0164 1.00167 9.24141 2.19873L10.7139 3.63766C11.8959 4.79261 11.9212 6.68589 10.7706 7.87207L5.56447 13.2393L-7.02753e-08 7.86966L4.90193 2.35191Z"
                  transform="translate(3.51389)"
                  :fill="this.isActive ? '#141414' : '#A2A7AD'">

            </path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'Eraser',
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

