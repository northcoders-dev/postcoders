import axios from 'axios';

export const getAreaData = async () => {
    const { data } = await axios.get('https://api.zippopotam.us/GB/bb10');

    return data.places;
};


export const getByPostCode = async (po) => {
    const {data} = await axios.get(`https://api.zippopotam.us/GB/${postcode}`);
     return data.places;
}