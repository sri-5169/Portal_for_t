import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";
import { teacherInfos } from "../../constants/teacher.js";
import { forwardRef } from "react";
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

const Table = () => {
  const data = teacherInfos;
  const columns = [
    {
      title: "SL_NO",
      field: "SL_NO",
      filterPlaceholder: "Filter by serial number",
    },
    { title: "Type", field: "TeacherType" },
    { title: "Name", field: "TeacherName", defaultSort: "desc" },
    { title: "AadhaarNo", field: "AadhaarNo" },
    {
      title: "Joining Date",
      field: "Profile Link",
      render: (rowData) => (
        <Link to={`/detail/${rowData.TeacherName}`}>View Profile</Link>
      ),
    },
  ];

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
      <MaterialTable
        title="Material Table"
        data={data}
        columns={columns}
        icons={tableIcons}
        options={{
          filtering: true,
          exportButton: true,
          searchFieldVariant: "standard",
        }}
      />
    </Box>
  );
};

export default Table;
