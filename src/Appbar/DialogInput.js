import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

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
            console.log(tempList)
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

export default DialogInput
