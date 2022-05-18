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
          <small>MAIN PANEL - {{getnavigation.parent}} - {{getnavigation.title}} {{getnavigation.child}}</small>
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
        v-for="(item, itemIndex) in dditems"
        :key="itemIndex"
      >
        <q-btn-dropdown
          color="white"
          class="text-black pr-12 pl-12"
          :label="Object.keys(selecteddd).length !== 0 ? selecteddd.title : item.title"
          dropdown-icon="change_history"
          style="width: 100%;"
        >
          <q-list>
            <q-item 
              clickable
              v-close-popup 
              v-for="(iitem, iindex) in item.dd"
              :key="iindex"
              @click="onItemClick(iitem)"
            >
              <q-item-section>
                <label>{{iitem.title}}</label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-page-container>
    <router-view/>
    <!--
      FAB
     -->
    <div class="q-pa-md" v-if="getshowddcalc" style="position: fixed; bottom: 0; right: 0;">
      <div class="row justify-between">
        <q-fab
          v-model="fabRight"
          vertical-actions-align="right"
          color="black"
          glossy
          icon="keyboard_arrow_up"
          direction="up"
        >
          <q-fab-action
            v-for="(fab, fabindex) in fabdata"
            :key="fabindex"
            :label-position="fab.label_position"
            :color="fab.color"
            :icon="fab.icon"
            :label="fab.label"
            @click="onClick(fab.click)"
          >
          </q-fab-action>
        </q-fab>
      </div>
    </div>
    <!--
      FAB END
     -->
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapGetters } from 'vuex'
const linksData = [
  {
    title: 'Reload',
    caption: 'reload | go home',
    router: 'dwelling_multi_panel_main_calculation',
    icon: 'home'
  },
  {
    title: 'Load Summary',
    caption: 'load summary',
    router: 'loadsummarydwellingmultipanel',
    icon: 'summarize',
  },
  {
    title: 'Voltage Drop',
    caption: 'voltage drop',
    router: 'voltagedropdwellingmultipanel',
    icon: 'ev_station',
  },
  {
    title: 'Short Circuit',
    caption: 'short circuit',
    router: 'shortcircuitdwellingmultipanel',
    icon: 'account_tree',
  },
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
    router: 'selectiondwelling',
    icon: 'arrow_left'
  }
];

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      title: {},
      dditems: [
        {
          title: 'VARIABLES',
          dd: [
            {
              id: 1,
              title: 'VOLTAGE (V)'
            },
            { 
              id: 2,
              title: 'VOLT-AMP (VA)'
            },
            {
              id: 3,
              title: 'CURRENT (AMP)'
            },
            {
              id: 4,
              title: 'CIRCUIT BREAKER'
            },
            {
              id: 5,
              title: 'LINE (2 WIRES)'
            },
            {
              id: 6,
              title: 'Ground (1 wire)'
            },
            {
              id: 7,
              title: 'Conduit'
            },
            {
              id: 8,
              title: 'Length (m)'
            },
            {
              id: 9,
              title: 'VD (v)'
            },
            {
              id: 10,
              title: 'VD% (%)'
            }
          ]
        },
      ],
      fabdata: [
        {
          id:               1,
          label_position:   'left',
          color:            'black',
          icon:             'add',
          label:            'Add Panel',
          click:            'ipd'
        },
      ],
      fabRight: true,
    }
  },
  mounted () {
  },
  created () {
  },
  methods : {
    onClick(data){
      if(data === 'ipd'){
        // this.$store.dispatch('uddwellmulti/setispresetdata', true)
        this.$router.push({name: 'selectiondwelling'})
      }
    },
    onItemClick(data){
      this.$store.dispatch('uddwellmulti/setselectedvariable', data.title)
      switch(data.id){
        case 1:
          this.$store.dispatch('uddwellmulti/showvoltage_main_panel')
          break;
        case 2:
          this.$store.dispatch('uddwellmulti/showvoltampere_main_panel')
          break;
        case 3:
          this.$store.dispatch('uddwellmulti/showcurrent_main_panel')
          break;
        case 4:
          this.$store.dispatch('uddwellmulti/showcircuitbreaker_main_panel')
          break;
        case 5:
          this.$store.dispatch('uddwellmulti/showtwolines_main_panel')
          break;
        case 6:
          this.$store.dispatch('uddwellmulti/showgoundwire_main_panel')
          break;
        case 7:
          this.$store.dispatch('uddwellmulti/showconduit_main_panel')
          break;
        case 8:
          this.$store.dispatch('uddwellmulti/showlength')
          break;
        case 9:
          this.$store.dispatch('uddwellmulti/showvoltagedrop')
          break;
        case 10:
          this.$store.dispatch('uddwellmulti/showvoltagepercent')
          break;
      }
      this.$store.dispatch('uddwellmulti/setselecteddd', data)
    },
  },
  computed : {
    ...mapGetters({
      categories:             'categories/getCategories',
      selecteddd:             'uddwellmulti/getselecteddd',
      getnavigation:          'topnav/getnavigation',
      getshowddcalc:          'topnav/getshowddcalc'
    })
  },
  watch: {
  }
}
</script>
