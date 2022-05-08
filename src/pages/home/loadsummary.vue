<template>
  <div class="text-center q-pa-md flex flex-center">
    <q-page-container v-if="getisloadsummary">
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
                <strong style="color: black;">{{item.result}}</strong>
            </div>
          </div>
        </q-card-section>
      </q-card>
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
      // cooking: {
      //   items: [
      //     {
      //       minRange: 0,
      //       maxRange: 1750,
      //       items: [
      //         {
      //           count: any,
      //           multipler: 1
      //         }
      //       ]
      //     },
      //     {
      //       minRange: 1750,
      //       maxRange: 3500,
      //       items: [
      //         {
      //           count: 1,
      //           multipler: 0.8
      //         },
      //         {
      //           count: 2,
      //           multipler: 0.75
      //         },
      //         {
      //           count: 3,
      //           multiplier: 0.7
      //         }
      //       ]
      //     },
      //     {
      //       minRange: 3500,
      //       maxRange: 8750,
      //       items: [
      //         {
      //           count: 1,
      //           multiplier: 0.8
      //         }
      //       ]
      //     }
      //   ]
      // }
    }
  },
  created () {
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'LOAD SUMMARY')
    this.$store.dispatch('topnav/setisloadsummary', true)
  },
  mounted(){
    console.log('called mounted loadsummary')
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigationchild', 'LOAD SUMMARY')
    this.$store.dispatch('topnav/setisloadsummary', true)
  },
  computed : {
    ...mapGetters({
      getnavigation:            'topnav/getnavigation',
      getisloadsummary:         'topnav/getisloadsummary',
      loadsummary:              'userdata/getloadsummary',
    })
  }
}
</script>
