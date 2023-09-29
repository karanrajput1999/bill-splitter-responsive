import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "../App.css";
import SelectUser from "./SelectUser";
import { GlobalContext } from "../context/GlobalState";

const TransactionForm = () => {
  const [expenseName, setExpenseName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [selectedUser, setSelectedUser] = React.useState("");

  const { addTransaction } = React.useContext(GlobalContext);

  function expenseHandle(e) {
    setExpenseName(e.target.value);
  }
  function amountHandle(e) {
    setAmount(e.target.value);
  }

  function getTransactionDetails() {
    if (expenseName === "" || amount === "" || selectedUser === "") {
      alert("Please fill up all the details !");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 10000000),
        userName: selectedUser,
        expenseName,
        amount: amount,
      };
      addTransaction(newTransaction);
      setExpenseName("");
      setAmount("");
      setSelectedUser("");
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
      }}
    >
      <Box className="transaction-form-container">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            placeholder="Expense name"
            value={expenseName}
            onChange={(e) => expenseHandle(e)}
            sx={{ width: "140px" }}
            className="input-field"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => amountHandle(e)}
            placeholder="Amount"
            className="input-field amount-field"
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography>
            <strong> Paid by: </strong>
          </Typography>
          <SelectUser
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </div>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Button
          variant="contained"
          endIcon={<CurrencyRupeeIcon />}
          onClick={getTransactionDetails}
        >
          Add Expense
        </Button>
      </Box>
    </Box>
  );
};

export default TransactionForm;
