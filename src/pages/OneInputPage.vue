<template>
  <q-page padding class="row full-width full-height items-center">
    <div class="col-12 text-center">
      <div class="text-grey-8 text-subtitle1">
          {{ bodyText }}
      </div>
    </div>
    <div class="col-12 text-center">
      <q-img :src="monsterImg" style="max-heiht: 300px;">
        <q-input standout="bg-secondary text-white" rounded autofocus v-model="inputText" input-class="text-right" class="q-ma-lg">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </q-img>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'OneInputPage',
  data () {
    return {
      inputText: '',
      monsterImg: 'statics/images/monster-hi.png',
      bodyText: 'Ooops! Not too fast fellow adventure-seeker! Before we open the gate, it\'ll be nice to know your name and where are you from. (example: Cris of Barangay San Vicente)'
    }
  }
}
</script>
<style lang="sass" scoped>
.body-text
  font-size: 16px
  font-weight: bold
  position: relative

.input-container
  background: url("../statics/images/monster-hi.png")
  background-size: auto
</style>
