import dayjs from "dayjs";
import DescriptionList from "@Zen/components/DescriptionList/DescriptionList";

function dateFormatter(value) {
  return dayjs(value).format("MMM DD, YYYY, HH:mm A");
}

const defaultFields = [
  { label: "Title", key: "title" },
  { label: "Magnitude", key: "magnitude" },
  { label: "Time", key: "time", formatter: dateFormatter },
  { label: "Status", key: "status" },
  { label: "Tsunami", key: "tsunami" },
  { label: "Type", key: "type" },
];

function Earthquake(props) {
  const { earthquake, fields = defaultFields } = props;

  return <DescriptionList data={earthquake} fields={fields} />;
}

export default Earthquake;
