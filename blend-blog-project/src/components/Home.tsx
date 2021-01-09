import * as React from "react";
import Blog from "./Blog/Blog";
import { useSelector, useDispatch, connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getAllBlogPosts } from '../redux/actions/blogpostActions';
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { AppContext } from "../contexts/AppContext";

// Need to make and test logout button that clears token

//const initialState: Array<any> = [];

function Home(props: any) {
  const dispatch = useDispatch();/*
  const mapDispatchToProps = (dispatch: any) => {
    dispatch(getAllBlogPosts)
  };  */

  const [blogs, setBlogs] = React.useState([])
  React.useEffect(() => {
    // Axios get request for blogs, for now users
    dispatch(getAllBlogPosts())
    //setBlogs(allBlogs)
  }, []);

  // TODO - update typescript any for state
  //const tokenPresent = useSelector((state: any) => state.userReducer.tokenPresent);

  const allBlogs = useSelector((state: any) => state.blogpostReducer.allBlogPosts);
  // handleClick for logout button
  //dispatch(getAllBlogPosts());
  const handleLogOut = () => {
    console.log("clicked");
    window.localStorage.clear();
    console.log(window.localStorage.getItem("token"));
    window.history.pushState({}, "logged out", "/login");
    window.location.reload();
  };
  return (
    <div className="Home">
      <header className="Home-header">
        This will be the home page with lots of blogs present.
        {allBlogs.length > 0 && <p>{allBlogs[0]["blogpost_title"]}</p>
        }
        <p>
          <button onClick={handleLogOut}>Logout</button>
        </p>
      </header>
      <Blog />
    </div>
  );
}
// Connecting will allow FormikLogInForm to access loginUser dispatch function
/*
const ConnectedLogInForm = connect(
  null,
  mapDispatchToProps
)(Home);
*/
export default Home;