const set = (state, key, value) => {
    state[key] = value
    render()
    return true
}

window.state = new Proxy({ value: 0, selected: 0 }, { set })

const Slider = () => `
    <div>
        <input
            type="range"
            value="${state.value}"
            onchange="state.value = this.value"
            step="0.01"
        />
    </div>
`

const Selector = values => `
    <div style="display: flex">
        ${values.map((value, index) => `
            <div
                style="
                    padding: 0.5rem;
                    border: 1px solid black;
                    cursor: pointer;
                    background: ${state.selected == index && 'yellow'};
                "
                onclick="state.selected = ${index}"
            >
            ${value}
            </div>
        `).join('')}
    </div>
`

const render = () => {
    document.querySelector('#app').innerHTML = `
        ${Slider()}
        <pre>Value: ${state.value}</pre>
        ${Selector(['One', 'Two'])}
    `
}

render()