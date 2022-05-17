<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background: black;">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <small>{{getnavigation.parent}} - {{getnavigation.title}} {{getnavigation.child}}</small>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container v-if="getshowddcalc">
      <div
        class="q-pa-md"
      >
        <!-- <label>MAIN PANEL</label> -->
        <q-btn class="full-width" color="black" @click="$router.push({name: 'dwelling_multi_main_panel'})">MAIN PANEL</q-btn>
      </div>
      <q-icon name="add" size="md" @click="addpanel"></q-icon>
    </q-page-container>
    <router-view/>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapGetters } from 'vuex'
const linksData = [
  {
    title: 'Save',
    caption: 'save',
    router: 'savedwellingmultipnale',
    icon: 'save'
  },
  {
    title: 'Save as',
    caption: 'saveas',
    router: 'saveasdwellingmultipnale',
    icon: 'save'
  },
  {
    title: 'Print',
    caption: 'print',
    router: 'print',
    icon: 'print',
  },
  {
    title: 'Export',
    caption: 'export',
    router: 'export',
    icon: 'file_download',
  },
  {
    title: 'Back',
    caption: 'Go To Selection Page',
    router: 'selection',
    icon: 'arrow_left'
  }
];

export default {
  name: 'MainDwellingMultiPanel',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      title: {},
    }
  },
  mounted () {
    // console.log('here mounted')
    // this.$store.dispatch('topnav/setshowddcalc', true)
  },
  created () {
    // console.log('here')
    // this.$store.dispatch('topnav/setshowddcalc', true)
  },
  methods : {
    addpanel(){
      this.$store.dispatch('uddwellmulti/addpanel')
    }
  },
  computed : {
    ...mapGetters({
      categories:             'categories/getCategories',
      getnavigation:          'topnav/getnavigation',
      getshowddcalc:          'topnav/getshowddcalc'
    })
  },
  watch: {
  }
}
</script>
