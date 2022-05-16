import BlogList from "./BlogList.js";
import { useFetch } from "./CustomHooks.js";

const Home = () => {

    const {blogs, isLoading} = useFetch();

    return (

        <div id="home" className="home">

            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} heading="All Blogs"></BlogList>}

        </div>

    );

};

export default Home;