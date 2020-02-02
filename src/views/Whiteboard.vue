<template>
    <div id="netless-whiteboard" class="whiteboard-box">
    </div>
</template>

<script>
    import {netlessWhiteboardApi} from "../apiMiddleware/netlessWhiteboardApi";
    import AgoraRTC from "agora-rtc-sdk";
    import WhiteFastSDK from '@netless/white-fast-web-sdk'
    export default {
        name: 'Whiteboard',
        data() {
            return {
                netlessRoom: null,
                recordData: null,
            }
        },
        methods: {
           handleReplayUrl() {
               const uuid = this.$route.params.uuid;
               const userId = this.$route.params.userId;
                if (this.recordData) {
                    if (this.recordData.startTime) {
                        if (this.recordData.endTime) {
                            if (this.recordData.mediaUrl) {
                                this.$router.push(`/replay/${uuid}/${userId}/${this.recordData.startTime}/${this.recordData.endTime}/${this.recordData.mediaUrl}/`);
                            } else {
                                this.$router.push(`/replay/${uuid}/${userId}/${this.recordData.startTime}/${this.recordData.endTime}/`);
                            }
                        } else {
                            this.$router.push(`/replay/${uuid}/${userId}/${this.recordData.startTime}/`);
                        }
                    } else {
                        this.$router.push(`/replay/${uuid}/${userId}/`);
                    }
                } else {
                    this.$router.push(`/replay/${uuid}/${userId}/`);
                }
            },
            async getRoomToken (uuid) {
                const res = await netlessWhiteboardApi.joinRoomApi(uuid);
                if (res.code === 200) {
                    return res.msg.roomToken;
                } else {
                    return null;
                }
            }
        },
        beforeMount(){
        },
        beforeDestroy(){
            if (this.netlessRoom) {
                this.netlessRoom.release();
            }
        },
        async mounted() {
            const uuid = this.$route.params.uuid;
            const identity = this.$route.params.identity;
            const userId = this.$route.params.userId;
            const roomToken = await this.getRoomToken(uuid);
            if (uuid && roomToken) {
                this.netlessRoom = WhiteFastSDK.Room("netless-whiteboard",{
                    uuid: uuid,
                    roomToken: roomToken,
                    userId: userId,
                    identity: identity,
                    logoUrl: "https://white-sdk.oss-cn-beijing.aliyuncs.com/video/netless_black2.svg",
                    rtc: {
                        type: "agora",
                        rtcObj: AgoraRTC,
                        token: "8595fd46955f427db44b4e9ba90f015d",
                    },
                    replayCallback: () => {
                        this.handleReplayUrl();
                    },
                    exitRoomCallback: () => {
                        this.$router.push('/');
                    },
                    recordDataCallback: (data) => {
                        this.recordData = data;
                    },
                });
            }
        },
    }
</script>
<style scoped lang="less">
    .whiteboard-box {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }
    .whiteboard-box-left {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .whiteboard-toolbox-out {
        width: 100%;
        height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 1;
        top: 32px
    }
    .room-whiteboard {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }
    .whiteboard-box-right {
        width: 360px;
        height: 100%;
        flex-shrink: 0;
        /*background-color: green;*/
        display: flex;
        flex-direction: column;
    }
    .whiteboard-box-right-up {
        width: 100%;
        height: 320px;
        background-color: #3C3F41;
        flex-shrink: 0;
    }
    .whiteboard-box-right-down {
        width: 100%;
        height: 100%;
        background-color: white;
    }

    .whiteboard-toolbox-inner {
        background-color: #F1F3F4;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
</style>

