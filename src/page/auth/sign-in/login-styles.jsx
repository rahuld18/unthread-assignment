import { styled } from "@mui/material";

export const Login = styled("div")(() => ({
  "& .MuiTypography-body1": {
    background: "linear-gradient(303.01deg, #5961F8 -4.4%, #F2D9F7 111.29%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    TextFillColor: "transparent",
  },
  "& .MuiCard-root": {
    position: "relative",
    borderRadius: "20px",
    overflow: "visible",
    color: "#C8D8FF",
    background:
      " radial-gradient(145.46% 122.03% at 88.28% 10.25%, rgba(222, 164, 242, 0.1) 0%, rgba(0, 0, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(93.02% 80.9% at 22.44% 86.73%, rgba(110, 111, 248, 0.1) 0%, rgba(110, 111, 248, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(131.02deg, rgba(104, 108, 248, 0.059) 10.34%, rgba(236, 171, 241, 0.059) 90.18%), #060519",
  },
  "& .MuiCard-root:before": {
    content: `""`,
    position: "absolute",
    top: "0px",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    margin: "-1px",
    borderRadius: "inherit",
    background: "linear-gradient(to right, #7E84BC, #37384A)",
  },
  "& .MuiCardContent-root": {
    padding: "52px 45px",
  },
  "& .MuiCardContent-root:last-child": {
    paddingBottom: "52px",
  },
  "& .MuiTypography-body2": {
    textAlign: "center",
    color: " #5C6D8E",
    marginTop: "13px",
  },
  "& .MuiTypography-body2 a": {
    textDecoration: "none",

    fontWeight: "600",
    background: "linear-gradient(to top, #A69DF7 50%, #7d7df7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  "& .MuiFormLabel-root": {
    color: "#C8D8FF",
    fontSize: "16px",
    marginBottom: "10px",
  },
  "& .PhoneInputCountry": {
    border: " 1px solid #343E50",
    borderRadius: "4px",
    padding: "10px",
    height: "50px",
    width: "50px",
  },
  "& .PhoneInputInput": {
    padding: "10px",
    height: "50px",
    border: " 1px solid #343E50",
    borderRadius: "4px",
    background: "transparent",
    outline: "none",
    color: "#5C6D8E",
    fontSize: "14px",
    fontFamily: "SF Pro Text",
    fontWeight: 400,
    "&::placeholder": {
      color: "#5C6D8E",
      fontSize: "14px",
    },
  },
}));
