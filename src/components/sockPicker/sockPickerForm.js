import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseSock } from '../../actions/sockPicker.js'

class SockPickerForm extends Component{
  state={
    construction: "Crew"
  }

  handleConstruction = (e) => {
    this.setState({
      construction: e.target.value
    }, () => this.props.chooseSock(this.state.construction) )

  }
  render(){
    return(
      <div className="sock-picker-form">
        <form>
          <label>Select Construction: {" "}</label>
          <select value={this.state.construction} onChange={this.handleConstruction}>
            <option value="Low-Cut">Low-Cut</option>
            <option value="Quarter-Crew">Quarter-Crew</option>
            <option value="Half-Crew">Half-Crew</option>
            <option value="Three-Quarter">Three-Quarter</option>
            <option value="Crew">Crew</option>
            <option value="Extended-Crew">Extended-Crew</option>
          </select>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    sockConstruction: state.sockConstruction,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    chooseSock: chooseSock,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SockPickerForm)
