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
                    <!-- volt_amp -->
                    <div v-if="get_is_volt_amp_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Volt Amp</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.total_volt_amp}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end volt_amp -->
                    <!-- current -->
                    <div v-if="get_is_current_total">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.current_total}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end current -->
                    <!-- main breaker -->
                    <div v-if="get_is_breaker_main_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.main_breaker}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end main breaker -->
                    <!-- main two line wire -->
                    <div v-if="get_is_line_two_wire_main_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.line_two_wire}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end two line wire -->
                    <!-- main ground wire -->
                    <div v-if="get_is_ground_wire_main_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.ground_wire}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end ground wire -->
                    <!-- main conduit -->
                    <div v-if="get_is_conduit_main_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.conduit}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end conduit -->
                    <!-- main length -->
                    <div v-if="get_is_length_main_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.vdlength}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end length -->
                    <!-- main voltage drop -->
                    <div v-if="get_is_voltage_drop_main_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.voltagedrop}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end voltage drop -->
                    <!-- main voltage drop % -->
                    <div v-if="get_is_voltage_percent_main_panel">
                        <!-- {{get_multi_panel_data[0].total_volt_amp}} -->
                        <div class="col-6">
                            Description:
                        </div>
                        <div class="col-6" style="background: white; color: black;">
                            <strong>Current (AMP)</strong>
                        </div>
                        <div
                            v-for="(item, itemindex) in get_multi_panel_data"
                            :key="itemindex"
                        >
                            <div class="col-6" style="margin-top: 10px;">
                                {{item.name}}
                            </div>
                            <div class="col-6" style="background: white; color: black; margin-top: 10px;">
                                <strong>{{item.voltagedrop_percent}}</strong>
                            </div>
                        </div>
                    </div>
                    <!-- end voltage drop % -->
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
            get_multi_panel_data:                   'uddwellmulti/get_multi_panel_data',
            get_is_volt_amp_panel:                  'uddwellmulti/get_is_volt_amp_panel',
            get_is_current_total:                   'uddwellmulti/get_is_current_total',
            get_is_breaker_main_panel:              'uddwellmulti/get_is_breaker_main_panel',
            get_is_line_two_wire_main_panel:        'uddwellmulti/get_is_line_two_wire_main_panel',
            get_is_ground_wire_main_panel:          'uddwellmulti/get_is_ground_wire_main_panel',
            get_is_conduit_main_panel:              'uddwellmulti/get_is_conduit_main_panel',
            get_is_length_main_panel:               'uddwellmulti/get_is_length_main_panel',
            get_is_voltage_drop_main_panel:         'uddwellmulti/get_is_voltage_drop_main_panel',
            get_is_voltage_percent_main_panel:      'uddwellmulti/get_is_voltage_percent_main_panel'
        })
    }
}
</script>