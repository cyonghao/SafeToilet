import axios from 'axios';

const URL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location'

export const fetchToilets = async (lat, long) => {
    const { data } = await axios.get(URL, {
        params: {
            page: 1,
            per_page: 10,
            offset: 0,
            lat: lat,
            lng: long,
        }
    });

    return data;
}