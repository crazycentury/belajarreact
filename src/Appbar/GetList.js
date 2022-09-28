import React, {useEffect, useState} from 'react';
import DialogInput from './DialogInput';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

const GetList = ({data, index, list, setList}) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = useState(false)
    return(
      <div key={index+1} 
              style={{ 
                padding: '20px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                border: '2px solid black', 
                marginBottom: '20px'
                }}>
  
                <div 
                style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  marginLeft: '40px'
                  }}>
                  <h3>Name: {data.name}</h3>
                  <h3>Address: {data.address}</h3>
                </div>
                
                <div 
                style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  marginLeft: '40px'
                  }}>
                  <h3 style={{marginRight: '40px'}}>Hobby: {data.hobby}</h3>
                  <Button
                  sx={{ 
                    width: '80px',
                    height: '40px',
                    marginRight: '50px',
                    color: 'white',
                    backgroundColor: 'cyan',
                    borderRadius: '40px',
                    }}
                  onClick={() => {setOpen(true); setEdit(true)}}
                  >edit</Button>
                  <DialogInput list={list} setList={setList} open={open} data={data} setOpen={setOpen} index={index} edit={edit}/>
                  <Button
                  sx={{ 
                    width: '80px',
                    height: '40px',
                    marginRight: '50px',
                    marginTop: '10px',
                    color: 'white',
                    backgroundColor: 'cyan',
                    borderRadius: '40px',
                    }}
                  onClick={() => navigate(`/view/${index+1}`, {state: {data}})} >view</Button>
                </div>
                
              </div>
  
    );
  };

export default GetList
