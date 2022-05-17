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
        isground: false,
        isconduit: false,
        islength: false,
        isvoltagedrop: false,
        isvoltagepercent: false,
        // GROUP BY CATEGORIES
        cooking: [],
        cooling: [],
        dryer: [],
        heating: [],
        loco: [],
        others: [],
        loadsummary: {}
    },
    mutations: {
        setmanualinputdata(state, payload){
            state.manualinputdata.push(payload)
        },
        setclearall(state, payload){
            state.islength = payload
            state.isconduit = payload
            state.isground = payload
            state.ismanualinput = payload
            state.isvoltage = payload
            state.isvoltamp = payload
            state.iscurrent = payload
            state.iscircuitbreaker = payload
            state.istwolinewire = payload
            state.isvoltagedrop = payload
            state.isvoltagepercent = payload
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
            // isedited:       1,
            // ground:         getwire.load_schedule_ground_wire,
            // conduit:        getwire.conduit,
            // resisteance:    getwire.resistance,
            // voltagedrop:    (2 * prev.current * prev.enterlength * prev.resisteance) / 305
            toedit.isedited = payload.isedited
            toedit.ground = payload.ground
            toedit.conduit = payload.conduit
            toedit.resisteance = payload.resisteance
            toedit.voltagedrop = payload.voltagedrop
            // toedit.voltpercent = payload.voltpercent
            const evoltpercent = state.manualinputdata.find(qq => qq.id === payload.id)
            evoltpercent.voltpercent = (toedit.voltagedrop / 230) * 100
        },
        setgroundwire(state, payload){
            state.manualinputdata = [...payload]
        },
        setisground(state, payload){
            state.isground = payload
        },
        setisconduit(state, payload){
            state.isconduit = payload
        },
        setislength(state, payload){
            state.islength = payload
        },
        setisvoltagedrop(state, payload){
            state.isvoltagedrop = payload
        },
        setvoltagedrop(state, payload){
            state.manualinputdata = [...payload]
        },
        setvoltagepercent(state, payload){
            state.manualinputdata = [...payload]
        },
        setisvoltagepercent(state, payload){
            state.isvoltagepercent = payload
        },
        setcooking(state, payload){
            state.cooking.push(payload)
        },
        setcooling(state, payload){
            state.cooling.push(payload)
        },
        setdryer(state, payload){
            state.dryer.push(payload)
        },
        setheating(state, payload){
            state.heating.push(payload)
        },
        setloco(state, payload){
            state.loco.push(payload)
        },
        setothers(state, payload){
            state.others.push(payload)
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
        },
        getisconduit(state){
            return state.isconduit
        },
        getislength(state){
            return state.islength
        },
        getisvoltagedrop(state){
            return state.isvoltagedrop
        },
        getisvoltagepercent(state){
            return state.isvoltagepercent
        },
        getloadsummary(state, getters, rootState, rootGetters){
            const data = state.manualinputdata

            if(data.length == 0){
                const toreturn = {
                    total:          0,
                    items: [
                      {
                        name:       'TOTAL VOLT-AMPERE (VA)',
                        result:     0
                      },
                      {
                        name:       'TOTAL CURRENT (AMP)',
                        result:     0
                      },
                      {
                        name:       'Main Circuit Breaker',
                        result:     0,
                      },
                      {
                        name:       'OCPD Current (AMP)',
                        result:     0
                      },
                      {
                        name:       'Service Ground (1 Wire)',
                        result:     0
                      },
                      {
                        name:       'Main Feeder',
                        result:     0,
                      },
                      {
                        name:       'IFL Current (AMP)',
                        result:     0
                      },
                      {
                        name:       'Conduit',
                        result:     0
                      },
                    ],
                    resistance:     0
                }
                state.loadsummary = toreturn
                return toreturn
            }

            // get lo.co data
            const loco = state.loco
            const sumlocova = loco.reduce((n, {volt_amp}) => n + volt_amp, 0)
            let locoresult = 0
            if(sumlocova <= 3000){
                locoresult = sumlocova
            }
            if(sumlocova > 3000 && sumlocova <= 120000){
                locoresult = 3000 + ((sumlocova - 3000) * 0.35)
            }
            if(sumlocova > 120000){
                locoresult = 3000 +((117000) *0.35) + ((sumlocova - 120000) * 0.25)
            }
            // end loco

            // cooling
            const cooling = state.cooling
            const sum_main_breaker = cooling.reduce((n, {volt_amp}) => n + volt_amp, 0)
            const sum_main_feeder = cooling.reduce((n, {volt_amp}) => n + volt_amp, 0)
            const high_value = Math.max(...cooling.map(r => r.volt_amp))

            let main_breaker_result = sum_main_breaker + (high_value * 1.50)
            let main_feeder_result = sum_main_breaker + (high_value * 0.25)

            // console.log(main_breaker_result, main_feeder_result)
            // end cooling

            // heating
            const heating = state.heating
            const sum_heating = heating.reduce((n, {volt_amp}) => n + volt_amp, 0)
            // end heating

            // others
            const others = state.others
            const sum_others = others.reduce((n, {volt_amp}) => n + volt_amp, 0)
            // end others

            // dryer
            const dryer = state.dryer
            let resultdryer = 0
            if(dryer.length != 0){
                const getcat = rootGetters['categories/getCategories']
                const rcat = getcat.filter(q => {
                    return q.category == 'DRYER'
                })
                const multipliers = rcat[0].computation.spc_restriction[0].multiplier
                const dryercount = dryer.length
                const multiplier = multipliers.filter( q => {
                    return q.count === dryercount
                })
                const sum_dryer = dryer.reduce((n, {volt_amp}) => n + volt_amp, 0)
                resultdryer = sum_dryer * multiplier[0].multiplier
            }
            // console.log(resultdryer)
            // end dryer
            // cooking
            const cooking = state.cooking
            const range1 = cooking.filter( q => {
                return q.volt_amp <= 1750
            })
            const range2 = cooking.filter(q => {
                return q.volt_amp > 1750 && q.volt_amp < 3500
            })
            const range3 = cooking.filter(q => {
                return q.volt_amp >= 3500 && q.volt_amp < 8750
            })
            const range4 = cooking.filter(q => {
                return q.volt_amp > 8750 && q.volt_amp <= 12000 
            })
            const range5 = cooking.filter(q => {
                return q.volt_amp > 12000
            })
            const range_one_count = range1.length
            const range_two_count = range2.length
            const range_three_count = range3.length
            const range_four_count = range4.length
            const range_five_count = range5.length

            const formula = rootGetters['categories/getCategories']
            const cooking_cat = formula.filter(q => {
                return q.category == 'COOKING'
            })

            const formula_to_use = cooking_cat[0].computation.spc_restriction
            const sum_va_range1 = range1.reduce((n, {volt_amp}) => n + volt_amp, 0)
            const max_range_one = Math.max(...range1.map(r => r.volt_amp))
            const max_range_two = Math.max(...range2.map(r => r.volt_amp))
            const max_range_three = Math.max(...range3.map(r => r.volt_amp))
            const max_range_four = Math.max(...range4.map(r => r.volt_amp))

            // console.log(isFinite(max_range_two), isFinite(max_range_one))

            // multipler one
            let range_one_formula = 0
            if(isFinite(max_range_one)){
                range_one_formula = formula_to_use.filter(q => {
                    return q.from_range <= max_range_one && q.to_range >= max_range_one
                })
            }
            let multiplier_one = null
            if(range_one_formula.length > 0){
                multiplier_one = range_one_formula[0].multiplier.filter(q => {
                    return q.count === 0
                })
            }
            // end multipler one

            // multiplier two
            let range_two_formula = 0
            if(isFinite(max_range_two)){
                range_two_formula = formula_to_use.filter(q => {
                    return q.from_range <= max_range_two && q.to_range >= max_range_two
                })
            }
            let multiplier_two = null
            if(range_two_formula.length > 0){
                multiplier_two = range_two_formula[0].multiplier.filter(q => {
                    return q.count === range_two_count
                })
            }
            // end multiplier two

            // multiplier three
            let range_three_formula = 0
            if(isFinite(max_range_three)){
                range_three_formula = formula_to_use.filter(q => {
                    return q.from_range <= max_range_three && q.to_range >= max_range_three
                })
            }
            let multiplier_three = null
            if(range_three_formula.length > 0){
                multiplier_three = range_three_formula[0].multiplier.filter(q => {
                    return q.count === range_three_count
                })
            }
            // end multiplier three

            // multiplier four
            let range_four_formula = 0
            if(max_range_four){
                range_four_formula = formula_to_use.filter(q => {
                    return q.from_range <= max_range_four && q.to_range >= max_range_four
                })
            }
            let multiplier_four = null
            if(range_four_formula.length > 0){
                multiplier_four = range_four_formula[0].multiplier.filter(q => {
                    return q.count === range_four_count
                })
            }
            // end multiplier four
            const sum_range_one = range1.reduce((n, {volt_amp}) => n + volt_amp, 0)
            const sum_range_two = range2.length != 0 ? range2.reduce((n, {volt_amp}) => n + volt_amp, 0) : 0
            const sum_range_three = range3.reduce((n, {volt_amp}) => n + volt_amp, 0)

            console.log(multiplier_two, sum_range_two)

            let range_one_result = 0
            if(multiplier_one != null && sum_range_one != 0){
                range_one_result = sum_range_one * multiplier_one[0].multiplier
            }
            let range_two_result = 0
            if(multiplier_two != null && sum_range_two != 0){
                range_two_result = sum_range_two * multiplier_two[0].multiplier
            }
            let range_three_result = 0
            if(multiplier_three != null && sum_range_three != 0){
                range_three_result = sum_range_three * multiplier_three[0].multiplier
            }
            let range_four_result = 0
            if(multiplier_four != null){
                range_four_result = multiplier_four[0].multiplier
            }

            const sum_cooking = parseInt(range_one_result) + parseInt(range_two_result) + parseInt(range_three_result) + parseInt(range_four_result)
            // let main_feeder_result = sum_main_breaker + (high_value * 0.25)
            const main_breaker = isFinite(main_breaker_result) ? parseInt(main_breaker_result) : 0
            const main_feeder = isFinite(main_feeder_result) ? parseInt(main_feeder_result) : 0
            const total = (parseInt(sum_cooking) + parseInt(resultdryer) + parseInt(sum_others) + parseInt(sum_heating) + parseInt(locoresult) + parseInt(main_breaker)) / 230
            const ifl = (parseInt(sum_cooking) + parseInt(resultdryer) + parseInt(sum_others) + parseInt(sum_heating) + parseInt(locoresult) + parseInt(main_feeder)) / 230

            const findvaluecircuitbreaker = state.cbreaker.filter( q => {
                return total > q.minRange && total <= q.maxRange
            })

            const findvaluemainfeeder = state.wireconduit.filter(q => {
                return total > q.minRange && total <= q.maxRange
            })
            // end cooking

            // const categories = rootGetters['categories/getCategories']
            const toreturn = {
                total:          state.manualinputdata,
                items: [
                  {
                    name:       'TOTAL VOLT-AMPERE (VA)',
                    result:     state.manualinputdata.reduce((n, {volt_amp}) => n + volt_amp, 0)
                  },
                  {
                    name:       'TOTAL CURRENT (AMP)',
                    result:     state.manualinputdata.reduce((n, {current}) => n + current, 0)
                  },
                  {
                    name:       'Main Circuit Breaker',
                    result:     'AT ' + findvaluecircuitbreaker[0].at + ', AF ' + findvaluecircuitbreaker[0].af + ', Pole ' + findvaluecircuitbreaker[0].pole,
                    hasdd:      true,
                    dditem:     'breaker'
                  },
                  {
                    name:       'OCPD Current (AMP)',
                    result:     total
                  },
                  {
                    name:       'Service Ground (1 Wire)',
                    result:     findvaluecircuitbreaker[0].load_summary_ground_wire
                  },
                  {
                    name:       'Main Feeder',
                    result:     findvaluemainfeeder[0].line,
                    hasdd:      true,
                    dditem:     'feeder'
                  },
                  {
                    name:       'IFL Current (AMP)',
                    result:     ifl
                  },
                  {
                    name:       'Conduit',
                    result:     findvaluemainfeeder[0].conduit
                  },
                ],
                resistance:     findvaluemainfeeder[0].resistance
            }
            state.loadsummary = toreturn
            return toreturn
        },
        // gettotalcurrent(state){
        //     return state.manualinputdata.reduce((n, {current}) => n + current, 0)
        // }
    },
    actions: {
        setmanualinputdata({commit, state}, payload){
            const forId = state.manualinputdata.length
            payload.id = forId + 1
            if(payload.parent_data.category === 'COOKING'){
                commit('setcooking', payload)
            }
            if(payload.parent_data.category === 'COOLING'){
                commit('setcooling', payload)
            }
            if(payload.parent_data.category === 'DRYER'){
                commit('setdryer', payload)
            }
            if(payload.parent_data.category === 'HEATING'){
                commit('setheating', payload)
            }
            if(payload.parent_data.category === 'LO.CO'){
                commit('setloco', payload)
            }
            if(payload.parent_data.category === 'OTHERS'){
                commit('setothers', payload)
            }
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
            commit('setclearall', false)
            // set needed boolean value
            commit('setisvoltage', true)
        },
        showvoltampere({commit, state}){
            const addvoltamp = state.manualinputdata.map((item) => ({
                ...item,
                volt_amp:  item.frominputpreset === 1 ? (item.pcs * item.va) : item.voltampred * item.pcs
            }))
            addvoltamp.forEach( q => {
                if(q.parent_data.category === 'LO.CO'){
                    const toeditloco = state.loco.filter( l => {
                        return l.id === q.id
                    })
                    toeditloco[0].volt_amp = q.volt_amp
                    return
                }
                if(q.parent_data.category === 'COOKING'){
                    const toeditcooking = state.cooking.filter( cook => {
                        return cook.id === q.id
                    })
                    toeditcooking[0].volt_amp = q.volt_amp
                    return
                }
                if(q.parent_data.category === 'COOLING'){
                    const toeditcooling = state.cooling.filter( cool => {
                        return cool.id === q.id
                    })
                    toeditcooling[0].volt_amp = q.volt_amp
                    return
                }
                if(q.parent_data.category === 'DRYER'){
                    const toeditdryer = state.dryer.filter( dry => {
                        return dry.id === q.id
                    })
                    toeditdryer[0].volt_amp = q.volt_amp
                    return
                }
                if(q.parent_data.category === 'HEATING'){
                    const toeditheating = state.heating.filter(heat => {
                        return heat.id === q.id
                    })
                    toeditheating[0].volt_amp = q.volt_amp
                    return
                }
                if(q.parent_data.category === 'OTHERS'){
                    const toeditothers = state.others.filter(other => {
                        return other.id === q.id
                    })
                    toeditothers[0].volt_amp = q.volt_amp
                    return
                }
            })
            commit('addvoltamp', addvoltamp)
            // reset all boolean first
            commit('setclearall', false)
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
            commit('setclearall', false)
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
            commit('setclearall', false)
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
                qcb.line = qcb.isedited === 1 ? qcb.line : findvalue[0].line
                qcb.ground = qcb.isedited === 1 ? qcb.line : findvalue[0].load_schedule_ground_wire
                qcb.conduit = qcb.isedited === 1 ? qcb.conduit : findvalue[0].conduit
                qcb.resisteance = qcb.isedited === 1 ? qcb.resisteance : findvalue[0].resistance
            })
            commit('settwolinewire', wire2lines)
            // reset all boolean first
            commit('setclearall', false)
            // set neede boolean value
            commit('setistwolinewire', true)
        },
        setprevdatalinetwowire({commit}, payload){
            commit('setprevdatalinetwowire', payload)
        },
        editlinewire({commit, state}, payload){
            const prev = state.prevdatalinetwowire
            console.log(prev)
            const getwire = state.wireconduit.find(q => q.id === payload)
            const topass = {
                id:             prev.id,
                line:           getwire.line,
                isedited:       1,
                ground:         getwire.load_schedule_ground_wire,
                conduit:        getwire.conduit,
                resisteance:    getwire.resistance,
                voltagedrop:    (2 * prev.current * prev.enterlength * prev.resisteance) / 305
            }
            commit('setnewlinewire', topass)
        },
        showgoundwire({commit}){
            // const ground = state.manualinputdata.map((item) => ({
            //     ...item,
            //     cctocalculate: item.frominputpreset === 1 ? (item.current * item.multiplier).toFixed(2) : (item.current * 1).toFixed(2)
            // }))
            // let findvalue = 0
            // ground.forEach(qcb => {
            //     findvalue = state.wireconduit.filter(q => {
            //         return qcb.cctocalculate > q.minRange && qcb.cctocalculate <= q.maxRange
            //     })
            //     qcb.ground = findvalue[0].load_schedule_ground_wire
            // })
            commit('setclearall', false)
            // set needed boolean value
            commit('setisground', true)
        },
        showconduit({commit}){
            commit('setclearall', false)
            commit('setisconduit', true)
        },
        showlength({commit}){
            commit('setclearall', false)
            commit('setislength', true)
        },
        showvoltagedrop({commit, state}){
            const voltagedrop = state.manualinputdata.map((item) => ({
                ...item,
                voltagedrop: (2 * item.current * item.enterlength * item.resisteance) / 305
            }))
            commit('setvoltagedrop', voltagedrop)
            commit('setclearall', false)
            commit('setisvoltagedrop', true)
        },
        showvoltagepercent({commit, state}){
            const voltagepercent = state.manualinputdata.map((item) => ({
                ...item,
                voltpercent: (item.voltagedrop / 230) * 100
            }))
            commit('setvoltagepercent', voltagepercent)
            commit('setclearall', false)
            commit('setisvoltagepercent', true)
        }
    }
}