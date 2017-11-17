import Row from './Row.js'

// export default data => `
//     <table>
//         ${data.map(Row).join('')}
//     </table>
// `

export default {
    props: ['data'],
    components: { Row },
    data: () => ({ activeRow: false }),
    template: `
        <table>
            <row
                v-for="(row, index) in data"
                :row="row"
                @click.native="activeRow = index"
                :style="{
                    background: activeRow == index && 'yellow'
                }"
            >
            </row>
        </table>
    `
}