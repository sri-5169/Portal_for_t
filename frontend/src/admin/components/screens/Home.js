import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
const Home = () => {
  const [columns, setColumns] = useState({
    column2: "TeacherName",
    column3: "Block",
    column4: "District",
  });
  const handleChange = (event) => {
    setColumns({ ...columns, [event.target.name]: event.target.value });
    console.log(columns);
  };
  const datas = [
    "EST_SL",
    "SL_NO",
    "TeacherType",
    "TeacherName",
    "DateofBirth",
    "DateofJoining",
    "DateofTraining",
    "AccountNo",
    "IFSCCode",
    "UANNumber",
    "AadhaarNo",
    "NameAsPerAadhar",
    "YearAsPerAadhar",
    "DiseCode",
    "Employment_Category",
    "AreaType",
    "Block",
    "District",
    "EmploymentUnit",
    "GradePay",
    "PayDrawn",
  ];
  return (
    <div style={{ width: "100%" }}>
      <Button
        variant="contained"
        style={{ backgroundColor: "orange", marginLeft: "auto" }}
      >
        <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
          Add New User
        </Link>
      </Button>
      <Grid container fullWidth style={{ marginLeft: "8%" }}>
        <Grid item md={2} style={{ marginLeft: "10px" }}>
          <FormControl fullWidth>
            <InputLabel>Column 2</InputLabel>
            <Select
              value={columns.column2}
              label="Column 2"
              name="column2"
              onChange={(e) => handleChange(e)}
            >
              {datas.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2} style={{ marginLeft: "10px" }}>
          <FormControl fullWidth>
            <InputLabel>Column 3</InputLabel>
            <Select
              value={columns.column3}
              label="Column 3"
              name="column3"
              onChange={(e) => handleChange(e)}
            >
              {datas.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2} style={{ marginLeft: "10px" }}>
          <FormControl fullWidth>
            <InputLabel>Column 4</InputLabel>
            <Select
              value={columns.column4}
              label="Column 4"
              name="column4"
              onChange={(e) => handleChange(e)}
            >
              {datas.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Table takencolumns={columns} />
    </div>
  );
};

export default Home;
