import React from "react";
import {connect } from 'react-redux';
import "./styles.css";
import FormComponent from "./components/FormComponent";
import { inputValue } from "./redux";

class App extends React.Component{
  
  handleInputChange=(e)=>{
  e.preventDefault();
  this.setState({value:e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form submited!");
  }
  render() {
  return (
    <div className="App">
      <FormComponent value={state.value} 
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleSubmit}/>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  console.log(state, "map");
  return {
    value:state
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  value: ()=>dispatch(inputValue())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);