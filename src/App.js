import React from "react";
import {connect } from 'react-redux';
import "./styles.css";
import FormComponent from "./components/FormComponent";
import { inputValue } from "./redux";

class App extends React.Component{
  state={
    output: ""
  }
  // handleInputChange=(e)=>{
  // e.preventDefault();
  // this.setState({value:e.target.value})
  // }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form submited!");
    console.log(this.props.value);
    this.setState({...this.state.output, output:this.props.updateValue})
  }
  render() {
  return (
    <div className="App">
      <FormComponent
      output = {this.state.output}
      handleInputChange={(value)=>this.props.handleInputChange(value)}
      handleSubmit={this.handleSubmit}/>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  console.log(state, "map");
  return {
    updateValue:state.value
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  handleInputChange: (value)=>dispatch(inputValue(value))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);