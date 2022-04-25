import { useParams } from "react-router-dom";
import Container from "@Zen/components/Container/Container";
import Earthquake from "@Zen/containers/Earthquake/components/Earthquake/Earthquake";
import useEarthquakeData from "@Zen/containers/Earthquake/use-earthquake-data";

function DetailView() {
  const { earthquakeId } = useParams();
  const { earthquake } = useEarthquakeData(earthquakeId);

  return (
    <Container title={earthquake.title}>
      <Earthquake earthquake={earthquake} />
    </Container>
  );
}

export default DetailView;
