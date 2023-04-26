import { styled } from "@mui/material";

export const ViewCard = styled("div")(() => ({
  "& .MuiTypography-body2": {
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
    "&:before": {
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
  },
  "& .MuiCardContent-root": {
    padding: "52px 45px",
  },
  "& .MuiCardContent-root:last-child": {
    paddingBottom: "52px",
  },
  "& .step": {
    color: "#4B4E70",
    fontSize: "16px",
    marginBottom: "49px",
    "& span": {
      background: "linear-gradient(to top, #A69DF7 50%, #7d7df7 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
  },
  "& .pragraph": {
    color: "#4B4E70",
    fontSize: "14px",
    lineHeight: "180%",
    fontWeight: 400,
    letterSpacing: "0.02em",
    marginBottom: "64px",
  },
  "& .MuiFilledInput-root": {
    background: "transparent",
    "&:before": {
      display: "none",
    },
    "&:after": {
      display: "none",
    },
    "& .MuiFilledInput-input": {
      padding: "8px 14px",
      borderBottom: "1px solid #343E50",
      "&::placeholder": {
        color: "#5C6D8E",
        fontSize: "14px",
      },
    },
  },
  "& .suggest": {
    textAlign: "right",
    color: " #5C6D8E",
    marginTop: "5px",
    letterSpacing: "0px",
    cursor: "pointer",
    "& span": {
      textDecoration: "none",

      fontWeight: "600",
      background: "linear-gradient(to top, #A69DF7 50%, #7d7df7 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
  },
  "& .preview": {
    background: "transparent",
    boxShadow: "none",
    border: "1px solid #7e84bc26",
    borderRadius: "5px",
    "&:before": {
      display: "none",
    },
    "& .MuiCardContent-root": {
      padding: "15px",
    },
  },
  "& .menuList": {
    margin: "0px",
    padding: "0px",
    "& li": {
      listStyle: "none",
      display: "inline-block",
      padding: "0px 8px",
      fontSize: "12px",
      letterSpacing: "0px",
      fontWeight: 400,
      color: "#4B4E70",
      opacity: "0.7",
    },
  },
  "& .imagebox": {
    background: "#ccddff2b",
    height: "150px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .categories_text": {
    textAlign: "center",
    padding: "24px",
    "& p": {
      letterSpacing: "0px",
      color: "#4B4E70",
    },
  },
  "& .learn_more": {
    color: "#658DED",
    textDecoration: "none",
  },
  "& .MuiInput-underline": {
    color: "#C8D8FF",
    padding: "4px 14px",
    borderBottom: "1px solid #343E50",
    "&:before": { display: "none" },
    "&:after": { display: "none" },
    "& svg": {
      color: "#C8D8FF",
    },
  },
  "& .MuiInputBase-input:focus": {
    background: "transparent",
  },
  "& .listview ": { color: "#2B2B2B" },
}));
