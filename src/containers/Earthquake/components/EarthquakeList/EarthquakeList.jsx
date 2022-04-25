import dayjs from "dayjs";
import { Link } from "react-router-dom";
import DataGrid from "@Zen/components/DataGrid/DataGrid";

function linkFormatter(value, rowData) {
  return <Link to={"/detail/" + rowData.id}>{value}</Link>;
}

function dateFormatter(value) {
  return dayjs(value).format("MMM DD, YYYY, HH:mm A");
}

const defaultColumns = [
  { name: "Title", field: "place", sortable: true, formatter: linkFormatter },
  { name: "Magnitude", field: "magnitude", sortable: true },
  { name: "Time", field: "time", sortable: true, formatter: dateFormatter },
];

function EarthquakeList(props) {
  const { columns = defaultColumns, earthquakes } = props;

  return <DataGrid columns={columns} data={earthquakes}></DataGrid>;
}

export default EarthquakeList;
