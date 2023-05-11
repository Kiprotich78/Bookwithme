import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const [loading, setloading] = useState( )
    const [error, seterror] = useState()
    const [success, setsuccess] =useState()




    async function register() {
        if (password == cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }

            try {
                setloading(true)
                 const result=await axios.post('/api/users/register', user).data
                 setloading(false)
                 setsuccess(true)

                 setname('')
                 setemail('')
                 setpassword('')
                 setcpassword('')

                 localStorage.setItem('currentuser', JSON.stringify(result));
                 window.location.href='/home'

            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(true)
            }
        }
        else {
            alert("password do not march")
        }
    }

    return (
        <div>
            {loading && (<h1>loading please wait!!...</h1>)}
            {error && (<h1>error please try again...</h1>)}
            {success && (<h1>Your Registration is a success...</h1>)}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5'>
                    <div className='bs'>
                        <h2>Register</h2>
                        <input type="text" className='form-control' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='confim password' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className='btn btn-primary mt-3' onClick={register}>Register</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Register