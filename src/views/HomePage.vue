<template>
    <div class="hp-box">
        <img src="../assets/netless_black.svg"/>
        <div class="page-input-left-box">
            <div class="page-input-left-mid-box">
                <div class="page-input-left-inner-box">
                    <a-input
                            class="hp-input-box"
                            @change="inner"
                            placeholder="输入用户名"
                            size="large">
                    </a-input>
                    <a-button
                            @click="submitName"
                            size="large"
                            type="primary"
                            class="name-button">
                        创建在线教室
                    </a-button>
                    <!--<router-link to="/room_input">-->
                        <!--<a-button-->
                                <!--size="large"-->
                                <!--type="primary"-->
                                <!--class="name-button">-->
                            <!--实时教室测试-->
                        <!--</a-button>-->
                    <!--</router-link>-->
                    <!--<router-link to="/replay_input">-->
                        <!--<a-button-->
                                <!--style="margin-top: 24px"-->
                                <!--size="large"-->
                                <!--class="name-button">-->
                            <!--回放教室测试-->
                        <!--</a-button>-->
                    <!--</router-link>-->
                </div>
            </div>
        </div>
        <div class="page-input-right-box"></div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue'
    import { Button, Tabs, Input } from 'ant-design-vue'
    Vue.use(Button);
    Vue.use(Tabs);
    Vue.use(Tabs.TabPane);
    Vue.use(Input);
    export default {
        name: 'HomePage',
        data() {
            return {
                name: "",
            }
        },
        methods: {
            submitName() {
                this.$router.push('/whiteboard/host');
            },
            inner(e) {
                this.name = e.target.value;
            },
        },
    }
</script>
<style scoped lang="less">
    .hp-box {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
        background-color: white;
        img {
            cursor: pointer;
            position: absolute;
            margin-left: 48px;
            margin-top: 48px;
        }
    }
    .page-input-left-box {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .page-input-left-mid-box {
        width: 360px;
        height: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding-right: 20px;
        padding-left: 20px;
        border-radius: 8px;
        box-shadow: 0 0 16px #E7EAEE;
    }
    .page-input-left-mid-box-tab {
        width: 300px;
        margin-top: 12px;
    }
    .page-input {
        width: 240px;
        font-size: 14px;
    }
    .name-button {
        width: 240px;
        font-size: 14px;
    }
    .page-input-left-mid-box-tab {
        width: 300px;
        margin-top: 12px;
    }
    .page-input-left-inner-box {
        height: 220px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .page-input-right-box {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: url("../assets/name_bg.jpg") no-repeat scroll center center;
    }
    .hp-input-box {
        width: 240px;
        margin-bottom: 24px;
    }

</style>

