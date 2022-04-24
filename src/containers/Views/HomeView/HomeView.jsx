import dayjs from "dayjs";
import { Link } from "react-router-dom";
import DataGrid from "@Zen/components/DataGrid/DataGrid";

function linkFormatter(value, rowData) {
  return <Link to={"/detail/" + rowData.id}>{value}</Link>;
}

function dateFormatter(value) {
  return dayjs(value).format("MMM DD, YYYY, HH:mm A");
}

function HomeView() {
  const columns = [
    { name: "Title", field: "place", sortable: true, formatter: linkFormatter },
    { name: "Magnitude", field: "magnitude", sortable: true },
    { name: "Time", field: "time", sortable: true, formatter: dateFormatter },
  ];

  data = [
    {
      id: "ci38148464",
      place: "3km ENE of The Geysers, CA",
      magnitude: 1.19,
      time: 1523647508250,
    },
    {
      id: "ci38148430",
      place: "11km NE of Aguanga, CA",
      magnitude: 0.54,
      time: 1523647447080,
    },
  ];

  return (
    <>
      <h1>Home View</h1>
      <DataGrid columns={columns} data={data}></DataGrid>
    </>
  );
}

export default HomeView;
