import { useNavigate, useParams } from "react-router-dom";
import { useFetchSingle } from "./CustomHooks.js";

const BlogDetails = () => {

    const {id} = useParams();

    const {blog, isLoading} = useFetchSingle(id);

    const navigate = useNavigate();

    const handleUpdate = e => {

        e.preventDefault();

        navigate(`/blogs/${id}/update`);

    };

    return (

        <div id="blog-details">

            {isLoading && (<div>Loading....</div>)}

            {blog && (

                <article>

                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>

                    <div id="blog-body">{blog.body}</div>

                    <button onClick={handleUpdate}>Update Blog</button>

                </article>

            )}

        </div>

    );

};

export default BlogDetails;