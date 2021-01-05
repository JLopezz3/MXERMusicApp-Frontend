import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './ProfileInfo.css';
import axios from "axios"
import { SignalWifi4BarLockSharp } from '@material-ui/icons';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                MXER
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        margin: theme.spacing(1),
        fontFamily: "Bungee Inline",
        color: "#FA9232",
        textShadow: "2px 2px black",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#FA9232",
        "&:hover, &.Mui-focusVisible": {
            transition: "0.3s",
            color: "#FFFFFF",
            backgroundColor: "rgb(176 113 41)",
          },
    },
}));

export default function SignUp() {
    const classes = useStyles();

    const [usernameCreate, setUsernameCreate] = useState("");
    const [passwordCreate, setPasswordCreate] = useState("");

    const register = () => {
        axios.post('http://localhost:3001/register', {
            username: usernameCreate,
            password: passwordCreate,
        }).then((response) => {
            console.log(response)
        });
    };

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Typography className={classes.title} variant="h2">
            MXER
        </Typography>
        <Typography component="h1" variant="h5">
            Create an Account
        </Typography>
        <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="firstName"
                    onChange={(e) => {
                        setUsernameCreate(e.target.value);
                    }}
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                    onChange={(e) => {
                        setUsernameCreate(e.target.value);
                    }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    autoComplete="email"
                    onChange={(e) => {
                        setPasswordCreate(e.target.value)
                    }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                    onChange={(e) => {
                        setPasswordCreate(e.target.value)
                    }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="address"
                    id="address"
                    autoComplete="address"
                    onChange={(e) => {
                        setPasswordCreate(e.target.value)
                    }}
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="city"
                    label="City"
                    type="city"
                    id="city"
                    autoComplete="city"
                    onChange={(e) => {
                        setPasswordCreate(e.target.value)
                    }}
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="state"
                    label="State"
                    type="state"
                    id="state"
                    autoComplete="state"
                    onChange={(e) => {
                        setPasswordCreate(e.target.value)
                    }}
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="zipCode"
                    label="Zip Code"
                    type="zipCode"
                    id="zipCode"
                    autoComplete="zipCode"
                    onChange={(e) => {
                        setPasswordCreate(e.target.value)
                    }}
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="country"
                    label="Country"
                    type="country"
                    id="country"
                    autoComplete="country"
                    onChange={(e) => {
                        setPasswordCreate(e.target.value)
                    }}
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={register}
            >
            Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="http://localhost:3000/login" variant="body2" style={{ textDecoration: "none", color: "black" }}>
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
    </Container>
    );
}



