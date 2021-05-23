import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
<div>
<div className ='container'>
                  
                  <div className ="card">
                      <h1> Welcome </h1>
                  </div>
                   <form  className ='signup-form'>
                   <h1>Sign up</h1>
                   <label htmlFor ='name'>First Name:</label>
                   <input type ='text' id= 'fname' name ='fname'/>
                   <label htmlFor ='name'>Last Name:</label>
                   <input type ='text' id= 'lname' name ='lname'/>              
                        <label htmlFor ="email">Email: </label>
                        <input type = "email" id ="email" name ="email"/>                    
                        <label htmlFor = "password">Password: </label>
                        <input type ="password" id = "password" name ="password"/>
                        <label htmlFor = "password">Confirm Password: </label>
                        <input type ="password" id = "cpassword" name ="cpassword"/> 
                        <button className ="btn-form"> Sign up</button>
                        <p>Already have an account <Link to  ='/'>Login</Link></p>
                       
                   </form>
                   
               </div>
</div>
    )
}

export default Signup
