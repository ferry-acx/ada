<template>
    <q-page class="two-choices-container row items-center">
        <div class="col-12 justify-center">
            <h5 class="text-center xs">{{ current.question.text }}</h5>
            <h2 class="text-center gt-xs">{{ current.question.text }}</h2>
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
        </div>
    </q-page>
</template>

<script>
import { sync, call } from 'vuex-pathify';

export default {
    name: 'TwoChoicesPage',
    computed: {
        current: sync('game/active')
    },
    data() {
        return {
            // active: null,
            activeClass: 'bg-secondary text-white',
            inactiveClass: 'bg-white text-secondary'
        };
    },
    created() {},
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
.two-choices-container {
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
</style>
