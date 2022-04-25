import data from "@Zen/data/data.json";

function useCurrentUserData() {
  return {
    user: data.profile,
  };
}

export default useCurrentUserData;
