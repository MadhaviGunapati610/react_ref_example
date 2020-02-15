import React from "react";


class ComponentRefs extends React.Component{
constructor(props){
  super(props);
  this.inputRef = React.createRef();
  this.handleInputFocus = this.handleInputFocus.bind(this);
  this.handleCurrentName = this.handleCurrentName.bind(this);
this.handleCheckbox= this.handleCheckbox.bind(this);
//this.handleShippingName = this.handleShippingName.bind(this);

  this.state={
    name:'',
    value:''
  }
}
handleInputFocus(){
this.inputRef.current.focus();
}

handleCurrentName(e){
  e.preventDefault();
  this.setState({name:e.target.value});
  console.log(this.state.name, "input 1");
  
}


handleCheckbox(e){
  let shippingName = document.getElementById('shippingName')
  shippingName.value=this.state.name;
  console.log(this.state.name);
}
// handleShippingName(){
//   this.setState({value:this.state.name})
// }

render(){
  return (
<div>
  <h2>Class Component with react ref</h2>
<p>When user click on the <strong>Input1</strong> focus will be shifted on to <strong>Input2</strong></p>
Input1:<input type="text" onClick={this.handleInputFocus}/><br/><br/>
Input2:<input type="text" ref={this.inputRef}/>
<hr/><hr/>

<h2>OnSelect the value of the input1 one should be pasted on input2.</h2>
Current Name: <input type="text" value={this.value} name={this.value} onChange={this.handleCurrentName}/><br/>
<input type="checkbox" onClick={this.handleCheckbox}/>
<strong>Check</strong> if the current and shipping name is same 
<br/>
Shipping Name: <input type="text" id="shippingName" name="name"/>
</div>
  )
}
}

export default ComponentRefs;