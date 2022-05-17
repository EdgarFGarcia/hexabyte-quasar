<template>
  <div class="text-center q-pa-md flex flex-center">
    <q-page-container v-if="getisvoltagedrop">
        <q-card-section class="text-center">
            <div style="background: black; width: 400px; margin-bottom: 10px; padding-top: 10px; padding-bottom: 10px;">
              <strong style="color: white;">Main Feeder</strong>
            </div>
            <q-input outlined v-model="voltagedrop.length" label="Enter Length (m)" mask="#######" dense/>
            <div class="row" style="margin-top: 10px;">
                <div class="col-4" style="background: black !important; margin-bottom: 5px;">
                    <label style="color: white;">VD (V)</label>
                </div>
                <div class="col-8">
                    <label>{{getnav_voltage_drop.voltagedrop}}</label>
                </div>
                <div class="col-4" style="background: black !important;">
                    <label style="color: white;">VD% (%)</label>
                </div>
                <div class="col-8">
                    <label>{{getnav_voltage_drop.voltage_drop_percent}}</label>
                </div>
                <div class="col-12" style="margin-top: 15px;">
                    <q-btn color="white" text-color="black" class="full-width" dense label="Calculate" @click="calculatemainfeeder"/>
                </div>
            </div>
        </q-card-section>
        <q-card-section class="text-center">
            <div style="background: black; width: 400px; margin-bottom: 10px; padding-top: 10px; padding-bottom: 10px;">
              <strong style="color: white;">Supply To Branch</strong>
            </div>
            <q-input outlined v-model="supplytobranch.length" label="Enter Length (m)" mask="#######" dense/>
            <q-select
                filled
                v-model="supplytobranch.wire"
                label="Line (2 Wire)"
                :options="getwiredconduit"
                :option-value="`id`"
                :option-label="`line`"
                emit-value
                map-options
                dense
            >
            </q-select>
            <q-input outlined v-model="supplytobranch.current" label="Enter Current (AMP)" mask="#######" dense style="margin-top: 5px;"/>
            <div class="row" style="margin-top: 10px;">
                <div class="col-4" style="background: black !important; margin-bottom: 5px;">
                    <label style="color: white;">VD (V)</label>
                </div>
                <div class="col-8">
                    <label>{{getsupply_to_branch.voltagedrop}}</label>
                </div>
                <div class="col-4" style="background: black !important;">
                    <label style="color: white;">VD% (%)</label>
                </div>
                <div class="col-8">
                    <label>{{getsupply_to_branch.voltage_drop_percent}}</label>
                </div>
                <div class="col-12" style="margin-top: 15px;">
                    <q-btn color="white" text-color="black" class="full-width" dense label="Calculate" @click="calculatesupplytobranch"/>
                </div>
            </div>
        </q-card-section>
    </q-page-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'voltagedrop',
  components: {
  },
  data () {
    return {
        voltagedrop: {
            length: null
        },
        supplytobranch: {
            length: null,
            current: null,
            wire: null
        }
    }
  },
  created () {
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'VOLTAGE DROP')
    this.$store.dispatch('topnav/setisvoltagedrop', true)
  },
  mounted(){
    console.log('called mounted short circuit')
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'VOLTAGE DROP')
    this.$store.dispatch('topnav/setisvoltagedrop', true)
  },
  computed : {
    ...mapGetters({
        getisvoltagedrop:       'topnav/getisvoltagedrop',
        getwiredconduit:        'uddwellmulti/getwiredconduit',
        getnav_voltage_drop:    'uddwellmulti/getnav_voltage_drop',
        getsupply_to_branch:    'uddwellmulti/getsupply_to_branch'
    })
  },
  methods : {
    calculatemainfeeder(){
        this.$store.dispatch('uddwellmulti/voltagedropmainfeeder', this.voltagedrop.length)
    },
    calculatesupplytobranch(){
        // console.log(this.supplytobranch)
        this.$store.dispatch('uddwellmulti/supplytobranch', this.supplytobranch)
    }
  }
}
</script>
