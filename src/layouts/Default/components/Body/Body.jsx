import { useTheme } from "@emotion/react";

function Body(props) {
  const theme = useTheme();

  return (
    <main
      css={{
        padding: theme.spacing(1),
      }}
    >
      {props.children}
    </main>
  );
}

export default Body;
