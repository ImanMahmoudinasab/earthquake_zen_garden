import Container from "@Zen/components/Container/Container";
import EarthquakeList from "@Zen/containers/Earthquake/components/EarthquakeList/EarthquakeList";
import useEarthquakesData from "@Zen/containers/Earthquake/use-earthquakes-data";

function HomeView() {
  const { earthquakes, metaData } = useEarthquakesData();

  return (
    <Container title={metaData.title}>
      <EarthquakeList earthquakes={earthquakes} />
    </Container>
  );
}

export default HomeView;
