import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import { DatePicker } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import SelectInput from "@material-ui/core/Select/SelectInput";

const useStyles = makeStyles((theme) => ({
  adornment: {
    width: 110,
  },
}));
const CreateView = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();
  const [info, setInfo] = useState({
    EST_SL: null,
    SL_NO: null,
    TeacherType: null,
    TeacherName: null,
    DateofBirth: "01-01-2000",
    DateofJoining: "01-01-2000",
    DateofTraining: "01-01-2000",
    AccountNo:  null,
    IFSCCode:  null,
    UANNumber: null,
    AadhaarNo: null,
    NameAsPerAadhar: null,
    YearAsPerAadhar: null,
    DiseCode: null,
    Employment_Category:null,
    AreaType: null,
    Block: null,
    District: null,
    EmploymentUnit: null,
    GradePay: null,
    PayDrawn: null,
  });
  const [values, setValues] = React.useState({
    date: "1993-11-01",
  });

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
    setInfo({ ...info, [event.target.name]: event.target.value });
    console.log(info);
  };
  const handleDates = (event) => {
    let Date1 = event.target.value;
    let Date2 = reverseformat(Date1);
    setInfo({ ...info, [event.target.name]: Date2 });
    setTimeout(4000);
    console.log(info);
  };
  return (
    <div>
      <Card
        style={{
          justifyItems: "center",
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20 0",
        }}
      >
        <Button
          style={{
            backgroundColor: "orange",
            color: "white",
            width: "100%",
            margin: "10px auto",
          }}
        >
          Add New Details
        </Button>
        <form>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="EST_SL"
                  placeholder=" Enter Established Serial No"
                  name="EST_SL"
                  onChange={(e) => handleChange(e)}
                  value={info.EST_SL}
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="SL_NO"
                  placeholder=" Enter SL_NO"
                  name="SL_NO"
                  onChange={(e) => handleChange(e)}
                  value={info.SL_NO}
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  placeholder=" Enter Your Name"
                  name="TeacherName"
                  value={info.TeacherName}
                  variant="outlined"
                  onChange={(e) => handleChange(e)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="TeacherType"
                  placeholder="Enter your TeacherType"
                  name="TeacherName"
                  value={info.TeacherType}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={reverseformat(info.DateofBirth)}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Joining"
                  type="date"
                  name="DateofJoining"
                  value={reverseformat(info.DateofJoining)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        className={classes.adornment}
                        position="start"
                      >
                        Add DOJ
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
              <Grid item xs={12} sm={6}>
                <TextField
                  id="date"
                  label="Date of Training"
                  type="date"
                  name="DateofTraining"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        className={classes.adornment}
                        position="start"
                      >
                        Add DOT
                      </InputAdornment>
                    ),
                  }}
                  value={reverseformat(info.DateofTraining)}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Account Number"
                  name="AccountNo"
                  value={info.AccountNo}
                  onChange={(e) => handleChange(e)}
                  placeholder=" Enter Account Number"
                  variant="outlined"
                  fullWidth
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="IFSCCode"
                  name="IFSCCode"
                  value={info.IFSCCode}
                  placeholder=" Enter IFSCCode"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="UANNumber"
                  placeholder=" Enter UANNumber"
                  name="UANNumber"
                  value={info.UANNumber}
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  fullWidth
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="AadhaarNo"
                  placeholder=" Enter AadhaarNo"
                  name="AadhaarNo"
                  value={info.AadhaarNo}
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  fullWidth
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="NameAsPerAadhar"
                  placeholder=" Enter NameAsPerAadhar"
                  variant="outlined"
                  name="NameAsPerAadhar"
                  value={info.NameAsPerAadhar}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="YearAsPerAadhar"
                  placeholder=" Enter YearAsPerAadhar"
                  type="number"
                  onChange={(e) => handleChange(e)}
                  name="YearAsPerAadhar"
                  value={info.YearAsPerAadhar}
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="DiseCode"
                  name="DiseCode"
                  onChange={(e) => handleChange(e)}
                  value={info.DiseCode}
                  placeholder=" Enter DiseCode"
                  variant="outlined"
                  fullWidth
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Employment_Category"
                  name="Employment_Category"
                  onChange={(e) => handleChange(e)}
                  value={info.Employment_Category}
                  placeholder=" Enter Employment_Category"
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="AreaType"
                  onChange={(e) => handleChange(e)}
                  placeholder=" Enter AreaType"
                  variant="outlined"
                  name="AreaType"
                  value={info.AreaType}
                  fullWidth
                  required
                  contentEditable
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Block"
                  placeholder=" Enter Block"
                  variant="outlined"
                  name="Block"
                  value={info.Block}
                  type="number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="District"
                  placeholder=" Enter District"
                  name="District"
                  onChange={(e) => handleChange(e)}
                  value={info.District}
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="EmploymentUnit"
                  placeholder=" Enter EmploymentUnit"
                  name="EmploymentUnit"
                  onChange={(e) => handleChange(e)}
                  value={info.EmploymentUnit}
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="GradePay"
                  placeholder=" Enter GradePay"
                  name="GradePay"
                  onChange={(e) => handleChange(e)}
                  value={info.GradePay}
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="PayDrawn"
                  placeholder=" Enter Payment WithDrawn"
                  name="PayDrawn"
                  onChange={(e) => handleChange(e)}
                  value={info.PayDrawn}
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  margin: "20px auto",
                }}
                variant="contained"
                fullWidth
              >
                Submit the Details
              </Button>
            </Grid>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default CreateView;
