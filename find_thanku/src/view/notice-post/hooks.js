import { useEffect, useState } from "react";

export const useNoticePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getInitialPosts = async () => {
      console.log(window.location.pathname);

      const url = window.location.pathname;
      const request = await fetch("http://localhost:4000" + url, {
        method: "GET",
      });

      if (!request.ok) {
        alert("서버 죽음");
        return;
      }

      const data = await request.json();

      setPosts(data);
      console.log(data);
    };

    getInitialPosts();
  }, []);

  return {
    posts,
  };
};