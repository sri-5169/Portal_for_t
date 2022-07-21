import React, { useEffect, useState } from 'react'
import { API } from '../../../service/api.js';

import Table from './Table.js';

const ReportDetails = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          let response = await API.getAllReports();
          if(response.isSuccess){
            setReports(response.data);
          }
          else {
            console.log("Error occurred");
          }
        };
        fetchData();
      }, []);
      
  return (
            <Table reports={reports}/>
    );  
}

export default ReportDetails