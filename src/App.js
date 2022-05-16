import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import BlogDetails from "./BlogDetails.js";
import Update from "./Update.js";
import NotFound from "./NotFound.js";
import CreateUser from "./CreateUser.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInOut from "./SignInOut.js";

const App = () => {
  
    return (

        <Router>

            <div id="App" className="App">

                <Navbar></Navbar>

                <div id="content" className="content">

                    <Routes>

                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/create" element={<Create></Create>}></Route>
                        <Route path="/blogs/:id" element={<BlogDetails></BlogDetails>}></Route>
                        <Route path="/blogs/:id/update" element={<Update></Update>}></Route>
                        <Route path="/create-user" element={<CreateUser></CreateUser>}></Route>
                        <Route path="/sign-in-out" element={<SignInOut></SignInOut>}></Route>
                        <Route path="*" element={<NotFound></NotFound>}></Route>

                    </Routes>

                </div>

            </div>

        </Router>

    );

};

export default App;