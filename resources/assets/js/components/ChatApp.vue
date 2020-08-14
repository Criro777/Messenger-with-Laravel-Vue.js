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
            handleIncoming(message) {
                if (this.selectedContact && message.from === this.selectedContact.id) {
                    return
                }
                alert(message.text)
                //this.updateUnreadCount(message.from_contact, false);
            },
        },
        computed: {
            ...mapGetters(['contacts', 'messages'])
        },

        mounted() {
            this.getContacts()
            Echo.private(`messages${this.user.id}`)
                .listen('NewMessage', (e) => {
                    console.log('handleIncoming', e.message)
                    this.handleIncoming(e.message);
                });
        },
        components: {ContactsList, Conversation}
    }
</script>
<style lang="scss" scoped>
    .chat-app {
        display: flex;
    }
</style>
