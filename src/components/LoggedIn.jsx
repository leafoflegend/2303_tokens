import React from 'react';
import { Typography, Button } from '@mui/material';

const LoggedIn = ({ setToken }) => {
    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <div>
            <Typography variant={'h3'} style={{color: 'white'}}>
                You are logged in!
            </Typography>
            <Button
                variant={'contained'}
                onClick={logout}
            >
                Logout
            </Button>
        </div>
    );
}

export default LoggedIn;
