import Vue from 'vue/dist/vue.esm.js'
import World from './World'

new Vue({
    components: { World },
    el: '#app',
    template: `
        <div>
            Hello
            <World message="World" />
        </div>
    `
})