const data = [
    {"name": "Jim", "age": "32"},
    {"name": "Jill", "age": "42"}
]

const HeadingRow = row => `
    <tr>${Object.keys(row).map(HeadingCol).join('')}</tr>
`

const HeadingCol = col => `
    <td>${col}</td>
`

const Row = row => `
    <tr>${Object.values(row).map(Col).join('')}</tr>
`

const Col = col => `
    <td>${col}</td>
`

const Table = data => `
    <table>
        ${HeadingRow(data[0])}
        ${data.map(Row).join('')}
    </table>
`
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        document.querySelector('#app').innerHTML = Table(data)
    })
