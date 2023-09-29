import React from "react";
import { createContext } from "react";
import Reducer from "./Reducer";

export const GlobalContext = createContext();

// Demo transactions
// {
//   id: 0,
//   userName: "Person 1",
//   expenseName: "Hotel",
//   amount: 450,
// },
// {
//   id: 1,
//   userName: "Person 2",
//   expenseName: "Travel",
//   amount: 105,
// },
// {
//   id: 2,
//   userName: "Person 3",
//   expenseName: "Food",
//   amount: 505,
// }

const GlobalState = ({ children }) => {
  const [person, setPerson] = React.useState("");
  const [state, dispatch] = React.useReducer(Reducer, {
    users: [],
    transactions: [],
  });

  // function to controll the value of person input
  const personHandler = (e) => {
    setPerson(e.target.value);
  };

  // function to add person in select list
  function personValueHandler() {
    if (person !== "") {
      dispatch({
        type: "ADD_USER",
        payload: person,
      });
    }
    setPerson("");
  }

  // function to add transaction
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // function to delete a transaction
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        person,
        personHandler,
        personValueHandler,
        users: state.users,
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
