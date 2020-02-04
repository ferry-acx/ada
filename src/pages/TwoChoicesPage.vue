<template>
  <q-page padding class="row fit items-center">
    <div class = "col-12">
      <div class = "row">
        <div class="col-12 text-center">
          <div class="text-grey-8 text-h6">
              {{ bodyText }}
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
                <div class="option-1 full-height full-width" slot="yes"></div>
                <div class="option-2 full-height full-width" slot="no"></div>
              </q-btn-toggle>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'TwoChoicesPage',
  data () {
    return {
      model: 'yes',
      monsterYesUrl: 'statics/images/monster-yes.png',
      monsterNoUrl: 'statics/images/monster-no.png',
      bodyText: 'The gates will be opened to let you experience a brand-new adventure. Are you ready?',
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
  }
}
</script>
<style lang="sass" scoped>
.body-text
  font-size: 16px
  font-weight: bold
  position: relative

.option-1
  background: url('../statics/images/monster-yes.png')
  background-size: contain
  background-repeat: no-repeat
  background-position: center

.option-2
  background: url('../statics/images/monster-no.png')
  background-size: contain
  background-repeat: no-repeat
  background-position: center
</style>
