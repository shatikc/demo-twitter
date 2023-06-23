import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import './BottomMainPage.css';

const BottomMainPage = () =>{
    return(
        <div className="bottom-main">
            <Grid container spacing={1}>
                <Grid item xs={9}>
                        <div className='titles-container'>
                            <h2 className="title-1">Don't miss what's happening</h2>
                            <h4 className='title-4'>People on twitter are the first to know.</h4>
                        </div>
                </Grid>
                <Grid item xs={3}>
                    <div className='bottom-button-box'>
                        <Button  variant='outlined' 
                                 sx={{ borderRadius: 28, textTransform: 'capitalize', fontWeight: 'bold',
                                       marginRight: '12px',height: '50%', borderColor: 'white',color: 'white',
                                       backgroundColor: 'rgba(29, 155, 240)'}}>
                                    Log in
                        </Button>
                        <Button  variant='outlined' 
                                 sx={{ borderRadius: 28, textTransform: 'capitalize', fontWeight: 'bold',
                                       height: '50%',borderColor: 'white',color: 'black',
                                       backgroundColor: 'white'}}>
                                    Sign up
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default BottomMainPage;