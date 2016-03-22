const React = require('react')
const {connect} = require('react-redux')

class Counter extends React.Component {
  render() {
    const {value} = this.props;

    return (
      <div>
        <button style={{ marginRight: 10 }} onClick={() => this.props.dispatch({ type: 'DEC' }) }>-</button>
        <span>{value}</span>
        <button style={{ marginLeft: 10 }} onClick={() => this.props.dispatch({ type: 'INC' }) }>+</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state
  };
}

module.exports = connect(mapStateToProps)(Counter);
