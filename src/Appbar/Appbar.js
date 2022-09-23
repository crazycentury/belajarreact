import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Appbar() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState({})
  // const [showInConsole, setShowInConsole] = useState(false)
  // const [showInDom, setShowInDom] = useState(false)
  const [list, setList] = useState([
    {
      name: "Luna",
      address: "Jalan Agung",
      hobby: "Mancing"
    }
  ]);

  const setSave = () => {
    let tempList = [...list];
    tempList.push(data);
    setList(tempList);
    handleClose();

  };


  return (
    <div>
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            MyApp
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>ADD USER</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Dialog open={open} onClose={handleClose} align="center">
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={(e) => setData({...data, name: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            type="address"
            fullWidth
            variant="standard"
            onChange={(e) => setData({...data, address: e.target.value})}
          />
          <TextField
            autoFocus
            margin="dense"
            id="hobby"
            label="Hobby"
            type="hobby"
            fullWidth
            variant="standard"
            onChange={(e) => setData({...data, hobby: e.target.value})}
          />
        </DialogContent>
        <DialogActions
        align="center">
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={
            setSave
          } >Save</Button>
        </DialogActions>
      </Dialog>

      <List>
      {
          list.map((el, index) => {
            return(
            <div key={index+1} style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', border: '2px solid black', marginBottom: '20px'}}>
              <div style={{display: 'flex', flexDirection: 'column', marginLeft: '40px'}}>
                <h3>Name: {el.name}</h3>
                <h3>Address: {el.address}</h3>
              </div>
              
              <h3 style={{marginRight: '40px'}}>Hobby: {el.hobby}</h3>
            </div>
            )
          })
        }

      </List>
        
      

    </div>
    
  );
}
