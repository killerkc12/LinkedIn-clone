import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../Firebase/Firebase'
import './Login.css'

const linkedInIcon = 'https://carers-network.org.uk/wp-content/uploads/2020/05/Linkedin-Logo-2003%E2%80%932011.png'

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const register = () => {
        if(!name) {
            return alert("Please enter a full name")
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then(userAuth=> {
            // userAuth.user
            // .updateProfile({
            //     displayName: name,
            //     photoURL: profilePic
            // })
            // .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    phptoURL: profilePic
                }))
            // })
        })
        .catch(err=> {
            alert(err.message)
        })
    }

    const logintoApp = (e) => {
        e.preventDefault()
    }

    return (
        <div className='login'>
            <img src={linkedInIcon} alt="llinked is icon" />
            <form>
                <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Full Name" />
                <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL" />
                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit" onClick={logintoApp}>Sign In</button>
            </form>
            <p>Not a member? 
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login