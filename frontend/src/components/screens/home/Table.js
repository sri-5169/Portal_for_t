import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import "./Home.css";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import { getAllInfos } from "../../../service/api.js";
import Banner from "../../banner/Banner";
import { API } from "../../../service/api.js";
const Table = ({ takencolumns }) => {
  const [teacherInfos, setTeacherInfos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllInfos();
      console.log(response);
      if(response.isSuccess){
        setTeacherInfos(response.data);
      }
    };
    fetchData();
    setInterval(() => {}, 1000);
  }, []);
  const data = teacherInfos;
  console.log(teacherInfos);
  const columnDatas = [
    "EST_SL",
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
  const columns = [
    {
      title: "SL_NO",
      field: "SL_NO",
      type: "number",
      filterPlaceholder: "Filter",
      defaultSort: "asc",
    },
  ];
  columnDatas.forEach((column) => {
    if(column==="TeacherName"){
      columns.push({
        title: column,
        field: column,
        filterPlaceholder: "Filter",
        hiddenByColumnsButton : true,
        cellStyle:{
            width : "15rem",
            display : "flex",
        },
        render: (rowData) => (
          <Link 
          className="table_links"
           to={`/detail/${rowData._id}`}>{`${rowData.TeacherName}`}</Link>
        ),
      });  
    }
    else 
    columns.push({
      title: column,
      field: column,
      filterPlaceholder: "Filter",
      hiddenByColumnsButton : true,
    });
  });
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  return (
    <Box>
      <Banner />
      <div>
      <MaterialTable
        title="Details"
        data={data}
        columns={columns}
        headerStyle={{
            position : "-webkit-sticky",
            top : 0,
        }}
        icons={tableIcons}
        options={{
          filtering: true,
          maxBodyHeight: '625px',
          exportButton: true,
          columnsButton: true,
          searchFieldVariant: "standard",
          headerStyle: {
            backgroundColor: "orange",
            color: "green",
            fontWeight: "600",
          },
          pageSize: 10,
          pageSizeOptions: [10, 50, 100],
        }}
      />
      </div>
      
    </Box>
  );
};
export default Table;
