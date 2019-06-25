

import React, {Component} from 'react'

// Functional Class [stateless component which describes the UI]




class State extends Component{




constructor(){

super()

this.state ={

message : 'If you like our website click link button'

}

}

changeMessage()

{

this.setState({

message : 'Thanks for liking our website'

}) 

}

render(){

return(

<div>

<h1>{this.state.message}</h1>

<button onClick={()=> this.changeMessage()}>Like</button>

</div>);

}




}




export default State






