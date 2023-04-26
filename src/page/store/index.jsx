import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FilledInput,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ViewCard } from "./store-styled";
import back from "../../assets/images/back_button.svg";
import icon from "../../assets/images/icon.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer";

const Store = () => {
  const navigate = useNavigate();

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
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <Box className="step">
                    <Box component={"span"}>02 </Box>/ 04
                  </Box>
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    Name your Store
                  </Typography>
                  <Typography className="pragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lacus
                    <br /> nulla eget adipiscing faucibus platea. Eu ultrices
                    ipsum
                  </Typography>
                  <FilledInput fullWidth placeholder="Ex. Ginny Cake Shop" />
                  <Box className="suggest">
                    Not sure about the name, <span>Want us to suggest?</span>
                  </Box>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{ marginTop: "156px" }}
                  >
                    <img
                      alt=""
                      src={back}
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(-1)}
                    />
                    <Button
                      variant="contained"
                      sx={{ width: "140px" }}
                      LinkComponent={Link}
                      to="/superthread"
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
                          Store
                        </Box>
                        <Box component={"ul"} className="menuList">
                          <Box component={"li"}>Home</Box>
                          <Box component={"li"}>About Us</Box>
                          <Box component={"li"}>Careeres</Box>
                          <Box component={"li"}>Contact</Box>
                        </Box>
                      </Stack>
                      <Box className="imagebox">
                        <img alt="" src={icon} />
                      </Box>
                      <Box className="categories_text">
                        <Typography variant="h3">Categories</Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris at risus sollicitudin vestibulum nulla
                          sollicitudin
                        </Typography>
                      </Box>
                      <Grid container spacing={2}>
                        {[1, 2, 3].map((index) => (
                          <Grid item lg={4} xs={12} key={index}>
                            <Box className="imagebox">
                              <img alt="" src={icon} />
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
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
export default Store;
