import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

function Header(props) {
  const { logo, title, user } = props;
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
          {title}
        </h1>
      </div>
      <div>
        <Link to="/profile">Welcome {user.firstName}</Link>
      </div>
    </header>
  );
}

export default Header;
