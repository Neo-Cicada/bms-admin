import {Grid, CardActions,Button, TextField, Typography} from '@mui/material';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
import '@fontsource/roboto/500.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
   

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
       
            
                <section>
                    <div>
                        
                        <form>
                            <Typography
                                align='center'
                                variant='h6'
                            >
                                Admin login
                            </Typography>
                            <div>
                                <TextField
                                    sx={{p: 1}}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    label="Email address"
                                    variant="outlined"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <TextField
                                    sx={{p: 1}}
                                    variant="outlined"
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        
                            <CardActions>
                                <Button
                                    variant="outlined"
                                    onClick={onLogin}
                                >
                                    Login
                                </Button>
                            </CardActions>
                        </form>
                        
                    </div>
                </section>
            
               
            </Grid>
            </Grid> 
    )
}

export default Login