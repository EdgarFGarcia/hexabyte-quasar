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
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

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
            }
          ]
        },
      ]
    }
  },
  created () {
    this.title = this.$route.params
    console.log(this.title)
  },
  watch: {
  }
}
</script>
