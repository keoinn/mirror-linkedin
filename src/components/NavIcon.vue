<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    className: {
        type: String,
    },
    color: {
        type: String,
        default: "#181818",
    },
    text: {
        type: String,
        default: "Icon Text",
    }
});
const svgName = computed(() => {
    if (props.name.includes("/")) {
        return `#${props.name}`;
    } else {
        return `#/${props.name}`;
    }
});
const svgClass = computed(() =>
    props.className ? "svg-icon " + props.className : "svg-icon"
);
</script>

<template>
    <div class="nav-icon">
        <svg :class="svgClass" aria-hidden="true">
            <use :xlink:href="svgName" :fill="color" />
        </svg>
        <div class="icon-text">{{ text }}</div>
    </div>
</template>
  
<style lang="scss" scoped>
.nav-icon {
    width: 90px;
    height: 80px;
    // background-color: aqua;
    // display: flex;
    text-align: center;
    margin: 0 auto;

    .svg-icon {
        max-width: 24px;
        max-height: 24px;
        fill: #181818;
        overflow: hidden;
        position: relative;
        top: 22.5%;
    }

    .icon-text {
        font-size: 12px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        position: relative;
        top: 22.5%
    }
}
</style>
