import axios from 'axios';

export const getAreaData = async (outcode="bb10") => {
    const { data } = await axios.get(`https://api.zippopotam.us/GB/${outcode}`);

    return data.places;
};
