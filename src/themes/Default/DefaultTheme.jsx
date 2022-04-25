import { ThemeProvider } from "@emotion/react";

// @returns "8px" for spacing(1)
// @returns "16px 8px" for spacing(2, 1)
// @returns "8px 16px 24px 32px" for spacing(1, 2, 3, 4)
function spacing(...argsInput) {
  const args = argsInput.length === 0 ? [1] : argsInput;

  return args
    .map((argument) => {
      const output = argument * 8;
      return typeof output === "number" ? `${output}px` : output;
    })
    .join(" ");
}

const theme = {
  palette: {
    text: {
      primary: "#444444",
      secondary: "#777777",
    },
    header: {
      background: "#ededed",
    },
    link: {
      normal: "#0011bb",
      visited: "#6600cc",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "sans-serif",
    h1: {
      fontSize: "2.1rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "1.6rem",
      fontWeight: 300,
    },
  },
  background: {
    default: "#ffffff",
  },
  spacing,
};

function DefaultTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default DefaultTheme;
