import axios from "axios";

export const getAreaData = async (outCode) => {
  try {
    const { data } = await axios.get(`https://api.zippopotam.us/GB/${outCode}`);

    return { places: data.places, outCode };
  } catch (error) {
    console.log(error);
  }
};
