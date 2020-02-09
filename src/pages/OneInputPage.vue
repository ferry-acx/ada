<template>
  <q-page padding class="row full-width full-height items-center">
    <div class="col-12 text-center">
      <div class="text-grey-8 text-subtitle1">
          {{ currentQuestion.text }}
      </div>
    </div>
    <div class="col-12 text-center">
      <q-img :src="currentQuestion.image" style="max-heiht: 300px;">
        <q-input
          standout="bg-secondary text-white"
          rounded
          autofocus
          :type="currentQuestion.inputType"
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
import { mapGetters } from 'vuex'

export default {
  name: 'OneInputPage',
  computed: {
    ...mapGetters(['currentQuestion'])
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
