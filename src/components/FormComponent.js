import React from 'react';

const FormComponent =(props)=>{
  console.log(props)

return(
<div>
<p>Output : {props.output}</p>
<form onSubmit={props.handleSubmit}>
<input type="text"
value={props.value}
onChange={(e)=>props.handleInputChange(e.target.value)}/>
<input type="submit" value="Submit" />
</form>
</div>
)
}

export default FormComponent;