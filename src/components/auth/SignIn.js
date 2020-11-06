import React,{useState} from 'react';

const SignIn = ()=> {

  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const handleChange = (e)=>{
    setForm({...form,
      [e.target.id]:e.target.value
    })
  }
  const handleSumbit = (e)=>{
    e.preventDefault();
    console.log(form)
  }
  
  return (
    <div className='container-fluid auth'>
      <form className='col-md-4 form-login' onSubmit={handleSumbit}>
        <h1 className='titleAuth'>Sign In</h1>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control " id="email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control " id="password" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-signin'>Sign In</button>
        </div>
      </form>
      {/* <form onSubmit={handleSumbit} className='white'>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' onChange={handleChange}/>
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={handleChange}/>
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>
      </form> */}
    </div>
  )
  
}

export default SignIn
