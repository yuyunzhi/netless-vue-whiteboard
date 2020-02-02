<template>
    <div id="netless-replay" class="player-box">
    </div>
</template>

<script>
    import {netlessWhiteboardApi} from "../apiMiddleware/netlessWhiteboardApi";
    import "video.js/dist/video-js.css";
    export default {
        name: 'ReplayPage',
        data() {
            return {
                netlessPlayer: null,
            }
        },
        methods: {
            async getRoomToken (uuid) {
                const res = await netlessWhiteboardApi.joinRoomApi(uuid);
                if (res.code === 200) {
                    return res.msg.roomToken;
                } else {
                    return null;
                }
            },
            getDuration() {
                const startTime = this.$route.params.startTime;
                const endTime = this.$route.params.endTime;
                if (startTime && endTime) {
                    return parseInt(endTime) - parseInt(startTime);
                } else {
                    return undefined;
                }
            }
        },
        beforeMount(){
        },
        beforeDestroy(){
            if (this.netlessPlayer) {
                this.netlessPlayer.release();
            }
        },
        async mounted() {
            const uuid = this.$route.params.uuid;
            const userId = this.$route.params.userId;
            const startTime = this.$route.params.startTime;
            const mediaUrl = this.$route.params.mediaUrl;
            const url = mediaUrl ? `https://netless-media.oss-cn-hangzhou.aliyuncs.com/${mediaUrl}` : undefined;
            const roomToken = await this.getRoomToken(uuid); if (roomToken) {
                this.netlessPlayer = window.WhiteFastSDK.Player("netless-replay", {
                    uuid: uuid,
                    roomToken: roomToken,
                    userId: userId,
                    logoUrl: "https://white-sdk.oss-cn-beijing.aliyuncs.com/video/netless_black2.svg",
                    boardBackgroundColor: "#F2F2F2",
                    clickLogoCallback: () => {
                        this.$router.push('/');
                    },
                    beginTimestamp: startTime && parseInt(startTime),
                    duration: this.getDuration(),
                    // isManagerOpen: true,
                    mediaUrl: url,
                });
            }

        },
    }
</script>
<style scoped lang="less">
    .player-box {
        width: 100%;
        height: 100vh;
    }
</style>

