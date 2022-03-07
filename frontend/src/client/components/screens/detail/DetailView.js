import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { teacherInfos } from "../../../../admin/constants/teacher";

const DetailView = () => {
  const [info, setInfo] = useState({});
  // // Aadhaar = Aadhaar - 10;
  // const { Aadhaar } = useParams();
  // useEffect(() => {
  //   teacherInfos
  //     .filter((teacher) => teacher.AadhaarNo === Aadhaar)
  //     .map((filteredperson) => setInfo(filteredperson));
  // }, []);

  return (
    <div>
      <Typography>Add New Details</Typography>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                placeholder=" Enter Your Name"
                variant="outlined"
                value={info.TeacherName}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="TeacherType"
                placeholder="Enter your TeacherType"
                variant="outlined"
                value={info.TeacherType}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="DateofBirth"
                value={info.DateofBirth}
                placeholder=" Enter DateofBirth"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Joining"
                value={info.DateofJoining}
                placeholder=" Enter Date of Joining"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Training"
                value={info.DateofTraining}
                placeholder=" Enter Date of Training"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Account Number"
                value={info.AccountNo}
                placeholder=" Enter Account Number"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="IFSCCode"
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
                value={info.UANNumber}
                placeholder=" Enter UANNumber"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="AadhaarNo"
                value={info.AadhaarNo}
                placeholder=" Enter AadhaarNo"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="NameAsPerAadhar"
                value={info.NameAsPerAadhar}
                placeholder=" Enter NameAsPerAadhar"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="YearAsPerAadhar"
                value={info.YearAsPerAadhar}
                placeholder=" Enter YearAsPerAadhar"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="DiseCode"
                value={info.DiseCode}
                placeholder=" Enter DiseCode"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Employment_Category"
                value={info.Employment_Category}
                placeholder=" Enter Employment_Category"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="AreaType"
                value={info.AreaType}
                placeholder=" Enter AreaType"
                variant="outlined"
                fullWidth
                required
                contentEditable
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Block"
                value={info.Block}
                placeholder=" Enter Block"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="District"
                value={info.District}
                placeholder=" Enter District"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="EmploymentUnit"
                value={info.TeacherName}
                placeholder=" Enter EmploymentUnit"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="GradePay"
                placeholder=" Enter GradePay"
                variant="outlined"
                fullWidth
                required
                value={info.GradePay}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="PayDrawn"
                placeholder=" Enter Payment WithDrawn"
                variant="outlined"
                fullWidth
                required
                value={info.PayDrawn}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              style={{ backgroundColor: "green", color: "white" }}
              variant="contained"
              fullWidth
            >
              Submit the Details
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailView;
