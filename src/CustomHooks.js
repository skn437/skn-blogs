import { db } from "./Firebase.js";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy, doc } from "firebase/firestore";

const useFetch = () => {

    const colRef = collection(db, "blogs");

    const q = query(colRef, orderBy("createdAt", "desc"));

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
        
    useEffect(() => {

        onSnapshot(q, snapshot => {

            let blogProto = [];
                        
            snapshot.docs.forEach(doc => {
                        
                blogProto.push({...doc.data(), id: doc.id});
                        
            });
                        
            setBlogs(blogProto);
            setIsLoading(false);
     
        });

    }, []);

    console.log(`Fetched Data: `, blogs);
        
    return {blogs, isLoading};

};

const useFetchSingle = id => {

    const [blog, setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const docRef = doc(db, "blogs", id);

    useEffect(() => {

        onSnapshot(docRef, doc => {

            let blogProto = [];
    
            blogProto.push({...doc.data(), id: doc.id});
    
            setBlog(blogProto);
            setIsLoading(false);
    
        });

    }, []);

    console.log(`Fetched Data: `, blog);

    return {blog, isLoading};

};

export {useFetch, useFetchSingle};
