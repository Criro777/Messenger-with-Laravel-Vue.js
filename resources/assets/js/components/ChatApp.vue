<template>
    <div class="chat-app">
        <Conversation :contact="selectedContact" :messages="messages" @new="saveNewMessage"/>
        <ContactsList :contacts="contacts" @selected="beginConversation"/>
    </div>
</template>

<script>
    import ContactsList from './ContactsList';
    import Conversation from './Conversation';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                selectedContact: null,
            };
        },
        methods: {
            ...mapActions(["getContacts", "getConversationFor", "sendMessageTo"]),
            beginConversation(contact) {
                this.getConversationFor(contact.id)
                this.selectedContact = contact
            },
            saveNewMessage(text) {
                this.sendMessageTo({
                    contact_id: this.selectedContact.id,
                    text: text
                })
            },
        },
        computed: {
            ...mapGetters(['contacts', 'messages'])
        },
        created() {
            this.getContacts()
        },
        components: {ContactsList, Conversation}
    }
</script>
<style lang="scss" scoped>
    .chat-app {
        display: flex;
    }
</style>
