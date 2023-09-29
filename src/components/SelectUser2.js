import React from "react";
import { GlobalContext } from "../context/GlobalState";

const SelectUser = ({ selectedUser, setSelectedUser }) => {
  const { users } = React.useContext(GlobalContext);
  const [disableSelect, setDisableSelect] = React.useState(true);

  function selectHandle(e) {
    setSelectedUser(e.target.value);
  }

  // checking if select element has atleast 2 persons in it
  React.useEffect(() => {
    if (users.length === 2) {
      setDisableSelect(false);
    }
  }, [users]);

  return (
    <Box>
      <FormControl>
        <Select
          disabled={disableSelect}
          native={false}
          displayEmpty
          value={selectedUser}
          onChange={(e) => selectHandle(e)}
          size="small"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Typography>Select Person</Typography>;
            } else {
              return selected;
            }
          }}
        >
          {users.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        {disableSelect ? (
          <FormHelperText
            sx={{ position: "absolute", bottom: -20, color: "red" }}
          >
            Add atleast 2 Person
          </FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default SelectUser;
