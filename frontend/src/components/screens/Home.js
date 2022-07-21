import {
  Button, makeStyles

} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../banner/Banner";
import Notice from "./notice/Notice";
import "./Home.css";
import { API } from "../../service/api";

const useStyles = makeStyles({
  btn1: {
    color: "green",
    background: "orange",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    width : "13rem",
  },
  logoutButton : {
    color: "green",
    background: "orange",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    width : "13rem",
    justifySelf : "center",
    marginBottom : "1rem",
    marginTop : "0.5rem",
  }
})
const Home = () => {
  const classes = useStyles();
  const [counter, setCounter] = useState("0");
  const navigate = useNavigate();
  useEffect(() => {
    const handleCount = async () => {
      const res = await API.userCounter();
      if(res.isSuccess){
        setCounter(res.data.count);
      }
      // setCounter(res.count)
      console.log(res);
    }
    handleCount();
  }, []);
  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/adminLogin");
  }
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <div className="home__nav__buttons">
        <div className="home__nav__links">
          <Link to="/create" className="links">
        <Button className={classes.btn1} variant="contained">
            Add New User
        </Button>
          </Link>
          <Link to="/complaints" className="links">
            <Button className={classes.btn1} variant="contained">
            Complaints
        </Button>
          </Link>
          </div>
          <div className="home__nav__links">
          <Link to="/reports" className="links" >
            <Button className={classes.btn1} variant="contained">
            Reports
        </Button>
          </Link>
          <Link to="/table" className="links">
            <Button className={classes.btn1} variant="contained">
            Details
        </Button>
          </Link>
          </div>
            <Button className={classes.logoutButton} onClick={() => handleLogOut()} variant="contained">
            LOGOUT
        </Button>
      </div>
      <p style={{display:"flex", alignItems: "baseline"}}><span style={{fontSize : "x-large"}}>{counter } </span> Users have registered </p>
      
      <Notice />
      <Banner/>
      <Banner/>
      <Banner/>
      <Banner/>
    </div>
  );
};

export default Home;
