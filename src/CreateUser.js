import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from './Firebase';

const CreateUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = e => {

        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then(() => {


        }).catch(err => {

            console.log(err.message);

        });

    };

    return (

        <div id="sign-up-wrapper">

            <h2>Create Account</h2>

            <form id="user-cred" onSubmit={handleSignUp}>

                <label htmlFor="email">Your Email: </label>
                <input type="email" id="email" className="input" placeholder="enter email..." value={email} onChange={event => setEmail(event.target.value)}></input>
                <br/><br/>

                <label htmlFor="password">Your Password: </label>
                <input type="password" id="password" className="input" placeholder="enter password..." value={password} onChange={event => setPassword(event.target.value)}></input>

                <button>Create Account</button><br/>

            </form>

        </div>

    );

};
 
export default CreateUser;