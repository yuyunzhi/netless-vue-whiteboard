<template>
    <div class="whiteboard-box">
    </div>
</template>

<script>
    import {netlessWhiteboardApi} from "../apiMiddleware/netlessWhiteboardApi";
    export default {
        name: 'WhiteboardCreatorPage',
        async beforeCreate () {
            const identity = this.$route.params.identity;
            let uuid;
            if (this.$route.params.uuid) {
                uuid = this.$route.params.uuid;
            } else {
                const res = await netlessWhiteboardApi.createRoomApi('test1', 0, 'historied');
                if (res.code === 200) {
                    uuid = res.msg.room.uuid;
                }
            }
            const userId = `${Math.floor(Math.random() * 100000)}`;
            this.$router.push(`/whiteboard/${identity}/${uuid}/${userId}/`)
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
</style>

