<template>
    <div class="chat-app">
        <Conversation :contact="selectedContact" :messages="messages"/>
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
               // messages: []
            };
        },
        methods: {
            ...mapActions(["getContacts", "getConversationFor"]),
            beginConversation(contact) {
                this.getConversationFor(contact.id)
               // this.messages = this.$store.getters.messages(contact.id)
                this.selectedContact = contact
                console.log(this.$store.getters.messages)
            }
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
