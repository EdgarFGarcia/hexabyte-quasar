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
      this.$router.push({name: 'home'})
      this.$store.dispatch('topnav/setshowddcalc', true)
      this.$store.dispatch('topnav/setnavigation', data)
    },
    async fetchdata(){
      await this.$get(this, 'mobile/getCategories')
      .then(({data}) => {
        if(data.response){
          data.data.forEach(q => {
            switch(q.id){
              case 2:
                q.computation = {
                  cat_id:               q.id,
                  spc_restriction:      [
                    {
                      from_range:       0,
                      to_range:         1750,
                      process:          ['reduce'],
                      multiplier:        [
                        {
                          count:        0,
                          multiplier:   1,
                        }
                      ]
                    },
                    {
                      from_range:       1750,
                      to_range:         3500,
                      process:          ['reduce'],
                      multiplier:        [
                        {
                          count:          1,
                          multiplier:     0.8
                        },
                        {
                          count:          2,
                          multiplier:     0.75
                        },
                        {
                          count:          3,
                          multiplier:     0.7
                        },
                        {
                          count:          4,
                          multiplier:     0.66
                        },
                        {
                          count:          5,
                          multiplier:     0.62
                        },
                        {
                          count:          6,
                          multiplier:     0.59
                        },
                        {
                          count:          7,
                          multiplier:     0.56
                        },
                        {
                          count:          8,
                          multiplier:     0.53
                        },
                        {
                          count:          9,
                          multiplier:     0.51
                        },
                        {
                          count:          10,
                          multiplier:     0.49
                        },
                        {
                          count:          11,
                          multiplier:     0.47
                        },
                        {
                          count:          12,
                          multiplier:     0.45
                        },
                        {
                          count:          13,
                          multiplier:     0.43
                        },
                        {
                          count:          14,
                          multiplier:     0.41
                        },
                        {
                          count:          15,
                          multiplier:     0.4
                        }
                      ]
                    },
                    {
                      from_range:         3500,
                      to_range:           8750,
                      process:          ['reduce'],
                      multiplier:         [
                        {
                          count:          1,
                          multiplier:     0.8
                        },
                        {
                          count:          2,
                          multiplier:     0.65
                        },
                        {
                          count:          3,
                          multiplier:     0.55
                        },
                        {
                          count:          4,
                          multiplier:     0.5
                        },
                        {
                          count:          5,
                          multiplier:     0.45
                        },
                        {
                          count:          6,
                          multiplier:     0.43
                        },
                        {
                          count:          7,
                          multiplier:     0.4
                        },
                        {
                          count:          8,
                          multiplier:     0.36
                        },
                        {
                          count:          9,
                          multiplier:     0.35
                        },
                        {
                          count:          10,
                          multiplier:     0.34
                        },
                        {
                          count:          11,
                          multiplier:     0.32
                        },
                        {
                          count:          12,
                          multiplier:     0.32
                        },
                        {
                          count:          13,
                          multiplier:     0.32
                        },
                        {
                          count:          14,
                          multiplier:     0.32
                        },
                        {
                          count:          15,
                          multiplier:     0.32
                        }
                      ]
                    },
                    {
                      from_range:       8750,
                      to_range:         12000,
                      process:          ['reduce', 'release'],
                      multiplier:       [
                        {
                          count:        1,
                          multiplier:   8000
                        },
                        {
                          count:        2,
                          multiplier:   11000
                        },
                        {
                          count:        3,
                          multiplier:   14000
                        },
                        {
                          count:        4,
                          multiplier:   17000
                        },
                        {
                          count:        5,
                          multiplier:   20000
                        },
                        {
                          count:        6,
                          multiplier:   21000
                        },
                        {
                          count:        7,
                          multiplier:   22000
                        },
                        {
                          count:        8,
                          multiplier:   23000
                        },
                        {
                          count:        9,
                          multiplier:   24000
                        },
                        {
                          count:        10,
                          multiplier:   25000
                        },
                        {
                          count:        11,
                          multiplier:   26000
                        },
                        {
                          count:        12,
                          multiplier:   27000
                        },
                        {
                          count:        13,
                          multiplier:   28000
                        },
                        {
                          count:        14,
                          multiplier:   29000
                        },
                        {
                          count:        15,
                          multiplier:   30000
                        }
                      ]
                    }
                  ]
                }
                break
              case 3:
                q.computation = {
                  cat_id:               q.id,
                  spc_restriction:      [
                    {
                      which:            'main_breaker',
                      process:          ['reduce', 'highest_value', 1.50]
                    },
                    {
                      which:            'main_feeder',
                      process:          ['reduce', 'highest_value', 0.25]
                    }
                  ]
                }
                break
              case 6:
                q.computation = {
                  cat_id:               q.id,
                  spc_restriction:      [
                    {
                      process:          ['reduce'],
                      multiplier:       [
                        {
                          count:        0,
                          multiplier:   0
                        },
                        {
                          count:        1,
                          multiplier:   1,
                        },
                        {
                          count:        2,
                          multiplier:   1,
                        },
                        {
                          count:        3,
                          multiplier:   1
                        },
                        {
                          count:        4,
                          multiplier:   1
                        },
                        {
                          count:        5,
                          multiplier:   0.85
                        },
                        {
                          count:        6,
                          multiplier:   0.75
                        },
                        {
                          count:        7,
                          multiplier:   0.65
                        },
                        {
                          count:        8,
                          multiplier:   0.60
                        },
                        {
                          count:        9,
                          multiplier:   0.55
                        },
                        {
                          count:        10,
                          multiplier:   0.50
                        },
                        {
                          count:        11,
                          multiplier:    0.47
                        }
                      ]
                    }
                  ]
                }
                break
              case 7:
                q.computation = {
                  cat_id:               q.id,
                  spc_restriction:      [
                    {
                      process:          ['reduce']
                    }
                  ]
                }
                break
              case 8:
                q.computation = {
                  cat_id:               q.id,
                  spc_restriction:      [
                    {
                      process:        ['reduce'],
                      from:           0,
                      to:             3000,
                      multiplier:     0
                    },
                    {
                      process:        ['reduce'],
                      from:           3000,
                      to:             120000,
                      multiplier:     0.35
                    },
                    {
                      process:        ['reduce'],
                      from:           120000,
                      to:             9999999,
                      multiplier:     [3000, 117000, 0.35],
                      multiplier2:    [120000, 0.25]
                    }
                  ]
                }
                break
              case 9:
                q.computation = {
                  cat_id:               q.id,
                  has_computation:      3,
                  fs_restriction:       null,
                  sec_restriction:      null,
                  th_restriction:       null,
                  fr_restriction:       null,
                  spc_restriction:      ['reduce']
                }
                break
              default:
                console.log('meow')
                break
            }
          })
          console.log(data.data)
          this.$store.dispatch('categories/setCategories', data.data)
        }
      })
      await this.$get(this, 'mobile/getParentCategories')
      .then(({data}) => {
        if(data.response){
          this.$store.dispatch('categories/setparent_categories', data.data)
        }
      })
      await this.$get(this, 'mobile/getchildcategories')
      .then(({data}) => {
        if(data.response){
          this.$store.dispatch('categories/setchild_categories', data.data)
        }
      })
      await this.$get(this, 'mobile/getBreaker')
      .then(({data}) => {
        if(data.response){
          this.$store.dispatch('userdata/setcbreaker', data.data)
        }
      })
      await this.$get(this, 'mobile/getWireConduit')
      .then(({data}) => {
        if(data.response){
          this.$store.dispatch('userdata/setwiredconduit', data.data)
        }
      })
      await this.$get(this, 'mobile/getKaic')
      .then(({data}) => {
        // console.log('kaic', data)
        if(data.response){
          this.$store.dispatch('categories/setkaic', data.data)
        }
      })
    }
  }
}
</script>
