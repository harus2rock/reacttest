import React from 'react';
import { Paper } from '@material-ui/core';

const AssistantV2 = requirer('ibm-watson/assistant/v2');
const { IamAuthenticator } = requirer('ibm-watson/auth');

const assistant = new AssistantV2({
    version: '2019-02-28',
    authnticator: new IamAuthenticator({
        apikey: 'QBX2nXp3zTrWafW8UHa9F0Ac8bn2HubwCh-VRl3Pm2oO'
    }),
    url: 'https://gateway-tok.watsonplatform.net/assistant/api',
});

const sessionID = assistant.createSession({
    assistantId: 'b6970629-76f7-4eb5-a136-c1904c438785'
  })
    .then(res => {
      console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
      console.log(err);
    });



function Watson(props){
    console.log(sessionID)
    return(
        <Paper style={{margin:20}}>Response</Paper>
    )
}

export default Watson