<template>
    <div>
        <div class="q-pa-md" v-if="getismanualinput">
            <div class="q-gutter-md text-center">
                <small>MANUAL INPUT DATA CUSTOMIZED NEW DATA</small>
                <q-input outlined v-model="mid.voltampred" label="Set Volt-Ampered" mask="#######"/>
                <q-input outlined v-model="mid.descname" label="Set Description Name"/>
                <q-input outlined v-model="mid.pcs" label="Enter No. Of Pieces" mask="######"/>
                <q-input outlined v-model="mid.enterlength" label="Enter Length (m)" mask="#####"/>
                <q-select
                    filled
                    v-model="mid.category"
                    label="Select Category"
                    :options="parent_categories"
                    behavior="menu"
                    transition-show="scale"
                    transition-hide="scale"
                    emit-value
                ></q-select>
                <q-btn @click="cancelmid" color="white" text-color="black">cancel</q-btn>
                <q-btn @click="savemanualinputdata" color="primary">save</q-btn>
            </div>
        </div>
        <div class="q-pa-md" v-if="getispresetdata">
            <div class="q-gutter-md text-center">
                <small>INPUT PRESET DATA</small>
                <q-input outlined v-model="mid.enterlength" label="ENTER LENGTH (m)" mask="######"/>
                <q-select
                    filled
                    v-model="mid.category"
                    label="SELECT PRESET DESCRIPTION"
                    :options="childcategory"
                    fill-input
                    input-debounce="0"
                    use-input
                    @filter="filterchild"
                    behavior="menu"
                    transition-show="scale"
                    transition-hide="scale"
                    emit-value
                >
                    <template v-slot:no-option>
                        <q-item>
                            <q-item-section class="text-grey">
                                No results
                            </q-item-section>
                        </q-item>
                    </template>
                </q-select>
                <q-input outlined v-model="mid.pcs" label="Enter No. Of Pieces" mask="######"/>
                <q-btn @click="cancelpd" color="white" text-color="black">cancel</q-btn>
                <q-btn @click="savepd" color="primary">save</q-btn>
            </div>
        </div>
        <div class="q-pa-md" v-if="changecircuitbreaker">
            <div class="q-gutter-md text-center">
                <small>CHOOSE NEW CIRCUIT BREAKER</small>
                <q-select
                    filled
                    v-model="circuitbreaker"
                    label="CIRCUIT BREAKER"
                    :options="getcbreaker"
                    :option-value="`id`"
                    :option-label="`at`"
                    emit-value
                    map-options
                >
                </q-select>
                <q-btn @click="cancelcb" color="white" text-color="black">cancel</q-btn>
                <q-btn @click="savecb" color="primary">save</q-btn>
            </div>
        </div>
        <div class="q-pa-md" v-if="changetwowire">
            <div class="q-gutter-md text-center">
                <small>CHOOSE NEW Line(2 Wire)</small>
                <q-select
                    filled
                    v-model="twolinewire"
                    label="Line (2 Wire)"
                    :options="getwiredconduit"
                    :option-value="`id`"
                    :option-label="`line`"
                    emit-value
                    map-options
                >
                </q-select>
                <q-btn @click="cancelwire" color="white" text-color="black">cancel</q-btn>
                <q-btn @click="savewire" color="primary">save</q-btn>
            </div>
        </div>
        <div class="q-pa-md" v-if="!getismanualinput && !getispresetdata && !changecircuitbreaker && !changetwowire">
            <q-card
                class="my-card"
                style="margin-bottom: 8px;"
                v-for="(item, itemindex) in miduser"
                :key="itemindex"
                :flat="true"
                :dark="true"
            >
                <q-card-section class="text-center">
                    <div class="row">
                        <div class="col-6" style="background: white;">
                            <label style="color: black;">Description:</label>
                        </div>
                        <div class="col-6">
                            <strong>{{getselectedvariable}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <label v-if="getisvoltage" style="color: black;">{{item.category}}</label>
                        </div>
                        <div class="col-6">
                            <strong v-if="getisvoltage">{{item.voltage}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <label v-if="getisvoltamp" style="color: black;">{{item.category}}</label>
                        </div>
                        <div class="col-6">
                            <strong v-if="getisvoltamp">{{item.volt_amp}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <label v-if="getiscurrent" style="color: black;">{{item.category}}</label>
                        </div>
                        <div class="col-6">
                            <strong v-if="getiscurrent">{{item.current}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <label v-if="getiscircuitbreaker" style="color: black;">{{item.category}}</label>
                        </div>
                        <div class="col-6">
                            <strong v-if="getiscircuitbreaker">{{item.at}} AT, {{item.af}} AF, {{item.pole}} POLE</strong><q-icon v-if="getiscircuitbreaker" name="edit" style="margin-left: 5px;" @click="editcircuitbreaker(item)"/>
                        </div>
                        <div class="col-6" style="background: white;">
                            <strong v-if="getistwolinewire" style="color: black;">{{item.category}}</strong>
                        </div>
                        <div class="col-6">
                            <strong v-if="getistwolinewire">{{item.line}}</strong><q-icon v-if="getistwolinewire" name="edit" style="margin-left: 5px;" @click="edit2linewire(item)"/>
                        </div>
                        <div class="col-6" style="background: white;">
                            <strong v-if="getisground" style="color: black;">{{item.category}}</strong>
                        </div>
                        <div class="col-6">
                            <strong v-if="getisground">{{item.ground}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <strong v-if="getisconduit" style="color: black;">{{item.category}}</strong>
                        </div>
                        <div class="col-6">
                            <strong v-if="getisconduit">{{item.conduit}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <strong v-if="getislength" style="color: black;">{{item.category}}</strong>
                        </div>
                        <div class="col-6">
                            <strong v-if="getislength">{{item.enterlength}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <strong v-if="getisvoltagedrop" style="color: black;">{{item.category}}</strong>
                        </div>
                        <div class="col-6">
                            <strong v-if="getisvoltagedrop">{{item.voltagedrop}}</strong>
                        </div>
                        <div class="col-6" style="background: white;">
                            <strong v-if="getisvoltagepercent" style="color: black;">{{item.category}}</strong>
                        </div>
                        <div class="col-6">
                            <strong v-if="getisvoltagepercent">{{item.voltpercent}}</strong>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'home',
    data () {
        return {
            manualinput: false,
            mid: {
                voltampred: null,
                descname: null,
                pcs: null,
                enterlength: null,
                category: null
            },
            isvoltage: false,
            isvoltamp: false,
            childcategory: [],
            changecircuitbreaker: false,
            circuitbreaker: null,
            changetwowire: false,
            twolinewire: null
        }
    },
    mounted(){
        console.log('mounted')
        this.$store.dispatch('topnav/setshowddcalc', true)
        this.$store.dispatch('topnav/setisloadsummary', false)
        this.$store.dispatch('topnav/setnavigationchild', '')
    },
    created () {
        console.log('created')
        this.$store.dispatch('topnav/setshowddcalc', true)
        this.$store.dispatch('topnav/setisloadsummary', false)
        this.$store.dispatch('topnav/setnavigationchild', '')
    },
    methods : {
        cancelmid(){
            this.mid = {}
            this.$store.dispatch('userdata/setismanualinput', false)
        },
        savemanualinputdata(){
            this.$store.dispatch('userdata/setmanualinputdata', this.mid)
            this.mid = []
            this.$store.dispatch('userdata/setismanualinput', false)
        },
        cancelpd(){
            this.mid = {}
            this.$store.dispatch('userdata/setispresetdata', false)
        },
        savepd(){
            this.mid.frominputpreset = 1
            const va = this.getchild_categories.filter(q => q.label.includes(this.mid.category))
            const parent_id = va[0].parent_id
            const parent = this.parent.filter( q => q.id === parent_id)
            this.mid.parent_id = parent_id
            this.mid.parent_data = parent
            this.mid.va = va[0].va
            this.mid.multiplier = va[0].multiplier
            this.$store.dispatch('userdata/setmanualinputdata', this.mid)
            this.mid = []
            this.$store.dispatch('userdata/setispresetdata', false)
        },
        filterchild(val, update){
            update(() => {
                const needle = val.toLocaleLowerCase()
                const search = this.getchild_categories.filter( q => {
                    return q.label.toLocaleLowerCase().includes(needle)
                })
                return this.childcategory = search
            })
        },
        editcircuitbreaker(data){
            this.$store.dispatch('userdata/setprevdatacircuitbreaker', data)
            this.changecircuitbreaker = true
        },
        cancelcb(){
            this.changecircuitbreaker = false
        },
        savecb(){
            this.$store.dispatch('userdata/editcircuitbreaker', this.circuitbreaker)
            this.changecircuitbreaker = false
        },
        edit2linewire(data){
            this.$store.dispatch('userdata/setprevdatalinetwowire', data)
            this.changetwowire = true
        },
        cancelwire(){
            this.changetwowire = false
        },
        savewire(){
            // console.log(this.twolinewire)
            this.$store.dispatch('userdata/editlinewire', this.twolinewire)
            this.changetwowire = false
        }
    },
    computed : {
        ...mapGetters({
            parent:                 'categories/getCategories',
            parent_categories:      'categories/getparent_categories',
            getchild_categories:    'categories/getchild_categories',
            getselectedvariable:    'userdata/getselectedvariable',
            miduser:                'userdata/getmanualinputdata',
            getcbreaker:            'userdata/getcbreaker',
            getisvoltage:           'userdata/getisvoltage',
            getisvoltamp:           'userdata/getisvoltamp',
            getiscurrent:           'userdata/getiscurrent',
            getismanualinput:       'userdata/getismanualinput',
            getispresetdata:        'userdata/getispresetdata',
            getiscircuitbreaker:    'userdata/getiscircuitbreaker',
            getistwolinewire:       'userdata/getistwolinewire',
            getwiredconduit:        'userdata/getwiredconduit',
            getisground:            'userdata/getisground',
            getisconduit:           'userdata/getisconduit',
            getislength:            'userdata/getislength',
            getisvoltagedrop:       'userdata/getisvoltagedrop',
            getisvoltagepercent:    'userdata/getisvoltagepercent',
        }),
    }
}
</script>