<template>
  <div class="text-center q-pa-md flex flex-center">
    meow
    <q-page-container v-if="getisloadsummary && showresult">
      <q-card
        class="my-card"
        style="margin-bottom: 8px; width: 360px;"
        v-for="(item, itemindex) in loadsummary.items"
        :key="itemindex"
        :flat="true"
        :dark="true"
      >
        <q-card-section class="text-center">
          <div class="row">
            <div class="col-12">
              <strong>{{item.name}}</strong>
            </div>
            <div class="col-12" style="background: white; margin-top: 5px;">
              <strong style="color: black;">{{item.result}} <q-icon v-if="item.hasdd" name="edit" @click="changevalue(item)"></q-icon></strong> 
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
    <div class="q-pa-md" v-if="changecircuitbreaker" style="width: 320px; margin-top: 55px;">
      <div class="q-gutter-md text-center">
        <small>CHOOSE NEW CIRCUIT BREAKER</small>
        <q-select
          filled
          v-model="circuitbreaker"
          label="CIRCUIT BREAKER"
          :options="getcbreaker"
          :option-value="`id`"
          :option-label="`at`"
          emit-value
          map-options
        >
        </q-select>
        <q-btn @click="cancelcb" color="white" text-color="black">cancel</q-btn>
        <q-btn @click="savecb" color="primary">save</q-btn>
      </div>
    </div>
    <div class="q-pa-md" v-if="changetwowire" style="width: 320px; margin-top: 55px;">
      <div class="q-gutter-md text-center">
        <small>CHOOSE NEW Main Feeder</small>
        <q-select
          filled
          v-model="twolinewire"
          label="Line (2 Wire)"
          :options="getwiredconduit"
          :option-value="`id`"
          :option-label="`line`"
          emit-value
          map-options
        >
        </q-select>
        <q-btn @click="cancelcb" color="white" text-color="black">cancel</q-btn>
        <q-btn @click="savewire" color="primary">save</q-btn>
      </div>
    </div>
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
      showresult: true,
      changecircuitbreaker: false,
      circuitbreaker: null,
      changetwowire: false,
      twolinewire: null
    }
  },
  created () {
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'LOAD SUMMARY')
    this.$store.dispatch('topnav/setisloadsummary', true)
  },
  mounted(){
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'LOAD SUMMARY')
    this.$store.dispatch('topnav/setisloadsummary', true)
    // console.log(this.$store.getters['categories/getCategories'])
  },
  methods : {
    changevalue(data){
      if(data.name == 'Main Circuit Breaker'){
        // console.log('main circuit breaker')
        this.changecircuitbreaker = true
        this.showresult = false
        return
      }
      if(data.name == 'Main Feeder'){
        // console.log('Main Feeder')
        this.changetwowire = true
        this.showresult = false
        return
      }
    },
    cancelcb(){
      this.changecircuitbreaker = false
      this.changetwowire = false
      this.showresult = true
      this.circuitbreaker = null
      this.twolinewire = null
    },
    savecb(){
      // console.log(this.circuitbreaker)
      this.$store.dispatch('uddwellmulti/editlscbreaker', this.circuitbreaker)
      this.cancelcb()
    },
    savewire(){
      // console.log(this.twolinewire)
      this.$store.dispatch('uddwellmulti/editlsmainfeeder', this.twolinewire)
      this.cancelcb()
    }
  },
  computed : {
    ...mapGetters({
      getnavigation:            'topnav/getnavigation',
      getisloadsummary:         'topnav/getisloadsummary',
      loadsummary:              'uddwellmulti/getloadsummary',
      getcbreaker:              'uddwellmulti/getcbreaker',
      getwiredconduit:          'uddwellmulti/getwiredconduit'
    })
  }
}
</script>
