import axios from "axios";

export const getAreaData = async (postcode) => {
  const postcodeQuery = postcode;
  const { data } = await axios.get(
    `https://api.zippopotam.us/GB/${postcodeQuery}`
  );

  return data.places;
};
