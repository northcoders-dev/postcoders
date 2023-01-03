import axios from "axios";

export const getAreaData = async (postCode) => {
  if (postCode) {
    const { data } = await axios.get(
      `https://api.zippopotam.us/GB/${postCode}`
    );
    return data.places;
  } else {
    return [];
  }
};
