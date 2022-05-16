import UpdateBlog from "./UpdateBlog.js";
import { useFetchSingle } from "./CustomHooks.js";
import { useParams } from "react-router-dom";

const Update = () => {

    const {id} = useParams();

    const {blog, isLoading} = useFetchSingle(id);

    return (

        <div id="update-wrapper">

            <h2>Update Blog</h2>

            {isLoading && (<div>Loading....</div>)}
            {blog && (<UpdateBlog blog={blog}></UpdateBlog>)}

        </div>

    );

};

export default Update;