<template>
  <div class="text-center text-black">
    <div class="row q-pa-md">
      <div class="col bg-grey" style="min-height: 550px">
        <slot name="details" />
      </div>
    </div>
    <div class="row q-pt-lg justify-between">
      <div class="col-6">
        <slot name="action-left" />
      </div>
      <div class="col-6">
        <slot name="action-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
