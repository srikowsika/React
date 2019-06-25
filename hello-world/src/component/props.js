

import React, {Component} from 'react'




export default class Welcome extends Component{




render(){




return(

<div>

Welcome {this.props.name}

</div>

)

}

}




export const Greet = props => {

return ( 

<div>

HELLO {props.name}

</div>

)

}





