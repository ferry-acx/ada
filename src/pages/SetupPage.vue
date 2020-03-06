<template>
  <q-page padding>
    <q-header class="bg-white text-white">
      <q-toolbar class="row justify-between items-center">
        <div class="col-2 q-my-md">
          <q-btn
            dense
            round
            flat
            icon="home"
            size="lg"
            color="grey-8"
            to="/"
          >
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <div class="row full-width full-height">
      <div class="col-12">

        <div class="row q-ma-sm items-center">
          <!-- <div class="col-3">
            <div class="text-h6">Gender</div>
          </div>
          <div class="col-9">
            <q-input
              standout="bg-secondary text-white"
              rounded
              autofocus
              dense
              type="text"
              v-model="gender"
              input-class="text-right"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div> -->
        </div>
      </div>
    </div>

    <q-footer class="bg-white text-white">
      <q-toolbar class="row justify-center full-width text-center">
        <div class="col-12 q-ma-sm q-mb-lg q-px-sm">
          <q-btn
            push
            class="full-width"
            color="secondary"
            size="lg"
            @click="saveConfig"
          >
            Save
          </q-btn>
        </div>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { sync, call } from 'vuex-pathify'

export default {
  name: 'SetupPage',
  data () {
    return {
      gender: ''
    }
  },
  created () {
    this.gender = this.config.gender
  },
  computed: {
    config: sync('config/active')
  },
  methods: {
    ...call('config/*'),
    saveConfig () {
      const active = {
        ...this.config,
        gender: this.gender
      }

      this.setActive(active)

      this.$router.push('/')
    }
  }
}
</script>
