import { Box, Paper } from "@mui/material";
import React from "react";
import Header from "./Header";
import PersonInput from "./PersonInput";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const Container = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={4}
        className="paper"
        sx={{
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <PersonInput />
        <TransactionForm />
        <TransactionList />
      </Paper>
    </Box>
  );
};

export default Container;
