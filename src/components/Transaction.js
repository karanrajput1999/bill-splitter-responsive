import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = React.useContext(GlobalContext);

  return (
    <Paper
      elevation={2}
      sx={{
        height: "110px",
        width: "100%",
        display: "flex",
        // alignItems: "center",
        justifyItems: "center",
        flexDirection: "column",
        padding: "10px 10px",
        backgroundColor: "#FDFDFD",
        borderLeft: "5px solid red",
        borderRight: "5px solid red",
        marginTop: "10px",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ alignSelf: "flex-end" }}>
        <IconButton
          onClick={() => deleteTransaction(transaction.id)}
          sx={{ padding: "0" }}
        >
          <CancelIcon sx={{ fontSize: "18px", padding: "0", margin: "0" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <Typography variant="body1">Paid by :</Typography>
        <Typography variant="body1">{transaction.userName}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <Typography variant="body1">Paid for :</Typography>
        <Typography variant="body1" color="red">
          {transaction.expenseName}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <Typography variant="body1">Amount :</Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "auto",
            backgroundColor: "#fa2d2d",
            // border: "2px solid black",
            borderRadius: "5px",
          }}
        >
          <CurrencyRupeeIcon sx={{ color: "white", fontSize: "18px" }} />
          <Typography
            variant="body1"
            sx={{ paddingRight: "5px", color: "white" }}
          >
            {transaction.amount}
          </Typography>
        </Box>
        {/* <Box>
          <IconButton onClick={() => deleteTransaction(transaction.id)}>
            <DeleteIcon />
          </IconButton>
        </Box> */}
      </Box>
    </Paper>
  );
};

export default Transaction;
