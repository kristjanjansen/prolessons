import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Table extends React.Component {
    state = { data: [] } // data:
    componentDidMount() { // mounted()
        axios.get('./data.json').then(res => this.setState({data: res.data}))
    }
    render() {
        const { data } = this.state
        // See rida on JSX
        return <div>{ JSON.stringify(data) }</div>
    }
}

ReactDOM.render(
  <Table />,
  document.querySelector('#app')
)





//const Table = ({ row } }) =>
//    <span>{ message }</span>















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
