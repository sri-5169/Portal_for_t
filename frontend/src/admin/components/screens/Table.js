import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import exportFromJSON from "export-from-json";
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
import { getAllInfos } from "../../../service/api.js";
const Table = ({ takencolumns }) => {
  const [teacherInfos, setTeacherInfos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllInfos();
      console.log(data);
      setTeacherInfos(data);
    };
    fetchData();
    setInterval(() => {}, 1000);
  }, []);
  const data = teacherInfos;
  console.log(data);
  const fileName = "download";
  const exportType = "xls";
  const beforeTableEncode =
    "(entries: { fieldName: string, fieldValues: string[] }[]) => { fieldName: string, fieldValues: string[] }[];";
  const handleExport = () => {
    exportFromJSON({ data, fileName, exportType, beforeTableEncode });
  };
  const columns = [
    {
      title: "SL_NO",
      field: "SL_NO",
      type: "number",
      filterPlaceholder: "Filter",
      defaultSort: "asc",
    },
    {
      title: takencolumns.column2,
      filterPlaceholder: "Filter",
      field: takencolumns.column2,
    },
    {
      title: takencolumns.column3,
      filterPlaceholder: "Filter",
      field: takencolumns.column3,
    },
    {
      title: takencolumns.column4,
      type: takencolumns.column4 === "PayDrawn" ? "currency" : "string",
      filterPlaceholder: "Filter",
      field: takencolumns.column4,
    },
    {
      title: "Profile Links",
      field: "Profile Link",
      filtering: false,
      render: (rowData) => (
        <Link to={`/detail/${rowData._id}`}>View Profile</Link>
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
      <button onClick={handleExport}>Export</button>
      <MaterialTable
        title="Details"
        data={data}
        columns={columns}
        icons={tableIcons}
        options={{
          filtering: true,
          exportButton: true,
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
    </Box>
  );
};
export default Table;
