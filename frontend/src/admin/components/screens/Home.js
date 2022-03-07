import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Table from "./Table";
const Home = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        <Link to="/create" style={{ textDecoration: "none", color: "white" }}>
          Add New User
        </Link>
      </Button>
      <Table />
    </div>
  );
};

export default Home;
