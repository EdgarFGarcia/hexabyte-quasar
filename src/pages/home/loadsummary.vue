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
  computed : {
    ...mapGetters({
      getnavigation:            'topnav/getnavigation',
      getisloadsummary:         'topnav/getisloadsummary',
      loadsummary:              'userdata/getloadsummary',
    })
  }
}
</script>
