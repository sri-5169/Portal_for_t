import React, { useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { LoginContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import {API} from "../service/api";
const useStyles = makeStyles({
  container: {
    marginTop: "10px",
  },
  paper: {
    padding: 20,
    height: "60vh important",
    width: 300,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "#9ddede",
  },
  inputs: {
    marginBottom: "25px",
    marginLeft: "5px",
    marginRight: "5px",
    display: "flex",
  },
  btn: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#7cb2d2",
  },
});
const AdminSignup = () => {
  const [user, setUser] = useState({
    Name: "",
    DateofBirth: "01-01-2000",
    AadhaarNo: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const { account, setAccount } = useContext(LoginContext);
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    date: "1993-11-01",
  });
  const handleDates = (event) => {
    let Date1 = event.target.value;
    let Date2 = reverseformat(Date1);
    setUser({ ...user, [event.target.name]: Date2 });
    // setTimeout(4000);
  };
  const reverseformat = (s) => {
    let i = 0;
    let d = "",
      m = "",
      y = "";
    for (i = 0; i < s.length; i++) {
      if (s[i] === "-") {
        break;
      }
      d = d + s[i];
    }
    i++;
    for (; i < s.length; i++) {
      if (s[i] === "-") {
        break;
      }
      m = m + s[i];
    }
    i++;
    for (; i < s.length; i++) {
      if (s[i] === "-") {
        break;
      }
      y = y + s[i];
    }

    return y + "-" + m + "-" + d;
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const saveUser = async () => {
    try {
      await API.adminSignup(user);
      setAccount(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Card
      style={{
        justifyItems: "center",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20 0",
      }}
    >
      <form>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  width: "100%",
                  borderRadius: "2rem",
                }}
              >
                Fill the form to SignUp
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Name"
                placeholder=" Enter Your Name"
                name="Name"
                variant="outlined"
                onChange={(e) => handleChange(e)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Date of Birth"
                type="date"
                name="DateofBirth"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      className={classes.adornment}
                      position="start"
                    >
                      Add DOB
                    </InputAdornment>
                  ),
                }}
                className={classes.textField}
                variant="outlined"
                onChange={(e) => handleDates(e)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="AadhaarNo"
                placeholder=" Enter AadhaarNo"
                name="AadhaarNo"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Email"
                placeholder=" Enter Email"
                variant="outlined"
                onChange={(e) => handleChange(e)}
                name="Email"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="Password"
                onChange={(e) => handleChange(e)}
                variant="outlined"
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
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="ConfirmPassword"
                placeholder=" Enter ConfirmPassword"
                name="ConfirmPassword"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              // type="submit"
              onClick={() => saveUser()}
              style={{
                backgroundColor: "green",
                color: "white",
                margin: "20px auto",
                borderRadius: "2rem",
              }}
              variant="contained"
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default AdminSignup;
