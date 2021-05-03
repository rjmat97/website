export const strict = false
export const state = () => ({
    background: 'white',
    color: 'white',
    urls: [],
})

export const mutations = {
    loadURLs: (state) => state.urls = require('./data/urls.json'),
}

export const actions = {
    loadURLs: ({commit}) => commit('loadURLs'),
}

export const getters = {
    left: state => [...Array(state.urls.length).keys()]
        .filter(val => val%2 != 0).map(val => state.urls[val]),
    right:state => [...Array(state.urls.length).keys()]
        .filter(val => val%2 == 0).map(val => state.urls[val])
}