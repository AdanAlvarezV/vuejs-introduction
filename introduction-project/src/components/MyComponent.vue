<template>
    <div class="class my-component">
        <h1 v-bind:class="{ highlighted: isHighlighted }">{{ title }} </h1>
        <h1 v-if="isVisible">{{ message }} </h1>
        <button v-on:click="$event => toggleVisibility()">Toggle Visibility</button>
        <button v-on:click="sayHello">Say hello</button>
        <button @click="sayHello">Say hello</button>
        <button @click="toggleHighlight">change Highlight</button>
        <input v-model="message">

        <ul>
            <li v-for="item in list" :key="item.id"> {{ item.text }} </li>
        </ul>
        <div>
            <h1> {{ message }} </h1>
            <button @click="changeMessage">Change Message</button>
        </div>
    </div>
</template>

<script>
//import {mapState, mapMutations} from 'vuex';
export default {
    name:'MyComponent',/*
    computed: {
        ...mapState(['message2'])
    },*/
    data(){
        return {
            message: "Hello world",
            isVisible: true,
            title: 'TITLE',
            isHighlighted:false,
            list: [
                {id:1, text:'First item'},
                {id:2, text:'Second item'},
                {id:3, text:'Third item'}
            ]
        }
    },
    methods: {/*
        ...mapMutations(['setMessage2']),
        changeMessage(){
            this.setMessage2('Hello Everyone!');
        },*/
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        sayHello(){
            alert('hello')
        },
        toggleHighlight(){
            this.isHighlighted = !this.isHighlighted;
        }
    }
}
</script>

<style scoped>
    .highlighted {
        color: gold;
    }
</style>