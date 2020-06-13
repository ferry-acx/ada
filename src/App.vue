<template>
    <div id="q-app" class="orientation-portrait">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>
<style lang="scss">
@import './assets/fonts/montserrat.scss';
* {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}
</style>
