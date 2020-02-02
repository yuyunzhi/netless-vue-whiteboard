<template>
    <div class="tool-box">
        <div @click="selectTool(item.name)" class="tool-cell" :key='item.name' v-for="item in items">
            <div v-if="item.name === 'pencil'">
                <Pencil :color='item.state.isActive ? item.state.color : "#A2A7AD"'/>
            </div>
            <div v-if="item.name === 'selector'">
                <Selector :isActive='item.state.isActive'/>
            </div>
            <div v-if="item.name === 'eraser'">
                <Eraser :isActive='item.state.isActive'/>
            </div>
            <div v-if="item.name === 'upload'">
                <Upload/>
            </div>
            <div v-if="item.name === 'text'">
                <TextIcon :color='item.state.isActive ? item.state.color : "#A2A7AD"'/>
            </div>
            <div v-if="item.name === 'ellipse'">
                <EllipseIcon :color='item.state.isActive ? item.state.color : "#A2A7AD"'/>
            </div>
            <div v-if="item.name === 'rectangle'">
                <RectangleIcon :color='item.state.isActive ? item.state.color : "#A2A7AD"'/>
            </div>
        </div>
    </div>
</template>

<script>
    import Pencil from './toolboxIcon/pencil'
    import Selector from './toolboxIcon/selector'
    import Eraser from './toolboxIcon/eraser'
    import TextIcon from './toolboxIcon/text'
    import EllipseIcon from './toolboxIcon/ellipse'
    import RectangleIcon from './toolboxIcon/rectangle'
    import Upload from './toolboxIcon/upload'
    export default {
        name: 'ToolBox',
        components: {Selector, Pencil, Eraser, TextIcon, EllipseIcon, RectangleIcon, Upload},
        props: ['room'],
        data() {
            return {
                items: [
                    { name: 'selector', state: {isActive: false, color: "#141414"}},
                    { name: 'pencil', state: {isActive: false, color: "#141414"}},
                    { name: 'text', state: {isActive: false, color: "#141414"}},
                    { name: 'upload', state: {isActive: false, color: "#141414"}},
                    { name: 'eraser', state: {isActive: false, color: "#141414"}},
                    { name: 'ellipse', state: {isActive: false, color: "#141414"}},
                    { name: 'rectangle', state: {isActive: false, color: "#141414"}}
                ],
                roomObj: this.room,
            }
        },
        beforeCreate () {
        },
        mounted() {
            this.updateToolState(this.roomObj.state.memberState.currentApplianceName);
        },
        methods: {
            selectTool(name) {
                if (name !== "upload") {
                    this.roomObj.setMemberState({
                        currentApplianceName: name,
                    });
                    this.updateToolState(name);
                }
            },
            updateToolState(tool) {
                const newItems = this.items.map(data => {
                    data.state.isActive = tool === data.name;
                    return data;
                });
                this.items = newItems;
            },
        },
    }
</script>
<style scoped lang="less">
    .tool-box {
        width: 256px;
        height: 32px;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }

    /*.upload-box {*/
        /*width: 32px;*/
        /*height: 32px;*/
        /*background-color: red;*/
    /*}*/

    .tool-cell {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tool-cell-img {
        width: 20px;
    }
</style>

