<template>
    <q-page class="multi-single-imaged-container row items-center">
        <div class="col-12 justify-center">
            <h5 class="text-center xs">{{ current.question.text }}</h5>
            <h2 class="text-center gt-xs">{{ current.question.text }}</h2>
            <!-- <div class="row items-center" style="min-height: 80px">
                <div class="col-12 text-center">
                    <div class="text-grey-8 text-h6">{{ current.question.text }}</div>
                </div>
            </div>-->
            <div class="row wrap q-ma-md items-center justify-center">
                <div
                    class="col-5 choice-container"
                    v-for="[index, choice] of current.question.choices.entries()"
                    :key="index"
                >
                    <div class="row justify-center full-height full-width text-center">
                        <q-btn
                            v-bind:class="[current.singleAnswer === index ? activeClass : inactiveClass]"
                            @click="answerClicked(index)"
                        >
                            <img :src="choice.image" class="image" />
                            <span class="text-subtitle1 text-center">{{ choice.text }}</span>
                        </q-btn>
                    </div>
                </div>
            </div>
            <!-- <div class="row wrap q-ma-md justify-center items center">
                <div
                    class="col-5 q-ma-sm"
                    v-for="[index, choice] of current.question.choices.entries()"
                    :key="index"
                >
                    <div class="row justify-center full-height full-width text-center">
                        <q-btn
                            class="full-width"
                            v-bind:class="[current.singleAnswer === index ? activeClass : inactiveClass]"
                            @click="answerClicked(index)"
                        >
                            <template>
                                <div class="row full-width">
                                    <div class="col">
                                        <div class="row justify-center">
                                            <div class="col-12">
                                                <img
                                                    :src="choice.image"
                                                    style="height: 100px; width: 100px;"
                                                />
                                            </div>
                                        </div>
                                        <div class="row full-width">
                                            <div class="col-12">
                                                <span
                                                    class="text-caption text-center"
                                                >{{ choice.text }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </q-btn>
                    </div>
                </div>
            </div>-->
        </div>
    </q-page>
</template>

<script>
import { sync, call } from 'vuex-pathify';

export default {
    name: 'MultiSingleImagedPage',
    computed: {
        current: sync('game/active')
    },
    data() {
        return {
            activeClass: 'bg-secondary text-white',
            inactiveClass: 'bg-white text-secondary'
        };
    },
    methods: {
        ...call('game/*'),
        answerClicked(index) {
            const currentActive = {
                ...this.current,
                singleAnswer: index
            };

            this.setActive(currentActive);

            const answer = {
                id: index,
                value: this.current.question.choices[index].text
            };

            this.setAnswer(answer);
        }
    }
};
</script>
<style lang="scss" scoped>
.multi-single-imaged-container {
    padding: 30px 30px;

    h5 {
        font-size: 16px;
    }

    h2 {
        font-size: 24px;
    }

    .choice-container {
        margin: 10px auto;
    }

    .image {
        max-width: 80%;
    }
}

.body-text {
    font-size: 16px;
    font-weight: bold;
    position: relative;
}

.button-text {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 25%;
    background: rgba(0, 0, 0, 0.3);
}
</style>
