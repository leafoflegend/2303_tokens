import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress } from '@mui/material';
import registerUser from '../requests/register.js';

const Register = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!username || !password) {
            return;
        }

        setLoading(true);

        try {
            const result = await registerUser({
                username,
                password,
            });

            if (!result.success) {
                throw new Error(result.error.message);
            }

            setUsername('');
            setPassword('');
            setToken(result.data.token);
        } catch (e) {
            if (e.message) {
                alert(e.message);
            } else {
                alert('Failed to register user.');
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: 'solid 1px gray',
                borderRadius: '2em',
                padding: '1em',
            }}
        >
            <Typography variant={'h5'} style={{ color: 'white' }}>Register an Account</Typography>
            <div style={{ height: '10px' }}></div>
            <TextField
                placeholder={'Username'}
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <div style={{ height: '10px' }}></div>
            <TextField
                placeholder={'Password'}
                value={password}
                type={'password'}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <div style={{ height: '10px' }}></div>
            {
                !loading
                    ? (
                        <Button
                            variant={'contained'}
                            onClick={handleSubmit}
                        >
                            Register
                        </Button>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1em',
                            }}
                        >
                            <CircularProgress />
                        </div>
                    )
            }
        </div>
    );
};

export default Register;
