<script setup>
import SvgIcon from '../SvgIcon.vue';

</script>

<template>
    <div class="search-bar">
        <SvgIcon name="search" class-name="search-icon"></SvgIcon>
        <input class="search-input" placeholder="Search" />
    </div>
</template>
<style lang="scss" scoped>
.search-bar {
    width: 367px;
    position: relative;


    .search-icon {
        color: #0275B1;
        width: 24px;
        height: 24px;
        padding-left: 8.174%;
        padding-top: 7%;
        z-index: 99;
    }

    .search-input {
        position: absolute;
        background-color: transparent;
        margin-top: 8%;
        margin-left: 2%;
        border-style: none;
    }
}
</style>