import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { selectHistory, clearHistory } from '../actions';

const addStyle = {
  add_ul:{
    height:'13em',
    overflowY: 'scroll'
  },
  add_li :{
    cursor:'pointer'
  }
}

class History extends React.Component {
  render(){
    return(
    <div>
      <h4><i className="fa fa-clock" />History Operator</h4>
      <ul className="list-group" style={addStyle.add_ul}>
        {this.props.history.map((history,index) => {
          console.log(history);
          return (
          <li key={index} className="list-group-item list-group-item-action" style={addStyle.add_li} onClick={() => this.props.selectHistory(index)}>{`${history} = ${eval(history)}`}</li>
          )
        })}
      </ul>
      <div className="mt-3 text-right">
        <button className="btn btn-danger" onClick={() => this.props.clearHistory() }><i className="fa fa-trash"></i> Clear</button>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history : state.calculator.history
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({ selectHistory, clearHistory }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(History);