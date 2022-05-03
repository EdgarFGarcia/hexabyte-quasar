<template>
  <div class="bg-grey text-center q-pa-md flex flex-center">
    <div>
      asdasd
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

    }
  },
  created () {
    // const data = {
        
    // }
    this.$store.dispatch('topnav/setshowddcalc', false)
    this.$store.dispatch('topnav/setnavigation', data)
  },
  computed : {
    ...mapGetters({
        getnavigation:          'topnav/getnavigation'
    })
  }
}
</script>
