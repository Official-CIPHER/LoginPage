import React, { useState } from 'react'

const Login = () => {
    //   email useState
    const [email, setEmail] = useState("");
    // password useState
    const [password, setPassword] = useState("");
    
    const [allEntery, setAllEntery] = useState([]);

    const submitForm=(e) =>{
        e.preventDefault();


         const newEntry ={email:email, password:password};

         setAllEntery([...allEntery,newEntry]);
         console.log(allEntery);
    }

  return (
    <>
    <div className='flex flex-col h-screen justify-center items-center bg-gradient-to-b from-slate-500 to-gray-700'>
        {/* form element */}
        <form action="" onSubmit={submitForm} className='bg-blue-500 backdrop-blur-sm p-12 rounded-xl'>
            <div className='flex flex-col'>
                {/* label 1 email*/}
                <label htmlFor="email" className='text-center text-2xl font-serif  text-white'>Email</label>
                
                {/* input 1 email */}
                <input type="text" name='email' id='email' className='mt-3 rounded-md border-[2px] border-slate-300 text-lg  text-opacity-5 ' placeholder='Enter Your Email'
                autoComplete='off'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
                {/* label 2* password/}
                <label htmlFor="password" className='mt-5 text-center text-2xl font-serif  text-white'>Password</label>
                
                {/* input 2 password  */}
                <input type="password" name='password' id='password' className='my-3 rounded-md border-[2px] border-slate-300 text-lg  
                text-opacity-5' placeholder='Enter Your Password' autoComplete='off'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <button type='submit' className='bg-gray-500 px-3 py-2 my-4 rounded-lg text-white font-semibold hover:scale-105 duration-300 hover:bg-gray-900'>Login</button>
        </form>

        <div className='my-5'>
            {/* show email and password on screen */}
            {
                allEntery.map((currEle)=>{
                    return(
                        <div className='text-white text-2xl bg-gray-500 bg-opacity-40 backdrop-blur-3xl md:px-10 md:py-3 px-5 flex rounded-md md:space-x-40 duration-300'>
                            <p>Email: {currEle.email}</p>
                            <p>Password: {currEle.password}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Login