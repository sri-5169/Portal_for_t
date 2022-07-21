import React, { useEffect, useState } from 'react'
import MaterialTable from "material-table";
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
import { Link } from '@mui/material';
const Table = ({reports}) => {
   
      const columns = [
        {
          title: "SL_NO",
          field: "SL_NO",
          type: "number",
          filterPlaceholder: "Filter",
          defaultSort: "asc",
          render : (rowData,rowIndex) => (
                    <>{`${rowData.tableData.id+1}`}</>
          ),
        },
        {
            title: "Subject",
            field: "subject",
            filterPlaceholder: "Filter",
            defaultSort: "asc",
          },
          {
            title: "Responses",
            field: "responseLink",
            render: (rowData) => (
                <Link href={`${rowData.responseLink}`} target="_blank">View Profile</Link>
              ),
          },
          {
            title: "Forms",
            field: "formLink",
            render: (rowData) => (
                <Link href={`${rowData.formLink}`} target="_blank">View Preview</Link>
              ),
          },
          {
            title: "Admin",
            field: "admin",
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
<MaterialTable
        title="Reports"
        data={reports}
        columns={columns}
        icons={tableIcons}
        options={{
          filtering: true,
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
  );  
}

export default Table