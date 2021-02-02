import React from 'react'
import './App.css' 
import styled, { keyframes } from 'styled-components'

function Idea(props){
    return(
        <IdeaBox>
            <h2>
                Here's idea number {props.ideanumber}: {props.ideatext}
            </h2>
        </IdeaBox>
    )
}

export default Idea



const IdeaBox = styled.div`
    height: 400px;
    width: 400px;
    border-width: 2px;
    border-style: solid;
    margin: 10px;
    margin-bottom: 50px;
    padding: 20px;
    background: #d42295;
    border-radius: 20px;
    transform: rotate(-3deg);
`;