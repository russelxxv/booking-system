<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavBar from './inc/NavBar';

export default {
    components: {
        NavBar,
    }
}
</script>