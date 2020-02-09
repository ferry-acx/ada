<template>
  <q-page padding class="row full-width full-height items-center justify-center">
    <div class="col-12">
      <div class="row q-ma-lg">
        <div class="col-12 text-center">
          <div class="text-grey-8 text-subtitle1">
              {{ currentQuestion.text }}
          </div>
        </div>
      </div>
      <div class="row wrap q-ma-md justify-center items center">
        <div
          class="col-12 q-ma-sm"
          v-for="[index, choice] of currentQuestion.choices.entries()"
          :key="index"
        >
          <div class="row justify-center full-height full-width text-center">
            <q-btn
              class="full-width"
              v-bind:class="[active === index ? 'bg-secondary' : 'bg-white']"
              @click="answerClicked(index)"
            >
              <div class="text-body text-black">{{ choice.text }}</div>
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
  name: 'MultiSingleTextPage',
  computed: {
    ...mapGetters(['currentQuestion'])
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    answerClicked (index) {
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

.button-text
  position: absolute
  width: 100%
  bottom: 0
  height: 25%
  background: rgba(0, 0, 0, 0.3)
</style>
