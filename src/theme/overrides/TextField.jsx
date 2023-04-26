export default function TextField() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            background: "transparent",
            border: "1px solid #343E50",
            borderRadius: "5px",
            color: "#5C6D8E",
            fontSize: "14px",

            "&:before": {
              display: "none",
            },
            "&:after": {
              display: "none",
            },
          },
          input: {
            "&::placeholder": {
              color: "#5C6D8E",
              fontSize: "14px",
            },
          },

          "& fieldset": {
            display: "none",
          },
        },
      },
    },
  };
}
