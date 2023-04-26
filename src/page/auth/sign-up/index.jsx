import SignUpBg from "../../../assets/images/signup-bg.png";
import {
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
import { Link, useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { AuthCard } from "../auth-styles";
import {useSelector, useDispatch} from "react-redux";
import {changeFirstName, changeLastName, changeMobileNo} from "../../../actions"

const SignUp = () => {
  const [otp, setOptp] = useState(false);
  const [otpNo, setOtpNo] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate()

  const store = useSelector(state => state.storeDetails)
  const dispatch = useDispatch();

  const handlickClickOtp = () => {
    setOptp(true);
  };

  const handleMobileNo = (val) => {
    dispatch(changeMobileNo(val))
  }

  const checkSignupDetaills = () => {
    setErr("");
    console.log(store)

    if(!store.firstName){
      setErr("Please enter your first name");
      return
    }
    if(!store.lastName){
      setErr(`Please enter your last name`);
      return
    }
    if(!store.mobileNo){
      setErr("Please enter mobile no.");
      return
    }
    if(store.mobileNo.length !== 13){
      setErr(`Please enter valid mobile no.`);
      return
    }

    handlickClickOtp()
  }

  const verifyOtp = () => {
    setErr("")

    if(!otpNo){
      setErr("Please enter OTP");
      return
    }
    // if(otpNo !== "1234"){
    //   setErr("Please enter valid OTP");
    //   return
    // }
    navigate("/superthread")
  }

  return (
    <AuthCard
      sx={{
        paddingTop: "50px",
        background: `url(${SignUpBg}) no-repeat center top fixed`,
        minHeight: "100vh",
        backgroundSize: "cover",
        paddingBottom: "150px",
      }}
    >
      <Container>
        <Grid container spacing={0}>
          <Grid lg={5} xs={12} item sx={{ margin: "0px auto" }}>
            <Card>
              <CardContent>
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                  Create store in 10mins
                </Typography>
                <Typography variant="body2">
                  Already have a account? <Link to="/">Sign in</Link>
                </Typography>
                <Stack
                  sx={{ marginTop: "60px" }}
                  direction={"column"}
                  spacing={3.75}
                >
                  <Grid container spacing={3.75}>
                    <Grid item lg={6} xs={12}>
                      <FormGroup>
                        <FormLabel>First Name</FormLabel>
                        <TextField onChange={e => dispatch(changeFirstName(e.target.value))} value={store.firstName} placeholder="Your First Name" />
                      </FormGroup>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <FormGroup>
                        <FormLabel>Last Name</FormLabel>
                        <TextField onChange={e => dispatch(changeLastName(e.target.value))} value={store.lastName} placeholder="Your Last Name" />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <FormGroup>
                    <FormLabel>Enter Mobile Number</FormLabel>
                    <PhoneInput
                      onChange={handleMobileNo}
                      value={store.mobileNo}
                      placeholder="Enter phone number"
                      international={false}
                      defaultCountry="IN"
                      type="tel"
                    />
                  </FormGroup>
                  {otp ? (
                    <FormGroup>
                      <FormLabel>Enter OTP</FormLabel>
                      <TextField onChange={e => setOtpNo(e.target.value)} value={otpNo} placeholder="Enter four digit OTP" />
                      <Typography
                        variant="body2"
                        sx={{ "&.MuiTypography-body2": { textAlign: "left" } }}
                      >
                        Haven’t received code?
                        <Link to="#!"> Resend in 0:59 sec</Link>
                      </Typography>
                    </FormGroup>
                  ) : (
                    ""
                  )}

                  {err ? <Typography variant="error">{err}</Typography> : ""}

                  <Button
                    onClick={otp ? verifyOtp : checkSignupDetaills}
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ height: "50px" }}
                  >
                    {otp ? "Submit" : "Create your Store"}
                  </Button>

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
    </AuthCard>
  );
};
export default SignUp;
