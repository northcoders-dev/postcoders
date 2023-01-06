import axios from "axios";

export const getAreaData = async (postCode) => {
  const { data } = await axios.get(`https://api.zippopotam.us/GB/${postCode}`);

  console.log(data.places);
  return data.places;
};
