import React, { useState } from 'react';
import Texts from './Texts'
import { Button } from '@material-ui/core';
import TextInput from '@material-ui/core/TextField'

const Parent=()=> {
    const [inputText, setInputText]=useState('')
    const [texts, setTexts]=useState([])

    return (
        <div style={{backgroundColor:"#fff",margin:30}}>
            <h1>Saving Texts</h1>

            <center>
            <TextInput 
                onChange={e=>{setInputText(e.target.value)}} 
                label="Input text" 
                value={inputText} 
                size=""
                onKeyDown={e=>{if(e.keyCode===13&&inputText!==''){setInputText('');setTexts(texts.concat(inputText))}}}>
            </TextInput>

            <Button 
                onClick={_=>{if(inputText!==''){setTexts(texts.concat(inputText));setInputText('')}}}>
                    Input
            </Button>
            </center>

            <Texts texts={texts}/>
        </div>
    )
}

export default Parent