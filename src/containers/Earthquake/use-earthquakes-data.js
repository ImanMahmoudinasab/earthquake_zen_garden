import data from "@Zen/data/data.json";

function useEarthquakesData() {
  const earthquakes = data.data.features.map((feature) => {
    return {
      id: feature.id,
      place: feature.properties.place,
      magnitude: feature.properties.mag,
      time: feature.properties.time,
    };
  });
  const metaData = data.data.metadata;

  return {
    earthquakes,
    metaData,
  };
}

export default useEarthquakesData;
