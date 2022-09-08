import React,{useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined';
import Input from './Input';
import useStyles from './styles';

function Auth() {
    const classes = useStyles();
    const [showPassword,setShowPassword]=useState(false);
    const isSignUp = false;
   
    const handleShowPassword=()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword);
    }

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    return (

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'SignUp' : 'SignIn'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autofocus half />
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text" :"password"} handleShowPassword={handleShowPassword} />
                    {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'SignUp' : 'SignIn'}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth