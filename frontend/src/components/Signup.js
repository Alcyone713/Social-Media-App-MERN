import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./signUp.css";
// import M from 'materialize-css';


export default function Signup() {
    const [name, setName] = useState("")
    const [password, setPasword] = useState("")
    const [email, setEmail] = useState("")
    const [confirm, setConfirm] = useState("")
   
    const history = useNavigate();
    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            // M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }

        fetch("/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            password,
            email,
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.error){
            // M.toast({html: data.error,classes:"#c62828 red darken-3"})
         }
         else{
            //  M.toast({html:data.message,classes:"#43a047 green darken-1"})
             history('/signin')
         }
    }).catch(err=>{
        console.log(err)
    })
    }

    return <div>
        <div className="containerX">
            <div className="content">
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Enter your username" value={name}
                                onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter your email" required value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" placeholder="Enter your password" required value={password}
                                onChange={(e) => setPasword(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm</span>
                            <input type="text" placeholder="Confirm your password" required value={confirm}
                                onChange={(e) => setConfirm(e.target.value)} />
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Register" onClick={()=>PostData()} />
                    </div>
                    <div>
                        <h4>Already have an account?</h4>
                        <Link class="nav-link" to="/signin">Sign In </Link>
                    </div>
                </form>
            </div>
        </div>

    </div>;
}
