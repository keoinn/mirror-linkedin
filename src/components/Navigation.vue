<script setup>
import Searchbar from './navbar/NavSearchbar.vue';

</script>

<template>
    <nav>
        <ul class="nav-bar">
            <div class="nav-item nav-logo">
                <img class="logo" src="../assets/img/linkedin.png" />
            </div>

            <div class="nav-item nav-router">

            </div>


            <div class="nav-item">
                <NavSearchbar />
            </div>

            <div class="nav-item status-bar">
                <NavStatusbar />
            </div>

            <div class="nav-item nav-others">
                <router-link to="/">
                    <NavIcon name="bell" text="OTHERS" color="#181818"></NavIcon>
                </router-link>
            </div>

        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav-bar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;

    .logo {
        width: 46px;
        height: 46px;
        position: relative;
        top: 22.5%;
    }


    .nav-item {
        float: left;
        border-right-style: solid;
        border-color: #F4F4F4;
        height: 80px;


        // &.nav-router {
        //     width: 450px;
        // }

        &.nav-logo {
            width: 130px;
            text-align: center;
        }


        &.status-bar {
            width: 330px;
            text-align: center;

        }

        &.nav-others {
            width: 90px;
        }
    }
}
</style>