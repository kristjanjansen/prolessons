import React from 'react'

export default class World extends React.Component {
    render() {
        const { message } = this.props
        return <div>Hello { message }</div>
    }
}