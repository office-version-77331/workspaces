import { useState } from 'react'

import './App.css'
import Cart from './components/Cart';
import SiblingComp from './components/SiblingComp';

function App() {
  const [name, setName] = useState();

  return (
    <>
      <Cart name={name} setName={setName}/> 
      <SiblingComp name={name} /> 

      <p>change in parent component : {name} </p>
    </>
  )
}

export default App
