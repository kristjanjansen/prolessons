// import Col from './Col.js'
//
// export default row => `
//     <tr>
//         ${Object.values(row).map(Col).join('')}
//     </tr>
// `

export default {
    props: ['row'],
    template: `
        <tr>
            <td
                v-for="col in row"
            >
                {{ col }}
            </td>
        </tr>
    `
}