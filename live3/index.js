import Tabl from './Tabl.js'

new Vue({
    el: '#app',
    components: { Tabl },
    data: () => ({ data: [] }), // Reacti state
    mounted() {
        axios.get('./data.json').then(res => this.data = res.data)
    },
    template: `
        <div>
            <tabl :data="data"></tabl>
        </div>
    `
})














// Collecton = array of objects

// var
// const | let




// const Table = function(data) {
//     return '<div>' + data[0].name + '</div>'
// }

// const Table = (data) => {
//     return '<div>' + data[0].name + '</div>'
// }

// const Table = data => {
//     return '<div>' + data[0].name + '</div>'
// }

/*
    <table>
    foreach(row in data) {
        <tr>
        foreach(col in row) {
            <td>col</td>
        }
        </tr>
    }
    </table
*/

// Browser:
// './' or smth needs to be there
//
// const Col = col => `
//     <td>
//         ${col}
//     </td>
// `
// export Col
//
// import { Col } from './Col.js'




// const $ = [].slice.call(document.querySelectorAll('#app'))
