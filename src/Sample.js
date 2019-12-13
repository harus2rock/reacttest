import React,{ useState} from 'react';
import Button from '@material-ui/core/Button';
import Sample2 from './Sample2'

const Sample=()=> {
  const [greeting, setGreeting]=useState('おはよう')
  return(
    <div>
      <h1 style={{color:"red",backgroundColor:"#555"}}>{greeting}</h1>
      <Button onClick={_=>{setGreeting(greeting=='おはよう'?"こんばんは":"おはよう")}}>Click</Button>
      <Sample2/>
    </div>
  )
}

export default Sample