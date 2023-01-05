import axios from "axios";

export const getAreaData = async (outCode) => {
  const { data } = await axios.get(`https://api.zippopotam.us/GB/${outCode}`);

  return { places: data.places, outCode };
};
