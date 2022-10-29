//------------------------------------------
export const state = () => ({
 line: {
    pictureUrl: '',
    displayName: '',
    userId:'',
    //email:null
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
 email:{
    email:''
 },
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
    }
}