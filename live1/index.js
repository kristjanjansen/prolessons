import Table from './Table.js'

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        document.querySelector('#app').innerHTML = Table(data)
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
