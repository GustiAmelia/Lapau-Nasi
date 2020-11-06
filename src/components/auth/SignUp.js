import React,{useState} from 'react';

const SignUp = ()=> {

  const [form,setForm]=useState({
    email:'',
    password:'',
    fullname:''
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
        <h1 className='titleAuth'>Sign Up</h1>
        <div className="form-group">
          <label for="fullname">Fullname</label>
          <input type="text" className="form-control " id="fullname" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control " id="email" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control " id="password" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <button type='submit' className='btn btn-signin'>Sign Up</button>
        </div>
      </form>
    </div>
  )
  
}

export default SignUp

