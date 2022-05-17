<template>
  <div class="text-center q-pa-md flex flex-center">
    <q-page-container v-if="getisshortcircuit">
      <div class="q-gutter-md text-center" style="width: 380px;">
        <q-input outlined v-model="circuit.transformerratingva" type="number" label="Transformer Rating (VA)"/>
        <q-input outlined v-model="circuit.percentz" type="number" label="% Z (in %)"/>
        <q-input outlined v-model="circuit.impedance" type="number" label="IMPEDANCE TOLERANCE (in %)"/>
        <q-input outlined v-model="circuit.lengthinmm" type="number" label="LENGTH (in m)"/>
        <q-select
            filled
            v-model="circuit.wiresize"
            label="SELECT WIRE SIZE"
            :options="getwiredconduit"
            :option-value="`id`"
            :option-label="`line`"
            emit-value
            map-options
        >
        </q-select>
        <q-btn class="full-width" color="black" @click="calculate">CALCULATE</q-btn>
      </div>
    </q-page-container>
    <q-page-container>
      <div class="q-gutter-md text-center" style="width: 380px;">
        <q-input outlined v-model="calculationresult.fulload" label="FULL LOAD CURRENT" disable/>
        <q-input outlined v-model="calculationresult.transmultiplier" label="TRANSFORMERS MULTIPLIER" disable/>
        <q-input outlined v-model="calculationresult.isc" label="I S.C" disable/>
        <q-input outlined v-model="calculationresult.f_factor" label="F Factor" disable/>
        <q-input outlined v-model="calculationresult.multiplier" label="MULTIPLIER" disable/>
        <q-input outlined v-model="calculationresult.shortcircuitsymmetrical" label="SHORT CIRCUIT SYMMETRICAL RMS CURRENT" disable/>
        <q-input outlined v-model="calculationresult.kaic" label="KAIC" disable/>
      </div>
    </q-page-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loadsummary',
  components: {

  },
  data () {
    return {
      circuit: {
        transformerratingva: null,
        percentz: null,
        impedance: null,
        lengthinmm: null,
        wiresize: null
      },
      calculationresult: {
        fulload: null,
        transmultiplier: null,
        isc: null,
        f_factor: null,
        multiplier: null,
        shortcircuitsymmetrical: null,
        kaic: null
      }
    }
  },
  created () {
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'SHORT CIRCUIT')
    this.$store.dispatch('topnav/setisshortcircuit', true)
  },
  mounted(){
    console.log('called mounted short circuit')
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'SHORT CIRCUIT')
    this.$store.dispatch('topnav/setisshortcircuit', true)
  },
  computed : {
    ...mapGetters({
      getnavigation:            'topnav/getnavigation',
      getisshortcircuit:        'topnav/getisshortcircuit',
      getwiredconduit:          'ndsingle/getwiredconduit',
      getkaic:                  'categories/getkaic'
    })
  },
  methods : {
    calculate(){
      const wire = this.getwiredconduit.filter(q => q.id === this.circuit.wiresize)
      const kaic = this.getkaic
      this.calculationresult.fulload = this.circuit.transformerratingva / 230
      this.calculationresult.transmultiplier = 100 / (((100 - (this.circuit.impedance)) / 100) * this.circuit.percentz)
      this.calculationresult.isc = this.calculationresult.fulload * this.calculationresult.transmultiplier
      this.calculationresult.f_factor = (2 * (this.circuit.lengthinmm * 3.28) * this.calculationresult.isc ) / (wire[0].cvalues * 1 * 230)
      this.calculationresult.multiplier = 1 / (1 + this.calculationresult.f_factor)
      this.calculationresult.shortcircuitsymmetrical = this.calculationresult.multiplier * this.calculationresult.isc
      let findvalue = 0
      findvalue = kaic.filter( q => {
        console.log(q.minRange, q.maxRange)
        return this.calculationresult.shortcircuitsymmetrical > q.minRange && this.calculationresult.shortcircuitsymmetrical <= q.maxRange
      })
      this.calculationresult.kaic = findvalue[0].kaic
    }
  }
}
</script>
