import {Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import {Button , Link, makeStyles} from "@material-ui/core";
import React, {  useContext, useEffect, useState } from "react";
import Banner from "../../banner/Banner";
import { API } from "../../../service/api";
import { Box } from "@mui/system";
import { getUserDetails } from "../../../utils/common-utils";
import { LoginContext } from "../../../context/ContextProvider";
import {Link as RouterLink} from "react-router-dom";
import ReportDetails from "./ReportDetails";
const useStyle = makeStyles({

  btn : {
    backgroundColor : "orange",
    color : "green",
    fontWeight:"bold",
    width : "13rem",
    margin : "1rem 1rem",
  },
})
const Reports = () => {
  const [reports, setreports] = useState([]);
  const user = getUserDetails();
  const [report,setReport] = useState({
    formLink : "",
    responseLink : "",
    subject : "",
    admin : user.name,
  });
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllReports();
      if(response.isSuccess){
        console.log(response.data);
        setreports(response.data);
      }
      else {
        console.log("Error occurred");
      }
    };
    fetchData();
  }, []);
  const classes = useStyle();
  const handleChange=  (e) => {
        setReport({...report,[e.target.name] :  e.target.value});
        console.log(report);
  }  
  const saveReport = async () => {
          try {
            await API.newReport(report);
          }
          catch(error){
            console.log("Some Error");
          }
  }
  
  return (
    <div>
      <Banner />
      <Grid container >
          <Link href="https://docs.google.com/forms/u/0/?tgif=d" target="_blank" >
          <Button variant="contained" className={classes.btn}>Generate a Report</Button>
          </Link>
      </Grid>
          <RouterLink to="/reportDetails" style={{textDecoration : "none"}}>
          <Button variant="contained" className={classes.btn} >See the reports</Button>
          </RouterLink>
          <Card
        style={{
          display : "flex",
          flexDirection : "column",
          alignItems : "center",
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20 0",
        }}
      >
          <Typography style={{width : "70%"}}>Paste the link of form here and the site here, It will be saved here You can see any time</Typography>
        <Button
          style={{
            backgroundColor: "orange",
            color: "white",
            width: "100%",
            margin: "10px auto",
            cursor:"default",
          }}
        >
          Fill the Details of the report
        </Button>
        <Box>
          <CardContent>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
                <TextField
                  label="Subject"
                  placeholder=" Enter Your subject"
                  name="subject"
                  value={report.subject}
                  variant="outlined"
                  onChange={(e) => handleChange(e)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Form Link"
                  name="formLink"
                  placeholder=" Enter formLink"
                  onChange={(e) => handleChange(e)}
                  value={report.formLink}
                  variant="outlined"
                  type="text"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Response Link"
                  placeholder=" Enter Website Link"
                  name="responseLink"
                  onChange={(e) => handleChange(e)}
                  value={report.responseLink}
                  variant="outlined"
                  type="text"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid item>
              <Button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  margin: "20px auto",
                }}
                variant="contained"
                fullWidth
                onClick={() => saveReport()}
              >
                Submit the Details
              </Button>
            </Grid>
          </CardContent>
        </Box>
      </Card>  
                  
    </div>
  );
};

export default Reports;
