import { Link } from "react-router-dom";
import { db } from "./Firebase.js";
import{ deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const BlogList = ({blogs, heading}) => {

    const navigate = useNavigate();

    const handleDelete = id => {

        const docRef = doc(db, "blogs", id);

        deleteDoc(docRef).then(() => {

            console.log(`Blog Deleted of id: ${id}`);
            navigate("/");

        });

    };

    return (

        <div id="blog-list">

            <h2>{heading}</h2>

            {blogs.map(blog => (
                
                <div className="blog-preview" key={blog.id}>

                    <Link to={`/blogs/${blog.id}`} className="blog-detailed">

                        <h2>{blog.title}</h2>

                        <div className="blog-flex">

                            <p>Written by: {blog.author}</p>
                            <button className="delete" onClick={() => handleDelete(blog.id)}>Delete</button>

                        </div>

                    </Link>

                </div>
               
            ))}

        </div>

    );

};

export default BlogList;