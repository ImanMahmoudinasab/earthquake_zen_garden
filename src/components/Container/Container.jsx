import { useTheme } from "@emotion/react";

function Container(props) {
  const theme = useTheme();

  return (
    <article
      css={{
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {
        <h1
          css={{
            ...theme.typography.h2,
            textAlign: "center",
          }}
        >
          {props.title}
        </h1>
      }
      <section
        css={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.children}
      </section>
    </article>
  );
}

export default Container;
