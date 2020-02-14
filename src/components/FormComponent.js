import React from 'react';

const FormComponent =(props)=>{

return(
<div>
<p>Output : {props.value}</p>
<form onSubmit={props.handleSubmit}>
<input type="text"
value={props.value}
onChange={props.handleInputChange}/>
<input type="submit" value="Submit" />
</form>
</div>
)
}

export default FormComponent;