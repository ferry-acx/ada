<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-white text-white">
      <q-toolbar class="row justify-between items-center">
        <div class="col-2 q-my-md">
          <q-btn
            dense
            round
            flat
            icon="close"
            size="lg"
            color="grey-8"
          >
          </q-btn>
        </div>
        <div class="col-8 q-my-md">
          <q-linear-progress
            stripe
            rounded
            class="q-ma-none"
            color="secondary"
            size="15px"
            :value="progress"
          >
          </q-linear-progress>
        </div>
        <div class="col-2 q-ma-md">
          <q-icon
            name="volume_up"
            color="secondary"
            size="md"
          >
          </q-icon>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- <router-view /> -->
      <banner-page v-if="currentQuestion.template === 'banner'" />
      <instructions-page v-if="currentQuestion.template === 'instructions'" />
      <two-choices-page v-if="currentQuestion.template === 'two-choices'" />
      <one-input-page v-if="currentQuestion.template === 'one-input'" />
      <multi-single-imaged-page v-if="currentQuestion.template === 'multi-single-imaged'" />
    </q-page-container>

    <q-footer class="bg-white text-white">
      <q-toolbar class="row justify-center full-width text-center">
        <div class="col-12 q-ma-sm q-mb-lg q-px-sm">
          <q-btn
            push
            class="full-width"
            color="secondary"
            size="lg"
            @click="nextQuestion"
          >
            Next Question
          </q-btn>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import BannerPage from '../pages/BannerPage'
import InstructionsPage from '../pages/InstructionsPage'
import TwoChoicesPage from '../pages/TwoChoicesPage'
import OneInputPage from '../pages/OneInputPage'
import MultiSingleImagedPage from '../pages/MultiSingleImagedPage'

export default {
  name: 'GameLayout',
  components: {
    BannerPage,
    InstructionsPage,
    TwoChoicesPage,
    OneInputPage,
    MultiSingleImagedPage
  },
  data () {
    return {
      stages: require('../store/constants/questions.json'),
      progress: 0.6
    }
  },
  computed: {
    ...mapGetters(['currentStageIndex', 'currentStage', 'currentQuestionSet', 'currentQuestion', 'currentQuestionIndex'])
  },
  created () {
    const stageIdx = this.currentStageIndex
    const questions = this.stages[stageIdx].questions && this.stages[stageIdx].questions.length > 0 ? this.stages[stageIdx].questions : []

    this.$store.commit('setCurrentQuestionSet', questions)
    this.$store.commit('resetQuestionIndex')
    this.$store.commit('setCurrentQuestion', questions[this.currentQuestionIndex])
  },
  methods: {
    nextQuestion () {
      try {
        if (this.currentQuestionIndex < this.currentQuestionSet.length - 1) {
          this.$store.commit('incrementQuestionIndex')
          this.$store.commit('setCurrentQuestion', this.currentQuestionSet[this.currentQuestionIndex])
        } else {
          this.$store.commit('incrementStageIndex')

          const stageIdx = this.currentStageIndex
          const questions = this.stages[stageIdx].questions && this.stages[stageIdx].questions.length > 0 ? this.stages[stageIdx].questions : []

          this.$store.commit('setCurrentQuestionSet', questions)
          this.$store.commit('resetQuestionIndex')
          this.$store.commit('setCurrentQuestion', this.currentQuestionSet[this.currentQuestionIndex])
        }

        if (!this.currentQuestion) {
          throw Error('No question')
        }
      } catch (error) {
        console.log('something went wrong:', error)
        this.$router.push('/error')
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.game-header .game-footer
  min-height: 100px
</style>
