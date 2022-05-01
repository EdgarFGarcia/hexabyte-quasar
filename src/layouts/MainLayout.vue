<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{title.parent}} - {{title.title}}
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

    <q-page-container>
      <div 
        class="q-pa-md"
        v-for="(item, itemIndex) in dditems"
        :key="itemIndex"
      >
        <q-btn-dropdown
          color="white"
          class="text-black pr-12 pl-12"
          :label="item.title"
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
                {{iitem.title}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <router-view />
    </q-page-container>

    <div class="q-pa-md" v-if="manualinput">
      <div class="q-gutter-md text-center">
        <small>MANUAL INPUT DATA CUSTOMIZED NEW DATA</small>
        <q-input outlined v-model="mid.voltampred" label="Set Volt-Ampered"/>
        <q-input outlined v-model="mid.descname" label="Set Description Name"/>
        <q-input outlined v-model="mid.pcs" label="Enter No. Of Pieces"/>
        <q-input outlined v-model="mid.enterlength" label="Enter Length (m)"/>
        <q-select
          filled
          v-model="mid.category"
          label="Select Category"
          :options="categoriesprop"
          behavior="menu"
          emit-value
        ></q-select>
        <q-btn @click="manualinput = !manualinput">save</q-btn>
      </div>
    </div>

    <!--
      FAB
     -->
    <div class="q-pa-md" style="position: fixed; bottom: 0; right: 0;">
      <div class="row justify-between">
        <q-fab
          v-model="fabRight"
          vertical-actions-align="right"
          color="primary"
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
          color:            'primary',
          icon:             'add',
          label:            'Input Preset Data',
          click:            'ipd'
        },
        {
          id:               2,
          label_position:   'left',
          color:            'primary',
          icon:             'add',
          label:            'Manual Input Data',
          click:            'mid'
        }
      ],
      fabRight: true,
      manualinput: false,
      mid: {
        voltampred: null,
        descname: null,
        pcs: null,
        enterlength: null,
        category: null
      },
      categoriesprop: [
        {
          label:  'Cooking',
          value:  'Cooking'
        },
        {
          label:  'Cooling',
          value:  'Cooling'
        },
        {
          label:  'Dryer',
          value:  'Dryer'
        },
        {
          label:  'Heating',
          value:  'Heating'
        },
        {
          label:  'LO.CO',
          value:  'LO.CO'
        },
        {
          label:  'OTHERS',
          value:  'OTHERS'
        }
      ]
    }
  },
  created () {
    this.title = this.$route.params
  },
  methods : {
    onItemClick(data){
      console.log(data)
    },
    onClick(data){
      if(data === 'ipd'){
        console.log(data)
      }else if(data === 'mid'){
        console.log('mid')
        this.manualinput = true
      }
    }
  },
  computed : {
    ...mapGetters({
      categories:     'categories/getCategories'
    })
  },
  watch: {
  }
}
</script>
