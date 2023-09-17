import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Posts from "./Posts";
import PostInput from "./PostInput";
import PostsSlider from "./PostsSlider";

const Main = () => {
  return (
    <div className="p-4">
      <PostInput />
      <hr className="mb-8" />
      <PostsSlider />
      <Posts />
    </div>
  );
};

export default Main;
