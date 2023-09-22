import axios from 'axios';

const params = {
    headers:{
       
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

export const fetchDataFromApi = async (url)=>{
try {
    const { data } = await axios.get(`${process.env.REACT_APP_GET_DEV}${url}`, params);
    return data;
    } catch (error) {
     console.log(error);
     return error;   
    }
}