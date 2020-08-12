export default {
    state: {
        contacts: []
    },

    mutations: {
        contacts(state, contacts) {
            state.contacts = contacts
        }
    },

    actions: {
        async getContacts(context) {
            await axios.get('/contacts')
                .then((response) => {
                    context.commit('contacts', response.data);
                })
        }

    },

    getters: {
        contacts(state) {
            return state.contacts
        }
    }
}
