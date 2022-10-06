import React, {useContext}from 'react';
import AppBar from '@mui/material/AppBar';
import DialogInput from './DialogInput';
import SearchList from './SearchList';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { CommonContext } from '../App';


const Navbar = () => {
    const navigate = useNavigate();
    const { apps } = useContext(CommonContext);
  return (
    <div>
      <Box >
        <AppBar position="static">
          <Toolbar>
            {/* Contoh pake NavLink */}
            <NavLink to="/" >
                <Typography variant="h6" component="div" sx={{ marginLeft: '50px'}}>
                MyApp
                </Typography>
            </NavLink>

            <NavLink to="/about" end className={({ isActive }) => (isActive ? "selected-nav" : "")}>
                <Typography variant="h6" component="div" sx={{ marginLeft: '50px'}}>
                About
                </Typography>
            </NavLink>

            <NavLink to="/hobby" end className={({ isActive }) => (isActive ? "selected-nav" : "")}>
                <Typography variant="h6" component="div" sx={{ marginLeft: '50px'}}>
                Hobby
                </Typography>
            </NavLink>


            {/* Contoh kalo pake navigate */}

            {/* <Typography 
            variant="h6" 
            component="div" 
            sx={{ marginLeft: '50px'}}
            className={({ isActive }) => (isActive ? "selected-nav" : "")}
            onClick={() => navigate(`/`)}>
              MyApp
            </Typography>
            <Typography 
            variant="h6" 
            component="div" 
            sx={{ marginLeft: '50px'}}
            className={({ isActive }) => (isActive ? "selected-nav" : "")}
            onClick={() => navigate(`/about`)}
            >
              About
            </Typography>
            <Typography 
            variant="h6"
            component="div" 
            sx={{ marginLeft: '50px',
            }}
            
            onClick={() => navigate('/hobby')}
            >
              Hobby
            </Typography> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
