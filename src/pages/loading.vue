<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="flex flex-center" style="background: #395553;">
      <img
        alt="Quasar logo"
        src="~assets/logo.png"
        style="width: 200px; height: 200px"
      >
    </q-page>
  </q-layout>
</template>

<script>
export default {
  name: 'PageIndex',
  created () {
    this.transition()
  },
  methods: {
    transition(){
      setTimeout(() => {
        this.$router.push({name: 'selection'})
      }, 5000)
    }
  }
}
</script>
