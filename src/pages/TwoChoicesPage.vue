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
      <div class="row" style="min-height: 150px">
        <div class="col-12 q-gutter-md relative-position">
          <div class="row q-gutter-md justify-center full-height">
            <div class="col-12 justify-center">
              <q-btn-toggle
                v-model="model"
                spread
                class="full-width full-height justify-center items-center"
                :options="answers"
              >
                <div
                  v-bind:style="{ 'background-image': 'url(' + this.monsterYesUrl + ')' }"
                  class="option-1 full-height full-width" slot="yes"
                ></div>
                <div
                  v-bind:style="{ 'background-image': 'url(' + this.monsterNoUrl + ')' }"
                  class="option-2 full-height full-width" slot="no"
                ></div>
              </q-btn-toggle>
            </div>
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
  }
}
</script>
<style lang="sass" scoped>
.body-text
  font-size: 16px
  font-weight: bold
  position: relative

.option-1
  // background: url('../statics/images/monster-yes.png')
  background-size: contain
  background-repeat: no-repeat
  background-position: center

.option-2
  background: url('../statics/images/monster-no.png')
  background-size: contain
  background-repeat: no-repeat
  background-position: center
</style>
