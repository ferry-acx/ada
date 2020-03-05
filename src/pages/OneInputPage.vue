<template>
  <q-page padding class="row full-width items-center fixed">
    <div class="col-12">
      <div class="row">
        <div class="col-12 text-center">
          <div class="text-grey-8 text-h6">
              {{ current.question.text }}
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <q-input
            standout="bg-secondary text-white"
            rounded
            autofocus
            :type="current.question.inputType"
            v-model="model"
            @input="inputChanged"
            input-class="text-right"
            class="q-ma-md q-my-xl"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="col-10">
          <q-img :src="current.question.image"></q-img>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { sync, call } from 'vuex-pathify'

export default {
  name: 'OneInputPage',
  computed: {
    current: sync('game/active')
  },
  data () {
    return {
      model: null
    }
  },
  methods: {
    ...call('game/*'),
    inputChanged () {
      const answer = {
        value: this.model
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
