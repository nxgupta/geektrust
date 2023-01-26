import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";

const FirstForm = ({ userData, setUserData, form, setForm }) => {
  function handleSubmit(e) {
    e.preventDefault();
    let {
      user: { firstName, lastName, gender, dob }
    } = userData;
    // if (firstName === "" || lastName === "" || gender === "") {
    //   console.log("Please fill all the details");
    // } else {
      setForm({ ...form, first: !form.first, second: true });
    //}
  }

  return (
    <div>
      <FormControl sx={{ display: "flex", marginTop: "15px", gap: "10px" }}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={userData.user.firstName}
          onChange={(e) =>
            setUserData({
              ...userData,
              user: { ...userData.user, firstName: e.target.value }
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={userData.user.lastName}
          onChange={(e) =>
            setUserData({
              ...userData,
              user: { ...userData.user, lastName: e.target.value }
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Date of Birth"
          InputLabelProps={{
            shrink: true
          }}
          type="date"
          variant="outlined"
          value={userData.user.dob}
          onChange={(e) =>
            setUserData({
              ...userData,
              user: { ...userData.user, dob: e.target.value }
            })
          }
        />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e) =>
            setUserData({
              ...userData,
              user: { ...userData.user, gender: e.target.value }
            })
          }
        >
          <FormControlLabel
            value="FEMALE"
            control={<Radio />}
            label="Female"
            checked={userData.user.gender === "FEMALE"}
          />
          <FormControlLabel
            value="MALE"
            control={<Radio />}
            label="Male"
            checked={userData.user.gender === "MALE"}
          />
          <FormControlLabel
            value="OTHER"
            control={<Radio />}
            label="Other"
            checked={userData.user.gender === "OTHER"}
          />
        </RadioGroup>
        <Button
          type="submit"
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          Proceed
        </Button>
      </FormControl>
    </div>
  );
};
export default FirstForm;
