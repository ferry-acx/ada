<template>
  <q-page padding class="row full-width full-height items-center">
    <div class="col-12 text-center">
      <div class="text-grey-8 text-subtitle1">
          {{ bodyText }}
      </div>
    </div>
    <div class="col-12 text-center">
      <q-img :src="monsterImg"></q-img>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'InstructionsPage',
  data () {
    return {
      monsterImg: 'statics/images/monster.png',
      bodyText: 'Welcome to the Amazing Land of Adventures! You’re here because you’re excited to play games, learn something new, and meet other adventure-seekers. Everybody is welcomed! No need to be shy!'
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
