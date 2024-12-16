import React from "react";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Welcome to Pharmacy Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a simple dashboard for managing pharmacy data.
        <br/>
        Created by: Rizky H Saputra / 232053001
      </Typography>
    </Container>
  );
}
