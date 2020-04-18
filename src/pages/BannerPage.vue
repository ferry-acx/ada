<template>
    <q-page padding class="banner-container row items-center">
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <q-img :src="current.question.image" basic />
                </div>
            </div>
            <div class="row q-ma-lg items-center">
                <div class="col-12 text-center">
                    <h5 class="text-center xs">{{ current.question.text }}</h5>
                    <h2 class="text-center gt-xs">{{ current.question.text }}</h2>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
    name: 'BannerPage',
    computed: {
        current: sync('game/active')
    },
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.banner-container {
    padding: 30px 30px;

    h5 {
        // margin-top: 5px;
        font-size: 28px;
    }

    h2 {
        // margin-top: 5px;
        font-size: 40px;
    }
}

.body-text {
    font-size: 16px;
    font-weight: bold;
    position: relative;
}
</style>
