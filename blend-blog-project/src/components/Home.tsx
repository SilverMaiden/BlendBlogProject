import * as React from "react";
import { useHistory } from "react-router-dom";
import { getAllBlogPosts } from '../redux/actions/blogpostActions';
import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { AppContext } from "../contexts/AppContext";


// Need to make and test logout button that clears token

const initialState: Array<any> = [];

function Home() {

  const [blogs, setBlogs] = React.useState([])
  React.useEffect(() => {
    // Axios get request for blogs, for now users
    getAllBlogPosts()
  }, []);

  // handleClick for logout button

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
        {blogs.length > 0 && <p>{blogs[0]["blogpost_title"]}</p>
        }
        {console.log(blogs[0]["blogpost_title"])}
        <p>
          <button onClick={handleLogOut}>Logout</button>
        </p>
      </header>
    </div>
  );
}

export default Home;