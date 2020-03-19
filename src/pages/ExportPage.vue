<template>
    <q-page padding class="flex flex-center">
        <q-header class="bg-white text-white">
            <q-toolbar class="row justify-between items-center">
                <div class="col-2 q-my-md">
                    <q-btn dense round flat icon="home" size="lg" color="grey-8" to="/"></q-btn>
                </div>
            </q-toolbar>
        </q-header>
        <div class="row text-center items-center">
            <div class="col-12">
                <div class="row">
                    <div class="col">
                        <q-btn flat color="secondary" v-on:click="exportData">
                            <q-icon size="xl" name="save_alt" />
                        </q-btn>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <span class="text-secondary text-subtitle2">Export Data</span>
                    </div>
                </div>
            </div>
        </div>
        <q-dialog v-model="alert">
            <q-card style="min-width: 250px">
                <q-card-section>
                    <div class="text-h6">Alert</div>
                </q-card-section>

                <q-card-section class="q-pt-none">{{ alertMessage }}</q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import { sync, call } from 'vuex-pathify';
import { exportFile } from 'quasar';

export default {
    name: 'ExportPage',
    data() {
        return {
            alert: false,
            alertMessage: ''
        };
    },
    computed: {
        game: sync('game/list')
    },
    methods: {
        ...call('game/*'),
        ...call('config/*'),
        goHome() {
            this.resetGame();
            this.resetConfig();
            this.$router.push('/');
        },
        async exportData() {
            const status = await exportFile('tmp.json', JSON.stringify(this.game));

            if (!status) {
                this.alertMessage = status;
                this.alert = true;
            }
        }
    }
};
</script>
