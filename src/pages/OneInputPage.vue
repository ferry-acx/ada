<template>
  <q-page padding class="row full-width full-height items-center">
    <div class="col-12 text-center">
      <div class="text-grey-8 text-subtitle1">
          {{ current.question.text }}
      </div>
    </div>
    <div class="col-12 text-center">
      <q-img :src="current.question.image" style="max-heiht: 300px;">
        <q-input
          standout="bg-secondary text-white"
          rounded
          autofocus
          :type="current.question.inputType"
          v-model="model"
          input-class="text-right"
          class="q-ma-lg"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </q-img>
    </div>
  </q-page>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'OneInputPage',
  computed: {
    current: sync('game/active')
  },
  data () {
    return {
      model: null
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
