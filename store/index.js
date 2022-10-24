//------------------------------------------
export const state = () => ({
 line: {
    pictureUrl: null,
    displayName: null,
    userId:null,
    //email:null
 },
 dataHair: {
    name:null,
    phoneNumber:null,
    date:null,
    perple:null,
    time:null,
    etc:null  
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
    setHair({ commit},data){
        commit('SET_DATAHAIR',data)
    },
    setbt({ commit},data){
        commit('SET_BT',data)
    }
}