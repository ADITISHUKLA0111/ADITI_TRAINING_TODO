import React, { useState } from "react";

import { addTodo } from "../store/todoSlice";
import { useDispatch } from "react-redux";
// import React from "react";
// import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import AlertBox from "./AlertBox";

const Todo = () => {
  const [text, setText] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const val = email;
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^\d{10}$/;
    const phoneVal = phone;

    if (
      text.length >= 5 &&
      text.length < 254 &&
      regEmail.test(val) &&
      phonePattern.test(phoneVal) &&
      name.length !== 0
    ) {
      dispatch(addTodo([text, name, email, phone]));
      setPhone("");
      setText("");
      setname("");
      setEmail("");
      navigate("/lists");
    } else {
      setOpen(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Box
        component="form"
        // maxWidth="sm"
        sx={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          gap: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="body1"
          component="h6"
          sx={{ alignSelf: "flex-start" }}
        >
          Make a note
        </Typography>

        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Note (5-254 letters)"
          variant="filled"
          size="small"
          fullWidth
          multiline
          maxRows="5"
          color="success"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Name"
          variant="filled"
          size="small"
          fullWidth
          color="success"
          required
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Email"
          variant="filled"
          size="small"
          fullWidth
          color="success"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormControl
          color="success"
          placeholder="Phone no."
          fullWidth
          sx={{ m: 1 }}
          variant="filled"
        >
          <InputLabel htmlFor="filled-adornment-amount">Phone no.</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">+91 </InputAdornment>
            }
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </FormControl>

        <Button
          variant="outlined"
          color="success"
          sx={{ alignSelf: "flex-start" }}
          onClick={handleAddTodo}
        >
          Add Task
        </Button>

        <AlertBox setOpen={setOpen} open={open} />
      </Box>
    </Container>
  );
};

export default Todo;
