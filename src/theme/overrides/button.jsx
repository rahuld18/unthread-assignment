// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button() {
  const containedStyle = {
    "&.MuiButton-contained": {
      background:
        "linear-gradient(165.69deg, rgba(104, 108, 248, 0.7) 4.49%, rgba(236, 171, 241, 0.7) 113.71%)",
      color: "#FFFFFF",
      borderRadius: "5px",
      boxShadow: "none",
      fontSize: "18px",
      textTransform: "capitalize",
      fontWeight: "500",
    },
  };

  const outlinedStyle = {
    "&.MuiButton-outlined": {
      borderRadius: "5px",
      boxShadow: "none",

      border: "1px solid #96ABDE",

      color: "#C8D8FF",

      textTransform: "capitalize",
    },
  };

  // const textStyle = {};

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "18px",
          fontFamily: "SF Pro Text",

          borderRadius: "5px",
          color: "#C8D8FF",
        },
        contained: {
          ...containedStyle,
        },
        outlined: {
          ...outlinedStyle,
        },
        // text: {
        //   ...textStyle,
        // },
      },
    },
  };
}
