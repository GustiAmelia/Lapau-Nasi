import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signInCreator} from '../../redux/actions/auth';
import {Redirect,Link} from 'react-router-dom';

const SignIn = ()=> {

  const dispatch = useDispatch();

  const authError = useSelector((state)=>state.auth.authError)

  const [form,setForm]=useState({
    email:'',
    password:'',
    errorMessage:null,
  })
  const handleChange = (e)=>{
    setForm({...form,
      [e.target.id]:e.target.value,
      errorMessage:null
    })
  }
  const handleSumbit = (e)=>{
    e.preventDefault();
    dispatch(signInCreator(form))
    setForm({
      ...form,
      errorMessage:authError
    })
  }
  
  const isLogin = useSelector((state)=>state.auth.isLogin)
  if(isLogin) return <Redirect to='/'/>
  return (
    <div className='container-fluid auth'>
      <form className='col-md-4 form-login' onSubmit={handleSumbit}>
        <h1 className='titleAuth'>Sign In</h1>
        <div className='errorMessage'>
          {form.errorMessage === null ? null : 
          <p>Incorrect email or password</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control " id="email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control " id="password" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-signin'>Sign In</button>
        </div>
        <div className='link-wrapper'>
          <p>Don’t have an account? Let’s
            <Link to='/signup'>
              <span className='link'> Sign Up</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
  
}

export default SignIn
