<template>
    <div class="fullscreen bg-grey text-white text-center q-pa-md flex flex-center">
    <div>
        <div style="font-size: 3vh">
            Single Phase
        </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSelection',
  data () {
    return {
      dditems: [
        {
          title: 'DWELLING UNITS',
          dd: [
            {
              id: 1,
              parent: 'DWELLING',
              title: 'SINGLE PANEL'
            },
            { 
              id: 2,
              parent: 'DWELLING',
              title: 'MULTIPANEL'
            }
          ]
        },
        {
          title: 'NON-DWELLING',
          dd: [
            {
              id: 1,
              parent: 'NON-DWELLING',
              title: 'SNGLE PANEL'
            },
            {
              id: 2,
              parent: 'NON-DWELLING',
              title: 'MULTIPANEL'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.fetchdata()
  },
  methods: {
    onItemClick(data){
      this.$router.push({name: 'home', params: data})
    },
    async fetchdata(){
      await this.$get(this, 'mobile/getCategories')
      .then(({data}) => {
        this.$store.dispatch('categories/setCategories', data.data)
      })
    }
  }
}
</script>
