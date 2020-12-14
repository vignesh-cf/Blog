import { NewPost } from "./NewPost";
import { PublishedPosts } from "./PublishedPosts";
import { useSelector } from "react-redux";

export const Content = () => {
  const screen = useSelector(state => state.screen);

  if (screen === "new_post") return <NewPost />;
  else return <PublishedPosts />;
};
