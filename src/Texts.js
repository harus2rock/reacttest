import React from 'react'
import { Paper } from '@material-ui/core'
// import Watson from './Watson'

function Text(props){
    return(
        <Paper 
            key={props} 
            style={{padding:10,marginBottom:20,backgroundColor:'#eee'}}>
                {props}
        </Paper>
    )
}

const Texts=(props)=>{
    console.log(props.texts)
    const texts = props.texts.map((text)=>Text(text))
    // setTexts(texts.concat())

    return(
        <div style={{marginLeft:50, marginRight:50}}>
            <h2>Texts Log</h2>
            <div style={{margin:50}}>
                {texts}
                {/* <Watson></Watson> */}
            </div>
        </div>
    )
}

export default Texts