import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LockOutlined, Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
const useStyles = makeStyles({
  container: {
    margin: "10px auto",
  },
  paper: {
    padding: 20,
    height: "50vh important",
    width: 300,
    margin: "20px auto",
  },
  avatar: {
    // backgroundColor: "#FFC72C",
    backgroundColor: "orange",
  },
  inputs: {
    marginBottom: "40px",
  },
  btn: {
    marginTop: "50px",
    marginBottom: "20px",
    backgroundColor: "#34975a",
    borderRadius: "20px",
    "& : hover": {
      backgroundColor: "#34975a",
    },
  },
});
const AdminLogin = (props) => {
  //   const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid align="center" className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <h2>POT</h2>
        <h3 style={{ fontFamily: "sans-serif" }}>Portal for teachers</h3>
        <TextField
          className={classes.inputs}
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          fullWidth
          required
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          name="password"
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment poisiton="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          className={classes.btn}
          type="Submit"
          variant="contained"
          color="primary"
          //   onClick={() => handleLogin()}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          Don't have and account? <Link to="/signup">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default AdminLogin;
