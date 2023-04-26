import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { ViewCard } from "./store-styled";
import back from "../../assets/images/back_button.svg";
import industryImg from "../../assets/images/industry.png";

import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { useState } from "react";
import {changeStoreIndustry} from "../../actions"
import {useSelector, useDispatch} from "react-redux";

const Industry = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  
  const store = useSelector(state => state.storeDetails)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeStoreIndustry(event.target.value))
  };

  const handleSubmit = () => {
    setErr("");
    if(!store.storeIndustry){
      setErr("Please select industry");
      return
    }

    navigate("/loader")
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
                    Select Industry
                  </Typography>
                  <Typography className="pragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus
                    <br /> nulla eget adipiscing faucibus platea. Eu ultrices
                    ipsum
                  </Typography>
                  <FormControl variant="standard" fullWidth>
                    <Select value={store.storeIndustry ? store.storeIndustry : ""} onChange={handleChange} displayEmpty>
                      <MenuItem value="" sx={{ color: "#2B2B2B" }}>
                        Services
                      </MenuItem>
                      <MenuItem value={10} sx={{ color: "#2B2B2B" }}>
                        Services 1
                      </MenuItem>
                      <MenuItem value={20} sx={{ color: "#2B2B2B" }}>
                        Services 2
                      </MenuItem>
                      <MenuItem value={30} sx={{ color: "#2B2B2B" }}>
                        Services 3
                      </MenuItem>
                    </Select>
                  </FormControl>
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
                  <img alt="" src={industryImg} />
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
export default Industry;
