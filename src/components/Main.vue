<template>
    <div>
        <span class="title">{{ title }}</span>
        <q-btn @click="testFunction" label="Do something"></q-btn>
        <q-icon name="alarm"></q-icon>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Test'
            }
        },
        methods: {
            testFunction() {
                console.log('test', new Date());
            }
        }
    }
</script>

<style lang="scss">
    $main-color: blue;

    .title { 
        font-weight: bold; 
        font-size: 20pt; 
        color: $main-color;
    }
</style>