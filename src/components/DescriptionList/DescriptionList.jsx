import { useTheme } from "@emotion/react";

function DescriptionList(props) {
  const { data, fields } = props;

  const theme = useTheme();

  return (
    <dl css={{ display: "table", borderSpacing: theme.spacing(1), margin: 0 }}>
      {fields.map((field) => {
        return (
          <div key={field.key} css={{ display: "table-row" }}>
            <dt css={{ display: "table-cell", whiteSpace: "nowrap" }}>
              {field.label}
            </dt>
            <dd
              css={{
                display: "table-cell",
                paddingLeft: theme.spacing(3),
                color: theme.palette.text.secondary,
              }}
            >
              {field.formatter
                ? field.formatter(data[field.key])
                : data[field.key]}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export default DescriptionList;
