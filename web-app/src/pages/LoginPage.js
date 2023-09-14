import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { authenticateUser } from "../redux/actions/LoginActions";
import { useDispatch } from "react-redux";
import decodeJwt from "../utils/decodeJwt";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function LoginPage() {
  const dispatch = useDispatch();

  const handleSuccess = (credentialResponse) => {
    const decode = decodeJwt(credentialResponse.credential);
    console.log(credentialResponse);
    dispatch(authenticateUser(decode));
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4">Find your favorite Pokemon</Typography>
      <br/>
      <Typography variant="h6">Save it to your favorites</Typography>
      <br/>
      <Typography variant="subtitle1">Do not wait more!</Typography>
      <GoogleOAuthProvider clientId="726660751725-nb716id1bk6i90h5oc6j72i8qic1psvl.apps.googleusercontent.com">
        <GoogleLogin onSuccess={handleSuccess} onError={handleError}>
          <Button variant="contained" color="primary">
            Login with Google
          </Button>
        </GoogleLogin>
      </GoogleOAuthProvider>
    </Box>
  );
}

export default LoginPage;
