import Col from './Col.js'

export default row => `
    <tr>
        ${Object.values(row).map(Col).join('')}
    </tr>
`