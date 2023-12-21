const state = () => ({
    articleList: [],
})
const mutations = {
    SET_ARTICLE_LIST(state, data) {
        state.articleList = data
    },
}

const actions = {}

export default {
    namespace: true,
    state,
    actions,
    mutations,
}
