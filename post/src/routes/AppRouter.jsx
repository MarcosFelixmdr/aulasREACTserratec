import { Route, Routes } from "react-router-dom";
import Feed from "../screens/Feed";
import Post from "../screens/Post";
import Update from "../screens/Update";
import More from "../screens/More";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/update" element={<Update />} />
      <Route path="/more" element={<More />} />
    </Routes>
  );
};

export default AppRouter;
