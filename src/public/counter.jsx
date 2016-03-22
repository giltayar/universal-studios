const React = require('react')
const {connect} = require('react-redux')

const doSave = (value) => {
    return fetch('/save?value=' + value, {
        method: 'POST'
    })
}

class Counter extends React.Component {
  render() {
    const {value ,doRefresh, dispatch} = this.props;
    return (
      <div>
        <button style={{ marginRight: 10 }} onClick={() => dispatch({ type: 'DEC' }) }>-</button>
        <span>{value}</span>
        <button style={{ marginLeft: 10 }} onClick={() => dispatch({ type: 'INC' }) }>+</button>
        <button style={{marginLeft: 10}} onClick={() => doSave(value)}>Save</button>
        <button style={{marginLeft: 10}} onClick={() => dispatch(doRefresh())}>Refresh</button>
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
