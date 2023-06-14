import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Register from './components/Register.jsx';
import LoggedIn from './components/LoggedIn.jsx';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Home = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const setAndStoreToken = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            {
                !token
                    ? (
                        <Register setToken={setAndStoreToken} />
                    ) : (
                        <LoggedIn setToken={setToken} />
                    )
            }
        </ThemeProvider>
    );
};



const app = document.getElementById('app');

const root = createRoot(app);

root.render(<Home />);
