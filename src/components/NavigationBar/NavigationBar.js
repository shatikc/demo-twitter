import React from 'react';
import './NavigationBar.css';
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/twitterLogo.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <ul>
        <Box display="flex" flexDirection="column" gap={2}>
          <Avatar className='logo-avatar' sx={{ bgcolor: 'common.white', width: 56, height: 56 }} href="/">
            <img className="logo-avatar-img" src={logo} alt="Logo"/>
          </Avatar>
          <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
            Explore
          </Button>
          <Button variant="contained" color="primary" sx={{ borderRadius: 28 }}>
            Settings
          </Button>
        </Box>
      </ul>
    </div>
  );
}

export default NavigationBar;