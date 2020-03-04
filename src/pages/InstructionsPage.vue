<template>
  <q-page padding class="row full-width items-center fixed">
    <div class="col-12">
      <div class="row" style="min-height: 100px">
        <div class="col-12 text-center text-h6">
          {{ current.question.text }}
        </div>
      </div>
      <div class="row justify-center items-center full-height">
        <div class="col-9 text-center">
          <q-img :src="current.question.image" ></q-img>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { sync } from 'vuex-pathify'

export default {
  name: 'InstructionsPage',
  computed: {
    current: sync('game/active')
  }
}
</script>
<style lang="sass" scoped>
.body-text
  font-size: 16px
  font-weight: bold
  position: relative
</style>
