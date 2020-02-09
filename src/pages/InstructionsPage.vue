<template>
  <q-page padding class="row full-width full-height items-center">
    <div class="col-12 text-center">
      <div class="text-grey-8 text-subtitle1">
          {{ currentQuestion.text }}
      </div>
    </div>
    <div class="col-12 text-center">
      <q-img :src="currentQuestion.image"></q-img>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InstructionsPage',
  computed: {
    ...mapGetters(['currentQuestion'])
  }
}
</script>
<style lang="sass" scoped>
.body-text
  font-size: 16px
  font-weight: bold
  position: relative
</style>
