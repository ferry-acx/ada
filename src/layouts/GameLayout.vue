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
      <router-view />
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
export default {
  name: 'GameLayout',
  data () {
    return {
      progress: 0.6,
      currRouteIdx: 0,
      routes: [
        '/game',
        '/game/two-choices',
        '/game/one-input'
      ]
    }
  },
  methods: {
    nextQuestion () {
      this.currRouteIdx++

      if (this.currRouteIdx >= this.routes.length) {
        this.currRouteIdx = 0
      }

      this.$router.push(this.routes[this.currRouteIdx])
    }
  }
}
</script>
<style lang="sass" scoped>
.game-header .game-footer
  min-height: 100px
</style>
