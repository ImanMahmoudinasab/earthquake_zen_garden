import "normalize.css";
import { Global, useTheme } from "@emotion/react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function DefaultLayout(props) {
  const theme = useTheme();

  return (
    <div>
      <Global
        styles={{
          html: {
            backgroundColor: theme.background.default,
            color: theme.palette.text.primary,
            fontSize: theme.typography.htmlFontSize,
            fontFamily: theme.typography.fontFamily,
          },
          "a:link": {
            color: theme.palette.link.normal,
          },
          "a:visited": {
            color: theme.palette.link.visited,
          },
        }}
      />
      <Header />
      <Body>{props.children}</Body>
    </div>
  );
}

export default DefaultLayout;
