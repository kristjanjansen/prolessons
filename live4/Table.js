import Row from './Row.js'

export default data => `
    <table>
        ${data.map(Row).join('')}
    </table>
`