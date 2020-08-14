export default {
    state: {
        contacts: [],
        conversation: []
    },

    mutations: {
        contacts(state, contacts) {
            state.contacts = contacts
        },
        conversationFor(state, conversation) {
            state.conversation = conversation
        },
        messageToConversation(state, message) {
            state.conversation.push(message)
        }
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
        },
        async sendMessageTo(context, data) {
            await axios.post('/conversation/send', data).then((response) => {
                context.commit('messageToConversation', response.data);
            })
        }

    },

    getters: {
        contacts(state) {
            return state.contacts
        },
        messages(state) {
            return state.conversation
        }
    }
}
