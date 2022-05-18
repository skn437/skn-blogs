import { db } from "./Firebase.js";
import { useState } from "react";
import { collection, onSnapshot, query, orderBy, doc } from "firebase/firestore";

const useFetch = () => {

    const colRef = collection(db, "blogs");

    const q = query(colRef, orderBy("createdAt", "desc"));

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
        
    onSnapshot(q, snapshot => {

        let blogProto = [];
                    
        snapshot.docs.forEach(doc => {
                    
            blogProto.push({...doc.data(), id: doc.id});
                    
        });
                    
        setBlogs(blogProto);
        setIsLoading(false);
 
    });
        
    return {blogs, isLoading};

};

const useFetchSingle = id => {

    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const docRef = doc(db, "blogs", id);

    onSnapshot(docRef, doc => {

        let blogProto = {...doc.data(), id: doc.id};

        setBlog(blogProto);
        setIsLoading(false);

    });

    return {blog, isLoading};

};

export {useFetch, useFetchSingle};
