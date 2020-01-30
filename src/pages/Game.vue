<template>
  <q-page padding>
    <instructions v-if="screenType === 0">
      <p slot="details">Instruction details</p>
      <q-btn slot="action" color="primary">Next Button Here</q-btn>
    </instructions>
    <two-buttons v-if="screenType === 1">
      <p slot="details">Instruction details</p>
      <q-btn slot="action-left" color="primary">Left Button Here</q-btn>
      <q-btn slot="action-right" color="primary">Right Button Here</q-btn>
    </two-buttons>
  </q-page>
</template>

<script>
import Instructions from '../components/screens/Instructions'
import TwoButtons from '../components/screens/TwoButtons'

export default {
  name: 'GamePage',
  components: {
    Instructions,
    TwoButtons
  },
  data () {
    return {
      screenType: 1
    }
  }
}
</script>
