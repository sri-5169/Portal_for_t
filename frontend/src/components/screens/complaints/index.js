import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../../service/api";
import Banner from "../../banner/Banner";
import Complaint from "./Complaint";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllComplaints();
      console.log(response);
      if(response.isSuccess){
        setComplaints(response.data);
      }
      else {
        console.log("Failure Occurred", response.msg);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Banner />
      <Grid container spacing={3} style={{width : "90", marginLeft : "0"}}>
        {complaints ? (
          complaints.map((complaint, index, complaints) => (
            <Grid item lg={3} sm={4} xs={12}>
              <Link
                style={{ textDecoration: "none", color: "inherit"}}
                to={`/complaint/${complaints[complaints.length - 1 - index]._id}`}
              >
                <Complaint
                  complaint={complaints[complaints.length - 1 - index]}
                />
              </Link>
            </Grid>
          ))
        ) : (
          <p>No data is available</p>
        )}
      </Grid>
    </div>
  );
};

export default Complaints;
