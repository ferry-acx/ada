<template>
  <div class="text-center text-black">
    <div class="q-pa-md q-pt-lg q-ma-lg bg-grey" style="min-height: 550px">
      <slot name="details" />
    </div>
    <div class="q-pa-lg">
      <!-- <q-btn color="primary">Next Button Here</q-btn> -->
      <slot name="action" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  data () {
    return {}
  }
}
</script>
