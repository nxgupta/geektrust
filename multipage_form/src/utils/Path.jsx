import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import { TextField, Typography } from "@mui/material";
import countries from "./countries";
import states from "./states";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}));

export default function CustomizedSelects({ userData, setUserData }) {
  let [fromId, setFromId] = React.useState(null);
  let [toId, setToId] = React.useState(null);
  let stateFromData = [];
  let stateToData = [];
  const handleCountry = (event) => {
    setUserData({
      ...userData,
      journey: {
        ...userData.journey,
        from: { ...userData.journey.from, country: event.target.value }
      }
    });
    setFromId(countries.find((country) => country.name === event.target.value));
  };
  if (fromId) {
    stateFromData = states.filter((state) => state.countryId === fromId.id);
  }
  const handleState = (event) => {
    setUserData({
      ...userData,
      journey: {
        ...userData.journey,
        from: { ...userData.journey.from, state: event.target.value }
      }
    });
  };
  const handleToCountry = (event) => {
    setUserData({
      ...userData,
      journey: {
        ...userData.journey,
        to: { ...userData.journey.to, country: event.target.value }
      }
    });
    setToId(countries.find((country) => country.name === event.target.value));
  };
  if (toId) {
    stateToData = states.filter((state) => state.countryId === toId.id);
  }
  const handleToState = (event) => {
    setUserData({
      ...userData,
      journey: {
        ...userData.journey,
        to: { ...userData.journey.to, state: event.target.value }
      }
    });
  };
  return (
    <div>
      <div style={{display:'flex', alignItems:'center'}}>
        <span>Source: </span>
        <FormControl sx={{ m: 1 }} variant="standard">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={userData.journey.from.city}
            onChange={(e) =>
              setUserData({
                ...userData,
                journey: {
                  ...userData.journey,
                  from: { ...userData.journey.from, city: e.target.value }
                }
              })
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Country"
            value={userData.journey.from.country}
            onChange={handleCountry}
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">State</InputLabel>

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Country"
            value={userData.journey.from.state}
            onChange={handleState}
          >
            {stateFromData.map((state) => (
              <MenuItem key={state.id} value={state.name}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div style={{display:'flex', alignItems:'center'}}>
        <span>Destination: </span>
        <FormControl sx={{ m: 1 }} variant="standard">
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={userData.journey.to.city}
            onChange={(e) =>
              setUserData({
                ...userData,
                journey: {
                  ...userData.journey,
                  to: { ...userData.journey.to, city: e.target.value }
                }
              })
            }
          />
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Country"
            value={userData.journey.to.country}
            onChange={handleToCountry}
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">State</InputLabel>

          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="State"
            value={userData.journey.to.state}
            onChange={handleToState}
          >
            {stateToData.map((state) => (
              <MenuItem key={state.id} value={state.name}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
