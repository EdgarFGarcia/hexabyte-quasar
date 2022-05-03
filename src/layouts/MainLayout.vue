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
          {{getnavigation.parent}} - {{getnavigation.title}}
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
      <router-view/>
    </q-page-container>

    <!--
      FAB
     -->
    <div class="q-pa-md" style="position: fixed; bottom: 0; right: 0;">
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
    title: 'Home',
    caption: 'home',
    router: 'selection',
    icon: 'home'
  },
  {
    title: 'Load Summary',
    caption: 'load summary',
    router: 'loadsummary',
    icon: 'summarize',
  },
  {
    title: 'Voltage Drop',
    caption: 'voltage drop',
    router: 'voltagedrop',
    icon: 'ev_station',
  },
  {
    title: 'Short Circuit',
    caption: 'short circuit',
    router: 'shortcircuit',
    icon: 'account_tree',
  },
  {
    title: 'Save',
    caption: 'save',
    router: 'save',
    icon: 'save',
  },
  {
    title: 'Save As',
    caption: 'save as',
    router: 'saveas',
    icon: 'save',
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
          label:            'Input Preset Data',
          click:            'ipd'
        },
        {
          id:               2,
          label_position:   'left',
          color:            'black',
          icon:             'add',
          label:            'Manual Input Data',
          click:            'mid'
        }
      ],
      fabRight: true,
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
    onClick(data){
      if(data === 'ipd'){
        this.$store.dispatch('userdata/setispresetdata', true)
      }else if(data === 'mid'){
        this.$store.dispatch('userdata/setismanualinput', true)
      }
    },
    onItemClick(data){
      this.$store.dispatch('userdata/setselectedvariable', data.title)
      switch(data.id){
        case 1:
          this.$store.dispatch('userdata/showvoltage')
          break;
        case 2:
          this.$store.dispatch('userdata/showvoltampere')
          break;
        case 3:
          this.$store.dispatch('userdata/showcurrent')
          break;
        case 4:
          this.$store.dispatch('userdata/showcircuitbreaker')
          break;
        case 5:
          this.$store.dispatch('userdata/showtwolines')
          break;
        case 6:
          this.$store.dispatch('userdata/showgoundwire')
          break;
        case 7:
          this.$store.dispatch('userdata/showconduit')
          break;
        case 8:
          this.$store.dispatch('userdata/showlength')
          break;
        case 9:
          this.$store.dispatch('userdata/showvoltagedrop')
          break;
        case 10:
          this.$store.dispatch('userdata/showvoltagepercent')
          break;
      }
      this.$store.dispatch('userdata/setselecteddd', data)
    },
  },
  computed : {
    ...mapGetters({
      categories:             'categories/getCategories',
      selecteddd:             'userdata/getselecteddd',
      getnavigation:          'topnav/getnavigation',
      getshowddcalc:          'topnav/getshowddcalc'
    })
  },
  watch: {
  }
}
</script>
