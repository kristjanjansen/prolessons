import Vue from 'vue/dist/vue.esm.js'
import World from './World'

new Vue({
    el: '#app',
    data: () => ({ messages: ['World', 'Moon'] }),
    render() {
        const { messages } = this
        return (
            <div>
                Hello
                {messages.map(message => <World message={message} />) }
            </div>
        )
    }
})