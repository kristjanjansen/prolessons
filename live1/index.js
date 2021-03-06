// React, VueJS, Angular > 1.4 -> components
// Android fragments, .NET Core components

import Table from './Table.js'

// fetch('./data.json')
//     .then(res => res.json())
//     .then(data => {
//         document.querySelector('#app').innerHTML = Table(data)
//     })

// axios.get('./data.json')
//     .then(res => {
//         document.querySelector('#app').innerHTML = Table(res.data)
//     })

// No top level await!
// const results = await Promise.all([1,2,3].map(id => axios.get(id + '.json')))

async function render() {
    const { data } = await axios.get('./data.json')
    document.querySelector('#app').innerHTML = Table(data)
}

render()

















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
