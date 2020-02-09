<template>
  <q-page padding class="row full-width full-height items-center">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <q-img :src="currentQuestion.image" ratio="1" />
        </div>
      </div>
      <div class="row full-width">
        <div class="col-12 text-center text-h3">
          {{ currentQuestion.text }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BannerPage',
  computed: {
    ...mapGetters(['currentQuestion'])
  },
  data () {
    return {
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
