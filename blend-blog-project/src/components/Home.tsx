import * as React from "react";
import Blog from "./Blog/Blog";
import { useSelector, useDispatch} from 'react-redux';
import { getAllBlogPosts } from '../redux/actions/blogpostActions';
import { getUser } from '../redux/actions/userActions';

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
  const user = useSelector((state:any) => state.userReducer.id);
  console.log(user)
  return (
    <div className="Home">
      <header className="Home-header">
      </header>
      <Blog props={user}/>
    </div>
  );
}

export default Home;