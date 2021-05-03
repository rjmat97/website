export const strict = false
export const state = () => ({
    background: 'white',
    color: 'white',
    urls: [],
    dialogVisible: false,
    imageNow: "",
    currentIndex: 0
})

export const mutations = {
    loadURLs:       (state)         =>  state.urls = require('./data/urls.json'),
    dialogVisible:  (state, data)   =>  state.dialogVisible = data,
    setImageNow:    (state, data)   =>  state.imageNow = data,
    setImageIndex:  (state, data)   =>  state.currentIndex = data,
    chnageImage:       (state)   =>  state.imageNow = state.urls[state.currentIndex]
}

export const actions = {
    loadURLs: ({commit}) => commit('loadURLs'),
    dialogVisible: ({commit}, data) => commit('dialogVisible', data),
    setImageNow:({state, commit}, data)    => {
        commit('setImageNow', data)
        commit('setImageIndex', state.urls.indexOf(data))
    },
    loadNext: ({state, commit}) =>  {
        commit('currentIndex', state.currentIndex+=1)
        commit('chnageImage')
    },
    loadPrev: ({state, commit}) =>  {
        commit('currentIndex', state.currentIndex-=1)
        commit('chnageImage')
    }
}

export const getters = {
    left: state => [...Array(state.urls.length).keys()]
        .filter(val => val%2 != 0).map(val => state.urls[val]),
    right:state => [...Array(state.urls.length).keys()]
        .filter(val => val%2 == 0).map(val => state.urls[val])
}