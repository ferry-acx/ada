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
            @click="setupGame"
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
      <banner-page v-if="game.question.template === 'banner'" />
      <instructions-page v-if="game.question.template === 'instructions'" />
      <two-choices-page v-if="game.question.template === 'two-choices'" />
      <one-input-page v-if="game.question.template === 'one-input'" />
      <multi-single-imaged-page v-if="game.question.template === 'multi-single-imaged'" />
      <multi-multi-imaged-page v-if="game.question.template === 'multi-multi-imaged'" />
      <multi-multi-text-page v-if="game.question.template === 'multi-multi-text'" />
    </q-page-container>

    <q-footer class="bg-white text-white">
      <q-toolbar class="row justify-center full-width text-center">
        <div class="col-12 q-ma-sm q-mb-lg q-px-sm">
          <q-btn
            push
            class="full-width"
            color="secondary"
            size="lg"
            @click="submit"
          >
            {{ buttonLabel }}
          </q-btn>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { sync, call } from 'vuex-pathify'

import BannerPage from '../pages/BannerPage'
import InstructionsPage from '../pages/InstructionsPage'
import TwoChoicesPage from '../pages/TwoChoicesPage'
import OneInputPage from '../pages/OneInputPage'
import MultiSingleImagedPage from '../pages/MultiSingleImagedPage'
import MultiMultiImagedPage from '../pages/MultiMultiImagedPage'
import MultiMultiTextPage from '../pages/MultiMultiTextPage'

export default {
  name: 'GameLayout',
  components: {
    BannerPage,
    InstructionsPage,
    TwoChoicesPage,
    OneInputPage,
    MultiSingleImagedPage,
    MultiMultiImagedPage,
    MultiMultiTextPage
  },
  data () {
    return {
      progress: 0.6,
      buttonLabel: 'Next Question'
    }
  },
  computed: {
    game: sync('game/active')
  },
  created () {
    console.log(this.game)
  },
  methods: {
    ...call('game/*'),
    submit () {
      this.nextQuestion()
    }
  }
}
</script>
<style lang="sass" scoped>
.game-header .game-footer
  min-height: 100px
</style>
