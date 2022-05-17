import { useState } from 'react';
import { db } from "./Firebase.js";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = ({blog}) => {

    const [title, setTitle] = useState(blog.title);
    const [author, setAuthor] = useState(blog.author);
    const [body, setBody] = useState(blog.body);

    const navigate = useNavigate();
    const {id} = useParams();

    const docRef = doc(db, "blogs", id);

    const handleSubmit = e => {

        e.preventDefault();

        updateDoc(docRef, {

            title: title,
            author: author,
            body: body

        }).then(() => {

            console.log(`Updated blog of id: ${id}`);
            navigate("/");

        });

    };

    return (
        
        <form id="update-blog" onSubmit={handleSubmit}>

            <div id="update-title">

                <p>Your Current Blog Title is: <strong>{blog.title}</strong></p>
                <label htmlFor="new-title">New Title: </label><br/>
                <input type="text" id="new-title" value={title} onChange={event => setTitle(event.target.value)}></input>
                <br/><br/>

            </div>

            <div id="update-author">

                <p>Your Current Blog Author is: <strong>{blog.author}</strong></p>
                <label htmlFor="new-author">New Author: </label><br/>
                <input type="text" id="new-author" value={author} onChange={event => setAuthor(event.target.value)}></input>
                <br/><br/>

            </div>

            <div id="update-body">

                <label htmlFor="new-body">New Body: </label><br/>
                <textarea id="new-body" cols="50" rows="10" value={body} onChange={event => setBody(event.target.value)}></textarea>

            </div>  

            <button>Submit</button>                          

        </form>

    );

};

export default UpdateBlog;