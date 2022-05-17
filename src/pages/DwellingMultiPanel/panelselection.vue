<template>
  <div>
    <div
      class="q-pa-xs text-center"
      v-for="(btnItem, btnIndex) in getmultipanel"
      :key="btnIndex"
    >
      <div class="row">
        <div class="col-10">
          <q-btn 
            @click="opendata(btnItem)" 
            class="full-width" 
            color="grey"
          >
            {{btnItem.name}}
          </q-btn>
        </div>
        <div class="col-2">
          <q-icon name="delete" size="sm" @click="deletepanel(btnItem)" style="position: relative; top: 5px; right: 15px;"></q-icon>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'panelselection',
  data () {
    return {

    }
  },
  created () {
    // this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.commit('uddwellmulti/delete_child_categories')
    this.$store.commit('uddwellmulti/setissorted', false)
  },
  mounted () {
    // this.$store.dispatch('topnav/setshowddcalc', false)
    // this.$store.commit('uddwellmulti/delete_child_categories')
  },
  methods : {
    opendata(data){
      this.$router.push({name: 'dwellingmulticalculation'})
      this.$store.dispatch('uddwellmulti/setselectedpanel', data)
    },
    deletepanel(data){
      this.$store.dispatch('uddwellmulti/deletepanel', data)
    }
  },
  computed : {
    ...mapGetters({
      getmultipanel:          'uddwellmulti/getmultipanel'
    })
  }
}
</script>
