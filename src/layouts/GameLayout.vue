<template>
    <q-layout view="hHh lpR fFf">
        <q-header class="bg-white text-white">
            <q-toolbar class="row justify-between items-center">
                <div class="col-2 q-my-md">
                    <q-btn dense round flat icon="home" size="lg" color="grey-8" @click="goHome"></q-btn>
                </div>
                <div class="col-8 q-my-md">
                    <q-linear-progress
                        ref="linearProgress"
                        stripe
                        rounded
                        class="q-ma-none"
                        color="secondary"
                        size="15px"
                        :value="game.progress"
                    ></q-linear-progress>
                    <q-img
                        :src="progressIconSrc"
                        ref="progressIcon"
                        name="mood"
                        color="secondary"
                        style="width: 50px; height: 50px;"
                        v-bind:style="iconClassObject"
                    />
                </div>
                <div class="col-2 q-ma-md" @click="playAudio()">
                    <q-btn flat round>
                        <q-icon name="volume_up" color="secondary" size="md"></q-icon>
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <transition name="slide-fade">
                <banner-page v-if="game.question.template === 'banner'" />
                <instructions-page v-if="game.question.template === 'instructions'" />
                <two-choices-page v-if="game.question.template === 'two-choices'" />
                <one-input-page v-if="game.question.template === 'one-input'" />
                <multi-single-imaged-page v-if="game.question.template === 'multi-single-imaged'" />
                <multi-single-text-page v-if="game.question.template === 'multi-single-text'" />
                <multi-multi-imaged-page v-if="game.question.template === 'multi-multi-imaged'" />
                <multi-multi-text-page v-if="game.question.template === 'multi-multi-text'" />
            </transition>
        </q-page-container>

        <q-footer class="bg-white text-white">
            <q-toolbar class="row justify-center full-width text-center">
                <div class="col-12 q-ma-sm q-mb-lg q-px-sm">
                    <q-btn
                        push
                        class="full-width"
                        :color="disabledNext ? 'grey' : 'secondary'"
                        size="lg"
                        @click="submit"
                        :disable="disabledNext"
                    >{{ buttonLabel }}</q-btn>
                </div>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script>
import { sync, call } from 'vuex-pathify';

import BannerPage from '../pages/BannerPage';
import InstructionsPage from '../pages/InstructionsPage';
import TwoChoicesPage from '../pages/TwoChoicesPage';
import OneInputPage from '../pages/OneInputPage';
import MultiSingleImagedPage from '../pages/MultiSingleImagedPage';
import MultiSingleTextPage from '../pages/MultiSingleTextPage';
import MultiMultiImagedPage from '../pages/MultiMultiImagedPage';
import MultiMultiTextPage from '../pages/MultiMultiTextPage';

export default {
    name: 'GameLayout',
    components: {
        BannerPage,
        InstructionsPage,
        TwoChoicesPage,
        OneInputPage,
        MultiSingleImagedPage,
        MultiSingleTextPage,
        MultiMultiImagedPage,
        MultiMultiTextPage
    },
    data() {
        return {
            audio: null,
            top: 0,
            progressEl: null,
            progressIconEl: null,
            imgSrc: null
        };
    },
    computed: {
        game: sync('game/active'),
        config: sync('config/active'),
        disabledNext() {
            if ((this.game.question.choices || this.game.question.inputType) && !this.game.question.answer) {
                return true;
            } else {
                return false;
            }
        },
        buttonLabel() {
            const nonQuestions = ['instructions', 'banner'];
            if (nonQuestions.includes(this.game.question.template)) {
                return 'Continue';
            }
            return 'Next Question';
        },
        progressIconPosition() {
            if (this.progressEl && this.progressIconEl) {
                const iconWidth = this.progressIconEl.clientWidth ? this.progressIconEl.clientWidth : 0;
                const clientWidth = this.progressEl.clientWidth ? this.progressEl.clientWidth : 0;
                const progress = this.game.progress ? this.game.progress : 0;
                const position = clientWidth * progress - iconWidth / 2;
                return `${position}px`;
            } else {
                if (this.progressIconEl) {
                    const iconWidth = (this.progressIconEl.clientWidth / 2) * -1;
                    return `${iconWidth}px`;
                }
            }
            return '0px';
        },
        iconClassObject() {
            if (this.progressEl && this.progressIconEl) {
                // const progress = this.game.progress ? this.game.progress : 0
                const progress = this.game.progress ? this.game.progress : 0;
                const left =
                    this.progressEl.offsetLeft -
                    this.progressIconEl.clientWidth / 2 +
                    this.progressEl.clientWidth * progress;

                const classObject = {
                    position: 'absolute',
                    display: 'inline-block',
                    top: `${this.top}px`,
                    left: `${left}px`
                };
                return classObject;
            }
            return {};
        },
        progressIconSrc() {
            if (this.config.gender === 'Boy') {
                return 'statics/images/running-boy.png';
            } else if (this.config.gender === 'Girl') {
                return 'statics/images/running-girl.png';
            } else {
                return '';
            }
        }
    },
    created() {},
    mounted() {
        this.progressEl = this.$refs.linearProgress.$el;
        this.progressIconEl = this.$refs.progressIcon.$el;
        this.top = this.progressEl.offsetTop;
    },
    methods: {
        ...call('game/*'),
        ...call('config/*'),
        goHome() {
            this.resetGame();
            this.resetConfig();
            this.$router.push('/');
        },
        submit() {
            if (this.audio) {
                this.audio.pause();
                this.audio = null;
            }
            this.storeAnswer();
            this.checkConfig();
            this.nextQuestion();
        },
        checkConfig() {
            if (this.game.question.config) {
                const key = this.game.question.config;
                const value = this.game.question.answer.value;
                const newConfig = { ...this.config };
                newConfig[key] = value;
                this.setConfigActive(newConfig);
            }
        },
        playAudio() {
            if (this.game.question.audio) {
                this.audio = new Audio(this.game.question.audio);
                this.audio.play();
            }
        }
    }
};
</script>
<style lang="sass" scoped>
.game-header .game-footer
    min-height: 100px

.slide-fade-enter-active
    transition: all .3s

.slide-fade-leave-active
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
    transform: translateX(-10px)
    opacity: 0
</style>
