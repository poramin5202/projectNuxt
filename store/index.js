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
    date:null
 }
})
//------------------------------------------
export const getters = {
getLine(state){
    return state.line
 },
 getHair(state){
    return state.dataHair
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
    }
}
//------------------------------------------
export const actions = {
    setLine({ commit},data){
        commit('SET_LINE',data)
    },
    setHair({ commit},data){
        commit('SET_DATAHAIR',data)
    }
}