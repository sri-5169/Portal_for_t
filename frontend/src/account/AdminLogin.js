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
import {
  Autorenew,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../service/api";
import { saveUserDetails, setAccessToken, setRefreshToken } from "../utils/common-utils";
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
  poster: {
    width: "100vw",
    height: "30vh",
    objectFit: "cover",
    marginBottom: "-100px",
    zIndex: "-1",
  },
  forgot: {
    color: "red",
  },
  lastline: {
    marginTop: "8px",
  },
});
const AdminLogin = (props) => {
  //   const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    Email : "",
    Password : "",
  });
  const navigate = useNavigate();
  const classes = useStyles();
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleLogin = async () => {
    try {
      let response = await API.adminLogin(user);
      if(response.isSuccess){
        setAccessToken( response.data.accessToken);
        setRefreshToken( response.data.refreshToken);
        console.log("nayauser", response.data);
           saveUserDetails({ name: response.data.name, UANNumber: response.data.UANNumber, email : response.data.Email});
           alert(`Greetings respected, ${response.data.name}`);
        navigate("/home");
      }
      else {
        console.log(response.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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
            name="Email"
            onChange={(e) => handleChange(e)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            name="Password"
            fullWidth
            onChange={(e) => handleChange(e)}
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
              onClick={() => handleLogin()}
            fullWidth
          >
            Sign in
          </Button>
          <Link
            className={classes.forgot}
            to="/forgotpassword"
            underline="always"
          >
            Forgot Password ?
          </Link>
          <Typography className={classes.lastline}>
            Don't have and account? <Link to="/adminSignup">Sign up</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default AdminLogin;
