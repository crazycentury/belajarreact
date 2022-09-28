import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ListCard from './CardMenu';
import SideBar from './SideBar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

  const ItemSidebar = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')] :{
        display: 'block'
    }
  }));


const MainPage = () => {
  return (
    <div>
        <Box component={'div'}
        style={{
            width: '100%'
        }}>
            <Container maxWidth= 'lg'>
                <Grid container spacing={1} mt={3} mb={2}>
                <Grid xs={12} md={9} mb={2}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <ListCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ListCard/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ListCard/>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} md={3} mb={2}>
                    <ItemSidebar sx={{ minHeight: '100vh', display: { xs: 'none', md: 'flex' }}}>
                        <SideBar/>
                    </ItemSidebar>
                </Grid>
                </Grid>
            </Container>
        </Box>
        {/* <Typography
        variant='h3'
        component={'h1'}>
            Welcome Back
        </Typography>
        <Typography
        variant='dancing'
        component={'h3'}
        >
            barubajsdjafnsdjnfj ashdnfjansf
        </Typography> */}
      
    </div>
  )
}

export default MainPage
