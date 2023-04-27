import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
// import users from "./../../data/users";
// import image from "./Images/image.jpg";
// import authService from "./../service/authService";

const Userlogin = ({ setToken }) => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  // const [loginInfo, setLoginInfo] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(`${BASE_URL}/login`, {
      userName,
      password,
    });

    // setLoginInfo(result.data);
    const token = result.data;
    setToken(token);

    if (result.data.isLogin === true) {
      navigate("/");
      setError({ status: true, msg: "Login Success", type: "success" });
    } else {
      setError({
        status: true,
        msg: "UserName or Password is incorrect",
        type: "error",
      });
    }
  };
  const theme = createTheme();

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          className="main-login"
          sx={{
            backgroundColor: "#ffffff",
            maxWidth: "100% !important",
            height: "100vh",
            paddingRight: "0px !important",
          }}
        >
          <Box className="innerLogo"></Box>
          <Paper
            sx={{
              width: "39%",
              margin: "auto",
              height: "100%",
              marginLeft: "10rem",
              boxShadow: "none",
            }}
            elevation={3}
          >
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "35%",
                height: "100%",
                marginRight: "-2rem",
                borderLeft: "1px solid #c9c9c9",
              }}
              id="login-form"
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="User Name"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={passwordType}
                  id="password"
                  autoComplete="current-password"
                />
                <p
                  style={{
                    fontWeight: "500",
                    color: "#4b6ff3",
                    cursor: "pointer",
                  }}
                  onClick={togglePassword}
                >
                  {passwordType === "password"
                    ? "Show Password!"
                    : "Hide Password!"}
                </p>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {error.status ? (
                  <Alert severity={error.type}>{error.msg}</Alert>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};
Userlogin.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Userlogin;
