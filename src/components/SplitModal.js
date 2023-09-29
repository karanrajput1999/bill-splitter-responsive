import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import TotalSpent from "./TotalSpent";
import { GlobalContext } from "../context/GlobalState";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const SplitModal = ({ openDialog, handleClose }) => {
  const { transactions, users } = React.useContext(GlobalContext);

  // calculating total expense
  // ISSUE - REPEATED CODE
  const totalExpense = transactions.reduce((acc, item) => {
    return (acc += Math.floor(item.amount));
  }, 0);

  // share a person needs to pay
  const perPersonShare = totalExpense / users.length;

  //ISSUE - USING SAME CODE IN SIDE TotalSpent :(
  // calculating the total of paid by an individual

  const val = {};
  for (let { userName, amount } of transactions) {
    users.map((u) => (val[u] ??= 0));

    val[userName] += parseInt(amount);
  }

  // an for calculated amount for an individual after splitting
  const calucationArray = [];

  for (let prop in val) {
    if (val[prop] < perPersonShare) {
      calucationArray.push(
        <div className="modal-text">
          <span className="expense-info-text">{prop} needs to pay ➡</span>
          <Box
            sx={{
              display: "inline-flex",
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
              {perPersonShare - val[prop]}
            </Typography>
          </Box>
        </div>
      );
    } else {
      calucationArray.push(
        <div className="modal-text">
          <span className="expense-info-text">{prop} will get paid ➡</span>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              width: "auto",
              backgroundColor: "#02c402",
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
              {val[prop] - perPersonShare}
            </Typography>
          </Box>
        </div>
      );
    }
  }

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle>
        <Box>
          <Typography variant="h5" textAlign="center">
            <strong> Expense Details</strong>
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent className="split-modal">
        <Box>
          <TotalSpent />
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <span className="share-text">Per person share </span>➡
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              width: "auto",
              backgroundColor: "#0073d1",
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
              {perPersonShare}
            </Typography>
          </Box>
          {/* <span className="share-text">{`Per person share ➡ ${perPersonShare}`}</span> */}
          {calucationArray.map((element) => element)}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SplitModal;
