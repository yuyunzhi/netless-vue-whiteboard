<template>
    <div class="tool-icon">
        <svg width="14" height="14" view-box="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2V0H12V2" transform="translate(1 1)" :stroke="this.color" stroke-width="1.86667"
                  stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M0 0H7" transform="translate(3.5 12.5)" :stroke="this.color" stroke-width="1.86667"
                  stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M0 0V11" transform="translate(7 1)" :stroke="this.color" stroke-width="1.86667"
                  stroke-linecap="round" stroke-linejoin="round">
            </path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'TextIcon',
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

