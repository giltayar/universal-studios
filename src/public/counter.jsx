const React = require('react')

module.exports = class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <button style={{ marginRight: 10 }} onClick={() => this.setState({ value: value - 1 }) }>-</button>
        <span>{value}</span>
        <button style={{ marginLeft: 10 }} onClick={() => this.setState({ value: value + 1 }) }>+</button>
      </div>
    )
  }
}