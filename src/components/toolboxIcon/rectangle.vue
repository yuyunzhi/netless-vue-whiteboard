<template>
    <div class="tool-icon">
        <svg width="16" height="16" view-box="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0H0V14H14V0Z" transform="translate(1 1)"
                  :stroke="this.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            </path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'RectangleIcon',
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

