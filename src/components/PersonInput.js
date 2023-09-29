import React from "react";
import { Box, Button, TextField } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useTheme } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";

const PersonInput = () => {
  const theme = useTheme();
  const { person, personHandler, personValueHandler } =
    React.useContext(GlobalContext);

  return (
    <Box className="person-input-container">
      <input
        size="small"
        value={person}
        onChange={personHandler}
        placeholder="Person's name..."
        className="input-field"
      />
      <Button
        variant="contained"
        endIcon={
          <PersonAddAlt1Icon sx={{ color: theme.palette.secondary.main }} />
        }
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
        }}
        onClick={personValueHandler}
      >
        Add Person
      </Button>
    </Box>
  );
};

export default PersonInput;
