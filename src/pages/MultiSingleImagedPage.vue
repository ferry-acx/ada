<template>
  <q-page padding class="row full-width full-height items-center justify-center">
    <div class="col-12">
      <div class="row q-ma-lg">
        <div class="col-12 text-center">
          <div class="text-grey-8 text-subtitle1">
              {{ bodyText }}
          </div>
        </div>
      </div>
      <div class="row wrap q-ma-md justify-center items center">
        <div
          class="col-5 q-ma-sm"
          v-for="[index, answer] of answers.entries()"
          :key="index"
        >
          <div class="row justify-center full-height full-width text-center">
            <q-btn v-bind:class="[active === index ? 'bg-primary' : 'bg-white']" @click="answerClicked(index)">
              <img :src="answer.image" style="height: 100px; width: 100px; object" />
              <span class="button-text text-white text-center">{{ answer.text }}</span>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MultiSingleImagedPage',
  data () {
    return {
      active: 0,
      monsterImg: 'statics/images/monster.png',
      bodyText: 'What are you? Are you a...',
      answers: [
        {
          text: 'Boy',
          value: 'boy',
          image: '../statics/images/boy.png'
        },
        {
          text: 'Girl',
          value: 'girl',
          image: '../statics/images/girl.png'
        },
        {
          text: 'Gay',
          value: 'gay',
          image: '../statics/images/gay.png'
        },
        {
          text: 'Lesbian',
          value: 'lesbian',
          image: 'statics/images/lesbian.png'
        },
        {
          text: 'Transgender',
          value: 'transgender',
          image: '../statics/images/transgender.png'
        },
        {
          text: 'Idiot',
          value: 'idiot',
          image: '../statics/images/idiot.png'
        }
      ],
      groupedAnswers: []
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
