import React from 'react'
import { Router, useLocation } from 'react-router-dom';
import { 
    Button,

 } from '@mui/material';

const View = () => {
    const state = useLocation();
    console.log(state)
  return (
    <div>
        <h1>INI view</h1>
        <h3>Name: {state.state.data.name}</h3>
        <h3>Address: {state.state.data.address}</h3>          
        <h3>Hobby: {state.state.data.hobby}</h3>
          

    </div>
        
    
  )
}

export default View
