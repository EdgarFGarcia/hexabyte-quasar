import Vue from 'vue'

export default{
    namespaced: true,
    state: {
        manualinputdata: [],
        selectedvariable: {},
        cbreaker: [],
        selecteddd: {},
        ismanualinput: false,
        ispresetdata: false,
        isvoltage: false,
        isvoltamp: false,
        iscurrent: false,
        iscircuitbreaker: false,
        prevdatacircuitbreaker: {},
        wireconduit: [],
        istwolinewire: false,
        prevdatalinetwowire: {},
        isground: false
    },
    mutations: {
        setmanualinputdata(state, payload){
            state.manualinputdata.push(payload)
        },
        setselectedvariable(state, payload){
            state.selectedvariable = payload
        },
        setselecteddd(state, payload){
            state.selecteddd = payload
        },
        showvoltage(state, payload){
            state.manualinputdata = [...payload]
        },
        addvoltamp(state, payload){
            state.manualinputdata = [...payload]
        },
        addcurrent(state, payload){
            state.manualinputdata = [...payload]
        },
        addcircuitbreaker(state, payload){
            state.manualinputdata = [...payload]
        },
        setisvoltage(state, payload){
            state.isvoltage = payload
        },
        setisvoltamp(state, payload){
            state.isvoltamp = payload
        },
        setiscurrent(state, payload){
            state.iscurrent = payload
        },
        setismanualinput(state, payload){
            state.ismanualinput = payload
        },
        setispresetdata(state, payload){
            state.ispresetdata = payload
        },
        setcircuitbreaker(state, payload){
            state.iscircuitbreaker = payload
        },
        setcbreaker(state, payload){
            state.cbreaker = payload
        },
        setprevdatacircuitbreaker(state, payload){
            state.prevdatacircuitbreaker = payload
        },
        editcircuitbreaker(state, payload){
            const toedit = state.manualinputdata.find(q => q.id === payload.id)
            toedit.af = payload.af
            toedit.at = payload.at
            toedit.load = payload.load
        },
        setwiredconduit(state, payload){
            state.wireconduit = [...payload]
        },
        setistwolinewire(state, payload){
            state.istwolinewire = payload
        },
        settwolinewire(state, payload){
            // console.log(payload)
            state.manualinputdata = [...payload]
        },
        setprevdatalinetwowire(state, payload){
            state.prevdatalinetwowire = payload
        },
        setnewlinewire(state, payload){
            const toedit = state.manualinputdata.find(q => q.id === payload.id)
            toedit.line = payload.line
        },
        setgroundwire(state, payload){
            state.manualinputdata = [...payload]
        },
        setisground(state, payload){
            state.isground = payload
        }
    },
    getters: {
        getmanualinputdata(state){
            return state.manualinputdata
        },
        getselectedvariable(state){
            return state.selectedvariable
        },
        getselecteddd(state){
            return state.selecteddd
        },
        getisvoltage(state){
            return state.isvoltage
        },
        getisvoltamp(state){
            return state.isvoltamp
        },
        getiscurrent(state){
            return state.iscurrent
        },
        getismanualinput(state){
            return state.ismanualinput
        },
        getispresetdata(state){
            return state.ispresetdata
        },
        getcbreaker(state){
            return state.cbreaker
        },
        getiscircuitbreaker(state){
            return state.iscircuitbreaker
        },
        getprevdatacircuitbreaker(state){
            return state.prevdatacircuitbreaker
        },
        getwiredconduit(state){
            return state.wireconduit
        },
        getistwolinewire(state){
            return state.istwolinewire
        },
        getprevdatalinetwowire(state){
            return state.prevdatalinetwowire
        },
        getisground(state){
            return state.isground
        }
    },
    actions: {
        setmanualinputdata({commit, state}, payload){
            const forId = state.manualinputdata.length
            payload.id = forId + 1
            commit('setmanualinputdata', payload)
        },
        setselecteddd({commit}, payload){
            commit('setselecteddd', payload)
        },
        setcbreaker({commit}, payload){
            commit('setcbreaker', payload)
        },
        setselectedvariable({commit}, payload){
            commit('setselectedvariable', payload)
        },
        setismanualinput({commit}, payload){
            commit('setismanualinput', payload)
        },
        setispresetdata({commit}, payload){
            commit('setispresetdata', payload)
        },
        showvoltage({commit, state}){
            const addvoltage = state.manualinputdata.map((item) => ({
                ...item,
                voltage: 230
            }))
            commit('showvoltage', addvoltage)
            // reset all boolean first
            commit('setisground', false)
            commit('setcircuitbreaker', false)
            commit('setisvoltage', false)
            commit('setisvoltamp', false)
            commit('setiscurrent', false)
            commit('setistwolinewire', false)
            // set needed boolean value
            commit('setisvoltage', true)
        },
        showvoltampere({commit, state}){
            const addvoltamp = state.manualinputdata.map((item) => ({
                ...item,
                volt_amp:  item.frominputpreset === 1 ? (item.pcs * item.va) : item.voltampred * item.pcs
            }))
            commit('addvoltamp', addvoltamp)
            // reset all boolean first
            commit('setisground', false)
            commit('setcircuitbreaker', false)
            commit('setisvoltage', false)
            commit('setisvoltamp', false)
            commit('setiscurrent', false)
            commit('setistwolinewire', false)
            // set needed boolean value
            commit('setisvoltamp', true)
        },
        showcurrent({commit, state}){
            const addcurrent = state.manualinputdata.map((item) => ({
                ...item,
                current: item.frominputpreset === 1 ? (item.pcs * item.va) / 230 : (item.pcs * item.voltampred) / 230
            }))
            commit('addcurrent', addcurrent)
            // reset all boolean first
            commit('setisground', false)
            commit('setcircuitbreaker', false)
            commit('setisvoltage', false)
            commit('setisvoltamp', false)
            commit('setiscurrent', false)
            commit('setistwolinewire', false)
            // set needed boolean value
            commit('setiscurrent', true)
        },
        showcircuitbreaker({commit, state}){
            const circuitbreaker = state.manualinputdata.map((item) => ({
                ...item,
                cctocalculate: item.frominputpreset === 1 ? (item.current * item.multiplier).toFixed(2) : (item.current * 1).toFixed(2),
                // ccmintocalculate: item.frominputpreset === 1 ? Math.round(item.current * item.multiplier) : Math.round(item.current * 1)
            }))
            let findvalue = 0
            circuitbreaker.forEach((qcb) => {
                findvalue = state.cbreaker.filter( q => {
                    return qcb.cctocalculate > q.minRange && qcb.cctocalculate <= q.maxRange
                })
                qcb.af = findvalue[0].af
                qcb.at = findvalue[0].at
                qcb.pole = findvalue[0].pole
            })
            commit('addcircuitbreaker', circuitbreaker)
            // reset all boolean first
            commit('setisground', false)
            commit('setcircuitbreaker', false)
            commit('setisvoltage', false)
            commit('setisvoltamp', false)
            commit('setiscurrent', false)
            commit('setistwolinewire', false)
            // set neede boolean value
            commit('setcircuitbreaker', true)
        },
        setprevdatacircuitbreaker({commit}, payload){
            commit('setprevdatacircuitbreaker', payload)
        },
        editcircuitbreaker({commit, state}, payload){
            const prev = state.prevdatacircuitbreaker
            const getbreakerdata = state.cbreaker.find(q => q.id === payload)
            const topass = {
                id:                 prev.id,
                at:                 getbreakerdata.at,
                af:                 getbreakerdata.af,
                pole:               getbreakerdata.pole
            }
            commit('editcircuitbreaker', topass)
        },
        setwiredconduit({commit}, payload){
            commit('setwiredconduit', payload)
        },
        showtwolines({commit, state}){
            const wire2lines = state.manualinputdata.map((item) => ({
                ...item,
                cctocalculate: item.frominputpreset === 1 ? (item.current * item.multiplier).toFixed(2) : (item.current * 1).toFixed(2)
            }))
            let findvalue = 0
            wire2lines.forEach(qcb => {
                findvalue = state.wireconduit.filter(q => {
                    return qcb.cctocalculate > q.minRange && qcb.cctocalculate <= q.maxRange
                })
                qcb.line = findvalue[0].line
                qcb.ground = findvalue[0].load_schedule_ground_wire
            })
            commit('settwolinewire', wire2lines)
            // reset all boolean first
            commit('setisground', false)
            commit('setcircuitbreaker', false)
            commit('setisvoltage', false)
            commit('setisvoltamp', false)
            commit('setiscurrent', false)
            commit('setistwolinewire', false)
            // set neede boolean value
            commit('setistwolinewire', true)
        },
        setprevdatalinetwowire({commit}, payload){
            commit('setprevdatalinetwowire', payload)
        },
        editlinewire({commit, state}, payload){
            const prev = state.prevdatalinetwowire
            const getwire = state.wireconduit.find(q => q.id === payload)
            const topass = {
                id:             prev.id,
                line:           getwire.line
            }
            commit('setnewlinewire', topass)
        },
        showgoundwire({commit, state}){
            const ground = state.manualinputdata.map((item) => ({
                ...item,
                cctocalculate: item.frominputpreset === 1 ? (item.current * item.multiplier).toFixed(2) : (item.current * 1).toFixed(2)
            }))
            let findvalue = 0
            ground.forEach(qcb => {
                findvalue = state.wireconduit.filter(q => {
                    return qcb.cctocalculate > q.minRange && qcb.cctocalculate <= q.maxRange
                })
                qcb.ground = findvalue[0].load_schedule_ground_wire
            })
            commit('setgroundwire', ground)
            commit('setisground', false)
            commit('setcircuitbreaker', false)
            commit('setisvoltage', false)
            commit('setisvoltamp', false)
            commit('setiscurrent', false)
            commit('setistwolinewire', false)
            // set needed boolean value
            commit('setisground', true)
        }
    }
}