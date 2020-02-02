<template>
    <div class="tool-icon">
        <svg width="16" height="17" view-box="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                    d="M0.0182346 1.54448C0.83115 1.03978 11.0803 -1.33972 12.0561 1.03978C13.0318 3.41928 0.61548 2.16248 0.0182346 5.45443C-0.579009 8.74638 13.7165 2.52969 12.8863 6.04973C12.0561 9.56977 0.0182346 7.06741 0.0182346 10.8533C0.0182346 14.6391 11.9891 8.31318 12.8863 10.5679C13.7834 12.8226 8.20001 13.3065 5.7957 14.0422"
                    transform="translate(1 1.90564) rotate(-4)"
                    :stroke='this.color' stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
            </path>
        </svg>
    </div>
</template>

<script>
    export default {
        name: 'Pencil',
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

