import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./Firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Create = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("Geralt");
    const [body, SetBody] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const colRef = collection(db, "blogs");

    const handleSubmits = event => {

        event.preventDefault();

        setIsLoading(true);

        addDoc(colRef, {

            title: title,
            author: author,
            body: body,
            createdAt: serverTimestamp()

        }).then(() => {

            setIsLoading(false);
            navigate("/");

        });

    };

    return (

        <div id="create-blog">

            <h2>Create New Blog</h2>   

            <form id="wrapper-form" onSubmit={handleSubmits}>

                <div id="title-wrapper">

                    <label htmlFor="title-entry" className="label">Blog Title:</label><br/>
                    <input type="text" id="title-entry" placeholder="write title..." value={title} onChange={event => setTitle(event.target.value)} required></input>
                    <br/><br/>

                </div>

                <div id="author-wrapper">

                    <label htmlFor="author-entry" className="label">Blog Author: </label>

                    <select id="author-entry" value={author} onChange={event => setAuthor(event.target.value)}>

                        <option value="Geralt">Geralt</option>
                        <option value="SKN">SKN</option>
                        <option value="Triss">Triss</option>
                    
                    </select>
                    <br/><br/>

                </div>

                <div id="body-wrapper">

                    <label htmlFor="body-entry" className="label">Blog Body: </label><br/>
                    <textarea id="body-entry" cols="50" rows="10" placeholder="write something...." value={body} onChange={event => SetBody(event.target.value)} required></textarea>

                </div>

                {!isLoading && (<button className="button">Add Blog</button>)}
                {isLoading && (<button disabled className="button">Adding Blog</button>)}

            </form>             

        </div>

    );

};

export default Create;