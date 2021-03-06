import Axios from 'axios';
import {toast,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const fetchAllMenu = (page) => {
//     return Axios.get(`${process.env.REACT_APP_API_URL}/product?page=${page}&limit=6`);
// };
export const fetchAllMenu = () => {
  return Axios.get(`${process.env.REACT_APP_API_URL}/product`);
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

export const fetchAllCategory = ()=>{
    return Axios.get(`${process.env.REACT_APP_API_URL}/category`);
}

export const addNewProduct = (data)=>{
    let formData = new FormData();
    formData.append('product_name',data.name);
    formData.append('product_image',data.image);
    formData.append('price',data.price);
    formData.append('category_id',data.category_id);

    const configHeader = {
      headers: {
        'content-type': 'multipart/form-data',
        contentType: false,
        mimeType: 'multipart/form-data',
        'cache-control': 'no-cache',
        accept: 'application/json',
      },
    };
    
    return Axios.post(`${process.env.REACT_APP_API_URL}/product`,formData,configHeader)
    .then(res=>{
      if(res.data.isSuccess){
        toast('Upload Product Success',{
          className:'uploadSuccess',
          draggable:true,
          autoClose:5000,
          transition:Bounce,
        })
      }
      else{
        toast.error('Upload Product Failed!, please fill in the form first',{
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

export const signIn =(credentials)=>{
  return Axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,{
    email:credentials.email,
    password:credentials.password,
  })
}

export const signUp =(newUser)=>{
  return Axios.post(`${process.env.REACT_APP_API_URL}/auth/register`,{
    fullname : newUser.fullname,
    email:newUser.email,
    password: newUser.password,
    level_id:2
  })
}

export const history = ()=>{
  return Axios.get(`${process.env.REACT_APP_API_URL}/history`)
}

export const deleteProduct =(id)=>{
  return Axios.delete(`${process.env.REACT_APP_API_URL}/product?id=${id}`)
}

export const editProduct =(id,data)=>{
  let formData = new FormData();
    formData.append('id',id)
    formData.append('product_name',data.name);
    formData.append('product_image',data.image);
    formData.append('price',data.price);
    formData.append('category_id',data.category_id);

    const configHeader = {
      headers: {
        'content-type': 'multipart/form-data',
        contentType: false,
        mimeType: 'multipart/form-data',
        'cache-control': 'no-cache',
        accept: 'application/json',
      },
    };
    return Axios.patch(`${process.env.REACT_APP_API_URL}/product`,formData,configHeader)
    .then(res=>{
      if(res.data.isSuccess){
        toast('Edit Product Success',{
          className:'uploadSuccess',
          draggable:true,
          autoClose:5000,
          transition:Bounce,
        })
      }
      else{
        toast.error('Edit Product Failed!, please fill in the form first',{
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