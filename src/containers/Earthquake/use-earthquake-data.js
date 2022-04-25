import data from "@Zen/data/data.json";

function useEarthquakesData(id) {
  const feature = data.data.features.find((feature) => feature.id === id);
  const earthquake = feature && {
    id: feature.id,
    place: feature.properties.place,
    magnitude: feature.properties.mag,
    time: feature.properties.time,
    title: feature.properties.title,
    tsunami: feature.properties.tsunami,
    type: feature.properties.type,
    status: feature.properties.status,
  };
  const metaData = data.data.metadata;

  return {
    earthquake,
    metaData,
  };
}

export default useEarthquakesData;
