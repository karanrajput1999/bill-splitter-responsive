import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box, Typography } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";

const TotalSpent = () => {
  const { transactions, users } = React.useContext(GlobalContext);

  //ISSUE - USING SAME CODE IN SplitModal :(
  // calculating the total of paid by an individual

  const val = {};
  for (let { userName, amount } of transactions) {
    users.map((u) => (val[u] ??= 0));

    val[userName] += parseInt(amount);
  }

  // console.log("transaction object", val); ISSUE - Rendering while typing person name
  return (
    <Box
      sx={{
        width: "auto",
        padding: "10px",
        borderRadius: "10px",
        border: "2px solid black",
      }}
    >
      <Box sx={{ marginBottom: "10px" }}>
        <Typography variant="h5">Total Spent</Typography>
      </Box>
      {Object.entries(val).map(([name, amount], i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1">{name} ➡ </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              backgroundColor: "#fa2d2d",
              marginLeft: "10px",
              borderRadius: "5px",
              // border: "2px solid black",
            }}
          >
            <CurrencyRupeeIcon sx={{ color: "white", fontSize: "18px" }} />
            <Typography
              variant="body1"
              sx={{ paddingRight: "5px", color: "white" }}
            >
              {amount}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TotalSpent;
