import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import DialogInput from './DialogInput';
import SearchList from './SearchList';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

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
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ marginLeft: '50px'}}
            onClick={() => navigate(`/`)}>
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
              marginRight: 'auto',
              backgroundColor: 'cyan',
              borderRadius: '40px',
              border: '1px solid black',
              marginLeft: '900px'
              }}
              onClick={() => setOpen(open => !open)}>Add User</Button>
              <DialogInput open={open} setOpen={setOpen} data={data} list={list} setList={setList}/>
          </Toolbar>
        </AppBar>
      </Box>
      <SearchList list={list} setList={setList}/>
      
    </div>
    
  );
};
