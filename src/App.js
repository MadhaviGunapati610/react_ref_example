import React from "react";
import "./styles.css";
import ComponentRefs from "./components/ComponentRefs";
 
class App extends React.Component{
constructor(props){
super(props);

this.state={
  value:'',
  output:''
}
}

handleInput=(e)=>{
e.preventDefault();
this.setState({value:e.target.value});
}
handleSubmit=(e)=>{
  e.preventDefault();
this.setState({output:this.state.value});
}
  render () {
  return (
    <div className="App">
<p>Output: {this.state.output}</p>
      <form onSubmit={this.handleSubmit}>
<input type="text" value={this.value} onChange={this.handleInput}/>
<input type="submit" value="submit"/>
      </form>
      <hr/><hr/>
      <ComponentRefs/>
    </div>
  );
}
}
export default App;