import React from 'react'


const Login = () => {
    return (
        <div>
     
            <div className ="container">
           
           <div className ="card">
               <h1> Welcome </h1>
           </div>
           <div >
               <form className ="login-form">
                   <h1>Login</h1>
                 
                   <label htmlFor ="email">Email: </label>
                   <input type = "email" id ="email" name ="email"/>                    
                   <label htmlFor = "password">Password: </label>
                   <input type ="password" id = "password" name ="password"/>
                   <button className ="btn-form"> Login </button>
                   <p>Don't have an account <a href ='#'>Sign up</a></p>
               </form>


       </div>
       
   </div>
        </div>
    )
}

export default Login


