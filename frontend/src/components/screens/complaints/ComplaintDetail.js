import React from 'react';
import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled, Button, Checkbox } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { API } from '../../../service/api';
import { ViewColumnTwoTone } from '@material-ui/icons';
import { API_NOTIFICATION_MESSAGES } from '../../../constants/config';
// import { getComplaint } from '../../../../service/api';



// components

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const SeenButton = styled(Button)(`
      color: green,
      background: orange,
      font-weight :  bold,
      font-family: sans-serif,
      width : "13rem",
  `);

const ComplaintDetail = () => {
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const [complaint, setComplaint] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getComplaintById(id);
            if (response.isSuccess) {
                console.log(response.data);
                setComplaint(response.data);
            }
        }
        fetchData();
    }, []);
    const  saveSeen = async (e) => {
        await API.seenTheComplain({
            complaineeUANN: complaint.complaineeUANN ,
            complaintDate: complaint.complaintDate ,
            description: complaint.description ,
            piture: complaint.piture ,
            school: complaint.school ,
            seen: true,
            title: complaint.title,
            __v: complaint.__v,
            _id: complaint._id ,
        });
        setComplaint({...complaint,[e.target.name ]: true});
    }
    return (
        <Container>
            <Image src={complaint.picture || url} alt="complaint" />
            <Box style={{ float: 'right' }}>
            </Box>
            <Heading>{complaint.title}</Heading>
            {
                complaint.seen===false ? 
                    <SeenButton
                    name="seen"
                            onClick={(e) => saveSeen(e)}
                        style={{
                            backgroundColor: "orange",
                            color: "white",
                            width: "13rem",
                            margin: "10px auto",
                          }}>
                         Saw it?
                        </SeenButton>
                        
                        :<SeenButton
                        style={{
                            backgroundColor: "green",
                            color: "orange",
                            width: "13rem",
                            margin: "10px auto",
                          }}>
                        Already Seen
                        </SeenButton>
            }
            <Author>
                <Typography style={{marginLeft: 'auto'}}>{new Date(complaint.complaintDate).toDateString()}</Typography>
            </Author>
            <Typography>{complaint.description}</Typography>
        </Container>
    )
}

export default ComplaintDetail;