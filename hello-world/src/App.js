import React from 'react';

//import logo from './logo.svg';

import './App.css';

import LoginComponent from './component/Login' // export default

import ButtonComponent from './component/Button'

import {Hello} from './component/withoutjsx' // export a const must enclosed with {}

import Welcome, {Greet} from './component/props'

import State from './component/State'

import Counter from './component/counter'

//import Welcome from './component/props'

function App() {

return (

<div>

<Counter />

<LoginComponent /> 

<ButtonComponent />

<Hello />

<Welcome name = "Jake" />

<Greet name="John"/>

<State/>

</div>

);

}




export default App;