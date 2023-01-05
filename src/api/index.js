import axios from 'axios';

export const getAreaData = async (areaCode) => {

    const { data } = await axios.get(`https://api.zippopotam.us/GB/${areaCode}`);
    return data.places;
};
