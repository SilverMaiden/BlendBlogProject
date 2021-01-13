import * as React from "react";
import Blog from "./Blog/Blog";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {
  getAllBlogPosts,
  getBlogPostsByUser,
  getFilteredBlogPosts,
  getFavorites,
} from "../redux/actions/blogpostActions";
import { getUser } from "../redux/actions/userActions";

const Home = (props: any) => {
  const dispatch = useDispatch(); /*
  const mapDispatchToProps = (dispatch: any) => {
    dispatch(getAllBlogPosts)
  };  */
  let history = useHistory();
  let string_id = window.localStorage.getItem("id");
  React.useEffect(() => {
    // Axios get request for blogs, for now users
    dispatch(getFilteredBlogPosts("", history));
    if (string_id) {
      let id = parseInt(string_id, 10);
      dispatch(getUser(id));
      dispatch(getBlogPostsByUser(id));
      //dispatch(getFavorites(user));
    }
  }, [dispatch]);

  const user = useSelector((state: any) => state.userReducer.id);
  console.log(user);
  return (
    <div className="Home">
      <header className="Home-header"></header>
      <Blog props={user} />
    </div>
  );
};

export default Home;
