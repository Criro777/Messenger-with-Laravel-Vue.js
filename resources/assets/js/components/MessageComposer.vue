<template>
    <div class="composer">
        <textarea :disabled="!contact" v-model="message" @keydown.enter="send" placeholder="Type message here and press Enter..."></textarea>
    </div>
</template>

<script>
    export default {
        props: {
            contact: {
                type: Object,
                default: null
            }
        },
        data() {
            return {
                message: ''
            }
        },
        methods: {
            send(e) {
                e.preventDefault()
                if(this.message === '') {
                    return
                }

                this.$emit('send', this.message)
                this.message = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .composer textarea {
        width: 96%;
        margin: 10px;
        resize: none;
        border-radius: 3px;
        border: 1px solid lightgray;
        padding: 6px;
    }
</style>
