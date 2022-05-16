import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "./Firebase";

const SignInOut = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = e => {

        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then(() => {


        }).catch(err => {

            console.log(err.message);

        });

    };

    const handleSignOut = e => {

        e.preventDefault();

        signOut(auth).then(() => {


        }).catch(err => {

            console.log(err.message);

        });

    };

    return (

        <div id="sign-in-out">

            <h2>Sign In/Out</h2>

            <form>

                <label htmlFor="sign-email">Enter Email: </label>
                <input type="email" id="sign-email" placeholder="enter email...." value={email} onChange={e => setEmail(e.target.value)} required></input>
                <br/><br/>

                <label htmlFor="sign-password">Enter Password: </label>
                <input type="password" id="sign-password" placeholder="enter password...." value={password} onChange={e => setPassword(e.target.value)} required></input>

                <button onClick={handleSignIn}>Login</button>
                <button onClick={handleSignOut}>Logout</button>

            </form>

        </div>

    );

};
 
export default SignInOut;