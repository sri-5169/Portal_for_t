import React from "react";
import { styled, Box, Typography } from "@mui/material";

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;
  & > img,
  & > p {
    padding: 0 5px 5px 5px;
  }
`;

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "10px 10px 0 0",
  height: 150,
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const Details = styled(Typography)`
  font-size: 14px;
  word-break: break-word;
`;

const Complaint = ({ complaint }) => {
  const url = complaint.picture
    ? complaint.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    let n = str.length;
    return  n > limit ? str.substring(0, limit) + "..." : str;
  };
  return (
    <Container>
      <Image src={url} alt="complaint" />
      <Heading>{addEllipsis(complaint.title, 20)}</Heading>
      <Details>{addEllipsis(complaint.description, 100)}</Details>
    </Container>
  );
};

export default Complaint;
