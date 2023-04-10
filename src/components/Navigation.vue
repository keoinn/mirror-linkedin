<script setup>
import SvgIcon from './SvgIcon.vue';
const logoPath = `@/`;
console.log(logoPath);
</script>

<template>
    <nav>
        <ul class="nav-bar">
            <li>
                <div class="nav-logo">
                    <img class="logo" src="../assets/img/linkedin.png" />
                </div>
            </li>
            <router-view />
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav-bar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    // background-color: #333;

    li {
        float: left;
    }

    .nav-logo {}
}
</style>