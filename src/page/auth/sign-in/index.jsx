import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormGroup,
  FormLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../../assets/images/logo.svg";
import loginleft from "../../../assets/images/login-bg.png";
import google from "../../../assets/images/google.svg";
import facebook from "../../../assets/images/facebook.png";
import { Login } from "./login-styles";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

const SignIn = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState(false);
  const [err, setErr] = useState(null)

  const navigate = useNavigate();

  const handlickClickOtp = () => {
    if(checkMobileNo()) setOtp(true);
  };

  const checkMobileNo = () => {
    setErr("")
    if(!phoneNo){
      setErr("Please enter phone no.");
      return false
    }
    if(phoneNo.length !== 13){
      setErr(`Please enter valid phone no.`);
      return false
    }
    return true
  }

  const checkLoginDetaills = () => {
    setErr("")
    if(!otp){
      setErr("Please enter OTP");
      return
    }
    // if(otp !== "1234"){
    //   setErr("Please enter valid OTP");
    //   return
    // }

    navigate("/store")

  }

  return (
    <>
      <Login sx={{ paddingTop: "100px" }}>
        <Container>
          <Grid container spacing={5}>
            <Grid item lg={7} xs={12}>
              <Box>
                <img src={logo} alt="" />
                <Typography variant="body1" sx={{ mt: 2.5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  nulla <br />
                  eget adipiscing faucibus platea. Eu ultrices ipsum
                </Typography>
                <Box sx={{ marginTop: "54px" }}>
                  <img alt="" src={loginleft} />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} xs={6}>
              <Card>
                <CardContent>
                  <Typography variant="h1" sx={{ textAlign: "center" }}>
                    Get Started !
                  </Typography>
                  <Typography variant="body2">
                    New to Company? <Link to="/sign-up">Sign up</Link>
                  </Typography>
                  <Stack
                    sx={{ marginTop: "60px" }}
                    direction={"column"}
                    spacing={3.75}
                  >
                    <FormGroup>
                      <FormLabel>Enter Mobile Number</FormLabel>
                      <PhoneInput
                        placeholder="Enter phone number"
                        type="tel"
                        value={phoneNo}
                        onChange={setPhoneNo}
                        international={false}
                        defaultCountry="IN"
                      />
                    </FormGroup>
                    {otp ? (
                      <FormGroup>
                        <FormLabel>Enter OTP</FormLabel>
                        <TextField type="number" value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter four digit OTP" />
                      </FormGroup>
                    ) : (
                      ""
                    )}
                    {err ? <Typography variant="error">{err}</Typography> : ""}
                    <Button
                      onClick={otp ? checkLoginDetaills : handlickClickOtp}
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{ height: "50px" }}
                    >
                      {otp ? "Login" : "  Get OTP"}
                    </Button>
                    <Box
                      sx={{
                        textAlign: "center",
                        color: "#96ABDE",
                        fontSize: "12px",
                      }}
                    >
                      Or sign in with
                    </Box>
                    <Box>
                      <Grid container spacing={2}>
                        <Grid item lg={6} xs={12}>
                          <Button
                            variant="outlined"
                            fullWidth
                            size="large"
                            sx={{ fontSize: "18px", height: "54px" }}
                          >
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              spacing={1}
                              component={"span"}
                            >
                              <img alt="" src={google} />{" "}
                              <Box component={"span"}>Google</Box>
                            </Stack>
                          </Button>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                          <Button
                            variant="outlined"
                            fullWidth
                            size="large"
                            sx={{ fontSize: "18px", height: "54px" }}
                          >
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              spacing={1}
                              component={"span"}
                            >
                              <img alt="" src={facebook} />{" "}
                              <Box component={"span"}>Facebook</Box>
                            </Stack>
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                    <Typography variant="subtitle2">
                      By creating an account means you agree to the Terms &
                      Conditions and our Privacy Policy
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Login>
    </>
  );
};
export default SignIn;
