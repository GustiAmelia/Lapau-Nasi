import Axios from 'axios';
import {ToastContainer, toast,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const fetchAllMenu = (page,limit) => {
    return Axios.get(`${process.env.REACT_APP_API_URL}/product?page=${page}&limit=${limit}`);
};

export const addTransation =(data)=>{
    return Axios.post(`${process.env.REACT_APP_API_URL}/transaction`,data)
    .then(res=>{
        if(res.data.isSuccess){
          toast('Success',{
            className:'uploadSuccess',
            draggable:true,
            autoClose:5000,
            transition:Bounce,
          })
        }
        else{
          toast.error('Failed',{
            className:'uploadFailed',
            draggable:true,
            autoClose:5000,
            transition:Bounce,
          })
        }
      })
      .catch(err=>{
        toast.error('Network Error',{
          draggable:true,
          autoClose:false,
        })
      })
}
