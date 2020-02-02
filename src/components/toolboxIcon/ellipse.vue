<template>
    <div class="tool-icon">
        <svg width="17" height="17" view-box="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                    d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
                    transform="translate(1 1)"
                    :stroke="this.color"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
            </path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'EllipseIcon',
        props: ['color'],
        data() {
            return {
                strokeColor: this.color,
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

