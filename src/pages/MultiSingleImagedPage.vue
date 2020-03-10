<template>
    <q-page padding class="row full-width full-height items-center justify-center">
        <div class="col-12">
            <div class="row items-center" style="min-height: 80px">
                <div class="col-12 text-center">
                    <div class="text-grey-8 text-h6">
                        {{ current.question.text }}
                    </div>
                </div>
            </div>
            <div class="row wrap q-ma-md justify-center items center">
                <div class="col-6 q-my-sm" v-for="[index, choice] of current.question.choices.entries()" :key="index">
                    <div class="row justify-center full-height full-width text-center">
                        <q-btn
                            v-bind:class="[current.singleAnswer === index ? activeClass : inactiveClass]"
                            @click="answerClicked(index)"
                        >
                            <template>
                                <div class="full-width">
                                    <div class="row justify-center">
                                        <div class="col-12">
                                            <img :src="choice.image" style="height: 100px; width: 100px;" />
                                        </div>
                                    </div>
                                    <div class="row full-width">
                                        <div class="col-12">
                                            <span class="text-caption text-center">{{ choice.text }}</span>
                                        </div>
                                    </div>
                                </div>
                            </template>
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
<style lang="sass" scoped>
.body-text
  font-size: 16px
  font-weight: bold
  position: relative

.button-text
  position: absolute
  width: 100%
  bottom: 0
  height: 25%
  background: rgba(0, 0, 0, 0.3)
</style>
