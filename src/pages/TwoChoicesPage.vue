<template>
  <q-page padding class="row wrap full-width full-height items-center">
    <div class ="row">
      <div class="col-12 text-center">
        <div class="text-grey-8 text-h6">
            {{ bodyText }}
        </div>
      </div>
    </div>
    <div class="row full-width">
      <div class="col-12">
        <div class="q-gutter-md" style="display: contents">
          <q-btn-toggle
            v-model="model"
            push
            toggle-color="secondary"
            :options="[
              {value: 'yes', slot: 'yes'},
              {value: 'no', slot: 'no'}
            ]"
          >
            <template v-slot:yes>
              <div class="row items-center no-wrap">
                <img src="../statics/images/monster-yes.png" height="150" width="150"/>
              </div>
            </template>

            <template v-slot:no>
              <div class="row items-center no-wrap">
                <img src="../statics/images/monster-no.png" height="150" width="150"/>
              </div>
            </template>
          </q-btn-toggle>
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
      model: '',
      monsterYesImg: 'statics/images/monster-yes.png',
      monsterNoImg: 'statics/images/monster-no.png',
      bodyText: 'The gates will be opened to let you experience a brand-new adventure. Are you ready?'
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
