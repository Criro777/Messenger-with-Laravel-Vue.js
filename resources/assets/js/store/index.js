export default {
    state: {
        contacts: [],
        conversations: [],
    },

    mutations: {
        contacts(state, contacts) {
            state.contacts = contacts
        },
        conversationFor(state, conversation) {
            state.conversations = conversation
        },
    },

    actions: {
        async getContacts(context) {
            await axios.get('/contacts')
                .then((response) => {
                    context.commit('contacts', response.data);
                })
        },
        async getConversationFor(context, id) {
            await axios.get(`/conversation/${id}`)
                .then((response) => {
                    context.commit('conversationFor', response.data);
                })
        }

    },

    getters: {
        contacts(state) {
            return state.contacts
        },
        messages(state) {
            return state.conversations
        }
    }
}
