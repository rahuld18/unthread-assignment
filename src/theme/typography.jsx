// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (fontFamily) => ({
  htmlFontSize: 16,
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "48px",
  },
  h2: {
    fontWeight: 600,
    fontSize: "38px",
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "45px",
  },
  h4: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: 1.4,
  },
  h5: {
    fontSize: "22px",
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "18px",
    lineHeight: 1.57,
  },

  body1: {
    fontSize: "15.2941px",
    lineHeight: "180%",
    letterSpacing: "0.05em",
  },
  body2: {
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: 400,
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.57,
  },
  subtitle2: {
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "150%",
    letterSpacing: "0.02em",
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: "capitalize",
  },
  error: {
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "150%",
    letterSpacing: "0.02em",
    color: "red"
  }
});

export default Typography;
