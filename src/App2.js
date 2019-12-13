import React,{ useState} from 'react';
import Button from '@material-ui/core/Button';

const App2=()=> {
  const [greeting, setGreeting]=useState('おはよう')
  return(
    <div>
      <h1>{greeting}</h1>
      <Button onClick={_=>{setGreeting('こんばんは')}}>Click</Button>
    </div>
  )
}

export default App2
