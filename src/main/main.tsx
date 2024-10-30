import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore' 
import { db } from '../config/firebase'
import Posts from './Posts'


export interface Post{
  id:string,
  userId:string,
  title:string,
  description:string,
}

const Main = () => {
  const postsRef=collection(db,"posts");
  const [postsList,setPostsList]=useState<Post[] |null>(null);

  const getPosts=async()=>{
    const data=await getDocs(postsRef)
    setPostsList(data.docs.map((doc)=>({...doc.data(),id: doc.id})) as Post[])
  }

  useEffect(()=>{
    getPosts();
  },[]);

  getPosts();

  return (
    
    <div>
      {postsList?.map((post)=><Posts post={post}/>)}
    </div>
  )
}

export default Main
