<template>
    <div>
        <div class="q-pa-md">
            <q-card
                class="my-card"
                style="margin-bottom: 8px;"
                :flat="true"
                :dark="true"
            >
                <q-card-section class="text-center">
                    <!-- Voltage -->
                    <div v-if="get_is_voltage_main_panel">
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Voltage</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <!-- {{item.items}} -->
                            <div v-if="item.items.length > 0" class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div v-if="item.items.length > 0" class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>230</strong>
                            </div>
                            <div v-if="item.items.length == 0" class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div v-if="item.items.length == 0" class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>0</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end voltage -->
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'home',
    data () {
        return {
            manualinput: false,
            mid: {
                voltampred: null,
                descname: null,
                pcs: null,
                enterlength: null,
                category: null
            },
            isvoltage: false,
            isvoltamp: false,
            childcategory: [],
            changecircuitbreaker: false,
            circuitbreaker: null,
            changetwowire: false,
            twolinewire: null
        }
    },
    mounted(){
        this.$store.dispatch('topnav/setshowddcalc', true)
        this.$store.dispatch('topnav/setisloadsummary', false)
        this.$store.dispatch('topnav/setnavigationchild', '')
    },
    created () {
        this.$store.dispatch('topnav/setshowddcalc', true)
        this.$store.dispatch('topnav/setisloadsummary', false)
        this.$store.dispatch('topnav/setnavigationchild', '')
    },
    methods : {
    },
    computed : {
        ...mapGetters({
            get_is_voltage_main_panel:              'uddwellmulti/get_is_voltage_main_panel',
            get_multi_panel_data:                   'uddwellmulti/get_multi_panel_data'
        })
    }
}
</script>