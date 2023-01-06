import axios from "axios";

export const getAreaData = async (postcode) => {
  if (postcode.length === 0) return [];
  const { data } = await axios.get(`https://api.zippopotam.us/GB/${postcode}`);
  return data.places;
};
