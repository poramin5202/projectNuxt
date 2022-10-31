//------------------------------------------
export const state = () => ({
 line: {
    pictureUrl: '',
    displayName: '',
    userId:'',
    
 },
 dataHair: {
    name:'',
    phoneNumber:'',
    date:'',
    perple:'',
    time:'',
    etc:'' ,
    email:'' 
 },
 bt:{
    bt:false
 },
 time:{
    dateEnd: '',
    timeEnd: '',
    minute:'',
    min:'',
    hour:'',
    hor:'',
    summinute:''
 },
 cancel:{
    pictureUrl: '',
    displayName: '',
    userId:'',
    dateEnd: '',
    timeEnd: '',
    minute:'',
    min:'',
    hour:'',
    hor:'',
    summinute:'',
    name:'',
    phoneNumber:'',
    date:'',
    perple:'',
    time:'',
    etc:''  
 },
 check:{
    b1:null,
    b2:null,
    b3:null,
    b4:null,
    b5:null,
    b6:null,
    b7:null,
    b8:null,
    b9:null,
    b10:null,
    t1:null,
    t2:null,
    t3:null,
    t4:null,
    t5:null,
    t6:null,
    t7:null,
    t8:null,
    t9:null,
    t10:null,
    t11:null,
    t12:null,
    t13:null,
    t14:null,
    t15:null,
    t16:null,
 },
 stopday:{
    Sun:null,
    Mon:null,
    Tue:null,
    Wed:null,
    Thu:null,
    Fri:null,
    Sat:null,
    d1:null,d2:null,
    d3:null,d4:null,
    d5:null,d6:null,
    d7:null,d8:null,

 }
})
//------------------------------------------
export const getters = {
getLine(state){
    return state.line
 },
 getDatahair(state){
    return state.dataHair
 },
 getBt(state){
    return state.bt
 },
 getTime(state){
    return state.time
 },
 getCancel(state){
    return state.cancel
 },
 getEmail(state){
    return state.email
 },
 getCheck(state){
    return state.check
 },
 getStopday(state){
    return state.stopday
 }
}
//------------------------------------------
export const mutations = {
    SET_LINE(state,data){
        state.line = {
            ...state.line,
            ...data
        }
    },
    SET_DATAHAIR(state,data){
        state.dataHair = {
            ...state.dataHair,
            ...data
        }
    },
    SET_BT(state,data){
        state.bt = {
            ...state.bt,
            ...data
        }
    },
    SET_TIME(state,data){
        state.time = {
            ...state.time,
            ...data
        }
    },
    SET_CANCEL(state,data){
        state.cancel = {
            ...state.cancel,
            ...data
        }
    },
    SET_EMAIL(state,data){
        state.email = {
            ...state.email,
            ...data
        }
    },
    SET_CHECK(state,data){
        state.check = {
            ...state.check,
            ...data
        }
    } ,
    SET_STOPDAY(state,data){
        state.stopday = {
            ...state.stopday,
            ...data
        }
    }
}
//------------------------------------------
export const actions = {
    setLine({ commit},data){
        commit('SET_LINE',data)
    },
    setDatahair({ commit},data){
        commit('SET_DATAHAIR',data)
    },
    setbt({ commit},data){
        commit('SET_BT',data)
    },
    setTime({ commit},data){
        commit('SET_TIME',data)
    },
    setCancel({ commit},data){
        commit('SET_CANCEL',data)
    },
    setEmail({ commit},data){
        commit('SET_EMAIL',data)
    },
    setCheck({ commit},data){
        commit('SET_CHECK',data)
    },
    setStopday({ commit},data){
        commit('SET_STOPDAY',data)
    }
}