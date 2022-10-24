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
    etc:''  
 },
 bt:{
    bt:false
 }
})
//------------------------------------------
export const getters = {
getLine(state){
    return state.line
 },
 getHair(state){
    return state.dataHair
 },
 getBt(state){
    return state.bt
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
    }
}