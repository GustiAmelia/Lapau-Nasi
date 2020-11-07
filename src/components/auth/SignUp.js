import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect,Link} from 'react-router-dom';
import {signUpCreator} from '../../redux/actions/auth';

const SignUp = ()=> {

  const dispatch = useDispatch();
  const authError = useSelector((state)=>state.auth.authError)

  const [form,setForm]=useState({
    email:'',
    password:'',
    fullname:'',
    messagePassword:'',
    errorMessage : null,

  })
  const handleChange = (e)=>{
    setForm({...form,
      [e.target.id]:e.target.value,
      messagePassword:'',
      errorMessage:null,
    })
  }
  const handleSumbit = (e)=>{
    e.preventDefault();
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    if (!checkPass.test(form.password)){
      setForm({
        ...form,
        messagePassword:'Password must contain at least 1 number, and be longer than 8 charaters.',
      });
    }
    else{
      dispatch(signUpCreator(form));
      setForm({
        ...form,
        messagePassword:'',
        errorMessage:authError,
      });
    }
  }
  const isLogin = useSelector((state)=>state.auth.isLogin)
  if(isLogin) return <Redirect to='/'/>

  return (
    <div className='container-fluid auth'>
      <form className='col-md-4 form-login' onSubmit={handleSumbit}>
        <h1 className='titleAuth'>Sign Up</h1>
        <div className='errorMessage'>
          {form.errorMessage === null ? null : 
          <p>{form.errorMessage}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Fullname</label>
          <input type="text" className="form-control " id="fullname" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control " id="email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control " id="password" onChange={handleChange}/>
        </div>
        <div>
          {form.messagePassword === '' ? null : 
          <p>{form.messagePassword}</p>}
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-signin'>Sign Up</button>
        </div>
        <div className='link-wrapper'>
          <p>Already have an account? Let’s
            <Link to='/signin'>
              <span className='link'> Login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
  
}

export default SignUp

