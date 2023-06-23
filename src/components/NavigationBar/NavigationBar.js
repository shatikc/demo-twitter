import React from 'react';
import './NavigationBar.css';
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/twitterLogo.png';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import SearchOutlined  from '@material-ui/icons/SearchOutlined';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <ul>
        <Box display="flex" flexDirection="column" gap={2}>
          <Avatar 
                  className='logo-avatar' 
                  sx={{ bgcolor: 'common.white', width: 56, height: 56 }}
                  href="/">
            <img className="logo-avatar-img" src={logo} alt="Logo"/>
          </Avatar>
          <Button 
                   className='nav-button'
                   size='large'
                   variant="text" 
                   sx={{ borderRadius: 28, bgcolor: 'transparent', color: 'black', textTransform: 'capitalize',
                   fontSize: 'large',fontWeight: 'bold', '&:hover': { bgcolor: 'rgba(240, 240, 240)'}}}
                   startIcon={<SearchOutlined className='searchIcon'/>}>
            Explore
          </Button>
          <Button 
                  className='nav-button'
                  size='large' 
                  variant="text" 
                  sx={{ borderRadius: 28, bgcolor: 'transparent', color: 'black', textTransform: 'capitalize',
                        fontSize: 'large', '&:hover': { bgcolor: 'rgba(240, 240, 240)'}}} 
                  startIcon={<SettingsOutlined />}>
            Settings
          </Button>
        </Box>
      </ul>
    </div>
  );
}

export default NavigationBar;