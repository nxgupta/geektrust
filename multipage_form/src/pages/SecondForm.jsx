import * as React from "react";
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import states from "../utils/states";
import CustomSelect from "../utils/Path";
import moment from "moment";

const SecondForm = ({
  userData,
  setUserData,
  form,
  setForm,
  booking,
  setBooking
}) => {
  let {
    user: { gender, dob },
    journey: { dateOfJourney, discountPer }
  } = userData;
  function handleSubmit(e) {
    e.preventDefault();
    let age = moment().diff(dob, "years");
    if (gender === "FEMALE") {
      setUserData((userData.journey.discountPer = 20));
      if (age > 50) {
        setUserData((userData.journey.discountPer = 40));
      }
    }
    if (dateOfJourney === "") {
      console.log("Please fill all the details");
    } else {
      setBooking([...booking, {...userData,id:uuidv4()}]);
      setUserData({
        id: null,
        user: {
          firstName: "",
          lastName: "",
          dob: "",
          gender: ""
        },
        journey: {
          from: {
            country: "",
            state: "",
            city: ""
          },
          to: {
            country: "",
            state: "",
            city: ""
          },
          dateOfJourney: "",
          price: 100,
          discountPer: 0,
          notes: ""
        }
      });
      setForm({
        first: false,
        second: false,
        container: true,
        headerButton: true
      });
    }
  }

  return (
    <div>
      <FormControl sx={{ display: "flex", marginTop: "15px", gap: "10px" }}>
        <CustomSelect
          userData={userData}
          setUserData={setUserData}
          journeyData={userData.journey.from}
          path="from"
        />
        <TextField
          id="outlined-basic"
          label="Date of Journey"
          InputLabelProps={{
            shrink: true
          }}
          type="date"
          variant="outlined"
          value={userData.journey.dateOfJourney}
          onChange={(e) =>
            setUserData({
              ...userData,
              journey: { ...userData.journey, dateOfJourney: e.target.value }
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Notes"
          variant="standard"
          value={userData.journey.notes}
          onChange={(e) =>
            setUserData({
              ...userData,
              journey: { ...userData.journey, notes: e.target.value }
            })
          }
        />

        <Button
          type="submit"
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};
export default SecondForm;
