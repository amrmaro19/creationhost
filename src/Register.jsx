import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'



export default function Register() {

  let [user, setUser] = useState({
  first_name : '' ,
  last_name : '' ,
  email : '' , 
  age : 0,
  password : '',


  });

  function getUserData(e) {
    let myUser = {...user} //copy user
    myUser[e.target.name] = e.target.value
    setUser(myUser)

    

    
  }


 async function submitRegisterForm(e) {
    e.preventDefault();
    let validateResault = validatRegisterForm()
    console.log(validateResault)
    let response = await axios.post('https://route-egypt-api.herokuapp.com/signup' , user)


  }

  function validatRegisterForm() {

    let scheme = Joi.object({
      first_name : Joi.string().alphanum().min(3).max(10).required(),
      last_name : Joi.string().alphanum().min(3).max(10).required(),
      age : Joi.number().min(16).max(30).required(),
      // email : Joi.string().email().required,
      password: Joi.string().min().max().required(),
      


    })

    return scheme.validate(user , {abortEarly:false})

    
  }





  return (
    <div >


        <div className='mx-auto w-75'>

            
     <h2>Register Now</h2>
     <form onSubmit={submitRegisterForm}>

        <label className='first_name'>first_name:</label>
        <input onChange={getUserData} className='form-control mb-2 ' id='first_name' name='first_name'></input>


        <label className='last_name'>last_name:</label>
        <input onChange={getUserData} className='form-control mb-2 ' id='last_name' name='last_name'></input>


        <label className='email'>email:</label>
        <input onChange={getUserData} className='form-control mb-2 ' id='email' name='email' type="email"></input>


        <label className='age'>age:</label>
        <input onChange={getUserData} className='form-control mb-2 ' id='age' name='age' type="number"></input>


        <label className='password'>password:</label>
        <input onChange={getUserData} className='form-control mb-2 ' id='password' name='password' type="password"></input>



        <button type='submit' className='btn btn-outline-info'>Register</button>










     </form>










        </div>


     
        



 







    </div>
  )
}
