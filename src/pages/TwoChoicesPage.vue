<template>
  <q-page padding class="row fit items-center">
    <div class = "col-12">
      <div class = "row">
        <div class="col-12 text-center">
          <div class="text-grey-8 text-h6">
              {{ currentQuestion.text }}
          </div>
        </div>
      </div>
      <div class="row wrap q-ma-md justify-center items center">
        <div
          class="col-5 q-ma-sm"
          v-for="[index, choice] of currentQuestion.choices.entries()"
          :key="index"
        >
          <div class="row justify-center full-height full-width text-center">
            <q-btn
              v-bind:class="[active === index ? activeClass : inactiveClass]"
              @click="answerClicked(index)"
            >
              <img :src="choice.image" style="height: 100px; width: 100px; object" />
              <span class="text-subtitle1 text-center">{{ choice.text }}</span>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TwoChoicesPage',
  computed: {
    ...mapGetters(['currentQuestion'])
  },
  data () {
    return {
      active: 0,
      activeClass: 'bg-secondary text-white',
      inactiveClass: 'bg-white text-secondary',
      model: 'yes',
      monsterYesUrl: '',
      monsterNoUrl: '',
      answers: [
        {
          slot: 'yes',
          value: 'yes'
        },
        {
          slot: 'no',
          value: 'no'
        }
      ]
    }
  },
  created () {
    this.monsterYesUrl = this.currentQuestion.choices[0].image
    this.monsterNoUrl = this.currentQuestion.choices[1].image
  },
  methods: {
    answerClicked (index) {
      console.log(index)
      this.active = index
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
