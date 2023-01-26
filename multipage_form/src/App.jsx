import "./styles.css";
import moment from "moment";
import {
  Button,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useState } from "react";
import FirstForm from "./pages/FirstForm";
import SecondForm from "./pages/SecondForm";
import { display } from "@mui/system";

const bookings = [
  {
    id: "10f1345c-5666-4113-a7d4-b81bb6522a3b",
    user: {
      firstName: "Ram",
      lastName: "Sharma",
      dob: "1990-05-01",
      gender: "MALE"
    },
    journey: {
      from: {
        country: "India",
        state: "Rajasthan",
        city: "Jaipur"
      },
      to: {
        country: "India",
        state: "Rajasthan",
        city: "Jodhpur"
      },
      dateOfJourney: "2021-12-01",
      price: 100,
      discountPer: 0,
      notes: "I am a vegan"
    }
  }
];

const initialState = {
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
};

export default function App() {
  const [form, setForm] = useState({
    first: false,
    second: false,
    container: true,
    headerButton: true
  });
  const [userData, setUserData] = useState(initialState);
  const [booking, setBooking] = useState(bookings);

  return (
    <div className="App">
      <Card
        variant="elevation"
        elevation={4}
        sx={{
          padding: "5px 25px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "start" }}>
          Bookings
        </Typography>
        {form.headerButton ? (
          <Button
            variant="contained"
            onClick={() =>
              setForm({
                ...form,
                first: true,
                container: false,
                headerButton: false
              })
            }
          >
            {" "}
            Create Booking
          </Button>
        ) : null}
      </Card>
      <div style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
      {form.first ? (
        <FirstForm
          userData={userData}
          setUserData={setUserData}
          form={form}
          setForm={setForm}
        />
      ) : null}
      {form.second ? (
        <SecondForm
          userData={userData}
          setUserData={setUserData}
          form={form}
          setForm={setForm}
          setBooking={setBooking}
          booking={booking}
        />
      ) : null}
      </div>
      {form.container ? (
        <TableContainer
          elevation={4}
          component={Paper}
          sx={{ marginTop: "25px" }}
        >
          <Table aria-label="bookings table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Destination</TableCell>
                <TableCell>Date of Journey</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booking.map((booking) => (
                <TableRow
                  key={booking.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{booking.user.firstName}</TableCell>
                  <TableCell>{booking.user.dob}</TableCell>
                  <TableCell>
                    {moment().diff(booking.user.dob, "years")}
                  </TableCell>
                  <TableCell>{booking.user.gender}</TableCell>
                  <TableCell>
                    {booking.journey.from.city +
                      "," +
                      booking.journey.from.state}
                  </TableCell>
                  <TableCell>
                    {booking.journey.to.city + "," + booking.journey.to.state}
                  </TableCell>
                  <TableCell>{booking.journey.dateOfJourney}</TableCell>
                  <TableCell>
                    {booking.journey.discountPer !== 0
                      ? booking.journey.price -
                        (booking.journey.price * booking.journey.discountPer) /
                          100
                      : booking.journey.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
}
