import React from "react";
import waiting from "../assets/waiting.svg";
import { Box, Button, Typography } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SplitModal from "./SplitModal";

const TransactionList = () => {
  const { transactions } = React.useContext(GlobalContext);

  const [openDialog, setOpenDialog] = React.useState(false);

  // opening modal
  function handleOpen() {
    if (transactions.length === 0) {
      return;
    } else {
      setOpenDialog(true);
    }
  }

  // closing modal
  function handleClose() {
    setOpenDialog(false);
  }

  return (
    <Box className="transaction-list-container">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="transaction-list-text">Expense Journal</span>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            zIndex: "2",
          }}
        >
          <span className="transaction-list-text">Total Expense :</span>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              backgroundColor: "#fa2d2d",
              // border: "2px solid black",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
          >
            <CurrencyRupeeIcon sx={{ color: "white", fontSize: "18px" }} />

            {/* Calculating Total expenses */}

            <Typography
              variant="body1"
              sx={{ paddingRight: "5px", color: "white" }}
            >
              {transactions.reduce((acc, item) => {
                return (acc += Math.floor(item.amount));
              }, 0)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="transaction-container">
        {transactions.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={waiting} width="130" height="180" alt="waiting..." />
            <Typography variant="h6" color="#66666e">
              Add transactions...
            </Typography>
          </Box>
        ) : (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        )}
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          endIcon={<AssignmentIcon />}
          onClick={handleOpen}
        >
          Split it !
        </Button>

        <SplitModal openDialog={openDialog} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default TransactionList;
