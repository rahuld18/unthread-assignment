import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FilledInput,
  FormGroup,
  Grid,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { ViewCard } from "./store-styled";
import back from "../../assets/images/back_button.svg";
import icon from "../../assets/images/icon.png";
import tick from "../../assets/images/green-checkbox.svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { useState } from "react";
import {changeStoreName} from "../../actions"
import {useSelector, useDispatch} from "react-redux";

const SperThread = () => {

  const [suggestion, setSuggestion] = useState(false);
  const [uniqueDomain, setUniqueDomain] = useState("");
  const [storeName, setStoreName] = useState("");
  const [err, setErr] = useState("")
  const navigate = useNavigate();

  // const store = useSelector(state => state.storeDetails)
  const dispatch = useDispatch();

  const showSuggestion = () => {
    setErr("Domain already exist")
    setSuggestion(true)
  }

  const getUniqueDomain = () => {
    setErr("")
    setUniqueDomain("SuperThread-12")
  }

  const handleStoreName = (e) => {
    setStoreName(e.target.value)
  }

  const handleSubmit = () => {
    setErr("")
    let storeNaming = uniqueDomain ? uniqueDomain : storeName;
    if(!storeNaming){
      setErr("Please enter your store name");
      return
    }
    dispatch(changeStoreName(storeNaming))
    navigate("/industry")
  }



  return (
    <Box sx={{ padding: "35px 0px" }}>
      <Container>
        <Typography
          variant="h2"
          sx={{ marginBottom: "35px", textAlign: "center" }}
        >
          Logo
        </Typography>
        <ViewCard>
          <Card elevation={0}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={6} xs={12}>
                  <Box className="step">
                    <Box component={"span"}>01 </Box>/ 04
                  </Box>
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    Name your store
                  </Typography>
                  <Typography className="pragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus
                    <br /> nulla eget adipiscing faucibus platea. Eu ultrices
                    ipsum
                  </Typography>
                  <FilledInput onChange={handleStoreName} value={storeName}  fullWidth placeholder="Ex. Ginny Cake Shop" />
                  <Box onClick={showSuggestion} className="suggest">
                    Not sure about the name, <span>Want us to suggest?</span>
                  </Box>

                  {suggestion ? 
                  <FormGroup sx={{ marginTop: "30px" }}>
                    <FilledInput
                      sx={{
                        "& .MuiInputAdornment-positionStart": {
                          width: "24px",
                        },
                        "& .MuiFilledInput-input": {
                          borderBottom: "0px !important",
                          paddingLeft: "0px !important",
                        },
                        "&.MuiFilledInput-root": {
                          borderBottom: "1px solid #343E50",
                        },
                      }}
                      fullWidth
                      value={uniqueDomain ? uniqueDomain : storeName}
                      placeholder="Ex. Ginny Cake Shop"
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={tick} alt="" />
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <Box sx={{ color: "#5C6D8E", letterSpacing: "0px" }}>
                            .company.com
                          </Box>
                        </InputAdornment>
                      }
                    />
                    <Stack direction={"row"} spacing={2}>
                      <Box
                        className="suggest"
                        sx={{ textAlign: "left !important" }}
                      >
                        This is temporary domain, you can add custom domain in
                        settings{" "}
                        <Link to="#!" className="learn_more">
                          Learn more
                        </Link>
                      </Box>
                      <Box onClick={getUniqueDomain} className="suggest" sx={{ whiteSpace: "nowrap" }}>
                        <span>Generate unique domain</span>
                      </Box>
                    </Stack>
                  </FormGroup> : ""}
                  {err ? <Typography variant="error">{err}</Typography> : ""}
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{ marginTop: "75px" }}
                  >
                    <img
                      alt=""
                      src={back}
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(-1)}
                    />
                    <Button
                    onClick={handleSubmit}
                      variant="contained"
                      sx={{ width: "140px" }}
                    >
                      Continue
                    </Button>
                  </Stack>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Card className="preview">
                    <CardContent>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        sx={{ mb: 1 }}
                      >
                        <Box component={"h3"} sx={{ m: 0 }}>
                          {uniqueDomain ? uniqueDomain : storeName}
                        </Box>
                      </Stack>
                      <Box
                        className="imagebox"
                        sx={{ height: "500px !important" }}
                      >
                        <img alt="" src={icon} />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </ViewCard>
        <Footer />
      </Container>
    </Box>
  );
};
export default SperThread;
