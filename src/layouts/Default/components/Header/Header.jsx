import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "@Zen/resources/logo.png?width=40";

function Header() {
  const theme = useTheme();

  return (
    <header
      css={{
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2, 1),
        backgroundColor: theme.palette.header.background,
      }}
    >
      <div>
        <Link to="/">
          <img
            css={{
              borderRadius: "4px",
            }}
            width={40}
            height={40}
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <div
        css={{
          flexGrow: 1,
          padding: theme.spacing(0, 2),
          textAlign: "center",
        }}
      >
        <h1
          css={{
            ...theme.typography.h1,
            margin: theme.spacing(0),
            color: theme.palette.text.secondary,
          }}
        >
          Earthquake Zen Garden
        </h1>
      </div>
      <div>
        <Link to="/profile">Welcome Sally</Link>
      </div>
    </header>
  );
}

export default Header;
