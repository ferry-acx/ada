<template>
  <q-page padding class="row full-width fixed items-center">
    <div class="col">
      <div class="row items-center" style="min-height: 150px">
        <div class="col-12 text-center">
          <div class="text-grey-8 text-h6">
              {{ current.question.text }}
          </div>
        </div>
      </div>
      <div class="row wrap q-ma-md items-center items-center" style="min-height: 250px">
        <div
          class="col-6"
          v-for="[index, choice] of current.question.choices.entries()"
          :key="index"
        >
          <div class="row justify-center full-height full-width text-center">
            <q-btn
              v-bind:class="[current.singleAnswer === index ? activeClass : inactiveClass]"
              @click="answerClicked(index)"
            >
              <img :src="choice.image" style="min-height: 120px; width: 110px;" />
              <span class="text-subtitle1 text-center">{{ choice.text }}</span>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { sync, call } from 'vuex-pathify'

export default {
  name: 'TwoChoicesPage',
  computed: {
    current: sync('game/active')
  },
  data () {
    return {
      // active: null,
      activeClass: 'bg-secondary text-white',
      inactiveClass: 'bg-white text-secondary'
    }
  },
  created () {
  },
  methods: {
    ...call('game/*'),
    answerClicked (index) {
      const currentActive = {
        ...this.current,
        singleAnswer: index
      }

      this.setActive(currentActive)

      const answer = {
        id: index,
        value: this.current.question.choices[index].text
      }

      this.setAnswer(answer)
    }
  }
}
</script>
<style lang="sass" scoped>
.body-text
  font-size: 16px
  font-weight: bold
  position: relative
</style>
