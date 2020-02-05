<template>
  <q-page padding class="row full-width full-height items-center">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <q-img :src="monsterImg" ratio="1" />
        </div>
      </div>
      <div class="row full-width">
        <div class="col-12 text-center text-h3">
          {{ titleText }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'BannerPage',
  data () {
    return {
      monsterImg: 'statics/images/monster.png',
      titleText: 'Loso Stage'
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
