//import Table from './Table.js'

const Tabl = {
    props: ['persons'],
    template: `
        <div>
            {{ persons }}
        </div>
    `
}

new Vue({
    el: '#app',
    components: { Tabl },
    data: () => ({ persons: [] }),
    mounted() {
        axios.get('./data.json').then(res => this.persons = res.data)
    },
    template: `
        <div>
            <tabl :persons="persons"></tabl>
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
