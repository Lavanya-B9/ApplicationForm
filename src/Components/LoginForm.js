import React, { useEffect, useState } from 'react';
import './LoginFormStyles.css';

const LoginForm = () => {
  const [formData,setFormData] = useState({
    username:'',
    email:'',
    password:'',
    education:'',
    gender:'',
    languages:[],
  });
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const changeHandler = (e) =>{
   if(e.target.name === 'languages'){
    let copy = {...formData}
    if(e.target.checked){
      copy.languages.push(e.target.value)

    }else{
       copy.languages = copy.languages.filter(ele => ele !== e.target.value)

    }
    setFormData(copy);

    }else{
      setFormData({...formData,[e.target.name]:e.target.value});
    }
 }


 const submitHandler = (e) =>{
  e.preventDefault();
  setFormErrors(validateForm(formData));
  setIsSubmit(true);
    
};

useEffect(()=>{
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formData);
  }
})



 const validateForm = (values) =>{
  const err={}
  if(!values.username ){
    err.username = "Username is required"
  }
  if(!values.email){
    err.email = "Email is required"
  }

  if(!values.password){
    err.password = "Password is required"
  }
  else if(values.password.length < 8){
    err.password="Password should be 8 characters"
  }
  else if (values.password.length >10){
    err.password = "Password should not exceed 10 characters"
  }
  if(!values.education){
    err.education = "please select your education"
  }if(!values.gender){
    err.gender = "please select your gender"
  }
  if(values.languages.length < 2){
    err.languages = "please select  languages"
  }
  return err;

 }

 

  return (
    <div className='container'>
      {Object.keys(formErrors).length === 0 && 
      isSubmit ? 
      <h1 className='success-msg'>your application has been successfully submitted</h1> : 
      null}

        <form className='form-container' onSubmit={submitHandler}>
            <h1>Application Form</h1>

          <label className='label'>Username</label>
          <input 
            className='form-control form-inputs'
            type='text'
             placeholder='Username' 
             onChange={changeHandler} 
             name='username'
           />
              <p>{formErrors.username}</p>

            <label className='label'>Email</label>
            <input 
            className='form-control form-inputs' 
            type='email' 
            placeholder=' Email' 
            onChange={changeHandler}  
            name='email'
           />
           <p>{formErrors.email}</p>

            <label className='label'>Password</label>
             <input
              className='form-control form-inputs' 
              type='password' 
              placeholder='password'
               onChange={changeHandler}
                name='password'
                />
                <p>{formErrors.password}</p>

             <label className='label'>Education</label>
             <select className='form-control form-inputs' 
             name='education'
              onChange={changeHandler}>
              <option></option>
              <option>Under Graduation</option>
              <option>Post Graduation</option>
              <option>None</option>
             </select>
             <p>{formErrors.education}</p>

             <label className='label'>Gender</label><br/>
             <div className='form-check form-check-inline'>
             <label className='radio-inputs'>Male</label> 
             <input
              type='radio'
               name='gender'  
               onChange={changeHandler} 
               value='Male' 
           />

           <label className='radio-inputs'>Female</label>
           <input
             type='radio'
              name='gender'  
               onChange={changeHandler} 
               value='Female'
            />

            <label className='radio-inputs'>Other</label>
            <input 
              type='radio'
              name='gender'
              onChange={changeHandler} 
              value='Other'/>
             </div>
             <p>{formErrors.gender}</p>
             <br/>

             <label className='label'>Languages And Technologies</label><br/>
             <div className='form-check'>           
             
             <label className='radio-inputs'>HTML</label>
               <input 
                type='checkbox'
                name='languages' 
                onChange={changeHandler} 
                value='HTML'
              /><br/>

             <label className='radio-inputs'>CSS</label>
             <input 
             type='checkbox' 
             name='languages'  
             onChange={changeHandler} 
             value='CSS'/><br/>
             <label className='radio-inputs'>Javascript</label>
             <input 
               type='checkbox'
               name='languages' 
               onChange={changeHandler} 
               value='Javascript'
               /><br/>

             <label className='radio-inputs'> Bootstrap</label>
             <input 
               type='checkbox'
               name='languages' 
               onChange={changeHandler}
               value='Bootstrap'
              /><br/>

             <label className='radio-inputs'> Material UI</label>
              <input
                type='checkbox'
                name='languages' 
                onChange={changeHandler}
                value='Material UI'
              /><br/>

             <label className='radio-inputs'>React js</label>
             <input
               type='checkbox'
               name='languages' 
               onChange={changeHandler} 
               value='React JS'
              /><br/>
             <label className='radio-inputs'>React Native</label>

             <input 
             type='checkbox' 
             name='languages'
             onChange={changeHandler} 
             value='React Native'
            /><br/>

             <label className='radio-inputs'>Angular</label>
             <input 
               type='checkbox'
               name='languages'  
               onChange={changeHandler} 
               value='Angular'
              /><br/>
             </div>
             <p>{formErrors.languages}</p>

             <button className='btn btn-primary m-5 '>Submit</button>
        </form>
       </div>
  )
}

export default LoginForm