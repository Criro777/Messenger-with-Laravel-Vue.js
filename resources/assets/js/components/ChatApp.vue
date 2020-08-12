<template>
    <div class="chat-app">
        <Conversation :contact="selectedContact" :messages="messages"/>
        <ContactsList :contacts="contacts"/>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                selectedContact: null,
                messages: [],
                contacts: [],
            };
        },
        methods: {
            ...mapActions(["getContacts"]),
        },
        mounted() {
            this.getContacts()
            this.contacts = this.$store.getters.contacts
        }
    }
</script>
