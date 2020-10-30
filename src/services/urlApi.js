import Axios from 'axios';

export const fetchAllMenu = (page,limit) => {
    return Axios.get(`${process.env.REACT_APP_API_URL}/product?page=${page}&limit=${limit}`);
};