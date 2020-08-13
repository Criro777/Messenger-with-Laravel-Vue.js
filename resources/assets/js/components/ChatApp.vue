<template>
    <div class="chat-app">
        <ContactsList :contacts="contacts"/>
    </div>
</template>

<script>
    import ContactsList from './ContactsList';
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
                messages: [],
            };
        },
        methods: {
            ...mapActions(["getContacts"]),
        },
        computed: {
            ...mapGetters(['contacts'])
        },
        created() {
            this.getContacts()
        },
        components: {ContactsList}
    }
</script>
