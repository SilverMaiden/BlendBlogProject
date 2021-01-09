import * as React from "react";
import Blog from "./Blog/Blog";
import { useSelector, useDispatch} from 'react-redux';
import { getAllBlogPosts } from '../redux/actions/blogpostActions';

function Home(props: any) {
  const dispatch = useDispatch();/*
  const mapDispatchToProps = (dispatch: any) => {
    dispatch(getAllBlogPosts)
  };  */

  React.useEffect(() => {
    // Axios get request for blogs, for now users
    dispatch(getAllBlogPosts())
  }, [dispatch]);

  const allBlogs = useSelector((state: any) => state.blogpostReducer.allBlogPosts);

  return (
    <div className="Home">
      <header className="Home-header">
      </header>
      <Blog />
    </div>
  );
}

export default Home;