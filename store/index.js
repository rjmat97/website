export const strict = false
export const state = () => ({
    background: 'white',
    color: 'white',
    urls: [],
    dialogVisible: false,
    imageNow: "",
    currentIndex: 0,
    leftArrState: true,
    rightArrState: true
})

export const mutations = {
    loadURLs:       (state)         =>  state.urls = require('./data/urls.json'),
    dialogVisible:  (state, data)   =>  state.dialogVisible = data,
    setImageNow:    (state, data)   =>  state.imageNow = data,              //current url
    setImageIndex:  (state, data)   =>  state.currentIndex = data,          //current index
    chnageImage:    (state)         =>  state.imageNow = state.urls[state.currentIndex],
    currentIndex:   (state, data)   =>  state.currentIndex = data,
    toggleLeftArrState: (state, data) =>  state.leftArrState  = data,
    toggleRightArrState: (state, data)=>  state.rightArrState = data
}

export const actions = {
    loadURLs: ({commit}) => commit('loadURLs'),
    dialogVisible: ({commit}, data) => commit('dialogVisible', data),
    setImageNow:({state, commit}, data)    => {
        commit('setImageNow', data)
        commit('setImageIndex', state.urls.indexOf(data))
    },
    loadNext: ({state, commit}) =>  {
        let curVal = state.currentIndex+=1
        commit('currentIndex', state.currentIndex+=1)
        if(curVal == state.urls.length){
            console.log("deactivating right")
            commit('toggleRightArrState', false)}
        if(curVal > 0) commit('toggleLeftArrState', true)
        commit('chnageImage')
    },
    loadPrev: ({state, commit}) =>  {
        let curVal = state.currentIndex-=1
        commit('currentIndex', curVal)
        if(curVal == 0) {
            console.log("deactivating left")
            commit('toggleLeftArrState', false)}
        if(curVal < state.urls.length) commit('toggleRightArrState', true)
        commit('chnageImage')
    }
}

export const getters = {
    left: state =>{ 
        let vals = [...Array(state.urls.length).keys()]
        vals = vals.filter(val => val%2 != 0)

        return vals.map(val => state.urls[val])
    },
    right:state => {
        return [...Array(state.urls.length).keys()]
        .filter(val => val%2 == 0).map(val => state.urls[val])
    }
}