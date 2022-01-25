import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../App';

import './signin.css';

export default function SignIn() {

	// const { state, dispatch } = useContext(UserContext)

	const history = useNavigate();
	const [password, setPasword] = useState("")
	const [email, setEmail] = useState("")

	const PostData = () => {
		if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
			// M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
			return
		}

		fetch("/signin", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				password,
				email,
			})
		}).then(res => res.json())
			.then(data => {
				if (data.error) {
					//M.toast({ html: data.error, classes: "#c62828 red darken-3" })
				}
				else {
					//M.toast({ html: data.message, classes: "#43a047 green darken-1" })
					localStorage.setItem("jwt", data.token);
					localStorage.setItem("user", JSON.stringify(data.user));
					// dispatch({ type: "USER", payload: data.user })
					history('/mainpage');
				}
			}).catch(err => {
				console.log(err)
			})
	}
	return <div>
		<div className="screen">
			<div className="screen__content">
				<form className="login">
					<div className="login__field">
						<i className="login__icon fas fa-user"></i>
						<input type="text" className="login__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="login__field">
						<i className="login__icon fas fa-lock"></i>
						<input type="password" className="login__input" placeholder="Password" value={password}
							onChange={(e) => setPasword(e.target.value)} />
					</div>
					<button className="button login__submit" type="submit" onClick={() => PostData()}>
						<span className="button__text">Log In Now</span>
						<i className="button__icon fas fa-chevron-right"></i>
					</button>
				</form>
				<div className="social-login">
					<h5>Don't have an account?</h5>
					<Link class="nav-link" to="/signup" style={{ color: "black" }}>Sign Up</Link>
				</div>
			</div>
			<div className="screen__background">
				<span className="screen__background__shape screen__background__shape4"></span>
				<span className="screen__background__shape screen__background__shape3"></span>
				<span className="screen__background__shape screen__background__shape2"></span>
				<span className="screen__background__shape screen__background__shape1"></span>
			</div>

		</div>
	</div>;
}
