export const state = () => ({
 line: {
    pictureUrl: null,
    displayName: null,
    userId:null,
    getDecodedIDToken:null
 }
})
export const getters = {
getLine(state){
    return state.line
 }
}
export const mutations = {
    SET_LINE(state,data){
        state.line = {
            ...state.line,
            ...data
        }

    }
}
export const actions = {
    setLine({ commit},data){
        commit('SET_LINE',data)
    }
}