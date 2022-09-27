import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import './appbar.css';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';


function GetList({data, index, list, setList}){
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

const DialogInput = ({open, setOpen, data, list, setList, edit, index}) => {
    // const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [obj, setObj] = useState(data);
    // const [data, setData] = useState({})

    // const handleClickOpen = () => {
    // setOpen(true);
    // };

    const handleClose = () => {
      setOpen(false);
    };


    const setSave = () => {
      if (obj.name == "" || obj.address == "" || obj.hobby == "" ) {
        alert("Field Can't be Empty");
        return
      }
      handleClose();
        if (edit) {
            let tempList = [...list]
            tempList[index] = obj
            setList(tempList)
        }
        else {
            let tempList = [...list]
            tempList.push(obj)
            setList(tempList)
        }        

        setObj({
            name: "",
            address: "",
            hobby: ""
        })

    };

    useEffect(() => {
      console.log(list)
      console.log(obj)
  }, [list, obj])

  return(
    <Dialog 
    open={open} 
    onClose={handleClose} 
    align="center">
    <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="name"
          fullWidth
          variant="standard"
          value={obj.name}
          onChange={(e) => setObj({...obj, name: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            value={obj.address}
            onChange={(e) => setObj({...obj, address: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="hobby"
            label="Hobby"
            type="text"
            fullWidth
            variant="standard"
            value={obj.hobby}
            onChange={(e) => setObj({...obj, hobby: e.target.value})}
          />
          
        </DialogContent>
        <DialogActions
        align="center">
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={() => {setSave()}} >Save</Button>
        </DialogActions>
      </Dialog>
  );
}


export default function Appbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [list, setList] = useState([])
  const [title, setTitle] = useState("")
  const [data, setData] = useState([
    {
      name: "",
      address: "",
      hobby: ""
    }
  ]);

  return (
    <div>
      <Box >
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between'}}>
            <Typography variant="h6" component="div" sx={{ marginLeft: '50px'}}>
              MyApp
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginLeft: '50px'}}
            onClick={() => navigate(`/about`)}
            >
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginLeft: '50px'}}
            onClick={() => navigate('/hobby')}
            >
              Hobby
            </Typography>
            <Button color="inherit" 
            sx={{ 
              width: '130px',
              height: '45px',
              marginRight: '50px',
              backgroundColor: 'cyan',
              borderRadius: '40px',
              border: '1px solid black',}}
              onClick={() => setOpen(open => !open)}>Add User</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div 
      style={{
        width: '100%',
        height: '100px',
        marginLeft: '20px',
        borderRadius: '30px',
      }}>
      <TextField
        sx={{
          marginLeft: '20px',
          marginTop: '20px',
          width: '250px',
          borderRadius: '30px',
          flexGrow: 0,
          alignItems: 'left',


        }}
          id="filled-search"
          label="Search"
          type="search"
          alignSelft="left"
          value={title} onChange={e => setTitle(e.target.value)}

        />

      </div>
      
      
      <DialogInput open={open} setOpen={setOpen} data={data} list={list} setList={setList}/>

      <List>
      {
          list.map((el, index) => {
            if (el.name.includes(title) || el.address.includes(title) || el.hobby.includes(title)) return <GetList list={list} setList={setList} index={index} key={index} data={el}/>
            
          })
        }

      </List>
        
      

    </div>
    
  );
}
