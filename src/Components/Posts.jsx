import { useState, useEffect } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";
import { SimpleGrid } from "@chakra-ui/react";
import Spinner from "./Spinner";
import PostCard from "./PostCard";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const docRef = collection(db, "Posts");

        const q = query(
          docRef,
          where("type", "==", "post"),
          orderBy("timestamp", "desc")
        );

        const querySnap = await getDocs(q);

        let posts = [];

        querySnap.forEach((doc) => {
          return posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <SimpleGrid spacing={10} minChildWidth="400px" mb="20px">
        {posts
          ? posts.map((post) => <PostCard key={post.id} post={post} />)
          : ""}
      </SimpleGrid>
    </>
  );
};

export default Posts;
