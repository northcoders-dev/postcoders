import axios from "axios";

export const getAreaData = async (finalPostcode) => {
  const { data } = await axios.get(
    `https://api.zippopotam.us/GB/${finalPostcode}`
  );

  return data.places;
};
