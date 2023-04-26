import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", paddingTop: "40px", color: "#4B4E70" }}>
      © Copyright 2023{" "}
      <Box
        className="company"
        component={"span"}
        sx={{
          textDecoration: "none",

          fontWeight: "600",
          background: "linear-gradient(to top, #A69DF7 50%, #7d7df7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Company
      </Box>
    </Box>
  );
};
export default Footer;
