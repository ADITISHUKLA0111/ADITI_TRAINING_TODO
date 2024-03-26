import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../store/todoSlice";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { green } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

function Display() {
  const todos = useSelector((state) => state.todokey);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem" }}>
      <Box>
        {todos.length === 0 ? (
          <Box
            sx={{
              backgroundColor: "whitesmoke",
              textAlign: "center",
              borderRadius: "1rem",
            }}
            padding={4}
          >
            <Typography variant="body1">
              Click on "Add todo" to make a list
            </Typography>
          </Box>
        ) : (
          <List
            sx={{ bgcolor: "background.paper", overflowWrap: "break-word" }}
          >
            {" "}
            {todos.map((todo) => (
              <Paper elevation={2} spacing={2} sx={{ marginTop: "1rem" }} key={todo.id}>
                <ListItem>
                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "row",
                      // backgroundColor: "pink",
                      width: "100%",
                      height: "fit-content",
                      // justifyContent:"space-between"
                    }}
                  >
                    <Box onClick={() => handleToggle(todo.id)}>
                      {!todo.completed ? (
                        <CheckBoxOutlineBlankIcon
                          sx={{ color: green[500] }}
                          fontSize="small"
                        />
                      ) : (
                        <CheckBoxIcon
                          sx={{ color: green[500] }}
                          fontSize="small"
                        />
                      )}
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography
                        variant="caption"
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.text}
                      </Typography>
                      <Typography variant="caption" sx={{ color: green[400] }}>
                        {todo.name}
                      </Typography>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 0, sm: 1, md: 1 }}
                        divider={
                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ color: green[500] }}
                          />
                        }
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: green[500] }}
                        >
                          {todo.email}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: green[500] }}
                        >
                          {todo.phone}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                  <DeleteIcon
                    sx={{ color: green[500] }}
                    onClick={() => handleDelete(todo.id)}
                  />
                </ListItem>
              </Paper>
            ))}{" "}
          </List>
        )}
      </Box>
    </Container>
  );
}

export default Display;
